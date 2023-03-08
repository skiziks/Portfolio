var btnWeb = document.querySelector('#btnWeb');
var btnJeux = document.querySelector('#btnJeux');
var btnGraph = document.querySelector('#btnGraph');
var btnAud = document.querySelector('#btnAud');

var sectionWeb = document.querySelector('#Web');
var sectionJeux = document.querySelector('#jeux');
var sectionGraph = document.querySelector('#Graph');
var sectionAud = document.querySelector('#Aud');

btnWeb.addEventListener('click', WebAppear);
btnJeux.addEventListener('click', JeuxAppear);
btnGraph.addEventListener('click', GraphAppear);
btnAud.addEventListener('click', AudAppear);

function WebAppear() {
    sectionWeb.classList.remove('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
function JeuxAppear() {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.remove('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
function GraphAppear() {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.remove('disappear');
    sectionAud.classList.add('disappear');
}
function AudAppear() {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.remove('disappear');
}







// Pour la mise en relation des sections par rapport à l'index

// Récupérer le paramètre "section" dans l'URL
const params = new URLSearchParams(window.location.search);
const sectionName = params.get('section');
console.log(sectionName)

if (sectionName==='jeux') {
    console.log("test")
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.remove('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName==='Web') {
    console.log("test2")
    sectionWeb.classList.remove('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName==='Graph') {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.remove('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName==='Aud') {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.add('disappear');
    sectionAud.classList.remove('disappear');
}


//   const params = new URLSearchParams(window.location.search);
//   const sectionName = params.get('section');

//   // Cacher toutes les sections sauf celle qui correspond au paramètre
//   const sections = document.querySelectorAll('section');
//   sections.forEach((section) => {
//     if (section.id !== sectionName) {
//       section.classList.add('disappear');
//     }
//   });

//   // Ajouter un écouteur d'événements sur chaque bouton
//   const buttons = document.querySelectorAll('.bouton');
//   buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // Empêcher la soumission du formulaire
//       event.preventDefault();

//       // Récupérer l'ID de la section correspondant au bouton
//       const sectionName = event.currentTarget.id.replace('btn', '');

//       // Cacher toutes les sections sauf celle qui correspond au bouton
//       sections.forEach((section) => {
//         if (section.id !== sectionName) {
//           section.classList.add('disappear');
//         } else {
//           section.classList.remove('disappear');
//         }
//       });
//     });
//   });

