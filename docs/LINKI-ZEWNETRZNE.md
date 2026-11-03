# Linki wychodzące do naszych stron (stan na build 2026-11-03, po historii o remoncie ze Studio Agat)

Zasada (skill `linkowanie-zewnetrzne`, schemat Piotra 2026-10-26, „to zrób” 2026-11-03): link do naszej witryny w treści wpisu
stoi w zdaniu, bez `rel`; bloki polecające (przyciski firm na `/polecamy/`, karty zapowiedzi z RSS) mają `rel="nofollow"`.
Nic sitewide: w nagłówku, menu i stopce nie ma linków do naszych stron (sprawdzone parserem na całym `dist/`,
wszystkie 26 linków leży w `<main>`). Wszystkie 5 firm to marki EcoPower Polska Sp. z o.o., wydawcy strony;
mówi to wstęp `/polecamy/`, sekcja „Kogo polecamy i dlaczego” w O nas i zdanie przy linku we wpisach.

## Linki w treści wpisów (najwyżej 1 na wpis, bez `rel`)

| Skąd | Dokąd | Anchor | rel |
|---|---|---|---|
| /blog/wlasna-strona-z-podrozy/ | https://www.ecopowerpolska.pl/strona-wizytowka/ | EcoPower Polska | brak |
| /blog/dom-na-dluzszy-wyjazd/ | https://nadihome.pl/uslugi | Nadi Home | brak |
| /blog/remont-mieszkania-gdy-bylismy-za-granica/ | https://studioagat.pl/projektowanie-wnetrz | Studio Agat | brak |
| /blog/szafa-podroznika/ | https://pan-stolarz.pl/szafy-na-wymiar | Pan Stolarz | brak |
| /blog/podloga-pod-sprzet-wyprawowy-i-rowery/ | https://panwylewka.pl/uslugi | Pan Wylewka | brak |
| /blog/jak-prowadzic-bloga/ | https://www.ecopowerpolska.pl/prowadzenie-strony-internetowej/ | EcoPower Polska | brak |

Pozostałe wpisy (Podróże, Pasje, Zdrowie, reszta Domu i Technologii, także zaplanowane na 5–20 listopada) nie linkują
do naszych stron. `dom-gotowy-na-gosci-z-zagranicy` stracił link do Nadi Home (firma ma już link w `dom-na-dluzszy-wyjazd`).
Poradnik `remont-gdy-jestes-w-podrozy` stracił link do Studio Agat (nazwa firmy została bez linku) i linkuje wewnętrznie
do historii `remont-mieszkania-gdy-bylismy-za-granica`, która niesie jedyny link do Studio Agat w treści (fakty Piotra 2026-11-03).

## `/polecamy/` (`rel="nofollow"`)

- 5 przycisków „Odwiedź <nazwa>” do stron głównych: studioagat.pl, pan-stolarz.pl, nadihome.pl, panwylewka.pl, www.ecopowerpolska.pl.
- 12 kart zapowiedzi z RSS „Czytaj dalej na <nazwa>”: 8 EcoPower Polska, 2 Pan Stolarz, 1 Nadi Home, 1 Studio Agat.
  Pan Wylewka: kanał RSS bez wpisów, zapowiedzi brak.

## Strona główna (`rel="nofollow"`)

3 karty zapowiedzi „Czytaj dalej na EcoPower Polska” (najnowsze z RSS) i odnośnik wewnętrzny do `/polecamy/`.

Razem w `dist/` (parser, build 2026-11-03): 26 linków do naszych stron — 6 w treści wpisów bez `rel`, 20 poza treścią
z `nofollow` (5 przycisków firm, 15 w kartach zapowiedzi), 0 poza treścią bez `nofollow`.
Według domen: ecopowerpolska.pl 14, pan-stolarz.pl 4, studioagat.pl 3, nadihome.pl 3, panwylewka.pl 2.
Zapowiedzi zmieniają się przy każdej przebudowie (codziennie 05:30 UTC), więc liczby kart są stanem na ten build.
