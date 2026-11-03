# Fakty o pięciu firmach, do których linkuje ambasadapodroznikow.pl

Stan na 2026-11-03 (agent R2). Źródła: repozytoria stron w `/home/ecopower/projekty/WWW/strony/<adres>/`
(ścieżki niżej są względne do tego katalogu) i żywe strony (`curl -sI`, 2026-11-03).
Cel: materiał pod wpisy-historie i zakładkę „Polecamy”. Fakty są parafrazą stron; czego strony nie mówią,
stoi w „Czego nie twierdzić” albo w `NIE USTALONO`.

## 0. Rzecz wspólna: wszystkie pięć to jedna spółka

- Studio Agat, Nadi Home, Pan Stolarz i Pan Wylewka to **marki** spółki EcoPower Polska Sp. z o.o.; ecopowerpolska.pl
  to sama spółka. Dowody: `studioagat.pl/src/data/firma.json:99` („nazwa handlowa, nie nazwa spółki”),
  `nadihome.pl/src/data/firma.json:16` („Nadi Home jest MARKĄ spółki”), `pan-stolarz.pl/src/data/firma.json`
  (pole `marka.wlasciciel`: „EcoPower Polska Sp. z o.o.”), `panwylewka.pl/src/components/formularz/FormularzKontakt.astro:100`
  („ECOPOWER POLSKA sp. z o.o. (marka Pan Wylewka)”).
- Ambasadę zbudowała ta sama spółka (repo `ecopowerpolska/ambasadapodroznikow.pl`, `STAN.md:1889`).
- **Uczciwe ujęcie na „Polecamy”:** zdanie wprost, np. „Te firmy są nam bliskie: ta sama spółka, EcoPower Polska,
  stoi za nimi i za tą stroną. Polecamy je, bo z nich korzystamy.” Bez tego zdania „polecamy firmy, z którymi
  współpracowaliśmy” wprowadza w błąd (rekomendacja wyglądałaby na niezależną).
- **Sprzeczność do wiedzy Piotra:** panwylewka.pl pisze o sobie „niezależna, lokalna firma”
  (`panwylewka.pl/src/data/tresc/o-nas.json:23`, `panwylewka.pl/src/data/tresc/uslugi.json:133`), a formularz tej samej
  strony podaje markę EcoPower. Na ambasadzie nie powtarzać „niezależna”.
- **Zdjęcia na tych stronach to w większości stock** (Canva, Pixabay), nie realizacje: `studioagat.pl/docs/ZDJECIA.md:12`,
  `nadihome.pl/docs/ZDJECIA.md:10`, `pan-stolarz.pl/docs/ZDJECIA.md:38`, `panwylewka.pl/docs/ZDJECIA.md:25`.
  Wniosek: we wpisach nie pisać „zobacz ich realizacje w galerii” jako dowodu konkretnej pracy.

---

## 1. Studio Agat (studioagat.pl)

### Oferta
Projektant i architekt wnętrz z Warszawy: projekty mieszkań, domów i biur, z rynku pierwotnego i wtórnego. Prowadzi
całą drogę: rozmowa o potrzebach, pomiary, układy funkcjonalne, moodboardy, wizualizacje 3D, dokumentacja wykonawcza,
kosztorys i harmonogram (osobny etap, przed remontem), potem remont pod klucz, meble na wymiar i nadzór autorski
albo inwestorski aż do protokołu odbioru. Projekt, remont i meble u jednej firmy, każdy etap kończy protokół.
Zestawienie materiałów robi we własnym narzędziu „Projektant” (zdjęcia produktów, eksport do PDF albo Excela).
Obszar: Warszawa i gminy wokół (`studioagat.pl/src/data/firma.json:20`).
Wyróżniki z faktów: 24 miesiące gwarancji na remont, wykończenie i meble, regulacja mebli po obciążeniu w cenie
do 3 miesięcy, OC projektanta i wykonawcy (`projektowanie-wnetrz.json:204-205`); termin montażu kuchni liczony od
umowy i zaliczki (`terminy.json:14`); harmonogram zapisany przy umowie (`projektowanie-wnetrz.json:188`);
kalkulatory orientacyjnej ceny (±10 %). Przy meblach do całego mieszkania współpracuje ze stolarnią Pan Stolarz
(`projektowanie-wnetrz.json:147`).

