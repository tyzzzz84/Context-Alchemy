// Emblems for the course medallions: small, line-based, people-free.
// Each returns inner SVG markup for viewBox "0 0 200 200".
const C = 100;

export const art = {
  // Morning: a sun clearing the horizon
  sunrise: (p) => {
    let rays = '';
    for (let a = -72; a <= 72; a += 24) {
      rays += `<line x1="100" y1="70" x2="100" y2="52" transform="rotate(${a} 100 134)"/>`;
    }
    return `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linecap="round">
      <path d="M 66 134 A 34 34 0 0 1 134 134" fill="${p.mid}" stroke="none"/>
      <path d="M 66 134 A 34 34 0 0 1 134 134"/>
      ${rays}
      <line x1="44" y1="134" x2="156" y2="134"/>
    </g>`;
  },

  // Four-fold lotus, after the Ananda mark
  mandala: (p) => {
    let g = '';
    for (let i = 0; i < 4; i++) {
      g += `<path d="M 100 34 C 136 70 136 88 100 106 C 64 88 64 70 100 34 Z" transform="rotate(${i * 90} 100 100)"/>`;
      g += `<circle cx="100" cy="48" r="8" transform="rotate(${45 + i * 90} 100 100)"/>`;
    }
    return `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linejoin="round">
      ${g}
      <circle cx="100" cy="100" r="11" fill="${p.accent}" stroke="none"/>
    </g>`;
  },
  // Vinyasa: one continuous line
  flow: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linecap="round">
      <path d="M 42 74 C 62 50 82 98 102 74 C 122 50 142 98 158 74"/>
      <path d="M 42 108 C 62 84 82 132 102 108 C 122 84 142 132 158 108"/>
      <path d="M 42 142 C 62 118 82 166 102 142 C 122 118 142 166 158 142"/>
    </g>`,

  // Movement settling into stillness
  ripple: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linecap="round">
      <path d="M 44 62 C 62 40 82 84 104 62 C 124 42 142 72 158 58" stroke="${p.accent}"/>
      <line x1="46" y1="108" x2="154" y2="108"/>
      <line x1="60" y1="132" x2="140" y2="132"/>
      <line x1="78" y1="156" x2="122" y2="156"/>
    </g>`,
  // Alignment: a posture built on an axis
  align: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
      <line x1="30" y1="100" x2="170" y2="100"/>
      <rect x="46" y="46" width="108" height="108" rx="8" fill="${p.pale}"/>
      <circle cx="100" cy="100" r="34"/>
      <circle cx="100" cy="100" r="9" fill="${p.accent}" stroke="none"/>
    </g>`,
  // Soft nested arcs
  gentle: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linecap="round">
      <path d="M 40 138 A 60 60 0 0 1 160 138"/>
      <path d="M 62 138 A 38 38 0 0 1 138 138"/>
      <path d="M 84 138 A 16 16 0 0 1 116 138" stroke="${p.accent}"/>
      <line x1="40" y1="152" x2="160" y2="152"/>
    </g>`,

  // Rhythm and strength
  strength: (p) => {
    const hs = [30, 52, 72, 52, 30];
    let bars = '';
    hs.forEach((h, i) => {
      bars += `<line x1="${52 + i * 24}" y1="142" x2="${52 + i * 24}" y2="${142 - h}" stroke="${i === 2 ? p.accent : p.dark}"/>`;
    });
    return `<g fill="none" stroke="${p.dark}" stroke-width="12" stroke-linecap="round">${bars}</g>
      <line x1="40" y1="156" x2="160" y2="156" stroke="${p.dark}" stroke-width="6" stroke-linecap="round"/>`;
  },

  // A column on a plumb line
  column: (p) => {
    let discs = '';
    for (let i = 0; i < 5; i++) {
      const w = 76 - i * 8;
      discs += `<line x1="${100 - w / 2}" y1="${58 + i * 22}" x2="${100 + w / 2}" y2="${58 + i * 22}" stroke="${i === 2 ? p.accent : p.dark}"/>`;
    }
    return `<line x1="100" y1="40" x2="100" y2="164" stroke="${p.dark}" stroke-width="4" stroke-linecap="round"/>
      <g fill="none" stroke="${p.dark}" stroke-width="12" stroke-linecap="round">${discs}</g>`;
  },

  // A workbench of shapes
  lab: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linejoin="round">
      <circle cx="62" cy="66" r="22"/>
      <rect x="116" y="44" width="44" height="44" rx="5" fill="${p.mid}"/>
      <path d="M 62 110 L 86 152 L 38 152 Z"/>
      <path d="M 116 152 A 22 22 0 0 1 160 152 Z" fill="${p.pale}"/>
    </g>`,
  // The breath, expanding
  breath: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6">
      <circle cx="100" cy="100" r="62"/>
      <circle cx="100" cy="100" r="42"/>
      <circle cx="100" cy="100" r="22"/>
      <circle cx="100" cy="100" r="8" fill="${p.accent}" stroke="none"/>
    </g>`,

  // Night: a crescent and quiet stars
  night: (p) => `<path d="M 122 44 A 56 56 0 1 0 122 156 A 68 68 0 1 1 122 44 Z" fill="${p.mid}" stroke="${p.dark}" stroke-width="6" stroke-linejoin="round"/>
      <g fill="${p.dark}">
        <circle cx="140" cy="66" r="5"/><circle cx="152" cy="104" r="4"/><circle cx="134" cy="136" r="6"/>
      </g>`,

  // A personal sequence, step by step
  sequence: (p) => {
    let g = '';
    for (let i = 0; i < 4; i++) {
      const cx = 46 + i * 36;
      g += `<circle cx="${cx}" cy="100" r="15" fill="${i < 2 ? p.mid : 'none'}"/>`;
      if (i < 3) g += `<line x1="${cx + 21}" y1="100" x2="${cx + 15 + 6}" y2="100"/>`;
    }
    return `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linecap="round">${g}
      <line x1="40" y1="140" x2="160" y2="140" stroke-width="4"/>
    </g>`;
  },

  // Inversions and arm balances
  advanced: (p) => `<g fill="none" stroke="${p.dark}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
      <path d="M 54 50 L 146 50 L 100 130 Z" fill="${p.mid}"/>
      <circle cx="100" cy="146" r="11" fill="${p.accent}" stroke="none"/>
      <line x1="46" y1="168" x2="154" y2="168"/>
    </g>`,
  // The mark itself, for the cover and the academy divider
  emblem: (p) => {
    let g = '';
    for (let i = 0; i < 4; i++) {
      g += `<path d="M 100 30 C 132 68 132 86 100 104 C 68 86 68 68 100 30 Z" transform="rotate(${i * 90} 100 100)"/>`;
      g += `<circle cx="100" cy="46" r="9" transform="rotate(${45 + i * 90} 100 100)"/>`;
    }
    return `<g fill="none" stroke="${p.dark}" stroke-width="5" stroke-linejoin="round">${g}
      <circle cx="${C}" cy="${C}" r="10" fill="${p.accent}" stroke="none"/>
    </g>`;
  },
};
