import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'public', 'img');
mkdirSync(dir, { recursive: true });

const NAVY = '#0b2a4a';
const NAVY_DARK = '#061a2e';
const NAVY_LIGHT = '#12365e';
const GOLD = '#90754e';
const GOLD_LIGHT = '#c2a878';

const scale = (hex, f) => {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, Math.round(v * f)));
  return '#' + [c((n >> 16) & 255), c((n >> 8) & 255), c(n & 255)].map((v) => v.toString(16).padStart(2, '0')).join('');
};

function pillars(w, h, color, opacity) {
  const cols = 6;
  const cw = w / cols;
  let s = '';
  for (let i = 0; i < cols; i++) {
    const x = i * cw + cw * 0.18;
    const pw = cw * 0.28;
    s += `<rect x="${x.toFixed(0)}" y="${(h * 0.18).toFixed(0)}" width="${pw.toFixed(0)}" height="${(h * 0.82).toFixed(0)}" rx="${(pw / 6).toFixed(0)}" fill="${color}" opacity="${opacity}"/>`;
  }
  return s;
}

function heroSvg(bg, accent, i) {
  const w = 1600, h = 900;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${scale(bg, 1.25)}"/><stop offset="1" stop-color="${scale(bg, 0.7)}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
${pillars(w, h, accent, 0.16)}
<circle cx="${w * 0.82}" cy="${h * 0.2}" r="${h * 0.35}" fill="${accent}" opacity="0.10"/>
<circle cx="${w * 0.15}" cy="${h * 0.85}" r="${h * 0.28}" fill="${accent}" opacity="0.08"/>
<rect x="${w * 0.06}" y="${h * 0.55}" width="${w * 0.3}" height="${h * 0.02}" fill="${accent}" opacity="0.5" rx="4"/>
<text x="${w * 0.06}" y="${h * 0.63}" font-family="Georgia, serif" font-size="${h * 0.06}" fill="${accent}" opacity="0.85">ACR · Imagem ${i}</text>
</svg>`;
}

function avatarSvg(i) {
  const w = 640, h = 640;
  const bg = [NAVY, NAVY_LIGHT, scale(NAVY, 1.4), scale(GOLD, 0.9)][i % 4];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<rect width="${w}" height="${h}" fill="${bg}"/>
<circle cx="${w / 2}" cy="${h * 0.38}" r="${w * 0.17}" fill="${GOLD_LIGHT}" opacity="0.85"/>
<path d="M ${w * 0.22} ${h} C ${w * 0.24} ${h * 0.72} ${w * 0.38} ${h * 0.62} ${w * 0.5} ${h * 0.62} C ${w * 0.62} ${h * 0.62} ${w * 0.76} ${h * 0.72} ${w * 0.78} ${h} Z" fill="${GOLD_LIGHT}" opacity="0.85"/>
<text x="${w / 2}" y="${h * 0.12}" text-anchor="middle" font-family="Georgia, serif" font-size="${w * 0.07}" fill="${GOLD_LIGHT}" opacity="0.9">Sócio ${i + 1}</text>
</svg>`;
}

function blogSvg(i) {
  const w = 1200, h = 675;
  const palettes = [
    [NAVY, GOLD],
    [scale(NAVY, 1.35), GOLD_LIGHT],
    [NAVY_DARK, scale(GOLD, 1.2)],
    [scale(NAVY_LIGHT, 1.3), GOLD],
    [NAVY, scale(GOLD, 1.3)],
    [scale(NAVY, 1.15), GOLD_LIGHT],
  ];
  const [bg, ac] = palettes[i % palettes.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<rect width="${w}" height="${h}" fill="${bg}"/>
${pillars(w, h, ac, 0.14)}
<rect x="${w * 0.08}" y="${h * 0.3}" width="${w * 0.5}" height="${h * 0.035}" fill="${ac}" opacity="0.85" rx="6"/>
<rect x="${w * 0.08}" y="${h * 0.4}" width="${w * 0.72}" height="${h * 0.02}" fill="#ffffff" opacity="0.25" rx="6"/>
<rect x="${w * 0.08}" y="${h * 0.46}" width="${w * 0.6}" height="${h * 0.02}" fill="#ffffff" opacity="0.25" rx="6"/>
<rect x="${w * 0.08}" y="${h * 0.52}" width="${w * 0.66}" height="${h * 0.02}" fill="#ffffff" opacity="0.25" rx="6"/>
<circle cx="${w * 0.85}" cy="${h * 0.75}" r="${h * 0.22}" fill="${ac}" opacity="0.18"/>
</svg>`;
}

function footerBgSvg() {
  const w = 1600, h = 600;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<rect width="${w}" height="${h}" fill="${NAVY_DARK}"/>
${pillars(w, h, GOLD, 0.08)}
<circle cx="${w * 0.8}" cy="${h * 0.3}" r="${h * 0.5}" fill="${GOLD}" opacity="0.06"/>
<circle cx="${w * 0.2}" cy="${h * 0.8}" r="${h * 0.4}" fill="${GOLD}" opacity="0.05"/>
</svg>`;
}

function aboutSvg() {
  const w = 1200, h = 900;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${scale(NAVY, 1.2)}"/><stop offset="1" stop-color="${NAVY_DARK}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
${pillars(w, h, GOLD, 0.15)}
<circle cx="${w * 0.5}" cy="${h * 0.45}" r="${h * 0.22}" fill="${GOLD}" opacity="0.2"/>
<text x="${w / 2}" y="${h * 0.47}" text-anchor="middle" font-family="Georgia, serif" font-size="${w * 0.06}" fill="${GOLD_LIGHT}" opacity="0.95">ACR</text>
</svg>`;
}

writeFileSync(join(dir, 'bg-footer.svg'), footerBgSvg());
writeFileSync(join(dir, 'about.svg'), aboutSvg());
for (let i = 1; i <= 3; i++) writeFileSync(join(dir, `hero-${i}.svg`), heroSvg(NAVY, GOLD, i));
for (let i = 1; i <= 4; i++) writeFileSync(join(dir, `team-${i}.svg`), avatarSvg(i - 1));
for (let i = 1; i <= 6; i++) writeFileSync(join(dir, `blog-${i}.svg`), blogSvg(i - 1));
console.log('Placeholders gerados em public/img');
