// 짠! 월드컵 온라인 모드 — window.MODE: 'sync'(방장 화면 공유) | 'vote'(다 같이 투표)
// 공개 MQTT 브로커로 같은 방 코드의 기기끼리 상태를 주고받아요. 방 상태는 방장 기기가 관리해요.
{
const MODE=window.MODE==='vote'?'vote':'sync';
const T=MODE==='vote'
 ?{name:'다 같이 투표',em:'🗳️',desc:'각자 폰으로 몰래 투표하고 동시에 공개! 소수파는 이름이 불려요 🍶'}
 :{name:'방장 화면 공유',em:'📺',desc:'방장이 고르면 모두의 폰이 같은 화면으로 넘어가요. 다 같이 "하나, 둘, 셋!" 하고 가리키기 👉'};
const BROKER='wss://broker.emqx.io:8084/mqtt';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ld=(o,k,d)=>{try{return JSON.parse(o.getItem(k))??d}catch{return d}};
const sv=(o,k,v)=>{try{v==null?o.removeItem(k):o.setItem(k,JSON.stringify(v))}catch{}};
const clone=o=>JSON.parse(JSON.stringify(o));
const CH='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',okCode=c=>/^[A-HJ-NP-Z2-9]{4}$/.test(c);
const rname=n=>n===2?'결승':n===4?'준결승':n+'강';
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const wait=(f,ms)=>new Promise(r=>{const t0=Date.now(),iv=setInterval(()=>{if(f()||Date.now()-t0>ms){clearInterval(iv);r()}},100)});
const same=(a,b)=>a&&b&&a.n===b.n&&a.e===b.e;

let me=ld(sessionStorage,'jj-me',null);if(!me){me={id:Math.random().toString(36).slice(2,10)};sv(sessionStorage,'jj-me',me)}
let myName=ld(localStorage,'jj-name','');
let cl=null,base='',code='',S=null,lastSeq=-1,isHost=false,players={},myVote=null,busy=false,revT=0;

/* ---------- 화면 공통 ---------- */
const show=id=>{for(const s of['lobby','room','play','result'])$('#'+s).classList.toggle('hide',s!==id);window.scrollTo(0,0)};
function modal(html,on){const o=$('#ov');o.innerHTML=`<div class="box" role="dialog" aria-modal="true">${html}</div>`;o.classList.remove('hide');
 o.onclick=e=>{if(e.target===o||e.target.closest('[data-x]'))return close();const b=e.target.closest('button');if(b&&on&&on(b)!==false)close()}}
function close(){$('#ov').classList.add('hide');$('#ov').innerHTML='';$('#ov').onclick=null}
let tt;function toast(t){document.querySelector('.toast')?.remove();const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.append(d);clearTimeout(tt);tt=setTimeout(()=>d.remove(),2400)}
function countdown(){const o=$('#ov');o.classList.remove('hide');o.onclick=null;const w=['하나','둘','셋!'];let i=0;
 const step=()=>{o.innerHTML=`<div class="count" style="font-size:clamp(80px,22vw,200px)">${w[i]}</div>`;if(++i<3)setTimeout(step,650);
  else setTimeout(()=>{o.innerHTML=`<div class="count" style="font-size:clamp(44px,11vw,100px)">동시에 가리켜! 👉</div>`;setTimeout(close,1000)},650)};step()}
const joinUrl=()=>location.origin+location.pathname+'#'+code;
function qrSvg(u){try{const q=qrcode(0,'M');q.addData(u);q.make();return q.createSvgTag({cellSize:5,margin:2,scalable:true})}catch{return''}}
function shareBox(){return `<div class="share"><div class="qr">${qrSvg(joinUrl())}</div><div><p>방 코드</p><div class="code">${esc(code)}</div><button class="btn alt" data-cp>링크 복사</button></div></div>`}
async function copy(t,btn){try{await navigator.clipboard.writeText(t);btn.textContent='복사됨 ✓'}catch{btn.textContent='복사 실패'}}

/* ---------- 네트워크 ---------- */
function connect(c){return new Promise((res,rej)=>{
 code=c;base=`jjanwc1/${MODE}/${c}`;let done=false;
 const t=setTimeout(()=>{if(!done){done=true;try{c2.end(true)}catch{}rej(new Error('timeout'))}},10000);
 const c2=mqtt.connect(BROKER,{clientId:'jj_'+me.id+'_'+Math.random().toString(36).slice(2,6),connectTimeout:8000,reconnectPeriod:2000,clean:true,
  will:{topic:base+'/p/'+me.id,payload:'',retain:true,qos:1}});
 cl=c2;
 c2.on('connect',()=>{net(true);if(myName&&code)presence();
  if(!done)c2.subscribe(base+'/#',{qos:1},err=>{if(done)return;done=true;clearTimeout(t);err?rej(err):res()})});
 c2.on('offline',()=>net(false));c2.on('reconnect',()=>net(false));
 c2.on('message',(tp,m)=>{if(cl===c2&&tp.startsWith(base+'/'))onMsg(tp.slice(base.length+1),m.toString())});
})}
const pub=(sub,d,retain=false)=>{if(cl)cl.publish(base+'/'+sub,d==null?'':JSON.stringify(d),{qos:1,retain})};
const presence=()=>pub('p/'+me.id,{n:myName,t:Date.now()},true);
function net(ok){$('#net').classList.toggle('hide',ok||!cl)}
function leave(){if(cl){const c=cl;pub('p/'+me.id,null,true);cl=null;setTimeout(()=>c.end(),300)}
 S=null;lastSeq=-1;players={};isHost=false;myVote=null;sv(sessionStorage,'jj-room',null);history.replaceState(null,'',location.pathname);net(true)}

function onMsg(sub,raw){
 let d=null;if(raw){try{d=JSON.parse(raw)}catch{return}}
 if(sub.startsWith('p/')){const id=sub.slice(2);
  if(d&&typeof d.n==='string')players[id]={n:d.n.slice(0,10)};else delete players[id];
  renderPlayers();checkAll();return}
 if(sub==='state'){if(!d){if(S&&!isHost){leave();lobby('방장이 방을 닫았어요.')}return}onState(d);return}
 if(sub==='vote'&&d){onVote(d);return}
 if(sub==='evt'&&d&&d.t==='cd')countdown();
}
function onState(d){
 if(!d||d.v!==1||typeof d.seq!=='number'||d.seq<=lastSeq)return;
 const prev=S;S=d;lastSeq=d.seq;isHost=d.host===me.id;draw(prev)}
function setState(s){s.seq=(S?S.seq:0)+1;pub('state',s,true);onState(s)}

/* ---------- 로비 ---------- */
function lobby(msg){
 show('lobby');close();
 const hc=location.hash.slice(1).toUpperCase();
 $('#lobby').innerHTML=`<header class="hero mini"><div><a class="back" href="./">← 짠! 월드컵 홈</a><h1>${T.em} ${T.name}</h1><p>${T.desc}</p></div></header><div class="tent"></div>
 <form class="lob" id="lf" autocomplete="off">
  <label>내 이름<input type="text" id="nm" maxlength="10" placeholder="예: 민수" value="${esc(myName)}"></label>
  <button class="btn go" type="button" id="mk">방 만들기 (내가 방장)</button>
  <div class="or"><span>또는 친구 방에 들어가기</span></div>
  <div class="row"><input type="text" id="cd" maxlength="4" placeholder="방 코드 4자리" value="${okCode(hc)?hc:''}" autocapitalize="characters"><button class="btn" type="submit" id="jn">입장</button></div>
  <p id="lmsg" class="${msg?'err':''}">${esc(msg||'방장 화면의 QR을 찍으면 방 코드가 자동으로 들어가요.')}</p>
 </form>`;
 $('#mk').onclick=()=>enter(null);
 $('#lf').onsubmit=e=>{e.preventDefault();enter($('#cd').value.trim().toUpperCase())};
 $('#cd').oninput=e=>{e.target.value=e.target.value.toUpperCase()};
 if(!msg)($('#nm').value?(okCode(hc)?$('#jn'):$('#mk')):$('#nm')).focus();
}
async function enter(c){
 const n=$('#nm').value.trim().slice(0,10),m=$('#lmsg'),err=t=>{m.className='err';m.textContent=t;lock(false)};
 const lock=v=>{for(const b of document.querySelectorAll('#lf button'))b.disabled=v};
 if(!n){err('이름을 먼저 적어 주세요.');$('#nm').focus();return}
 if(c!==null&&!okCode(c)){err('방 코드 4자리를 확인해 주세요.');return}
 if(typeof mqtt==='undefined'){err('실시간 연결 모듈을 불러오지 못했어요. 새로고침해 주세요.');return}
 myName=n;sv(localStorage,'jj-name',n);lock(true);m.className='';m.textContent='연결 중…';
 const mk=c===null;if(mk)c=Array.from({length:4},()=>CH[Math.random()*CH.length|0]).join('');
 try{await connect(c)}catch{cl=null;err('서버에 연결하지 못했어요. 와이파이나 데이터를 확인하고 다시 눌러 주세요.');return}
 presence();
 if(mk)setState({v:1,host:me.id,phase:'lobby',drinks:{},names:{}});
 else{await wait(()=>S,4000);if(!S){leave();lobby('방을 찾을 수 없어요. 코드를 다시 확인해 주세요.');return}}
 sv(sessionStorage,'jj-room',c);history.replaceState(null,'','#'+c);
}

/* ---------- 상태 그리기 ---------- */
function draw(prev){
 const d=S;
 if(d.phase==='lobby'){room();return}
 const next=()=>{if(S!==d)return;if(d.phase==='done')result();else{play();if(prev&&d.mission&&d.mission.at===d.done&&prev.mission?.at!==d.mission.at)mission(d.mission.m)}};
 if(MODE==='sync'&&prev&&prev.phase==='match'&&d.last&&d.last.at===d.done&&prev.done===d.done-1&&!$('#play').classList.contains('hide')){
  const cs=document.querySelectorAll('#arena .c');
  if(cs.length===2){cs[d.last.k].classList.add('win');cs[1-d.last.k].classList.add('lose')}
  toast(`"${d.last.l.n}" 가리킨 사람 한 잔! 🍶`);busy=true;setTimeout(()=>{busy=false;next()},650);return}
 next()}
function mission(m){modal(`<span class="tag">🃏 랜덤 미션 카드</span><p>${esc(m)}</p><button class="btn go" data-x>완료!</button>`);$('#ov .box').classList.add('mission')}

function plist(){return Object.entries(players).map(([id,p])=>({id,n:p.n,h:S&&S.host===id})).sort((a,b)=>b.h-a.h)}
function chips(withVote){return plist().map(p=>{const v=withVote&&S.votes&&p.id in S.votes;
 return `<span class="chip${v?' ok':''}">${p.h?'👑 ':''}${esc(p.n)}${p.id===me.id?' (나)':''}${v?' ✓':''}</span>`}).join('')||'<span class="chip">아직 아무도 없어요</span>'}
function renderPlayers(){
 if(!S)return;
 if(!$('#room').classList.contains('hide')){$('#chips').innerHTML=chips(false);$('#pc').textContent=plist().length+'명'}
 if(!$('#play').classList.contains('hide'))foot();
}
function drinkBoard(){
 if(MODE!=='vote'||!S)return'';
 const e=Object.entries(S.drinks||{}).sort((a,b)=>b[1]-a[1]).slice(0,10);if(!e.length)return'';
 const mx=e[0][1];
 return `<div class="board"><h3>오늘의 술고래 🐳</h3><div class="rank">${e.map(([id,c],i)=>`<div><b>${i+1}</b><span>${esc(S.names?.[id]||players[id]?.n||'?')}</span><i style="width:${c/mx*100}%"></i><em>${c}잔</em></div>`).join('')}</div></div>`}

function room(){
 show('room');close();
 $('#room').innerHTML=`<header class="hero mini"><div><h1>${T.em} 방 ${esc(code)}</h1><p>${isHost?'친구들한테 QR을 보여주거나 링크를 보내세요. 다 모이면 월드컵을 골라요.':'들어왔어요! 방장이 월드컵을 고르는 중이에요…'}</p></div></header><div class="tent"></div>
 <div class="roomtop">${shareBox()}<div class="people"><h3>참가자 <span id="pc"></span></h3><div class="chips" id="chips"></div>${drinkBoard()}</div></div>
 ${isHost?`<h2 class="pick">어떤 월드컵을 할까요?</h2><div class="grid" id="ggrid">${GENRES.map(g=>`<button class="g" style="--h:${g.h}" data-id="${g.id}"><span class="n">${g.items.length}강</span><span class="em">${g.e}</span><h3>${esc(g.t)}</h3><p>${esc(g.d)}</p></button>`).join('')}<button class="g custom" data-id="custom"><span class="em">✏️</span><h3>나만의 월드컵</h3><p>후보를 직접 적어서</p></button></div>`:'<p class="waiting">⏳ 잠시만 기다려 주세요</p>'}
 <div class="acts" style="padding:8px 16px 40px"><button class="btn alt" id="lv">${isHost?'방 닫기':'방 나가기'}</button></div>`;
 renderPlayers();
 $('#room').onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-cp'))return copy(joinUrl(),b);
  if(b.id==='lv')return quit();
  if(b.classList.contains('g'))b.dataset.id==='custom'?customGame():pickSize(GENRES.find(g=>g.id===b.dataset.id));
 };
}
function pickSize(g){
 const ss=[];for(let s=4;s<=g.items.length;s*=2)ss.push(s);
 modal(`<h2>${esc(g.e)} ${esc(g.t)}</h2><p>몇 강으로 할까요? 시작하면 모두의 화면이 바로 넘어가요.</p>
 <div class="sizes">${ss.slice(-3).map(s=>`<button data-s="${s}">${s}강</button>`).join('')}</div><button class="btn alt" data-x>취소</button>`,b=>{if(b.dataset.s)startGame(g,+b.dataset.s)})}
