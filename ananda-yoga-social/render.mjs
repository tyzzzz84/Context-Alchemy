// Renders each .dc.html artboard to a standalone preview page (static markup,
// no editor runtime) so it can be screenshotted at 1080x1080.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(dir, 'preview');
mkdirSync(outDir, { recursive: true });

const logo = 'data:image/jpeg;base64,' + readFileSync(join(dir, 'ananda-logo.jpg')).toString('base64');
const canvas = JSON.parse(readFileSync(join(dir, 'canvas.json'), 'utf8'));
const order = canvas.artboards.map((a) => a.file);

order.forEach((file, i) => {
  const src = readFileSync(join(dir, file), 'utf8');
  const style = src.match(/<style>([\s\S]*?)<\/style>/)[1];
  const link = src.match(/<link rel="stylesheet"[^>]*>/)[0];
  const body = src.match(/<\/helmet>([\s\S]*?)<\/x-dc>/)[1].trim().replace(/src="ananda-logo\.jpg"/g, `src="${logo}"`);
  const n = String(i + 1).padStart(2, '0');
  const name = `${n}-${file.replace('.dc.html', '')}`;
  writeFileSync(
    join(outDir, `${name}.html`),
    `<!doctype html><html><head><meta charset="utf-8">${link}<style>${style}
html,body{width:1080px;height:1080px;overflow:hidden}</style></head><body>${body}</body></html>`
  );
});
console.log(order.length, 'preview pages in', outDir);
