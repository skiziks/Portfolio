// Récupère l'élément du menu burger
var burgerMenu = document.querySelector('.hamburger');

// Initialise la variable pour la position de scroll précédente
var prevScrollpos = window.pageYOffset;

// Ajoute un événement de scrolling sur la fenêtre
window.onscroll = function() {
  // Récupère la position de scroll actuelle
  var currentScrollPos = window.pageYOffset;
  // Vérifie si la position de scroll actuelle est supérieure à la position de scroll précédente
  if (prevScrollpos > currentScrollPos) {
    // Si la position de scroll actuelle est inférieure à la position de scroll précédente, affiche le menu burger
    burgerMenu.style.display = "block";
  } else {
    // Sinon, cache le menu burger
    burgerMenu.style.display = "none";
  }
  // Met à jour la position de scroll précédente avec la position de scroll actuelle
  prevScrollpos = currentScrollPos;
}
