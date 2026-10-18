"M7lc1UVf-VE","dQw4w9WgXcQ","9bZkp7q19f0","kJQP7kiw5Fk"];

const ADMIN_EMAILS=["admin@rumahgadang-ai.my.id"];

function isAdmin(e){ if(!e) return false; return ADMIN_EMAILS.includes(e.toLowerCase().trim()); }

function getId(u){ if(!u) return null; u=u.trim(); let m=u.match(/(?:v=|youtu\.be\/|shorts\/)([^?&\/]{11})/); if(m) return m[1]; if(/^[A-Za-z0-9_-]{11}$/.test(u)) return u; return null; }


const KANTOR_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><title>Kantor 10 Ruko Taman + 7 NPC</title>

<script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"}}</script>

<style>

*{margin:0;padding:0;box-sizing:border-box;touch-action:none}body{background:#000;overflow:hidden;height:100vh;font-family:sans-serif}

#top{height:50px;background:rgba(20,10,5,0.95);color:#FFD700;display:flex;align-items:center;justify-content:space-between;padding:0 12px;border-bottom:3px solid #FFD700;position:absolute;top:0;left:0;right:0;z-index:50;font-weight:900;font-size:12px}

#joy{position:absolute;bottom:90px;left:15px;width:120px;height:120px;background:rgba(0,0,0,0.25);border-radius:50%;border:3px solid #fff;z-index:40}

#stick{position:absolute;left:37px;top:37px;width:46px;height:46px;background:#fff;border-radius:50%}

#right{position:absolute;bottom:85px;right:15px;display:flex;flex-direction:column;gap:8px;z-index:40;align-items:center}

.btn{width:66px;height:66px;border-radius:50%;border:3px solid #fff;color:#fff;font-weight:900;font-size:16px}

#jump{background:#00C853}#run{background:#FF9100;width:54px;height:54px}#motor{background:#2196F3;width:72px;height:72px;font-size:24px}#cam{background:#9C27B0;width:54px;height:54px}#mapToggle{background:#FFD700;color:#000;width:68px;height:68px;font-size:10px;font-weight:900}

#inter{position:absolute;top:38%;left:50%;transform:translate(-50%,-50%);background:#fff;color:#000;padding:16px 20px;border-radius:16px;border:4px solid #3E1F0F;display:none;z-index:60;text-align:center;min-width:260px}

#shopPanel,#npcPanel{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#111;border:3px solid #FFD700;border-radius:16px;padding:16px;display:none;z-index:80;width:90%;max-width:360px;color:#fff}

#info{position:absolute;top:60px;left:10px;background:rgba(0,0,0,0.65);color:#fff;padding:6px 10px;border-radius:8px;font-size:10px;z-index:30;line-height:1.4}

#camHint{position:absolute;top:60px;right:10px;background:rgba(156,39,176,0.9);color:#fff;padding:6px 10px;border-radius:8px;font-size:10px;z-index:30;text-align:center}

.bot{position:fixed;bottom:0;left:0;right:0;height:60px;background:#000;border-top:1px solid #333;display:flex;z-index:99}

.bot a{flex:1;text-align:center;padding:8px 0;color:#888;text-decoration:none;font-size:18px}

.bot a.on{color:#fff}.bot a i{font-size:9px;display:block}

#map2d{position:absolute;top:50px;left:0;right:0;bottom:60px;background:#2c3e50;z-index:20;display:none;overflow:auto;padding:10px;flex-direction:column;align-items:center}

.city-container{width:100%;max-width:1000px;background:#7f8c8d;border:6px solid #34495e;display:flex;flex-direction:column;margin-top:8px}

.shop-row{display:flex;justify-content:space-around;background:#bdc3c7;padding:8px;flex-wrap:wrap;gap:6px}

.shop{width:82px;height:130px;background:#e74c3c;border:2px solid #2c3e50;display:flex;flex-direction:column;border-radius:4px;cursor:pointer;position:relative}

.window{width:14px;height:18px;background:#f1c40f;border:1px solid #2c3e50}.door{width:18px;height:28px;background:#34495e;border-radius:2px 2px 0 0}

.shop-label{font-size:7px;font-weight:900;color:#fff;text-align:center;background:rgba(0,0,0,0.7);padding:2px}

.npc-dot{position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:22px;height:22px;border-radius:50%;border:2px solid #fff;font-size:12px;display:grid;place-items:center}

.npc-chat{max-height:150px;overflow-y:auto;background:#000;padding:8px;border-radius:8px;margin-top:8px;font-size:12px}

</style></head><body>

<div id="top"><b>🏪 KANTOR + TOKO 2 LINK</b><span id="speedo" style="background:#5D4037;padding:4px 10px;border-radius:12px;border:2px solid #FFD700">🚶 JALAN 360</span></div>

<div id="info">✅ TOKO 2 = lynk.id/annrisel<br>✅ 7 NPC AKTIF<br>🗺️ Tap PETA</div>

<div id="camHint">📷 Reset</div>

<div id="joy"><div id="stick"></div></div>

<div id="right"><button id="motor" class="btn">🏍️</button><button id="mapToggle" class="btn" onclick="togglePeta()">🗺️<br>PETA</button><button id="cam" class="btn">📷</button><button id="run" class="btn">🏃</button><button id="jump" class="btn">↑</button></div>

<div id="map2d"><h2 style="color:#FFD700;margin:8px;font-size:13px">🗺️ PETA - TOKO 2 LINK LYNK.ID</h2><div class="city-container" id="cityTop"></div><div style="height:32px;background:#333;color:#FFD700;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:11px">🛣️ TOKO 2 = LYNK.ID/ANNRISEL 🛣️</div><div class="city-container" id="cityBottom"></div></div>

<div id="inter"><h2 id="it">Toko</h2><p id="idp">Info</p><div style="margin-top:10px;background:#FFD700;padding:8px;border-radius:8px;font-weight:900;color:#000">LIHAT DETAIL</div></div>

<div id="shopPanel"><div style="display:flex;justify-content:space-between"><b id="shopName" style="color:#FFD700">TOKO 1</b><button onclick="document.getElementById('shopPanel').style.display='none'" style="background:#333;color:#fff;border:0;width:28px;height:28px;border-radius:50%">X</button></div><div style="margin-top:10px;background:#000;padding:10px;border-radius:10px;border:2px dashed #FFD700;text-align:center"><div style="font-size:22px;font-weight:900;color:#FF0000">🔥 TOKO 2 - LYNK.ID 🔥</div><div id="shopLinkInfo" style="font-size:12px;margin-top:6px;color:#FFD700">https://lynk.id/annrisel</div></div><div style="margin-top:10px;font-size:12px;line-height:1.6;background:#222;padding:10px;border-radius:10px"><b>📍 Paket Sewa:</b><br>🔗 <b>URL:</b> Rp 50rb/bulan<br>🖼️ <b>Iklan Banner:</b> Rp 100rb/bulan<br>🏪 <b>Full Ruko:</b> Rp 150rb/bulan<br><br>📍 Lokasi: <span id="shopLoc">-45m</span><br>✅ <span style="color:#00ff00">Tersedia!</span></div><div style="margin-top:12px;display:flex;gap:8px"><button onclick="sewaWA()" style="flex:1;background:#25D366;color:#fff;border:0;padding:12px;border-radius:10px;font-weight:900">💬 WA</button><button id="btnMasukToko" style="flex:1;background:#FFD700;color:#000;border:0;padding:12px;border-radius:10px;font-weight:900">🔗 BUKA LINK</button></div></div>

<div id="npcPanel"><div style="display:flex;justify-content:space-between"><div><b id="npcName" style="color:#00ff88">NPC</b><div id="npcRole" style="font-size:10px;color:#aaa">Role</div></div><button onclick="document.getElementById('npcPanel').style.display='none'" style="background:#333;color:#fff;border:0;width:28px;height:28px;border-radius:50%">X</button></div><div id="npcChat" class="npc-chat"><div style="color:#888">Halo!</div></div><div style="display:flex;gap:6px;margin-top:8px"><input id="npcInput" placeholder="Tanya NPC..." style="flex:1;background:#222;border:1px solid #444;color:#fff;padding:10px;border-radius:10px;font-size:12px"><button onclick="tanyaNPC()" style="background:#00ff88;color:#000;border:0;padding:10px 14px;border-radius:10px;font-weight:900">KIRIM</button></div><div style="margin-top:8px"><button onclick="sewaDariNPC()" style="width:100%;background:#FFD700;color:#000;border:0;padding:8px;border-radius:8px;font-weight:900;font-size:11px">🏪 SEWA RUKO INI</button></div></div>

<div class="bot"><a href="/">🏠<i>Home</i></a><a href="/foto">🖼️<i>Foto</i></a><a href="/video">🎬<i>Video</i></a><a href="/kantor" class="on">🏢<i>Kantor</i></a><a href="/ai">🤖<i>AI</i></a><a href="/akun">👤<i>Akun</i></a></div>

<script type="module">

import * as THREE from 'three';

let scene=new THREE.Scene(); scene.background=new THREE.Color(0x87CEEB); scene.fog=new THREE.Fog(0x87CEEB,50,180);

let camera=new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 500);

let renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setSize(innerWidth,innerHeight); renderer.setPixelRatio(devicePixelRatio); document.body.appendChild(renderer.domElement);

renderer.domElement.style.position='absolute'; renderer.domElement.style.top='0'; renderer.domElement.style.left='0'; renderer.domElement.style.zIndex='1'; renderer.domElement.style.width='100%'; renderer.domElement.style.height='100%';

let light=new THREE.DirectionalLight(0xffffff,1.4); light.position.set(20,40,20); scene.add(light); scene.add(new THREE.AmbientLight(0xffffff,0.9));

let ground=new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshStandardMaterial({color:0x3a5a3a})); ground.rotation.x=-Math.PI/2; ground.position.y=-1; scene.add(ground);

let road=new THREE.Mesh(new THREE.PlaneGeometry(14,300), new THREE.MeshStandardMaterial({color:0x333333})); road.rotation.x=-Math.PI/2; road.position.y=-0.95; scene.add(road);

let parkGroup=new THREE.Group(); parkGroup.position.set(0, -0.9, -40);

let parkArea=new THREE.Mesh(new THREE.BoxGeometry(70, 0.1, 40), new THREE.MeshStandardMaterial({color:0x2ecc71})); parkGroup.add(parkArea);

let path1=new THREE.Mesh(new THREE.BoxGeometry(40, 0.15, 6), new THREE.MeshStandardMaterial({color:0xd7ccc8})); path1.position.set(0, 0.05, 0); parkGroup.add(path1);

let slideBase=new THREE.Mesh(new THREE.BoxGeometry(4, 3, 6), new THREE.MeshStandardMaterial({color:0xe67e22})); slideBase.position.set(-15, 1.5, 0); parkGroup.add(slideBase);

let swingBar=new THREE.Mesh(new THREE.BoxGeometry(6, 4, 1), new THREE.MeshStandardMaterial({color:0x34495e})); swingBar.position.set(15, 2, 0); parkGroup.add(swingBar);

function createTree(x, z){ let tGroup=new THREE.Group(); let trunk=new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 3, 8), new THREE.MeshStandardMaterial({color:0x795548})); trunk.position.y=1.5; tGroup.add(trunk); let leaves=new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshStandardMaterial({color:0x27ae60})); leaves.position.y=4.5; tGroup.add(leaves); tGroup.position.set(x, 0, z); parkGroup.add(tGroup); }

createTree(-25, -12); createTree(25, -12); createTree(-25, 12); createTree(25, 12); scene.add(parkGroup);

function bikinToko(x, z, nama, isSewa=true, link=""){

  let group=new THREE.Group(); group.position.set(x,0,z);

  let baseColor = isSewa? 0xF5CBA7 : 0xAED6F1;

  let toko=new THREE.Mesh(new THREE.BoxGeometry(8,6,6), new THREE.MeshStandardMaterial({color:baseColor})); toko.position.y=2; group.add(toko);

  let balcony = new THREE.Mesh(new THREE.BoxGeometry(8, 0.4, 2), new THREE.MeshStandardMaterial({color:0x5D4037})); balcony.position.set(0, 2.2, 3.1); group.add(balcony);

  let canvas=document.createElement('canvas'); canvas.width=512; canvas.height=128; let ctx=canvas.getContext('2d');

  if(nama==="TOKO 2"){ ctx.fillStyle='#00AAFF'; ctx.fillRect(0,0,512,128); ctx.fillStyle='#FFFFFF'; ctx.font='bold 38px sans-serif'; ctx.fillText('TOKO 2',35,60); ctx.font='bold 18px sans-serif'; ctx.fillText('lynk.id/annrisel - TAP BOS',20,90); }

  else if(isSewa){ ctx.fillStyle='#FF0000'; ctx.fillRect(0,0,512,128); ctx.fillStyle='#FFFFFF'; ctx.font='bold 48px sans-serif'; ctx.fillText('DISEWAKAN',35,70); ctx.font='bold 18px sans-serif'; ctx.fillText('URL & IKLAN',40,105); }

  else { ctx.fillStyle='#00AA00'; ctx.fillRect(0,0,512,128); ctx.fillStyle='#fff'; ctx.font='bold 36px sans-serif'; ctx.fillText(nama,40,75); }

  let tex=new THREE.CanvasTexture(canvas); let board=new THREE.Mesh(new THREE.PlaneGeometry(7,1.8), new THREE.MeshStandardMaterial({map:tex})); board.position.set(0,5.2,3.12); group.add(board);

  scene.add(group); return {group, x, z, nama, isSewa, link};

}

let tokos=[];

tokos.push(bikinToko(-50, 10, "TOKO 1", true, ""));

tokos.push(bikinToko(-30, 10, "TOKO 2", true, "https://lynk.id/annrisel"));

tokos.push(bikinToko(-10, 10, "TOKO 3", true, ""));

tokos.push(bikinToko(10, 10, "TOKO 4", true, ""));

tokos.push(bikinToko(30, 10, "TOKO 5", true, ""));

tokos.push(bikinToko(-50, -14, "TOKO 6", true, ""));

tokos.push(bikinToko(-30, -14, "TOKO 7", true, ""));

tokos.push(bikinToko(-10, -14, "TOKO 8", true, ""));

tokos.push(bikinToko(10, -14, "TOKO 9", true, ""));

tokos.push(bikinToko(30, -14, "TOKO 10", true, ""));

const NPC_DATA=[

  {id:1, nama:"Pak Sales", role:"Sales Ruko 99rb", emoji:"🧔", color:0xFF5722, x:-50, z:14, prompt:"Kamu Pak Sales, jualan ruko 99rb Bos, logat Padang Bos. Jawab pendek 1 kalimat Bos!"},

  {id:2, nama:"Uni Excel", role:"Ahli Excel AI", emoji:"👩‍💼", color:0xE91E63, x:-30, z:14, prompt:"Kamu Uni Excel Bos, ahli Excel AI Bos. Jawab pendek 1 kalimat Bos!"},

  {id:3, nama:"Uda Video", role:"Editor Video", emoji:"🎬", color:0x2196F3, x:-10, z:14, prompt:"Kamu Uda Video Bos, jago edit video Bos. Jawab pendek 1 kalimat Bos!"},

  {id:4, nama:"Naura", role:"Admin Sosmed", emoji:"📱", color:0x9C27B0, x:10, z:14, prompt:"Kamu Naura Bos, admin TikTok IG Bos. Jawab pendek 1 kalimat Bos!"},

  {id:5, nama:"Uda Chatbot", role:"Ahli Chatbot", emoji:"🤖", color:0x4CAF50, x:30, z:14, prompt:"Kamu Uda Chatbot Bos, ahli Groq 120B Bos. Jawab pendek 1 kalimat Bos!"},

  {id:6, nama:"Pak Kasir", role:"Kasir Keuangan", emoji:"💰", color:0xFFC107, x:30, z:-18, prompt:"Kamu Pak Kasir Bos, jagain keuangan Bos. Jawab pendek 1 kalimat Bos!"},

  {id:7, nama:"Staf ahli", role:"Staf ahli Rumah Gadang AI", emoji:"👑", color:0xFFD700, x:0, z:-38, prompt:"Kamu Staf ahli Rumah Gadang AI Bos. Jawab pendek 1 kalimat Bos!"},

];

let npcs=[];

function bikinNPC(d){

  let g=new THREE.Group(); g.position.set(d.x,0,d.z);

  let body=new THREE.Mesh(new THREE.BoxGeometry(0.6,0.9,0.4), new THREE.MeshStandardMaterial({color:d.color})); body.position.y=1; g.add(body);

  let head=new THREE.Mesh(new THREE.BoxGeometry(0.45,0.45,0.45), new THREE.MeshStandardMaterial({color:0xFFCC80})); head.position.y=1.7; g.add(head);

  let canvas=document.createElement('canvas'); canvas.width=256; canvas.height=64; let ctx=canvas.getContext('2d'); ctx.fillStyle='#000'; ctx.fillRect(0,0,256,64); ctx.fillStyle='#FFD700'; ctx.font='bold 20px sans-serif'; ctx.fillText(d.emoji+' '+d.nama,10,40);

  let tex=new THREE.CanvasTexture(canvas); let label=new THREE.Mesh(new THREE.PlaneGeometry(2.5,0.6), new THREE.MeshStandardMaterial({map:tex, transparent:true})); label.position.set(0,2.4,0); g.add(label);

  scene.add(g); return {...d, group:g, label:label};

}

NPC_DATA.forEach(d=> npcs.push(bikinNPC(d)));

let names2D = ["TOKO 1","TOKO 2","TOKO 3","TOKO 4","TOKO 5","TOKO 6","TOKO 7","TOKO 8","TOKO 9","TOKO 10"];

function make2DShop(name, idx){

  let d=document.createElement('div'); d.className='shop';

  let npc = NPC_DATA[idx]; let dot = npc? '<div class="npc-dot" style="background:#'+npc.color.toString(16).padStart(6,'0')+'">'+npc.emoji+'</div>' : '';

  let isToko2 = name==="TOKO 2";

  d.style.background = isToko2? '#00AAFF' : '#e74c3c';

  d.innerHTML=dot+'<div style="height:50px;border-bottom:2px solid #2c3e50;display:flex;justify-content:center;align-items:center;gap:4px"><div class="window"></div><div class="window"></div></div><div style="height:60px;display:flex;justify-content:center;align-items:center"><div class="door"></div></div><div class="shop-label" style="'+(isToko2?'background:#00AAFF;':'')+'">'+name+(isToko2?' 🔗':'')+'</div>';

  d.onclick=()=>{

    if(name==="TOKO 2"){ window.open('https://lynk.id/annrisel','_blank'); return; }

    if(npc){ openNPC(npc); } else { selectedToko={nama:name, link:""}; document.getElementById('shopName').textContent=name; document.getElementById('shopPanel').style.display='block'; }

  };

  return d;

}

let topRow=document.createElement('div'); topRow.className='shop-row'; let botRow=document.createElement('div'); botRow.className='shop-row';

names2D.forEach((n,i)=>{ if(i<5) topRow.appendChild(make2DShop(n,i)); else botRow.appendChild(make2DShop(n,i)); });

document.getElementById('cityTop').appendChild(topRow); document.getElementById('cityBottom').appendChild(botRow);

window.togglePeta=()=>{ let m=document.getElementById('map2d'); let isOn=m.style.display==='flex'; m.style.display=isOn?'none':'flex'; renderer.domElement.style.display=isOn?'block':'none'; document.getElementById('mapToggle').innerHTML=isOn?'🗺️<br>PETA':'🎮<br>360°'; };

let motorGroup=new THREE.Group();

let motorBody=new THREE.Mesh(new THREE.BoxGeometry(0.6,0.4,1.2), new THREE.MeshStandardMaterial({color:0xFF0000})); motorBody.position.y=0.5; motorGroup.add(motorBody);

let roda1=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.1,12), new THREE.MeshStandardMaterial({color:0x111})); roda1.rotation.z=Math.PI/2; roda1.position.set(0,0.15,0.6); motorGroup.add(roda1);

let roda2=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.1,12), new THREE.MeshStandardMaterial({color:0x111})); roda2.rotation.z=Math.PI/2; roda2.position.set(0,0.15,-0.6); motorGroup.add(roda2);

motorGroup.position.set(0,0,15); scene.add(motorGroup);

let player=new THREE.Group();

let pb=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.6,0.3), new THREE.MeshStandardMaterial({color:0x2196F3})); pb.position.y=0.9; player.add(pb);

let ph=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.4), new THREE.MeshStandardMaterial({color:0xFFCC80})); ph.position.y=1.45; player.add(ph);

