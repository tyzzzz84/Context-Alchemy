import { writeFileSync } from 'node:fs';
import { palette, oklch } from './lib-color.mjs';
import { art, CREAM } from './lib-art.mjs';

const FONT = "'Montserrat','Avenir Next','Century Gothic',Futura,'Trebuchet MS',Helvetica,Arial,sans-serif";
const BG = '#F6F2E6';
const INK = '#33281F';
const INK2 = '#4A3C31';
const MUTED = '#8A7767';
const GOLD = '#A9761B';
const BROWN = '#3E322A';
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
    body { margin: 0; font-family: ${FONT}; }
    a { color: #8A5A1E; } a:hover { color: #6B4415; }
  </style>
</helmet>
${body}
</x-dc>
</body>
</html>
`;

const logoMark = (size = 56, dark = false) => `<div style="width:${size}px;height:${Math.round(size * 0.78)}px;overflow:hidden;display:flex;justify-content:center;align-items:flex-start"><img src="ananda-logo.jpg" alt="Ananda Yoga Cagliari" style="width:${Math.round(size * 1.3)}px;margin-top:-${Math.round(size * 0.105)}px;${dark ? 'filter:invert(1) contrast(1.25);mix-blend-mode:screen' : 'mix-blend-mode:multiply;filter:contrast(1.2)'}"></div>`;

const header = (tag, p) => `
  <div style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding:40px 56px 0 56px">
    <div style="display:flex;align-items:center;gap:16px">
      ${logoMark(54)}
      <div style="font-size:15px;font-weight:700;letter-spacing:2.8px;text-transform:uppercase;color:${MUTED}">Ananda Yoga Cagliari</div>
    </div>
    <div style="font-size:13px;font-weight:800;letter-spacing:2.6px;text-transform:uppercase;color:${p.deep};border:2px solid ${p.accent};border-radius:999px;padding:9px 20px;white-space:nowrap">${tag}</div>
  </div>`;

const waIcon = (size = 26, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto"><path d="M21 11.6a8.5 8.5 0 0 1-12.6 7.4L3.6 20.4l1.5-4.7A8.5 8.5 0 1 1 21 11.6Z"></path><path d="M8.9 8.7c.3-.6.6-.6 1-.6h.4c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .4-.1.6l-.4.5c-.2.2-.2.4 0 .7a6 6 0 0 0 2.7 2.3c.3.2.5 0 .7-.1l.4-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5 0 .8-.6 1.5-1.4 1.6a7 7 0 0 1-4.9-2.2 7 7 0 0 1-2.2-3.6c-.1-.6 0-1.2.3-1.7Z"></path></svg>`;

// ---------------------------------------------------------------- courses
const courses = [
  { file: 'Risveglio', tag: 'Corso', hue: 60, art: 'sunrise',
    name: 'Risveglio Yoga', size: 62,
    times: ['Lunedì e Mercoledì · 7:00 – 8:00'],
    level: 'Principianti e intermedi',
    desc: 'Lezione per favorire una corretta attivazione mattutina psicofisica, ed iniziare la giornata con alta energia e calma. Lezione semplice ma completa, dalle posture alla respirazione.' },

  { file: 'DynamicBase', tag: 'Corso', hue: 30, art: 'flow',
    name: 'Dynamic Yoga Pro Base', size: 56,
    times: ['Lun · Mer · Ven · 9:15 – 10:15', 'Mar e Gio · 19:30 – 20:30'],
    level: 'Multilevel, anche principianti',
    desc: 'Sequenze di propedeutica yoga con metodologia vinyasa: connessione continua fra respiro e movimento. Migliora mobilità e funzionalità, con un lavoro organizzato per catene cinetiche principali. Il focus è la dinamicità, non la precisione dell’allineamento.' },

  { file: 'FlowToYin', tag: 'Corso', hue: 85, art: 'ripple',
    name: 'Flow to Yin', size: 66,
    times: ['Lun e Mer · 16:45 – 17:45', 'Mar e Gio · 9:15 – 10:15', 'Venerdì · 17:00 – 18:00'],
    level: 'Principianti e intermedi',
    desc: 'Un riscaldamento vinyasa morbido e lento accompagna verso posizioni statiche tenute in abbandono, per favorire un profondo rilascio fasciale e riscoprire una calma attivazione per corpo e mente.' },

  { file: 'YogaDolce', tag: 'Corso', hue: 350, art: 'gentle',
    name: 'Yoga Dolce', size: 66,
    times: ['Martedì e Giovedì · 10:30 – 11:30'],
    level: 'Principianti e senior',
    desc: 'Lezione studiata per le necessità psicofisiche delle persone anziane o con problematiche articolari importanti. Le posizioni sono eseguite con attrezzi e sostegni, affiancate da tecniche che favoriscono alta energia e senso di rigenerazione.' },

  { file: 'YogaFit', tag: 'Corso', hue: 20, art: 'strength',
    name: 'Yoga Fit', size: 66,
    times: ['Mar e Gio · 14:00 e 17:00', 'Sabati alterni · 9:00 – 10:00'],
    level: 'Principianti e intermedi',
    desc: 'Due focus in una lezione: un leggero potenziamento con pesi, per una adeguata stimolazione muscoloscheletrica contro osteopenia e sarcopenia, e una seconda parte di yoga classico con asana.' },

  { file: 'YogaPosturale', tag: 'Corso', hue: 330, art: 'column',
    name: 'Yoga Posturale', size: 60,
    times: ['Martedì e Giovedì · 18:15 – 19:15'],
    level: 'Principianti e intermedi',
    desc: 'Massimizza il beneficio posturale di una pratica classica integrandola con elementi di Pilates, Mézières e posturologia. Scienza e yoga al servizio di una colonna sana e dei corretti schemi motori, per mantenere funzionalità in ogni attività.' },

  { file: 'Hatha', tag: 'Corso', hue: 150, art: 'align',
    name: 'Hatha Yoga', size: 66,
    times: ['Lunedì e Mercoledì · 18:00 – 19:00'],
    level: 'Principianti e intermedi',
    desc: 'Lezione tecnica, adatta a comprendere e beneficiare dell’allineamento corretto nelle posture yoga. Ogni postura viene affrontata dopo una preparazione specifica e poi praticata in diverse varianti, anche con lavori di gruppo e props.' },

  { file: 'AnandaYoga', tag: 'Corso', hue: 310, art: 'mandala',
    name: 'Ananda Yoga', size: 66,
    times: ['Lunedì e Mercoledì · 19:15 – 20:15'],
    level: 'Multilevel, anche principianti',
    desc: 'Yoga classico con asana in diverse sequenze, respirazione e rilassamento. Presenta elementi molto caratterizzanti, con un aspetto introspettivo profondo secondo gli insegnamenti di Paramhansa Yogananda e l’uso del canto.' },

  { file: 'YogaLab', tag: 'Corso', hue: 195, art: 'lab',
    name: 'Yoga Lab', size: 66,
    times: ['Venerdì · 18:15 – 19:15'],
    level: 'Principianti e intermedi',
    desc: 'Lezione tematica con un tema e un focus diverso ogni settimana: un laboratorio ogni volta unico, per sperimentare diversi aspetti e metodologie didattiche.' },

  { file: 'Meditazione', tag: 'Corso', hue: 285, art: 'breath',
    name: 'Meditazione e Respirazione', size: 52,
    times: ['Venerdì · 19:30 – 21:30', 'A settimane alterne'],
    level: 'Multilevel, anche principianti',
    desc: 'Meditazione Raja Yoga, tecniche di respirazione e Pranayama: un viaggio esperienziale nel cuore dello Yoga.' },

  { file: 'YinNidra', tag: 'Corso', hue: 255, art: 'night',
    name: 'Yin e Nidra', size: 64,
    times: ['Sabati alterni · 9:00 – 10:00'],
    level: 'Multilevel, anche principianti',
    desc: 'Una lezione con due anime: nella prima parte asana in completo abbandono per un profondo rilascio fasciale; nella seconda una meditazione guidata in posizione di rilassamento, per immergersi nel subconscio e portare luce e rinnovamento.' },

  { file: 'Mysore', tag: 'Accademia', hue: 220, art: 'sequence',
    name: 'Mysore', size: 68,
    times: ['Martedì e Giovedì · 7:00 – 8:30', 'Mercoledì · 14:00 – 15:30'],
    level: 'Multilevel · principianti previo check dell’insegnante',
    desc: 'Lezione di gruppo in cui ciascun allievo svolge una sequenza personalizzata: l’insegnante aggiusta gli allineamenti e suggerisce varianti e propedeutiche a seconda delle esigenze individuali.' },

  { file: 'DypAdvanced', tag: 'Accademia', hue: 175, art: 'advanced',
    name: 'Dynamic Yoga Pro<br>Advanced &amp; Lab', size: 50,
    times: ['Lunedì · 14:00 · Lab e Advanced a settimane alterne', 'Venerdì · 14:00 – 15:00'],
    level: 'Multilevel · principianti previo check dell’insegnante',
    desc: 'Il Lab è una lezione approfondita di vinyasa con propedeutica per posizioni avanzate: verticali, arm balance, archi, hips opening profondi. Si alterna con la lezione da un’ora di sequenze vinyasa complete, per composizione di asana e avanzate.' },
];

const courseCard = (c) => {
  const p = palette(c.hue);
  const chips = c.times
    .map((t) => `<span style="font-size:20px;font-weight:700;color:${INK};background:${p.soft};border-radius:999px;padding:11px 20px;white-space:nowrap">${t}</span>`)
    .join('\n        ');
  return doc(`<div style="width:1080px;height:1080px;background:${BG};color:${INK};display:flex;flex-direction:column;overflow:hidden">
  ${header(c.tag, p)}
  <div style="position:relative;flex:1 1 auto;min-height:280px;margin-top:32px;background:${p.accent};overflow:hidden">
    <svg viewBox="0 0 1080 600" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;display:block">${art[c.art](p)}</svg>
  </div>
  <div style="padding:40px 56px 48px 56px;display:flex;flex-direction:column;align-items:flex-start">
    <h1 style="margin:0;font-size:${c.size}px;line-height:1.03;font-weight:800;letter-spacing:-0.8px;text-transform:uppercase;color:${INK}">${c.name}</h1>
    <div style="width:104px;height:7px;border-radius:4px;background:${p.accent};margin-top:20px"></div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:22px">
        ${chips}
    </div>
    <div style="margin-top:16px;font-size:16px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${MUTED}">Livello · ${c.level}</div>
    <p style="margin:20px 0 0 0;font-size:23px;line-height:1.5;font-weight:400;color:${INK2};text-wrap:pretty">${c.desc}</p>
  </div>
</div>`);
};

// ---------------------------------------------------------------- cover
const coverArt = () => {
  const petal = (cx, cy, r, k) => `M ${cx} ${cy - r} C ${cx + k} ${cy - r * 0.45} ${cx + k} ${cy - r * 0.1} ${cx} ${cy} C ${cx - k} ${cy - r * 0.1} ${cx - k} ${cy - r * 0.45} ${cx} ${cy - r} Z`;
  let g = '';
  for (let i = 0; i < 4; i++) {
    g += `<path d="${petal(540, 540, 372, 236)}" fill="none" stroke="${GOLD}" stroke-width="10" transform="rotate(${i * 90} 540 540)"/>`;
    g += `<path d="${petal(540, 540, 372, 236)}" fill="none" stroke="${GOLD}" stroke-width="7" transform="rotate(${45 + i * 90} 540 540)"/>`;
    g += `<path d="${petal(540, 540, 250, 155)}" fill="none" stroke="${GOLD}" stroke-width="8" transform="rotate(${45 + i * 90} 540 540)"/>`;
    g += `<circle cx="540" cy="146" r="38" fill="none" stroke="${GOLD}" stroke-width="8" transform="rotate(${22.5 + i * 90} 540 540)"/>`;
  }
  return g;
};

const dots = () => courses.map((c) => `<span style="width:22px;height:22px;border-radius:50%;background:${palette(c.hue).accent}"></span>`).join('');

const cover = doc(`<div style="width:1080px;height:1080px;background:${BG};color:${INK};position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 1080 1080" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.13" aria-hidden="true">${coverArt()}</svg>
  <div style="position:relative;display:flex;flex-direction:column;align-items:center;padding:0 70px">
    ${logoMark(176)}
    <div style="margin-top:26px;font-size:17px;font-weight:700;letter-spacing:4.6px;text-transform:uppercase;color:${MUTED}">Ananda Yoga Cagliari</div>
    <h1 style="margin:34px 0 0 0;font-size:82px;line-height:0.98;font-weight:800;letter-spacing:-2px;text-transform:uppercase;color:${GOLD}">Il tuo nuovo<br>anno di Yoga</h1>
    <div style="width:140px;height:8px;border-radius:4px;background:${GOLD};margin-top:32px"></div>
    <p style="margin:32px 0 0 0;font-size:28px;line-height:1.45;font-weight:500;color:${INK2};max-width:760px;text-wrap:pretty">Tredici corsi, dal risveglio del mattino alla meditazione della sera. Trova il tuo, qualunque sia il tuo livello.</p>
    <div style="display:flex;gap:10px;margin-top:40px">${dots()}</div>
    <div style="margin-top:44px;font-size:18px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${MUTED}">Scorri per scoprirli →</div>
  </div>
</div>`);

// ---------------------------------------------------------------- accademia divider
const accP = palette(175);
const accademia = doc(`<div style="width:1080px;height:1080px;background:${BROWN};color:${BG};position:relative;overflow:hidden;display:flex;flex-direction:column">
  <svg viewBox="0 0 1080 1080" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.16" aria-hidden="true">
    <g fill="none" stroke="${CREAM}" stroke-width="8">
      <circle cx="880" cy="220" r="180"/><circle cx="880" cy="220" r="110"/><circle cx="880" cy="220" r="42"/>
      <path d="M 60 940 A 220 220 0 0 1 500 940"/><path d="M 140 940 A 140 140 0 0 1 420 940"/>
      <path d="M 620 880 L 860 880 L 740 660 Z" stroke-linejoin="round"/>
    </g>
  </svg>
  <div style="position:relative;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:44px 60px 0 60px">
    <div style="display:flex;align-items:center;gap:16px">
      ${logoMark(54, true)}
      <div style="font-size:15px;font-weight:700;letter-spacing:2.8px;text-transform:uppercase;color:rgba(246,242,230,0.7)">Ananda Yoga Cagliari</div>
    </div>
  </div>
  <div style="position:relative;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;padding:0 60px">
    <div style="font-size:16px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:${accP.mid}">Approfondimento</div>
    <h1 style="margin:22px 0 0 0;font-size:96px;line-height:0.96;font-weight:800;letter-spacing:-2.4px;text-transform:uppercase;color:${BG}">Corsi<br>Accademia</h1>
    <div style="width:140px;height:8px;border-radius:4px;background:${accP.accent};margin-top:32px"></div>
    <p style="margin:34px 0 0 0;font-size:29px;line-height:1.45;font-weight:400;color:rgba(246,242,230,0.88);max-width:860px;text-wrap:pretty">Percorsi adatti a chi desidera un approfondimento della pratica, anche dal punto di vista fisico.</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:44px">
      <span style="font-size:22px;font-weight:700;color:${BROWN};background:${accP.mid};border-radius:999px;padding:14px 26px">Mysore</span>
      <span style="font-size:22px;font-weight:700;color:${BROWN};background:${accP.mid};border-radius:999px;padding:14px 26px">Dynamic Yoga Pro Advanced &amp; Lab</span>
    </div>
    <div style="margin-top:34px;font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(246,242,230,0.6)">Principianti previo check dell’insegnante</div>
  </div>
</div>`);

// ---------------------------------------------------------------- palinsesto
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
  if (c === 'DOMENICA') return `<div style="display:flex;flex-direction:column;gap:4px"><div style="height:16px"></div><div style="flex:1;display:flex;align-items:center;justify-content:center;background:${BROWN};border-radius:9px;font-size:15px;font-weight:800;letter-spacing:2px;color:${BG};text-transform:uppercase">Domenica</div></div>`;
  if (!c) return `<div></div>`;
  const [t, n, hue] = c;
  const bg = hue === null ? '#EBE3D2' : palette(hue).soft;
  return `<div style="display:flex;flex-direction:column;gap:4px">
        <div style="height:16px;font-size:13.5px;font-weight:600;font-style:italic;color:${MUTED};text-align:center;line-height:1">${t}</div>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;text-align:center;background:${bg};border-radius:9px;padding:6px 7px;font-size:14.5px;font-weight:700;line-height:1.24;color:${INK}">${n}</div>
      </div>`;
};

