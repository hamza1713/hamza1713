import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const out = path.join(decodeURIComponent(root), 'assets');
fs.mkdirSync(out, { recursive: true });

const esc = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const rect = (x, y, w, h, fill, stroke = 'none', r = 12, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" ${extra}/>`;

const text = (x, y, s, size = 18, fill = '#f8fafc', extra = '') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" ${extra}>${esc(s)}</text>`;

const svg = (w, h, title, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title">` +
  `<title id="title">${esc(title)}</title>` +
  `<g font-family="Segoe UI, -apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif">${body}</g></svg>\n`;

const save = (name, contents) => fs.writeFileSync(path.join(out, `${name}.svg`), contents, 'utf8');

// 1. Adaptive Dark & Light Hero Banners (960 x 360)
for (const light of [false, true]) {
  const bg = light ? '#f8fafc' : '#070b14';
  const bg2 = light ? '#eef6f5' : '#0b1426';
  const panel = light ? '#ffffff' : '#0d1628';
  const stepBg = light ? '#f1f5f9' : '#111d33';
  const border = light ? '#cbd5e1' : '#1e293b';
  const accentBorder = light ? '#0d9488' : '#2dd4bf';
  const fg = light ? '#0f172a' : '#f8fafc';
  const muted = light ? '#475569' : '#94a3b8';
  const subtle = light ? '#64748b' : '#64748b';
  const accent = light ? '#059669' : '#34d399';
  const accent2 = light ? '#0284c7' : '#38bdf8';
  const pillBg = light ? '#ecfdf5' : '#0b2220';
  const pillFg = light ? '#047857' : '#6ee7b7';
  const gridLine = light ? '#cbd5e1' : '#1e293b';
  const numFg = light ? '#ffffff' : '#051411';

  let b = `<defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="76%" cy="46%" r="48%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="${light ? '0.10' : '0.14'}"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="${gridLine}" stroke-width="0.7" opacity="${light ? '0.45' : '0.42'}"/>
    </pattern>
  </defs>
  <style>
    .mono { font-family: 'Cascadia Code', Consolas, 'SFMono-Regular', Menlo, monospace; }
    .pulse { stroke-dasharray: 14 210; animation: flow 7s linear infinite; }
    @keyframes flow { to { stroke-dashoffset: -224; } }
    @media (prefers-reduced-motion: reduce) { .pulse { animation: none; stroke-dasharray: none; opacity: 0.35; } }
  </style>`;

  b += rect(0.5, 0.5, 959, 359, 'url(#bgGrad)', border, 16);
  b += `<clipPath id="clipHero"><rect x="1" y="1" width="958" height="358" rx="15"/></clipPath>`;
  b += `<g clip-path="url(#clipHero)">`;
  b += rect(0, 0, 960, 360, 'url(#grid)', 'none', 0);
  b += rect(0, 0, 960, 360, 'url(#glow)', 'none', 0);

  // Left: Status pill
  b += rect(38, 30, 392, 28, pillBg, accent, 14, 'stroke-opacity="0.45"');
  b += `<circle cx="55" cy="44" r="4" fill="${accent}"/>`;
  b += text(68, 48, 'FULL-STACK & FORWARD-DEPLOYED AI ENGINEER', 11.5, pillFg, 'class="mono" font-weight="700" letter-spacing="0.8"');

  // Left: Headline matching Portfolio & LinkedIn Banner
  b += text(38, 122, 'AI systems that', 48, fg, 'font-weight="800" letter-spacing="-1.6"');
  b += `<text x="38" y="176" fill="${fg}" font-size="48" font-weight="800" letter-spacing="-1.6">prove their <tspan fill="${accent}">answers.</tspan></text>`;

  // Left: Subtitle
  b += text(38, 214, 'Fail-Closed Agents  ·  Zero-Leak RBAC RAG  ·  Hardened MCP Servers', 15.5, muted, 'font-weight="500"');

  // Left: Proof pills
  b += rect(38, 240, 186, 32, pillBg, accent, 8, 'stroke-opacity="0.55"');
  b += text(131, 260, '✓ 979+ Automated Tests', 12, pillFg, 'class="mono" font-weight="700" text-anchor="middle"');

  b += rect(234, 240, 148, 32, panel, border, 8);
  b += text(308, 260, 'Python · FastAPI', 12, fg, 'class="mono" font-weight="600" text-anchor="middle"');

  b += rect(392, 240, 174, 32, panel, border, 8);
  b += text(479, 260, 'TypeScript · React 19', 12, fg, 'class="mono" font-weight="600" text-anchor="middle"');

  // Left: Footer divider & geo/philosophy strip
  b += `<line x1="38" y1="302" x2="566" y2="302" stroke="${border}" stroke-width="1"/>`;
  b += text(38, 328, 'LAHORE, PAKISTAN (UTC+5 · REMOTE)   //   DETERMINISTIC FIRST · FAIL-CLOSED', 11, subtle, 'class="mono" letter-spacing="0.7"');

  // Right: Deterministic-First Gate Architecture Panel
  b += rect(584, 30, 342, 300, panel, accentBorder, 14, 'stroke-opacity="0.35"');
  b += `<circle cx="606" cy="55" r="4" fill="${accent}"/>`;
  b += text(618, 59, 'DETERMINISTIC-FIRST GATE', 11, accent, 'class="mono" font-weight="700" letter-spacing="0.9"');
  b += text(910, 59, 'FAIL-CLOSED', 10.5, muted, 'class="mono" font-weight="600" text-anchor="end" letter-spacing="0.6"');
  b += `<line x1="602" y1="74" x2="910" y2="74" stroke="${border}" stroke-width="1"/>`;

  // Vertical pipeline rail + animated pulse
  b += `<line x1="624" y1="104" x2="624" y2="292" stroke="${border}" stroke-width="2"/>`;
  b += `<line class="pulse" x1="624" y1="104" x2="624" y2="292" stroke="${accent}" stroke-width="2"/>`;

  const gates = [
    ['01', 'RBAC & AST Gate', '0.33ms · 0 tok'],
    ['02', 'Hybrid RAG + SQL', '0 filter leaks'],
    ['03', 'Agents & MCP', '14 MCP tools'],
    ['04', 'CI Evals & Proof', '979+ tests'],
  ];

  gates.forEach(([num, label, metric], i) => {
    const y = 88 + i * 58;
    b += rect(602, y, 308, 46, stepBg, border, 9);
    b += rect(612, y + 12, 26, 22, accent, 'none', 5);
    b += text(625, y + 27, num, 11, numFg, 'class="mono" font-weight="700" text-anchor="middle"');
    b += text(648, y + 27, label, 12.5, fg, 'font-weight="700"');
    b += text(898, y + 27, metric, 10.8, i === 1 ? accent2 : accent, 'class="mono" font-weight="600" text-anchor="end"');
  });

  // Bottom accent strip
  b += `<rect x="0" y="356" width="960" height="4" fill="${accent}" opacity="${light ? '0.65' : '0.55'}"/>`;
  b += `</g>`;

  save(
    light ? 'hero-light' : 'hero-dark',
    svg(
      960,
      360,
      'Hamza Ali — Full-Stack & Forward-Deployed AI Engineer. AI systems that prove their answers: Fail-Closed Agents, Zero-Leak RBAC RAG, and Hardened MCP Servers.',
      b
    )
  );
}

// 2. Four Flagship Project Cards (960 x 214)
const projects = [
  {
    id: 'code-review',
    num: '01',
    tag: 'PR ASSURANCE & MCP SERVER',
    title: 'AI Code Review Agent v3.0',
    sub: 'Deterministic SAST/AST & 6-language Tree-sitter pre-scans before CrewAI.',
    metrics: '690+ Pytest tests  ·  14/14 synthetic  ·  20/20 Flask PRs (3.72s)',
    accent: '#34d399',
    steps: [
      ['01', 'SAST + Tree-sitter', '0 tokens'],
      ['02', '3-Agent Crew + Reconciler', 'bounded'],
      ['03', 'SARIF 2.1 + 8 MCP Tools', 'SQLite WAL'],
    ],
  },
  {
    id: 'mcp-secure-db',
    num: '02',
    tag: 'HARDENED MCP SQL SECURITY',
    title: 'mcp-secure-db',
    sub: '6-layer defense-in-depth SQL guardrails for AI agents over MCP (Node 24).',
    metrics: '0.334ms AST p50  ·  Postgres 17 + SQLite worker  ·  199 tests',
    accent: '#38bdf8',
    steps: [
      ['01', 'Default-Deny RBAC', 'wire filter'],
      ['02', 'Local SQL AST Gate', '0.334ms'],
      ['03', 'SQLite / PG17 + PII', '5s hard kill'],
    ],
  },
  {
    id: 'finsight',
    num: '03',
    tag: 'ENTERPRISE RAG + TEXT-TO-SQL (FYP)',
    title: 'FinSight',
    sub: '3-layer pre-retrieval RBAC workspace combining hybrid RRF & DuckDB sandbox.',
    metrics: '0.933 RBAC (0 leaks)  ·  <20ms Redis  ·  0.894 RAGAS  ·  90 tests',
    accent: '#2dd4bf',
    steps: [
      ['01', '3-Layer RBAC Gate', '6 roles'],
      ['02', 'Chroma + FTS5 + Cohere', 'hybrid RRF'],
      ['03', 'DuckDB + Redis Stream', '<20ms hit'],
    ],
  },
  {
    id: 'factscope',
    num: '04',
    tag: 'OSINT NEWSROOM & BROADCAST AI',
    title: 'Factscope-AI',
    sub: '4-workspace verification workstation, Script Auditor & Live TV OBS Chyron.',
    metrics: 'IFCN ClaimReview  ·  120+ OSINT registry  ·  1080p OBS  ·  3-tier failover',
    accent: '#a78bfa',
    steps: [
      ['01', 'ClaimReview + SSRF', '120+ sites'],
      ['02', 'Script Auditor', '0-100 score'],
      ['03', '1080p OBS Chyron', 'Electron 36'],
    ],
  },
];

for (const p of projects) {
  let b = `<defs>
    <radialGradient id="g_${p.id}" cx="85%" cy="50%" r="55%">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.13"/>
      <stop offset="100%" stop-color="${p.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <style>.mono { font-family: 'Cascadia Code', Consolas, 'SFMono-Regular', Menlo, monospace; }</style>`;

  b += rect(0.5, 0.5, 959, 213, '#070b14', '#1e293b', 14);
  b += `<clipPath id="c_${p.id}"><rect x="1" y="1" width="958" height="212" rx="13"/></clipPath>`;
  b += `<g clip-path="url(#c_${p.id})">`;
  b += rect(0, 0, 960, 214, `url(#g_${p.id})`, 'none', 0);
  b += rect(0, 0, 6, 214, p.accent, 'none', 0);

  // Left copy column
  b += text(32, 38, `${p.num} / ${p.tag}`, 12, p.accent, 'class="mono" font-weight="700" letter-spacing="1.4"');
  b += text(32, 84, p.title, 33, '#f8fafc', 'font-weight="800" letter-spacing="-0.9"');
  b += text(32, 116, p.sub, 15, '#cbd5e1', 'font-weight="400"');

  // Metric proof bar
  b += rect(32, 134, 548, 28, '#0d1628', '#1e293b', 7);
  b += text(44, 152, p.metrics, 11.2, p.accent, 'class="mono" font-weight="600"');

  // Bottom CTA
  b += text(32, 192, 'INSPECT REPOSITORY & ARCHITECTURE  ↗', 11.5, '#94a3b8', 'class="mono" font-weight="700" letter-spacing="1.1"');

  // Right implemented 3-step pipeline panel
  b += rect(604, 20, 332, 174, '#0c1424', '#1e293b', 12);
  b += `<line x1="630" y1="54" x2="630" y2="160" stroke="${p.accent}" stroke-width="1.5" stroke-opacity="0.45"/>`;

  p.steps.forEach(([sn, stitle, smeta], idx) => {
    const sy = 32 + idx * 52;
    b += rect(618, sy, 304, 42, '#111d33', '#23354f', 8);
    b += rect(627, sy + 10, 24, 22, p.accent, 'none', 5);
    b += text(639, sy + 25, sn, 10.5, '#051411', 'class="mono" font-weight="700" text-anchor="middle"');
    b += text(660, sy + 25, stitle, 12, '#f8fafc', 'font-weight="700"');
    b += text(912, sy + 25, smeta, 10.5, p.accent, 'class="mono" font-weight="600" text-anchor="end"');
  });

  b += `</g>`;
  save(p.id, svg(960, 214, `${p.title} — ${p.sub}`, b));
}

// 3. Four Unified Action Buttons (196 x 42)
const buttons = [
  ['portfolio', 'PORTFOLIO & LAB ↗', '#34d399', '#051411', '#34d399'],
  ['resume', 'READ RESUME ↗', '#0d1628', '#f8fafc', '#334155'],
  ['linkedin', 'LINKEDIN ↗', '#0d1628', '#f8fafc', '#334155'],
  ['contact', 'EMAIL ME ↗', '#0d1628', '#f8fafc', '#334155'],
];

for (const [id, label, bg, fg, stroke] of buttons) {
  const b =
    `<style>.mono { font-family: 'Cascadia Code', Consolas, 'SFMono-Regular', Menlo, monospace; }</style>` +
    rect(1, 1, 194, 40, bg, stroke, 9) +
    text(98, 26, label, 12.5, fg, 'class="mono" text-anchor="middle" font-weight="700" letter-spacing="0.6"');
  save(id, svg(196, 42, label, b));
}

console.log('Generated 10 unified Obsidian+Mint SVG assets in assets/.');