function customGame(){
 modal(`<h2>✏️ 나만의 월드컵</h2><input type="text" id="cT" maxlength="30" placeholder="제목 (예: 우리 과 최고의 MT 장소)">
 <p>후보를 한 줄에 하나씩, 최소 4개. 맨 앞에 이모지를 붙이면 그림으로 나와요. (온라인 모드는 사진 없이 글자만)</p>
 <textarea id="cL" placeholder="🍜 학교 앞 라면집&#10;🍗 치킨집&#10;🍺 호프집&#10;🍢 포장마차"></textarea><p id="cInfo"></p>
 <div class="acts"><button class="btn go" data-go>다음</button><button class="btn alt" data-x>취소</button></div>`,b=>{
  if(!b.hasAttribute('data-go'))return;
  const items=$('#cL').value.split('\n').map(s=>s.trim()).filter(Boolean).slice(0,64).map(s=>{const m=s.match(/^(\p{Extended_Pictographic}[️‍\p{Extended_Pictographic}]*)\s*(.+)$/u);return m?{e:m[1],n:m[2].slice(0,30)}:{e:'⭐',n:s.slice(0,30)}});
  if(items.length<4){$('#cInfo').textContent='후보가 4개 이상 필요해요.';$('#cInfo').className='err';return false}
  const g={id:'custom',t:$('#cT').value.trim()||'나만의 월드컵',e:'✏️',items};setTimeout(()=>pickSize(g),0)})}
