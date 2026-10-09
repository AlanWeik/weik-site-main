export type Lang = 'sv' | 'en';
export const langs: Lang[] = ['sv', 'en'];

export type Alternates = Record<Lang, string>;

export const routes = {
  home: { sv: '/', en: '/en/' },
  services: { sv: '/tjanster/', en: '/en/services/' },
  projects: { sv: '/projekt/', en: '/en/projects/' },
  about: { sv: '/om/', en: '/en/about/' },
  contact: { sv: '/kontakt/', en: '/en/contact/' },
  thanks: { sv: '/kontakt/tack/', en: '/en/contact/thanks/' },
} satisfies Record<string, Alternates>;

export const serviceHref = (lang: Lang, slug: string) => `${routes.services[lang]}${slug}/`;
export const projectHref = (lang: Lang, slug: string) => `${routes.projects[lang]}${slug}/`;
export const contactHref = (lang: Lang, type?: string) =>
  type ? `${routes.contact[lang]}?typ=${encodeURIComponent(type)}#form` : `${routes.contact[lang]}#form`;

export const ui = {
  sv: {
    locale: 'sv_SE',
    skip: 'Hoppa till innehåll',
    nav: { services: 'Tjänster', projects: 'Case', about: 'Om Weik', contact: 'Kontakt' },
    menu: 'Meny',
    close: 'Stäng',
    themeToggle: 'Byt mellan ljust och mörkt läge',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to English',
    ctaPrimary: 'Boka gratis samtal',
    ctaShort: 'Boka samtal',
    ctaQuote: 'Få en offert',
    ctaCases: 'Se våra case',
    readMore: 'Läs mer',
    allServices: 'Alla tjänster',
    allProjects: 'Alla case',
    visitSite: 'Besök sajten',
    viewDemo: 'Se demo',
    breadcrumbHome: 'Hem',
    faqTitle: 'Vanliga frågor',
    footer: {
      tagline: 'Webbstudio i Halmstad. Vi bygger snabba hemsidor och webbshoppar som gör besökare till kunder.',
      services: 'Tjänster',
      company: 'Weik',
      contact: 'Kontakt',
      based: 'Baserade i Halmstad, Halland. Uppdrag i hela Sverige.',
      rights: 'Alla rättigheter förbehållna.',
      cv: 'CV (PDF)',
    },
    notFound: {
      title: 'Sidan finns inte',
      body: 'Länken kan vara gammal eller felstavad. Men du är fortfarande rätt ute om du behöver en ny hemsida.',
      home: 'Till startsidan',
    },
  },
  en: {
    locale: 'en_US',
    skip: 'Skip to content',
    nav: { services: 'Services', projects: 'Work', about: 'About', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    themeToggle: 'Toggle light and dark mode',
    langSwitch: 'Svenska',
    langSwitchLabel: 'Byt till svenska',
    ctaPrimary: 'Book a free call',
    ctaShort: 'Book a call',
    ctaQuote: 'Get a quote',
    ctaCases: 'See our work',
    readMore: 'Read more',
    allServices: 'All services',
    allProjects: 'All work',
    visitSite: 'Visit site',
    viewDemo: 'View demo',
    breadcrumbHome: 'Home',
    faqTitle: 'Frequently asked questions',
    footer: {
      tagline: 'Web studio in Halmstad, Sweden. We build fast websites and online stores that turn visitors into customers.',
      services: 'Services',
      company: 'Weik',
      contact: 'Contact',
      based: 'Based in Halmstad, Halland. Working with clients across Sweden and beyond.',
      rights: 'All rights reserved.',
      cv: 'CV (PDF)',
    },
    notFound: {
      title: 'Page not found',
      body: 'The link may be old or mistyped. You are still in the right place if you need a new website.',
      home: 'Back to home',
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];
