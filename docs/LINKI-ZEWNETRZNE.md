# Linki wychodzące do naszych stron (stan na build 2026-11-03 wieczór)

Zasada (skill `linkowanie-zewnetrzne`): link do naszej witryny stoi w treści wpisu, w zdaniu, bez `rel`.
Nic sitewide: w nagłówku, menu i stopce nie ma linków do naszych stron (sprawdzone parserem na całym `dist/`,
wszystkie 25 linków leży w `<main>`). Wszystkie 5 firm to marki EcoPower Polska Sp. z o.o., wydawcy strony;
mówi to wstęp `/polecamy/`, sekcja „Kogo polecamy i dlaczego” w O nas i zdanie przy linku we wpisach.

## Linki w treści wpisów (najwyżej 1 na wpis, bez `rel`)

| Skąd | Dokąd | Anchor | rel |
|---|---|---|---|
| /blog/wlasna-strona-z-podrozy/ | https://www.ecopowerpolska.pl/strona-wizytowka/ | EcoPower Polska | brak |
| /blog/dom-na-dluzszy-wyjazd/ | https://nadihome.pl/uslugi | Nadi Home | brak |
| /blog/remont-gdy-jestes-w-podrozy/ | https://studioagat.pl/nadzor-inwestorski | Studio Agat | brak |
| /blog/szafa-podroznika/ | https://pan-stolarz.pl/szafy-na-wymiar | Pan Stolarz | brak |
| /blog/podloga-pod-sprzet-wyprawowy-i-rowery/ | https://panwylewka.pl/uslugi | Pan Wylewka | brak |

Pozostałe wpisy (Podróże, Pasje, Zdrowie, reszta Domu i Technologii, także zaplanowane na 5–20 listopada) nie linkują
do naszych stron. `dom-gotowy-na-gosci-z-zagranicy` stracił link do Nadi Home (firma ma już link w `dom-na-dluzszy-wyjazd`).

## `/polecamy/` (bez `rel`)

- 5 przycisków „Odwiedź <nazwa>” do stron głównych: studioagat.pl, pan-stolarz.pl, nadihome.pl, panwylewka.pl, www.ecopowerpolska.pl.
- 12 kart zapowiedzi z RSS „Czytaj dalej na <nazwa>”: 8 EcoPower Polska, 2 Pan Stolarz, 1 Nadi Home, 1 Studio Agat.
  Pan Wylewka: kanał RSS bez wpisów, zapowiedzi brak.

## Strona główna (bez `rel`)

3 karty zapowiedzi „Czytaj dalej na EcoPower Polska” (najnowsze z RSS) i odnośnik wewnętrzny do `/polecamy/`.

Razem w `dist/`: 25 linków do naszych stron (5 w treści wpisów, 5 przycisków firm, 15 w kartach zapowiedzi).
Według domen: ecopowerpolska.pl 13, pan-stolarz.pl 4, studioagat.pl 3, nadihome.pl 3, panwylewka.pl 2.
Zapowiedzi zmieniają się przy każdej przebudowie (codziennie 05:30 UTC), więc liczby kart są stanem na ten build.