player.position.set(0,0,18); scene.add(player);

let camYaw=0, camPitch=20, camDist=14, camDragging=false, lastCX=0, lastCY=0;

let keys={x:0,y:0}; let speed=0.18; let onMotor=false; let nearToko=null; let nearNPC=null; let selectedToko=null; let activeNPC=null;

let base=document.getElementById('joy'); let stick=document.getElementById('stick'); let dragging=false, br;

function getBR(){ br=base.getBoundingClientRect(); } getBR();

function move(cx,cy){ let bx=br.left+br.width/2; let by=br.top+br.height/2; let dx=cx-bx; let dy=cy-by; let max=42; let dist=Math.hypot(dx,dy); if(dist>max){ dx=dx/dist*max; dy=dy/dist*max; } stick.style.transform='translate('+dx+'px,'+dy+'px)'; keys.x=dx/max; keys.y=dy/max; }

base.addEventListener('touchstart',e=>{dragging=true; getBR(); move(e.touches[0].clientX,e.touches[0].clientY)},{passive:false});

window.addEventListener('touchmove',e=>{if(!dragging)return; move(e.touches[0].clientX,e.touches[0].clientY)},{passive:false});

window.addEventListener('touchend',()=>{dragging=false; stick.style.transform='translate(0,0)'; keys.x=0; keys.y=0});

