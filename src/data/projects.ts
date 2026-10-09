import type { ImageMetadata } from 'astro';
import type { Lang } from '@/i18n';
import type { ServiceId } from './services';
import kind from '@/assets/projects/Kind.png';
import traning from '@/assets/projects/Traning.png';
import kapten from '@/assets/projects/Kapten.png';
import wundies from '@/assets/projects/Wundies.png';
import briefly from '@/assets/projects/Briefly.png';
import gericht from '@/assets/projects/Gericht.png';
import corelink from '@/assets/projects/Corelink.png';

type ProjectCopy = {
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  highlights: string[];
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  kind: 'live' | 'demo';
  image: ImageMetadata;
  services: ServiceId[];
  featured: boolean;
} & Record<Lang, ProjectCopy>;

export const projects: Project[] = [
  {
    slug: 'kapten-mat',
    name: 'Kapten Mat',
    url: 'https://kaptenmat.se/',
    kind: 'live',
    image: kapten,
    services: ['ecommerce', 'seo', 'support'],
    featured: true,
    sv: {
      category: 'E-handel',
      summary: 'Flerspråkig webbshop för stekhällar och tillbehör med stark personlig profil, medlemsdel och eventkalender.',
      challenge:
        'Kapten Mat har en lojal publik från tv och sociala medier. Butiken behövde omvandla den uppmärksamheten till försäljning – i flera länder och på flera språk – och samtidigt lyfta fram innehåll som avsnitt, nyheter och event.',
      solution:
        'Vi arbetade fram en butik där varumärket och personen bakom står i centrum, med tydliga köpvägar direkt från startsidan, trygghetssignaler som delbetalning och fri frakt i topp, samt stöd för flera språk.',
      tags: ['E-handel', 'Flerspråkig', 'Medlemsdel', 'Klarna'],
      highlights: ['Flerspråkig butik för den nordiska marknaden', 'Medlemsfunktioner och innehållssektioner', 'Delbetalning och tydliga leveransvillkor'],
    },
    en: {
      category: 'E-commerce',
      summary: 'Multilingual online store for griddles and accessories with a strong personal brand, member area and events.',
      challenge:
        'Kapten Mat has a loyal audience from TV and social media. The store needed to turn that attention into sales – across countries and languages – while showcasing episodes, news and events.',
      solution:
        'We shaped a store that puts the brand and the person behind it front and centre, with clear buying paths from the homepage, trust signals such as instalments and free shipping up top, and multi-language support.',
      tags: ['E-commerce', 'Multilingual', 'Member area', 'Klarna'],
      highlights: ['Multilingual store for the Nordic market', 'Member features and content sections', 'Instalment payments and clear delivery terms'],
    },
  },
  {
    slug: 'wundies',
    name: 'Wundies',
    url: 'https://wundies.se/',
    kind: 'live',
    image: wundies,
    services: ['ecommerce', 'seo', 'support'],
    featured: true,
    sv: {
      category: 'E-handel',
      summary: 'Internationell webbshop för underkläder med inkontinensskydd – ett känsligt ämne som kräver tydlighet och förtroende.',
      challenge:
        'Produkten löser ett vardagsproblem som många inte pratar om. Butiken behövde kännas positiv och trygg, nå kunder i flera länder och samtidigt utbilda besökarna.',
      solution:
        'Vi byggde en butik med livsbejakande bildspråk, tydliga ingångar för dam och herr, diskret leverans som säljargument och en blogg som besvarar kundernas frågor och driver organisk trafik.',
      tags: ['E-handel', 'Flerspråkig', 'Innehåll & blogg'],
      highlights: ['Flerspråkig butik för flera marknader', 'Innehållsstrategi med blogg för SEO', 'Tydliga trygghetssignaler i hela köpresan'],
    },
    en: {
      category: 'E-commerce',
      summary: 'International online store for incontinence underwear – a sensitive topic that demands clarity and trust.',
      challenge:
        'The product solves an everyday problem that many people avoid talking about. The store had to feel positive and safe, reach customers in several countries and educate visitors along the way.',
      solution:
        'We built a store with life-affirming imagery, clear entry points for women and men, discreet delivery as a selling point and a blog that answers customer questions and drives organic traffic.',
      tags: ['E-commerce', 'Multilingual', 'Content & blog'],
      highlights: ['Multilingual store for several markets', 'Content strategy with a blog for SEO', 'Clear trust signals throughout the buyer journey'],
    },
  },
  {
    slug: 'traningsprodukter',
    name: 'Träningsprodukter',
    url: 'https://traningsprodukter.se/',
    kind: 'live',
    image: traning,
    services: ['ecommerce', 'wordpress', 'seo'],
    featured: true,
    sv: {
      category: 'E-handel',
      summary: 'Webbshop för gym och fitness med stort sortiment för privatpersoner, företag, föreningar och gym – och en fysisk butik.',
      challenge:
        'Ett brett sortiment och flera målgrupper gör det lätt för besökare att gå vilse. Butiken behövde göra det enkelt att hitta rätt produkt och samtidigt driva trafik till den fysiska butiken.',
      solution:
        'Vi strukturerade navigationen efter hur kunderna faktiskt handlar – träningsredskap, maskiner, träningsformer och varumärken – med en framträdande sökfunktion och trygghetssignaler som betyg och personlig service.',
      tags: ['E-handel', 'Stort sortiment', 'B2B & B2C'],
      highlights: ['Tydlig navigation för ett stort sortiment', 'Framträdande sök och kampanjytor', 'Koppling mellan webbshop och fysisk butik'],
    },
    en: {
      category: 'E-commerce',
      summary: 'Gym and fitness online store with a wide range for consumers, businesses, clubs and gyms – plus a physical shop.',
      challenge:
        'A large range and several audiences make it easy for visitors to get lost. The store needed to make finding the right product easy while also driving visits to the physical shop.',
      solution:
        'We structured navigation around how customers actually shop – equipment, machines, training styles and brands – with prominent search and trust signals such as ratings and personal service.',
      tags: ['E-commerce', 'Large catalogue', 'B2B & B2C'],
      highlights: ['Clear navigation for a large catalogue', 'Prominent search and campaign areas', 'Link between online store and physical shop'],
    },
  },
  {
    slug: 'kind-by-julia',
    name: 'Kind by Julia',
    url: 'https://kindbyjulia.se/',
    kind: 'live',
    image: kind,
    services: ['ecommerce', 'shopify'],
    featured: true,
    sv: {
      category: 'E-handel',
      summary: 'Varumärkesdriven webbshop för svensk hudvård, där produktlanseringar och kundbetyg står i fokus.',
      challenge:
        'Ett ungt varumärke måste bygga förtroende snabbt. Butiken behövde kännas premium, lyfta nya produkter och göra det självklart att lägga en order.',
      solution:
        'Vi skapade en ren, bildstark butik med tydliga produktlanseringar, socialt bevis i form av kundbetyg och erbjudanden som fri frakt synliga direkt.',
      tags: ['E-handel', 'Hudvård', 'Varumärke'],
      highlights: ['Premiumkänsla med stark typografi och bild', 'Kampanjytor för lanseringar', 'Kundbetyg och erbjudanden i fokus'],
    },
    en: {
      category: 'E-commerce',
      summary: 'Brand-led online store for Swedish skincare, focused on product launches and customer ratings.',
      challenge:
        'A young brand has to build trust fast. The store needed to feel premium, showcase new products and make placing an order feel obvious.',
      solution:
        'We created a clean, image-led store with clear product launches, social proof through customer ratings and offers like free shipping visible immediately.',
      tags: ['E-commerce', 'Skincare', 'Brand'],
      highlights: ['Premium feel with strong typography and imagery', 'Campaign areas for launches', 'Customer ratings and offers up front'],
    },
  },
  {
    slug: 'corelink',
    name: 'Core Link',
    url: 'https://corelink.se',
    kind: 'live',
    image: corelink,
    services: ['web', 'wordpress', 'seo'],
    featured: false,
    sv: {
      category: 'Företagssajt',
      summary: 'Internationell företagssajt för en marknadsledare inom materialhantering för pappers-, plast- och metallindustrin.',
      challenge:
        'Core Link har decennier av teknisk kompetens och en global kundbas. Sajten behövde förmedla den tyngden och göra det lätt för B2B-kunder att förstå erbjudandet.',
      solution:
        'Vi byggde en tydlig, professionell sajt med fokus på kompetens och produktområden, anpassad för en internationell publik.',
      tags: ['Företagssajt', 'Industri', 'B2B'],
      highlights: ['Tydlig presentation av komplexa produkter', 'Internationell, engelskspråkig målgrupp', 'Professionellt och förtroendeingivande uttryck'],
    },
    en: {
      category: 'Corporate website',
      summary: 'International corporate website for a market leader in material handling for the paper, plastics and metal industries.',
      challenge:
        'Core Link has decades of technical expertise and a global customer base. The site had to convey that weight and make the offering easy to understand for B2B buyers.',
      solution:
        'We built a clear, professional website focused on expertise and product areas, tailored for an international audience.',
      tags: ['Corporate site', 'Industry', 'B2B'],
      highlights: ['Clear presentation of complex products', 'International, English-speaking audience', 'Professional, trustworthy look'],
    },
  },
  {
    slug: 'briefly',
    name: 'Briefly',
    url: 'https://briefly-jkt9.onrender.com',
    kind: 'demo',
    image: briefly,
    services: ['web'],
    featured: false,
    sv: {
      category: 'AI-webbapp',
      summary: 'Open source-verktyg som sammanfattar långa artiklar med OpenAI GPT-4 – klistra in en länk och få kärnan på sekunder.',
      challenge: 'Att visa hur AI kan bakas in i en enkel, snabb webbapp som löser ett verkligt problem: för lite tid att läsa.',
      solution:
        'En React-app med ett minimalistiskt gränssnitt där användaren klistrar in en URL och får en tydlig sammanfattning via OpenAI:s API, med historik över tidigare sammanfattningar.',
      tags: ['React', 'OpenAI GPT-4', 'AI', 'Open source'],
      highlights: ['Integration mot OpenAI GPT-4', 'Minimalistiskt och snabbt gränssnitt i React', 'Öppen källkod'],
    },
    en: {
      category: 'AI web app',
      summary: 'Open-source tool that summarises long articles with OpenAI GPT-4 – paste a link and get the gist in seconds.',
      challenge: 'To show how AI can be built into a simple, fast web app that solves a real problem: too little time to read.',
      solution:
        'A React app with a minimalist interface where users paste a URL and get a clear summary via the OpenAI API, with a history of previous summaries.',
      tags: ['React', 'OpenAI GPT-4', 'AI', 'Open source'],
      highlights: ['OpenAI GPT-4 integration', 'Minimal, fast React interface', 'Open source'],
    },
  },
  {
    slug: 'gericht',
    name: 'Gericht',
    url: 'https://gerict-restaurant.onrender.com',
    kind: 'demo',
    image: gericht,
    services: ['web'],
    featured: false,
    sv: {
      category: 'Koncept',
      summary: 'Designkoncept för en fine dining-restaurang med elegant typografi, mörk palett och tydlig bordsbokning.',
      challenge: 'Att översätta känslan av en exklusiv restaurangupplevelse till webben – och få besökaren att boka bord.',
      solution:
        'En React-sajt med elegant serif-typografi, guldaccenter och en tydlig väg till meny och bordsbokning i varje vy.',
      tags: ['React', 'Restaurang', 'Koncept'],
      highlights: ['Premiumkänsla genom typografi och färg', 'Bokning alltid inom räckhåll', 'Responsiv React-implementation'],
    },
    en: {
      category: 'Concept',
      summary: 'Design concept for a fine dining restaurant with elegant typography, a dark palette and clear table booking.',
      challenge: 'To translate the feeling of an exclusive dining experience to the web – and get visitors to book a table.',
      solution:
        'A React site with elegant serif typography, gold accents and a clear path to the menu and table booking in every view.',
      tags: ['React', 'Restaurant', 'Concept'],
      highlights: ['Premium feel through typography and colour', 'Booking always within reach', 'Responsive React implementation'],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