const gridRows = rows
  .map((r) => `<div style="display:grid;grid-template-columns:repeat(6, minmax(0, 1fr));gap:6px;height:92px">${r.map(cell).join('')}</div>`)
  .join('\n      ');

const palinsesto = doc(`<div style="width:1080px;height:1080px;background:${BG};color:${INK};display:flex;flex-direction:column;overflow:hidden">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;padding:30px 30px 0 30px">
    <div style="display:flex;align-items:center;gap:14px">
      ${logoMark(46)}
      <div style="font-size:13px;font-weight:700;letter-spacing:2.6px;text-transform:uppercase;color:${MUTED}">Ananda Yoga Cagliari</div>
    </div>
    <div style="font-size:12px;font-weight:800;letter-spacing:2.4px;text-transform:uppercase;color:${GOLD};border:2px solid ${GOLD};border-radius:999px;padding:8px 18px">Palinsesto</div>
  </div>
  <h1 style="margin:16px 30px 0 30px;font-size:38px;line-height:1;font-weight:800;letter-spacing:-1px;text-transform:uppercase;color:${GOLD}">Il tuo nuovo anno di Yoga</h1>
  <div style="padding:18px 30px 0 30px;display:flex;flex-direction:column;gap:6px">
    <div style="display:grid;grid-template-columns:repeat(6, minmax(0, 1fr));gap:6px">
      ${days.map((d) => `<div style="background:${BROWN};color:${BG};border-radius:9px;padding:10px 4px;text-align:center;font-size:15px;font-weight:700;letter-spacing:0.6px">${d}</div>`).join('')}
    </div>
      ${gridRows}
  </div>
  <div style="margin:14px 30px 0 30px;font-size:12.5px;line-height:1.5;font-weight:500;color:${MUTED};text-align:center">• alternanza settimanale di due diverse lezioni &nbsp;·&nbsp; * lezione a settimane alterne &nbsp;·&nbsp; °° classi da 1h30, tutte le altre da 1h</div>
  <div style="margin-top:auto;background:${BROWN};color:${BG};padding:26px 40px;display:flex;align-items:center;justify-content:space-between;gap:28px">
    <div style="display:flex;flex-direction:column;gap:7px">
      <div style="font-size:31px;font-weight:800;letter-spacing:-0.5px;text-transform:uppercase;line-height:1">Ti aspettiamo sul tappetino</div>
      <div style="font-size:17px;font-weight:500;color:rgba(246,242,230,0.78)">Scrivici per informazioni, prove e iscrizioni.</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;background:rgba(246,242,230,0.12);border:1.5px solid rgba(246,242,230,0.4);border-radius:999px;padding:14px 24px;white-space:nowrap">
      ${waIcon(26, CREAM)}
      <div style="display:flex;flex-direction:column;line-height:1.15">
        <span style="font-size:11px;font-weight:700;letter-spacing:2.2px;text-transform:uppercase;color:rgba(246,242,230,0.7)">WhatsApp</span>
        <span style="font-size:23px;font-weight:800;letter-spacing:0.4px">${PHONE}</span>
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
console.log(order.join(' → '));
