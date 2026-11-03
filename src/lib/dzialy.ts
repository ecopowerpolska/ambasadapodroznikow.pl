// Działy magazynu: slug = adres strony działu (/podroze/ …) i wartość pola `dzial` we frontmatterze wpisu.
// Kolejność = kolejność w menu i na stronie głównej. Nazwy i wstępy żyją w teksty.json (`dzialy.<slug>.*`).
import { t } from './tekst';

export const DZIALY = ['podroze', 'dom', 'pasje', 'technologia', 'zdrowie'] as const;
export type Dzial = (typeof DZIALY)[number];

export const adresDzialu = (slug: Dzial) => `/${slug}/`;
export const nazwaDzialu = (slug: Dzial) => t(`dzialy.${slug}.nazwa`);