function startGame(g,size){
 const s=clone(S);
 Object.assign(s,{phase:'match',g:{id:g.id,t:g.t,e:g.e},citems:g.id==='custom'?g.items:null,size,round:shuffle(g.items).slice(0,size),next:[],i:0,log:[],done:0,total:size-1,
  votes:{},win:null,tie:false,drunk:[],last:null,mission:null,winner:null,second:null});
 setState(s)}

/* ---------- 경기 ---------- */
function advance(S0,k){
 const s=clone(S0),w=s.round[s.i+k],l=s.round[s.i+1-k];
 s.log.push({r:rname(s.round.length),w,l});s.next.push(w);s.i+=2;s.done++;s.last={k,w,l,at:s.done};
 if(s.i>=s.round.length){if(s.next.length===1){s.phase='done';s.winner=w;s.second=l}else{s.round=s.next;s.next=[];s.i=0}}
 if(s.phase!=='done'&&s.done%5===0&&Math.random()<.75)s.mission={at:s.done,m:MISSIONS[Math.random()*MISSIONS.length|0]};
 return s}
const myVoteNow=()=>myVote&&myVote.at===S.done?myVote.k:(S.votes&&S.votes[me.id]!=null?S.votes[me.id]:null);
function canClick(){
 if(MODE==='sync')return isHost&&S.phase==='match';
 return S.phase==='match'||(S.phase==='reveal'&&S.win==null&&isHost)}
