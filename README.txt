
README — On regarde de plus près : l'IA Générative

Contenu
- index.html : page d'accueil qui charge /data/articles.json
- archives.html : liste des articles
- about.html : présentation du site
- contact.html : formulaire (démo)
- style.css : styles (Tech zen)
- script.js : gestion date/heure et import JSON
- logo.svg, favicon.ico
- /data/articles.json : fichier d'articles (format JSON)

Hébergement
- Ce site peut être hébergé sur Netlify, GitHub Pages ou Vercel.
- Pour GitHub Pages : poussez le répertoire dans un dépôt et activez GitHub Pages sur la branche main.
- Pour Netlify / Vercel : déployez depuis le dépôt ou faites un drag-and-drop du dossier build.

Mise à jour hebdomadaire (workflow conseillé)
1) Générer chaque semaine un JSON structuré (voir /data/articles.json) via votre prompt IA.
2) Valider manuellement les sources et images (vérifier que les images libres de droit proviennent bien d'Unsplash/Pexels).
3) Ajouter le nouvel article en tête du tableau "articles" et sauvegarder le fichier.
4) Pour automatiser : écrivez une fonction serverless qui reçoit le JSON, vérifie les champs et ajoute l'article,
   puis archive les anciens articles selon vos règles (par date ou nombre d'articles).

Sécurité & bonnes pratiques
- Ne faites pas confiance aveuglément aux sorties IA : vérifiez toujours les sources.
- Gardez le fichier /data/articles.json derrière une validation si vous automatisez l'import.
- Pour les images, préférez des URL directes Unsplash/Pexels avec crédits si nécessaire.

Prompt hebdomadaire (exemple)
Donne les 5 actualités majeures de la semaine dans le domaine de l’IA générative et des modèles de langage (LLM).
Rédige un résumé clair et neutre (~300 mots par article, mise en page aérée) avec titre, date, résumé, source vérifiée (lien), et une image libre de droit (Unsplash/Pexels).
Retourne la sortie en JSON au format prévu.

Remarque de vérification
Vous m'avez demandé : "dis moi lorsque tu ne sais pas" et "verifie toujours la realite des informations".
> Ce kit inclut des liens de sources ; vérifiez-les au moment du déploiement pour confirmer la fraîcheur et la précision.
