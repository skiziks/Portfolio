var btnWeb = document.querySelector('#btnWeb');
var btnJeux = document.querySelector('#btnJeux');
// var btnGraph = document.querySelector('#btnGraph');
var btnAud = document.querySelector('#btnAud');

var sectionWeb = document.querySelector('#Web');
var sectionJeux = document.querySelector('#jeux');
// var sectionGraph = document.querySelector('#Graph');
var sectionAud = document.querySelector('#Aud');

btnWeb.addEventListener('click', WebAppear);
btnJeux.addEventListener('click', JeuxAppear);
// btnGraph.addEventListener('click', GraphAppear);
btnAud.addEventListener('click', AudAppear);

function WebAppear() {
    sectionWeb.classList.remove('disappear');
    sectionJeux.classList.add('disappear');
    // sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
function JeuxAppear() {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.remove('disappear');
    // sectionGraph.classList.add('disappear');
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
    // sectionGraph.classList.add('disappear');
    sectionAud.classList.remove('disappear');
}







// Pour la mise en relation des sections par rapport à l'index

// Récupérer le paramètre "section" dans l'URL
const params = new URLSearchParams(window.location.search);
const sectionName = params.get('section');

if (sectionName === 'jeux') {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.remove('disappear');
    // sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName === 'Web') {
    sectionWeb.classList.remove('disappear');
    sectionJeux.classList.add('disappear');
    // sectionGraph.classList.add('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName === 'Graph') {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    sectionGraph.classList.remove('disappear');
    sectionAud.classList.add('disappear');
}
else if (sectionName === 'Aud') {
    sectionWeb.classList.add('disappear');
    sectionJeux.classList.add('disappear');
    // sectionGraph.classList.add('disappear');
    sectionAud.classList.remove('disappear');
}
