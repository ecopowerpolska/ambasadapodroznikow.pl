# WZORZEC MAGAZYNU: ambasadapodroznikow.pl z działami (R1, 2026-11-03)

Cel: układ magazynu z działami Podróże · Dom · Pasje · Technologia · Zdrowie + zakładka Polecamy, wg słów Piotra
z 2026-11-03 i decyzji w zleceniu wspólnym (trasy, menu, pole `dzial`). Bierzemy UKŁAD wzorca, nie jego słabości.
Pobrane strony leżą w `/tmp/claude-1000/-home-ecopower-projekty-WWW/a2b92c81-99da-4909-9742-fe402ed5c3cf/scratchpad/r1/pob/`.
W tekstach proponowanych dla strony nie ma myślników długich (zasada z WSPOLNE.md).

---

## 1. Wzorzec instruktorstrzelectwa.pl (odczyt żywej strony 2026-11-03)

Dowód: `curl -sL https://instruktorstrzelectwa.pl/` (59 898 B), `…/category/dom/`, `…/kancelaria-notarialna-wroclaw/`,
rozbiór HTML skryptem (nagłówki, linki, klasy). Analiza ogólna: `/home/ecopower/projekty/WWW/analizy/instruktorstrzelectwa-pl-2026-10-29.md`.

**Menu (nagłówek):** nazwa strony tekstem po lewej („Instruktor strzelectwa – wszystko co polecam”), obok pięć kategorii:
Dom · Pasje · Technologia · Zdrowie · Życie codzienne. Brak „O nas”, „Kontakt”, wyszukiwarki w menu. Na telefonie
przełącznik „Menu”. Pod nagłówkiem stały obrazek motywu (`bg-img.jpg`) bez tekstu.

**Strona główna (od góry):**
1. Nagłówek z menu kategorii.
2. Pas z obrazkiem tła (dekoracja, bez tytułu i bez H1; H1 na głównej nie ma wcale).
3. Lista 10 najnowszych wpisów, jedna kolumna, kolejno od najnowszego.
4. Stronicowanie „1 2 Next”.
5. Stopka.
Nie ma sekcji per kategoria, wpisu wiodącego, „o nas”, polecanych.

**Karta wpisu (lista):** zdjęcie 640×480 (4:3) jako link · tytuł H2 jako link · „Opublikowano” + dwie daty sklejone
(publikacja i aktualizacja, np. „19 grudnia 20253 stycznia 2026”) · pusty `byline` (autora brak) · zajawka ok. 55 słów
ucięta „…”. Kategoria NIE jest pokazana na karcie (jest tylko w klasie CSS `category-technologia`).

**Strona kategorii:** H1 „Kategoria: Dom”, ta sama lista kart, bez opisu działu, bez paska bocznego. Kategoria
„Pasje” jest w menu, ale nie ma wpisów (w pasku bocznym wpisu już jej brak).

**Szablon wpisu:**
- NAD treścią: zdjęcie wyróżnione (pełna szerokość kolumny), H1, „Opublikowano” + data publikacji i aktualizacji.
  Brak: autora, kategorii, czasu czytania, okruszków.
- TREŚĆ: wpis notariusza ma drugie H1 w treści, trzy linki z dokładnymi frazami do jednej kancelarii.
- POD treścią: nic. Brak tagów, kategorii, „powiązanych”, „udostępnij”, poprzedni/następny, komentarzy.
- Pasek boczny (tylko na wpisie): wyszukiwarka, „Ostatnie wpisy” (5), „Najnowsze komentarze” (puste), „Kategorie” (4).

**Stopka:** „©2026 Instruktor strzelectwa – wszystko co polecam | Powered by SuperbThemes” (link nofollow). Nic więcej:
brak polityki prywatności, O nas, kontaktu (wg analizy z 2026-10-29 te adresy dają 404).

**Co z tego bierzemy:** nazwy i kolejność działów w menu, prostą listę wpisów od najnowszego, jeden obraz na kartę,
datę przy tytule. **Czego nie bierzemy:** braku autora i O nas, pustego działu w menu, braku H1, sklejonych dat,
wpisów o wszystkim pod frazy lokalne, kilku linków z frazą do jednej firmy w jednym wpisie, oznaczeń „artykuł sponsorowany”.

---

