/*
 * Future Fortune Museum – exhibit data.
 *
 * Edit the text here to change what each exhibit says.
 *   official  – the (wrong) future museum label
 *   comments  – visitor theories. type: "visitor" | "curator" | "hidden"
 *               "hidden" comments are the real meaning, suppressed by the
 *               corporation; visitors can click to reveal them.
 *   art       – inline SVG illustration of the object (viewBox 0 0 400 320)
 */

/* ---------- object illustrations ---------- */

function svgWrap(inner, label) {
  return `<svg viewBox="0 0 400 320" role="img" aria-label="${label}">${inner}</svg>`;
}

const ART = {
  hongbao: svgWrap(`
    <defs>
      <linearGradient id="hb-red" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e3333a"/><stop offset="1" stop-color="#9e121a"/>
      </linearGradient>
      <linearGradient id="hb-holo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7ae7ff" stop-opacity=".35"/><stop offset="1" stop-color="#7ae7ff" stop-opacity=".05"/>
      </linearGradient>
    </defs>
    <ellipse cx="160" cy="292" rx="80" ry="8" fill="#000" opacity=".15"/>
    <g transform="rotate(-6 160 170)">
      <rect x="90" y="60" width="140" height="220" rx="6" fill="url(#hb-red)"/>
      <rect x="100" y="70" width="120" height="200" rx="3" fill="none" stroke="#e8c15a" stroke-width="1.5" opacity=".8"/>
      <path d="M90 66 L160 122 L230 66" fill="none" stroke="#7d0d13" stroke-width="2" opacity=".6"/>
      <circle cx="160" cy="180" r="36" fill="none" stroke="#e8c15a" stroke-width="3"/>
      <text x="160" y="195" text-anchor="middle" font-size="42" fill="#f1cc62" font-family="serif">福</text>
      <path d="M110 250 h100" stroke="#e8c15a" stroke-width="1.5" stroke-dasharray="4 5"/>
    </g>
    <g class="holo">
      <rect x="262" y="58" width="96" height="172" rx="14" fill="url(#hb-holo)" stroke="#7ae7ff" stroke-opacity=".8" stroke-width="1.5"/>
      <rect x="282" y="86" width="56" height="70" rx="4" fill="#ff4d58" fill-opacity=".55"/>
      <circle cx="310" cy="120" r="12" fill="none" stroke="#ffe08a" stroke-opacity=".9"/>
      <text x="310" y="178" text-anchor="middle" font-size="13" font-family="IBM Plex Mono, monospace" fill="#bff4ff">¥88.88</text>
      <text x="310" y="196" text-anchor="middle" font-size="8" font-family="IBM Plex Mono, monospace" fill="#bff4ff" opacity=".8">+3.5% GIFT FEE</text>
      <text x="310" y="214" text-anchor="middle" font-size="7" font-family="IBM Plex Mono, monospace" fill="#bff4ff" opacity=".6">RedPacket Pay™</text>
      <path d="M262 240 L240 300 M358 240 L380 300" stroke="#7ae7ff" stroke-opacity=".25"/>
    </g>
    <g transform="translate(40 40) rotate(-10)">
      <rect width="74" height="22" rx="3" fill="#f6f1e6" stroke="#2b2b2b" stroke-width="1"/>
      <text x="37" y="15" text-anchor="middle" font-size="9" font-family="IBM Plex Mono, monospace" fill="#2b2b2b">PAPER · RARE</text>
    </g>`, "A red paper envelope with a gold character, beside a holographic digital version"),

  salmon: svgWrap(`
    <defs>
      <linearGradient id="sa-water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#bfe3ea" stop-opacity=".75"/><stop offset="1" stop-color="#5f9fb0" stop-opacity=".85"/>
      </linearGradient>
      <linearGradient id="sa-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5a6b55"/><stop offset=".45" stop-color="#b9c4c2"/><stop offset=".6" stop-color="#e98b78"/><stop offset="1" stop-color="#f6ddd3"/>
      </linearGradient>
      <clipPath id="sa-clip"><rect x="40" y="58" width="320" height="222" rx="4"/></clipPath>
    </defs>
    <ellipse cx="200" cy="300" rx="170" ry="8" fill="#000" opacity=".15"/>
    <rect x="40" y="58" width="320" height="222" rx="4" fill="url(#sa-water)"/>
    <g clip-path="url(#sa-clip)">
      <path d="M40 92 Q 120 84 200 92 T 360 92 V 58 H 40Z" fill="#fff" opacity=".35"/>
      <g fill="#c8b79a">${Array.from({length: 34}, (_, i) =>
        `<circle cx="${44 + i * 9.6}" cy="${276 - (i % 3) * 3}" r="${5 + (i % 4)}"/>`).join("")}</g>
      <path d="M80 280 C 70 240, 95 220, 82 180" stroke="#4f7d4a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M96 280 C 104 250, 88 230, 100 205" stroke="#638f55" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M318 280 C 330 245, 310 225, 322 190" stroke="#4f7d4a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <g class="fish">
        <path d="M-62 0 C -42 -22, 22 -24, 46 -6 L 66 -20 L 60 0 L 66 20 L 46 6 C 22 24, -42 22, -62 0 Z" fill="url(#sa-body)"/>
        <path d="M-10 -18 L 4 -30 L 12 -16Z" fill="#5a6b55"/>
        <path d="M-6 16 L 4 26 L 10 14Z" fill="#d78672"/>
        <circle cx="-46" cy="-4" r="3.2" fill="#111"/>
        <path d="M-36 -10 C -32 -2, -32 6, -36 12" stroke="#4b5a47" stroke-width="1.5" fill="none"/>
        ${Array.from({length: 7}, (_, i) => `<circle cx="${-18 + i * 8}" cy="${-12 + (i % 2) * 3}" r="1.2" fill="#2f3a2c"/>`).join("")}
      </g>
      <g fill="#fff" opacity=".7">
        <circle class="bubble b1" cx="120" cy="260" r="3"/>
        <circle class="bubble b2" cx="290" cy="265" r="2.5"/>
        <circle class="bubble b3" cx="210" cy="268" r="2"/>
      </g>
    </g>
    <rect x="40" y="58" width="320" height="222" rx="4" fill="none" stroke="#d9e4e6" stroke-width="5"/>
    <path d="M56 70 V 200" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>
    <rect x="36" y="48" width="328" height="12" rx="3" fill="#8e9aa5"/>
    <g transform="translate(140 288)">
      <rect width="120" height="20" rx="3" fill="#20262b"/>
      <text x="60" y="14" text-anchor="middle" font-size="9" font-family="IBM Plex Mono, monospace" fill="#e8eef1">SPECIMEN 1 / 4</text>
    </g>`, "A lone salmon swimming in a glass tank"),

  yuanbao: svgWrap(`
    <defs>
      <linearGradient id="yb-gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff0a8"/><stop offset=".35" stop-color="#f2c544"/><stop offset=".75" stop-color="#c48a17"/><stop offset="1" stop-color="#8a5c0c"/>
      </linearGradient>
      <radialGradient id="yb-dome" cx=".4" cy=".3" r=".8">
        <stop offset="0" stop-color="#fff7cf"/><stop offset=".5" stop-color="#f0c040"/><stop offset="1" stop-color="#b07a12"/>
      </radialGradient>
    </defs>
    <ellipse cx="200" cy="270" rx="140" ry="12" fill="#000" opacity=".18"/>
    <path d="M62 150 Q 58 112 104 112 Q 130 150 200 152 Q 270 150 296 112 Q 342 112 338 150 Q 318 262 200 262 Q 82 262 62 150 Z" fill="url(#yb-gold)"/>
    <path d="M62 150 Q 58 112 104 112 Q 130 150 200 152 Q 270 150 296 112 Q 342 112 338 150" fill="none" stroke="#fff3b8" stroke-width="3" opacity=".8"/>
    <ellipse cx="200" cy="150" rx="60" ry="46" fill="url(#yb-dome)"/>
    <ellipse cx="184" cy="132" rx="18" ry="10" fill="#fff" opacity=".55"/>
    <path d="M90 190 Q 200 236 310 190" stroke="#fff3b8" stroke-width="2" fill="none" opacity=".45"/>
    <text x="200" y="232" text-anchor="middle" font-size="10" font-family="IBM Plex Mono, monospace" fill="#6b4507" opacity=".7" letter-spacing="2">LOGO? · EST. UNKNOWN</text>`, "A gold boat-shaped ingot with upturned ends and a domed centre"),

  jinchan: svgWrap(`
    <defs>
      <radialGradient id="jc-body" cx=".45" cy=".35" r=".75">
        <stop offset="0" stop-color="#f7dc84"/><stop offset=".55" stop-color="#c9952b"/><stop offset="1" stop-color="#7f5714"/>
      </radialGradient>
      <linearGradient id="jc-coin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffe98a"/><stop offset="1" stop-color="#b88618"/>
      </linearGradient>
      <g id="jc-c">
        <ellipse rx="26" ry="9" fill="url(#jc-coin)" stroke="#8a6210" stroke-width="1"/>
        <rect x="-4" y="-2.5" width="8" height="5" fill="#6b4a0c"/>
      </g>
    </defs>
    <ellipse cx="200" cy="286" rx="150" ry="10" fill="#000" opacity=".18"/>
    <g>
      <use href="#jc-c" x="110" y="270"/><use href="#jc-c" x="160" y="276"/><use href="#jc-c" x="215" y="278"/>
      <use href="#jc-c" x="268" y="274"/><use href="#jc-c" x="300" y="266"/><use href="#jc-c" x="135" y="258"/>
      <use href="#jc-c" x="190" y="262"/><use href="#jc-c" x="245" y="260"/><use href="#jc-c" x="220" y="248"/>
      <use href="#jc-c" x="165" y="246"/>
    </g>
    <ellipse cx="200" cy="246" rx="34" ry="14" fill="#a87920"/>
    <ellipse cx="200" cy="198" rx="100" ry="58" fill="url(#jc-body)"/>
    <g fill="#8d6416" opacity=".6">
      <circle cx="140" cy="190" r="7"/><circle cx="168" cy="172" r="6"/><circle cx="232" cy="172" r="6"/>
      <circle cx="262" cy="190" r="7"/><circle cx="150" cy="220" r="5"/><circle cx="250" cy="220" r="5"/>
    </g>
    <ellipse cx="200" cy="150" rx="72" ry="44" fill="url(#jc-body)"/>
    <circle cx="160" cy="116" r="20" fill="#d9a83a"/><circle cx="240" cy="116" r="20" fill="#d9a83a"/>
    <circle cx="160" cy="114" r="10" fill="#b3121a"/><circle cx="240" cy="114" r="10" fill="#b3121a"/>
    <circle cx="157" cy="111" r="3" fill="#fff" opacity=".8"/><circle cx="237" cy="111" r="3" fill="#fff" opacity=".8"/>
    <path d="M140 160 Q 200 186 260 160" stroke="#6b4a0c" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="200" cy="176" r="20" fill="url(#jc-coin)" stroke="#8a6210" stroke-width="1.5"/>
    <rect x="194" y="170" width="12" height="12" fill="#6b4a0c"/>
    <path d="M118 236 Q 104 250 112 258 Q 128 262 138 248" fill="#c9952b" stroke="#7f5714"/>
    <path d="M282 236 Q 296 250 288 258 Q 272 262 262 248" fill="#c9952b" stroke="#7f5714"/>
    <path d="M192 254 Q 200 268 208 254" fill="#c9952b" stroke="#7f5714"/>
    <text x="200" y="306" text-anchor="middle" font-size="9" font-family="IBM Plex Mono, monospace" fill="#5a3f0a" opacity=".7">LEGS: 3 (OF 4?)</text>`, "A three-legged golden toad sitting on coins, holding a coin in its mouth"),

  nimbu: svgWrap(`
    <defs>
      <radialGradient id="nm-lemon" cx=".38" cy=".35" r=".75">
        <stop offset="0" stop-color="#fff8a6"/><stop offset=".6" stop-color="#f2d22c"/><stop offset="1" stop-color="#bf9b10"/>
      </radialGradient>
      <linearGradient id="nm-chili" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#2f7d1d"/><stop offset=".45" stop-color="#5fb83a"/><stop offset="1" stop-color="#256915"/>
      </linearGradient>
      <g id="nm-c">
        <path d="M0 0 C 7 6, 9 30, 3 50 C 1 55, -4 53, -4 48 C -2 30, -7 10, 0 0 Z" fill="url(#nm-chili)"/>
        <path d="M-3 -5 Q 0 -1 3 -5 L 1 2 Z" fill="#1f4d12"/>
      </g>
    </defs>
    <rect x="70" y="10" width="260" height="14" rx="2" fill="#7a4a24"/>
    <path d="M200 24 L200 30" stroke="#888" stroke-width="3"/>
    <circle cx="200" cy="34" r="5" fill="none" stroke="#888" stroke-width="2"/>
    <path d="M200 38 L200 248" stroke="#1d1d1d" stroke-width="1.6"/>
    <g>
      <use href="#nm-c" transform="translate(200 52) rotate(-14)"/>
      <use href="#nm-c" transform="translate(201 76) rotate(16)"/>
      <use href="#nm-c" transform="translate(199 100) rotate(-18)"/>
      <use href="#nm-c" transform="translate(201 124) rotate(14)"/>
      <use href="#nm-c" transform="translate(199 148) rotate(-12)"/>
      <use href="#nm-c" transform="translate(201 172) rotate(18)"/>
      <use href="#nm-c" transform="translate(200 196) rotate(-8)"/>
    </g>
    <ellipse cx="200" cy="268" rx="32" ry="26" fill="url(#nm-lemon)"/>
    <path d="M200 242 l 0 -4" stroke="#7c6a10" stroke-width="3"/>
    <path d="M230 270 q 8 2 8 6" stroke="#bf9b10" stroke-width="3" fill="none"/>
    <ellipse cx="190" cy="258" rx="8" ry="5" fill="#fff" opacity=".55"/>
    <g transform="translate(262 120) rotate(8)">
      <path d="M0 0 h70 v24 h-70 z" fill="#f6f1e6" stroke="#2b2b2b"/>
      <circle cx="-8" cy="12" r="3" fill="none" stroke="#2b2b2b"/>
      <path d="M-5 12 L 0 12" stroke="#2b2b2b"/>
      <text x="35" y="10" text-anchor="middle" font-size="7" font-family="IBM Plex Mono, monospace" fill="#2b2b2b">BEST BEFORE:</text>
      <text x="35" y="19" text-anchor="middle" font-size="7" font-family="IBM Plex Mono, monospace" fill="#2b2b2b">SATURDAY</text>
    </g>`, "A lemon and seven green chillies threaded on a string, hanging from a beam"),

  rangoli: (() => {
    const petals = (n, d, fill, rot = 0) =>
      Array.from({length: n}, (_, i) =>
        `<path d="${d}" transform="rotate(${rot + i * 360 / n})" fill="${fill}"/>`).join("");
    const ring = (n, r, rad, fill) =>
      Array.from({length: n}, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        return `<circle cx="${(Math.cos(a) * rad).toFixed(1)}" cy="${(Math.sin(a) * rad).toFixed(1)}" r="${r}" fill="${fill}"/>`;
      }).join("");
    return svgWrap(`
      <ellipse cx="200" cy="300" rx="150" ry="8" fill="#000" opacity=".12"/>
      <g transform="rotate(-4 200 160)">
        <rect x="58" y="18" width="284" height="284" rx="4" fill="#fbfaf6" stroke="#d9d3c6"/>
        <g transform="translate(200 160)">
          <circle r="124" fill="#5b1734"/>
          ${ring(24, 9, 118, "#f7c948")}
          ${ring(24, 3, 104, "#ffffff")}
          <circle r="96" fill="#1c6f73"/>
          ${petals(8, "M0 -22 C 26 -48, 22 -80, 0 -92 C -22 -80, -26 -48, 0 -22 Z", "#e6457a")}
          ${petals(8, "M0 -22 C 16 -40, 14 -62, 0 -70 C -14 -62, -16 -40, 0 -22 Z", "#f39c32", 22.5)}
          ${petals(8, "M0 -26 C 8 -40, 6 -52, 0 -58 C -6 -52, -8 -40, 0 -26 Z", "#ffe4a3")}
          <circle r="64" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/>
          <circle r="26" fill="#f7c948"/>
          ${petals(12, "M0 -6 L 4 -18 L 0 -24 L -4 -18 Z", "#e6457a")}
          <circle r="7" fill="#5b1734"/>
        </g>
        <path d="M342 250 L342 302 L290 302 Z" fill="#cfc6b4"/>
        <path d="M342 250 L290 302 L300 248 Z" fill="#ffffff" stroke="#d9d3c6"/>
        <text x="306" y="268" font-size="8" font-family="IBM Plex Mono, monospace" fill="#8a8170" transform="rotate(-45 306 268)">PEEL ↗</text>
        <g transform="translate(70 284)" fill="#2b2b2b">
          ${Array.from({length: 22}, (_, i) => `<rect x="${i * 3.2}" y="0" width="${i % 3 ? 1.2 : 2}" height="12"/>`).join("")}
          <text x="78" y="10" font-size="7" font-family="IBM Plex Mono, monospace">FloorBrand™ SKU-RK-0042</text>
        </g>
      </g>`, "A circular, colourful rangoli pattern printed as a peel-and-stick vinyl decal");
  })(),

  mati: svgWrap(`
    <defs>
      <pattern id="mt-pat" width="26" height="26" patternUnits="userSpaceOnUse">
        <rect width="26" height="26" fill="#f2efe8"/>
        <circle cx="13" cy="13" r="8" fill="#1d3f9e"/><circle cx="13" cy="13" r="5.5" fill="#fff"/>
        <circle cx="13" cy="13" r="3.8" fill="#5fb3e8"/><circle cx="13" cy="13" r="1.8" fill="#0b0b14"/>
      </pattern>
      <radialGradient id="mt-glass" cx=".35" cy=".3" r=".7">
        <stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="200" cy="292" rx="150" ry="9" fill="#000" opacity=".15"/>
    <g transform="rotate(-12 135 165)">
      <rect x="80" y="56" width="112" height="220" rx="20" fill="url(#mt-pat)" stroke="#d1ccc0" stroke-width="3"/>
      <rect x="92" y="68" width="40" height="44" rx="10" fill="#1f2226"/>
      <circle cx="104" cy="80" r="7" fill="#3a4148"/><circle cx="120" cy="100" r="7" fill="#3a4148"/>
    </g>
    <circle cx="272" cy="58" r="16" fill="none" stroke="#b7bec5" stroke-width="5"/>
    <g stroke="#b7bec5" stroke-width="3" fill="none">
      <ellipse cx="272" cy="86" rx="4" ry="7"/><ellipse cx="272" cy="99" rx="4" ry="7"/><ellipse cx="272" cy="112" rx="4" ry="7"/>
    </g>
    <circle cx="272" cy="125" r="4" fill="#b7bec5"/>
    <circle cx="272" cy="190" r="62" fill="#1d3f9e"/>
    <circle cx="272" cy="190" r="44" fill="#fbfbfb"/>
    <circle cx="272" cy="190" r="31" fill="#5fb3e8"/>
    <circle cx="272" cy="190" r="16" fill="#0b0b14"/>
    <circle cx="272" cy="190" r="62" fill="url(#mt-glass)"/>
    <g transform="translate(300 252)">
      <circle r="9" fill="#c0262d"/>
      <circle r="9" fill="none" stroke="#fff" stroke-width="1.5" opacity=".6"/>
      <text x="16" y="4" font-size="9" font-family="IBM Plex Mono, monospace" fill="#2b2b2b">REC</text>
    </g>`, "A blue evil-eye charm on a keychain, beside a phone case printed with eyes"),

  vasilopita: svgWrap(`
    <defs>
      <linearGradient id="vp-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d9994a"/><stop offset="1" stop-color="#9c6127"/>
      </linearGradient>
      <radialGradient id="vp-coin" cx=".38" cy=".35" r=".75">
        <stop offset="0" stop-color="#fff1a8"/><stop offset=".55" stop-color="#e3b33a"/><stop offset="1" stop-color="#9a6d10"/>
      </radialGradient>
    </defs>
    <ellipse cx="200" cy="246" rx="150" ry="20" fill="#000" opacity=".14"/>
    <path d="M70 150 L70 206 A130 44 0 0 0 330 206 L330 150 Z" fill="url(#vp-side)"/>
    <ellipse cx="200" cy="150" rx="130" ry="44" fill="#fbf6ec"/>
    <ellipse cx="200" cy="150" rx="130" ry="44" fill="none" stroke="#e7d8bd" stroke-width="2"/>
    <g fill="#c9853a" opacity=".9" font-family="Space Grotesk, sans-serif" font-weight="700">
      <text x="200" y="163" text-anchor="middle" font-size="38" transform="translate(0 82) scale(1 .5)">2026</text>
    </g>
    <g fill="#f3ead8">
      <circle cx="110" cy="140" r="2"/><circle cx="290" cy="146" r="2"/><circle cx="150" cy="176" r="1.6"/>
      <circle cx="255" cy="125" r="1.6"/><circle cx="230" cy="178" r="1.8"/>
    </g>
    <g transform="translate(300 262)">
      <ellipse cx="0" cy="12" rx="30" ry="6" fill="#000" opacity=".2"/>
      <circle r="28" fill="url(#vp-coin)"/>
      <circle r="21" fill="none" stroke="#9a6d10" stroke-width="1.5" opacity=".6"/>
      <text y="7" text-anchor="middle" font-size="18" font-family="serif" fill="#7d570c">€1</text>
    </g>
    <g fill="#c9853a"><circle cx="248" cy="276" r="2.5"/><circle cx="262" cy="288" r="2"/><circle cx="338" cy="292" r="2"/></g>
    <g transform="translate(46 254) rotate(-6)">
      <rect width="118" height="30" rx="3" fill="#ffd400" stroke="#1d1d1d" stroke-width="1.5"/>
      <path d="M14 22 L22 8 L30 22 Z" fill="none" stroke="#1d1d1d" stroke-width="1.6"/>
      <text x="22" y="20" text-anchor="middle" font-size="9" font-weight="700" fill="#1d1d1d">!</text>
      <text x="74" y="19" text-anchor="middle" font-size="9" font-family="IBM Plex Mono, monospace" font-weight="500" fill="#1d1d1d">CHOKING HAZARD</text>
    </g>`, "A round New Year's cake dusted with sugar and the year 2026, with a gold coin beside it"),
};

