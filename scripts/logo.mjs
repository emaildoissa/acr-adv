import * as mupdf from "mupdf";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const input = path.resolve("logo.pdf");
const outDir = path.resolve("public/img");
mkdirSync(outDir, { recursive: true });

const doc = mupdf.Document.openDocument(readFileSync(input), "application/pdf");
const page = doc.loadPage(0);
const pix = page.toPixmap([4, 0, 0, 4, 0, 0], mupdf.ColorSpace.DeviceRGB, true, false);

const W = pix.getWidth();
const H = pix.getHeight();
const stride = pix.getStride();
const buf = pix.getPixels();

const px = (x, y) => {
  const o = y * stride + x * 4;
  return [buf[o], buf[o + 1], buf[o + 2]];
};

// bbox do conteudo (tudo que nao e' quase-preto)
let minX = W, minY = H, maxX = 0, maxY = 0;
const rowInk = new Uint8Array(H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const [r, g, b] = px(x, y);
    if (Math.max(r, g, b) > 50) {
      rowInk[y] = 1;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
console.log("bbox:", { minX, minY, maxX, maxY });

// bandas verticais (blocos separados por espacos vazios) para achar o monograma
const bands = [];
let start = -1;
let gap = 0;
for (let y = minY; y <= maxY + 1; y++) {
  if (y <= maxY && rowInk[y]) {
    if (start < 0) start = y;
    gap = 0;
  } else if (start >= 0) {
    gap++;
    if (gap > 5) {
      bands.push([start, y - gap]);
      start = -1;
      gap = 0;
    }
  }
}
if (start >= 0) bands.push([start, maxY]);
console.log("bandas:", bands);

function makePng(x0, y0, x1, y1, mode) {
  const w = x1 - x0 + 1;
  const h = y1 - y0 + 1;
  const png = new PNG({ width: w, height: h });
  let goldSum = [0, 0, 0];
  let goldN = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [r, g, b] = px(x0 + x, y0 + y);
      const mx = Math.max(r, g, b);
      const idx = (y * w + x) * 4;
      let R = r, G = g, B = b, A = 255;
      if (mx < 55) {
        A = 0; // fundo preto -> transparente
      } else if (mx < 170) {
        A = Math.round(((mx - 55) / (170 - 55)) * 255); // bordas anti-alias
      }
      if (A > 0) {
        if (mode === "dark") {
          const isGold = r > b + 30 && r > 90;
          if (!isGold) {
            R = 27; G = 42; B = 74; // navy #1b2a4a
          }
        }
        if (isGoldish(r, g, b)) {
          goldSum[0] += r; goldSum[1] += g; goldSum[2] += b; goldN++;
        }
      }
      png.data[idx] = R; png.data[idx + 1] = G; png.data[idx + 2] = B; png.data[idx + 3] = A;
    }
  }
  return { png, goldSum, goldN };
}

function isGoldish(r, g, b) {
  return r > 120 && r > b + 40 && g > b && g < r;
}

const pad = 10;
const x0 = Math.max(0, minX - pad), x1 = Math.min(W - 1, maxX + pad);
const y0 = Math.max(0, minY - pad), y1 = Math.min(H - 1, maxY + pad);

// logo escuro (texto navy) para cabecalho claro
const dark = makePng(x0, y0, x1, y1, "dark");
writeFileSync(path.join(outDir, "logo.png"), PNG.sync.write(dark.png));
console.log("logo.png:", dark.png.width, "x", dark.png.height);

// logo claro (texto branco) para fundos escuros
const light = makePng(x0, y0, x1, y1, "light");
writeFileSync(path.join(outDir, "logo-light.png"), PNG.sync.write(light.png));

// favicon: primeira banda (monograma ACR com colunas), recorte quadrado
const [bs, be] = bands[0];
const bw = x1 - x0 + 1;
const bh = be - bs + 1 + pad;
const size = Math.max(bw, bh);
const cx = Math.floor((x0 + x1) / 2);
const cy = Math.floor((bs + be) / 2);
const half = Math.floor(size / 2);
const fav = makePng(
  Math.max(0, cx - half), Math.max(0, cy - half),
  Math.min(W - 1, cx - half + size - 1), Math.min(H - 1, cy - half + size - 1),
  "light"
);
writeFileSync(path.join(outDir, "favicon.png"), PNG.sync.write(fav.png));
console.log("favicon.png:", fav.png.width, "x", fav.png.height);

// media do dourado para tokens
if (dark.goldN > 0) {
  const hex = (v) => Math.round(v).toString(16).padStart(2, "0");
  const [r, g, b] = dark.goldSum.map((v) => v / dark.goldN);
  console.log("dourado medio:", "#" + hex(r) + hex(g) + hex(b), `(${dark.goldN} px)`);
}