### Praca zdalna
`NIE USTALONO` ze stron. Strona opisuje pracę **na miejscu**: pomiary i inwentaryzacja, „Wizyty na budowie”
(`studioagat.pl/src/data/tresc/projektowanie-wnetrz.json:119`), projektant „odwiedza budowę” (`:197`).
Najbliżej pracy na odległość: wizualizacje 3D „z możliwością wprowadzania poprawek” (`:172`) i zestawienie w narzędziu
Projektant do pobrania jako PDF/Excel (`:173`); kontakt telefonem, e-mailem, formularzem (`:219`).
O projekcie zdalnym, odbiorach na zdjęciach/wideo ani kluczach u ekipy strona **nie mówi**.
Jedynym źródłem „zdalnego projektu” są słowa Piotra z 2026-11-03 (zlecenie wspólne, `WSPOLNE.md:6`).

### Realizacje
- `/projekty`: 15 opisanych projektów z dzielnicą, stylem i metrażem, np. „Kuchnia, apartament, Mokotów”
  (`studioagat.pl/src/data/tresc/projekty.json:14`), „Sypialnia, apartament, Śródmieście” (`:26`),
  „Łazienka, kamienica, Śródmieście” (`:50`), „Kuchnia, willa, Wawer” (`:74`). Uwaga: zdjęcia i opisy przeszły ze
  starego WordPressa (`docs/ZDJECIA.md:7`), część zdjęć to eksport z Canvy (`:12`); prawdziwe zdjęcia realizacji są
  tylko w profilu Google (`:81`). Traktować jako „projekty pokazane na stronie”, nie jako sprawdzone realizacje.
- `/galeria-prac`: remonty pod klucz (te same zastrzeżenia co do zdjęć).
- Wpis `/blog/od-projektu-wnetrza-do-mebli-na-wymiar`: poradnik, jak przekazać projekt stolarzowi (nie case study).

### Adresy do linków (sprawdzone `curl -sI`, 2026-11-03; strona bez ukośnika na końcu)
| Adres | Kod | Pasuje do historii |
|---|---|---|
| https://studioagat.pl/projektowanie-wnetrz | 200 (wersja z `/` → 301) | remont na wyjeździe: projekt, wizualizacje, nadzór |
| https://studioagat.pl/nadzor-inwestorski | 200 | kto pilnuje ekipy, gdy nas nie ma |
| https://studioagat.pl/meble-na-wymiar | 200 | meble do remontu |
| https://studioagat.pl/kuchnia-na-wymiar | 200 | kuchnia |
| https://studioagat.pl/galeria-prac | 200 | remont pod klucz |
| https://studioagat.pl/projekty | 200 | inspiracje |
| https://studioagat.pl/blog/od-projektu-wnetrza-do-mebli-na-wymiar | 200 | projekt a stolarz |

### Historie do napisania
**H1. „Remont mieszkania, kiedy byliśmy na wyjeździe”** (dział: dom; ten wpis zamówił Piotr wprost).
Szkic: 1) decyzja przed wyjazdem: mieszkanie do remontu, nas nie będzie przez X tygodni; 2) pierwsza rozmowa i pomiary,
zanim wyjechaliśmy; 3) wizualizacje 3D i poprawki oglądane z drogi; 4) zestawienie materiałów w PDF zamiast chodzenia
po sklepach; 5) harmonogram zapisany w umowie, nadzór na budowie zamiast nas; 6) meble na wymiar na końcu (kuchnia,
szafy); 7) powrót i odbiór z listą poprawek i protokołem. Link: `https://studioagat.pl/projektowanie-wnetrz`
(anchor w zdaniu, np. „projekt i nadzór prowadziło Studio Agat”).
Fakty z pyt. 1: wizualizacje z poprawkami, Projektant PDF/Excel, harmonogram w umowie, nadzór autorski i inwestorski,
protokół odbioru, 24 miesiące gwarancji, meble u jednej firmy.
🔴 Wymaga od Piotra faktów z życia: które mieszkanie, ile tygodni wyjazdu, dokąd, jak wyglądał kontakt, co zaskoczyło.
Bez nich wpis byłby zmyśloną anegdotą.