/* ---------- exhibit records ---------- */

const EXHIBITS = [
  {
    id: "hongbao",
    no: "001",
    name: "Physical Red Payment Envelope (Paper)",
    short: "Red Envelope",
    origin: "East Asian banking sector (presumed)",
    dated: "c. 1900 – 2049",
    status: "Rare. Last paper unit printed 2049. All gifting now via RedPacket Pay™.",
    sponsor: "RedPacket Pay™",
    price: "18,800 LC",
    confidence: "97.4%",
    official:
      "This rectangular paper sleeve is believed to be an early offline payment token. Its red colour matches 21st-century “insufficient funds” warnings, suggesting it was used to deliver bad financial news. The golden symbol on the front has been identified as a loyalty-program logo. Digital editions now carry a modest 3.5% gifting fee.",
    comments: [
      { type: "visitor", user: "kai.w", date: "2126-02-17", likes: 214,
        text: "pretty sure this is a phone case for very flat phones" },
      { type: "visitor", user: "omnimom", date: "2126-02-18", likes: 87,
        text: "My great-great-grandma's archive says they were handed to kids at New Year. That's a lot of money to just… give away???" },
      { type: "hidden", user: "lin.archive", date: "2126-02-18", likes: 3,
        reason: "unverified emotional claims (“blessing”, “family”)",
        text: "They're called hongbao (or lai see). Red means luck and protection, not debt. Elders gave them to children and unmarried relatives at Lunar New Year to pass on blessings for the year ahead. It was never about the amount — it was about the giving." },
    ],
  },
  {
    id: "salmon",
    no: "002",
    name: "Live Specimen: Salmon",
    short: "Salmon",
    origin: "Pacific & Great Lakes watersheds (former supply region)",
    dated: "Present in every century of our archive. Curators cannot explain why.",
    status: "1 of 4 known individuals remaining in Ontario. Do not tap the glass.",
    sponsor: "AquaHeritage Farms™",
    price: "Not for sale (yet)",
    confidence: "99.1%",
    official:
      "A cold-water protein unit once so abundant that it returned to the same rivers, unprompted, every year — a supply chain later judged “unscalable.” Records describe people thanking the fish before eating it; analysts believe this was an early customer-satisfaction survey. The species’ return journey is now licensed as the AquaHeritage Loop™, viewable here on a 12-minute subscription cycle.",
    comments: [
      { type: "visitor", user: "zed_404", date: "2126-04-02", likes: 302,
        text: "is it a robot? it keeps swimming the same way" },
      { type: "visitor", user: "nova.t", date: "2126-04-03", likes: 41,
        text: "my AI tutor said some people called salmon a relative. like… a cousin?? 😭" },
      { type: "hidden", user: "riverkeeper", date: "2126-04-03", likes: 1,
        reason: "references to “rivers”, “relatives” and “responsibility” are under licensing review",
        text: "Salmon aren't a protein unit. For many Indigenous nations the salmon is a relative who gives itself to feed the people, and the people have a responsibility to care for the rivers in return. That's why they were thanked. That's why they kept coming back — until the promise was broken." },
    ],
  },
  {
    id: "yuanbao",
    no: "003",
    name: "Gold Boat-Shaped Ingot",
    short: "Gold Ingot",
    origin: "Ancient bank, China region",
    dated: "c. 1300s – present (as decoration)",
    status: "Common. Thousands recovered from shop counters.",
    sponsor: "Ingot Bank & Trust",
    price: "24,000 LC",
    confidence: "98.6%",
    official:
      "Corporate logo of an ancient bank. The upturned ends are believed to represent a stock chart rising on both sides — an early promise of “up-only” returns. Displayed in shopfronts and homes as a show of brand loyalty. Ancient consumers reportedly ate dumplings folded in the same shape, an aggressive marketing campaign we deeply admire.",
    comments: [
      { type: "visitor", user: "hamster_rights", date: "2126-01-29", likes: 512,
        text: "it's a tiny gold bathtub for a very rich hamster. I will not be taking questions" },
      { type: "curator", user: "Auspice Curatorial", date: "2126-01-29", likes: 0,
        text: "Thank you for your theory. Hamster ownership of precious metals was not legal until 2098." },
      { type: "hidden", user: "dumpling.grandpa", date: "2126-01-30", likes: 2,
        reason: "unlicensed recipe content",
        text: "Yuanbao were real silver and gold money in imperial China. Families display them at Lunar New Year for prosperity, and we fold jiaozi dumplings in the same shape so eating them “brings in” wealth for the coming year. It's a wish, not a logo." },
    ],
  },
  {
    id: "jinchan",
    no: "004",
    name: "Three-Legged Money Toad",
    short: "Money Toad",
    origin: "Early crypto-exchange sector",
    dated: "c. 2000 BCE (disputed) – 2061 (ToadCoin collapse)",
    status: "Mascot retired.",
    sponsor: "ToadCoin Exchange",
    price: "6,600 LC (was 880,000)",
    confidence: "96.0%",
    official:
      "Early cryptocurrency mascot. The toad sits on a pile of coins and clutches one in its mouth, consistent with 21st-century “HODL” behaviour. The missing fourth leg is thought to represent early budget cuts. Owners placed it near the entrance — researchers believe this was to monitor competitors.",
    comments: [
      { type: "visitor", user: "ex_whale", date: "2126-05-11", likes: 640,
        text: "ToadCoin went to zero in 2061 so I'm guessing the toad did not work" },
      { type: "visitor", user: "milo.b", date: "2126-05-12", likes: 77,
        text: "why does it have money in its mouth. is it eating the money. relatable" },
      { type: "hidden", user: "fengshui_fan", date: "2126-05-12", likes: 4,
        reason: "spiritual claims not backed by quarterly results",
        text: "It's Jin Chan, a feng shui charm. In the legend, the immortal Liu Hai tamed a greedy toad, and now it brings wealth into the home instead of taking it. You place it facing into the room, so money comes in — never facing out the door." },
    ],
  },
  {
    id: "nimbu",
    no: "005",
    name: "Citrus-and-Capsicum Doorway String",
    short: "Lemon & Chillies",
    origin: "South Asian logistics sector",
    dated: "c. 1800s – 2070s",
    status: "Organic originals extinct. Polymer replicas by CitrusShield™.",
    sponsor: "CitrusShield™",
    price: "1,200 LC / month",
    confidence: "98.9%",
    official:
      "A food storage method. One lemon and seven green chillies were threaded onto cotton string and hung outside shops, homes and freight trucks to dry. Curiously, they were never eaten and were replaced every Saturday — enormous waste our analysts attribute to poor inventory management. Now available in non-perishable polymer, with a lifetime warranty against bad luck (terms apply).",
    comments: [
      { type: "visitor", user: "truckpilot88", date: "2126-03-08", likes: 188,
        text: "maybe it's an air freshener for trucks? the autotrucks still have a little hook for something" },
      { type: "visitor", user: "ratio.queen", date: "2126-03-09", likes: 62,
        text: "7 chillies to 1 lemon has to be a recipe ratio. ancient spreadsheets" },
      { type: "hidden", user: "nani_says", date: "2126-03-09", likes: 2,
        reason: "contains the unregistered term “nazar”",
        text: "It's nimbu-mirchi! It protects the doorway from nazar, the evil eye, and from Alakshmi, the goddess of misfortune. She loves sour and spicy food, so she eats her fill at the door and leaves the home and shop alone. That's why you replace it fresh every Saturday." },
    ],
  },
  {
    id: "rangoli",
    no: "006",
    name: "Peel-and-Stick Floor Decal (“Rangoli / Kolam” series)",
    short: "Rangoli / Kolam",
    origin: "South Asia, flooring industry",
    dated: "Powder era: thousands of years · Vinyl era: 2058 – present",
    status: "In production. Up to three sponsor logos per decal.",
    sponsor: "FloorBrand™",
    price: "349 LC (3-pack)",
    confidence: "99.6%",
    official:
      "Decorative floor branding. Originally made of powder, which researchers find inefficient. Patterns were drawn fresh at doorways every morning and allowed to be walked on, blown away or eaten by ants — a 0% retention rate. The FloorBrand™ vinyl edition lasts 40 years and is fully wipe-clean.",
    comments: [
      { type: "visitor", user: "ivy.x", date: "2126-06-20", likes: 233,
        text: "why would you make art and then let people step on it. ancient people were wild" },
      { type: "curator", user: "Auspice Curatorial", date: "2126-06-20", likes: 0,
        text: "Agreed. Impermanence has been discontinued for your convenience." },
      { type: "hidden", user: "kolam.every.morning", date: "2126-06-21", likes: 3,
        reason: "promotes non-retained content",
        text: "Rangoli (more common in the north) and kolam (in the south) are drawn fresh at the threshold to welcome guests and the goddess Lakshmi. Kolam was made with rice flour so ants and birds could eat it — feeding small creatures was part of the point. It's meant to disappear and be made again." },
    ],
  },
  {
    id: "mati",
    no: "007",
    name: "Blue Concentric Eye Pendant",
    short: "Mati (Eye)",
    origin: "Mediterranean security industry",
    dated: "Antiquity – present (found on 4.1 billion keychains)",
    status: "Licensed as the official icon of SafeSight Security™ since 2077.",
    sponsor: "SafeSight Security™",
    price: "9 LC (keychain) · 12,000 LC (home bundle)",
    confidence: "99.8%",
    official:
      "Early surveillance symbol. Believed to indicate that a camera was watching. Found in extraordinary quantities on keychains, phone cases, bracelets and fashion prints, suggesting 21st-century citizens were monitored at all times and wished to be reminded of it. Its glass construction suggests a low-resolution lens.",
    comments: [
      { type: "visitor", user: "sentinel.fan", date: "2126-07-01", likes: 401,
        text: "so people wore cameras on their wrists and their phones had cameras on the back. makes sense honestly" },
      { type: "visitor", user: "lens_nerd", date: "2126-07-02", likes: 58,
        text: "if it's a camera why is there no lens. it's just glass. I have questions" },
      { type: "hidden", user: "yiayia.eleni", date: "2126-07-02", likes: 5,
        reason: "“protection” is a registered trademark of SafeSight Security™",
        text: "It's a mati. It doesn't watch you — it protects you, by looking back at the envious stare of others (the evil eye). In Greece we give one to a new baby, or for a new home, so no jealousy can harm them. It's a gift of care, not a camera." },
    ],
  },
  {
    id: "vasilopita",
    no: "008",
    name: "Coin Recovered from Ceremonial Cake",
    short: "Vasilopita Coin",
    origin: "Greek gaming sector",
    dated: "c. 300s CE – present",
    status: "Under review by the Consumer Product Safety Board.",
    sponsor: "Lottolux™",
    price: "Tickets from 9.99 LC",
    confidence: "97.7%",
    official:
      "Choking hazard. Possibly an early lottery system. A single coin was baked into a round cake on the first day of the year; the cake was cut into slices and distributed, and the coin-holder was declared the “winner” for twelve months. No payout records exist, leading auditors to conclude the game was rigged. Lottolux™ now runs the official Vasilopita Draw.",
    comments: [
      { type: "visitor", user: "molar.mike", date: "2126-01-01", likes: 377,
        text: "imagine biting into money. couldn't be me" },
      { type: "visitor", user: "greekish", date: "2126-01-02", likes: 129,
        text: "my notes say the first slices went to the house. maybe the house always wins??" },
      { type: "curator", user: "Auspice Curatorial", date: "2126-01-02", likes: 0,
        text: "Correct. The house always wins." },
      { type: "hidden", user: "st.basils.day", date: "2126-01-02", likes: 2,
        reason: "describes prizes with no monetary value",
        text: "The vasilopita is for New Year's Day, the feast of Saint Basil. The family cuts it together: a slice for Christ, one for the house, then everyone from oldest to youngest. Whoever finds the coin has good luck for the year. Nobody loses — the whole family shares the cake and the wish." },
    ],
  },
];