base.addEventListener('mousedown',e=>{dragging=true; getBR(); move(e.clientX,e.clientY)});

window.addEventListener('mousemove',e=>{if(!dragging||e.touches)return; move(e.clientX,e.clientY)});

window.addEventListener('mouseup',()=>{dragging=false; stick.style.transform='translate(0,0)'; keys.x=0; keys.y=0});

renderer.domElement.addEventListener('touchstart',e=>{ let x=e.touches[0].clientX; if(x>innerWidth*0.35 &&!dragging){ camDragging=true; lastCX=x; lastCY=e.touches[0].clientY; } },{passive:false});

renderer.domElement.addEventListener('touchmove',e=>{ if(!camDragging)return; let x=e.touches[0].clientX, y=e.touches[0].clientY, dx=x-lastCX, dy=y-lastCY; camYaw-=dx*0.5; camPitch+=dy*0.4; if(camPitch<5)camPitch=5; if(camPitch>80)camPitch=80; lastCX=x; lastCY=y; },{passive:false});

renderer.domElement.addEventListener('touchend',()=>{camDragging=false;});

renderer.domElement.addEventListener('mousedown',e=>{ if(e.clientX>innerWidth*0.35){ camDragging=true; lastCX=e.clientX; lastCY=e.clientY; } });

window.addEventListener('mousemove',e=>{ if(!camDragging)return; let dx=e.clientX-lastCX, dy=e.clientY-lastCY; camYaw-=dx*0.5; camPitch+=dy*0.4; if(camPitch<5)camPitch=5; if(camPitch>80)camPitch=80; lastCX=e.clientX; lastCY=e.clientY; });

window.addEventListener('mouseup',()=>{camDragging=false;});

window.addEventListener('wheel',e=>{ camDist+=e.deltaY*0.01; if(camDist<5)camDist=5; if(camDist>30)camDist=30; });

document.getElementById('cam').addEventListener('click',()=>{ camYaw=0; camPitch=20; camDist=14; });

function toggleMotor(){ if(!onMotor){ let d=Math.hypot(player.position.x-motorGroup.position.x, player.position.z-motorGroup.position.z); if(d<3){ onMotor=true; speed=0.65; document.getElementById('speedo').innerHTML='🏍️ MOTOR'; player.visible=false; } else alert('Dekati motor dulu Bos!'); } else { onMotor=false; speed=0.18; document.getElementById('speedo').innerHTML='🚶 JALAN'; player.visible=true; player.position.copy(motorGroup.position); player.position.x+=1; } }

document.getElementById('motor').addEventListener('click',toggleMotor);

document.getElementById('jump').addEventListener('click',()=>{ if(onMotor){ speed=1.2; setTimeout(()=>speed=0.65,600); } else { player.position.y=1; setTimeout(()=>player.position.y=0,300); } });

document.getElementById('run').addEventListener('touchstart',()=>{ if(!onMotor) speed=0.35; }); document.getElementById('run').addEventListener('touchend',()=>{ if(!onMotor) speed=0.18; });

function sewaWA(){

  if(selectedToko?.link){ window.open(selectedToko.link,'_blank'); return; }

  let nama=(selectedToko?.nama || activeNPC?.nama || 'Ruko');

  let msg=encodeURIComponent('Halo Admin Bos! Mau sewa '+nama+' Bos!');

  window.open('https://wa.me/6282230439966?text='+msg,'_blank');

}

window.sewaWA=sewaWA; window.sewaDariNPC=sewaWA;

function openNPC(n){ activeNPC=n; selectedToko={nama:n.nama, link:""}; document.getElementById('npcName').textContent=n.emoji+' '+n.nama; document.getElementById('npcRole').textContent=n.role; document.getElementById('npcChat').innerHTML='<div style="color:#00ff88">'+n.emoji+' '+n.nama+': Halo Bos! Gua '+n.role+' Bos!</div>'; document.getElementById('npcPanel').style.display='block'; }

async function tanyaNPC(){ let inp=document.getElementById('npcInput'); let q=inp.value.trim(); if(!q||!activeNPC) return; let chat=document.getElementById('npcChat'); chat.innerHTML+='<div style="text-align:right;color:#FFD700;margin-top:6px">Bos: '+q+'</div>'; chat.innerHTML+='<div id="tmpNPC" style="color:#aaa">⏳ '+activeNPC.nama+' mikir Bos...</div>'; chat.scrollTop=chat.scrollHeight; inp.value=''; try{ let r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt: activeNPC.prompt + ' Player: '+q})}); let j=await r.json(); document.getElementById('tmpNPC')?.remove(); chat.innerHTML+='<div style="color:#fff;margin-top:6px"><b>'+activeNPC.nama+':</b> '+j.reply+'</div>'; chat.scrollTop=chat.scrollHeight; }catch(e){ document.getElementById('tmpNPC')?.remove(); chat.innerHTML+='<div style="color:red">Error Bos</div>'; } }

window.tanyaNPC=tanyaNPC; document.getElementById('npcInput').addEventListener('keydown',e=>{ if(e.key==='Enter') tanyaNPC(); });

function animate(){

  requestAnimationFrame(animate);

  let curPos, rad=camYaw*0.017453, fw=keys.y, st=-keys.x;

  if(onMotor){ motorGroup.position.x+=(Math.sin(rad)*fw + Math.cos(rad)*st)*speed; motorGroup.position.z+=(Math.cos(rad)*fw - Math.sin(rad)*st)*speed; curPos=motorGroup.position; if(motorGroup.position.x<-140) motorGroup.position.x=-140; if(motorGroup.position.x>140) motorGroup.position.x=140; if(motorGroup.position.z<-140) motorGroup.position.z=-140; if(motorGroup.position.z>140) motorGroup.position.z=140; if(keys.x!==0||keys.y!==0) motorGroup.rotation.y=rad + Math.atan2(st,fw); }

  else { player.position.x+=(Math.sin(rad)*fw + Math.cos(rad)*st)*speed; player.position.z+=(Math.cos(rad)*fw - Math.sin(rad)*st)*speed; curPos=player.position; if(player.position.x<-140) player.position.x=-140; if(player.position.x>140) player.position.x=140; if(player.position.z<-140) player.position.z=-140; if(player.position.z>140) player.position.z=140; if(keys.x!==0||keys.y!==0) player.rotation.y=rad + Math.atan2(st,fw); }

  let yr=camYaw*0.017453, pr=camPitch*0.017453; let camX=curPos.x + camDist*Math.sin(yr)*Math.cos(pr); let camY=curPos.y + camDist*Math.sin(pr)+2; let camZ=curPos.z + camDist*Math.cos(yr)*Math.cos(pr); camera.position.lerp(new THREE.Vector3(camX,camY,camZ),0.12); camera.lookAt(curPos.x,curPos.y+1,curPos.z); npcs.forEach(n=>{ if(n.label) n.label.lookAt(camera.position); }); nearToko=null; nearNPC=null; let minD=100; let minN=100; tokos.forEach(t=>{ let d=Math.hypot(curPos.x-t.x, curPos.z-t.z); if(d<minD && d<9){ minD=d; nearToko=t; } }); npcs.forEach(n=>{ let d=Math.hypot(curPos.x-n.x, curPos.z-n.z); if(d<minN && d<6){ minN=d; nearNPC=n; } }); let inter=document.getElementById('inter'); if(document.getElementById('map2d').style.display==='flex'){ inter.style.display='none'; } else if(nearNPC){ inter.style.display='block'; document.getElementById('it').textContent=nearNPC.emoji+' '+nearNPC.nama; document.getElementById('idp').textContent=nearNPC.role+' - klik ngobrol!'; } else if(nearToko){ inter.style.display='block'; if(nearToko.nama==="TOKO 2"){ document.getElementById('it').textContent='🔗 TOKO 2 - LYNK.ID'; document.getElementById('idp').textContent='Tap buka lynk.id/annrisel Bos!'; } else { document.getElementById('it').textContent='🔥 '+nearToko.nama; document.getElementById('idp').textContent='Tap untuk sewa Bos!'; } } else { let dm=Math.hypot(curPos.x-motorGroup.position.x, curPos.z-motorGroup.position.z); if(dm<3 &&!onMotor){ inter.style.display='block'; document.getElementById('it').textContent='🏍️ MOTOR'; document.getElementById('idp').textContent='klik MOTOR Bos!'; } else inter.style.display='none'; } renderer.render(scene,camera);

} animate();

