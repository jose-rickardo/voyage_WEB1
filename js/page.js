let scrol_debut = 0;
window.addEventListener("scroll", function () {
  const quandOnScroll =
    this.window.scrollY || document.documentElement.scrollTop;
  const bar = document.getElementById("nav-bar");
  const position = bar.getBoundingClientRect();
  if (quandOnScroll > scrol_debut) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#c7e3f7";
    bar.style.borderRadius = "0";
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.marginTop = "0";
    bar.style.transition = "0.5s";
  } else if (quandOnScroll === 0) {
    bar.style.position = "fixed";
    bar.style.width = "96%";
    bar.style.backgroundColor = "";
    bar.style.borderRadius = "10px";
    bar.style.margin = "25px";
    bar.style.marginLeft = "auto";
    bar.style.marginRight = "auto";
    bar.style.marginBottom = "auto";
    bar.style.left = "10px";
  } else if (quandOnScroll !== 0) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#c7e3f7";
    bar.style.borderRadius = "0";
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.marginTop = "0";
    bar.style.transition = "0.5s";
  }
  const aparitionAbout = document.querySelector(".second-page");
  const aparitionDestination = document.querySelector(".troisiem-page");
  const aparitionReservation = document.querySelector(".quatriem-page");
  const aparitionHotel = this.document.querySelector(".cinquiem-page");

  if (window.scrollY > 300) {
    aparitionAbout.classList.add("animationAbout");
  }
  if (window.scrollY > 800) {
    aparitionDestination.classList.add("animationDestination");
  }

  if (window.scrollY > 1300) {
    aparitionReservation.classList.add("animationReservation");
  }

  if (window.scrollY > 1900) {
    aparitionHotel.classList.add("animationHotel");
  }
});

//les bouton pour scroller automatiquement
const scrollHome = document.getElementById("nav-bar_list_1");
scrollHome.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//pour aller dans le about
const scrollAbout = document.getElementById("nav-bar_list_2");
scrollAbout.addEventListener("click", () => {
  window.scrollTo({
    top: 570,
    behavior: "smooth",
  });
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
  compteur(pourcentage, 99, 3000, "%");
  compteur(numberVisiteur, 220, 2000, "");
  compteur(experienceDeTravaill, 50, 2000, "");
});

//pour aller dans le destination
const scrollDestination = document.getElementById("nav-bar_list_3");
scrollDestination.addEventListener("click", () => {
  window.scrollTo({
    top: 1100,
    behavior: "smooth",
  });
});

//pour aller dans le hotel
const scrollHotel = document.getElementById("nav-bar_list_4");
scrollHotel.addEventListener("click", () => {
  window.scrollTo({
    top: 2190,
    behavior: "smooth",
  });
});

//pour aller dans le reservation
const scrollReservation = document.getElementById("nav-bar_list_5");
scrollReservation.addEventListener("click", () => {
  window.scrollTo({
    top: 1620,
    behavior: "smooth",
  });
});

//quand on est dans le about et si on veux faire une
// reservation on click sur reservation et ça scroll
// automatiquement
const boutonReservation = document.querySelector(".reservation");
boutonReservation.addEventListener("click", () => {
  window.scrollTo({
    top: 1620,
    behavior: "smooth",
  });
});