**H2. „Lista zakupów do remontu, którą da się przejrzeć w pociągu”** (dział: technologia).
Szkic: 1) problem: wybór płytek i lamp na odległość; 2) zestawienie w narzędziu Projektant ze zdjęciami produktów;
3) alternatywy budżetowe obok siebie; 4) PDF/Excel na telefonie; 5) decyzja i odpowiedź projektantowi; 6) co i tak
trzeba zobaczyć na żywo (płytki, fronty). Link: `https://studioagat.pl/projektowanie-wnetrz`.

### Tekst do „Polecamy”
„Studio Agat projektuje wnętrza i prowadzi remont od rysunku do odbioru, razem z meblami na wymiar. Przydaje się,
gdy nie macie czasu stać nad ekipą: harmonogram jest w umowie, a na budowę jeździ projektant. Należy do tej samej
spółki co nasza strona.” (część „co dla nas zrobili” uzupełnić faktem od Piotra, jeśli H1 jest prawdziwa).

### Czego nie twierdzić
- „Projekt zdalny”, „odbiory na zdjęciach/wideo”, „klucze u ekipy” jako **usługa Studio Agat**: strona tego nie
  mówi. Wolno opisać, jak **my** to załatwiliśmy, jeśli Piotr potwierdzi.
- Cen, kwot, czasu trwania remontu ani projektu (strona: termin ustalany po rozmowie, `projektowanie-wnetrz.json:188`).
- „Bezpłatny projekt”, „darmowa wizualizacja”.
- Że zdjęcia z galerii to „nasze mieszkanie” albo konkretne realizacje.

---

## 2. Nadi Home (nadihome.pl)

### Oferta
Rodzinna firma remontowo-wykończeniowa z Gocławia, na rynku od 2012 roku (`nadihome.pl/src/data/tresc/o-nas.json:7`).
Remonty mieszkań, domów i lokali usługowych, remonty łazienek, wykończenia pod klucz. Elektrykę i hydraulikę robi sama,
na uprawnieniach SEP, z OC; dwa lata gwarancji zapisane w umowie (`o-nas.json:8`, `:125`). Przed startem: wiążąca
oferta cenowa, umowa, termin ustalony na pierwszym spotkaniu (`o-nas.json:59`). Duże auta dostawcze, więc pomaga
w zakupach i transporcie materiałów (`o-nas.json:89`). Większość zleceń „z polecenia” (`o-nas.json:25`).
Obszar: cała Warszawa i ok. 15 km od siedziby na Gocławiu (`nadihome.pl/src/data/tresc/home.json:98`).
Sama pisze, że mebli nie robi (`nadihome.pl/src/content/wpisy/remont-mieszkania-a-meble-na-wymiar.md:11`).

### Praca zdalna
`NIE USTALONO` jako usługa. Strona mówi tylko: „W trakcie realizacji jesteśmy w stałym kontakcie i na bieżąco
informujemy Klienta o postępie prac” (`nadihome.pl/src/data/tresc/o-nas.json:36`), bez kanału (zdjęcia, wideo?).
Zdjęcia i dokumentację można wysłać e-mailem przed wyceną (`nadihome.pl/src/data/tresc/kontakt.json:86`).
Najmocniejszy ślad to **opinia klienta**, nie deklaracja firmy: „Nie jestem z Warszawy i większość spraw załatwiałem
z Panami przez telefon i maile” (`nadihome.pl/src/data/opinie.json:133`, autor na stronie: Artur Błachnio, ok. 2022).

### Realizacje
Galerie to stock Canvy (`nadihome.pl/docs/ZDJECIA.md:10`), więc realne prace widać w **opiniach** na `/opinie`:
- remont po zalaniu: usunięcie warstw, gładzie, malowanie, mieszkanie zostawione czyste (`opinie.json:205`);
- wykończenie całego mieszkania od przebudowy ścianek po instalacje i „cegiełki kominkowe” (`opinie.json:187`);
- remont łazienki po 2 miesiącach czekania na termin, wątpliwości uzgadniane na bieżąco (`opinie.json:196`);
- doradzili klimatyzację i ogrzewanie podłogowe w łazience (`opinie.json:124`); przesunięcie punktów wodnych (`opinie.json:43`).
Wpisy: `/blog/remont-mieszkania-a-meble-na-wymiar`, `/blog/remont-kuchni-kolejnosc-prac` (poradniki).

