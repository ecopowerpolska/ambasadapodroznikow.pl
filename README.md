# ambasadapodroznikow.pl

Blog podróżniczy „Ambasada Podróżników” — Astro 7 (statyczny), hosting GitHub Pages, domena własna (`public/CNAME`).
Bez cookies, bez analityki, bez formularza. Dokumentacja robocza: repo warsztatu, katalog `strony-docs/ambasadapodroznikow.pl/`.

## Jak dodać wpis

1. Skopiuj `src/content/wpisy/_przyklad.md` pod nową nazwą, np. `moj-wpis.md` (nazwa pliku = adres `/blog/moj-wpis/`).
2. Wypełnij frontmatter: `tytul`, `opis` (120–160 znaków), `data`, `zdjecie` (nazwa pliku z `src/assets/zdjecia/`,
   alt-y w `src/data/zdjecia.json`), `alt`, opcjonalnie `zmieniono` (data istotnej zmiany treści, trafia do `dateModified`) i `tagi`.
   Każdy wpis ma zdjęcie.
3. Treść w Markdown; link do polecanej firmy (najwyżej jeden na wpis) wstaw w zdaniu, w treści wpisu, bez `rel`.
   Linki w blokach poza treścią wpisu mają `rel="nofollow"`.
4. `npm run build` — błąd w frontmatterze zatrzymuje budowanie z komunikatem. Wpis z datą w przyszłości
   czeka i wychodzi w dniu daty (przebudowa trzy razy dziennie: 03:17, 07:47 i 11:23 UTC).

## Jak działa agregacja „Z naszych stron”

`npm run agreguj` (`scripts/agreguj-rss.mjs`) czyta kanały z `src/data/zrodla-rss.json` i dla każdego nowego wpisu
zapisuje plik `src/content/polecane/<źródło>-<hash linku>.md` (tytuł, 2–4 zdania, data, link, ewentualnie adres zdjęcia).
Pełnej treści nie kopiuje; istniejące pliki pomija; błąd jednego źródła nie przerywa reszty.
W Actions robi to zadanie `agreguj` (trzy przebiegi dziennie: 03:17, 07:47, 11:23 UTC, i przy ręcznym uruchomieniu): commit `agregacja: <data>` na `main`,
potem w tym samym przepływie build i wdrożenie. `node scripts/agreguj-rss.mjs --sucho` — raport bez zapisu.
Nowe źródło = nowy wpis w `zrodla-rss.json` (`nazwa`, `adres` kanału RSS 2.0).

## Budowanie

```bash
npm install --no-audit --no-fund
npm run guard        # walidator kodu (astro-guard)
npm run check        # astro check
npm run build        # astro build --force
npm run guard:build  # audyt dist/
# albo wszystko naraz: npm run verify
npm run preview      # podgląd dist/
```

Wymagany Node ≥ 22.12 (`.nvmrc`: 24). Przekierowania ze starej strony: `docs/przekierowania.json` (wczytywane w `astro.config.mjs`).
