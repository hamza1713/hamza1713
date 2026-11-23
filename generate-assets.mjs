import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const out = path.join(decodeURIComponent(root), 'assets');
fs.mkdirSync(out, { recursive: true });

const esc = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const SANS = "Inter, 'Segoe UI Variable Display', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";
const MONO = "'JetBrains Mono', 'Cascadia Code', 'SF Mono', Consolas, Menlo, monospace";

const rect = (x, y, w, h, fill, stroke = 'none', r = 8, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" ${extra}/>`;

const text = (x, y, s, size, fill, extra = '') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" ${extra}>${esc(s)}</text>`;

const mono = (x, y, s, size, fill, extra = '') => text(x, y, s, size, fill, `class="m" ${extra}`);

const line = (x1, y1, x2, y2, stroke, w = 1, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}" ${extra}/>`;

const svg = (w, h, title, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title">` +
  `<title id="title">${esc(title)}</title>` +
  `<style>.m{font-family:${MONO};}</style>` +
  `<g font-family="${SANS}">${body}</g></svg>\n`;

const save = (name, contents) => fs.writeFileSync(path.join(out, `${name}.svg`), contents, 'utf8');

// Shared terminal-style evidence panel (always dark for contrast in both themes)
const T = {
  bg: '#0b0f15',
  bar: '#10161e',
  border: '#232c38',
  fg: '#e6edf3',
  muted: '#7d8896',
  dim: '#3a4553',
  mint: '#3ddc97',
  sky: '#58a6ff',
  violet: '#b392f0',
};

// ─────────────────────────────────────────────────────────────
// 1. Hero banners (960 × 360) — dark + light
// ─────────────────────────────────────────────────────────────
for (const light of [false, true]) {
  const c = light
    ? { bg1: '#ffffff', bg2: '#f4f7f9', border: '#d8dee4', fg: '#0d1117', muted: '#57606a', faint: '#8c959f', dot: '#c9d1d9', accent: '#0a8f5a', accent2: '#0969da', rule: '#e1e6eb' }
    : { bg1: '#0a0d12', bg2: '#0d1117', border: '#1f2630', fg: '#f0f3f6', muted: '#9da7b3', faint: '#6e7781', dot: '#26303b', accent: '#3ddc97', accent2: '#58a6ff', rule: '#1f2630' };

  let b = `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.bg1}"/><stop offset="1" stop-color="${c.bg2}"/></linearGradient>
    <linearGradient id="hl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.accent}" stop-opacity="0"/><stop offset="0.35" stop-color="${c.accent}"/><stop offset="0.7" stop-color="${c.accent2}"/><stop offset="1" stop-color="${c.accent2}" stop-opacity="0"/></linearGradient>
    <linearGradient id="word" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.accent}"/><stop offset="1" stop-color="${c.accent2}"/></linearGradient>
    <radialGradient id="glow" cx="78%" cy="52%" r="42%"><stop offset="0" stop-color="${c.accent}" stop-opacity="${light ? 0.10 : 0.12}"/><stop offset="1" stop-color="${c.accent}" stop-opacity="0"/></radialGradient>
    <radialGradient id="fade" cx="30%" cy="40%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <mask id="dm"><rect width="960" height="360" fill="url(#fade)"/></mask>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="${c.dot}"/></pattern>
    <clipPath id="clip"><rect x="1" y="1" width="958" height="358" rx="13"/></clipPath>
  </defs>
  <style>
    .cur{animation:blink 1.1s steps(1) infinite}
    @keyframes blink{50%{opacity:0}}
    @media (prefers-reduced-motion: reduce){.cur{animation:none}}
  </style>`;

  b += rect(0.5, 0.5, 959, 359, 'url(#bg)', c.border, 14);
  b += `<g clip-path="url(#clip)">`;
  b += `<rect width="960" height="360" fill="url(#dots)" mask="url(#dm)" opacity="${light ? 0.8 : 0.9}"/>`;
  b += `<rect width="960" height="360" fill="url(#glow)"/>`;
  b += `<rect x="0" y="0" width="960" height="1.5" fill="url(#hl)"/>`;

  // Left column
  b += `<circle cx="44" cy="47" r="3.5" fill="${c.accent}"/>`;
  b += `<circle cx="44" cy="47" r="7" fill="none" stroke="${c.accent}" stroke-opacity="0.35"/>`;
  b += mono(58, 51, 'HAMZA ALI  /  AI & LLM SYSTEMS ENGINEER', 11.5, c.muted, 'letter-spacing="1.6" font-weight="500"');

  b += text(40, 122, 'Production AI systems', 43, c.fg, 'font-weight="700" letter-spacing="-1.6"');
  b += `<text x="40" y="172" font-size="43" font-weight="700" letter-spacing="-1.6" fill="${c.fg}">that prove their <tspan fill="url(#word)">answers.</tspan></text>`;

  b += text(40, 210, 'Multi-agent workflows, enterprise RAG & text-to-SQL, and secure MCP', 15.5, c.muted, 'font-weight="400"');
  b += text(40, 232, 'servers — with guardrails in code and tests that prove them.', 15.5, c.muted, 'font-weight="400"');

  // Stat row
  const stats = [
    ['979+', 'AUTOMATED TESTS'],
    ['4', 'FLAGSHIP SYSTEMS'],
    ['0', 'RBAC FILTER LEAKS'],
  ];
  stats.forEach(([n, l], i) => {
    const x = 40 + i * 168;
    if (i > 0) b += line(x - 22, 268, x - 22, 314, c.rule);
    b += text(x, 294, n, 26, c.fg, 'font-weight="600" letter-spacing="-0.8"');
    b += mono(x, 314, l, 10, c.faint, 'letter-spacing="1.3"');
  });

  b += mono(40, 340, 'LAHORE, PK  ·  UTC+5  ·  OPEN TO REMOTE ROLES', 10, c.faint, 'letter-spacing="1.4"');

  // Right: terminal evidence panel
  const px = 572, py = 34, pw = 356, ph = 292;
  b += rect(px + 0.5, py + 6.5, pw, ph, '#000', 'none', 10, `opacity="${light ? 0.08 : 0.35}"`);
  b += rect(px + 0.5, py + 0.5, pw, ph, T.bg, light ? '#1f2630' : T.border, 10);
  b += `<path d="M${px + 0.5} ${py + 34} V${py + 10.5} a10 10 0 0 1 10 -10 H${px + pw - 9.5} a10 10 0 0 1 10 10 V${py + 34} Z" fill="${T.bar}"/>`;
  b += line(px + 1, py + 34.5, px + pw, py + 34.5, T.border);
  [0, 1, 2].forEach((i) => (b += `<circle cx="${px + 20 + i * 15}" cy="${py + 18}" r="4.5" fill="${T.dim}"/>`));
  b += mono(px + pw / 2 + 12, py + 22, 'verified-evidence.log', 11, T.muted, 'text-anchor="middle"');

  const rows = [
    ['ci', T.mint, 'ai-code-review-agent', '690+ ✓'],
    ['ci', T.mint, 'mcp-secure-db', '199 ✓'],
    ['ci', T.mint, 'finsight', '90 ✓'],
    ['bench', T.sky, 'sql-ast-gate p50', '0.334ms'],
    ['eval', T.violet, 'rbac filter leaks', '0 / 6 roles'],
    ['eval', T.violet, 'ragas relevancy', '0.894'],
  ];
  const lx = px + 20, rx = px + pw - 20;
  rows.forEach(([tag, col, label, val], i) => {
    const y = py + 66 + i * 28;
    b += mono(lx, y, tag.padEnd(5, ' '), 11.5, col, 'xml:space="preserve" font-weight="600"');
    const labelX = lx + 52;
    b += mono(labelX, y, label, 11.5, T.fg);
    const labelEnd = labelX + label.length * 6.95 + 8;
    const valStart = rx - val.length * 6.95 - 8;
    if (valStart > labelEnd) b += line(labelEnd, y - 3.5, valStart, y - 3.5, T.dim, 1, 'stroke-dasharray="1.5 4"');
    b += mono(rx, y, val, 11.5, val.includes('✓') ? T.mint : T.fg, 'text-anchor="end" font-weight="600"');
  });
  const sy = py + 66 + rows.length * 28 - 10;
  b += line(lx, sy, rx, sy, T.border);
  b += mono(lx, sy + 26, '❯', 11.5, T.mint, 'font-weight="700"');
  b += mono(lx + 16, sy + 26, 'all public checks green', 11.5, T.muted);
  b += `<rect class="cur" x="${lx + 16 + 23 * 6.95 + 4}" y="${sy + 16}" width="7" height="13" fill="${T.mint}"/>`;

  b += `</g>`;

  save(
    light ? 'hero-light' : 'hero-dark',
    svg(
      960,
      360,
      'Hamza Ali — Full-Stack AI & LLM Systems Engineer. Production AI systems that prove their answers: Multi-Agent Workflows, Enterprise RAG & Text-to-SQL, and Secure MCP Servers.',
      b
    )
  );
}

// ─────────────────────────────────────────────────────────────
// 2. Flagship project cards (960 × 214)
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    id: 'code-review',
    num: '01',
    tag: 'PR ASSURANCE · MCP SERVER',
    title: 'AI Code Review Agent v3.0',
    sub: 'Zero-token static analysis gates a bounded multi-agent PR reviewer.',
    accent: '#3ddc97',
    metrics: [['690+', 'PYTEST TESTS'], ['18 / 0 / 0', 'TP · FP · FN'], ['3.72s', 'MEAN PR LATENCY']],
    steps: [['SAST · AST · Tree-sitter', '0 tokens'], ['3-agent crew + reconciler', 'bounded'], ['SARIF 2.1 · 8 MCP tools', 'output']],
  },
  {
    id: 'mcp-secure-db',
    num: '02',
    tag: 'HARDENED MCP · SQL SECURITY',
    title: 'mcp-secure-db',
    sub: 'Six fail-closed layers between AI agents and your SQL database.',
    accent: '#58a6ff',
    metrics: [['199', 'SECURITY TESTS'], ['0.334ms', 'AST GATE P50'], ['6', 'FAIL-CLOSED LAYERS']],
    steps: [['Default-deny RBAC', 'wire filter'], ['Local SQL AST gate', '0.334ms'], ['Sandbox + PII guard', '5s kill']],
  },
  {
    id: 'finsight',
    num: '03',
    tag: 'ENTERPRISE RAG · TEXT-TO-SQL',
    title: 'FinSight',
    sub: 'Hybrid RAG + text-to-SQL with RBAC enforced before retrieval.',
    accent: '#2dd4bf',
    metrics: [['90', 'TESTS · 20 OWASP'], ['0', 'RBAC FILTER LEAKS'], ['<20ms', 'CACHE HIT']],
    steps: [['3-layer RBAC gate', '6 roles'], ['Hybrid retrieval', 'RRF + rerank'], ['DuckDB sandbox', 'SELECT-only']],
  },
  {
    id: 'factscope',
    num: '04',
    tag: 'OSINT NEWSROOM · BROADCAST AI',
    title: 'Factscope-AI',
    sub: 'Newsroom fact-checking suite with a live TV broadcast engine.',
    accent: '#b392f0',
    metrics: [['4', 'WORKSPACES'], ['3-tier', 'GEMINI FAILOVER'], ['120+', 'DOMAIN REGISTRY']],
    steps: [['ClaimReview + SSRF shield', '120+ sites'], ['Script compliance audit', '0–100'], ['1080p broadcast overlay', 'OBS / vMix']],
  },
];