### Adresy do linków (`curl -sI` 2026-11-03; bez ukośnika na końcu)
| Adres | Kod | Pasuje do historii |
|---|---|---|
| https://nadihome.pl/remont-mieszkania-warszawa | 200 (z `/` → 301) | remont pod nieobecność |
| https://nadihome.pl/wykonczenie-pod-klucz | 200 | mieszkanie pod wynajem / po zakupie |
| https://nadihome.pl/remont-lazienki | 200 | łazienka |
| https://nadihome.pl/opinie | 200 | „co mówią klienci” |
| https://nadihome.pl/o-nas | 200 | kim są |
| https://nadihome.pl/blog/remont-mieszkania-a-meble-na-wymiar | 200 | kolejność remont → meble |
| https://nadihome.pl/uslugi | (już używany we wpisie `dom-gotowy-na-gosci-z-zagranicy`, nie mierzony dziś) | |

### Historie do napisania
**H3. „Co ustaliliśmy z ekipą, zanim wsiedliśmy do samolotu”** (dział: dom).
Szkic: 1) termin wyjazdu stały, remont musi się zmieścić; 2) pierwsze spotkanie: wycena z zakresem i termin całego
remontu; 3) umowa z wiążącą ofertą i gwarancją na piśmie; 4) zakupy i transport materiałów po stronie ekipy;
5) kontakt na bieżąco telefonem i mailem; 6) instalacje (SEP) zrobione przed tynkiem; 7) powrót: co sprawdziliśmy sami.
Link: `https://nadihome.pl/remont-mieszkania-warszawa`. Fakty z pyt. 1. 🔴 Fakty przebiegu od Piotra.

**H4. „Zalanie od sąsiada w czasie urlopu”** (dział: dom) tylko jeśli Piotr potwierdzi takie zdarzenie; inaczej
pominąć. Fakty firmy: remont po zalaniu jest w ich opiniach (`opinie.json:205`). Link: `https://nadihome.pl/remont-mieszkania-warszawa`.

### Tekst do „Polecamy”
„Nadi Home to ekipa remontowa z Gocławia, działa od 2012 roku. Elektrykę i hydraulikę robi sama, umowę i cenę ustala
przed pierwszym dniem prac, a materiały przywozi własnym autem. Dobra, gdy remont ma iść bez Was na miejscu. Ta sama
spółka co nasza strona.”

### Czego nie twierdzić
- Że wysyłają zdjęcia albo filmy z postępu, że trzymają klucze, że odbiór może być zdalny (strona tego nie mówi).
- Cen (cennik jest na ich stronie, ale się zmienia), czasu trwania remontu, terminów oczekiwania jako reguły
  („2 miesiące” to jedna opinia).
- Że robią meble (nie robią) ani projekt wnętrz (to Studio Agat).
- Cytowania opinii z nazwiskiem klienta na ambasadzie (dane osobowe z cudzej strony).

---

## 3. Pan Stolarz (pan-stolarz.pl)

### Oferta
Grupa stolarzy i specjalistów od zabudowy na wymiar w Warszawie i do ok. 30 km, od 2012 roku
(`pan-stolarz.pl/src/data/tresc/o-nas.json:50`). Kuchnie, szafy, garderoby, przedpokoje, łazienki (słupek na pralkę
i suszarkę), zabudowa RTV, pokój dziecka, skosy i miejsce pod schodami. Przebieg: rozmowa → bezpłatny pomiar
i wycena → **płatny** projekt 3D (kwota w wycenie, `o-nas.json:60`) → umowa → produkcja → transport i montaż w cenie
→ odbiór z protokołem. Kuchnia w 25 dni, szafa albo garderoba w 21–30 dni od zaksięgowania pierwszej transzy
(`jak-pracujemy.json:32`). Własna lakiernia, „70 % zamówień kończymy przed terminem z umowy” (`o-nas.json:16`).
24 miesiące gwarancji (`jak-pracujemy.json:126`) i jedna bezpłatna regulacja do 3 miesięcy po odbiorze (`o-nas.json:65`).
Prosi o zakończenie prac mokrych przed montażem (`jak-pracujemy.json:112`).

