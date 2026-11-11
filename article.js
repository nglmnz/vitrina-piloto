const params=new URLSearchParams(location.search);
let saved='es';try{saved=localStorage.getItem('vitrina-lang')||'es';document.documentElement.dataset.theme=localStorage.getItem('vitrina-theme')||'dark';}catch(e){}
let lang=I18N[params.get('lang')||saved]?params.get('lang')||saved:'es';
const piece=PIECES.find(p=>p.id===params.get('id'));
const copy={es:{back:'← Volver a las investigaciones',missing:'No encontramos esta pieza',note:'Ficha en desarrollo. La evidencia, el método y las fuentes del estudio aún requieren revisión editorial. Esta página no constituye el artículo completo.',summary:'Enfoque editorial provisional',pending:'Contenido pendiente de incorporación y verificación para esta investigación.',sources:'Datos y fuentes',external:'Visitar el proyecto',language:'El contenido editorial de esta ficha está disponible en español.'},en:{back:'← Back to research',missing:'Story not found',note:'Work in progress. Evidence, methods and study sources still require editorial review. This page is not the complete article.',summary:'Provisional editorial focus',pending:'Content awaiting incorporation and verification for this study.',sources:'Data and sources',external:'Visit the project',language:''},pt:{back:'← Voltar às pesquisas',missing:'Peça não encontrada',note:'Ficha em desenvolvimento. Evidências, método e fontes ainda precisam de revisão editorial. Esta página não é o artigo completo.',summary:'Enfoque editorial provisório',pending:'Conteúdo a incorporar e verificar para esta pesquisa.',sources:'Dados e fontes',external:'Visitar o projeto',language:'O conteúdo editorial desta ficha está disponível em espanhol.'}};
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
 const c=copy[lang],t=I18N[lang],p=piece?localized(piece):null;
 document.documentElement.lang=lang;
 document.title=(p?p.title:c.missing)+' · Vitrina';
 document.querySelector('meta[name="description"]').content=p?p.desc:c.missing;
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 document.getElementById('themeToggle').setAttribute('aria-label',t.theme);
 document.getElementById('themeToggle').textContent=document.documentElement.dataset.theme==='dark'?'☾':'☀';
 document.getElementById('footerLabel').textContent=t.footer2;
 const back=`<a href="index.html?lang=${lang}#investigacion">${c.back}</a>`;
 document.getElementById('reading').innerHTML=p?`${back}<div class="section-kicker" style="margin-top:40px">${escapeHTML(p.tag)}</div><h1>${escapeHTML(p.title)}</h1><p class="lead">${escapeHTML(p.desc)}</p><div class="meta"><span>${t.by}: ${escapeHTML(p.autor)}</span><span>${t.institution}: ${escapeHTML(p.inst)}</span><span>${p.year}</span></div><p class="status">${c.note}</p>${lang==='pt'?`<p>${c.language}</p>`:''}<div class="reading-layout"><nav aria-label="${t.readingMode}"><a href="#idea">01 · ${t.depth1}</a><a href="#evidence">02 · ${t.depth2}</a><a href="#method">03 · ${t.depth3}</a><a href="#data">04 · ${c.sources}</a></nav><div><section id="idea"><h2>${t.depth1}</h2><p>${escapeHTML(p.desc)}</p><p><strong>${c.summary}</strong></p><p>${escapeHTML(p.finding)}</p></section><section id="evidence"><h2>${t.depth2}</h2><p>${c.pending}</p></section><section id="method"><h2>${t.depth3}</h2><p>${c.pending}</p></section><section id="data"><h2>${c.sources}</h2><p>${c.pending}</p>${p.url?`<a href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer">${c.external} ↗</a>`:''}</section></div></div>`:`${back}<h1>${c.missing}</h1>`;
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('vitrina-lang',lang);}catch(e){}const url=new URL(location);url.searchParams.set('lang',lang);history.replaceState(null,'',url);render();}));
document.getElementById('themeToggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('vitrina-theme',theme);}catch(e){}render();});
render();
if(location.hash)document.getElementById(location.hash.slice(1))?.scrollIntoView();
