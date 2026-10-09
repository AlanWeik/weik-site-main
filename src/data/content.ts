import type { Lang } from '@/i18n';
import type { Faq } from './services';

type Step = { title: string; body: string };
type Point = { title: string; body: string };

export const process: Record<Lang, Step[]> = {
  sv: [
    { title: 'Gratis samtal', body: '30 minuter där vi lär känna din verksamhet, dina mål och vad som håller dig tillbaka i dag.' },
    { title: 'Förslag & fast pris', body: 'Du får en tydlig plan med omfattning, tidslinje och fast pris. Inga överraskningar.' },
    { title: 'Design & utveckling', body: 'Vi designar, bygger och testar i korta iterationer så att du ser framstegen hela vägen.' },
    { title: 'Lansering & tillväxt', body: 'Vi lanserar, mäter och förbättrar – och finns kvar när du vill ta nästa steg.' },
  ],
  en: [
    { title: 'Free call', body: '30 minutes to understand your business, your goals and what is holding you back today.' },
    { title: 'Proposal & fixed price', body: 'You get a clear plan with scope, timeline and a fixed price. No surprises.' },
    { title: 'Design & build', body: 'We design, build and test in short iterations so you see progress all the way.' },
    { title: 'Launch & growth', body: 'We launch, measure and improve – and stay around when you are ready for the next step.' },
  ],
};

export const pains: Record<Lang, Point[]> = {
  sv: [
    { title: 'Den syns inte på Google', body: 'Kunderna söker efter det du erbjuder i Halmstad – och hittar dina konkurrenter.' },
    { title: 'Den är för långsam', body: 'Varje extra sekund i laddtid kostar besökare. I mobilen är tålamodet ännu kortare.' },
    { title: 'Den genererar inga affärer', body: 'Snygg kanske, men besökarna vet inte vad de ska göra härnäst – så de gör ingenting.' },
    { title: 'Den är svår att uppdatera', body: 'Varje ändring kräver en utvecklare, så innehållet blir gammalt och tappar relevans.' },
  ],
  en: [
    { title: 'Nobody finds it on Google', body: 'Customers search for exactly what you offer – and find your competitors instead.' },
    { title: 'It is too slow', body: 'Every extra second of load time costs visitors. On mobile, patience is even shorter.' },
    { title: 'It does not generate business', body: 'It might look fine, but visitors do not know what to do next – so they do nothing.' },
    { title: 'It is hard to update', body: 'Every change needs a developer, so content goes stale and loses relevance.' },
  ],
};

export const why: Record<Lang, Point[]> = {
  sv: [
    { title: 'Lokalt i Halmstad', body: 'Vi ses gärna på plats i Halland. Du får en partner som förstår den lokala marknaden.' },
    { title: 'En kontakt, hela vägen', body: 'Strategi, design, kod och SEO från samma team. Inga mellanhänder, inga missförstånd.' },
    { title: 'Fast pris', body: 'Du vet vad du betalar innan vi börjar. Omfattningen är tydlig från dag ett.' },
    { title: 'Du äger allt', body: 'Kod, design, innehåll och domän är dina. Ingen inlåsning, aldrig.' },
    { title: 'Byggt för fart', body: 'Modern teknik som ger gröna Core Web Vitals och nöjdare besökare – och Google.' },
    { title: 'Mätbart', body: 'Vi mäter det som spelar roll: förfrågningar, försäljning och synlighet.' },
  ],
  en: [
    { title: 'Local in Halmstad', body: 'Happy to meet in person in Halland, and work remotely with clients anywhere.' },
    { title: 'One contact, all the way', body: 'Strategy, design, code and SEO from the same team. No middlemen, no misunderstandings.' },
    { title: 'Fixed price', body: 'You know what you pay before we start. Scope is clear from day one.' },
    { title: 'You own everything', body: 'Code, design, content and domain are yours. No lock-in, ever.' },
    { title: 'Built for speed', body: 'Modern tech for green Core Web Vitals and happier visitors – and Google.' },
    { title: 'Measurable', body: 'We measure what matters: leads, sales and visibility.' },
  ],
};

