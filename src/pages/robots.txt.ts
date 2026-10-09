import type { APIRoute } from 'astro';
import { abs } from '@/lib/schema';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /contact.php

Sitemap: ${abs('/sitemap.xml')}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
