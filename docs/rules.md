# Katalog reguł astro-guard

Dwie rodziny reguł:

- **AG\*** — analiza statyczna kodu źródłowego (`scripts/validate-astro.mjs`)
- **B\*** — audyt wyniku builda w `dist/` (`scripts/audit-dist.mjs`)

Poziomy: **BŁĄD** blokuje (kod wyjścia 2) · **OSTRZ** wymaga decyzji · **INFO** to sugestia.

Wyciszenie pojedynczego trafienia: komentarz `guard:allow AG024 powód` w tej samej linii
lub do dwóch linii wyżej. Wyciszenie bez powodu jest naruszeniem kontraktu z `CLAUDE.md`.

---

## AG0xx — konfiguracja i projekt

| ID | Poziom | Wykrywa | Dlaczego to problem | Poprawka |
|---|---|---|---|---|
| AG000 | BŁĄD | brak `astro.config.*` | Pracujesz w złym katalogu albo to nie jest projekt Astro | Zweryfikuj ścieżkę, zanim cokolwiek zapiszesz |
| AG001 | BŁĄD | `output: 'hybrid'` | Usunięte w Astro 5 (upgrade-to/v5 `#removed-hybrid-rendering-mode`); Astro 7 odrzuca taką konfigurację własnym komunikatem błędu | `output: 'static'` + `export const prerender = false` na trasach dynamicznych |
| AG002 | BŁĄD | `astro.config.cjs` | CommonJS nie jest wspierany od Astro 6 | Zmień na `.mjs`, przepisz na ESM |
| AG003 | OSTRZ | brak `site` | Bez tego nie ma poprawnych kanonicznych URL-i ani sitemapy | Dodaj `site: 'https://…'` |
| AG004 | INFO | brak `prefetch` | Tracisz najtańszy zysk w odczuwalnej szybkości nawigacji | `prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` |
| AG005 | BŁĄD | `@astrojs/tailwind` w konfiguracji | Integracja dla Tailwind 3, przestarzała | `@tailwindcss/vite` w `vite.plugins` |
| AG006 | BŁĄD | usunięte flagi jako klucze bloku `experimental: {…}` | `rustCompiler`, `queuedRendering`, `advancedRouting`, `cache`, `logger` zniknęły w Astro 7 — są standardem (upgrade-to/v7 `#experimental-flags`); `experimental` w 7.3.1 jest ścisłym obiektem, nieznany klucz = błąd konfiguracji. `logger` i `cache` jako opcje NAJWYŻSZEGO poziomu są poprawne i nie są zgłaszane (poprawka 2026-09-30) | Usuń flagi z `experimental` |
| AG007 | INFO | `@astrojs/partytown` | Przenosi third-party do workera, ale jego service worker bywa zgłaszany przez Lighthouse jako „deprecated APIs” | Zmierz TBT przed/po; rozważ ładowanie po zgodzie cookie |
| AG010 | BŁĄD | `@astrojs/tailwind` w zależnościach | jw. | `npm uninstall @astrojs/tailwind && npm i tailwindcss @tailwindcss/vite` |
| AG011 | BŁĄD/OSTRZ | `engines.node` < 22 lub brak | Astro 6+ wymaga Node 22.12+ | `"engines": { "node": ">=22.12.0" }` + `.nvmrc` + CI |
| AG012 | OSTRZ | Astro poniżej majora 6 | Brak Content Layer, Fonts API, aktualnych ścieżek migracji | `npx @astrojs/upgrade` w osobnym PR |
| AG013 | INFO | pakiety `@fontsource*` | Od Astro 6 fonty obsługuje wbudowane Fonts API (pobieranie, fallbacki, preload) | `fonts: [...]` + `<Font cssVariable preload />` |
| AG014 | INFO | brak skryptu `guard` | Walidator, którego nikt nie uruchamia, nie chroni niczego | Dodaj skrypty z README |
| AG015 | BŁĄD | `.nvmrc` < 22 | Rozjazd między lokalnym Node a wymaganiem frameworka | Ustaw 22+ |
| AG016 | INFO | brak `public/robots.txt` | Strona treściowa traci na indeksacji | Dodaj `robots.txt` ze wskazaniem sitemapy |
| AG017 | INFO | skrypt `build` (lub `verify`) woła `astro build` bez `--force` i brak `prebuild` czyszczącego `data-store.json` | Content layer trzyma wyrenderowany HTML wpisów w `node_modules/.astro/data-store.json`; po zmianie wtyczki Markdown przy niezmienionych `.md` lokalny build bierze stary HTML (brak `<figure>`, pusty `srcset`), a bramka ocenia `dist/` ze starej pamięci | `"build": "astro build --force"` (flaga w Astro 7.3.8 potwierdzona `build --help`) albo `prebuild` usuwający plik |

---

## AG02x–AG04x — kod źródłowy