## 2. Inne serwisy

Uwaga o cytatach: zasady praw autorskich tej sesji pozwalają na jeden krótki cytat w całym wyniku. Użyłem go przy
Kołem Się Toczy; pozostałe opisy są parafrazą, a nazwy zakładek podaję jako nazwy własne.

### 2a. Magazyny z działami

**A. Zwierciadło, https://zwierciadlo.pl/** (magazyn psychologiczno-lifestyle'owy, wydawca papierowy)
- Menu: Psychologia · Spotkania (wywiady, felietony) · Kultura · Moda · Uroda · Zdrowie · Horoskop · Wideo · Podcasty;
  Podróże są poddziałem „Styl życia” (`/lifestyle/podroze`). Każdy dział ma rozwijane poddziały.
- Główna od góry: 4 teksty wiodące (duże karty) → listy tekstów → pas ekspertów „Nasi Eksperci” (8 osób z nazwiskiem,
  każda ze stroną) → felietoniści z nazwiskami → sekcje działów (nagłówek działu, karty, link „zobacz więcej”) w kolejności
  Moda, Uroda/Włosy, Podcasty, Piękne miejsca/Podróże, Wideo, Styl życia. Na karcie nad tytułem etykieta poddziału.
- Polecane: dział „Zwierciadło poleca” (`/zwierciadlo-poleca`) to zapowiedzi WŁASNYCH wydań w sprzedaży, nie firm z zewnątrz.
- Link do firmy we wpisie i wpis-historia: NIE USTALONO (nie otwierałem pojedynczego artykułu; budżet pobrań).
- Wiarygodność: nazwiska ekspertów i felietonistów na głównej, w stopce „Kontakt” i „Reklama”.

**B. Ładne Bebe, https://ladnebebe.pl/** (magazyn rodzinny i lifestyle)
- Menu: Dziecko · Rodzicielstwo · Lifestyle (Podróże, Spotkania, Wnętrza) · Zakupy · Kultura · Podcasty · E-booki · O nas.
- Główna od góry: tekst wiodący (dom rodziny w Bielsku-Białej) → „Popularne” → „Felietony” → „Najnowsze” → sekcje
  działów: Szkoła rodzenia, „Zdrowie rodziny z Sanprobi” (sekcja patronacka nazwana marką partnera, jawnie), Dziecko,
  Zakupy, Styl życia, Kultura. Stopka: Kontakt, Polityka prywatności, newsletter.
- Szablon wpisu (`/dom-do-ktorego-chce-sie-wracac/`): okruszki Home / Lifestyle / Wnętrza → etykieta działu i data →
  H1 → lead 3 zdania → treść (rozmowa) → podpis „TEKST: imię nazwisko, FOTO: imię nazwisko” → „Podziel się” →
  „Powiązane” (karty z tego samego działu) z linkiem „Zobacz wszystkie”.
- Ton wpisu o domu: konkret z życia (wiek dzieci, imię psa, skąd krzesła, co zrobiono z blatem), mówi rozmówczyni.
  Źródła mebli i dzieł podane zdaniem w wypowiedzi, nie listą firm. Osobnej zakładki „polecamy firmy” nie ma;
  partner ma nazwaną sekcję patronacką.

**C. iMagazine, https://imagazine.pl/** (magazyn technologia + lifestyle, z wydaniem PDF)
- Menu: Magazyn · Apple (poddziały) · Lifestyle (Fotografia, Kino, Motoryzacja, Muzyka, Podróże…) · Technologie · Sprzęt ·
  Testy · AI · Archiwum · Redakcja · Reklama (`/kontakt/`).
- Główna od góry: pas najnowszych (tytuł + autor imieniem i nazwiskiem, link do strony autora) → karuzela wydań PDF
  („Pobierz”) → siatka wpisów, każdy z autorem → stronicowanie. Stopka: polityka prywatności i cookies.
- Wiarygodność: autor przy KAŻDEJ karcie, strona „Redakcja” w menu. Wpisy handlowe mają jawny tytuł („Promocje z Amazon …”).
- Zakładka polecanych firm: brak; reklama przez link „Reklama”. Wpis-historia: testy sprzętu w pierwszej osobie
  (np. tytuł o próbie naprawy zamka Aqara). Sposób linkowania do firm w treści: NIE USTALONO (artykułu nie otwierałem).

