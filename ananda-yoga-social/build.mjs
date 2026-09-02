import { writeFileSync } from 'node:fs';
import { palette } from './lib-color.mjs';
import { art } from './lib-art.mjs';

// Lovelo is a display face and is not distributable, so it is declared first in
// the stack and used for titles only: it renders wherever it is installed, and
// falls back to Montserrat (the logo's own family) everywhere else.
const DISPLAY = "'Lovelo','Lovelo Black','Lovelo Line Bold',Montserrat,'Avenir Next','Century Gothic',Futura,Helvetica,Arial,sans-serif";
const BODY = "Montserrat,'Avenir Next','Century Gothic',Futura,'Trebuchet MS',Helvetica,Arial,sans-serif";
const TITLE = `font-family:${DISPLAY};font-weight:800;font-synthesis:none;text-transform:uppercase`;

const BG = '#F8F5EC';
const SAND = '#EFE7D6';
const INK = '#33281F';
const INK2 = '#57493D';
const MUTED = '#9A8874';
const LINE = '#E2D9C7';
const GOLD = { accent: '#B8861F', dark: '#8C6416', deep: '#6E4E11', mid: '#E4CE9B', pale: '#F3EAD5' };
const PHONE = '351 717 7344';

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

const logoMark = (size = 44) => `<div style="width:${size}px;height:${Math.round(size * 0.78)}px;overflow:hidden;display:flex;justify-content:center;align-items:flex-start;flex:0 0 auto"><img src="ananda-logo.jpg" alt="Ananda Yoga Cagliari" style="width:${Math.round(size * 1.3)}px;margin-top:-${Math.round(size * 0.105)}px;mix-blend-mode:multiply;filter:contrast(1.2)"></div>`;

const medallion = (name, p, size = 260) => `<div style="width:${size}px;height:${size}px;box-sizing:border-box;border-radius:50%;background:${p.pale};border:2px solid ${p.mid};display:flex;align-items:center;justify-content:center;flex:0 0 auto">
      <svg width="${Math.round(size * 0.66)}" height="${Math.round(size * 0.66)}" viewBox="0 0 200 200" aria-hidden="true">${art[name](p)}</svg>
    </div>`;

const header = (right, rightColor) => `<div style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:22px;border-bottom:1px solid ${LINE}">
    <div style="display:flex;align-items:center;gap:14px">
      ${logoMark(44)}
      <div style="font-size:13px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${MUTED}">Ananda Yoga Cagliari</div>
    </div>
    <div style="font-size:12px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${rightColor};white-space:nowrap">${right}</div>
  </div>`;

const waIcon = (size, color) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto"><path d="M21 11.6a8.5 8.5 0 0 1-12.6 7.4L3.6 20.4l1.5-4.7A8.5 8.5 0 1 1 21 11.6Z"></path><path d="M8.9 8.7c.3-.6.6-.6 1-.6h.4c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .4-.1.6l-.4.5c-.2.2-.2.4 0 .7a6 6 0 0 0 2.7 2.3c.3.2.5 0 .7-.1l.4-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5 0 .8-.6 1.5-1.4 1.6a7 7 0 0 1-4.9-2.2 7 7 0 0 1-2.2-3.6c-.1-.6 0-1.2.3-1.7Z"></path></svg>`;

