#!/usr/bin/env node
// sprawdz-linki-firm.mjs — bramka linków do naszych firm w dist/ (decyzje Piotra 2026-10-26, 2026-11-03 i 2026-11-05):
// 1) w treści wpisu (<article class="wpis...") najwyżej 1 link do firm, bez rel;
// 2) poza treścią wpisu każdy link do firm ma rel="nofollow"; 3) w nagłówku, menu i stopce nie ma żadnego;
// 4) blokada: w dist/**/*.html (poza polityka-prywatnosci/) i dist/llms.txt nie ma fraz zdradzających, czyja to strona (FRAZY_WLASCICIEL).
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, sep } from 'node:path';

const FIRMY = /^https?:\/\/(?:[a-z0-9-]+\.)?(ecopowerpolska\.pl|studioagat\.pl|nadihome\.pl|pan-stolarz\.pl|panwylewka\.pl)(?:[/?#]|$)/i;
const DIST = join(process.cwd(), process.argv[2] ?? 'dist');
const bledy = [];
const pliki = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? pliki(join(d, e.name)) : e.name.endsWith('.html') ? [join(d, e.name)] : []));

for (const plik of pliki(DIST)) {
  const html = readFileSync(plik, 'utf8');
  const wpis = html.match(/<article class="wpis[ "][^>]*>[\s\S]*?<\/article>/)?.[0] ?? '';
  const poza = html.replace(wpis, '');
  const linki = (s) => [...s.matchAll(/<a\b([^>]*)>/g)].map((m) => ({ a: m[1], href: m[1].match(/href="([^"]+)"/)?.[1] ?? '' })).filter((l) => FIRMY.test(l.href));
  const wTresci = linki(wpis);
  if (wTresci.length > 1) bledy.push(`${plik}: ${wTresci.length} linków do firm w treści wpisu (dozwolony 1)`);
  for (const l of wTresci) {
    if (/\brel=/.test(l.a)) bledy.push(`${plik}: link w treści wpisu z rel (${l.href}) — ma być bez rel`);
  }
  for (const l of linki(poza)) if (!/rel="[^"]*nofollow/.test(l.a)) bledy.push(`${plik}: link do firmy poza treścią wpisu bez nofollow (${l.href})`);
  for (const blok of html.match(/<(header|footer)\b[\s\S]*?<\/\1>/g) ?? []) if (linki(blok).length) bledy.push(`${plik}: link do firmy w nagłówku albo stopce`);
}

// Blokada 4: frazy ujawniające właściciela strony (poza polityką prywatności, która zostaje w całości).
const FRAZY_WLASCICIEL = ['wydaje Ambasadę', 'wydaje tę stronę', 'wydająca tę stronę', 'marki spółki', 'marką spółki', 'tej samej spółki', 'naszej spółki', 'Stronę wydaje', 'parentOrganization'];
const doSkanu = pliki(DIST).filter((p) => !p.includes(`${sep}polityka-prywatnosci${sep}`));
const llms = join(DIST, 'llms.txt');
if (existsSync(llms)) doSkanu.push(llms);
for (const plik of doSkanu) {
  const tekst = readFileSync(plik, 'utf8');
  for (const fraza of FRAZY_WLASCICIEL) if (tekst.includes(fraza)) bledy.push(`${plik}: fraza zdradzająca właściciela strony „${fraza}” (blokada: nie ujawniamy, czyja to strona)`);
}
if (bledy.length) { console.error(bledy.join('\n')); process.exit(1); }
console.log('Linki do firm: zgodne z decyzjami Piotra.');
