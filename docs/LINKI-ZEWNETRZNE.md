# Linki wychodzące do naszych stron (stan na build 2026-11-03)

Zasada (skill `linkowanie-zewnetrzne`): link do naszej witryny stoi w treści wpisu, w zdaniu, bez `rel`.
Nic sitewide: w nagłówku i stopce nie ma linków do naszych stron (sprawdzone na całym `dist/`).

## Linki w treści wpisów (1 na wpis, bez `rel`)

| Skąd | Dokąd | Anchor | rel |
|---|---|---|---|
| /blog/wlasna-strona-z-podrozy/ | https://www.ecopowerpolska.pl/ | EcoPower Polska | brak |
| /blog/dom-gotowy-na-gosci-z-zagranicy/ | https://nadihome.pl/uslugi | opisie usług Nadi Home | brak |
| /blog/dom-na-dluzszy-wyjazd/ | https://nadihome.pl/ | Nadi Home | brak |
| /blog/remont-gdy-jestes-w-podrozy/ | https://studioagat.pl/ | Studio Agat | brak |
| /blog/szafa-podroznika/ | https://pan-stolarz.pl/ | Pan Stolarz | brak |
| /blog/podloga-pod-sprzet-wyprawowy-i-rowery/ | https://panwylewka.pl/ | Pan Wylewka | brak |

Wpisy `sprzet-na-szlak-dla-poczatkujacych` i `weekend-w-drodze-pakowanie-w-20-minut` nie linkują do naszych stron (temat czysto podróżniczy).

## Zapowiedzi z RSS (agregator, `src/content/polecane/`, bez `rel`)

Karty „Czytaj dalej na …” prowadzą do wpisów źródłowych. Pokazują je strona główna (6 kart: 5 EcoPower Polska, 1 Nadi Home) i `/z-naszych-stron/` (18 kart: 10 EcoPower Polska, 2 Nadi Home, 2 Studio Agat, 4 Pan Stolarz). Anchor: „Czytaj dalej na <nazwa strony>”.
Pan Wylewka: kanał RSS bez wpisów, zapowiedzi brak.

Razem w `dist/`: 30 linków do naszych stron (6 w treści wpisów, 24 w kartach zapowiedzi; strona główna powtarza 6 kart z `/z-naszych-stron/`).
