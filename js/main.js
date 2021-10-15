//Voci mon object dans un variable global (non recomendée)
var game = {
  searchedNumber: null,
  attemps: null,
  minValue: 0,
  maxValue: 100,
  score: [],
};

// Voici ma function pour recuperer un nombre aleatoire
function generateRandomValue(min, max) {
  // On recupére un nombre aleatoire t on l'stock dans la variable solution
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

// Voici ma function play lance le jeux
function play() {
  game.searchedNumber = generateRandomValue(game.minValue, game.maxValue);
  console.log("number searched is:" + game.searchedNumber);
  var enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

  // le nombre d'essais apres var enteredNumber c'est 1
  game.attemps = 1;
  // tant que la proposition et fause on le permet de reproposer un nouveu nombre != c'est l'inverse de === prend en compte le type de la valeur
  // (proposition !== randomNumber) sera true si c'est different et false si c'est egal
  // (proposition === randomNumber) sera false si c'est different et true si c'est egal
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
    game.attemps += 1;
  }

  // Si on sors de la boucle on sait qu'on est trouve le bon nombre et l'alert se declonche
  alert("Vous avez gagné en " + game.attemps + " essais!!"); // Il sors de la
  // on push dnas le tableau chaque fois qu'il gagne
  game.score.push(game.attemps);
  console.log(game.score, typeof game.score);
}

do {
  // d'abord execute l'action (function play();), c'est un block de instructions, on est sure que la boucl e sera execute a moins une fois

  play();
} while (confirm("Désirez-vous rejouer ? ")); // fait la condition repetitive, TANT qu'il est true il va executer do play() et quand il sera false il va sortir de la boucle.

// Pour parcourir notre tableau on va utiliser la boucle for
for (var scoreIndex = 0; scoreIndex < game.score.length; scoreIndex++) {
  console.log(
    "Partie, ",
    scoreIndex + 1,
    " : ",
    game.score[scoreIndex],
    "essais"
  );
}