### Praca zdalna
`NIE USTALONO`, a strona mówi raczej odwrotnie: „To my przyjeżdżamy do Ciebie: pomiar, rozmowa o projekcie i montaż
odbywają się na miejscu” (`pan-stolarz.pl/src/data/tresc/o-nas.json:51`); „Przyjeżdżamy i mierzymy pomieszczenie”
(`jak-pracujemy.json:20`); przy odbiorze „Sprawdzamy z Tobą drzwi, szuflady i fronty”. Na odległość tylko pierwszy krok:
zdjęcia albo rzut e-mailem, odpowiedź w 24 godziny (`jak-pracujemy.json:16`).

### Realizacje
142 kadry to stock (`pan-stolarz.pl/docs/ZDJECIA.md:38`); prawdziwe są zdjęcia Piotra (`:23`, `:40`):
- łóżko piętrowe ze schodkami z szufladami (`src/content/zdjecia/pokoj-dziecka-lozko-pietrowe-schodki-01.json`), karta
  „pokój dziecka” na głównej (`src/data/tresc/home.json:67`) i na `/meble-na-wymiar`, `/szafy-na-wymiar`;
- jasnoszara szafa wolnostojąca z szufladami i nadstawką do sufitu (`szafa-wolnostojaca-szara-szuflady-01.json`);
- słupek z pralką i suszarką obok umywalki, `/meble-na-wymiar#lazienka` (`docs/ZDJECIA.md:40`);
- zabudowa RTV z półkami, `/meble-na-wymiar#salon` (tamże).
Wpisy: VAT 8 % na meble w zabudowie, blaty, fronty, projekt wnętrza przed meblami (poradniki).

### Adresy do linków (`curl -sI` 2026-11-03; bez ukośnika)
| Adres | Kod | Pasuje do historii |
|---|---|---|
| https://pan-stolarz.pl/meble-na-wymiar | 200 (z `/` → 301) | szafa na sprzęt, łazienka, salon, pokój dziecka |
| https://pan-stolarz.pl/jak-pracujemy | 200 | jak zamówić, gdy mało czasu |
| https://pan-stolarz.pl/kuchnie-na-wymiar | 200 | kuchnia |
| https://pan-stolarz.pl/szafy-na-wymiar | 200 | szafa w przedpokoju |
| https://pan-stolarz.pl/o-nas | 200 | kim są |
| https://pan-stolarz.pl/blog/projekt-wnetrza-przed-meblami-na-wymiar | 200 | projekt → meble |

### Historie do napisania
**H5. „Łóżko piętrowe dla dzieci, które jeżdżą z nami”** (dział: dom). Szkic: 1) mały pokój, dwoje dzieci, dużo
sprzętu; 2) pomiar na miejscu, ściany krzywe; 3) projekt 3D (płatny) i wybór frontów; 4) schodki z szufladami
zamiast drabinki: tam śpiwory, latarki, kaski; 5) montaż i odbiór; 6) regulacja po kilku tygodniach używania.
Link: `https://pan-stolarz.pl/meble-na-wymiar`. Prawdziwe zdjęcie istnieje (zdjęcie Piotra), ale 🔴 czy to „nasze”
łóżko i czyje dzieci, rozstrzyga Piotr.

**H6. „Szafa na sprzęt pod schodami albo w przedpokoju”** (dział: podróże albo dom; uwaga: wpis
`szafa-podroznika` już linkuje do Pan Stolarz, więc to raczej rozbudowa tamtego wpisu niż nowy). Fakty: zabudowa
pod schodami i skosem, szafa na kurtki, siedzisko, 21–30 dni, regulacja do 3 miesięcy.

### Tekst do „Polecamy”
„Pan Stolarz robi meble na wymiar: kuchnie, szafy, garderoby, a także łóżko piętrowe czy słupek na pralkę. Przyjeżdżają
zmierzyć, montują sami i wracają raz wyregulować fronty, kiedy meble są już zapełnione. Kuchnia trwa u nich 25 dni.
Ta sama spółka co nasza strona.”

### Czego nie twierdzić
- „Darmowy projekt 3D”, „bezpłatna wizualizacja” (projekt 3D jest płatny, `o-nas.json:60`; Piotr poprawiał to dwa razy).
- Że da się zamówić meble bez obecności (pomiar, rozmowa o projekcie i montaż są na miejscu, `o-nas.json:51`).
- Cen z kalkulatorów, terminów innych mebli niż kuchnia/szafa/garderoba.
- Że zdjęcia z galerii są realizacjami (poza pięcioma zdjęciami Piotra).

