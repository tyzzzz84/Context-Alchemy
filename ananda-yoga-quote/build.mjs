import { writeFileSync } from 'node:fs';
import { palette } from './lib-color.mjs';
import { art } from './lib-art.mjs';

const DISPLAY = "'Lovelo','Lovelo Black','Lovelo Line Bold',Montserrat,'Avenir Next','Century Gothic',Futura,Helvetica,Arial,sans-serif";
const BODY = "Montserrat,'Avenir Next','Century Gothic',Futura,'Trebuchet MS',Helvetica,Arial,sans-serif";
const TITLE = `font-family:${DISPLAY};font-weight:800;font-synthesis:none;text-transform:uppercase`;

const BG = '#F8F5EC';
const CARD = '#FFFDF7';
const INK = '#33281F';
const INK2 = '#57493D';
const MUTED = '#9A8874';
const LINE = '#E2D9C7';
const GOLD = { accent: '#B8861F', dark: '#8C6416', deep: '#6E4E11', mid: '#E4CE9B', pale: '#F3EAD5' };

const doc = (body) => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap">
  <style>
    body { margin: 0; font-family: ${BODY}; }
    a { color: #8A5A1E; } a:hover { color: #6B4415; }
  </style>
</helmet>
${body}
</x-dc>
</body>
</html>
`;

const logoMark = (size) => `<div style="width:${size}px;height:${Math.round(size * 0.78)}px;overflow:hidden;display:flex;justify-content:center;align-items:flex-start;flex:0 0 auto"><img src="ananda-logo.jpg" alt="Ananda Yoga Cagliari" style="width:${Math.round(size * 1.3)}px;margin-top:-${Math.round(size * 0.105)}px;mix-blend-mode:multiply;filter:contrast(1.2)"></div>`;

const disc = (inner, p, size) => `<div style="width:${size}px;height:${size}px;box-sizing:border-box;border-radius:50%;background:${p.pale};border:2px solid ${p.mid};display:flex;align-items:center;justify-content:center;flex:0 0 auto">${inner}</div>`;

const medallion = (name, p, size) => disc(`<svg width="${Math.round(size * 0.66)}" height="${Math.round(size * 0.66)}" viewBox="0 0 200 200" aria-hidden="true">${art[name](p)}</svg>`, p, size);

const header = (right, rightColor) => `<div style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:22px;border-bottom:1px solid ${LINE}">
    <div style="display:flex;align-items:center;gap:14px">
      ${logoMark(44)}
      <div style="font-size:13px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${MUTED}">Ananda Yoga Cagliari</div>
    </div>
    <div style="font-size:12px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${rightColor};white-space:nowrap">${right}</div>
  </div>`;

const footer = (p) => `<div style="margin-top:auto;border-top:1px solid ${LINE};padding-top:22px;display:flex;justify-content:center">
    <span style="width:8px;height:8px;border-radius:50%;background:${p.accent}"></span>
  </div>`;

const bullet = (t, p, size = 20) => `<div style="display:flex;gap:13px;align-items:flex-start">
        <span style="width:7px;height:7px;border-radius:50%;background:${p.accent};margin-top:${Math.round(size * 0.42)}px;flex:0 0 auto"></span>
        <span style="font-size:${size}px;line-height:1.5;color:${INK2};text-wrap:pretty">${t}</span>
      </div>`;

const panel = (heading, bullets, p) => `<div style="margin-top:36px;background:${p.pale};border-radius:12px;padding:30px 34px">
    <div style="font-size:20px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${p.deep};text-align:center;line-height:1.3">${heading}</div>
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:14px">
      ${bullets.map((b) => bullet(b, p)).join('\n      ')}
    </div>
  </div>`;

const priceCard = (c, p, cols) => `<div style="background:${CARD};border:1px solid ${p.mid};border-radius:12px;padding:26px 22px;display:flex;flex-direction:column">
      <div style="font-size:${cols === 3 ? 17 : 19}px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${INK};text-align:center;line-height:1.3">${c.name}</div>
      <div style="margin-top:16px;display:flex;flex-direction:column;gap:6px;align-items:center">
        ${c.prices.map((v) => `<div style="${TITLE};font-size:${cols === 3 ? 34 : 30}px;line-height:1.1;letter-spacing:0.4px;color:${p.deep}">${v}</div>`).join('\n        ')}
      </div>
      ${c.notes && c.notes.length ? `<div style="margin-top:20px;padding-top:18px;border-top:1px solid ${p.mid};display:flex;flex-direction:column;gap:11px">
        ${c.notes.map((n) => bullet(n, p, 16)).join('\n        ')}
      </div>` : ''}
    </div>`;

const slide = (s) => {
  const p = palette(s.hue);
  return doc(`<div style="width:1080px;height:1350px;box-sizing:border-box;background:${BG};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:64px 72px 52px 72px;overflow:hidden">
  ${header('Percorsi e quote', p.deep)}
  <div style="flex:1 1 auto;display:flex;flex-direction:column;justify-content:center">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:36px">
    <div>
      <h1 style="margin:0;${TITLE};font-size:${s.size}px;line-height:1.04;letter-spacing:0.4px;color:${INK}">${s.title}</h1>
      <div style="margin-top:14px;font-size:22px;font-weight:500;color:${MUTED}">${s.sub}</div>
    </div>
    ${medallion(s.art, p, 148)}
  </div>
  <div style="width:84px;height:3px;background:${p.accent};margin-top:26px"></div>
  ${panel(s.panelTitle, s.panelBullets, p)}
  <div style="margin-top:28px;display:grid;grid-template-columns:repeat(${s.cards.length}, minmax(0, 1fr));gap:20px;align-items:stretch">
    ${s.cards.map((c) => priceCard(c, p, s.cards.length)).join('\n    ')}
  </div>
  ${s.notes && s.notes.length ? `<div style="margin-top:30px;display:flex;flex-direction:column;gap:13px">
    ${s.notes.map((n) => bullet(n, p, 20)).join('\n    ')}
  </div>` : ''}
  </div>
  ${footer(p)}
</div>`);
};

// ---------------------------------------------------------------- content
// Testi ripresi alla lettera dalle quattro slide fornite.
const slides = [
  {
    file: 'Mensili', hue: 150, art: 'sequence', size: 62,
    title: 'Percorsi mensili',
    sub: 'La continuità per radicare la tua pratica',
    panelTitle: 'Per chi e’ ideale il percorso mensile?',
    panelBullets: [
      'Costanza e risultati: perfetto per chi desidera stabilire uno o più appuntamenti settimanali per consolidare i benefici della pratica',
      'Nessuno stress da impegni: ideale per chi vuole assicurare il proprio posto a lezione, ma apprezza la possibilità di recuperare eventuali assenze in altri corsi',
    ],
    cards: [
      { name: 'Il tuo percorso<br>8 ingressi', prices: ['€60 al mese'] },
      { name: 'Il tuo percorso<br>5 ingressi', prices: ['€40 al mese'] },
    ],
    notes: [
      'Posto riservato al tuo corso di riferimento',
      'Possibilità di recuperare le assenze con altre lezioni del palinsesto',
      'Ingressi extra: €7',
    ],
  },
  {
    file: 'Liberi', hue: 30, art: 'lab', size: 62,
    title: 'Percorsi liberi',
    sub: 'Soluzioni su misura per una totale flessibilità',
    panelTitle: 'Per chi e’ ideale il percorso libero?',
    panelBullets: [
      'Professionisti con orari flessibili, turnisti o trasfertisti che necessitano di gestire la propria presenza in totale libertà',
      'Per chi vuole integrare la pratica dello Yoga con altri sport senza la pressione di una scadenza mensile',
      'Per chi vuole conoscere la pratica Yoga e il centro Ananda Cagliari',
    ],
    cards: [
      { name: 'Carnet<br>8 ingressi', prices: ['€80'], notes: ['Valido tutto l’anno sportivo', 'Nessun vincolo di giorno o orario fisso'] },
      { name: 'Lezione<br>singola', prices: ['€15'], notes: ['Per accessi saltuari'] },
      { name: 'Lezione<br>prova', prices: ['€10'], notes: ['Riservato ai nuovi allievi che desiderano scoprire i corsi del centro'] },
    ],
  },
  {
    file: 'Accademia', hue: 175, art: 'advanced', size: 54,
    title: 'Percorsi Accademia',
    sub: 'Pratica intensiva e percorsi di approfondimento',
    panelTitle: 'Per chi e’ ideale il percorso Accademia?',
    panelBullets: [
      'Praticanti dedicati ed esperti che cercano una pratica quotidiana strutturata, focalizzata sull’autonomia, sull’auto-osservazione e sulla progressione individuale guidata passo dopo passo dall’insegnante',
      'Praticanti esperti che vogliono perfezionare la precisione dell’allineamento ed esplorare asana e transizioni sfidanti in lezioni intense e dinamiche',
    ],
    cards: [
      { name: 'Mysore', prices: ['€90 al mese (bis)'], notes: ['Pratica personalizzata in classe di gruppo', 'Sviluppo di una forte autodisciplina personale', 'Ingressi extra a lezioni del palinsesto: €7'] },
      { name: 'DYP Advanced', prices: ['€80 al mese (bis)', '€100 al mese (tris)'], notes: ['Corso avanzata di vinyasa con Mysore e laboratori su verticalismo, arm balance e archi', 'Ingressi extra a lezioni del palinsesto: €7'] },
    ],
  },
];

const cover = doc(`<div style="width:1080px;height:1350px;box-sizing:border-box;background:${BG};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:64px 72px 52px 72px;overflow:hidden">
  ${header('2026-2027', GOLD.dark)}
  <div style="flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    ${disc(logoMark(128), GOLD, 260)}
    <h1 style="margin:46px 0 0 0;${TITLE};font-size:70px;line-height:1.02;letter-spacing:0.4px;color:${GOLD.dark}">Nuovo anno<br>2026-2027</h1>
    <div style="width:56px;height:3px;background:${GOLD.accent};margin:28px 0 0 0"></div>
    <div style="margin-top:26px;font-size:24px;font-weight:700;letter-spacing:4.4px;text-transform:uppercase;color:${INK2}">Percorsi e quote</div>
    <div style="margin-top:52px;background:${GOLD.pale};border-radius:12px;padding:32px 40px;max-width:820px">
      <div style="${TITLE};font-size:30px;line-height:1.16;letter-spacing:0.4px;color:${GOLD.deep}">Iscrizione annuale - €40 (una tantum)</div>
      <div style="margin-top:14px;font-size:19px;line-height:1.5;color:${INK2}">Quota associativa annuale obbligatoria per tutti i percorsi e le attività.</div>
    </div>
  </div>
  ${footer(GOLD)}
</div>`);

// ---------------------------------------------------------------- write
const out = { 'Main.dc.html': cover };
slides.forEach((s) => (out[`${s.file}.dc.html`] = slide(s)));

const order = ['Main', ...slides.map((s) => s.file)];
out['canvas.json'] = JSON.stringify(
  { artboards: order.map((f, i) => ({ file: `${f}.dc.html`, x: i * 1240, y: 0, w: 1080, h: 1350 })), launch: { view: 'canvas' } },
  null, 2) + '\n';

for (const [name, content] of Object.entries(out)) writeFileSync(new URL(`./${name}`, import.meta.url), content);
console.log('wrote', Object.keys(out).length, 'files ·', order.length, 'artboards');
