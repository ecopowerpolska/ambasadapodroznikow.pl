// astro.config.mjs — ambasadapodroznikow.pl (blog podróżniczy na GitHub Pages)
// ESM, Astro 7. Wzorce: skill astro-guard, strona wzorcowa ecopowerpolska.pl.
//
// `site` = adres kanoniczny. Repozytorium ma własną domenę (public/CNAME), więc `base` NIE WYSTĘPUJE
// (github-pages-wizytowka §E). Z tej jednej linii biorą się canonical, og:url, sitemapa i adresy w JSON-LD.
// Poza nią adres stoi tylko w public/robots.txt i public/CNAME — przy zmianie domeny poprawia się je ręcznie.
//
// Fonty: system (stos szeryfowy + bezszeryfowy w motyw.css), bez Fonts API i bez sieci przy budowaniu.

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { existsSync, readFileSync, renameSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

/**
 * Mapa przekierowań ze starej strony: docs/przekierowania.json (robi ją osobny krok pracy nad archiwum domeny).
 * Przyjmowane postacie: { "/stary/": "/nowy/" } · { "przekierowania": { … } } · lista { z|from|stary, do|to|nowy }.
 * Brak pliku = pusta mapa. Zmienna AMBASADA_PRZEKIEROWANIA wskazuje inny plik (tylko do prób budowania).
 */
function wczytajPrzekierowania() {
  const plik = process.env.AMBASADA_PRZEKIEROWANIA || resolve('docs/przekierowania.json');
  if (!existsSync(plik)) return {};
  const surowe = JSON.parse(readFileSync(plik, 'utf8'));
  const dane = surowe && !Array.isArray(surowe) && typeof surowe.przekierowania === 'object' ? surowe.przekierowania : surowe;
  const wynik = {};
  const dodaj = (z, doCelu) => {
    if (typeof z !== 'string' || typeof doCelu !== 'string' || !z.startsWith('/') || z === doCelu) return;
    wynik[z] = doCelu;
  };
  if (Array.isArray(dane)) {
    for (const w of dane) dodaj(w?.z ?? w?.from ?? w?.stary, w?.do ?? w?.to ?? w?.nowy);
  } else if (dane && typeof dane === 'object') {
    for (const [z, doCelu] of Object.entries(dane)) dodaj(z, typeof doCelu === 'object' ? doCelu?.destination : doCelu);
  }
  return wynik;
}

const przekierowania = wczytajPrzekierowania();

/**
 * Strona przekierowania Astro nie ma `lang` ani `<h1>`, a audyt dist (B10, B14) ich wymaga.
 * Po budowie zamieniamy każdy plik przekierowania na kompletny dokument: lang, tytuł, opis, h1 z odnośnikiem,
 * meta refresh, noindex i canonical na cel (wzorzec ze skilla github-pages-wizytowka §C).
 */
function przekierowaniaZJezykiem() {
  const cuda = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return {
    name: 'przekierowania-z-jezykiem',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const katalog = fileURLToPath(dir);
        let n = 0;
        for (const [z, doCelu] of Object.entries(przekierowania)) {
          const sciezka = z.replace(/^\//, '').replace(/\/$/, '');
          const kandydaci = [join(katalog, sciezka, 'index.html'), join(katalog, `${sciezka}.html`)];
          const plik = kandydaci.find((k) => existsSync(k));
          if (!plik) continue;
          const cel = /^https?:\/\//.test(doCelu) ? doCelu : new URL(doCelu, 'https://ambasadapodroznikow.pl').href;
          const adres = cuda(cel);
          writeFileSync(
            plik,
            `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>Ta strona została przeniesiona</title>
<meta name="description" content="Adres, który otworzyłeś, został przeniesiony. Za chwilę przejdziesz na nowy adres tej treści.">
<meta http-equiv="refresh" content="0;url=${adres}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${adres}">
</head>
<body>
<h1>Ta strona została przeniesiona</h1>
<p><a href="${adres}">Przejdź do nowego adresu</a></p>
</body>
</html>
`,
          );
          n++;
        }
        if (Object.keys(przekierowania).length) logger.info(`przekierowania: ${n} z ${Object.keys(przekierowania).length} stron zapisanych z lang i h1`);
      },
    },
  };
}

// Bramka przed publikacją szuka DOSŁOWNIE `dist/sitemap.xml`; @astrojs/sitemap daje `sitemap-index.xml` + `sitemap-0.xml`.
// Przy jednej części `sitemap.xml` ma być SAMĄ LISTĄ adresów (wzorzec ecopowerpolska.pl).
function sitemapJakoPlikSitemapXml() {
  return {
    name: 'sitemap-jako-plik-sitemap-xml',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const katalog = fileURLToPath(dir);
        const cel = join(katalog, 'sitemap.xml');
        const indeks = join(katalog, 'sitemap-index.xml');
        const czesci = readdirSync(katalog)
          .filter((n) => /^sitemap-\d+\.xml$/.test(n))
          .sort();
        if (czesci.length === 1) {
          renameSync(join(katalog, czesci[0]), cel);
          if (existsSync(indeks)) rmSync(indeks);
        } else if (existsSync(indeks)) {
          renameSync(indeks, cel);
          logger.warn(`sitemapa ma ${czesci.length} części — sitemap.xml zostaje indeksem, nie listą adresów`);
        }
      },
    },
  };
}

// Strony przekierowań nie trafiają do sitemapy; /404/ i pliki tekstowe też nie.
const wykluczone = new Set(Object.keys(przekierowania).map((z) => z.replace(/\/?$/, '/')));

export default defineConfig({
  site: 'https://ambasadapodroznikow.pl',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: przekierowania,
  integrations: [
    sitemap({
      filter: (adres) => {
        const sciezka = new URL(adres).pathname;
        return !/\/(404|llms\.txt|rss\.xml)\/?$/.test(sciezka) && !wykluczone.has(sciezka);
      },
    }),
    przekierowaniaZJezykiem(),
    sitemapJakoPlikSitemapXml(),
  ],
  // `prefetch` świadomie wyłączony (AG004 INFO): strona jest prawie statyczna, a nawigacja lekka.
});
