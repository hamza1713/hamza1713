import fs from 'node:fs';
import path from 'node:path';
const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const out = path.join(decodeURIComponent(root), 'assets');
fs.mkdirSync(out, { recursive: true });
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const text = (x,y,s,size=20,fill='#eef5f3',extra='') => `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" ${extra}>${esc(s)}</text>`;
const rect = (x,y,w,h,fill,stroke='none',r=12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const svg = (w,h,title,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title><g font-family="Segoe UI,Arial,sans-serif">${body}</g></svg>\n`;
const save = (name,contents) => fs.writeFileSync(path.join(out,name+'.svg'),contents);

for (const light of [false,true]) {
  const bg=light?'#eff5f1':'#101d20', panel=light?'#e0ece5':'#172b2c', fg=light?'#12312b':'#f3f7ef', muted=light?'#42675c':'#aac5ba', accent=light?'#26664f':'#cef47d', line=light?'#b5cbbf':'#355149';
  let b=`<defs><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="${line}" stroke-width=".5"/></pattern></defs>`;
  b+=`<style>.signal{stroke-dasharray:12 180;animation:flow 9s linear infinite}@keyframes flow{to{stroke-dashoffset:-384}}@media(prefers-reduced-motion:reduce){.signal{animation:none}}</style>`;
  b+=rect(0,0,960,390,bg)+rect(590,0,370,390,'url(#grid)');
  b+=text(40,42,'HAMZA ALI  /  AI ENGINEERING',14,muted,'letter-spacing="2"');
  b+=`<circle cx="42" cy="81" r="4" fill="${accent}"/>`+text(55,86,'PAKISTAN · OPEN TO REMOTE COLLABORATION',12,muted,'letter-spacing="1"');
  b+=text(38,167,'Hamza Ali.',68,fg,'font-weight="700" letter-spacing="-3"');
  b+=text(40,221,'From an AI idea',35,fg,'font-weight="600"')+text(40,264,'to a system you can explore.',30,accent,'font-weight="600"');
  b+=text(40,321,'RAG SYSTEMS    /    AI AGENTS    /    EVALUATION',14,muted,'letter-spacing=".8"');
  b+=`<path d="M 40 350 H 554" stroke="${line}"/>`+text(40,374,'BUILD. MEASURE. REFINE.',11,muted,'letter-spacing="2.8"');
  b+=`<circle cx="768" cy="192" r="128" fill="none" stroke="${line}"/><circle cx="768" cy="192" r="97" fill="none" stroke="${line}" stroke-dasharray="3 9"/><path d="M640 192 H896 M768 64 V320" stroke="${line}"/>`;
  b+=`<path class="signal" d="M 642 102 H 768 V 281 H 895" fill="none" stroke="${accent}" stroke-width="2"/>`;
  b+=rect(711,140,114,104,panel,line,22)+text(739,207,'HA',43,fg,'font-weight="700" letter-spacing="-2"');
  for(const [x,y,label] of [[630,73,'RETRIEVE'],[804,117,'REASON'],[786,278,'EVALUATE']]){
    b+=rect(x,y,118,35,bg,line,8)+`<circle cx="${x+14}" cy="${y+18}" r="3" fill="${accent}"/>`+text(x+26,y+23,label,11,fg,'letter-spacing="1"');
  }
  b+=text(714,350,'IDEA → INTERFACE',11,muted,'letter-spacing="1.6"');
  save(light?'hero-light':'hero-dark',svg(960,390,'Hamza Ali — AI engineer. RAG systems, AI agents, and evaluation. From an AI idea to a system you can explore.',b));
}

const projects=[
  ['code-review','01','DEVELOPER TOOLS','AI Code Review Agent','Repository context. Structured review.','#cef47d',['CONTEXT','3 AGENTS','REVIEW']],
  ['finsight','02','DOCUMENT INTELLIGENCE','FinSight','Role-aware retrieval meets structured data.','#86d9e3',['ROLE','RAG + SQL','ANSWER']],
  ['factscope','03','CLAIM ANALYSIS','Factscope AI','Explore claims and supporting sources.','#e2b0fa',['CLAIMS','SEARCH','SOURCES']]
];
for(const [id,num,tag,title,sub,accent,steps] of projects){
  let b=rect(0,0,960,228,'#101d20');
  b+=rect(0,0,6,228,accent,'none',0)+text(30,40,`${num} / ${tag}`,13,accent,'letter-spacing="2"');
  b+=text(30,102,title,39,'#f3f7ef','font-weight="650" letter-spacing="-1"')+text(31,143,sub,20,'#aac5ba');
  b+=text(31,195,'EXPLORE THE REPOSITORY  ↗',12,accent,'letter-spacing="1.5"');
  b+=`<path d="M695 58 V171 H870" fill="none" stroke="#355149" stroke-width="2"/>`;
  for(let i=0;i<3;i++){
    const x=i===2?787:640, y=i===0?37:i===1?97:153;
    b+=rect(x,y,134,38,'#172b2c','#355149',8)+`<circle cx="${x+14}" cy="${y+19}" r="3" fill="${accent}"/>`+text(x+25,y+24,steps[i],12,'#eef5f3','letter-spacing=".4"');
  }
  save(id,svg(960,228,`${title}: ${sub}`,b));
}
for(const [id,label,bg,fg] of [['portfolio','EXPLORE PORTFOLIO ↗','#cef47d','#142c24'],['resume','READ MY CV ↗','#183b33','#f3f7ef'],['contact','LET’S CONNECT ↗','#183b33','#f3f7ef']]){
  save(id,svg(220,48,label,rect(1,1,218,46,bg,'#406352',8)+text(110,30,label,13,fg,'text-anchor="middle" font-weight="700" letter-spacing=".6"')));
}
console.log('Generated eight original SVG assets.');
