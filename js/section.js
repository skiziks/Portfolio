// Récupérer le paramètre "section" dans l'URL
const params = new URLSearchParams(window.location.search);
const sectionNumber = params.get('section');

// Afficher la section correspondante
const sectionToShow = document.querySelector(`.section-${sectionNumber}`);
sectionToShow.classList.remove('disappear');