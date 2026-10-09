# weik.se

Astro (statisk build) + Tailwind v4. Svenska på `/`, engelska på `/en/`.

## Utveckling

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # bygger till dist/
npm run og         # genererar om public/og.png och apple-touch-icon.png
```

Om bygget klagar på telemetri: `ASTRO_TELEMETRY_DISABLED=1 npm run build`.

## Var innehållet ligger

| Vad | Fil |
| --- | --- |
| Tjänster (copy, **metaTitle/metaDescription**, FAQ per tjänst) | `src/data/services.ts` |
| Case | `src/data/projects.ts` |
| Process, problem, "varför Weik", FAQ för start/kontakt, skills | `src/data/content.ts` |
| E-post, LinkedIn, ort, Spline-scen | `src/config/site.ts` |
| URL:er för sv/en | `src/i18n/index.ts` |

### SEO – unik titel & beskrivning per sida

- **Tjänstesidor** (`/tjanster/...`): sätt `metaTitle` och `metaDescription` i varje språkblock i `src/data/services.ts` (t.ex. `sv.metaTitle` för webb-fullstack).
- **Startsida, tjänsteöversikt, case-lista, om, kontakt, tack**: `title` och `description` i `copy`-objektet i respektive fil under `src/views/` (t.ex. `HomeView.astro`, `ServicesView.astro`).
- **Enskilda case**: genereras i `ProjectView.astro` från casets namn/kategori (lägg till egna fält i `projects.ts` om du vill styra dem manuellt).

## Spline

1. Bygg en scen i Spline, välj Export → Code → React och kopiera `.splinecode`-URL:en.
2. Skapa `.env` med `PUBLIC_SPLINE_SCENE=https://prod.spline.design/.../scene.splinecode`.
3. Bygg om. Scenen laddas bara på desktop, när webbläsaren är ledig, och tonar in över CSS-klotet. Mobil och "reducerad rörelse" får CSS-klotet.

## Deploy till Inleed

1. `npm run build`
2. Ladda upp **innehållet** i `dist/` (inte själva mappen) till webbroten för weik.se via FTP eller filhanteraren, inklusive dolda filen `.htaccess`.
3. Kontrollera att PHP är aktivt (för `contact.php`) och att SSL är på för weik.se.
4. Skicka ett testmeddelande via `/kontakt/`. Kommer det inte fram: skapa adressen `no-reply@weik.se` i Inleeds panel (eller ändra `FROM_EMAIL` i `public/contact.php` till en befintlig adress på domänen).
5. Lägg till sajten i Google Search Console och skicka in `https://weik.se/sitemap.xml`.
