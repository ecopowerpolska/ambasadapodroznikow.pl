// Dane strukturalne (schema.org) składane z tych samych tekstów i danych co widoczna strona.
import { t } from './tekst';

const baza = () => new URL('/', import.meta.env.SITE).href.replace(/\/$/, '');
export const adresBezwzgledny = (sciezka: string) => new URL(sciezka, import.meta.env.SITE).href;

/** Spółka wydająca stronę (ujawnienie wydawcy w danych strukturalnych, zgodne z tekstem na /o-nas/ i /polecamy/). */
export const WYDAWCA = {
  '@type': 'Organization',
  name: 'EcoPower Polska Sp. z o.o.',
  url: 'https://www.ecopowerpolska.pl/',
};

export function organizacja(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${baza()}/#organizacja`,
    name: t('marka.nazwa'),
    url: `${baza()}/`,
    logo: { '@type': 'ImageObject', url: `${baza()}/logo-ambasada.png`, width: 512, height: 512 },
    description: t('marka.opisKrotki'),
    slogan: t('marka.haslo'),
    parentOrganization: WYDAWCA,
  };
}

export function stronaWww(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${baza()}/#strona`,
    url: `${baza()}/`,
    name: t('marka.nazwa'),
    description: t('marka.haslo'),
    inLanguage: 'pl-PL',
    publisher: { '@id': `${baza()}/#organizacja` },
  };
}

export function okruszki(pozycje: { nazwa: string; adres: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pozycje.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.nazwa,
      item: adresBezwzgledny(p.adres),
    })),
  };
}