const courses = [
  { file: 'Risveglio', tag: 'Corso', hue: 60, art: 'sunrise',
    name: 'Risveglio Yoga', size: 60,
    times: ['Lunedì e Mercoledì · 7:00 – 8:00'],
    level: 'Principianti e intermedi',
    desc: 'Lezione per favorire una corretta attivazione mattutina psicofisica, ed iniziare la giornata con alta energia e calma. Lezione semplice ma completa, dalle posture alla respirazione.' },

  { file: 'DynamicBase', tag: 'Corso', hue: 30, art: 'flow',
    name: 'Dynamic Yoga Pro Base', size: 54,
    times: ['Lun · Mer · Ven · 9:15 – 10:15', 'Mar e Gio · 19:30 – 20:30'],
    level: 'Multilevel, anche principianti',
    desc: 'Sequenze di propedeutica yoga con metodologia vinyasa: connessione continua fra respiro e movimento. Migliora mobilità e funzionalità, con un lavoro organizzato per catene cinetiche principali. Il focus è la dinamicità, non la precisione dell’allineamento.' },

  { file: 'FlowToYin', tag: 'Corso', hue: 85, art: 'ripple',
    name: 'Flow to Yin', size: 64,
    times: ['Lun e Mer · 16:45 – 17:45', 'Mar e Gio · 9:15 – 10:15', 'Venerdì · 17:00 – 18:00'],
    level: 'Principianti e intermedi',
    desc: 'Un riscaldamento vinyasa morbido e lento accompagna verso posizioni statiche tenute in abbandono, per favorire un profondo rilascio fasciale e riscoprire una calma attivazione per corpo e mente.' },

  { file: 'YogaDolce', tag: 'Corso', hue: 350, art: 'gentle',
    name: 'Yoga Dolce', size: 64,
    times: ['Martedì e Giovedì · 10:30 – 11:30'],
    level: 'Principianti e senior',
    desc: 'Lezione studiata per le necessità psicofisiche delle persone anziane o con problematiche articolari importanti. Le posizioni sono eseguite con attrezzi e sostegni, affiancate da tecniche che favoriscono alta energia e senso di rigenerazione.' },

  { file: 'YogaFit', tag: 'Corso', hue: 20, art: 'strength',
    name: 'Yoga Fit', size: 64,
    times: ['Mar e Gio · 14:00 e 17:00', 'Sabati alterni · 9:00 – 10:00'],
    level: 'Principianti e intermedi',
    desc: 'Due focus in una lezione: un leggero potenziamento con pesi, per una adeguata stimolazione muscoloscheletrica contro osteopenia e sarcopenia, e una seconda parte di yoga classico con asana.' },

  { file: 'YogaPosturale', tag: 'Corso', hue: 330, art: 'column',
    name: 'Yoga Posturale', size: 58,
    times: ['Martedì e Giovedì · 18:15 – 19:15'],
    level: 'Principianti e intermedi',
    desc: 'Massimizza il beneficio posturale di una pratica classica integrandola con elementi di Pilates, Mézières e posturologia. Scienza e yoga al servizio di una colonna sana e dei corretti schemi motori, per mantenere funzionalità in ogni attività.' },

  { file: 'Hatha', tag: 'Corso', hue: 150, art: 'align',
    name: 'Hatha Yoga', size: 64,
    times: ['Lunedì e Mercoledì · 18:00 – 19:00'],
    level: 'Principianti e intermedi',
    desc: 'Lezione tecnica, adatta a comprendere e beneficiare dell’allineamento corretto nelle posture yoga. Ogni postura viene affrontata dopo una preparazione specifica e poi praticata in diverse varianti, anche con lavori di gruppo e props.' },

  { file: 'AnandaYoga', tag: 'Corso', hue: 310, art: 'mandala',
    name: 'Ananda Yoga', size: 64,
    times: ['Lunedì e Mercoledì · 19:15 – 20:15'],
    level: 'Multilevel, anche principianti',
    desc: 'Yoga classico con asana in diverse sequenze, respirazione e rilassamento. Presenta elementi molto caratterizzanti, con un aspetto introspettivo profondo secondo gli insegnamenti di Paramhansa Yogananda e l’uso del canto.' },

  { file: 'YogaLab', tag: 'Corso', hue: 195, art: 'lab',
    name: 'Yoga Lab', size: 64,
    times: ['Venerdì · 18:15 – 19:15'],
    level: 'Principianti e intermedi',
    desc: 'Lezione tematica con un tema e un focus diverso ogni settimana: un laboratorio ogni volta unico, per sperimentare diversi aspetti e metodologie didattiche.' },

  { file: 'Meditazione', tag: 'Corso', hue: 285, art: 'breath',
    name: 'Meditazione e Respirazione', size: 48,
    times: ['Venerdì · 19:30 – 21:30', 'A settimane alterne'],
    level: 'Multilevel, anche principianti',
    desc: 'Meditazione Raja Yoga, tecniche di respirazione e Pranayama: un viaggio esperienziale nel cuore dello Yoga.' },

  { file: 'YinNidra', tag: 'Corso', hue: 255, art: 'night',
    name: 'Yin e Nidra', size: 62,
    times: ['Sabati alterni · 9:00 – 10:00'],
    level: 'Multilevel, anche principianti',
    desc: 'Una lezione con due anime: nella prima parte asana in completo abbandono per un profondo rilascio fasciale; nella seconda una meditazione guidata in posizione di rilassamento, per immergersi nel subconscio e portare luce e rinnovamento.' },

  { file: 'Mysore', tag: 'Accademia', hue: 220, art: 'sequence',
    name: 'Mysore', size: 66,
    times: ['Martedì e Giovedì · 7:00 – 8:30', 'Mercoledì · 14:00 – 15:30'],
    level: 'Multilevel · principianti previo check dell’insegnante',
    desc: 'Lezione di gruppo in cui ciascun allievo svolge una sequenza personalizzata: l’insegnante aggiusta gli allineamenti e suggerisce varianti e propedeutiche a seconda delle esigenze individuali.' },

  { file: 'DypAdvanced', tag: 'Accademia', hue: 175, art: 'advanced',
    name: 'Dynamic Yoga Pro<br>Advanced &amp; Lab', size: 44,
    times: ['Lunedì · 14:00 · Lab e Advanced a settimane alterne', 'Venerdì · 14:00 – 15:00'],
    level: 'Multilevel · principianti previo check dell’insegnante',
    desc: 'Il Lab è una lezione approfondita di vinyasa con propedeutica per posizioni avanzate: verticali, arm balance, archi, hips opening profondi. Si alterna con la lezione da un’ora di sequenze vinyasa complete, per composizione di asana e avanzate.' },
];