function play(){
 show('play');
 const d=S,rv=d.phase==='reveal',mv=myVoteNow();
 $('#rlabel').textContent=`${d.g.t.replace(' 월드컵','')} · ${rname(d.round.length)}${d.round.length>2?` ${d.i/2+1}/${d.round.length/2}`:''}`;
 $('#pbar').style.width=(d.done/d.total*100)+'%';
 $('#codeBtn').textContent='방 '+code;
 const who=[0,1].map(k=>Object.entries(d.votes||{}).filter(([,v])=>v===k).map(([id])=>d.names?.[id]||players[id]?.n||'?'));
 $('#arena').innerHTML=[d.round[d.i],d.round[d.i+1]].map((it,k)=>{
  const cls=rv&&d.win!=null?(d.win===k?' win':' lose'):(!rv&&mv===k?' mine':'');
  return `<button class="c${cls}" data-k="${k}"><span class="em">${esc(it.e)}</span><span class="nm">${esc(it.n)}</span>
  ${rv?`<span class="vc">${who[k].length}표</span><span class="who">${who[k].map(esc).join(' · ')}</span>`:(!rv&&mv===k?'<span class="vc">내 선택 ✓</span>':'')}</button>`}).join('')+'<div class="vs">VS</div>';
 $('#arena').classList.toggle('ro',!canClick());
 foot()}
