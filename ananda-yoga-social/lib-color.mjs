// oklch -> sRGB hex, with simple chroma clamping to stay in gamut.
function oklchToLinearSrgb(L, C, Hdeg) {
  const h = (Hdeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}
const gamma = (u) => (u <= 0.0031308 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - 0.055);

export function oklch(L, C, H) {
  let c = C;
  for (let i = 0; i < 60; i++) {
    const rgb = oklchToLinearSrgb(L, c, H);
    if (rgb.every((v) => v >= -0.0005 && v <= 1.0005)) break;
    c *= 0.96;
  }
  const rgb = oklchToLinearSrgb(L, c, H).map((v) => Math.round(Math.min(1, Math.max(0, gamma(v))) * 255));
  return '#' + rgb.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
}

export const palette = (H) => ({
  accent: oklch(0.665, 0.168, H),
  deep: oklch(0.455, 0.125, H),
  dark: oklch(0.545, 0.155, H),
  soft: oklch(0.935, 0.05, H),
  mid: oklch(0.86, 0.09, H),
  pale: oklch(0.966, 0.028, H),
});