---

## 4. Pan Wylewka (panwylewka.pl)

### Oferta
Posadzki betonowe i wylewki maszynowe miksokretem (pompy Mixokret) w Warszawie i okolicach: domy, mieszkania, firmy,
hale, magazyny; „nawet do 15 piętra” (`panwylewka.pl/src/data/tresc/o-nas.json:10`). Od ponad 15 lat
(`uslugi.json:7`). Przebieg: oczyszczenie i gruntowanie podłoża, rozprowadzenie i zaciągnięcie łatą, zacieranie
mechaniczne i kontrola poziomu. Także styropian, skuwanie starych posadzek, szlichty, jastrych, styrobeton, tynki.
Bezpłatny pomiar, doradztwo i sprzątanie po pracach (`uslugi.json:117`). Pracuje od poniedziałku do soboty
(`firma.json:12`). Sama odsyła do Studio Agat po projekt (`o-nas.json:11`) i do Nadi Home po cały remont
(`uslugi.json:9`, `dlaczego-my.json:15`).

### Praca zdalna
`NIE USTALONO`: strony nic o tym nie mówią (przeszukane `src/` pod „zdaln”, „online”, „zdjęci”, „klucz”: 0 trafień w treści).

### Realizacje
Brak opisanych realizacji: `/referencje` ma 4 krótkie, anonimowe opinie (np. „Podłoga wyszła super równo”,
`referencje.json:28`) i galerię, której zdjęcia „w większości wyglądają na stock” (`docs/ZDJECIA.md:25`).
Blog: 0 wpisów (RSS niżej). `NIE USTALONO` żadnej konkretnej realizacji.

### Adresy do linków (`curl -sI` 2026-11-03; bez ukośnika)
| Adres | Kod | Pasuje do historii |
|---|---|---|
| https://panwylewka.pl/uslugi | 200 (z `/` → 301) | wylewka, przebieg, styropian |
| https://panwylewka.pl/o-nas | 200 | kim są |
| https://panwylewka.pl/referencje | 200 | opinie |

### Historie do napisania
**H7. „Najpierw wylewka, potem wyjazd, meble po powrocie”** (dział: dom). Szkic: 1) stara posadzka do skucia;
2) bezpłatny pomiar; 3) styropian i wylewka miksokretem, także wysoko w bloku; 4) wylewka schnie, kiedy nas nie ma
(bez podawania liczby dni); 5) stolarz prosi o zakończone prace mokre przed montażem (`pan-stolarz.pl/.../jak-pracujemy.json:112`);
6) po powrocie: podłoga, meble. Link: `https://panwylewka.pl/uslugi`. 🔴 Fakty przebiegu od Piotra.
(Uwaga: wpis `podloga-pod-sprzet-wyprawowy-i-rowery` już linkuje do Pan Wylewka; H7 to drugi wpis, inny temat.)

### Tekst do „Polecamy”
„Pan Wylewka robi wylewki betonowe maszynowo, miksokretem, także na wysokich piętrach bloków. Przyjeżdżają zmierzyć
za darmo i sprzątają po sobie. Warto do nich iść, zanim zamówicie podłogę albo meble. Ta sama spółka co nasza strona.”

### Czego nie twierdzić
- „Niezależna firma” (patrz §0).
- Czasu schnięcia, gwarancji w latach, cen (od 32 zł/m² jest na ich stronie, ale ceny się zmieniają i nie pasują do
  tonu historii).
- Konkretnych realizacji, których strona nie opisuje.

---

## 5. EcoPower Polska (www.ecopowerpolska.pl)

### Oferta
Spółka z Gocławia budująca strony i sklepy internetowe dla firm: projekt, panel do edycji treści (Sveltia w repozytorium
albo PHP na hostingu), hosting na lh.pl albo wizytówka na GitHub Pages, domena i poczta, formularze z Turnstile,
widoczność w Google i wizytówka Google, pomiar PageSpeed każdej strony, Facebook i Instagram, raporty z ruchu
(`ecopowerpolska.pl/src/data/oferta.json:3-47`). Nowa strona powstaje pod adresem roboczym obok starej (`oferta.json:63`),
na stronę trafiają prawdziwe zdjęcia, nie obrazy z generatora (`oferta.json:59`).