function foot(){
 const d=S,f=$('#foot');if(!d||d.phase==='lobby'||d.phase==='done')return;
 if(MODE==='sync'){
  f.innerHTML=isHost?`<button class="btn go" id="cdb">하나, 둘, 셋! 🍻</button><p class="hint">카드를 누르면 모두의 화면이 같이 넘어가요</p>`
   :`<p class="hint big">👑 방장이 고르는 중 · "하나, 둘, 셋!"에 맞춰 동시에 가리키기</p>`;return}
 if(d.phase==='match'){
  const ids=Object.keys(players),n=Object.keys(d.votes||{}).length;
  f.innerHTML=`<div class="chips">${chips(true)}</div><p class="hint">${n}/${ids.length}명 투표 · 다 투표하면 자동 공개${myVoteNow()==null?' · 카드를 눌러 투표하세요':' · 바꾸려면 다른 쪽을 누르세요'}</p>
  ${isHost?`<button class="btn go" id="rvb"${n?'':' disabled'}>지금 공개</button>`:''}`;return}
 if(d.win==null){f.innerHTML=`<p class="hint big">⚖️ 동점! ${isHost?'이길 쪽을 눌러서 방장이 결정해 주세요':'방장이 결정하는 중…'}</p>`;return}
 const names=(d.drunk||[]).map(id=>d.names?.[id]||'?');
 const last=d.round.length===2;
 f.innerHTML=`<p class="drink">${names.length?`🍶 한 잔: ${names.map(esc).join(', ')}`:'만장일치! 다 같이 짠 🍻'}</p>
 ${isHost?`<button class="btn go" id="nx">${last?'우승 발표 🏆':'다음 경기 ▶'}</button>`:'<p class="hint">방장이 다음으로 넘기는 중…</p>'}`}

$('#arena').onclick=e=>{
 const c=e.target.closest('.c');if(!c||busy||!S||!canClick())return;const k=+c.dataset.k;
 if(MODE==='sync'){setState(advance(S,k));return}
 if(S.phase==='match'){myVote={at:S.done,k};pub('vote',{id:me.id,at:S.done,k});play();return}
 if(isHost){const s=clone(S);resolve(s,k);setState(s)}};
$('#foot').onclick=e=>{
 const b=e.target.closest('button');if(!b||!isHost)return;
 if(b.id==='cdb')pub('evt',{t:'cd'});
 if(b.id==='rvb')reveal();
 if(b.id==='nx'){const s=advance(S,S.win);Object.assign(s,{votes:{},win:null,tie:false,drunk:[]});if(s.phase!=='done')s.phase='match';myVote=null;setState(s)}};

function onVote(d){
 if(!isHost||!S||S.phase!=='match'||typeof d.id!=='string'||d.at!==S.done||(d.k!==0&&d.k!==1))return;
 if(S.votes[d.id]===d.k)return;
 const s=clone(S);s.votes[d.id]=d.k;if(players[d.id])s.names[d.id]=players[d.id].n;setState(s);checkAll()}
function checkAll(){
 if(!isHost||!S||MODE!=='vote'||S.phase!=='match')return;
 const ids=Object.keys(players);clearTimeout(revT);
 if(ids.length&&ids.every(id=>id in S.votes))revT=setTimeout(reveal,700)}