// ---------------------------------------------------------------- course card
const courseCard = (c) => {
  const p = palette(c.hue);
  const times = c.times
    .map((t) => `<div style="font-size:18px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:${p.deep}">${t}</div>`)
    .join('\n      ');
  return doc(`<div style="width:1080px;height:1080px;box-sizing:border-box;background:${BG};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:64px 72px 52px 72px;overflow:hidden">
  ${header(c.tag, p.deep)}
  <div style="flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    ${medallion(c.art, p, 252)}
    <h1 style="margin:42px 0 0 0;${TITLE};font-size:${c.size}px;line-height:1.06;letter-spacing:0.4px;color:${INK}">${c.name}</h1>
    <div style="width:56px;height:3px;background:${p.accent};margin:24px 0 0 0"></div>
    <div style="margin-top:26px;display:flex;flex-direction:column;gap:7px">
      ${times}
    </div>
    <div style="margin-top:12px;font-size:13px;font-weight:600;letter-spacing:2.6px;text-transform:uppercase;color:${MUTED}">Livello · ${c.level}</div>
    <p style="margin:30px 0 0 0;max-width:840px;font-size:22px;line-height:1.62;font-weight:400;color:${INK2};text-wrap:pretty">${c.desc}</p>
  </div>
  <div style="border-top:1px solid ${LINE};padding-top:22px;display:flex;justify-content:center">
    <span style="width:8px;height:8px;border-radius:50%;background:${p.accent}"></span>
  </div>
</div>`);
};

// ---------------------------------------------------------------- cover
const dots = () => courses.map((c) => `<span style="width:13px;height:13px;border-radius:50%;background:${palette(c.hue).accent}"></span>`).join('');

const cover = doc(`<div style="width:1080px;height:1080px;box-sizing:border-box;background:${BG};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:64px 72px 52px 72px;overflow:hidden">
  ${header('Corsi', GOLD.dark)}
  <div style="flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    <div style="width:268px;height:268px;box-sizing:border-box;border-radius:50%;background:${GOLD.pale};border:2px solid ${GOLD.mid};display:flex;align-items:center;justify-content:center;flex:0 0 auto">${logoMark(132)}</div>
    <h1 style="margin:44px 0 0 0;${TITLE};font-size:76px;line-height:1.02;letter-spacing:0.4px;color:${GOLD.dark}">Il tuo nuovo<br>anno di Yoga</h1>
    <div style="width:56px;height:3px;background:${GOLD.accent};margin:28px 0 0 0"></div>
    <p style="margin:30px 0 0 0;max-width:800px;font-size:25px;line-height:1.6;font-weight:400;color:${INK2};text-wrap:pretty">Tredici corsi, dal risveglio del mattino alla meditazione della sera. Trova il tuo, qualunque sia il tuo livello.</p>
    <div style="display:flex;gap:9px;margin-top:40px">${dots()}</div>
  </div>
  <div style="border-top:1px solid ${LINE};padding-top:22px;display:flex;justify-content:center;font-size:13px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${MUTED}">Scorri per scoprirli →</div>
</div>`);