### Praca zdalna
Częściowo TAK: „Wiele spraw da się też załatwić mailem i przez telefon” (`ecopowerpolska.pl/src/data/uslugi/strony-internetowe-warszawa.json:158`);
gotową stronę ogląda się pod adresem roboczym przed przełączeniem (`oferta.json:63`). Spotkanie na miejscu tylko
w Warszawie (tamże, `:158`).

### Realizacje
Lista w `src/data/serwisy.json`: Studio Agat (przeniesienie z WordPressa, kalkulator kuchni, panel PHP), Nadi Home
(Astro zamiast WordPressa, panel Sveltia), Pan Stolarz (od zera, kalkulatory, wpisy na Facebooka), trzy strony
kuchnia/szafy/garderoba na wymiar, Pan Wylewka (przepisanie z WordPressa). Case study:
wpis „Jak wygląda strona firmy meblowej i studia wnętrz: dwie realizacje krok po kroku”
(`src/content/wpisy/strona-firmy-meblowej-i-studia-wnetrz-dwie-realizacje.md:21`, `:29`). Ta strona (ambasada) też.

### Adresy do linków (`curl -sI` 2026-11-03; **z ukośnikiem**, bez → 301)
| Adres | Kod | Pasuje do historii |
|---|---|---|
| https://www.ecopowerpolska.pl/strony-internetowe-warszawa/ | 200 (bez `/` → 301) | strona dla małej firmy turystycznej |
| https://www.ecopowerpolska.pl/blog/strona-firmy-meblowej-i-studia-wnetrz-dwie-realizacje/ | 200 (bez `/` → 301) | jak powstały strony firm z tych historii |
| https://www.ecopowerpolska.pl/strona-wizytowka/ | bez `/` → 301 na ten adres; sam adres z `/` nie mierzony `-I`, `GET` = 200 | wizytówka na GitHub Pages |

### Historie do napisania
**H8. „Jak powstał ten notatnik”** (dział: technologia). Szkic: 1) stara domena po biurze wyjazdów
(`docs/ARCHIWUM-DOMENY.md`); 2) strona z gotowych plików, darmowy hosting GitHub Pages; 3) wpisy pisane z drogi,
publikacja jednym zapisem; 4) zapowiedzi z blogów pięciu firm zbierane co rano z RSS; 5) zdjęcia: tylko licencjonowane,
bez generatora; 6) czego się nauczyliśmy. Link: `https://www.ecopowerpolska.pl/` albo `/strona-wizytowka/`.
Uczciwie: „stronę zrobiła nam EcoPower Polska, spółka, do której należymy”.

**H9. „Strona dla przewodnika albo pensjonatu: co wystarczy”** (dział: technologia) tylko jako poradnik;
link wewnętrzny do H8, nie do firmy (zasada `WSPOLNE.md:22`).

### Tekst do „Polecamy”
„EcoPower Polska zrobiła tę stronę i strony czterech firm z tej listy. Budują szybkie strony i sklepy, a większość
spraw da się z nimi załatwić mailem i telefonem. To spółka, do której należymy.”

### Czego nie twierdzić
- Cen i czasu budowy (są w ich wpisach, ale zależą od zakresu).
- Że ambasada stoi na lh.pl (stoi na GitHub Pages) albo że ma panel treści.

---

## RSS (pobrane 2026-11-03, kod 200 wszystkie)

| Kanał | Wpisów | Ostatni wpis (UTC) |
|---|---|---|
| https://www.ecopowerpolska.pl/rss.xml | 10 | 2026-10-31 05:00 („Prawne aspekty strony internetowej…”) |
| https://studioagat.pl/rss.xml | 2 | 2026-10-26 20:02 („Od projektu wnętrza do mebli na wymiar…”) |
| https://nadihome.pl/rss.xml | 2 | 2026-10-26 20:02 („Remont mieszkania a meble na wymiar…”) |
| https://pan-stolarz.pl/rss.xml | 4 | 2026-10-26 20:00 („Projekt wnętrza przed meblami na wymiar…”) |
| https://panwylewka.pl/rss.xml | 0 | brak |

## NIE USTALONO