function reveal(){
 if(!S||S.phase!=='match')return;const v=Object.values(S.votes);if(!v.length)return;
 const c0=v.filter(x=>x===0).length,c1=v.length-c0,s=clone(S);s.phase='reveal';
 if(c0===c1){s.tie=true;s.win=null}else resolve(s,c0>c1?0:1);setState(s)}
function resolve(s,k){
 s.win=k;s.drunk=Object.keys(s.votes).filter(id=>s.votes[id]!==k);
 for(const id of s.drunk){s.drinks[id]=(s.drinks[id]||0)+1;if(players[id])s.names[id]=players[id].n}}

/* ---------- 결과 ---------- */
function result(){
 show('result');close();
 const d=S,w=d.winner,path=d.log.filter(x=>same(x.w,w));
 $('#result').innerHTML=`<div class="crown"><div class="sub">${esc(d.g.t)} ${d.size}강 우승</div><div class="em">${esc(w.e)}</div><h2>${esc(w.n)}</h2>
 <p style="margin:8px 0 0">준우승 ${esc(d.second.e)} ${esc(d.second.n)} · 다 같이 짠! 🍻</p></div>
 <div class="tent flip"></div>
 <div class="res">
  <div class="acts">${isHost?'<button class="btn go" id="again">같은 걸로 다시</button><button class="btn alt" id="other">다른 월드컵 고르기</button>':'<p class="hint">방장이 다음 판을 준비하는 중…</p>'}<button class="btn alt" id="copyR">결과 복사</button></div>
  ${drinkBoard()}
  <div><h3>우승까지의 길</h3><ol class="path">${path.map(x=>`<li><b>${esc(x.r)}</b><span>${esc(x.l.e)} ${esc(x.l.n)} 꺾음</span></li>`).join('')}</ol></div>
  <div class="acts"><button class="btn alt" id="lv2">${isHost?'방 닫기':'방 나가기'}</button></div>
 </div>`;
 $('#result').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='again'){const g=d.g.id==='custom'?{...d.g,items:d.citems||[]}:GENRES.find(x=>x.id===d.g.id);if(g)startGame(g,d.size)}
  if(b.id==='other'){const s=clone(S);s.phase='lobby';setState(s)}
  if(b.id==='lv2')quit();
  if(b.id==='copyR'){const dr=Object.entries(d.drinks||{}).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id,c])=>`${d.names?.[id]||'?'} ${c}잔`).join(', ');
   copy(`🏆 ${d.g.t} ${d.size}강 우승: ${w.n}\n준우승: ${d.second.n}${dr?`\n🐳 술고래: ${dr}`:''}`,b)}};
}

/* ---------- 나가기 ---------- */
function quit(){
 if(isHost)modal(`<h2>방을 닫을까요?</h2><p>모든 참가자가 방에서 나가게 돼요.</p><div class="acts">${S&&S.phase!=='lobby'?'<button class="btn alt" data-lb>월드컵 다시 고르기</button>':''}<button class="btn" data-cl>방 닫기</button><button class="btn alt" data-x>계속하기</button></div>`,b=>{
  if(b.hasAttribute('data-lb')){const s=clone(S);s.phase='lobby';setState(s)}
  if(b.hasAttribute('data-cl')){pub('state',null,true);leave();setTimeout(()=>lobby(),0)}});
 else modal(`<h2>방에서 나갈까요?</h2><p>같은 방 코드로 언제든 다시 들어올 수 있어요.</p><div class="acts"><button class="btn" data-lv>나가기</button><button class="btn alt" data-x>계속하기</button></div>`,b=>{
  if(b.hasAttribute('data-lv')){leave();setTimeout(()=>lobby(),0)}})}
$('#quit').onclick=quit;
$('#codeBtn').onclick=()=>{modal(`<h2>친구 초대</h2>${shareBox()}<button class="btn alt" data-x>닫기</button>`,b=>{if(b.hasAttribute('data-cp')){copy(joinUrl(),b);return false}})};

/* ---------- 시작 ---------- */
document.title=T.name+' · 짠! 월드컵';
const saved=ld(sessionStorage,'jj-room',null),hc=location.hash.slice(1).toUpperCase();
lobby();
if(saved&&saved===hc&&myName)enter(hc); // 새로고침하면 같은 방으로 자동 재입장
}