// ---------------------------------------------------------------- academy divider
const accP = palette(175);
const accademia = doc(`<div style="width:1080px;height:1080px;box-sizing:border-box;background:${SAND};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:64px 72px 52px 72px;overflow:hidden">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:22px;border-bottom:1px solid #DCCFB6">
    <div style="display:flex;align-items:center;gap:14px">
      ${logoMark(44)}
      <div style="font-size:13px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:#8E7C63">Ananda Yoga Cagliari</div>
    </div>
    <div style="font-size:12px;font-weight:700;letter-spacing:3.2px;text-transform:uppercase;color:${accP.deep}">Approfondimento</div>
  </div>
  <div style="flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    <div style="width:252px;height:252px;box-sizing:border-box;border-radius:50%;background:${accP.pale};border:2px solid ${accP.mid};display:flex;align-items:center;justify-content:center;flex:0 0 auto">${logoMark(124)}</div>
    <h1 style="margin:42px 0 0 0;${TITLE};font-size:76px;line-height:1.02;letter-spacing:0.4px;color:${INK}">Corsi<br>Accademia</h1>
    <div style="width:56px;height:3px;background:${accP.accent};margin:24px 0 0 0"></div>
    <p style="margin:28px 0 0 0;max-width:820px;font-size:23px;line-height:1.6;color:${INK2};text-wrap:pretty">Percorsi adatti a chi desidera un approfondimento della pratica, anche dal punto di vista fisico.</p>
    <div style="margin-top:36px;display:flex;flex-direction:column;gap:0;width:640px">
      <div style="border-top:1px solid #DCCFB6;padding:16px 0;font-size:19px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${INK}">Mysore</div>
      <div style="border-top:1px solid #DCCFB6;border-bottom:1px solid #DCCFB6;padding:16px 0;font-size:19px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${INK}">Dynamic Yoga Pro Advanced &amp; Lab</div>
    </div>
  </div>
  <div style="border-top:1px solid #DCCFB6;padding-top:22px;display:flex;justify-content:center;font-size:13px;font-weight:600;letter-spacing:2.6px;text-transform:uppercase;color:#8E7C63">Principianti previo check dell’insegnante</div>
</div>`);

// ---------------------------------------------------------------- schedule
const HUE = { risveglio: 60, dyp: 30, fty: 85, dolce: 350, fit: 20, post: 330, hatha: 150, ananda: 310, lab: 195, medit: 285, nidra: 255, mysore: 220, adv: 175 };
const N = null;
const rows = [
  [['7:00', 'Risveglio Yoga', HUE.risveglio], ['7:00', 'Mysore°°', HUE.mysore], ['7:00', 'Risveglio Yoga', HUE.risveglio], ['7:00', 'Mysore°°', HUE.mysore], N, ['7:30', 'Guidata Speciale*', N]],
  [['9:15', 'Dynamic Yoga Pro base', HUE.dyp], ['9:15', 'Flow To Yin', HUE.fty], ['9:15', 'Dynamic Yoga Pro base', HUE.dyp], ['9:15', 'Flow To Yin', HUE.fty], ['9:15', 'Dynamic Yoga Pro base', HUE.dyp], ['9:00', 'Yoga Fit / Yin e Nidra•', HUE.fit]],
  [N, ['10:30', 'Yoga Dolce', HUE.dolce], N, ['10:30', 'Yoga Dolce', HUE.dolce], N, N],
  [['14:00', 'DYP Advanced Lab°° / DYP Advanced•', HUE.adv], ['14:00', 'Yoga Fit', HUE.fit], ['14:00', 'Mysore°°', HUE.mysore], ['14:00', 'Yoga Fit', HUE.fit], ['14:00', 'Dynamic Yoga Pro Advanced', HUE.adv], N],
  [['16:45', 'Flow To Yin', HUE.fty], ['17:00', 'Yoga Fit', HUE.fit], ['16:45', 'Flow To Yin', HUE.fty], ['17:00', 'Yoga Fit', HUE.fit], ['17:00', 'Flow To Yin', HUE.fty], 'DOMENICA'],
  [['18:00', 'Hatha Yoga', HUE.hatha], ['18:15', 'Yoga Posturale', HUE.post], ['18:00', 'Hatha Yoga', HUE.hatha], ['18:15', 'Yoga Posturale', HUE.post], ['18:15', 'Yoga Lab', HUE.lab], ['8:30', 'Speciali e workshop', N]],
  [['19:15', 'Ananda Yoga', HUE.ananda], ['19:30', 'Dynamic Yoga Pro base', HUE.dyp], ['19:15', 'Ananda Yoga', HUE.ananda], ['19:30', 'Dynamic Yoga Pro base', HUE.dyp], ['19:30', 'Meditazione e Respirazione*', HUE.medit], N],
];
const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