1. Praca zdalna jako usługa: Studio Agat, Nadi Home, Pan Stolarz, Pan Wylewka (strony nie mówią; Pan Stolarz wprost
   pisze o pracy na miejscu). Historie H1, H3, H4, H5, H7 potrzebują faktów od Piotra (kiedy, które mieszkanie, ile
   tygodni, jak szedł kontakt), inaczej to fikcja podana jako relacja.
2. „Co dla nas zrobili” dla Studio Agat, Nadi Home, Pan Stolarz, Pan Wylewka: brak źródła. Jedyny potwierdzony fakt
   „dla nas”: EcoPower zbudowała ambasadę.
3. Realizacje Pan Wylewka: żadna nie jest opisana.
4. Czy 15 projektów na studioagat.pl/projekty to realizacje firmy (zdjęcia i opisy ze starego WordPressa, część z Canvy).
5. Czy pięć zdjęć Piotra na pan-stolarz.pl pochodzi z jednego mieszkania i czy można je nazwać „naszym”.
6. Sprzeczność „niezależna firma” na panwylewka.pl wobec marki EcoPower.

## Źródła (plik:linia; ścieżki względem `/home/ecopower/projekty/WWW/strony/`)

- Studio Agat: `studioagat.pl/src/data/firma.json:20,99`; `studioagat.pl/src/data/tresc/projektowanie-wnetrz.json:8,119,147,172,173,188,196,197,204,205,219`;
  `studioagat.pl/src/data/tresc/terminy.json:14`; `studioagat.pl/src/data/tresc/gwarancja.json:8`;
  `studioagat.pl/src/data/tresc/projekty.json:14,26,50,74`; `studioagat.pl/docs/ZDJECIA.md:7,12,81`.
- Nadi Home: `nadihome.pl/src/data/firma.json:16`; `nadihome.pl/src/data/tresc/o-nas.json:7,8,25,36,59,89,125`;
  `nadihome.pl/src/data/tresc/home.json:98`; `nadihome.pl/src/data/tresc/kontakt.json:86`;
  `nadihome.pl/src/data/opinie.json:43,124,133,187,196,205`; `nadihome.pl/docs/ZDJECIA.md:10`;
  `nadihome.pl/src/content/wpisy/remont-mieszkania-a-meble-na-wymiar.md:11`.
- Pan Stolarz: `pan-stolarz.pl/src/data/firma.json` (pole `marka`); `pan-stolarz.pl/src/data/tresc/o-nas.json:16,50,51,60,65`;
  `pan-stolarz.pl/src/data/tresc/jak-pracujemy.json:16,20,32,112,126`; `pan-stolarz.pl/src/data/tresc/home.json:67`;
  `pan-stolarz.pl/docs/ZDJECIA.md:23,38,40`; `pan-stolarz.pl/src/content/zdjecia/pokoj-dziecka-lozko-pietrowe-schodki-01.json`;
  pamięć `fakty-oferty-pan-stolarz.md` (25 dni, regulacja, 3D płatny, lakiernia).
- Pan Wylewka: `panwylewka.pl/src/data/firma.json:12`; `panwylewka.pl/src/data/tresc/o-nas.json:10,11,23`;
  `panwylewka.pl/src/data/tresc/uslugi.json:7,9,117,133`; `panwylewka.pl/src/data/tresc/dlaczego-my.json:15`;
  `panwylewka.pl/src/data/tresc/referencje.json:28`; `panwylewka.pl/src/components/formularz/FormularzKontakt.astro:100`;
  `panwylewka.pl/docs/ZDJECIA.md:25`.
- EcoPower: `ecopowerpolska.pl/src/data/oferta.json:3,47,59,63`; `ecopowerpolska.pl/src/data/uslugi/strony-internetowe-warszawa.json:158`;
  `ecopowerpolska.pl/src/data/serwisy.json:7`; `ecopowerpolska.pl/src/content/wpisy/strona-firmy-meblowej-i-studia-wnetrz-dwie-realizacje.md:21,29`.
- Ambasada: `/home/ecopower/projekty/WWW/STAN.md:1887-1902`; `ambasadapodroznikow.pl/docs/LINKI-ZEWNETRZNE.md`.
- Sieć: 37 żądań `curl` do pięciu domen (31 `-sI` na podstrony, 5 RSS, 1 `GET` strony wizytówki), 2026-11-03.