### 2b. Blogi podróżnicze z zakładką o firmach

**D. Kołem Się Toczy, https://kolemsietoczy.pl/** (Karol Werner)
- Menu: „Pierwszy raz?” (strona startowa dla nowego czytelnika) · Relacje z podróży (wg krajów) · Około podróżniczo
  (kategorie „Ludzie są dobrzy”, „Historie przelotne”, „NAJ-lista”) · Porady (Sprzęt, Początki, jak tanio podróżować) ·
  Fotografia · Filmy · książki autora · „SAKWY KST x CROSSO” · kurs filmowy · sklep.
- Zakładka o firmie: „SAKWY KST x CROSSO” (`/sakwy-rowerowe-kolem-sie-toczy/`), osobna strona o produkcie zrobionym
  z firmą Crosso, w pierwszej osobie, z powodami decyzji (czarny front, bo się nie brudzi; kieszenie, bo pytali czytelnicy).
  Cytat (jedyny w wyniku): „Wspólnie z firmą Crosso stworzyliśmy coś, z czego jestem naprawdę dumny.”
- „Współpraca” (`/wspolpraca/`): zestaw dla reklamodawców (nagrody, liczby odsłon, obserwujący), nie lista polecanych.
- Wpis-historia: tytuły z wydarzeniem i emocją w pierwszej osobie (kwarantanna na Maderze w hotelu covidowym,
  „największa porażka w historii kanału” w Picos de Europa); historia mówi, co poszło źle, ile kosztowało.

**E. Hasające Zające, https://hasajacezajace.com/wspolpraca/** (Justyna i Krystian Zając)
- Zakładka „Współpraca”: autorzy przedstawiają się z imienia i nazwiska, potem liczby (odsłony, obserwujący), wyniki
  kampanii dla regionów i marek, publikacje, baner, oraz płatne dopisanie noclegu lub atrakcji do istniejących artykułów
  w promieniu 50 km. To oferta reklamowa, nie polecenie z doświadczenia: tego NIE bierzemy.
- Menu bloga: góry wg pasm i krajów (bardzo głębokie). Wpleciony link do firmy we wpisie: NIE USTALONO.

**Wniosek z 2a i 2b:** wiarygodny magazyn pokazuje ludzi (nazwisko, podpis, strona redakcji), działy z etykietą na karcie
i sekcje działów na głównej. Polecenie firmy, które brzmi uczciwie, mówi „zrobiliśmy to razem i dlatego polecamy”
(Kołem Się Toczy), a sekcja partnerska ma nazwę partnera wprost (Ładne Bebe). Oferty „dopiszemy Twój obiekt” i media kity
to reklama, nie wzór dla nas.

---

## 3. Do wdrożenia (dla W1 układ i W2 teksty)

Klucze tekstów wyłącznie z listy WSPOLNE.md (`menu`, `dzialy.<slug>`, `polecamy`, `glowna.naglowekDzialy` + istniejące).
Elementy oznaczone 🟡 potrzebują klucza spoza listy: robi je integrator albo sesja główna po decyzji (pkt NIE USTALONO 1).

### 3.1 Menu i nagłówek
- `Naglowek.astro` czyta `teksty.menu` (lista `{nazwa, adres}`) zamiast trzech stałych pozycji:
  Podróże `/podroze/` · Dom `/dom/` · Pasje `/pasje/` · Technologia `/technologia/` · Zdrowie `/zdrowie/` ·
  Polecamy `/polecamy/` · O nas `/o-nas/`. „Blog” wypada z menu (`/blog/` zostaje jako lista wszystkich, link z głównej).
- Bieżąca pozycja `aria-current="page"` także na wpisie: na `/blog/<slug>/` podświetla dział wpisu.
- 7 pozycji w jednej linii na komputerze (zasada „nagłówek sticky, jedna linia”); próg hamburgera sprawdzić po zmianie
  (dziś 46 rem dla 3 pozycji, 7 pozycji wymaga szerszego progu, do zmierzenia w kopii W1).

### 3.2 Strona główna `/` (kolejność sekcji)
1. **Pas tytułowy:** H1 `glowna.h1` + JEDNO zdanie `glowna.akapity[0]` (pozostałe akapity nie na głównej albo usunięte przez W2).
   Wzorzec nie ma H1; my mamy, bo to tożsamość strony.
