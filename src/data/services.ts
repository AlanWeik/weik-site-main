import type { Lang } from '@/i18n';

export type Faq = { q: string; a: string };

type ServiceCopy = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  problemsTitle: string;
  problems: string[];
  solutionTitle: string;
  solution: string;
  outcomes: { title: string; body: string }[];
  deliverables: string[];
  idealFor: string;
  faq: Faq[];
};

export type Service = {
  id: ServiceId;
  number: string;
  tags: string[];
  relatedProjects: string[];
} & Record<Lang, ServiceCopy>;

export type ServiceId = 'web' | 'ecommerce' | 'wordpress' | 'shopify' | 'seo' | 'support';

export const services: Service[] = [
  {
    id: 'web',
    number: '01',
    tags: ['Astro', 'React', 'Next.js', '.NET', 'TypeScript', 'SQL'],
    relatedProjects: ['corelink', 'briefly', 'gericht'],
    sv: {
      slug: 'webb-fullstack',
      name: 'Webbutveckling & fullstack',
      short: 'Skräddarsydda hemsidor och webbappar som laddar på under en sekund och är byggda för att generera förfrågningar.',
      metaTitle: 'Fullstackutvecklare i Halmstad – webbutveckling & webbappar | Weik',
      metaDescription:
        'Behöver du en fullstackutvecklare i Halmstad? Weik bygger snabba, skräddarsydda hemsidor och webbappar i Astro, React och .NET för företag i Halland. Boka ett gratis samtal.',
      h1: 'Fullstackutvecklare i Halmstad för hemsidor och webbappar som levererar',
      lead: 'Från företagssajt till skräddarsydd webbapplikation. Vi bygger hela kedjan – design, frontend, backend och databas – så att du får en lösning som är snabb, säker och enkel att växa med.',
      problemsTitle: 'Låter det bekant?',
      problems: [
        'Hemsidan ser daterad ut och ger ett sämre intryck än ditt faktiska erbjudande.',
        'Sajten är långsam, särskilt i mobilen, och besökarna lämnar innan de hittar det de söker.',
        'Du är låst i en mall eller byrå och varje liten ändring tar veckor och kostar extra.',
      ],
      solutionTitle: 'Så löser vi det',
      solution:
        'Vi börjar med dina affärsmål och dina kunders frågor, inte med tekniken. Sedan bygger vi en sajt med modern arkitektur där varje sida har ett tydligt jobb: att leda besökaren vidare till en förfrågan, ett köp eller ett samtal.',
      outcomes: [
        { title: 'Blixtsnabb', body: 'Statiskt genererade sidor och minimal JavaScript ger toppresultat i Core Web Vitals.' },
        { title: 'Byggd för att konvertera', body: 'Tydlig struktur, starka budskap och CTA:er där besökaren faktiskt fattar beslut.' },
        { title: 'Redo att växa', body: 'Ren kod och genomtänkt backend gör det enkelt att bygga vidare när verksamheten utvecklas.' },
      ],
      deliverables: [
        'Strategi, sidstruktur och copy som säljer',
        'Unik design anpassad för mobil först',
        'Frontend i Astro/React, backend i .NET eller Node',
        'Integrationer mot CRM, betalning, bokning eller API:er',
        'Teknisk SEO, schema-markup och analys från dag ett',
        'Lansering, utbildning och support',
      ],
      idealFor: 'Företag i Halmstad och Halland som vill ha en sajt som drar in kunder, eller behöver en webbapp som inte går att lösa med en färdig mall.',
      faq: [
        {
          q: 'Vad gör en fullstackutvecklare?',
          a: 'En fullstackutvecklare bygger både det besökaren ser (frontend) och logiken bakom (backend, databaser och integrationer). För dig betyder det en kontaktperson för hela projektet och inga överlämningar mellan olika leverantörer.',
        },
        {
          q: 'Vad kostar en skräddarsydd hemsida?',
          a: 'Det beror på omfattning, antal sidor och integrationer. Efter ett kostnadsfritt samtal får du ett fast pris med tydligt definierad leverans, så att du vet exakt vad du betalar för.',
        },
        {
          q: 'Kan ni bygga vidare på vår befintliga sajt?',
          a: 'Ja. Vi gör gärna en genomgång av er nuvarande lösning och rekommenderar om det lönar sig att förbättra den eller bygga nytt.',
        },
      ],
    },
    en: {
      slug: 'web-development',
      name: 'Web & full-stack development',
      short: 'Custom websites and web apps that load in under a second and are built to generate leads.',
      metaTitle: 'Full-stack developer in Halmstad, Sweden – web development | Weik',
      metaDescription:
        'Weik is a full-stack web studio in Halmstad, Sweden. We build fast, custom websites and web apps with Astro, React and .NET. Book a free call.',
      h1: 'Full-stack web development for websites and apps that deliver',
      lead: 'From company websites to custom web applications. We build the whole chain – design, frontend, backend and database – so you get a solution that is fast, secure and easy to grow with.',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Your website looks dated and undersells what you actually offer.',
        'The site is slow, especially on mobile, and visitors leave before they find what they need.',
        'You are locked into a template or agency and every small change takes weeks and costs extra.',
      ],
      solutionTitle: 'How we fix it',
      solution:
        'We start with your business goals and your customers’ questions, not the technology. Then we build a site on a modern architecture where every page has one clear job: moving the visitor towards an enquiry, a purchase or a call.',
      outcomes: [
        { title: 'Lightning fast', body: 'Statically generated pages and minimal JavaScript for top Core Web Vitals scores.' },
        { title: 'Built to convert', body: 'Clear structure, strong messaging and CTAs exactly where visitors make decisions.' },
        { title: 'Ready to scale', body: 'Clean code and a solid backend make it easy to extend as your business grows.' },
      ],
      deliverables: [
        'Strategy, site structure and conversion copy',
        'Unique, mobile-first design',
        'Frontend in Astro/React, backend in .NET or Node',
        'Integrations with CRM, payments, booking or APIs',
        'Technical SEO, schema markup and analytics from day one',
        'Launch, training and support',
      ],
      idealFor: 'Businesses that want a website that brings in customers, or need a web app that a template simply cannot handle.',
      faq: [
        {
          q: 'What does a full-stack developer do?',
          a: 'A full-stack developer builds both what visitors see (frontend) and the logic behind it (backend, databases and integrations). For you, that means one point of contact for the whole project and no hand-offs between suppliers.',
        },
        {
          q: 'How much does a custom website cost?',
          a: 'It depends on scope, number of pages and integrations. After a free call you get a fixed price with a clearly defined delivery, so you know exactly what you are paying for.',
        },
        {
          q: 'Can you build on our existing website?',
          a: 'Yes. We are happy to review your current setup and recommend whether it pays off to improve it or rebuild.',
        },
      ],
    },
  },
  {
    id: 'ecommerce',
    number: '02',
    tags: ['WooCommerce', 'Shopify', 'Klarna', 'Headless'],
    relatedProjects: ['kapten-mat', 'wundies', 'traningsprodukter'],
    sv: {
      slug: 'ehandel',
      name: 'E-handel',
      short: 'Webbshoppar som gör det enkelt att köpa – med snabb checkout, smart produktstruktur och SEO som driver organisk försäljning.',
      metaTitle: 'E-handel i Halmstad – webbshop som säljer mer | Weik',
      metaDescription:
        'Weik bygger och optimerar webbshoppar för företag i Halmstad och Halland. Snabbare checkout, bättre konvertering och SEO som ger fler ordrar. Boka ett gratis samtal.',
      h1: 'E-handel som gör besökare till återkommande kunder',
      lead: 'Vi bygger webbshoppar där varje steg – från produktsida till kassa – är optimerat för att fler ska slutföra köpet. Oavsett om du startar från noll eller vill få ut mer av en befintlig butik.',
      problemsTitle: 'Där tappar de flesta webbshoppar försäljning',
      problems: [
        'Besökare lägger varor i varukorgen men lämnar innan de betalar.',
        'Produktsidorna syns inte på Google och du är beroende av dyra annonser.',
        'Butiken är svår att administrera och varje kampanj kräver hjälp från utvecklare.',
      ],
      solutionTitle: 'Så får vi din butik att sälja mer',
      solution:
        'Vi analyserar köpresan, tar bort friktion och bygger en butik som är snabb, tydlig och tillitsskapande. Tekniken väljer vi efter dina behov – Shopify, WooCommerce eller headless – aldrig tvärtom.',
      outcomes: [
        { title: 'Högre konvertering', body: 'Enklare kassa, tydliga leveransvillkor och trygghetssignaler där de behövs.' },
        { title: 'Mer organisk trafik', body: 'SEO-optimerade kategori- och produktsidor som rankar för det dina kunder söker på.' },
        { title: 'Enkel vardag', body: 'Du hanterar produkter, kampanjer och ordrar själv, utan att ringa en utvecklare.' },
      ],
      deliverables: [
        'Plattformsval och migrering',
        'Konverteringsoptimerad design för produkt, kategori och kassa',
        'Betalning via Klarna, Swish och kort',
        'Integrationer mot lager, frakt och bokföring',
        'Flerspråkighet och flera valutor',
        'SEO för kategorier och produkter',
      ],
      idealFor: 'Handlare som vill starta en webbshop eller som redan har trafik men tycker att för få besökare blir kunder.',
      faq: [
        {
          q: 'Vilken e-handelsplattform ska jag välja?',
          a: 'Shopify passar dig som vill komma igång snabbt och slippa teknik. WooCommerce ger mer frihet och passar om du redan har WordPress. Headless är för den som vill ha maximal prestanda och unik upplevelse. Vi hjälper dig välja utifrån budget och mål.',
        },
        {
          q: 'Kan ni flytta min butik till en ny plattform?',
          a: 'Ja. Vi migrerar produkter, kunder och ordrar och sätter upp 301-omdirigeringar så att du behåller dina Google-placeringar.',
        },
        {
          q: 'Hjälper ni till med betalningar och frakt?',
          a: 'Ja, vi kopplar in betallösningar som Klarna och Swish samt fraktintegrationer så att hela flödet fungerar från dag ett.',
        },
      ],
    },
    en: {
      slug: 'ecommerce',
      name: 'E-commerce',
      short: 'Online stores that make buying easy – with a fast checkout, smart product structure and SEO that drives organic sales.',
      metaTitle: 'E-commerce development in Halmstad, Sweden | Weik',
      metaDescription:
        'Weik builds and optimises online stores that sell more. Faster checkout, better conversion rates and SEO that drives orders. Book a free call.',
      h1: 'E-commerce that turns visitors into repeat customers',
      lead: 'We build online stores where every step – from product page to checkout – is optimised so more people complete their purchase. Whether you start from scratch or want more from an existing store.',
      problemsTitle: 'Where most online stores lose sales',
      problems: [
        'Visitors add items to their cart but leave before paying.',
        'Product pages do not show up on Google, so you rely on expensive ads.',
        'The store is hard to manage and every campaign needs a developer.',
      ],
      solutionTitle: 'How we make your store sell more',
      solution:
        'We map the buyer journey, remove friction and build a store that is fast, clear and trustworthy. We choose the technology based on your needs – Shopify, WooCommerce or headless – never the other way round.',
      outcomes: [
        { title: 'Higher conversion', body: 'Simpler checkout, clear delivery terms and trust signals where they matter.' },
        { title: 'More organic traffic', body: 'SEO-optimised category and product pages that rank for what customers search for.' },
        { title: 'Easy to run', body: 'Manage products, campaigns and orders yourself, without calling a developer.' },
      ],
      deliverables: [
        'Platform selection and migration',
        'Conversion-focused design for product, category and checkout',
        'Payments via Klarna, Swish and cards',
        'Integrations with inventory, shipping and accounting',
        'Multiple languages and currencies',
        'SEO for categories and products',
      ],
      idealFor: 'Retailers launching an online store, or those who already have traffic but feel too few visitors become customers.',
      faq: [
        {
          q: 'Which e-commerce platform should I choose?',
          a: 'Shopify suits you if you want to launch fast without dealing with tech. WooCommerce gives more freedom and fits if you already run WordPress. Headless is for maximum performance and a unique experience. We help you choose based on budget and goals.',
        },
        {
          q: 'Can you move my store to a new platform?',
          a: 'Yes. We migrate products, customers and orders and set up 301 redirects so you keep your Google rankings.',
        },
        {
          q: 'Do you help with payments and shipping?',
          a: 'Yes, we connect payment providers such as Klarna and Swish plus shipping integrations so the whole flow works from day one.',
        },
      ],
    },
  },
  {
    id: 'wordpress',
    number: '03',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Gutenberg'],
    relatedProjects: ['traningsprodukter', 'kind-by-julia', 'corelink'],
    sv: {
      slug: 'wordpress',
      name: 'WordPress',
      short: 'Snabba, säkra WordPress-sajter som du enkelt uppdaterar själv – utan tunga teman och plugin-kaos.',
      metaTitle: 'WordPress-utvecklare i Halmstad – snabba & säkra sajter | Weik',
      metaDescription:
        'WordPress-byrå i Halmstad. Weik bygger snabba, säkra WordPress-sajter som är enkla att uppdatera, och räddar långsamma eller hackade sidor. Boka ett gratis samtal.',
      h1: 'WordPress som är snabbt, säkert och enkelt att uppdatera',
      lead: 'WordPress driver en stor del av webben – men de flesta sajter är långsamma, osäkra och fulla av onödiga plugins. Vi bygger WordPress rätt från början, eller tar hand om den sajt du redan har.',
      problemsTitle: 'Vanliga WordPress-problem',
      problems: [
        'Sajten är seg på grund av tunga sidbyggare och dussintals plugins.',
        'Du är orolig för säkerhetsluckor, uppdateringar som kraschar sidan eller att bli hackad.',
        'Det är krångligt att redigera innehåll utan att designen går sönder.',
      ],
      solutionTitle: 'Så bygger vi WordPress',
      solution:
        'Vi bygger lätta, skräddarsydda teman med block som är anpassade efter ditt innehåll. Du får en redigeringsvy som är omöjlig att förstöra och en sajt som laddar snabbt utan att tumma på funktion.',
      outcomes: [
        { title: 'Snabbare sajt', body: 'Lätta teman, optimerade bilder och cache som ger gröna siffror i PageSpeed.' },
        { title: 'Tryggare drift', body: 'Säkerhetshärdning, backup och kontrollerade uppdateringar.' },
        { title: 'Lätt att uppdatera', body: 'Anpassade block gör att du kan skapa nya sidor själv på minuter.' },
      ],
      deliverables: [
        'Skräddarsytt tema utan sidbyggare',
        'Anpassade Gutenberg-block',
        'WooCommerce vid behov',
        'Prestanda- och säkerhetsoptimering',
        'Migrering från annan plattform',
        'Löpande uppdateringar och support',
      ],
      idealFor: 'Företag som vill ha full kontroll över sitt innehåll och en sajt som går att växa med i många år.',
      faq: [
        {
          q: 'Är WordPress fortfarande ett bra val?',
          a: 'Ja, om det byggs rätt. WordPress är flexibelt, har ett stort ekosystem och är enkelt för redaktörer. Problemen uppstår nästan alltid på grund av tunga teman och för många plugins – det är precis det vi undviker.',
        },
        {
          q: 'Kan ni snabba upp min befintliga WordPress-sajt?',
          a: 'Ja. Vi gör en prestandaanalys, städar bort onödiga plugins, optimerar bilder och cache och ger dig en tydlig före/efter-jämförelse.',
        },
        {
          q: 'Min WordPress-sajt har blivit hackad, kan ni hjälpa till?',
          a: 'Ja. Vi rensar sajten, täpper till säkerhetsluckorna och sätter upp övervakning och backup så att det inte händer igen.',
        },
      ],
    },
    en: {
      slug: 'wordpress',
      name: 'WordPress',
      short: 'Fast, secure WordPress sites you can easily update yourself – without bloated themes and plugin chaos.',
      metaTitle: 'WordPress developer in Halmstad, Sweden – fast & secure | Weik',
      metaDescription:
        'Weik builds fast, secure WordPress websites that are easy to update, and rescues slow or hacked sites. Book a free call.',
      h1: 'WordPress that is fast, secure and easy to update',
      lead: 'WordPress powers a large part of the web – but most sites are slow, insecure and packed with unnecessary plugins. We build WordPress the right way, or take care of the site you already have.',
      problemsTitle: 'Common WordPress problems',
      problems: [
        'The site is sluggish because of heavy page builders and dozens of plugins.',
        'You worry about security holes, updates breaking the site or getting hacked.',
        'Editing content is fiddly and the design breaks easily.',
      ],
      solutionTitle: 'How we build WordPress',
      solution:
        'We build lightweight custom themes with blocks tailored to your content. You get an editing experience that is impossible to break and a site that loads fast without compromising on features.',
      outcomes: [
        { title: 'Faster site', body: 'Lean themes, optimised images and caching for green PageSpeed scores.' },
        { title: 'Safer operations', body: 'Security hardening, backups and controlled updates.' },
        { title: 'Easy to update', body: 'Custom blocks let you build new pages yourself in minutes.' },
      ],
      deliverables: [
        'Custom theme without page builders',
        'Custom Gutenberg blocks',
        'WooCommerce when needed',
        'Performance and security optimisation',
        'Migration from other platforms',
        'Ongoing updates and support',
      ],
      idealFor: 'Businesses that want full control over their content and a site they can grow with for years.',
      faq: [
        {
          q: 'Is WordPress still a good choice?',
          a: 'Yes, when built right. WordPress is flexible, has a huge ecosystem and is easy for editors. Problems almost always come from heavy themes and too many plugins – exactly what we avoid.',
        },
        {
          q: 'Can you speed up my existing WordPress site?',
          a: 'Yes. We run a performance audit, remove unnecessary plugins, optimise images and caching and give you a clear before/after comparison.',
        },
        {
          q: 'My WordPress site was hacked – can you help?',
          a: 'Yes. We clean the site, close the security holes and set up monitoring and backups so it does not happen again.',
        },
      ],
    },
  },
  {
    id: 'shopify',
    number: '04',
    tags: ['Shopify', 'Liquid', 'Shopify Apps', 'Klarna'],
    relatedProjects: ['kind-by-julia', 'wundies', 'kapten-mat'],
    sv: {
      slug: 'shopify',
      name: 'Shopify',
      short: 'Shopify-butiker med unik design och anpassade funktioner – så att du sticker ut i stället för att se ut som alla andra.',
      metaTitle: 'Shopify-utvecklare i Halmstad – butiker som säljer | Weik',
      metaDescription:
        'Shopify-expert i Halmstad. Weik bygger unika Shopify-butiker, anpassade teman och integrationer som ökar försäljningen. Boka ett gratis samtal.',
      h1: 'Shopify-butiker som sticker ut och säljer',
      lead: 'Shopify är en fantastisk motor, men ett standardtema gör att din butik ser ut som tusentals andra. Vi bygger anpassade teman och funktioner som speglar ditt varumärke och lyfter din konvertering.',
      problemsTitle: 'Känner du igen det här?',
      problems: [
        'Butiken ser ut som ett standardtema och varumärket försvinner.',
        'Du betalar för en massa appar som gör sidan långsam och dyr i drift.',
        'Du vill ha en funktion som temat inte stödjer och ingen vet hur man löser det.',
      ],
      solutionTitle: 'Så lyfter vi din Shopify-butik',
      solution:
        'Vi utvecklar teman och sektioner i Liquid som är byggda för ditt sortiment och dina kunder. Ofta kan vi ersätta flera betalappar med egen kod – snabbare sajt och lägre månadskostnad.',
      outcomes: [
        { title: 'Unikt varumärke', body: 'Design som gör att kunderna minns dig, inte temat.' },
        { title: 'Färre appar', body: 'Egen funktionalitet i stället för dyra prenumerationer som tynger sajten.' },
        { title: 'Bättre konvertering', body: 'Produktsidor och kassa som är optimerade för att sälja.' },
      ],
      deliverables: [
        'Anpassat Shopify-tema (Online Store 2.0)',
        'Egna sektioner och block som du styr själv',
        'Migrering från WooCommerce eller annan plattform',
        'Integrationer mot lager, ERP och marknadsföring',
        'Prestanda- och SEO-optimering',
        'Löpande vidareutveckling',
      ],
      idealFor: 'Varumärken som säljer på Shopify och vill växa, eller handlare som vill byta till Shopify utan att tappa försäljning.',
      faq: [
        {
          q: 'Varför ska jag anlita en Shopify-utvecklare?',
          a: 'Ett standardtema räcker långt, men för att sticka ut, minska appberoendet och få en snabbare butik behövs anpassningar i koden. Det ger både bättre konvertering och lägre löpande kostnader.',
        },
        {
          q: 'Kan ni flytta min butik från WooCommerce till Shopify?',
          a: 'Ja. Vi flyttar produkter, kunder och orderhistorik och sätter upp omdirigeringar så att du behåller din trafik från Google.',
        },
        {
          q: 'Kan jag själv redigera butiken efteråt?',
          a: 'Absolut. Allt vi bygger går att redigera i Shopifys temaeditor, så att du kan byta bilder, texter och kampanjer själv.',
        },
      ],
    },
    en: {
      slug: 'shopify',
      name: 'Shopify',
      short: 'Shopify stores with unique design and custom features – so you stand out instead of looking like everyone else.',
      metaTitle: 'Shopify developer in Halmstad, Sweden – stores that sell | Weik',
      metaDescription:
        'Weik builds unique Shopify stores, custom themes and integrations that grow sales. Book a free call.',
      h1: 'Shopify stores that stand out and sell',
      lead: 'Shopify is a great engine, but a stock theme makes your store look like thousands of others. We build custom themes and features that reflect your brand and lift your conversion rate.',
      problemsTitle: 'Recognise this?',
      problems: [
        'Your store looks like a stock theme and your brand disappears.',
        'You pay for lots of apps that slow the site down and cost a fortune.',
        'You need a feature the theme does not support and nobody knows how to build it.',
      ],
      solutionTitle: 'How we level up your Shopify store',
      solution:
        'We develop themes and sections in Liquid built for your range and your customers. We can often replace several paid apps with custom code – a faster site and a lower monthly bill.',
      outcomes: [
        { title: 'Distinct brand', body: 'Design that makes customers remember you, not the theme.' },
        { title: 'Fewer apps', body: 'Custom features instead of pricey subscriptions that weigh the site down.' },
        { title: 'Better conversion', body: 'Product pages and checkout optimised to sell.' },
      ],
      deliverables: [
        'Custom Shopify theme (Online Store 2.0)',
        'Custom sections and blocks you control',
        'Migration from WooCommerce or other platforms',
        'Integrations with inventory, ERP and marketing tools',
        'Performance and SEO optimisation',
        'Ongoing development',
      ],
      idealFor: 'Brands selling on Shopify that want to grow, or retailers moving to Shopify without losing sales.',
      faq: [
        {
          q: 'Why hire a Shopify developer?',
          a: 'A stock theme goes a long way, but standing out, reducing app dependency and getting a faster store requires code customisation. That means better conversion and lower running costs.',
        },
        {
          q: 'Can you move my store from WooCommerce to Shopify?',
          a: 'Yes. We migrate products, customers and order history and set up redirects so you keep your Google traffic.',
        },
        {
          q: 'Can I edit the store myself afterwards?',
          a: 'Absolutely. Everything we build is editable in the Shopify theme editor, so you can change images, copy and campaigns yourself.',
        },
      ],
    },
  },
  {
    id: 'seo',
    number: '05',
    tags: ['Core Web Vitals', 'Schema.org', 'Google Business', 'Search Console'],
    relatedProjects: ['traningsprodukter', 'wundies', 'kapten-mat'],
    sv: {
      slug: 'seo-prestanda',
      name: 'SEO & prestanda',
      short: 'Syns där dina kunder söker. Teknisk SEO, lokal SEO i Halland och snabbare laddtider som ger fler förfrågningar.',
      metaTitle: 'SEO i Halmstad – syns på Google & snabbare sajt | Weik',
      metaDescription:
        'Lokal SEO i Halmstad och Halland. Weik förbättrar dina Google-placeringar med teknisk SEO, innehåll och Core Web Vitals som ger fler kunder. Boka en gratis genomgång.',
      h1: 'SEO och prestanda som gör att kunderna hittar dig först',
      lead: 'Den bästa hemsidan är värdelös om ingen hittar den. Vi kombinerar teknisk SEO, lokal synlighet i Halmstad och Halland och blixtsnabba laddtider – så att du får mer trafik och fler som hör av sig.',
      problemsTitle: 'Varför syns du inte?',
      problems: [
        'Konkurrenterna ligger före dig på Google när kunder söker på dina tjänster i Halmstad.',
        'Sajten får dåliga betyg i PageSpeed och Google straffar långsamma sidor.',
        'Du vet inte vilka sökord som faktiskt ger affärer – eller om SEO-insatserna fungerar.',
      ],
      solutionTitle: 'Så tar vi dig uppåt',
      solution:
        'Vi börjar med en teknisk genomlysning och en sökordsanalys baserad på vad dina kunder faktiskt söker på. Sedan åtgärdar vi det som håller dig tillbaka och bygger innehåll och struktur som Google förstår och belönar.',
      outcomes: [
        { title: 'Lokal synlighet', body: 'Optimerad för sökningar i Halmstad, Halland och Google Maps.' },
        { title: 'Snabbare sidor', body: 'Förbättrade Core Web Vitals ger bättre ranking och fler som stannar.' },
        { title: 'Mätbara resultat', body: 'Tydlig rapportering på placeringar, trafik och förfrågningar.' },
      ],
      deliverables: [
        'Teknisk SEO-audit med prioriterad åtgärdslista',
        'Sökordsanalys och innehållsplan',
        'Lokal SEO och Google Business-profil',
        'Strukturerad data (schema.org) och rich results',
        'Core Web Vitals- och prestandaoptimering',
        'Månatlig uppföljning och rapport',
      ],
      idealFor: 'Lokala företag i Halland som vill få fler kunder via Google utan att betala för varje klick.',
      faq: [
        {
          q: 'Hur lång tid tar det innan SEO ger resultat?',
          a: 'Tekniska förbättringar kan ge effekt inom några veckor. För konkurrensutsatta sökord tar det oftast tre till sex månader att se tydliga förflyttningar. Vi rapporterar löpande så att du ser utvecklingen.',
        },
        {
          q: 'Vad är lokal SEO?',
          a: 'Lokal SEO handlar om att synas när någon söker efter en tjänst i ditt område, till exempel "webbyrå Halmstad". Det innefattar din Google Business-profil, lokala landningssidor och strukturerad data om var du finns.',
        },
        {
          q: 'Varför spelar sidans hastighet roll för SEO?',
          a: 'Google använder Core Web Vitals som rankingsignal, och långsamma sidor tappar besökare. En snabbare sajt ger alltså både bättre placeringar och högre konvertering.',
        },
      ],
    },
    en: {
      slug: 'seo-performance',
      name: 'SEO & performance',
      short: 'Get found where your customers search. Technical SEO, local SEO and faster load times that bring in more leads.',
      metaTitle: 'SEO & web performance in Halmstad, Sweden | Weik',
      metaDescription:
        'Weik improves your Google rankings with technical SEO, content and Core Web Vitals optimisation that bring in more customers. Book a free review.',
      h1: 'SEO and performance that put you first in line',
      lead: 'The best website is worthless if nobody finds it. We combine technical SEO, local visibility and lightning-fast load times – so you get more traffic and more people getting in touch.',
      problemsTitle: 'Why are you not showing up?',
      problems: [
        'Competitors rank above you when customers search for your services.',
        'Your site scores poorly in PageSpeed and Google penalises slow pages.',
        'You do not know which keywords actually drive business – or whether SEO is working.',
      ],
      solutionTitle: 'How we move you up',
      solution:
        'We start with a technical audit and keyword research based on what your customers actually search for. Then we fix what holds you back and build content and structure that Google understands and rewards.',
      outcomes: [
        { title: 'Local visibility', body: 'Optimised for local searches and Google Maps.' },
        { title: 'Faster pages', body: 'Better Core Web Vitals mean better rankings and more visitors who stay.' },
        { title: 'Measurable results', body: 'Clear reporting on rankings, traffic and leads.' },
      ],
      deliverables: [
        'Technical SEO audit with a prioritised action list',
        'Keyword research and content plan',
        'Local SEO and Google Business Profile',
        'Structured data (schema.org) and rich results',
        'Core Web Vitals and performance optimisation',
        'Monthly follow-up and report',
      ],
      idealFor: 'Local businesses that want more customers from Google without paying for every click.',
      faq: [
        {
          q: 'How long does SEO take to work?',
          a: 'Technical fixes can have an effect within weeks. For competitive keywords it usually takes three to six months to see clear movement. We report continuously so you can follow the progress.',
        },
        {
          q: 'What is local SEO?',
          a: 'Local SEO is about showing up when someone searches for a service in your area. It covers your Google Business Profile, local landing pages and structured data about where you are.',
        },
        {
          q: 'Why does page speed matter for SEO?',
          a: 'Google uses Core Web Vitals as a ranking signal, and slow pages lose visitors. A faster site means better rankings and higher conversion.',
        },
      ],
    },
  },
  {
    id: 'support',
    number: '06',
    tags: ['WordPress', 'Shopify', 'Backup', 'Uptime'],
    relatedProjects: ['kapten-mat', 'wundies', 'kind-by-julia'],
    sv: {
      slug: 'underhall',
      name: 'Underhåll & support',
      short: 'Vi håller din sajt snabb, säker och uppdaterad – så att du kan fokusera på verksamheten.',
      metaTitle: 'Underhåll & support för hemsidor i Halmstad | Weik',
      metaDescription:
        'Webbsupport och underhåll i Halmstad. Weik sköter uppdateringar, säkerhet, backup och vidareutveckling av din hemsida eller webbshop. Fast månadskostnad.',
      h1: 'Underhåll och support så att din sajt alltid fungerar',
      lead: 'En hemsida är aldrig helt klar. Med ett supportavtal tar vi hand om uppdateringar, säkerhet och små förbättringar löpande – och du har en utvecklare som känner din sajt att ringa när något behöver göras.',
      problemsTitle: 'Utan underhåll händer det här',
      problems: [
        'Plugins och system blir inaktuella och öppnar för säkerhetsluckor.',
        'Sajten går ner eller något slutar fungera – och ingen märker det förrän kunderna klagar.',
        'Små ändringar blir liggande eftersom det inte finns någon att fråga.',
      ],
      solutionTitle: 'Så tar vi hand om din sajt',
      solution:
        'Vi övervakar, uppdaterar och säkerhetskopierar din sajt löpande. Varje månad ingår tid för förbättringar, så att din hemsida blir bättre över tid i stället för att sakta förfalla.',
      outcomes: [
        { title: 'Trygghet', body: 'Övervakning, backup och säkerhetsuppdateringar hanteras åt dig.' },
        { title: 'Snabb hjälp', body: 'En dedikerad kontaktperson som känner din sajt och agerar snabbt.' },
        { title: 'Ständig förbättring', body: 'Löpande optimering av prestanda, SEO och konvertering.' },
      ],
      deliverables: [
        'Uppdateringar av system, teman och plugins',
        'Dagliga backuper',
        'Drift- och säkerhetsövervakning',
        'Tid för ändringar och förbättringar varje månad',
        'Prestanda- och SEO-uppföljning',
        'Prioriterad support via mejl och telefon',
      ],
      idealFor: 'Företag som är beroende av sin hemsida eller webbshop och inte har en egen utvecklare.',
      faq: [
        {
          q: 'Kan ni ta över support för en sajt som någon annan byggt?',
          a: 'Ja. Vi börjar med en genomgång av sajten och dess skick, åtgärdar akuta problem och tar sedan över underhållet.',
        },
        {
          q: 'Vad ingår i ett supportavtal?',
          a: 'Uppdateringar, backup, övervakning och ett antal timmar för ändringar varje månad. Omfattningen anpassas efter din sajt och dina behov.',
        },
        {
          q: 'Är jag bunden länge?',
          a: 'Nej, vi tror på att leverera så bra att du vill stanna – inte på långa bindningstider.',
        },
      ],
    },
    en: {
      slug: 'maintenance-support',
      name: 'Maintenance & support',
      short: 'We keep your site fast, secure and up to date – so you can focus on running your business.',
      metaTitle: 'Website maintenance & support in Halmstad, Sweden | Weik',
      metaDescription:
        'Weik handles updates, security, backups and ongoing development of your website or online store. Fixed monthly fee.',
      h1: 'Maintenance and support so your site always works',
      lead: 'A website is never really finished. With a support plan we take care of updates, security and small improvements on an ongoing basis – and you have a developer who knows your site to call when something needs doing.',
      problemsTitle: 'Without maintenance, this happens',
      problems: [
        'Plugins and systems go out of date and open security holes.',
        'The site goes down or something stops working – and nobody notices until customers complain.',
        'Small changes pile up because there is nobody to ask.',
      ],
      solutionTitle: 'How we look after your site',
      solution:
        'We monitor, update and back up your site continuously. Every month includes time for improvements, so your website gets better over time instead of slowly decaying.',
      outcomes: [
        { title: 'Peace of mind', body: 'Monitoring, backups and security updates handled for you.' },
        { title: 'Fast help', body: 'A dedicated contact who knows your site and acts quickly.' },
        { title: 'Continuous improvement', body: 'Ongoing optimisation of performance, SEO and conversion.' },
      ],
      deliverables: [
        'System, theme and plugin updates',
        'Daily backups',
        'Uptime and security monitoring',
        'Monthly time for changes and improvements',
        'Performance and SEO follow-up',
        'Priority support by email and phone',
      ],
      idealFor: 'Businesses that depend on their website or online store and do not have an in-house developer.',
      faq: [
        {
          q: 'Can you take over support for a site someone else built?',
          a: 'Yes. We start by reviewing the site and its condition, fix urgent issues and then take over maintenance.',
        },
        {
          q: 'What is included in a support plan?',
          a: 'Updates, backups, monitoring and a number of hours for changes each month. The scope is tailored to your site and needs.',
        },
        {
          q: 'Am I locked in for long?',
          a: 'No. We believe in delivering so well that you want to stay – not in long lock-in periods.',
        },
      ],
    },
  },
];

export const getService = (lang: Lang, slug: string) => services.find((s) => s[lang].slug === slug);
