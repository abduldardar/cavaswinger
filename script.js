
// script.js — gère la date/heure et l'import d'articles depuis /data/articles.json
function updateDateTime(){
  const el = document.getElementById('datetime');
  if(!el) return;
  const now = new Date();
  const opts = { year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' };
  el.textContent = now.toLocaleString('fr-FR', opts);
}
updateDateTime();
setInterval(updateDateTime, 60*1000);

// Chargement des articles depuis data/articles.json
async function loadArticles(){
  try{
    const res = await fetch('/data/articles.json');
    if(!res.ok) throw new Error('Impossible de charger les articles');
    const data = await res.json();
    const list = data.articles || [];
    // Trier par date décroissante
    list.sort((a,b)=> new Date(b.date) - new Date(a.date));
    const container = document.getElementById('articles');
    const archiveList = document.getElementById('archive-list');
    const featured = document.getElementById('featured');
    if(container){
      container.innerHTML = '';
      list.forEach((art, idx) => {
        const dom = document.createElement('article');
        dom.className = 'article';
        dom.innerHTML = `
          <img src="${art.url_image}" alt="${art.titre}">
          <div class="meta"><time datetime="${art.date}">${art.date}</time> · <span>${art.lien_source ? '<a href="'+art.lien_source+'" target="_blank" rel="noopener">Source</a>' : ''}</span></div>
          <h2>${art.titre}</h2>
          <p>${art.resume}</p>
        `;
        container.appendChild(dom);
        if(idx===0 && featured) featured.innerHTML = `<strong>${art.titre}</strong><p><time datetime="${art.date}">${art.date}</time></p>`;
      });
    }
    if(archiveList){
      archiveList.innerHTML = '';
      list.forEach(art => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="index.html#">${art.titre}</a> — <time datetime="${art.date}">${art.date}</time>`;
        archiveList.appendChild(li);
      });
    }
  }catch(err){
    console.error(err);
  }
}
loadArticles();

// Préparation pour import automatique / ajout et archivage
// Le script ci‑dessous est un placeholder côté client : pour un import sécurisé,
// exécutez la logique d'ajout/archivage côté serveur (Netlify functions, Vercel, etc.)