2. **Najnowsze** (`glowna.najnowszeNaglowek`): 1 wpis wiodący (duża karta, jak dziś `glowna`) + 3 kolejne karty z dowolnych
   działów; link `glowna.najnowszeWszystkie` → `/blog/`.
3. **Działy** (`glowna.naglowekDzialy` jako H2): dla każdego z 5 działów w kolejności menu blok:
   H3 = `dzialy.<slug>.nazwa` jako link do `/<slug>/`, pod nim do 3 najnowszych kart tego działu (bez wpisów już
   pokazanych w „Najnowszych”, jeśli dział ma ich więcej niż 3). **Dział z 0 wpisów nie ma bloku na głównej**
   (nie powtarzamy pustej „Pasji” wzorca).
4. **Polecamy** (zastępuje „Z naszych stron”): H2 `glowna.zNaszychStronNaglowek`, wstęp `glowna.zNaszychStronWstep`
   (W2 zmienia treść tych kluczy na język „Polecamy”), link `glowna.zNaszychStronWszystkie` → `/polecamy/`.
   Zamiast 6 kart zapowiedzi pokazać **3** (mniej linków do firm z głównej, a karta nadal prowadzi do źródła).
5. Stopka bez zmian (neutralna „Redakcja Ambasady Podróżników”, polityka, RSS, rok).

### 3.3 Strona działu `/<slug>/` (5 stron: `src/pages/[dzial].astro` z `getStaticPaths` po 5 slugach)
- Okruszki: Strona główna › `dzialy.<slug>.nazwa` (+ BreadcrumbList w JSON-LD).
- `<title>` = `dzialy.<slug>.tytulKarty`, `description` = `dzialy.<slug>.opisMeta`, H1 = `dzialy.<slug>.h1`,
  pod nim wstęp `dzialy.<slug>.wstep` (2–3 zdania o tym, co w dziale jest; nie „Kategoria: Dom” jak we wzorcu).
- Lista: wpisy z `dzial === slug`, od najnowszego; pierwszy jako karta wiodąca, reszta siatką; stronicowanie dopiero
  powyżej 12 wpisów (dziś niepotrzebne).
- Pusty dział: `interfejs.brakWpisow` + `<meta name="robots" content="noindex">` do pierwszego wpisu (strona istnieje,
  bo jest w menu, ale pusta nie trafia do indeksu ani do `sitemap.xml`).
- JSON-LD: `CollectionPage` z `name` = nazwa działu.
- Na dole działu: linki do pozostałych 4 działów (nazwy z `dzialy.*.nazwa`), żeby czytelnik nie wracał do menu.

### 3.4 Karta wpisu (`KartaWpisu.astro`)
Od góry: zdjęcie 3:2 (jak dziś) → **etykieta działu** tekstem (`dzialy.<dzial>.nazwa`, mały kapitalik, NIE osobny link,
bo cała karta jest jednym linkiem rozciągniętym na tytule) → data (`time`) → tytuł H3 (link) → opis z frontmattera.
- Na stronie działu etykietę działu ukryć (prop `bezDzialu`), bo jest w H1.
- Jedna data (publikacji); nie pokazywać dwóch dat jak wzorzec.
- 🟡 Czas czytania „N min” (liczony w `src/lib/wpisy.ts`: słowa ÷ 200, w górę) obok daty, gdy będzie klucz tekstu.
- Autora na karcie nie pokazujemy (zawsze redakcja; podpis jest we wpisie).

### 3.5 Szablon wpisu `/blog/<slug>/`
NAD treścią:
1. Okruszki: Strona główna › `dzialy.<dzial>.nazwa` (link do `/<dzial>/`) › tytuł. Dział zastępuje „Blog”
   (`interfejs.okruszki_blog` zostaje dla `/blog/`).
2. Etykieta działu (link do `/<dzial>/`) nad H1.
3. H1 = `tytul`.
4. Linia meta: `interfejs.opublikowano` + data · podpis `stopka.redakcja` jako link do `/o-nas/` (odpowiedź na pytanie
   Google „kto to napisał”) · 🟡 czas czytania.
