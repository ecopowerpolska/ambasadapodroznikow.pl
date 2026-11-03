# ZAŁOŻENIA — ambasadapodroznikow.pl (szkielet, 2026-11-03)

## Stan i granice
- Astro 7.3 statyczny, `site: https://ambasadapodroznikow.pl`, `trailingSlash: 'always'`, format `directory`, bez `base`.
- GitHub Pages (wizytówka-blog, bez transakcji — skill `github-pages-wizytowka`). Widoczność repo i krok DNS rozstrzyga Piotr (§B2, §G): `public/CNAME` jest już w repo, więc **DNS i push idą w jednym posiedzeniu**.
- Bez cookies, analityki, formularza, tłumacza i skryptów zewnętrznych. Jedyny JS: menu na telefonie (~0,3 kB gzip).
- Stopka neutralna („Redakcja Ambasady Podróżników”, polityka, RSS, rok); nazwa spółki tylko w polityce prywatności (z `src/data/spolka.json`, kopia danych z `firma.json` ecopowerpolska.pl).

## Trasy
`/` · działy `/podroze/` `/dom/` `/pasje/` `/technologia/` `/zdrowie/` (`src/pages/[dzial].astro`, slugi w `src/lib/dzialy.ts`) · `/blog/` (wszystkie wpisy) · `/blog/<slug>/` (wpisy zostają pod tym adresem) · `/polecamy/` · `/o-nas/` · `/polityka-prywatnosci/` · `/404.html` · `/rss.xml` (tylko wpisy własne, pierwsza `<category>` = dział) · `/llms.txt` (wpisy pogrupowane po działach) · `/robots.txt` · `/sitemap.xml`
Od 2026-11-03 magazyn z działami (`docs/WZORZEC-MAGAZYNU.md` §3). `/z-naszych-stron/` → `/polecamy/` przekierowaniem; stare adresy wyjazdów i kierunków z archiwum (`/tour-item/`, `/portfolio/`, `/tag/<miejsce>/`, wpisy o Lwowie, Budapeszcie, Meksyku, Balatonie) → `/podroze/`.
Dział bez opublikowanego wpisu: komunikat `interfejs.brakWpisow` i `noindex`; hak `sitemap-jako-plik-sitemap-xml` wycina z `sitemap.xml` każdą stronę z `noindex`, więc dział wchodzi do mapy sam przy przebudowie po pierwszym wpisie.
oraz strony przekierowań z `docs/przekierowania.json` (każda: `lang="pl"`, `<h1>` z odnośnikiem, meta refresh, noindex, canonical na cel — hak `przekierowania-z-jezykiem` w `astro.config.mjs`; Astro sam robi je bez `lang` i `h1`, a audyt dist to blokuje). Format mapy: `{ "/stary/": "/nowy/" }` (przyjmowane też `{ "przekierowania": {…} }` i lista `{ z, do }`); pozycje `z === do` są pomijane.

## Schematy treści (`src/content.config.ts`)
**wpisy** (`src/content/wpisy/*.md`, pliki od `_` pomijane): `tytul` · `dzial` (wymagane: `podroze` | `dom` | `pasje` | `technologia` | `zdrowie`; inna wartość = błąd budowania) · `opis` 120–160 znaków (twardy błąd budowania) · `data` · `zdjecie?` (OPCJONALNE od 2026-11-03, decyzja Piotra „nie muszą być zdjęcia wszędzie”; nazwa pliku w `src/assets/zdjecia/`, brak pliku = błąd) · `alt` ≥ 10 znaków, wymagany, gdy jest `zdjecie`. Wpis bez zdjęcia: karta dostaje planszę 3:2 w barwie działu (mały napis = dział, duży = pierwszy tag inny niż dział, poziomice z gradientu CSS), wpis ma nagłówek bez zdjęcia zamknięty linią, `og:image` = kadr zdjęcia głównego, `BlogPosting.image` pominięte · `cel?` `{ nazwa, adres(URL) }` · `tagi[]`. Wpis z datą > teraz czeka na publikację (`src/lib/wpisy.ts`, liczba oczekujących idzie do logu budowania).
**polecane** (`src/content/polecane/*.md`, pisze agregator): `tytul` · `opis` · `data` · `zrodlo` · `link` (URL, klucz) · `zdjecie?` (URL z RSS). Zapowiedź prowadzi „Czytaj dalej na <źródło>” z `rel="nofollow"`. Reguła linków do naszych stron (schemat Piotra 2026-10-26): link w treści wpisu bez `rel` (dofollow), bloki polecające — przyciski firm na `/polecamy/` i karty zapowiedzi — `rel="nofollow"`. Zdjęcie zapowiedzi ładuje przeglądarka z serwera źródła (nasze strony) — bramka zgłasza to jako B5 „zasoby z obcych domen”.

