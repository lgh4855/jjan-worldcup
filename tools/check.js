// 중복 검사: node tools/check.js
// - 같은 id/제목의 월드컵, 한 월드컵 안의 중복 후보, 후보가 절반 넘게 겹치는 월드컵 쌍을 찾아요.
const fs=require('fs'),path=require('path'),vm=require('vm');
const ctx={};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,'..','data.js'),'utf8')+';this.G=GENRES;this.C=CATS',ctx);
const G=ctx.G,C=ctx.C.map(c=>c.id),norm=s=>s.replace(/\s+/g,'').toLowerCase();
let bad=0;const warn=m=>{bad++;console.log('⚠️ ',m)};
const seen={};
for(const g of G){
 for(const k of['id','t']){const v=norm(g[k]);if(seen[k+v])warn(`겹치는 ${k==='id'?'id':'제목'}: "${g[k]}"`);seen[k+v]=1}
 if(!C.includes(g.c))warn(`${g.t}: 카테고리 "${g.c}" 없음`);
 const names=g.items.map(i=>norm(i.n)),dup=names.filter((n,i)=>names.indexOf(n)!==i);
 if(dup.length)warn(`${g.t}: 중복 후보 ${[...new Set(dup)].join(', ')}`);
 if(g.items.length<4)warn(`${g.t}: 후보가 4개 미만`);
}
for(let i=0;i<G.length;i++)for(let j=i+1;j<G.length;j++){
 const a=new Set(G[i].items.map(x=>norm(x.n))),b=G[j].items.map(x=>norm(x.n)),o=b.filter(x=>a.has(x)).length;
 if(o/Math.min(a.size,b.length)>0.5&&Math.min(a.size,b.length)>=Math.max(a.size,b.length)/2)warn(`"${G[i].t}"와 "${G[j].t}" 후보가 ${o}개 겹쳐요 (같은 월드컵일 수 있어요)`);
}
console.log(bad?`\n${bad}건 확인 필요`:`✅ 중복 없음 — 월드컵 ${G.length}개, 후보 ${G.reduce((a,g)=>a+g.items.length,0)}개`);
process.exitCode=bad?1:0;
