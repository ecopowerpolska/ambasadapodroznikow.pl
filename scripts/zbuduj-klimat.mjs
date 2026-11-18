// Buduje public/dane/klimat.json z Open-Meteo (geokodowanie + archiwum ERA5, 2023-2025).
// Użycie: node scripts/zbuduj-klimat.mjs [--od-nowa]
//   bez flagi: wznawia z scripts/klimat-czesciowy.json albo dobiera brakujące cele do gotowego public/dane/klimat.json
//   --od-nowa: pełne odświeżenie (ok. 15 min)
import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const kat = dirname(fileURLToPath(import.meta.url));
const cele = JSON.parse(readFileSync(join(kat, 'klimat-cele.json'), 'utf8'));
const czesc = join(kat, 'klimat-czesciowy.json');
const wyj = join(kat, '..', 'public', 'dane', 'klimat.json');
const OD = '2023-01-01', DO = '2025-12-31', LAT = 3, ODSTEP = 300;
const spij = (ms) => new Promise((r) => setTimeout(r, ms));
const bez = (s) => s.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 .'-]/g, '').trim();

async function pobierz(url) {
  let blad;
  for (let i = 1; i <= 3; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.json();
      blad = new Error('HTTP ' + r.status);
      await spij(r.status === 429 ? 65000 : 1500 * i);
    } catch (e) { blad = e; await spij(1500 * i); }
  }
  throw blad;
}

async function jeden(c) {
  let la = c.la, lo = c.lo;
  if (la == null) {
    const g = await pobierz(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(c.en)}&count=1&language=pl&countryCode=${c.cc}`);
    await spij(ODSTEP);
    if (!g.results?.length) throw new Error('brak wyniku geokodowania');
    la = Math.round(g.results[0].latitude * 100) / 100; lo = Math.round(g.results[0].longitude * 100) / 100;
  }
  const a = await pobierz(`https://archive-api.open-meteo.com/v1/archive?latitude=${la}&longitude=${lo}&start_date=${OD}&end_date=${DO}&daily=temperature_2m_mean,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`);
  const dt = a.daily.time, tt = a.daily.temperature_2m_mean, px = a.daily.temperature_2m_max, pn = a.daily.temperature_2m_min, pp = a.daily.precipitation_sum;
  const sum = Array(12).fill(0), sx = Array(12).fill(0), sn = Array(12).fill(0), n = Array(12).fill(0), dni = Array(12).fill(0);
  dt.forEach((d, i) => {
    const m = +d.slice(5, 7) - 1;
    if (tt[i] != null && px[i] != null && pn[i] != null) { sum[m] += tt[i]; sx[m] += px[i]; sn[m] += pn[i]; n[m]++; }
    if (pp[i] != null && pp[i] >= 1) dni[m]++;
  });
  if (n.some((x) => x < 60)) throw new Error('za mało danych');
  const lat = LAT;
  const t = sum.map((s, m) => Math.round(s / n[m]));
  const tx = sx.map((s, m) => Math.round(s / n[m]));
  const tn = sn.map((s, m) => Math.round(s / n[m]));
  const d = dni.map((x) => Math.round(x / lat));
  const alias = [...new Set([bez(c.n), bez(c.en), ...(c.a || []).map(bez)].filter(Boolean))];
  return { n: c.n, k: c.k, typ: c.typ, a: alias, la, lo, t, tx, tn, d };
}

let wynik = [];
const odNowa = process.argv.includes('--od-nowa');
if (!odNowa && existsSync(czesc)) wynik = JSON.parse(readFileSync(czesc, 'utf8'));
else if (!odNowa && existsSync(wyj)) wynik = JSON.parse(readFileSync(wyj, 'utf8')).m; // dobieranie brakujących do gotowego pliku
wynik = wynik.filter((w) => !w.status && w.tx); // wznowienie: pomijamy błędy i pozycje bez tx
const mam = new Set(wynik.map((w) => w.n + '|' + w.k + '|' + w.typ));
let licz = 0;
for (const c of cele) {
  if (mam.has(c.n + '|' + c.k + '|' + c.typ)) continue;
  let poz;
  try { poz = await jeden(c); }
  catch (e) { poz = { n: c.n, k: c.k, typ: c.typ, a: [bez(c.n)], status: 'NIE USTALONO', powod: String(e.message) }; console.error('NIE USTALONO:', c.n, e.message); }
  wynik.push(poz);
  await spij(ODSTEP);
  if (++licz % 20 === 0) { writeFileSync(czesc, JSON.stringify(wynik)); console.log('zapisano częściowo:', wynik.length, '/', cele.length); }
}
const dobre = wynik.filter((w) => !w.status);
const doc = {
  _meta: {
    zrodlo: 'Open-Meteo (archive API), dane ERA5, licencja CC BY 4.0, https://open-meteo.com/',
    atrybucja: 'Dane pogodowe: Open-Meteo.com (CC BY 4.0)',
    okres: `${OD}..${DO}`,
    odczyt: new Date().toISOString().slice(0, 10),
    opis: 't: średnia dobowa temperatura miesięcy I–XII w °C, tx: średnie dobowe maksimum (dzień), tn: średnie dobowe minimum (noc) — wszystko liczby całkowite, d: dni z opadem ≥ 1 mm w miesiącu (średnio), typ: miasto|kraj (kraj = stolica albo główny kurort), a: aliasy do szukania (małe litery, bez znaków diakrytycznych, PL i EN)',
  },
  m: dobre,
};
mkdirSync(dirname(wyj), { recursive: true });
writeFileSync(wyj, JSON.stringify(doc));
if (existsSync(czesc)) unlinkSync(czesc);
console.log(`gotowe: ${dobre.length} celów, NIE USTALONO: ${wynik.length - dobre.length}`);