document.getElementById('inter').addEventListener('click',()=>{

  if(nearNPC){ openNPC(nearNPC); }

  else if(nearToko){

    selectedToko=nearToko;

    if(nearToko.link){ window.open(nearToko.link,'_blank'); return; }

    document.getElementById('shopName').textContent=nearToko.nama;

    document.getElementById('shopLoc').textContent=Math.round(nearToko.x)+'m';

    document.getElementById('shopPanel').style.display='block';

    document.getElementById('btnMasukToko').onclick=()=>{ if(selectedToko.link) window.open(selectedToko.link,'_blank'); else sewaWA(); };

    document.getElementById('shopLinkInfo').textContent = nearToko.link || 'WA 0822-3043-9966';

  }

  else { let dm=Math.hypot(player.position.x-motorGroup.position.x, player.position.z-motorGroup.position.z); if(dm<3) toggleMotor(); }

});

window.addEventListener('resize',()=>{ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); });

<\/script></body></html>`;


export default{

async fetch(req,env){

const url=new URL(req.url);

if(url.protocol==="http:"){ url.protocol="https:"; return Response.redirect(url.toString(),301); }

if(url.pathname==="/home"||url.pathname==="/home/"){ return Response.redirect("https://www.rumahgadang-ai.my.id/",301); }

if(url.pathname==="/index.html"){ return Response.redirect("https://www.rumahgadang-ai.my.id/",301); }

const cors={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS","Access-Control-Allow-Headers":"Content-Type","X-Robots-Tag":"noindex, nofollow"};

if(req.method==="OPTIONS") return new Response("",{headers:cors});

if(url.pathname==="/robots.txt"){ return new Response("User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://www.rumahgadang-ai.my.id/sitemap.xml\n",{headers:{"Content-Type":"text/plain; charset=utf-8"}}); }

if(url.pathname==="/sitemap.xml"){ let last=new Date().toISOString().split('T')[0]; let pages=["/","/foto","/video","/ai","/akun","/kantor"]; let xml=pages.map(p=>` <url><loc>https://www.rumahgadang-ai.my.id${p}</loc><lastmod>${last}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`).join("\n"); let body=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`; return new Response(body,{headers:{"Content-Type":"text/xml; charset=utf-8","Cache-Control":"no-cache, no-store, must-revalidate"}}); }

try{

if(env.DB){

await env.DB.prepare("CREATE TABLE IF NOT EXISTS local_videos (id TEXT PRIMARY KEY, created_at INTEGER)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS blocked_videos (id TEXT PRIMARY KEY)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS tulis (id INTEGER PRIMARY KEY, text TEXT, user_email TEXT, name TEXT, picture TEXT, tulisImg TEXT, likes INTEGER DEFAULT 0, time INTEGER)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT, likes INTEGER DEFAULT 0, time INTEGER)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS rg_users (email TEXT PRIMARY KEY, pass TEXT, name TEXT, picture TEXT, time INTEGER)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS tulis_likes (tulis_id INTEGER, user_email TEXT, PRIMARY KEY(tulis_id, user_email))").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, item_id TEXT, text TEXT, user_email TEXT, name TEXT, picture TEXT, time INTEGER)").run();

await env.DB.prepare("CREATE TABLE IF NOT EXISTS ig_curated (id INTEGER PRIMARY KEY AUTOINCREMENT, akun TEXT, img TEXT, linkIG TEXT, caption TEXT, video TEXT, time INTEGER)").run();

try{ await env.DB.prepare("ALTER TABLE ig_curated ADD COLUMN video TEXT").run(); }catch(e){}

}

}catch(e){}