| ID | Poziom | Wykrywa | Dlaczego to problem | Poprawka |
|---|---|---|---|---|
| AG020 | BŁĄD | `<ViewTransitions />` | Usunięte w Astro 6 | `<ClientRouter />` z `astro:transitions`; przestarzały prop `handleForms` usuń |
| AG021 | BŁĄD | `Astro.glob()` | Usunięte w Astro 6 | `getCollection()` albo `import.meta.glob()` |
| AG022 | OSTRZ | `Astro.site` / `Astro.generator` WEWNĄTRZ `getStaticPaths()` | Przestarzałe od Astro 6 (upgrade-to/v6 `#deprecated-astro-in-getstaticpaths`), Astro 7 wypisuje ostrzeżenie. **Poza `getStaticPaths()` `Astro.site` jest pełnoprawnym API i nie jest zgłaszane** (do 2026-09-30 reguła była fałszywym BŁĘDEM na każde użycie) | `import.meta.env.SITE`; `Astro.generator` usuń |
| AG023 | BŁĄD | `client:only` bez frameworka | Dyrektywa nie zadziała | `client:only="react"` |
| AG024 | OSTRZ | `client:load` | Natychmiastowe pobranie i wykonanie JS, blokuje główny wątek, podnosi TBT | `client:visible` / `client:idle`; jeśli konieczne — `guard:allow AG024 powód` |
| AG025 | OSTRZ | `is:inline` | Wyłącza bundlowanie, minifikację i deduplikację | Usuń, chyba że kod musi biec przed hydracją (anty-FOUC) |
| AG026 | OSTRZ | `<img>` bez `width`/`height` | Bezpośrednia przyczyna CLS | Uzupełnij wymiary lub `aspect-ratio` |
| AG027 | OSTRZ | lokalny raster w surowym `<img>` | Brak AVIF/WebP i responsywnych rozmiarów | `<Image />` z `astro:assets` (SVG zostaw) |
| AG028 | OSTRZ | Google Fonts przez `<link>` | Blokuje render, wycieka IP użytkownika do zewnętrznego serwisu | Fonts API z self-hostingiem |
| AG029 | OSTRZ | > 3 wyspy w pliku | Projektujesz aplikację w narzędziu do stron treściowych | Rozbij komponenty albo zgłoś rozjazd narzędzia z zadaniem |
| AG030 | OSTRZ | zewnętrzny `<script src="https://…">` | Third-party na głównym wątku psuje TBT/INP | Partytown, ładowanie po interakcji lub po zgodzie |
| AG031 | BŁĄD (OSTRZ z flagą `legacy.collectionsBackwardsCompat: true`) | `src/content/config.ts` | Stare kolekcje usunięte w Astro 6; flaga z Astro 6.0 przywraca je tymczasowo | `src/content.config.ts` + Content Layer API, potem wyłącz flagę |
| AG032 | BŁĄD (OSTRZ z flagą `legacy.collectionsBackwardsCompat: true`) | `defineCollection()` bez `loader` | Kolekcja bez loadera nie istnieje w Astro 6+ bez flagi | `loader: glob({ pattern, base })` |
| AG034 | INFO | `loading="eager"` bez `fetchpriority="high"` | Obraz LCP nie dostaje priorytetu w kolejce pobierania | Dodaj `fetchpriority="high"` — jednemu obrazowi na stronę |
| AG040 | BŁĄD | `window`/`document`/`localStorage` we frontmatterze `.astro` | Frontmatter wykonuje się na serwerze — build padnie albo kod cicho nie zadziała | Przenieś do `<script>` lub komponentu `client:*` |
| AG042 | OSTRZ | `process.env.` | Nieprzenośne między runtime'ami, bez walidacji typów | `astro:env` albo `import.meta.env` |
| AG043 | OSTRZ | import z `"zod"` w `content.config` | Astro 6 używa Zod 4 i udostępnia tę samą instancję jako `astro/zod`; dwie kopie = konflikt przy walidacji | `import { z } from "astro/zod"` — NIE z `astro:content` ani `astro:schema` (oba przestarzałe od Astro 6, upgrade-to/v6 `#deprecated-astroschema-and-z-from-astrocontent`) |

---

## Bxx — audyt `dist/`

| ID | Poziom | Sprawdza | Domyślny próg |
|---|---|---|---|
| B01 | BŁĄD | JS per strona (gzip) | 40 kB |
| B02 | OSTRZ | CSS per strona (gzip) | 30 kB |
| B03 | OSTRZ | HTML per strona (gzip) | 25 kB |
| B04 | BŁĄD | trasa z `zeroJsRoutes` wysyła JS | 0 |
| B10 | BŁĄD | `<html lang>` | wymagane |
| B11 | BŁĄD | niepusty `<title>` | wymagane |
| B12 | OSTRZ | `meta description` ≥ 20 znaków | wymagane |
| B13 | OSTRZ | `<link rel="canonical">` | wymagane |
| B14 | OSTRZ | dokładnie jeden `<h1>` | 1 |
| B15 | OSTRZ | `<img>` bez wymiarów w finalnym HTML | 0 |
| B16 | INFO | pierwszy obraz z `loading="lazy"` | — |

Progi w `guard.config.json`. Podniesienie budżetu jest decyzją projektową i wymaga wpisu
w raporcie — nie jest sposobem na zielony build.

---

## Czego walidator celowo nie sprawdza

Nie duplikuje pracy narzędzi, które robią to lepiej:

- **składnia i typy** → `astro check` (kompilator Rusta w Astro 7 jest surowy: niezamknięty
  tag jest błędem, nie ostrzeżeniem — brak też autokorekty HTML znanej z wcześniejszych wersji),
- **realne Core Web Vitals** → Lighthouse / PageSpeed Insights na wdrożonej wersji,
- **poprawność treści i dostępność semantyczna** → przegląd człowieka.

`guard` odpowiada na pytanie „czy ten kod jest zgodny z regułami i budżetem projektu”,
a nie „czy strona jest dobra”. To drugie pozostaje po stronie człowieka.
