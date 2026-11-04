// Komentarze pod wpisami: pobranie listy przy buildzie (statyczny HTML dla Google) oraz renderowanie pojedynczego
// komentarza — TA SAMA funkcja `htmlKomentarza` służy komponentowi Astro i skryptowi w przeglądarce.
// Kontrakt API: https://api.ecopowerpolska.pl/komentarze.php (GET ?strona=…&wszystkie=1 → { wpisy: { slug: [komentarz] } }).
import konfig from '../data/komentarze.json';

export type Komentarz = { id: string; autor: string; tresc: string; data: string };

const KODY: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Ucieczka znaków HTML — zawsze PRZED zamianą adresów na odnośniki. */
export const ucieknij = (s: string): string => s.replace(/[&<>"']/g, (z) => KODY[z]);

// Adres w tekście już po ucieczce: do pierwszej spacji, ale nie przez zakodowany znak, który zamyka adres.
const ADRES = /(?:https?:\/\/|www\.)(?:(?!&(?:quot|lt|gt|#39);)\S)+/gi;

/** Tekst komentarza → bezpieczny HTML: ucieczka, potem adresy http(s) i www. jako <a rel="ugc nofollow noopener">. */
export function linkify(tresc: string): string {
  return ucieknij(tresc).replace(ADRES, (trafienie) => {
    let adres = trafienie;
    let ogon = '';
    // Zdaniowa interpunkcja na końcu adresu nie należy do niego (średnik zostaje, gdy kończy encję, np. &amp;).
    while (adres) {
      const z = adres.slice(-1);
      if ('.,:!?)]'.includes(z) || (z === ';' && !/&(?:amp|quot|lt|gt|#39);$/.test(adres))) {
        ogon = z + ogon;
        adres = adres.slice(0, -1);
      } else break;
    }
    if (!/^(?:https?:\/\/|www\.)\S/i.test(adres)) return trafienie;
    const href = /^www\./i.test(adres) ? `https://${adres}` : adres;
    return `<a href="${href}" rel="ugc nofollow noopener" target="_blank">${adres}</a>${ogon}`;
  });
}

/** Data po polsku, strefa Warszawy (taka sama na serwerze budującym i w przeglądarce). */
export function dataPoPolsku(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw' }).format(d);
}

/** Jeden komentarz jako <li> (statyka i dopisywanie w przeglądarce). `data-id` pozwala skryptowi nie dublować wpisów. */
export function htmlKomentarza(k: Komentarz): string {
  const id = ucieknij(k.id);
  const dzien = dataPoPolsku(k.data);
  return (
    `<li class="komentarz" id="komentarz-${id}" data-id="${id}">` +
    `<p class="komentarz__glowa"><strong class="komentarz__autor">${ucieknij(k.autor)}</strong>` +
    (dzien ? ` <time class="komentarz__data" datetime="${ucieknij(k.data)}">${dzien}</time>` : '') +
    `</p><p class="komentarz__tresc">${linkify(k.tresc)}</p></li>`
  );
}

/** Podpis liczby komentarzy z odmianą: 1 → liczba1; 2–4 (poza 12–14) → liczba2_4; reszta → liczba5. Zero zostawiamy tekstowi `brak`. */
export function liczbaKomentarzy(n: number, s: { liczba1: string; liczba2_4: string; liczba5: string }): string {
  const jedn = n % 10;
  const szablon = n === 1 ? s.liczba1 : jedn >= 2 && jedn <= 4 && (n % 100 < 12 || n % 100 > 14) ? s.liczba2_4 : s.liczba5;
  return szablon.replaceAll('{n}', String(n));
}

// ── tylko build (SSR): jedno pobranie dla wszystkich wpisów, wynik w pamięci modułu ─────────────────────────────
let wszystkie: Promise<Record<string, Komentarz[]>> | undefined;

const poprawny = (x: unknown): x is Komentarz =>
  !!x && typeof x === 'object' && ['id', 'autor', 'tresc', 'data'].every((p) => typeof (x as Record<string, unknown>)[p] === 'string');

async function pobierzWszystkie(): Promise<Record<string, Komentarz[]>> {
  const adres = `${konfig.api}?strona=${encodeURIComponent(konfig.strona)}&wszystkie=1`;
  try {
    const odp = await fetch(adres, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
    if (!odp.ok) throw new Error(`HTTP ${odp.status}`);
    const json = (await odp.json()) as { wpisy?: Record<string, unknown> };
    const wynik: Record<string, Komentarz[]> = {};
    for (const [slug, lista] of Object.entries(json?.wpisy ?? {})) {
      if (Array.isArray(lista)) wynik[slug] = lista.filter(poprawny);
    }
    return wynik;
  } catch (e) {
    console.warn(`komentarze: pobranie z API nie powiodło się (${e instanceof Error ? e.message : e}); budowanie bez komentarzy`);
    return {};
  }
}

/** Opublikowane komentarze wpisu od najstarszego; błąd sieci albo złego JSON-a daje pustą listę (build nie pada). */
export async function komentarzeWpisu(slug: string): Promise<Komentarz[]> {
  wszystkie ??= pobierzWszystkie();
  return (await wszystkie)[slug] ?? [];
}
