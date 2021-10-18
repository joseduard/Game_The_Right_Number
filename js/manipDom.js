// 1. Je créé une balise h1 avc la funtion createElement, on le passe comme argument la balise qu'on veut créer
var level1Title = document.createElement("h1");
console.log(level1Title)
// 2. J'insere cette balise dans le DOM avec la methode appendChild
document.body.appendChild(level1Title)
// 3 . J'insere de text avec le propiete textContent
level1Title.textContent = "Hello world"

var emphasis = document.createElement("em");
emphasis.textContent = "sous titre";
level1Title.appendChild(emphasis);

level1Title.classList.add('Main-Title');