## `src/data/teksty.json` — klucze (to, co pomocnik C nadpisuje; `[C: …]` = tekst zastępczy)
`marka.{nazwa, haslo, opisKrotki[C]}` · `interfejs.*` (napisy interfejsu — gotowe, nie zastępcze) · `stopka.{redakcja, polityka, rss, prawa}` ·
`menu[{nazwa, adres}]` (kolejność = pas nagłówka) · `dzialy.<slug>.{nazwa, tytulKarty, opisMeta, h1, wstep}` ·
`polecamy.{tytulKarty, opisMeta, h1, wstep, firmy[{nazwa, adres, opis, coDlaNas}], naglowekZapowiedzi, wstepZapowiedzi, czytajDalej, odwiedz?}` (`coDlaNas` pusty = akapit niewidoczny; `odwiedz` „Odwiedź {nazwa}”, bez klucza napis = nazwa firmy) ·
`interfejs.{minCzytania „{n} min czytania”, wiecejZDzialu „Więcej z działu {dzial}”, podpisRedakcji}` ·
`glowna.{tytulKarty[C], opisMeta[C], h1[C], akapity[0] (jedno zdanie w panelu zdjęcia), najnowszeNaglowek, najnowszeWszystkie, naglowekDzialy, zNaszychStronNaglowek, zNaszychStronWstep[C], zNaszychStronWszystkie}` (trzy ostatnie = blok „Polecamy” na głównej) ·
`o-nas.{tytulKarty[C], opisMeta[C], h1[C], wstep[C], zdjecie, akapity[][C], sekcje[{naglowek, akapity[]}][C]}` ·
`blog.{tytulKarty[C], opisMeta[C], h1, wstep[C]}` ·
`polityka.{tytulKarty, opisMeta[C], h1, lead[C], dataAktualizacji, administratorNaglowek, administratorWstep, sekcje[{id, naglowek, akapity[], lista[], akapityPo[]}][C]}` ·
`e404.{tytulKarty, opisMeta, h1, tekst, glowna, blog}`.
W polityce: blok „Administrator danych” (EcoPower Polska Sp. z o.o., adres, NIP, KRS, e-mail) rysuje szablon z `spolka.json`; w tekście sekcji działają `[kotwica](/trasa/)` i `{nazwa} {adres} {nip} {krs} {regon} {email} {telefon}`.
Brakujący klucz nie wywraca budowania — strona pokazuje `[brak: klucz]`.

