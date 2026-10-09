import type { APIRoute } from 'astro';
import { routes, serviceHref, projectHref, type Alternates } from '@/i18n';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { abs } from '@/lib/schema';

const pages: { alt: Alternates; priority: string }[] = [
  { alt: routes.home, priority: '1.0' },
  { alt: routes.services, priority: '0.9' },
  ...services.map((s) => ({ alt: { sv: serviceHref('sv', s.sv.slug), en: serviceHref('en', s.en.slug) }, priority: '0.9' })),
  { alt: routes.projects, priority: '0.7' },
  ...projects.map((p) => ({ alt: { sv: projectHref('sv', p.slug), en: projectHref('en', p.slug) }, priority: '0.6' })),
  { alt: routes.about, priority: '0.7' },
  { alt: routes.contact, priority: '0.8' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages.flatMap(({ alt, priority }) =>
    (['sv', 'en'] as const).map(
      (lang) => `  <url>
    <loc>${abs(alt[lang])}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${lang === 'sv' ? priority : (Number(priority) - 0.1).toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="sv" href="${abs(alt.sv)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(alt.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt.sv)}"/>
  </url>`,
    ),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
