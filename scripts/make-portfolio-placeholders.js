/**
 * Membuat ilustrasi sementara untuk kartu portofolio.
 * Ganti file di assets/img/portfolio/ dengan foto asli dari Instagram LT Pro.
 * Jalankan: node scripts/make-portfolio-placeholders.js
 */
const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "assets", "img", "portfolio");
const scenes = [
  { file: "resepsi-sewon.svg", bg: ["#2a0f0d", "#0e0e10"], beam: "#d4a72c", tent: true },
  { file: "akad-bantul.svg", bg: ["#1d1a12", "#0e0e10"], beam: "#f6ebc8", tent: false },
  { file: "resepsi-pajangan.svg", bg: ["#141a2a", "#0e0e10"], beam: "#d62a1e", tent: true },
  { file: "ngunduh-mantu-imogiri.svg", bg: ["#22150c", "#0e0e10"], beam: "#d4a72c", tent: true },
  { file: "gedung-kasihan.svg", bg: ["#1a1020", "#0e0e10"], beam: "#f0c75e", tent: false },
  { file: "pengajian-jetis.svg", bg: ["#0f1d17", "#0e0e10"], beam: "#f6ebc8", tent: false },
];

const speaker = (x, y, w, h) => `
  <g transform="translate(${x} ${y})">
    <rect width="${w}" height="${h}" rx="4" fill="#1b1b1f" stroke="#3a3a42"/>
    <circle cx="${w / 2}" cy="${h * 0.32}" r="${w * 0.18}" fill="#0b0b0d" stroke="#4a4a52"/>
    <circle cx="${w / 2}" cy="${h * 0.7}" r="${w * 0.32}" fill="#0b0b0d" stroke="#4a4a52"/>
    <circle cx="${w / 2}" cy="${h * 0.7}" r="${w * 0.12}" fill="#2a2a30"/>
  </g>`;

for (const s of scenes) {
  const beams = [140, 320, 500, 660]
    .map((x, i) => `<polygon points="${x},40 ${x - 90 + i * 20},420 ${x + 70 + i * 10},420" fill="${s.beam}" opacity="0.10"/>`)
    .join("");
  const lamps = [140, 320, 500, 660]
    .map((x) => `<circle cx="${x}" cy="40" r="9" fill="${s.beam}"/><circle cx="${x}" cy="40" r="22" fill="${s.beam}" opacity="0.25"/>`)
    .join("");
  const tent = s.tent
    ? `<path d="M0 70 Q200 20 400 70 Q600 20 800 70 L800 0 L0 0Z" fill="#ffffff" opacity="0.06"/>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.bg[0]}"/><stop offset="1" stop-color="${s.bg[1]}"/></linearGradient></defs>
  <rect width="800" height="600" fill="url(#g)"/>
  ${tent}
  <rect x="0" y="36" width="800" height="8" fill="#2c2c33"/>
  ${beams}${lamps}
  <rect x="220" y="300" width="360" height="110" rx="6" fill="#ffffff" opacity="0.05"/>
  <path d="M330 300 Q400 250 470 300" fill="none" stroke="${s.beam}" stroke-width="3" opacity="0.5"/>
  <rect x="0" y="420" width="800" height="180" fill="#000" opacity="0.35"/>
  ${speaker(60, 250, 90, 170)}${speaker(650, 250, 90, 170)}
  ${speaker(60, 420, 90, 90)}${speaker(650, 420, 90, 90)}
</svg>
`;
  fs.writeFileSync(path.join(out, s.file), svg);
}
console.log(`Dibuat ${scenes.length} ilustrasi di ${out}`);