export const homeFaq: Record<Lang, Faq[]> = {
  sv: [
    {
      q: 'Vad kostar en ny hemsida?',
      a: 'Det beror på omfattning, funktioner och integrationer. Efter ett kostnadsfritt samtal får du ett fast pris med tydligt definierad leverans – så att du vet exakt vad du får innan vi börjar.',
    },
    {
      q: 'Hur lång tid tar det att bygga en hemsida?',
      a: 'En företagssajt tar oftast tre till sex veckor från start till lansering. En webbshop eller skräddarsydd webbapp tar normalt sex till tolv veckor beroende på omfattning.',
    },
    {
      q: 'Jobbar ni bara med företag i Halmstad?',
      a: 'Vi är baserade i Halmstad och träffar gärna kunder på plats i hela Halland, men vi tar uppdrag i hela Sverige och internationellt på distans.',
    },
    {
      q: 'Kan jag uppdatera hemsidan själv?',
      a: 'Ja. Vi bygger så att du enkelt kan ändra texter, bilder och sidor själv, och vi visar hur allt fungerar vid lanseringen.',
    },
    {
      q: 'Ingår SEO när ni bygger en hemsida?',
      a: 'Ja. Teknisk SEO, snabba laddtider, strukturerad data och en sökordsanpassad sidstruktur ingår alltid. Vill du klättra snabbare erbjuder vi även löpande SEO-arbete.',
    },
    {
      q: 'Vilken plattform ska jag välja – WordPress, Shopify eller skräddarsytt?',
      a: 'Det avgörs av dina mål. Shopify är oslagbart för att snabbt komma igång med e-handel, WordPress för innehållstunga sajter du vill redigera själv, och en skräddarsydd lösning när du behöver maximal prestanda eller unika funktioner. Vi rekommenderar alltid det som ger bäst affär för dig.',
    },
  ],
  en: [
    {
      q: 'How much does a new website cost?',
      a: 'It depends on scope, features and integrations. After a free call you get a fixed price with a clearly defined delivery – so you know exactly what you get before we start.',
    },
    {
      q: 'How long does it take to build a website?',
      a: 'A company website usually takes three to six weeks from kick-off to launch. An online store or custom web app typically takes six to twelve weeks depending on scope.',
    },
    {
      q: 'Do you only work with businesses in Halmstad?',
      a: 'We are based in Halmstad and happy to meet clients in person across Halland, but we work with clients throughout Sweden and internationally.',
    },
    {
      q: 'Can I update the website myself?',
      a: 'Yes. We build so you can easily change copy, images and pages yourself, and we walk you through everything at launch.',
    },
    {
      q: 'Is SEO included when you build a website?',
      a: 'Yes. Technical SEO, fast load times, structured data and a keyword-driven site structure are always included. If you want to climb faster we also offer ongoing SEO work.',
    },
    {
      q: 'Which platform should I choose – WordPress, Shopify or custom?',
      a: 'It depends on your goals. Shopify is unbeatable for getting started with e-commerce fast, WordPress for content-heavy sites you want to edit yourself, and custom when you need maximum performance or unique features. We always recommend what is best for your business.',
    },
  ],
};

export const contactFaq: Record<Lang, Faq[]> = {
  sv: [
    { q: 'Är första samtalet verkligen gratis?', a: 'Ja. Det första samtalet är helt kostnadsfritt och förpliktar till ingenting. Du får konkreta tips oavsett om vi jobbar ihop eller inte.' },
    { q: 'Hur snabbt svarar ni?', a: 'Vi svarar på alla förfrågningar inom en arbetsdag.' },
    { q: 'Vad behöver jag förbereda?', a: 'Ingenting egentligen. Har du en befintlig sajt, exempel du gillar eller en ungefärlig budget hjälper det oss att ge ett mer träffsäkert förslag.' },
  ],
  en: [
    { q: 'Is the first call really free?', a: 'Yes. The first call is completely free with no obligation. You get concrete advice whether we work together or not.' },
    { q: 'How quickly do you reply?', a: 'We reply to all enquiries within one business day.' },
    { q: 'What do I need to prepare?', a: 'Nothing really. An existing site, examples you like or a rough budget help us give a more accurate proposal.' },
  ],
};

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Astro',
  '.NET',
  'SQL',
  'PHP',
  'WordPress',
  'WooCommerce',
  'Shopify',
  'Umbraco',
  'Sass',
  'Tailwind CSS',
  'SEO',
  'Git',
];
