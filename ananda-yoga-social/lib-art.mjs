// Abstract, people-free artwork for each course panel. viewBox: 0 0 1080 600.
const W = 1080, H = 600, CX = 540, CY = 300;
const CREAM = '#F6F2E6';
const rot = (deg, cx = CX, cy = CY) => `rotate(${deg} ${cx} ${cy})`;

// vesica / lotus petal with its tip at (cx, cy-r)
const petal = (cx, cy, r, k) =>
  `M ${cx} ${cy - r} C ${cx + k} ${cy - r * 0.45} ${cx + k} ${cy - r * 0.1} ${cx} ${cy} C ${cx - k} ${cy - r * 0.1} ${cx - k} ${cy - r * 0.45} ${cx} ${cy - r} Z`;

const bg = (p) => `<rect width="${W}" height="${H}" fill="${p.accent}"/>`;

export const art = {
  // Morning: a sun rising over the frame edge
  sunrise: (p) => {
    let rays = '';
    for (let a = -108; a <= 108; a += 15) {
      rays += `<rect x="533" y="235" width="14" height="82" rx="7" fill="${CREAM}" opacity="0.9" transform="${rot(a, 540, 520)}"/>`;
    }
    return `${bg(p)}
      <circle cx="540" cy="520" r="392" fill="${p.dark}" opacity="0.3"/>
      <circle cx="540" cy="520" r="300" fill="${p.dark}" opacity="0.4"/>
      ${rays}
      <circle cx="540" cy="520" r="178" fill="${CREAM}"/>
      <circle cx="168" cy="118" r="16" fill="${CREAM}" opacity="0.75"/>
      <circle cx="912" cy="96" r="24" fill="${CREAM}" opacity="0.6"/>
      <circle cx="836" cy="180" r="11" fill="${CREAM}" opacity="0.8"/>`;
  },

  // Four-fold lotus, echoing the Ananda mark
  mandala: (p) => {
    let outer = '', inner = '', dots = '';
    for (let i = 0; i < 4; i++) {
      outer += `<path d="${petal(CX, CY, 236, 138)}" fill="none" stroke="${CREAM}" stroke-width="10" transform="${rot(i * 90)}"/>`;
      inner += `<path d="${petal(CX, CY, 142, 90)}" fill="${CREAM}" opacity="0.94" transform="${rot(45 + i * 90)}"/>`;
      dots += `<circle cx="${CX}" cy="${CY - 208}" r="21" fill="${CREAM}" opacity="0.8" transform="${rot(45 + i * 90)}"/>`;
    }
    return `${bg(p)}
      <circle cx="${CX}" cy="${CY}" r="256" fill="${p.dark}" opacity="0.38"/>
      ${outer}${dots}${inner}
      <circle cx="${CX}" cy="${CY}" r="38" fill="${p.deep}"/>
      <circle cx="150" cy="128" r="52" fill="${CREAM}" opacity="0.3"/>
      <circle cx="944" cy="470" r="66" fill="${CREAM}" opacity="0.26"/>`;
  },

  // Vinyasa: breath and movement in one continuous line
  flow: (p) => {
    const wave = (y, amp, sw, op, col) =>
      `<path d="M -60 ${y} C 150 ${y - amp} 300 ${y + amp} 510 ${y} C 720 ${y - amp} 870 ${y + amp} 1140 ${y}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" opacity="${op}"/>`;
    return `${bg(p)}
      ${wave(140, 84, 26, 0.32, p.dark)}
      ${wave(212, 94, 32, 0.48, p.dark)}
      ${wave(300, 104, 38, 1, CREAM)}
      ${wave(390, 94, 26, 0.68, CREAM)}
      ${wave(468, 80, 16, 0.4, CREAM)}
      <circle cx="510" cy="300" r="28" fill="${p.deep}"/>`;
  },

  // Flow settling into stillness
  ripple: (p) => {
    let rings = '';
    for (let r = 44; r <= 244; r += 40) {
      rings += `<circle cx="762" cy="378" r="${r}" fill="none" stroke="${CREAM}" stroke-width="${r < 130 ? 13 : 8}" opacity="${1 - r / 340}"/>`;
    }
    return `${bg(p)}
      <path d="M -60 190 C 130 96 280 288 470 200 C 620 132 730 232 900 168 C 1000 130 1080 156 1140 140" fill="none" stroke="${p.dark}" stroke-width="30" stroke-linecap="round" opacity="0.5"/>
      <path d="M -60 258 C 130 164 280 356 470 268 C 620 200 730 300 900 236 C 1000 198 1080 224 1140 208" fill="none" stroke="${CREAM}" stroke-width="26" stroke-linecap="round"/>
      ${rings}
      <circle cx="762" cy="378" r="22" fill="${p.deep}"/>
      <circle cx="232" cy="452" r="78" fill="${CREAM}" opacity="0.3"/>
      <circle cx="368" cy="524" r="26" fill="${CREAM}" opacity="0.45"/>`;
  },

  // Alignment: square, triangle and circle on one axis
  align: (p) => `${bg(p)}
      <line x1="540" y1="34" x2="540" y2="566" stroke="${CREAM}" stroke-width="5" opacity="0.5" stroke-dasharray="18 16"/>
      <line x1="70" y1="300" x2="1010" y2="300" stroke="${CREAM}" stroke-width="5" opacity="0.5" stroke-dasharray="18 16"/>
      <rect x="140" y="180" width="240" height="240" rx="10" fill="none" stroke="${CREAM}" stroke-width="16"/>
      <path d="M 540 150 L 686 424 L 394 424 Z" fill="${p.dark}" opacity="0.75" stroke="${CREAM}" stroke-width="14" stroke-linejoin="round"/>
      <circle cx="826" cy="300" r="126" fill="${CREAM}"/>
      <circle cx="826" cy="300" r="48" fill="${p.deep}"/>`,

  // Soft nested arcs and leaves
  gentle: (p) => {
    let arcs = '';
    const cols = [CREAM, p.dark, CREAM, p.deep];
    for (let i = 0; i < 4; i++) {
      const r = 306 - i * 64;
      arcs += `<path d="M ${540 - r} 522 A ${r} ${r} 0 0 1 ${540 + r} 522" fill="none" stroke="${cols[i]}" stroke-width="42" opacity="${i % 2 ? 0.5 : 0.95}"/>`;
    }
    return `${bg(p)}
      ${arcs}
      <path d="M 168 452 C 168 344 252 280 358 280 C 358 388 274 452 168 452 Z" fill="${CREAM}" opacity="0.42"/>
      <path d="M 912 452 C 912 344 828 280 722 280 C 722 388 806 452 912 452 Z" fill="${CREAM}" opacity="0.42"/>
      <circle cx="540" cy="522" r="28" fill="${p.deep}"/>`;
  },

  // Rhythm and strength
  strength: (p) => {
    let bars = '';
    const hs = [140, 226, 306, 372, 306, 226, 140];
    hs.forEach((h, i) => {
      const cream = i === 2 || i === 4;
      bars += `<rect x="${222 + i * 94}" y="${512 - h}" width="56" height="${h}" rx="28" fill="${cream ? CREAM : p.dark}" opacity="${cream ? 0.95 : 0.6}"/>`;
    });
    return `${bg(p)}
      <path d="M 130 512 A 420 420 0 0 1 950 512" fill="none" stroke="${CREAM}" stroke-width="14" opacity="0.45"/>
      ${bars}
      <rect x="70" y="506" width="940" height="14" rx="7" fill="${CREAM}"/>
      <circle cx="168" cy="140" r="26" fill="${CREAM}" opacity="0.85"/>
      <circle cx="924" cy="188" r="16" fill="${CREAM}" opacity="0.7"/>`;
  },

  // A column stacked on a plumb line
  column: (p) => {
    let discs = '';
    for (let i = 0; i < 8; i++) {
      const w = 268 - i * 20, y = 72 + i * 58;
      discs += `<rect x="${540 - w / 2}" y="${y}" width="${w}" height="38" rx="19" fill="${i % 2 ? CREAM : p.dark}" opacity="${i % 2 ? 1 : 0.7}"/>`;
    }
    return `${bg(p)}
      <line x1="540" y1="24" x2="540" y2="576" stroke="${CREAM}" stroke-width="4" opacity="0.55"/>
      <g opacity="0.45" stroke="${CREAM}" stroke-width="6">
        <line x1="190" y1="110" x2="330" y2="110"/><line x1="750" y1="110" x2="890" y2="110"/>
        <line x1="190" y1="490" x2="330" y2="490"/><line x1="750" y1="490" x2="890" y2="490"/>
      </g>
      ${discs}
      <circle cx="540" cy="44" r="28" fill="${p.deep}"/>`;
  },

  // A workbench of different shapes
  lab: (p) => `${bg(p)}
      <circle cx="196" cy="176" r="82" fill="${CREAM}"/>
      <rect x="342" y="94" width="164" height="164" rx="14" fill="${p.dark}" opacity="0.78"/>
      <path d="M 640 94 L 736 258 L 544 258 Z" fill="${CREAM}"/>
      <path d="M 786 258 A 98 98 0 0 1 982 258 Z" fill="${p.deep}" opacity="0.85"/>
      <path d="M 130 490 A 106 106 0 0 1 342 490" fill="none" stroke="${CREAM}" stroke-width="28"/>
      <rect x="404" y="372" width="164" height="118" rx="59" fill="${CREAM}" opacity="0.62"/>
      <g stroke="${CREAM}" stroke-width="22" stroke-linecap="round">
        <line x1="676" y1="376" x2="676" y2="492"/><line x1="618" y1="434" x2="734" y2="434"/>
      </g>
      <circle cx="898" cy="434" r="62" fill="none" stroke="${CREAM}" stroke-width="22"/>`,

  // The breath, expanding
  breath: (p) => {
    let rings = '';
    for (let r = 66; r <= 378; r += 52) {
      rings += `<circle cx="${CX}" cy="${CY}" r="${r}" fill="none" stroke="${CREAM}" stroke-width="${r < 180 ? 15 : 9}" opacity="${0.95 - r / 520}"/>`;
    }
    return `${bg(p)}
      <circle cx="${CX}" cy="${CY}" r="222" fill="${p.dark}" opacity="0.38"/>
      ${rings}
      <circle cx="${CX}" cy="${CY}" r="38" fill="${CREAM}"/>`;
  },

  // Night: a crescent and quiet stars
  night: (p) => {
    let dots = '';
    const pts = [[196, 118, 9], [286, 214, 6], [156, 316, 7], [312, 424, 5], [900, 140, 8], [962, 286, 6], [846, 424, 9], [452, 84, 6], [676, 520, 7], [240, 520, 5]];
    pts.forEach(([x, y, r]) => (dots += `<circle cx="${x}" cy="${y}" r="${r}" fill="${CREAM}" opacity="0.85"/>`));
    return `${bg(p)}
      <circle cx="${CX}" cy="${CY}" r="272" fill="${p.dark}" opacity="0.36"/>
      <path d="M 626 90 A 210 210 0 1 0 626 510 A 256 256 0 1 1 626 90 Z" fill="${CREAM}"/>
      ${dots}`;
  },

  // A personal sequence, step by step
  sequence: (p) => {
    let g = '';
    for (let i = 0; i < 5; i++) {
      const cx = 190 + i * 175, done = i < 3;
      g += `<circle cx="${cx}" cy="${CY}" r="72" fill="none" stroke="${CREAM}" stroke-width="15" opacity="${done ? 1 : 0.42}"/>`;
      g += done
        ? `<circle cx="${cx}" cy="${CY}" r="32" fill="${CREAM}"/>`
        : `<path d="M ${cx - 32} ${CY} A 32 32 0 0 1 ${cx + 32} ${CY}" fill="none" stroke="${CREAM}" stroke-width="15" opacity="0.6"/>`;
      if (i < 4) g += `<line x1="${cx + 84}" y1="${CY}" x2="${cx + 166}" y2="${CY}" stroke="${CREAM}" stroke-width="6" opacity="0.45" stroke-dasharray="12 12"/>`;
    }
    return `${bg(p)}
      <rect x="0" y="120" width="${W}" height="360" fill="${p.dark}" opacity="0.26"/>
      ${g}
      <rect x="70" y="514" width="940" height="10" rx="5" fill="${CREAM}" opacity="0.5"/>`;
  },

  // Inversions, arm balances, diagonals
  advanced: (p) => `${bg(p)}
      <g stroke="${p.dark}" stroke-width="36" opacity="0.5" stroke-linecap="round">
        <line x1="70" y1="560" x2="470" y2="90"/><line x1="256" y1="560" x2="656" y2="90"/>
      </g>
      <path d="M 700 118 L 946 118 L 823 352 Z" fill="none" stroke="${CREAM}" stroke-width="18" stroke-linejoin="round"/>
      <circle cx="823" cy="432" r="62" fill="${CREAM}"/>
      <path d="M 356 470 A 214 214 0 0 1 784 470" fill="none" stroke="${CREAM}" stroke-width="16" opacity="0.72"/>
      <rect x="70" y="506" width="940" height="12" rx="6" fill="${CREAM}"/>
      <circle cx="528" cy="196" r="50" fill="${CREAM}" opacity="0.9"/>`,
};

export { CREAM };