5. Zdjęcie główne (jak dziś).
TREŚĆ: Markdown jak dziś, miara ~70 znaków.
POD treścią:
6. Tagi (przenieść spod tytułu pod treść; zwykły tekst, bez stron tagów).
7. 🟡 „Więcej z działu {nazwa}”: 3 najnowsze inne wpisy z tego samego działu, karty bez etykiety działu.
   Gdy dział ma < 2 inne wpisy, dobrać najnowsze z całej strony.
8. Poprzedni / następny (jak dziś, w obrębie całej strony).
Czego NIE dodajemy: przycisków „udostępnij” ze skryptami (strona bez skryptów zewnętrznych), komentarzy, paska bocznego,
ramki „partner wpisu” ani pola z logo firmy. Link do firmy jest wyłącznie w zdaniu treści.
JSON-LD `BlogPosting`: dodać `articleSection` = nazwa działu; `author` zostaje Organization (redakcja) z `url` `/o-nas/`;
`dateModified` zmieniać tylko przy realnej zmianie treści.
RSS: `<category>` = nazwa działu. `llms.txt`: wpisy pogrupowane po działach.

### 3.6 Wpis-historia (wzór treści dla W3–W5; układ jak 3.5)
- Tytuł mówi, co się stało, w pierwszej osobie liczby mnogiej: wydarzenie + okoliczność, np.
  „Kuchnię robiło nam Studio Agat, a my byliśmy w [miejsce]: remont na odległość”.
- Lead (pierwszy akapit): kiedy, gdzie byliśmy, ile dni, co było do zrobienia. Bez sentencji.
- Środek chronologicznie: przed wyjazdem (co ustaliliśmy, projekt zdalnie) → w trakcie (jak wyglądały zdjęcia i rozmowy,
  co poszło nie tak) → po powrocie (odbiór, meble, co byśmy zmienili).
- Firma raz, w zdaniu o tym, co zrobiła, anchor = nazwa firmy, link bez `rel` (frontmatter `cel`).
- Koniec: 2–3 rzeczy, które zrobilibyśmy tak samo albo inaczej (zamiast „podsumowania”).
- Liczby i szczegóły wyłącznie prawdziwe (od Piotra albo z realizacji firmy). Brak faktu = pytanie do Piotra,
  nie wymyślona anegdota (wzorzec był krytykowany właśnie za fałszywie osobisty ton).
- Zdjęcia: prawdziwe z realizacji; zdjęcie podróżnicze z 29 tylko jako tło wyjazdu.
- Poradniki ogólne (np. „Remont, gdy jesteś w podróży”) linkują wewnętrznie do historii, nie do firmy.

### 3.7 Polecamy `/polecamy/`
- Okruszki: Strona główna › Polecamy. `<title>` `polecamy.tytulKarty`, `description` `polecamy.opisMeta`,
  H1 `polecamy.h1` („Polecamy”), wstęp `polecamy.wstep`: 2 zdania po ludzku, że polecamy firmy, z którymi coś razem
  zrobiliśmy (słowa Piotra), bez „zaprzyjaźnionych stron”.
- Pięć bloków firm (`polecamy.firmy[]`), każdy:
  H2 `nazwa` → akapit `coDlaNas` (co zrobili DLA NAS, czas przeszły, 1–2 zdania) → akapit `opis` (jedno zdanie,
  z czym do nich iść) → link do strony firmy (anchor = nazwa firmy, `rel="nofollow"` — blok polecający, schemat Piotra 2026-10-26) → gdy istnieje wpis-historia o tej firmie,
  link wewnętrzny do niego (z frontmattera wpisów: pierwszy wpis z `cel.adres` w domenie firmy).
  Bez logo, gwiazdek, cen, „lat na rynku”, list usług.
- Pod firmami: H2 `polecamy.naglowekZapowiedzi`, wstęp `polecamy.wstepZapowiedzi`, karty z kolekcji `polecane`
  jak dziś, przycisk `polecamy.czytajDalej` („Czytaj dalej na {zrodlo}”). Limit 12 najnowszych.
- `/z-naszych-stron/` → `/polecamy/` w `docs/przekierowania.json` (strona przekierowania jak 179 obecnych).
- JSON-LD: `CollectionPage` + `ItemList` firm (`Organization` z `name` i `url`), bez ocen.

---

## 4. Ton: przed → po

