document.addEventListener("DOMContentLoaded", () => {
  // Affichage de la date/heure
  const datetimeElement = document.getElementById("datetime");
  function updateDateTime() {
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }
  updateDateTime();
  setInterval(updateDateTime, 60000);

  // Gestion du thème clair/sombre
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀︎";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "🌙" : "☀︎";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Charger les articles
  fetch("data/articles.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("articles");
      data.articles.forEach((a) => {
        const article = document.createElement("article");
        article.innerHTML = `
          <h2>${a.titre}</h2>
          <p><em>${a.date}</em></p>
          <p>${a.resume}</p>
          <a href="${a.lien_source}" target="_blank">Source</a>
          <img src="${a.url_image}" alt="Image article">
        `;
        container.appendChild(article);
      });
    });
});