## Wygląd (potwor-ux-ui; plan tokenów w nagłówku `src/styles/motyw.css`)
- Kierunek „magazyn podróżniczy”: piasek `#f6f0e4`/`#ece3d0`/`#e0d4b9`, teal „morze” `#0f3e47` (nagłówek, stopka, panel hero), terakota `#a8452a` (odnośniki; hover `#8f3a22`), tekst `#1a2a2e`/`#4d5b5c`. Wszystkie pary policzone `kontrast-wcag.py` i opisane komentarzami w motywie (≥ 4,5:1). Jeden motyw jasny.
- 🟡 Paleta „piasek + terakota + szeryf” jest na liście znaków szablonu AI (§C3 pkt 1) — wchodzi na wyraźne polecenie zlecenia (piasek, teal, terakota); odcienie celowo inne niż `#F4F1EA`/`#D97757`. Do potwierdzenia przez Piotra jako kierunek.
- Kroje: wyłącznie systemowe (nagłówki i tekst wpisu — szeryfowy stos Iowan/Palatino/Georgia, interfejs — `system-ui`), zero fontów z sieci i zero CLS od fontów. Skala 7 stopni: 14 · 16 · 18 · 23 · 30 · 40 · 52 px; tekst 18 px, miara wpisu 42 rem (~72 znaki), interlinia 1,7.
- Jeden gest: panel z tytułem wsunięty na dolną krawędź zdjęcia głównego. Karty bez obramowań i cieni, zdjęcia 3:2 (`fit="cover"` w pliku, `aspect-ratio` w CSS), promień zdjęć 3 px.
- Nagłówek sticky w jednej linii (72 px na komputerze, 64 px na telefonie), progi zapytaniem kontenera: menu (7 pozycji z `teksty.json` `menu`) w pasie od 61 rem kontenera (ok. 990 px okna; zmierzone CDP 2026-11-03: marka 20,3 rem + menu 35,2 rem + marginesy = 60,3 rem), szerszy odstęp pozycji od 66 rem, poniżej przełącznik (Esc, klik w link zamyka, `inert` na main i stopce); bez JS menu rozwija `<noscript>`. Cele dotyku ≥ 44 px, widoczny fokus, `prefers-reduced-motion`.
- Zmierzone CDP (Chrome headless, dist, 2026-11-03 po zmianie na magazyn): brak przewijania w bok przy 320/360/390 px także z tekstem 200 %; nagłówek 64 px (telefon) / 72 px (komputer), zawsze jedna linia od 320 do 1920 px; przełącznik menu poniżej ok. 990 px okna.
- Magazyn: karta wpisu = zdjęcie 3:2, linia meta (dział jako odnośnik nad rozciągniętym odnośnikiem tytułu, data, czas czytania słowa ÷ 200), tytuł, opis; na stronie działu i w blokach działów bez etykiety. Strona główna: panel zdjęcia (H1 + jedno zdanie), Najnowsze 1 + 3, bloki działów (3 karty, na telefonie 2) z „Więcej z działu”, Polecamy 3 zapowiedzi. Wpis: okruszki Strona główna › Dział › Tytuł, etykieta działu, podpis redakcji z odnośnikiem do `/o-nas/`, tagi pod treścią, „Więcej z działu” (3 karty, dobierane z całej strony, gdy w dziale brak), poprzedni/następny; JSON-LD `BlogPosting.articleSection` = dział.
- Zdjęcia: `<Image>` z `astro:assets` (WebP, srcset), hero eager + `fetchpriority="high"`, reszta lazy. Zdjęcie pionowe `technologia-nawigacja-w-aucie-01` przycięte w pliku do 3:2 (2000×1333, środek kadru, ImageMagick), bo Sharp w Astro nie przyjmuje pozycji w procentach. Pominięte zdjęcia: `podroze-pagoda-sakura-tokio-15` (odrzucone przez Piotra) i `weekend-wedrowiec-osniezone-gory-02` (duplikat `…-06`). Alty: `src/data/zdjecia.json`.

## Wdrożenie (`.github/workflows/build-i-wdrozenie.yml`)
Jeden przepływ: `agreguj` (commit bota) → `build` (checkout `ref: main` PO agregacji; guard → withastro/action → audyt dist) → `deploy`. Wyzwalacze: push `main`, ręczny, codziennie 05:30 UTC. Pułapka 60 dni w repozytorium publicznym opisana w pliku. Settings → Pages → Source: „GitHub Actions” ustawia Piotr.
