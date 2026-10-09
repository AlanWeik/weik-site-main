import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="0.35" cy="0.3" r="0.8">
      <stop offset="0" stop-color="#f4ffd0"/>
      <stop offset="0.45" stop-color="#d4ff2e"/>
      <stop offset="1" stop-color="#1c1c1f"/>
    </radialGradient>
    <filter id="b"><feGaussianBlur stdDeviation="60"/></filter>
  </defs>
  <rect width="1200" height="630" fill="#09090a"/>
  <circle cx="960" cy="200" r="260" fill="#d4ff2e" opacity=".25" filter="url(#b)"/>
  <circle cx="960" cy="200" r="220" fill="url(#g)"/>
  <circle cx="960" cy="200" r="300" fill="none" stroke="#f1f1ec" stroke-opacity=".15"/>
  <text x="72" y="96" fill="#9b9ba1" font-family="Menlo, monospace" font-size="22" letter-spacing="3">WEBBSTUDIO · HALMSTAD, HALLAND</text>
  <text x="60" y="440" fill="#f1f1ec" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="260" letter-spacing="-16">weik</text>
  <circle cx="660" cy="430" r="22" fill="#d4ff2e"/>
  <text x="72" y="540" fill="#f1f1ec" font-family="Helvetica Neue, Arial, sans-serif" font-weight="600" font-size="44" letter-spacing="-1">Hemsidor, e-handel &amp; SEO som säljer.</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');

const icon = await readFile('public/favicon.svg');
await sharp(icon, { density: 400 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('Generated public/og.png and public/apple-touch-icon.png');