if(url.pathname==="/api/ig-preview"){ let igUrl=url.searchParams.get("url")||""; try{ let resp=await fetch(igUrl,{headers:{"User-Agent":"Mozilla/5.0 (iPhone) AppleWebKit"}}); let html=await resp.text(); let thumb=html.match(/property="og:image"\s+content="([^"]+)"/)?.[1]||""; let username=html.match(/"username":"([^"]+)"/)?.[1]||igUrl.split("/")[3]||"minang"; thumb=thumb.replace(/&amp;/g,"&"); return new Response(JSON.stringify({thumbnail:thumb,username,caption:"Dari @"+username}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({error:"gagal"}),{headers:cors,status:500}); } }

if(url.pathname==="/api/ig-curated"){ try{ let r=await env.DB.prepare("SELECT * FROM ig_curated ORDER BY time DESC LIMIT 100").all(); return new Response(JSON.stringify(r.results||[]),{headers:cors}); }catch(e){ return new Response(JSON.stringify([]),{headers:cors}); } }

if(url.pathname==="/api/ig-curated/add" && req.method==="POST"){ try{ let j=await req.json(); await env.DB.prepare("INSERT INTO ig_curated (akun,img,linkIG,caption,video,time) VALUES (?,?,?,?,?,?)").bind(j.akun||"minang",j.img,j.linkIG,j.caption||"",j.video||"",Date.now()).run(); return new Response(JSON.stringify({ok:true}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/videos"){ let local=[]; let blocked=[]; try{ if(env.DB){ let r=await env.DB.prepare("SELECT id FROM local_videos ORDER BY created_at DESC").all(); local=r.results?.map(x=>x.id)||[]; let b=await env.DB.prepare("SELECT id FROM blocked_videos").all(); blocked=b.results?.map(x=>x.id)||[]; } }catch(e){} let all=[...new Set([...local,...GLOBAL_VIDEOS])]; all=all.filter(id=>!blocked.includes(id)); return new Response(JSON.stringify(all),{headers:cors}); }

if(url.pathname==="/api/videos/add" && req.method==="POST"){ try{ let b=await req.json(); let id=getId(b.ytUrl); if(!id) return new Response(JSON.stringify({ok:false,msg:"Link salah Bos"}),{headers:cors}); if(env.DB) await env.DB.prepare("INSERT OR IGNORE INTO local_videos (id,created_at) VALUES (?,?)").bind(id,Date.now()).run(); return new Response(JSON.stringify({ok:true,id:id}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/tulis"){ try{let r=await env.DB.prepare("SELECT * FROM tulis ORDER BY time DESC LIMIT 50").all(); return new Response(JSON.stringify(r.results||[]),{headers:cors});}catch(e){return new Response(JSON.stringify([]),{headers:cors});} }

if(url.pathname==="/api/tulis/add"&&req.method==="POST"){ try{let j=await req.json(); await env.DB.prepare("INSERT INTO tulis (id,text,user_email,name,picture,tulisImg,likes,time) VALUES (?,?,?,?,?,?,?,?)").bind(Date.now(),j.text,j.email,j.name||"Anonim",j.picture||"",j.tulisImg||"",0,Date.now()).run();}catch(e){} return new Response(JSON.stringify({ok:true}),{headers:cors}); }

if(url.pathname==="/api/images"){ try{let r=await env.DB.prepare("SELECT * FROM images ORDER BY time DESC LIMIT 50").all(); return new Response(JSON.stringify(r.results||[]),{headers:cors});}catch(e){return new Response(JSON.stringify([]),{headers:cors});} }

if(url.pathname==="/api/images/add"&&req.method==="POST"){ try{let j=await req.json(); await env.DB.prepare("INSERT INTO images (url,likes,time) VALUES (?,?,?)").bind(j.url,0,Date.now()).run();}catch(e){} return new Response(JSON.stringify({ok:true}),{headers:cors}); }

if(url.pathname==="/api/ai"&&req.method==="POST"){ try{let j=await req.json(); let r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+GROQ},body:JSON.stringify({model:"openai/gpt-oss-120b",messages:[{role:"system",content:"Kamu Rumah Gadang AI Bos, buatan Tim Rumah Gadang AI Padang Bos, bukan OpenAI Bos! WAJIB jawab PENDEK Bos, maksimal 2 kalimat Bos, pakai kata Bos! Jangan panjang Bos!"},{role:"user",content:j.prompt}],max_tokens:120,temperature:0.7})}); let d=await r.json(); return new Response(JSON.stringify({reply:d.choices[0].message.content}),{headers:cors});}catch(e){return new Response(JSON.stringify({reply:"Error Bos"}),{headers:cors});} }

if(url.pathname==="/api/delete" && req.method==="POST"){ try{ let {type,id,email}=await req.json(); if(!isAdmin(email)) return new Response(JSON.stringify({ok:false,msg:"Cuma admin Bos"}),{headers:cors}); if(type==="tulis") await env.DB.prepare("DELETE FROM tulis WHERE id=?").bind(id).run(); if(type==="foto") await env.DB.prepare("DELETE FROM images WHERE id=?").bind(id).run(); if(type==="ig") await env.DB.prepare("DELETE FROM ig_curated WHERE id=?").bind(id).run(); if(type==="video"){ await env.DB.prepare("DELETE FROM local_videos WHERE id=?").bind(id).run(); await env.DB.prepare("INSERT OR IGNORE INTO blocked_videos (id) VALUES (?)").bind(id).run(); } return new Response(JSON.stringify({ok:true}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/profile/update" && req.method==="POST"){ try{ let {email,name,picture}=await req.json(); email=email.toLowerCase().trim(); if(env.DB){ let cek=await env.DB.prepare("SELECT * FROM rg_users WHERE email=?").bind(email).first(); if(cek){ await env.DB.prepare("UPDATE rg_users SET name=?, picture=? WHERE email=?").bind(name,picture,email).run(); } else { await env.DB.prepare("INSERT OR IGNORE INTO rg_users (email,name,picture,time) VALUES (?,?,?,?)").bind(email,name,picture,Date.now()).run(); } await env.DB.prepare("UPDATE tulis SET name=?, picture=? WHERE user_email=?").bind(name,picture,email).run(); } return new Response(JSON.stringify({ok:true}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/auth/register" && req.method==="POST"){ try{ let {user,pass,name}=await req.json(); let email=user.includes("@")?user:user+"@rumahgadang-ai.my.id"; email=email.toLowerCase().trim(); let cek=await env.DB.prepare("SELECT * FROM rg_users WHERE email=?").bind(email).first(); if(cek) return new Response(JSON.stringify({ok:false,msg:"Sudah ada Bos"}),{headers:cors}); let hash=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pass)).then(b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")); await env.DB.prepare("INSERT INTO rg_users (email,pass,name,time) VALUES (?,?,?,?)").bind(email,hash,name||user,Date.now()).run(); return new Response(JSON.stringify({ok:true,email:email,name:name||user,picture:LOGO}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/auth/login" && req.method==="POST"){ try{ let {user,pass}=await req.json(); let email=user.includes("@")?user:user+"@rumahgadang-ai.my.id"; email=email.toLowerCase().trim(); let hash=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pass)).then(b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")); let u=await env.DB.prepare("SELECT * FROM rg_users WHERE email=? AND pass=?").bind(email,hash).first(); if(!u) return new Response(JSON.stringify({ok:false,msg:"Salah Bos"}),{headers:cors}); return new Response(JSON.stringify({ok:true,email:u.email,name:u.name,picture:u.picture||LOGO}),{headers:cors}); }catch(e){ return new Response(JSON.stringify({ok:false}),{headers:cors}); } }

if(url.pathname==="/api/like" && req.method==="POST"){ try{ let {type,item_id,email}=await req.json(); if(type==="tulis"){ let cek=await env.DB.prepare("SELECT * FROM tulis_likes WHERE tulis_id=? AND user_email=?").bind(item_id,email).first(); if(cek){ await env.DB.prepare("DELETE FROM tulis_likes WHERE tulis_id=? AND user_email=?").bind(item_id,email).run(); await env.DB.prepare("UPDATE tulis SET likes=likes-1 WHERE id=?").bind(item_id).run(); return new Response(JSON.stringify({ok:true,liked:false}),{headers:cors}); } else { await env.DB.prepare("INSERT INTO tulis_likes (tulis_id,user_email) VALUES (?,?)").bind(item_id,email).run(); await env.DB.prepare("UPDATE tulis SET likes=likes+1 WHERE id=?").bind(item_id).run(); return new Response(JSON.stringify({ok:true,liked:true}),{headers:cors}); } } }catch(e){} return new Response(JSON.stringify({ok:false}),{headers:cors}); }

if(url.pathname==="/api/comments"){ try{ let type=url.searchParams.get("type"); let item_id=url.searchParams.get("id"); let r=await env.DB.prepare("SELECT * FROM comments WHERE type=? AND item_id=? ORDER BY time DESC LIMIT 50").bind(type,item_id).all(); return new Response(JSON.stringify(r.results||[]),{headers:cors}); }catch(e){return new Response(JSON.stringify([]),{headers:cors});} }

if(url.pathname==="/api/comments/add"&&req.method==="POST"){ try{let j=await req.json(); await env.DB.prepare("INSERT INTO comments (type,item_id,text,user_email,name,picture,time) VALUES (?,?,?,?,?,?,?)").bind(j.type,j.item_id,j.text,j.email,j.name,j.picture,Date.now()).run(); return new Response(JSON.stringify({ok:true}),{headers:cors}); }catch(e){return new Response(JSON.stringify({ok:false}),{headers:cors});} }

if(url.pathname==="/api/auth/google"){ let redirect="https://www.rumahgadang-ai.my.id/api/auth/callback"; return Response.redirect("https://accounts.google.com/o/oauth2/v2/auth?client_id="+GOOGLE_ID+"&redirect_uri="+redirect+"&response_type=code&scope=email profile&access_type=offline&prompt=consent",302); }

if(url.pathname==="/api/auth/callback"){ try{ let code=url.searchParams.get("code"); let redirect="https://www.rumahgadang-ai.my.id/api/auth/callback"; let tokenRes=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"code="+code+"&client_id="+GOOGLE_ID+"&client_secret="+GOOGLE_SECRET+"&redirect_uri="+redirect+"&grant_type=authorization_code"}); let token=await tokenRes.json(); let userRes=await fetch("https://www.googleapis.com/oauth2/v2/userinfo",{headers:{Authorization:"Bearer "+token.access_token}}); let user=await userRes.json(); return new Response(`<!DOCTYPE html><script>localStorage.setItem('rg_user',JSON.stringify(${JSON.stringify(user)}));localStorage.setItem('rg_email','${user.email}');localStorage.setItem('rg_name','${(user.name||"").replace(/'/g,"")}');localStorage.setItem('rg_avatar','${user.picture||""}');location.href='/akun';</script>`,{headers:{"Content-Type":"text/html"}}); }catch(e){ return new Response("Gagal Bos: "+e.message,{headers:{"Content-Type":"text/html"}}); } }


if(url.pathname.includes("kantor")){
  return new Response(KANTOR_HTML,{headers:{"Content-Type":"text/html;charset=utf-8"}});

}


let tab="home"; if(url.pathname.includes("foto")) tab="foto"; if(url.pathname.includes("video")) tab="video"; if(url.pathname.includes("ai")) tab="ai"; if(url.pathname.includes("akun")) tab="akun";

let titles={home:"Rumah Gadang AI - Komunitas Minangkabau",foto:"RG Foto - Koleksi Rumah Gadang",video:"RG Video Pendek - Adat Minang",ai:"Rumah Gadang AI - Tanya Adat",akun:"Akun - Rumah Gadang AI"};

let descs={home:"Komunitas digital Rumah Gadang Minangkabau, berbagi cerita foto video dan AI",foto:"Koleksi foto Rumah Gadang indah dari Instagram dan user",video:"Video pendek adat Minangkabau Rumah Gadang",ai:"Tanya jawab AI tentang Rumah Gadang dan adat Minangkabau",akun:"Login akun Rumah Gadang AI"};

let canonPath = url.pathname; if(canonPath==="/home") canonPath="/"; let canonUrl="https://www.rumahgadang-ai.my.id"+(canonPath==="/"?"/":canonPath);

let titleNow=titles[tab]||titles.home; let descNow=descs[tab]||descs.home;

let html=`<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${titleNow}</title><meta name="description" content="${descNow}"><link rel="canonical" href="${canonUrl}"><meta property="og:title" content="${titleNow}"><meta property="og:description" content="${descNow}"><meta property="og:url" content="${canonUrl}"><meta property="og:type" content="website">

<style>

*{margin:0;padding:0;box-sizing:border-box}body{background:#000;color:#fff;font-family:sans-serif}

#app{max-width:520px;margin:0 auto;min-height:100vh;padding-bottom:70px;background:#000}

.top{position:sticky;top:0;background:#000;z-index:10;padding:10px 12px;border-bottom:1px solid #222;display:flex;justify-content:space-between;align-items:center}

.logo{width:34px;height:34px;border-radius:50%;border:1.5px solid #00ff88;object-fit:cover}

.page{display:none}.page.on{display:block}

#p-ai.page.on{display:flex;flex-direction:column;height:calc(100vh - 56px);background:#000}

#p-akun.page.on{display:block}

.post{padding:12px;border-bottom:1px solid #151515;display:flex;gap:10px}.post-av{width:40px;height:40px;border-radius:50%;object-fit:cover}.post-body{flex:1}.post-text{margin-top:6px;font-size:14px;white-space:pre-wrap}.post-img{margin-top:10px;border-radius:12px;overflow:hidden}.post-img img{width:100%;display:block}

.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px}.cell{aspect-ratio:1;background:#111;position:relative;overflow:hidden}.cell img{width:100%;height:100%;object-fit:cover}.del{position:absolute;top:4px;right:4px;background:red;color:#fff;border:0;border-radius:50%;width:24px;height:24px;display:grid;place-items:center;font-size:12px;z-index:5}

.bot{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:520px;background:#000;border-top:1px solid #222;display:flex;z-index:99}.bot a{flex:1;text-align:center;padding:8px 0;color:#666;text-decoration:none;font-size:20px}.bot a.on{color:#fff}.bot a i{font-size:9px;display:block}

input{background:#111;border:1px solid #333;color:#fff;border-radius:10px;padding:12px}

.like-bar{margin-top:10px;display:flex;gap:8px;flex-wrap:wrap}.btn-like{background:#1a1a1a;border:1px solid #333;color:#fff;padding:6px 12px;border-radius:20px;font-size:12px;cursor:pointer}

#vWrap{height:calc(100vh - 60px);overflow-y:scroll;scroll-snap-type:y mandatory;background:#000}.v-card{position:relative;height:calc(100vh - 60px);scroll-snap-align:start;background:#000;overflow:hidden}.v-card img.thumb{width:100%;height:100%;object-fit:cover}.v-actions{position:absolute;right:12px;bottom:90px;display:flex;flex-direction:column;gap:16px}.v-btn{width:52px;height:52px;border-radius:50%;background:rgba(0,0,0,0.55);border:1px solid rgba(255,255,255,0.25);display:grid;place-items:center;font-size:24px;cursor:pointer}

.fab{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);width:48px;height:48px;background:#00ff88;color:#000;border-radius:50%;display:grid;place-items:center;font-size:26px;font-weight:900;z-index:30;box-shadow:0 0 14px rgba(0,255,136,0.5)}

#aiChat{flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px; padding:12px; padding-bottom:20px}

.msg{padding:10px 14px;border-radius:14px;max-width:85%;font-size:14px;white-space:pre-wrap}.msg.user{align-self:flex-end;background:#166534}.msg.ai{align-self:flex-start;background:#222;border:1px solid #333}

.bar{display:flex; gap:8px; background:#111; border:1px solid #333; padding:8px; border-radius:28px; margin:8px; position:sticky; bottom:60px;}

.bar input{flex:1;background:#0a0a0a;border:1px solid #333;border-radius:20px;padding:12px 14px}

.comment-box{margin-top:8px;background:#0a0a0a;border:1px solid #222;border-radius:10px;padding:8px}.c-item{display:flex;gap:6px;margin-top:6px;font-size:12px}.c-av{width:24px;height:24px;border-radius:50%}.foto-tab{display:inline-block;padding:12px 18px;color:#888;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap}.foto-tab.active{color:#fff}

</style></head><body>

<div id=app>

<div id="p-home" class="page ${tab==="home"?"on":""}"><div class="top"><div style="display:flex;gap:10px;align-items:center"><img src="${LOGO}" class="logo"><b>RUMAH GADANG AI</b></div></div>

<div style="padding:12px;background:#0a0a0a;border-bottom:1px solid #222"><div style="display:flex;gap:8px;align-items:center"><img id="homeAv" src="${LOGO}" style="width:38px;height:38px;border-radius:50%;border:2px solid #00ff88"><input id="tulisIn" placeholder="Tulis sesuatu..." style="flex:1"><label for="tulisFile" style="background:#222;border:1px solid #333;padding:8px 10px;border-radius:10px">➕</label><input id="tulisFile" type="file" accept="image/*" style="display:none"></div><div id="tulisPreview" style="display:none;margin-top:8px"><img id="tulisPreviewImg" style="width:100%;max-height:180px;border-radius:10px"><div onclick="clearPrev()" style="color:red;font-size:11px;margin-top:4px">Hapus</div></div><button onclick="addTulis()" style="width:100%;margin-top:8px;background:#00ff88;color:#000;border:0;padding:12px;border-radius:10px;font-weight:900">KIRIM</button></div><div id="homeFeed"></div></div>

<div id="p-foto" class="page ${tab==="foto"?"on":""}"><div class="top"><b>RG FOTO</b> <span id="adminBadgeFoto" style="display:none;background:red;color:#fff;padding:2px 8px;border-radius:10px;font-size:10px">ADMIN</span></div><div id="foto-tabs" style="display:flex;overflow-x:auto;background:#0a0a0a;border-bottom:1px solid #222;position:sticky;top:44px;z-index:5"></div><div class="grid3" id="fg"></div><div class="grid3" id="fg2" style="margin-top:4px;border-top:1px solid #111"></div><div class="fab" onclick="toggleFotoUpload()">+</div><div id="fotoUploadPanel" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:100;padding:16px;overflow-y:auto"><div style="max-width:480px;margin:60px auto 0 auto;background:#111;border:1px solid #333;border-radius:16px;padding:16px"><div style="display:flex;justify-content:space-between;align-items:center"><b style="color:#00ff88">Upload Foto</b><button onclick="toggleFotoUpload()" style="background:#222;color:#fff;border:1px solid #444;border-radius:50%;width:32px;height:32px">X</button></div><div id="adminFotoBox" style="display:none;margin-top:14px;padding:12px;background:#0a0a0a;border:1px solid #222;border-radius:12px"><b style="color:#00ff88;font-size:13px">Admin IG</b><input id="igUrlInput" placeholder="https://instagram.com/reel/..." style="width:100%;margin-top:8px"><button onclick="previewIG()" style="width:100%;margin-top:8px;background:#00ff88;color:#000;border:0;padding:10px;border-radius:10px;font-weight:900">AMBIL</button><div id="igPreviewBox" style="display:none;margin-top:10px;border:1px solid #333;padding:8px;border-radius:10px"><img id="igPreviewImg" style="width:100%;border-radius:8px;aspect-ratio:1/1;object-fit:cover"><div id="igPreviewAkun" style="color:#00ff88;font-size:12px;margin-top:6px"></div><button onclick="saveIGCurated()" style="width:100%;margin-top:8px;background:#fff;color:#000;border:0;padding:10px;border-radius:10px;font-weight:900">+ SIMPAN</button></div></div><div style="margin-top:14px;padding:12px;background:#0a0a0a;border:1px solid #222;border-radius:12px"><b style="font-size:12px;color:#aaa">Upload User</b><input id="fFile" type="file" accept="image/*" style="width:100%;margin-top:8px"><button onclick="upFoto()" style="width:100%;margin-top:8px;background:#222;color:#fff;border:1px solid #333;padding:12px;border-radius:10px;font-weight:900">UPLOAD</button></div></div></div></div>

<div id="p-video" class="page ${tab==="video"?"on":""}"><div class="top" style="position:fixed;top:0;width:100%;max-width:520px;z-index:20"><b>RG Video Pendek</b> <span id="adminBadgeVideo" style="display:none;background:red;color:#fff;padding:2px 8px;border-radius:10px;font-size:10px">ADMIN</span></div><div id="vWrap" style="margin-top:44px"></div><div class="fab" onclick="toggleAdd()">+</div><div id="addBox" style="display:none;position:fixed;bottom:140px;left:16px;right:16px;max-width:480px;margin:0 auto;background:#111;border:1px solid #333;border-radius:14px;padding:12px;z-index:30"><b>Tambah Video</b><div style="display:flex;gap:8px;margin-top:8px"><input id="ytUrl" placeholder="https://youtu.be/..." style="flex:1"><button onclick="addVideo()" style="background:red;color:#fff;border:0;padding:8px 12px;border-radius:10px">ADD</button></div><div onclick="toggleAdd()" style="font-size:11px;color:#666;margin-top:6px">Tutup</div></div></div>

<div id="p-ai" class="page ${tab==="ai"?"on":""}"><div class="top"><b>RUMAH GADANG AI</b></div><div id="aiChat"><div class="msg ai">Halo Dunsanak! Tanya dalam bahasa indonesia dulu yo masih tahap pengembangan ke bahasa minang</div></div><div class="bar"><input id="aiInp" placeholder="Tanya Rumah Gadang AI..."><button id="aiSend" style="background:#22c55e;color:#000;border:0;padding:10px 16px;border-radius:20px;font-weight:900">KIRIM</button></div></div>

<div id="p-akun" class="page ${tab==="akun"?"on":""}">

<div class="top"><b>AKUN</b><button onclick="logout()" style="background:#ff1a1a;color:#fff;border:0;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700">LOGOUT</button></div>

<div id="akunLocked" style="padding:20px"><div style="background:#111;border:1px solid #222;border-radius:16px;padding:16px"><b style="color:#00ff88">Login @rumahgadang-ai.my.id</b><input id="rgUser" placeholder="nama@rumahgadang-ai.my.id" style="width:100%;margin-top:10px"><input id="rgPass" type="password" placeholder="password" style="width:100%;margin-top:8px"><input id="rgName" placeholder="Nama lengkap (daftar)" style="width:100%;margin-top:8px"><div style="display:flex;gap:8px;margin-top:12px"><button onclick="rgLogin()" style="flex:1;background:#00ff88;color:#000;border:0;padding:12px;border-radius:10px;font-weight:900">LOGIN</button><button onclick="rgRegister()" style="flex:1;background:#222;color:#fff;border:1px solid #333;padding:12px;border-radius:10px;font-weight:900">DAFTAR</button></div></div><div style="text-align:center;margin:16px 0;color:#555;font-size:12px">atau</div><button onclick="location.href='/api/auth/google'" style="background:#fff;color:#000;border:0;padding:12px 20px;border-radius:20px;font-weight:900;width:100%">LOGIN GOOGLE</button></div>

<div id="akunOpen" style="display:none;padding:20px;text-align:center">

<img id="akunAvatar" src="${LOGO}" style="width:110px;height:110px;border-radius:50%;border:3px solid #00ff88;object-fit:cover;margin:0 auto;display:block">

<div id="akunName" style="margin-top:12px;font-weight:800;font-size:20px"></div><div id="akunEmail" style="font-size:12px;color:#888;margin-top:2px"></div>

<div id="adminInfo" style="display:none;margin-top:12px;background:#ff1a1a;color:#fff;padding:8px;border-radius:10px;font-size:12px;font-weight:700">MODE ADMIN AKTIF BOS</div>

<div style="margin-top:20px;background:#111;border:1px solid #222;border-radius:16px;padding:16px;text-align:left">

<b style="color:#00ff88;font-size:14px">Edit Profil Bos</b>

<div style="margin-top:10px"><div style="font-size:11px;color:#888;margin-bottom:4px">Nama Baru Bos</div><input id="editName" placeholder="Nama baru Bos" style="width:100%"></div>

<div style="margin-top:10px"><div style="font-size:11px;color:#888;margin-bottom:4px">Foto Profil Baru Bos</div><input id="editPhotoFile" type="file" accept="image/*" style="width:100%"></div>

<div id="editPreviewWrap" style="display:none;margin-top:10px"><img id="editPreview" style="width:100%;max-height:200px;border-radius:12px;object-fit:cover"></div>

<button onclick="saveProfile()" style="width:100%;margin-top:14px;background:#00ff88;color:#000;border:0;padding:14px;border-radius:12px;font-weight:900;font-size:14px">SIMPAN PROFIL BOS</button>

</div>

</div>

</div>

</div>

<div id="fotoModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.97);z-index:999;flex-direction:column;justify-content:center;align-items:center;padding:16px">

<img id="modalImg" style="max-width:100%;max-height:70vh;border-radius:12px;object-fit:contain;display:none">

<div id="modalVideoWrap" style="max-width:100%;width:380px;height:68vh;display:none;border-radius:12px;overflow:hidden;background:#000"></div>

<div id="modalCap" style="color:#fff;margin-top:10px;font-size:13px;text-align:center"></div>

<div id="modalAkun" style="color:#00ff88;font-size:12px;margin-top:4px"></div>

<div style="display:flex;gap:10px;margin-top:16px"><button onclick="closeFoto()" style="padding:12px 20px;border-radius:24px;border:1px solid #555;background:transparent;color:#fff">Tutup</button><button id="modalIGBtn" style="padding:12px 20px;border-radius:24px;border:none;background:#00ff88;color:#000;font-weight:900">Lihat di IG ↗</button></div>

</div>

<div class="bot"><a href="/" class="${tab==="home"?"on":""}">🏠<i>Home</i></a><a href="/foto" class="${tab==="foto"?"on":""}">🖼️<i>Foto</i></a><a href="/video" class="${tab==="video"?"on":""}">🎬<i>Video</i></a><a href="/kantor" class="${tab==="kantor"?"on":""}">🏢<i>Kantor</i></a><a href="/ai" class="${tab==="ai"?"on":""}">🤖<i>AI</i></a><a href="/akun" class="${tab==="akun"?"on":""}">👤<i>Akun</i></a></div>

<script>

var LOGO_URL="${LOGO}"; var pending=''; var editPending=''; var soundOn=false; var curId=null;

var ADMIN_LIST=${JSON.stringify(ADMIN_EMAILS)};

var currentIGLink=''; var currentFilterFoto='semua'; var igDataAll=[]; var tempIG={};

function getEmail(){return localStorage.getItem('rg_email')||''}

function getName(){return localStorage.getItem('rg_name')||'Anonim'}

function getAvatar(){return localStorage.getItem('rg_avatar')||LOGO_URL}

function isAdminCheck(){ let e=getEmail().toLowerCase(); return ADMIN_LIST.includes(e); }

function makeIframe(id){ var mute=soundOn?0:1; return '<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&mute='+mute+'&controls=0&playsinline=1&loop=1&playlist='+id+'&modestbranding=1&rel=0" style="width:100%;height:100%;border:0" allow="autoplay; encrypted-media"></iframe><div class="v-actions"><div class="v-btn" onclick="event.stopPropagation(); likeVideo(\\''+id+'\\',this)">❤️</div><div class="v-btn" onclick="event.stopPropagation(); openComments(\\'video\\',\\''+id+'\\')">💬</div><div class="v-btn" onclick="event.stopPropagation(); sharePost(\\'video '+id+'\\')">↗️</div><div class="v-btn" onclick="event.stopPropagation(); toggleSound(\\''+id+'\\')">'+(soundOn?'🔊':'🔇')+'</div>'+(isAdminCheck()?'<div class="v-btn" style="background:red" onclick="event.stopPropagation(); delItem(\\'video\\',\\''+id+'\\')">🗑️</div>':'')+'</div>';}

function makeThumb(id){ return '<img class="thumb" src="https://img.youtube.com/vi/'+id+'/hqdefault.jpg"><div style="position:absolute;inset:0;display:grid;place-items:center"><div style="width:60px;height:42px;background:red;border-radius:12px;display:grid;place-items:center">▶️</div></div><div class="v-actions"><div class="v-btn">❤️</div><div class="v-btn">💬</div><div class="v-btn">↗️</div><div class="v-btn">🔇</div>'+(isAdminCheck()?'<div class="v-btn" style="background:red">🗑️</div>':'')+'</div>';}

function toggleSound(id){ soundOn=!soundOn; var cur=document.querySelector('.video-inner[data-id="'+id+'"]'); if(cur) cur.innerHTML=makeIframe(id); }

function stopAll(){ document.querySelectorAll('.video-inner').forEach(function(el){ var id=el.dataset.id; if(id && el.innerHTML.includes('iframe')) el.innerHTML=makeThumb(id); });}

function playOnly(el,id){ if(el.innerHTML.includes('iframe')){ toggleSound(id); return; } stopAll(); el.innerHTML=makeIframe(id); curId=id; }

async function loadVideo(){ var r=await fetch('/api/videos'); var v=await r.json(); var w=document.getElementById('vWrap'); w.innerHTML=v.map(function(id){return '<div class="v-card"><div class="video-inner" data-id="'+id+'" style="width:100%;height:100%" onclick="playOnly(this,\\''+id+'\\')">'+makeThumb(id)+'</div></div>';}).join(''); var obs=new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting){ var inner=en.target.querySelector('.video-inner'); if(inner){ var id=inner.dataset.id; if(curId!==id){ stopAll(); inner.innerHTML=makeIframe(id); curId=id; } } } }); },{root:w,threshold:0.75}); document.querySelectorAll('.v-card').forEach(function(c){obs.observe(c);}); setTimeout(function(){ var first=document.querySelector('.video-inner'); if(first) playOnly(first, first.dataset.id); },600); }

function toggleAdd(){var b=document.getElementById('addBox');b.style.display=b.style.display==='block'?'none':'block';}

async function addVideo(){ if(!getEmail()){alert('Login dulu Bos');location.href='/akun';return;} var inp=document.getElementById('ytUrl');var v=inp.value.trim();if(!v)return alert('Link kosong Bos');var res=await fetch('/api/videos/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ytUrl:v})});var j=await res.json();if(j.ok){alert('Berhasil Bos!');inp.value='';toggleAdd();loadVideo();}else{alert('Gagal Bos: '+j.msg);} }

function likeVideo(id,el){ if(!getEmail()){location.href='/akun';return;} el.style.background=el.style.background==='red'?'rgba(0,0,0,0.55)':'red'; }

function toggleFotoUpload(){ var p=document.getElementById('fotoUploadPanel'); p.style.display=p.style.display==='block'?'none':'block'; }

async function loadFoto(){ try{ let r=await fetch('/api/ig-curated'); let data=await r.json(); igDataAll=data||[]; renderFotoTabs(); renderFotoGrid(); let r2=await fetch('/api/images'); let d2=await r2.json(); let g2=document.getElementById('fg2'); if(g2){ g2.innerHTML=d2.map(function(x){ return '<div class="cell"><img src="'+x.url+'"><button class="del" style="display:'+(isAdminCheck()?'grid':'none')+'" onclick="event.stopPropagation();delItem(\\'foto\\','+x.id+')">X</button></div>'; }).join(''); } if(isAdminCheck()){ document.getElementById('adminBadgeFoto').style.display='inline'; document.getElementById('adminFotoBox').style.display='block'; } }catch(e){} }

function renderFotoTabs(){ let akuns=['semua',...new Set(igDataAll.map(x=>x.akun))]; let html=akuns.map(a=>{ let label=a==='semua'?'Semua':'@'+a; return '<div class="foto-tab '+(a===currentFilterFoto?'active':'')+'" onclick="filterFoto(\\''+a+'\\')">'+label+'</div>'; }).join(''); document.getElementById('foto-tabs').innerHTML=html; }

function filterFoto(akun){ currentFilterFoto=akun; renderFotoTabs(); renderFotoGrid(); }

function renderFotoGrid(){ let data=igDataAll.filter(x=> currentFilterFoto==='semua' || x.akun===currentFilterFoto); let g=document.getElementById('fg'); if(!g) return; g.innerHTML=data.map(function(x){ let link=x.linkIG||""; let isReel=link.includes("/reel/")||link.includes("/p/"); return '<div class="cell" onclick="openFoto(\\''+x.img.replace(/'/g,'')+'\\',\\''+(x.caption||'').replace(/'/g,'')+'\\',\\'@'+x.akun+'\\',\\''+x.linkIG+'\\',\\''+x.id+'\\')"><img src="'+x.img+'" loading="lazy">'+(isReel?'<div style="position:absolute;inset:0;display:grid;place-items:center"><div style="width:36px;height:36px;background:rgba(0,0,0,0.65);border-radius:50%;display:grid;place-items:center;color:#fff">▶️</div></div>':'')+'<div style="position:absolute;bottom:2px;left:2px;background:rgba(0,0,0,0.6);color:#fff;font-size:9px;padding:2px 4px;border-radius:4px">@'+x.akun+'</div>'+(isAdminCheck()?'<button class="del" onclick="event.stopPropagation();delItem(\\'ig\\','+x.id+')">X</button>':'')+'</div>'; }).join(''); if(!data.length) g.innerHTML='<div style="grid-column:1/-1;padding:20px;text-align:center;color:#666;font-size:12px">Belum ada foto Bos. Klik + untuk tambah Bos.</div>'; }

function openFoto(img,cap,akun,link,id){ document.getElementById('modalCap').innerText=cap; document.getElementById('modalAkun').innerText=akun; currentIGLink=link; let imgEl=document.getElementById('modalImg'); let vidWrap=document.getElementById('modalVideoWrap'); let embedUrl=link.split("?")[0]; if(!embedUrl.endsWith("/")) embedUrl+="/"; embedUrl+="embed"; if(link.includes("/reel/")||link.includes("/p/")||link.includes("/tv/")){ imgEl.style.display='none'; vidWrap.style.display='block'; vidWrap.innerHTML='<iframe src="'+embedUrl+'" style="width:100%;height:100%;border:0;border-radius:12px;background:#000" allowfullscreen scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; } else { vidWrap.style.display='none'; vidWrap.innerHTML=''; imgEl.style.display='block'; imgEl.src=img; } document.getElementById('fotoModal').style.display='flex'; }

function closeFoto(){ document.getElementById('fotoModal').style.display='none'; document.getElementById('modalVideoWrap').innerHTML=''; }

document.getElementById('modalIGBtn').addEventListener('click',function(){ if(currentIGLink) window.open(currentIGLink,'_blank'); });

async function previewIG(){ let url=document.getElementById('igUrlInput').value.trim(); if(!url) return alert('Paste link IG dulu Bos'); document.getElementById('igPreviewBox').style.display='block'; document.getElementById('igPreviewImg').src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7d4c58900a85_w200.gif'; try{ let res=await fetch('/api/ig-preview?url='+encodeURIComponent(url)); let j=await res.json(); if(!j.thumbnail) throw 'fail'; tempIG={akun:j.username,img:j.thumbnail,video:"",linkIG:url,caption:j.caption}; document.getElementById('igPreviewImg').src=j.thumbnail; document.getElementById('igPreviewAkun').innerText='@'+j.username+' • Siap play Bos'; }catch(e){ alert('IG ngeblok Bos'); document.getElementById('igPreviewBox').style.display='none'; } }

async function saveIGCurated(){ if(!tempIG.img) return alert('Ambil dulu Bos'); let res=await fetch('/api/ig-curated/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(tempIG)}); let j=await res.json(); if(j.ok){ alert('Berhasil Bos!'); document.getElementById('igUrlInput').value=''; document.getElementById('igPreviewBox').style.display='none'; toggleFotoUpload(); loadFoto(); } else alert('Gagal Bos'); }

async function upFoto(){if(!getEmail()){alert('Login dulu Bos');location.href='/akun';return;}var el=document.getElementById('fFile');if(!el.files[0]) return alert('Pilih foto');var f=el.files[0];var rd=new FileReader();rd.onload=async function(e){var img=new Image();img.onload=async function(){var c=document.createElement('canvas');c.width=600;c.height=600*img.height/img.width;c.getContext('2d').drawImage(img,0,0,c.width,c.height);var d=c.toDataURL('image/jpeg',0.6);await fetch('/api/images/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:d})});alert('OK Bos');toggleFotoUpload();loadFoto();};img.src=e.target.result;};rd.readAsDataURL(f);}

async function loadTulis(){ try{var r=await fetch('/api/tulis');var d=await r.json();var h=document.getElementById('homeFeed');if(h){h.innerHTML=d.map(function(x){return '<div class="post" id="post-'+x.id+'"><img class="post-av" src="'+(x.picture||LOGO_URL)+'"><div class="post-body"><div style="display:flex;justify-content:space-between"><b>'+(x.name||'Anonim')+'</b><span style="display:flex;gap:8px;align-items:center"><span style="font-size:10px;color:#666">'+new Date(x.time).toLocaleString()+'</span>'+(isAdminCheck()?'<button onclick="delItem(\\'tulis\\','+x.id+')" style="background:red;color:#fff;border:0;padding:2px 8px;border-radius:10px;font-size:10px">HAPUS</button>':'')+'</span></div><div class="post-text">'+(x.text||'')+'</div>'+(x.tulisImg?'<div class="post-img"><img src="'+x.tulisImg+'"></div>':'')+'<div class="like-bar"><span class="btn-like" onclick="likeTulis('+x.id+',this)">❤️ '+(x.likes||0)+'</span><span class="btn-like" onclick="openComments(\\'tulis\\','+x.id+')">💬 Komen</span><span class="btn-like" onclick="sharePost(\\'tulis '+x.id+'\\')">↗️ Share</span></div><div id="comments-'+x.id+'" class="comment-box" style="display:none"></div></div></div>';}).join('');}}catch(e){}}

async function likeTulis(id,el){ if(!getEmail()){location.href='/akun';return;} el.classList.toggle('liked'); let cur=parseInt(el.innerText.replace(/\\D/g,''))||0; let isLiked=el.classList.contains('liked'); el.innerText='❤️ '+(isLiked?cur+1:Math.max(0,cur-1)); try{ await fetch('/api/like',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'tulis',item_id:id,email:getEmail()})}); }catch(e){} }

async function delItem(type,id){ if(!isAdminCheck()) return alert('Cuma admin Bos'); if(!confirm('Hapus Bos '+type+' '+id+'?')) return; try{event.stopPropagation();}catch(e){} let r=await fetch('/api/delete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:type,id:parseInt(id),email:getEmail()})}); let j=await r.json(); if(j.ok){ if(type==='ig'){ igDataAll = igDataAll.filter(x=> String(x.id)!==String(id)); renderFotoGrid(); renderFotoTabs(); } if(type==='tulis') loadTulis(); if(type==='foto') loadFoto(); if(type==='video') loadVideo(); } else { alert('Gagal Bos: '+j.msg); } }

async function openComments(type,item_id){ if(!getEmail()){location.href='/akun';return;} let box=document.getElementById('comments-'+item_id); if(!box){ let txt=prompt('Tulis komen Bos:'); if(!txt)return; await fetch('/api/comments/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:type,item_id:String(item_id),text:txt,email:getEmail(),name:getName(),picture:getAvatar()})}); alert('Komen terkirim Bos'); return; } box.style.display=box.style.display==='none'?'block':'none'; if(box.style.display==='none') return; box.innerHTML='Loading...'; try{ let r=await fetch('/api/comments?type='+type+'&id='+item_id); let list=await r.json(); let html='<div style="display:flex;gap:6px"><input id="c-input-'+item_id+'" placeholder="Tulis komen..." style="flex:1;padding:8px"><button onclick="sendComment(\\''+type+'\\','+item_id+')" style="background:#00ff88;color:#000;border:0;padding:6px 10px;border-radius:8px">Kirim</button></div>'; html+=list.map(c=>'<div class="c-item"><img class="c-av" src="'+(c.picture||LOGO_URL)+'"><div><b>'+c.name+'</b> '+c.text+'</div></div>').join(''); if(!list.length) html+='<div style="font-size:11px;color:#666;margin-top:6px">Belum ada komen Bos</div>'; box.innerHTML=html; }catch(e){box.innerHTML='Error';} }

async function sendComment(type,item_id){ let inp=document.getElementById('c-input-'+item_id); let txt=inp.value.trim(); if(!txt)return; await fetch('/api/comments/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:type,item_id:String(item_id),text:txt,email:getEmail(),name:getName(),picture:getAvatar()})}); inp.value=''; openComments(type,item_id); setTimeout(()=>openComments(type,item_id),300); }

function sharePost(txt){ let link=location.origin+'/home'; if(navigator.share){ navigator.share({title:'Rumah Gadang AI', text:txt, url:link}); } else { prompt('Copy link Bos:', link); } }

var tf=document.getElementById('tulisFile');if(tf){tf.addEventListener('change',function(){var f=this.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(e){pending=e.target.result;var pv=document.getElementById('tulisPreview');var im=document.getElementById('tulisPreviewImg');if(pv&&im){im.src=pending;pv.style.display='block';}};rd.readAsDataURL(f);});}

function clearPrev(){pending='';var pv=document.getElementById('tulisPreview');if(pv)pv.style.display='none';}

async function addTulis(){if(!getEmail()){alert('Login dulu Bos');location.href='/akun';return;}var inp=document.getElementById('tulisIn');var t=inp.value.trim();if(!t&&!pending)return alert('Tulis dulu Bos');await fetch('/api/tulis/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:t,email:getEmail(),name:getName(),picture:getAvatar(),tulisImg:pending})});inp.value='';clearPrev();loadTulis();}

function logout(){localStorage.clear();location.href='/akun';}

async function rgRegister(){ let user=document.getElementById('rgUser').value.trim(); let pass=document.getElementById('rgPass').value.trim(); let name=document.getElementById('rgName').value.trim(); if(!user||!pass) return alert('Isi Bos'); let r=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:user,pass:pass,name:name||user})}); let j=await r.json(); if(!j.ok) return alert(j.msg); localStorage.setItem('rg_email',j.email); localStorage.setItem('rg_name',j.name); localStorage.setItem('rg_avatar',LOGO_URL); localStorage.setItem('rg_user',JSON.stringify(j)); location.reload(); }

async function rgLogin(){ let user=document.getElementById('rgUser').value.trim(); let pass=document.getElementById('rgPass').value.trim(); if(!user||!pass) return alert('Isi Bos'); let r=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:user,pass:pass})}); let j=await r.json(); if(!j.ok) return alert('Gagal Bos: '+j.msg); localStorage.setItem('rg_email',j.email); localStorage.setItem('rg_name',j.name); localStorage.setItem('rg_avatar',j.picture||LOGO_URL); localStorage.setItem('rg_user',JSON.stringify(j)); location.reload(); }

function addMsg(h,t){var c=document.getElementById('aiChat');var d=document.createElement('div');d.className='msg '+t;d.innerHTML=h;c.appendChild(d);c.scrollTop=c.scrollHeight;return d;}

async function kirimAI(){var i=document.getElementById('aiInp');var q=i.value.trim();if(!q)return;addMsg(q,'user');i.value='';var b=addMsg('⏳...','ai');try{var r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:q})});var j=await r.json();b.innerHTML=j.reply;}catch(e){b.innerHTML='Error Bos';}}

var ep=document.getElementById('editPhotoFile');if(ep){ ep.addEventListener('change',function(){ var f=this.files[0]; if(!f) return; var rd=new FileReader(); rd.onload=function(e){ editPending=e.target.result; var img=new Image(); img.onload=function(){ var c=document.createElement('canvas'); c.width=300; c.height=300*img.height/img.width; c.getContext('2d').drawImage(img,0,0,c.width,c.height); editPending=c.toDataURL('image/jpeg',0.7); document.getElementById('editPreview').src=editPending; document.getElementById('editPreviewWrap').style.display='block'; }; img.src=e.target.result; }; rd.readAsDataURL(f); }); }

async function saveProfile(){ let newName=document.getElementById('editName').value.trim()||getName(); let newPic=editPending||getAvatar(); if(!getEmail()) return alert('Login dulu Bos'); let r=await fetch('/api/profile/update',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:getEmail(),name:newName,picture:newPic})}); let j=await r.json(); if(j.ok){ localStorage.setItem('rg_name',newName); localStorage.setItem('rg_avatar',newPic); alert('Profil Bos sudah diupdate Bos!'); location.reload(); } else { alert('Gagal Bos'); } }

document.getElementById('aiSend').addEventListener('click',kirimAI);

document.getElementById('aiInp').addEventListener('keydown',function(e){if(e.key==='Enter')kirimAI();});

var u=localStorage.getItem('rg_user');if(u){try{var ju=JSON.parse(u);document.getElementById('akunLocked').style.display='none';document.getElementById('akunOpen').style.display='block';document.getElementById('akunEmail').innerText=localStorage.getItem('rg_email')||ju.email;document.getElementById('akunName').innerText=localStorage.getItem('rg_name')||ju.name||'User';document.getElementById('akunAvatar').src=localStorage.getItem('rg_avatar')||ju.picture||LOGO_URL;document.getElementById('homeAv').src=localStorage.getItem('rg_avatar')||ju.picture||LOGO_URL; document.getElementById('editName').value=localStorage.getItem('rg_name')||ju.name||''; if(isAdminCheck()){ document.getElementById('adminInfo').style.display='block'; document.getElementById('adminBadgeFoto').style.display='inline'; document.getElementById('adminBadgeVideo').style.display='inline'; document.getElementById('adminFotoBox').style.display='block'; } }catch(e){}}

loadVideo();loadFoto();loadTulis();

</script></body></html>`;

return new Response(html,{headers:{"Content-Type":"text/html;charset=utf-8"}});

}

}
