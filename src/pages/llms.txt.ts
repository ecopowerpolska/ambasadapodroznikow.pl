// /llms.txt — streszczenie strony dla asystentów AI (llmstxt.org), składane z tych samych danych co strona.
// Bez daty budowania: zmieniałaby się przy każdej przebudowie, choć treść stoi.
import type { APIRoute } from 'astro';
import { t } from '../lib/tekst';
import { opublikowane, polecane, adresWpisu, bezHtml } from '../lib/wpisy';

export const GET: APIRoute = async () => {
  const baza = new URL('/', import.meta.env.SITE).href.replace(/\/$/, '');
  const wpisy = await opublikowane();
  const zaplowki = (await polecane()).slice(0, 20);
  const linie = [
    `# ${t('marka.nazwa')}`,
    '',
    `> ${t('marka.haslo')}`,
    '',
    bezHtml(t('marka.opisKrotki')),
    '',
    '## Strony',
    `- [Blog](${baza}/blog/): wszystkie wpisy`,
    `- [O nas](${baza}/o-nas/): kim jesteśmy`,
    `- [Z naszych stron](${baza}/z-naszych-stron/): zapowiedzi wpisów z naszych serwisów, z linkiem do oryginału`,
    `- [Polityka prywatności](${baza}/polityka-prywatnosci/): strona bez cookies i bez analityki`,
    `- [Kanał RSS](${baza}/rss.xml): nowe wpisy`,
    '',
    '## Wpisy',
    ...wpisy.map((w) => `- [${w.data.tytul}](${baza}${adresWpisu(w.id)}): ${bezHtml(w.data.opis)}`),
    '',
    '## Z naszych stron',
    ...zaplowki.map((w) => `- [${w.data.tytul}](${w.data.link}): ${w.data.zrodlo}`),
    '',
  ];
  return new Response(linie.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