for (const p of projects) {
  const W = 960, H = 214;
  let b = `<defs>
    <linearGradient id="t_${p.id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${p.accent}" stop-opacity="0"/><stop offset="0.25" stop-color="${p.accent}"/><stop offset="1" stop-color="${p.accent}" stop-opacity="0"/></linearGradient>
    <radialGradient id="g_${p.id}" cx="80%" cy="50%" r="50%"><stop offset="0" stop-color="${p.accent}" stop-opacity="0.08"/><stop offset="1" stop-color="${p.accent}" stop-opacity="0"/></radialGradient>
    <pattern id="d_${p.id}" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="#222b36"/></pattern>
    <clipPath id="c_${p.id}"><rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="11"/></clipPath>
    <marker id="a_${p.id}" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1 L4 6 L7 1" fill="none" stroke="${p.accent}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></marker>
  </defs>`;

  b += rect(0.5, 0.5, W - 1, H - 1, '#0a0d12', '#1f2630', 12);
  b += `<g clip-path="url(#c_${p.id})">`;
  b += `<rect x="580" width="380" height="${H}" fill="url(#d_${p.id})" opacity="0.9"/>`;
  b += `<rect width="${W}" height="${H}" fill="url(#g_${p.id})"/>`;
  b += `<rect width="${W}" height="1.5" fill="url(#t_${p.id})"/>`;

  // Header row
  b += mono(36, 42, `${p.num}`, 11.5, p.accent, 'font-weight="700" letter-spacing="1.2"');
  b += line(60, 38, 76, 38, '#2a3441');
  b += mono(86, 42, p.tag, 11.5, '#8b96a3', 'font-weight="500" letter-spacing="1.6"');
  b += mono(556, 42, 'VIEW REPO ↗', 10.5, '#6e7781', 'text-anchor="end" letter-spacing="1.3"');

  b += text(36, 84, p.title, 30, '#f0f3f6', 'font-weight="700" letter-spacing="-0.9"');
  b += text(36, 112, p.sub, 15, '#9da7b3');

  b += line(36, 134, 556, 134, '#1f2630');

  p.metrics.forEach(([n, l], i) => {
    const x = 36 + i * 178;
    if (i > 0) b += line(x - 18, 150, x - 18, 192, '#1f2630');
    b += text(x, 172, n, 22, '#f0f3f6', 'font-weight="600" letter-spacing="-0.6"');
    b += mono(x, 192, l, 10, '#6e7781', 'letter-spacing="1.3"');
  });

  // Right: schematic pipeline
  const nx = 608, nw = 316, nh = 36;
  b += mono(nx, 36, 'PIPELINE', 10, '#6e7781', 'letter-spacing="1.6"');
  b += line(nx + 66, 32.5, nx + nw, 32.5, '#1f2630');
  p.steps.forEach(([title, meta], i) => {
    const y = 50 + i * 54;
    b += rect(nx + 0.5, y + 0.5, nw, nh, '#0f141b', i === 0 ? p.accent : '#2a3441', 7, i === 0 ? 'stroke-opacity="0.55"' : '');
    b += mono(nx + 16, y + 23, `0${i + 1}`, 10.5, i === 0 ? p.accent : '#6e7781', 'font-weight="600"');
    b += line(nx + 40, y + 10, nx + 40, y + 26, '#2a3441');
    b += text(nx + 52, y + 23, title, 13, '#e6edf3', 'font-weight="600"');
    b += mono(nx + nw - 16, y + 23, meta, 10.5, p.accent, 'text-anchor="end" font-weight="500"');
    if (i < p.steps.length - 1) {
      const ay = y + nh + 1;
      b += line(nx + 28, ay, nx + 28, ay + 14, p.accent, 1.2, 'stroke-opacity="0.5"');
      b += `<path d="M${nx + 24} ${ay + 10} L${nx + 28} ${ay + 15} L${nx + 32} ${ay + 10}" fill="none" stroke="${p.accent}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
  });

  b += `</g>`;
  save(p.id, svg(W, H, `${p.title} — ${p.sub}`, b));
}

// ─────────────────────────────────────────────────────────────
// 3. Action buttons (196 × 42)
// ─────────────────────────────────────────────────────────────
const buttons = [
  ['portfolio', 'Portfolio & Lab', '↗', true],
  ['resume', 'Resume', '↓', false],
  ['linkedin', 'LinkedIn', '↗', false],
  ['contact', 'Email me', '→', false],
];

for (const [id, label, icon, primary] of buttons) {
  const bg = primary ? '#3ddc97' : '#0d1117';
  const fg = primary ? '#04140c' : '#e6edf3';
  const stroke = primary ? '#3ddc97' : '#30363d';
  const b =
    rect(1, 1, 194, 40, bg, stroke, 8) +
    (primary ? '' : `<rect x="1" y="1" width="194" height="1" fill="#ffffff" opacity="0.04"/>`) +
    `<text x="98" y="26.5" fill="${fg}" font-size="14" text-anchor="middle" font-weight="600" letter-spacing="-0.1" xml:space="preserve">${esc(label)}  <tspan fill="${primary ? fg : '#8b949e'}">${icon}</tspan></text>`;
  save(id, svg(196, 42, `${label}`, b));
}

console.log('Generated 10 SVG assets in assets/.');
