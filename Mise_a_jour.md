# Guide de mise à jour hebdomadaire

## 🎯 Objectif
Mettre à jour les articles du site **On regarde de plus près : l’IA Générative** chaque semaine avec les dernières actualités vérifiées sur l’intelligence artificielle générative et les modèles de langage (LLM).

---

## 🧩 Structure des données
Les articles du site sont stockés dans le fichier :  
`/data/articles.json`

Format attendu :
```json
{
  "articles": [
    {
      "titre": "Titre de l’article",
      "date": "Mois Année",
      "resume": "Résumé clair et neutre (~300 mots).",
      "lien_source": "https://...",
      "url_image": "https://..."
    }
  ]
}
```

---

## 🤖 Prompt hebdomadaire à exécuter

Utilise ce prompt dans ton outil d’IA préféré (ChatGPT, Claude, etc.) :

> **Prompt :**
> Donne les 5 actualités majeures de la semaine dans le domaine de l’IA générative et des modèles de langage (LLM).
> Rédige un résumé clair et neutre (~300 mots par article, mise en page aérée) avec titre, date, résumé, source vérifiée (lien), et une image libre de droit (Unsplash ou Pexels).
> Retourne le tout au format JSON suivant :
> ```json
> {
>   "articles": [
>     {
>       "titre": "...",
>       "date": "...",
>       "resume": "...",
>       "lien_source": "...",
>       "url_image": "..."
>     }
>   ]
> }
> ```

Vérifie que chaque **source est active et fiable** avant de publier.

---

## 🔄 Mise à jour du site

1. Télécharge le nouveau fichier `articles.json` généré.  
2. Remplace le fichier existant dans `/data/articles.json`.  
3. Héberge à nouveau le site sur :
   - **Netlify** : glisser-déposer le dossier du site dans l’interface, ou pousser sur GitHub.  
   - **GitHub Pages** : commit/push le changement sur la branche `main`.  
   - **Vercel** : le déploiement se fera automatiquement après push.

Les anciens articles peuvent être archivés manuellement en les copiant dans `/archives.html`.

---

## 🌙 Mode sombre et cache
Le thème du site est mémorisé dans le navigateur (localStorage).  
Si la mise à jour ne s’affiche pas immédiatement, vide le cache du navigateur ou force le rechargement (Ctrl+F5).

---

## 🧭 Vérification post-déploiement
Après chaque mise à jour :
- Vérifie que les images se chargent correctement.  
- Clique sur les liens sources pour confirmer leur validité.  
- Teste le bouton ☀︎ / 🌙.  

---

**Dernière révision : octobre 2025**
