const V='piano-misa-v6';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const isPage=r.mode==='navigate'||new URL(r.url).pathname.endsWith('/index.html');
  if(isPage){
    // Páginas: primero la red (versión nueva), y si no hay internet, la copia guardada
    e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{
      if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}
      return res;
    }).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{
      if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}
      return res;
    }).catch(()=>hit);
    return hit||net;
  }));
});