Nawias `[...]` = fakt do potwierdzenia przez Piotra; nie wolno go zgadywać.

| # | Przed (cytat z repo) | Dlaczego sztuczne | Po |
|---|---|---|---|
| 1 | `src/data/teksty.json:39`: „Piszemy krótko i konkretnie, z listami, które można wydrukować albo zapisać w telefonie.” | Chwali sam siebie, opisuje formę zamiast treści. | „Piszemy o tym, co sprawdziliśmy sami: jak pakujemy się na weekend, co zakręcamy przed wyjazdem i kto robił nam remont, kiedy nas nie było.” |
| 2 | `src/data/teksty.json:63`: „To ludzie, którzy dużo jeżdżą i dużo urządzają domów, więc znamy oba końce podróży: walizkę i klucz w drzwiach.” | Metafora na siłę, „dużo” bez liczby. | „Jest nas [kilka] osób. Na co dzień pracujemy przy [remontach i meblach], więc dom znamy od strony budowy, a wyjazdy od strony walizki.” |
| 3 | `src/data/teksty.json:75`: „W tekście wskazujemy najwyżej jedną firmę, i tylko taką, z którą współpracujemy. Robimy to jednym zdaniem tam, gdzie pomaga w temacie wpisu…” | Brzmi jak regulamin. | „Jeśli we wpisie pada nazwa firmy, to dlatego, że ta ekipa była u nas na budowie. Innych nie polecamy.” |
| 4 | `src/content/wpisy/dom-gotowy-na-gosci-z-zagranicy.md:13`: „Kto zna gościnność ludzi spotkanych w podróży, ten wie, że najlepiej odwdzięczyć się tym samym, a to oznacza dom gotowy na przyjazd.” | Sentencja zamiast początku, sztuczny most podróż → dom. | „Goście z zagranicy przylatują zmęczeni i zwykle o dziwnej porze. Najpierw zobaczą łóżko i łazienkę, więc od nich zaczynamy.” |
| 5 | `src/content/wpisy/remont-gdy-jestes-w-podrozy.md:33`: „W Warszawie projektowanie wnętrz, remonty pod klucz i nadzór inwestorski, także nad cudzymi projektami, prowadzi [Studio Agat](https://studioagat.pl/), z którym współpracujemy.” | Wyliczenie oferty jak z cennika, link do firmy w poradniku. | „Jak to wyglądało u nas, kiedy kuchnię robiło Studio Agat, a my byliśmy [gdzie, ile tygodni], opisaliśmy w [osobnym wpisie](/blog/<slug-historii>/).” (link wewnętrzny; firma linkowana dopiero w historii) |

Ten sam wzór powtarza się w `dom-na-dluzszy-wyjazd.md:13` („Dobrze zostawiony dom to taki, o którym…”),
`szafa-podroznika.md:13` („Kto pakuje się w pół godziny, ten…”) i `podloga-pod-sprzet-wyprawowy-i-rowery.md:33`
(„firma działająca od ponad piętnastu lat w domach, mieszkaniach, firmach, halach i magazynach”), a `teksty.json:41`
deklaruje uczciwość („mówimy to wprost”) zamiast ją pokazać.

---

## 5. Reguły stylu dla pisarzy (każdą da się sprawdzić)

1. **Pierwsze zdanie = fakt** (kto, gdzie, kiedy, ile), nie sentencja. Zakazane otwarcia: „Kto …, ten …”, „… to taki, który …”,
   „W dzisiejszych czasach”. Test: `grep -nE '^(Kto |W dzisiejszych)' src/content/wpisy/*.md` = 0.
2. **Słowa zakazane:** kompleksowy, profesjonalny, idealny, niezapomniany, kluczowy, dedykowany, „warto podkreślić”,
   „nie da się ukryć”, „w tym artykule”, „poniżej znajdziesz”, „ten notatnik”. Test grepem po liście = 0.
3. **Bez myślników długich** (— i –) w treści i w `teksty.json`. Test: `grep -c '[—–]'` = 0 (poza `_przyklad.md`).
4. **Zdania różnej długości:** w każdym akapicie od 3 zdań co najmniej jedno ma ≤ 8 słów; żadne nie przekracza 30 słów.
   Test: prosty licznik słów na zdanie.
5. **Wpis-historia ma ≥ 3 liczby z życia** (dni, kilometry, godziny, złote, metry) i wszystkie są prawdziwe. Źródło każdej
   liczby: Piotr albo realizacja firmy. Liczba bez źródła = pytanie do Piotra, nie tekst.
6. **„My” tylko w historiach, które się wydarzyły.** Poradnik mówi do czytelnika w 2. osobie („zakręć zawór”) i nie udaje
   własnego przeżycia. Test: wpis z `cel` bez historii nie zawiera „byliśmy”, „zrobiliśmy”.
7. **Firma w jednym zdaniu, czas przeszły, co zrobiła:** „Szafy robił nam Pan Stolarz”, nie „Pan Stolarz oferuje…”.
   Bez list usług, lat działalności i uprawnień, chyba że były ważne w tej historii. Jeden link do firmy na wpis.
8. **Bez list „N powodów / N rzeczy” w tytułach i H2.** Lista tylko tam, gdzie czytelnik ją odhacza (pakowanie, przegląd
   przed wyjazdem). H2 mówi treść („Woda i prąd: co zakręcić”), nie „Wstęp”, „Podsumowanie”.
9. **Bez deklaracji o sobie:** „rzetelnie”, „mówimy wprost”, „bez reklam”, „prosto i konkretnie”. Pokazujemy to treścią.
   Test grepem = 0 poza stroną O nas (tam wolno raz).
10. **Koniec bez morału:** ostatni akapit to rzecz do zrobienia albo co zrobilibyśmy inaczej, nie streszczenie wpisu.
    Test: ostatni akapit nie zaczyna się od „Podsumowując”, „Jak widać”, „Pamiętaj”.

---

## 6. Zasady Google (5, których się trzymamy)

1. **Link do naszej firmy tylko tam, gdzie pomaga czytelnikowi; żadnej wymiany linków.** Polityka „Link spam” wymienia
   jako schemat linkowy nadmierne wymiany linków i strony partnerskie robione wyłącznie dla linkowania krzyżowego.
   Dla nas: `/polecamy/` musi mieć własną treść (co firma zrobiła dla nas, link do historii), firmy nie dostają z niej
   listy samych linków, a strony firm nie odpowiadają linkiem zwrotnym w stopce do Ambasady.
   Źródło: https://developers.google.com/search/docs/essentials/spam-policies#link-spam
2. **Link płatny lub reklamowy ma `rel="sponsored"`; nasze polecenia z doświadczenia są zwykłymi linkami.** Google każe
   oznaczać reklamy i płatne umieszczenia wartością `sponsored`, a zwykłe linki zostawić bez kwalifikatora. Jeśli kiedyś
   wejdzie wpis opłacony przez kogoś z zewnątrz: `rel="sponsored"` i jawne oznaczenie w tekście.
   Źródło: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
3. **Domena po biurze podróży zostaje stroną o podróżach.** Polityka „Expired domain abuse” opisuje kupno wygasłej domeny
   i użycie jej głównie do manipulacji wynikami treścią o małej wartości (przykłady: treści afiliacyjne na dawnej stronie
   urzędu, kasyno na dawnej stronie szkoły). Ambasada była biurem wyjazdów 2014–2025 (`docs/ARCHIWUM-DOMENY.md`), więc
   działy Dom, Pasje, Technologia, Zdrowie piszemy od strony człowieka, który jeździ (dom na czas wyjazdu, sprzęt, zdrowie
   w drodze), a nie jako lokalne frazy usług, jak robi to wzorzec. O nas mówi wprost, że to nowy notatnik, nie biuro.
   Źródło: https://developers.google.com/search/docs/essentials/spam-policies#expired-domains
4. **Nie produkujemy wpisów na ilość i nie przyjmujemy cudzych treści do publikacji pod naszą nazwą.** „Scaled content
   abuse” to wiele stron tworzonych głównie dla pozycji; poradnik o treściach pomocnych pyta, czy publikujesz dużo treści
   na wiele tematów i czy treść powstała głównie dla ruchu z wyszukiwarki. Polityka reputacji witryny („Site reputation
   policy”) dotyczy treści stron trzecich publikowanych dla sygnałów strony‑gospodarza. Dla nas: 5 działów nie oznacza
   5 wpisów tygodniowo; pusty dział jest `noindex`, a nie zapełniany na siłę; tekstów od firm z zewnątrz nie publikujemy.
   Źródła: https://developers.google.com/search/docs/essentials/spam-policies#scaled-content ·
   https://developers.google.com/search/docs/essentials/spam-policies#site-reputation ·
   https://developers.google.com/search/docs/fundamentals/creating-helpful-content
5. **Kto, jak, po co: podpis, O nas, doświadczenie z pierwszej ręki, uczciwe daty.** Ten sam poradnik pyta, czy strony mają
   podpis autora tam, gdzie się go spodziewa, czy autor ma opisane tło, czy treść pokazuje wiedzę z pierwszej ręki, i odradza
   zmianę daty bez istotnej zmiany treści. Dla nas: podpis „Redakcja Ambasady Podróżników” z linkiem do O nas na każdym
   wpisie, historie z prawdziwych realizacji, `dateModified` tylko przy realnej zmianie.
   Źródło: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

## 7. NIE USTALONO

1. 🟡 **Klucze tekstów spoza listy WSPOLNE.md** potrzebne do trzech elementów: czas czytania (np. `interfejs.minCzytania`
   = „{n} min czytania”), „Więcej z działu” (`interfejs.wiecejZDzialu` = „Więcej z działu {nazwa}”), etykieta podpisu
   (można użyć istniejącego `stopka.redakcja`). Bez kluczy W1 pomija czas czytania i „więcej z działu” albo dostaje
   `[brak: klucz]`. Decyzja sesji głównej: dopisać w W2 albo przez integratora.
2. 🟡 **Czy na `/polecamy/` napisać, że firmy są powiązane z wydawcą** (administrator w polityce to EcoPower Polska Sp. z o.o.).
   Uczciwość mówi „tak, jednym zdaniem”; czy i jak to nazwać, rozstrzyga Piotr.
3. **Fakty do wpisów-historii** (dokąd jechaliśmy, ile dni, co robiło Studio Agat i inne firmy, zdjęcia z realizacji):
   nie ma ich w repo; pytanie do Piotra przed pisaniem historii.
4. Zwierciadło, iMagazine, Hasające Zające: szablon pojedynczego artykułu i sposób wplatania linku do firmy w treść nie
   sprawdzone (pobrane tylko strony główne i zakładki; budżet 20 stron).
5. Drugi polski blog podróżniczy z zakładką dosłownie „Polecamy” lub „Partnerzy” nie znaleziony: wyszukiwania dały strony
   „Współpraca” (media kity). Kandydat `loudavymkrokem.cz/pl/doporucujeme/` (czeski blog z polską wersją) zwrócił 404.
6. Próg hamburgera dla 7 pozycji menu: do zmierzenia w kopii W1 (dziś zmierzony dla 3 pozycji).

---

## 8. Źródła (odczyt 2026-11-03)

- https://instruktorstrzelectwa.pl/ · https://instruktorstrzelectwa.pl/category/dom/ · https://instruktorstrzelectwa.pl/kancelaria-notarialna-wroclaw/ (curl)
- https://zwierciadlo.pl/ · https://zwierciadlo.pl/zwierciadlo-poleca (curl)
- https://ladnebebe.pl/ · https://ladnebebe.pl/dom-do-ktorego-chce-sie-wracac/ (curl)
- https://imagazine.pl/ (curl)
- https://kolemsietoczy.pl/ · https://kolemsietoczy.pl/wspolpraca/ · https://kolemsietoczy.pl/sakwy-rowerowe-kolem-sie-toczy/ (curl)
- https://hasajacezajace.com/wspolpraca/ (curl)
- https://loudavymkrokem.cz/pl/doporucujeme/ (curl, 404)
- https://developers.google.com/search/docs/essentials/spam-policies (WebFetch ×2)
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content (WebFetch)
- https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links (WebFetch)
- Repo: `src/data/teksty.json`, `src/content/wpisy/*.md`, `src/components/KartaWpisu.astro`, `src/pages/blog/[slug].astro`,
  `src/pages/index.astro`, `docs/ZALOZENIA.md`, `docs/LINKI-ZEWNETRZNE.md`; analiza `/home/ecopower/projekty/WWW/analizy/instruktorstrzelectwa-pl-2026-10-29.md`.
