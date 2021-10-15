//Voci mon object dans un variable global (non recomendée). Ici j'ai de propietes a utiliser plus tard dans mes functions
// searchNumber et attemps on mets de valeur null pour faire evoluer dynamiquement à partir de:
// game.searchedNumber = generateRandomValue(game.minValue, game.maxValue);
// qui a la fois va decla,cher la function generateRandomValue en lui donnant mixValue et maxValuie comme arguments
var game = {
  searchedNumber: null,
  attemps: null,
  minValue: 0,
  maxValue: 100,
  score: [],
};
console.log("Je suis la #1", game)
// Voici ma function pour recuperer un nombre aleatoire. Elle est déclanché et utilise dans la function play()
function generateRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log("Je suis la #2" + generateRandomValue)
// Voici ma function play qui lance le jeux
// game.serchedNumber ajoute dans l'object game la valeur de le resultat ou return de la function generateRandomValue
// var enteredNumber va stocker la reponse d'utilisateur a la question " Quel est le nombre à trouver"
function play() {
  game.searchedNumber = generateRandomValue(game.minValue, game.maxValue);
  console.log("number searched is:" + game.searchedNumber);
  var enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));
  console.log("Je suis la #3", enteredNumber)
  // On va ajouter la valeur 1 à la propriete attemps, il est comme notre conteur, il commence en 1
  game.attemps = 1;
  // tant que la proposition et fause on le permet de reproposer un nouveu nombre != c'est l'inverse de === prend en compte le type de la valeur
  // (proposition !== randomNumber) sera true si c'est different et false si c'est egal
  // (proposition === randomNumber) sera false si c'est different et true si c'est egal
  // Ici c'est comment dire "si le nombre choisi es different au nombre aleatoire" c'est true on passe dans le if
  while (enteredNumber != game.searchedNumber) {
    if (enteredNumber < game.searchedNumber) {
      // on ecrase la reponse initial
      enteredNumber = prompt("trop petit, veuillez rééssayer");
    } else {
      // on ecrase la reponse
      enteredNumber = prompt("trop grand, veuillez rééssayer");
    }
    // on peut mettre le compteur dans le if et le else (conditions et deux fois) mais pour l'ecrire une seule fois on le mets dans la boucle while
    // compteur++;
    // game.attemps += 1 va ajouter 1 et stocker la valeur dernier chaque boucle ou chaque essai
    game.attemps += 1;
  }
  console.log("Je suis la #4", game.attemps)
  // Si on sors de la boucle on sait qu'on est trouve le bon nombre et l'alert se declanche
  // game.attemps equivaut au numero d'essais apres avoir sorti de la boucle while
  alert("Vous avez gagné en " + game.attemps + " essais!!"); // Il sors de la
  // on push dans le tableau score qui est dans e object game chaque fois qu'il gagne
  game.score.push(game.attemps);
  console.log( "on vien de faire le push",game.score, typeof game.score);
}
console.log("je suis la avant le do #5")
do {
  // d'abord execute l'action (function play();), c'est un block de instructions, on est sure que la boucl e sera execute a moins une fois
  play();
} while (confirm("Désirez-vous rejouer ? ")); // fait la condition repetitive, TANT qu'il est true il va executer do play() et quand il sera false il va sortir de la boucle.
console.log("je suis la j'ai sortie de la boucle 6")
// Pour parcourir notre tableau on va utiliser la boucle for
for (var scoreIndex = 0; scoreIndex < game.score.length; scoreIndex++) {
  console.log(
    "Partie, qui corresponde au index+1 ",
    // on met +1 car la partir commence en 1
    scoreIndex + 1,
    " : ",
    // game score va stocker les valeurs dans le tableau chaque valeur avec un index
    // dans scoreIndex sont parcouru chaque valeur du tableau selon l'ordre du index
    game.score[scoreIndex],
    "essais qui correspondent au valeurs du tableau score"
    
  );
}
