import { getCollection, type CollectionEntry } from 'astro:content';

export type Wpis = CollectionEntry<'wpisy'>;
export type Polecany = CollectionEntry<'polecane'>;

/**
 * Wpisy opublikowane, od najnowszego. Wpis z datą w przyszłości czeka: codzienna przebudowa w Actions (05:30 UTC)
 * wypuszcza go w dniu daty. Liczba oczekujących idzie do logu budowania.
 */
export async function opublikowane(): Promise<Wpis[]> {
  const wszystkie = await getCollection('wpisy');
  const teraz = Date.now();
  const gotowe = wszystkie.filter((w) => w.data.data.getTime() <= teraz);
  if (gotowe.length < wszystkie.length) {
    console.info(`[wpisy] oczekuje na datę publikacji: ${wszystkie.length - gotowe.length}`);
  }
  return gotowe.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export async function polecane(): Promise<Polecany[]> {
  const wszystkie = await getCollection('polecane');
  return wszystkie.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export const adresWpisu = (id: string) => `/blog/${id}/`;

const FORMAT = new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw' });
export const dataPoPolsku = (d: Date) => FORMAT.format(d);
export const dataIso = (d: Date) => d.toISOString().slice(0, 10);

/** Tekst bez znaczników HTML i nadmiarowych spacji. */
export const bezHtml = (s: string) => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