const cell = (c) => {
  if (c === 'DOMENICA') return `<div style="display:flex;flex-direction:column;gap:4px"><div style="height:15px"></div><div style="flex:1;display:flex;align-items:center;justify-content:center;border:1px solid ${LINE};background:${SAND};border-radius:7px;font-size:13px;font-weight:700;letter-spacing:2px;color:${INK};text-transform:uppercase">Domenica</div></div>`;
  if (!c) return `<div></div>`;
  const [t, n, hue] = c;
  const p = hue === null ? null : palette(hue);
  return `<div style="display:flex;flex-direction:column;gap:4px">
        <div style="height:15px;font-size:12.5px;font-weight:600;color:${MUTED};text-align:center;line-height:1">${t}</div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;background:${p ? p.pale : '#EFEADC'};border-radius:7px;padding:6px 8px;text-align:center">
          <span style="width:22px;height:2px;background:${p ? p.accent : '#C7BCA4'}"></span>
          <span style="font-size:14px;font-weight:600;line-height:1.24;color:${INK}">${n}</span>
        </div>
      </div>`;
};

const gridRows = rows
  .map((r) => `<div style="display:grid;grid-template-columns:repeat(6, minmax(0, 1fr));gap:7px;height:88px">${r.map(cell).join('')}</div>`)
  .join('\n      ');

const palinsesto = doc(`<div style="width:1080px;height:1080px;box-sizing:border-box;background:${BG};color:${INK};font-family:${BODY};display:flex;flex-direction:column;padding:44px 44px 40px 44px;overflow:hidden">
  ${header('Palinsesto', GOLD.dark)}
  <h1 style="margin:24px 0 0 0;${TITLE};font-size:40px;line-height:1;letter-spacing:0.4px;color:${GOLD.dark};text-align:center">Il tuo nuovo anno di Yoga</h1>
  <div style="margin-top:22px;display:flex;flex-direction:column;gap:7px">
    <div style="display:grid;grid-template-columns:repeat(6, minmax(0, 1fr));gap:7px">
      ${days.map((d) => `<div style="border-bottom:2px solid ${INK};padding:0 2px 9px 2px;text-align:center;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${INK}">${d}</div>`).join('')}
    </div>
      ${gridRows}
  </div>
  <div style="margin-top:14px;font-size:12px;line-height:1.5;color:${MUTED};text-align:center">• alternanza settimanale di due diverse lezioni &nbsp;·&nbsp; * lezione a settimane alterne &nbsp;·&nbsp; °° classi da 1h30, tutte le altre da 1h</div>
  <div style="margin-top:auto;border-top:1px solid ${LINE};padding-top:24px;display:flex;align-items:center;justify-content:space-between;gap:24px">
    <div>
      <div style="${TITLE};font-size:29px;line-height:1;letter-spacing:0.4px;color:${INK}">Ti aspettiamo sul tappetino</div>
      <div style="margin-top:9px;font-size:16px;color:${MUTED}">Scrivici per informazioni, prove e iscrizioni.</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;border:1.5px solid #CDBE9C;border-radius:999px;padding:13px 22px;white-space:nowrap">
      ${waIcon(22, GOLD.dark)}
      <div style="display:flex;flex-direction:column;line-height:1.2">
        <span style="font-size:10px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:${MUTED}">WhatsApp</span>
        <span style="font-size:21px;font-weight:800;letter-spacing:0.4px;color:${INK}">${PHONE}</span>
      </div>
    </div>
  </div>
</div>`);

// ---------------------------------------------------------------- write
const out = {
  'Main.dc.html': cover,
  'Accademia.dc.html': accademia,
  'Palinsesto.dc.html': palinsesto,
};
courses.forEach((c) => (out[`${c.file}.dc.html`] = courseCard(c)));

const order = ['Main', ...courses.slice(0, 11).map((c) => c.file), 'Accademia', ...courses.slice(11).map((c) => c.file), 'Palinsesto'];
const artboards = order.map((f, i) => ({
  file: `${f}.dc.html`,
  x: (i % 4) * 1240,
  y: Math.floor(i / 4) * 1300,
  w: 1080,
  h: 1080,
}));
out['canvas.json'] = JSON.stringify({ artboards, launch: { view: 'canvas' } }, null, 2) + '\n';

for (const [name, content] of Object.entries(out)) {
  writeFileSync(new URL(`./${name}`, import.meta.url), content);
}
console.log('wrote', Object.keys(out).length, 'files ·', order.length, 'artboards');
