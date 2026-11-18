// Darmowe narzędzia strony (2026-11-18): dane kart w teksty.json `narzedzia` (jedno miejsce dla działów, stopki i llms.txt).
// {kraje} = liczba kierunków w src/data/szczepienia.json, żeby tytuł nie rozjechał się z danymi kalkulatora.
import { pobierz, wstaw } from './tekst';
import szczepienia from '../data/szczepienia.json';
import type { Dzial } from './dzialy';

export type Narzedzie = { dzial: Dzial; adres: string; nazwaKrotka: string; tytul: string; opis: string; guzik: string; llms: string };

const wartosci = { kraje: String(szczepienia.kraje.length) };
const pola = ['adres', 'nazwaKrotka', 'tytul', 'opis', 'guzik', 'llms'] as const;

export const NARZEDZIA: Narzedzie[] = (Array.isArray(pobierz('narzedzia.lista')) ? (pobierz('narzedzia.lista') as Record<string, unknown>[]) : [])
  .filter((n) => typeof n?.dzial === 'string' && pola.every((p) => typeof n[p] === 'string'))
  .map((n) => ({
    dzial: n.dzial as Dzial,
    ...(Object.fromEntries(pola.map((p) => [p, wstaw(n[p] as string, wartosci)])) as Omit<Narzedzie, 'dzial'>),
  }));

export const narzedziaDzialu = (dzial: Dzial) => NARZEDZIA.filter((n) => n.dzial === dzial);
