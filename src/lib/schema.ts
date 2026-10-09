import { site } from '@/config/site';
import type { Lang } from '@/i18n';
import type { Faq } from '@/data/services';

const orgId = `${site.url}/#organization`;
const personId = `${site.url}/#alan-weik`;
const websiteId = `${site.url}/#website`;

export const abs = (path: string) => new URL(path, site.url).toString();

export function organization(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        url: site.url,
        email: site.email,
        image: abs(site.ogImage),
        logo: abs('/favicon.svg'),
        description:
          lang === 'sv'
            ? 'Weik är en webbstudio och fullstackutvecklare i Halmstad som bygger hemsidor, e-handel, WordPress- och Shopify-lösningar med fokus på SEO och konvertering.'
            : 'Weik is a web studio and full-stack developer in Halmstad, Sweden, building websites, e-commerce, WordPress and Shopify solutions focused on SEO and conversion.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.city,
          addressRegion: site.regionFull,
          addressCountry: site.country,
        },
        geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
        areaServed: [
          { '@type': 'City', name: 'Halmstad' },
          { '@type': 'AdministrativeArea', name: 'Halland' },
          { '@type': 'Country', name: 'Sverige' },
        ],
        founder: { '@id': personId },
        sameAs: [site.linkedin],
        knowsAbout: ['Webbutveckling', 'Fullstackutveckling', 'E-handel', 'WordPress', 'Shopify', 'SEO', 'Astro', 'React', '.NET'],
        priceRange: '$$',
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.founder,
        jobTitle: lang === 'sv' ? 'Fullstackutvecklare' : 'Full-stack developer',
        worksFor: { '@id': orgId },
        email: site.email,
        sameAs: [site.linkedin],
        address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.url,
        name: site.name,
        publisher: { '@id': orgId },
        inLanguage: ['sv-SE', 'en'],
      },
    ],
  };
}

export function breadcrumbs(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

export function faqPage(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function service(opts: { name: string; description: string; url: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: abs(opts.url),
    provider: { '@id': orgId },
    areaServed: [
      { '@type': 'City', name: 'Halmstad' },
      { '@type': 'AdministrativeArea', name: 'Halland' },
    ],
    inLanguage: opts.lang === 'sv' ? 'sv-SE' : 'en',
  };
}

export function creativeWork(opts: { name: string; description: string; url: string; image: string; live: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: opts.name,
    description: opts.description,
    url: abs(opts.url),
    image: abs(opts.image),
    sameAs: opts.live,
    creator: { '@id': orgId },
  };
}
