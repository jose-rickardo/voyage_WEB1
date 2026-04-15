const aparitionAbout = document.querySelector(".second-page");

function compteur(nombre, fin, duree, uniter = "%") {
  let currentValue = 0;
  const step = fin / (duree / 10);
  let interval = setInterval(() => {
    if (currentValue >= fin) {
      clearInterval(interval);
    } else {
      currentValue += step;
      nombre.textContent = Math.floor(currentValue) + uniter;
    }
  }, 40);
}

const pourcentage = document.getElementById("statistique_satisfied");
const numberVisiteur = document.getElementById("statistique_visited");
const experienceDeTravaill = document.getElementById(
  "statistique_experience_in_the_travel"
);

// pour le compteur automatique si le 
if (window.scrollY > 300) {
  compteur(pourcentage, 99, 4000, "%");
  compteur(numberVisiteur, 220, 3000, "");
  compteur(experienceDeTravaill, 50, 3000, "");
} else {
  compteur(pourcentage, 0, 4000, "%");
  compteur(numberVisiteur, 0, 3000, "");
  compteur(experienceDeTravaill, 0, 3000, "");
}
