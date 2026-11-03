// src/content.config.ts — Content Layer (Astro 7). `z` z 'astro/zod'.
//
// wpisy    — nasze wpisy bloga: src/content/wpisy/*.md (pliki z podkreślnikiem na początku są pomijane).
// polecane — zapowiedzi z naszych stron, pisane przez scripts/agreguj-rss.mjs do src/content/polecane/*.md
//            (tylko zapowiedź i link do oryginału; pełnej treści agregator nigdy nie kopiuje).
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const KATALOG_ZDJEC = resolve(process.cwd(), 'src/assets/zdjecia');

const wpisy = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/wpisy' }),
  schema: z.object({
    tytul: z.string().min(5),
    // opis meta: 120–160 znaków (kontrola przy budowaniu, żeby wpis z błędem nie wyszedł na stronę)
    opis: z.string().min(120, 'opis krótszy niż 120 znaków').max(160, 'opis dłuższy niż 160 znaków'),
    data: z.coerce.date(),
    // nazwa pliku w src/assets/zdjecia/; brak pliku zatrzymuje budowanie z czytelnym komunikatem
    zdjecie: z.string().refine((n) => existsSync(resolve(KATALOG_ZDJEC, n.split('/').pop() ?? '')), {
      message: 'plik zdjęcia nie istnieje w src/assets/zdjecia/',
    }),
    alt: z.string().min(10),
    cel: z.object({ nazwa: z.string(), adres: z.url() }).optional(),
    tagi: z.array(z.string()).default([]),
  }),
});

const polecane = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/polecane' }),
  schema: z.object({
    tytul: z.string(),
    opis: z.string(),
    data: z.coerce.date(),
    zrodlo: z.string(),
    link: z.url(),
    zdjecie: z.url().optional(),
  }),
});

export const collections = { wpisy, polecane };
