

var game = {
  // On recupere la saisi de l'utilisateur avec le promp et on le met dans la variable (propriete)nombre recherche. On transforme la saisie en nombre avec parseInt
  numberSearched: parseInt(prompt("Quel est le nombre a trouver entre 0 et 500 ?"), 10),
  tryNumber : 1,
  minNumber:0,
  maxNumber:200,
};

function randomNumber(max) {
  // On recupére un nombre aleatoire t on l'stock dans la variable solution
  return Math.round(Math.random() * max)
}
var solution = randomNumber(game.maxNumber)
console.log(solution);

function play(reponse, compteur) {
    // tant que la proposition et fause on le permet de reproposer un nouveu nombre != c'est l'inverse de === prend en compte le type de la valeur
    // (proposition !== randomNumber) sera true si c'est different et false si c'est egal
    // (proposition === randomNumber) sera false si c'est different et true si c'est egal
    while (reponse != solution) {
      if (reponse < solution) {
        // on ecrase la reponse initial
        reponse = prompt("trop petit, veuillez rééssayer");
      } else {
        // on ecrase la reponse
        reponse = prompt("trop grand, veuillez rééssayer");
      }
      // on peut mettre le compteur dans le if et le else (conditions et deux fois) mais pour l'ecrire une seule fois on le mets dans la boucle while
      compteur++;
    }
  
    // Si on sors de la boucle on sait qu'on est trouve le bon nombre et l'alert se declonche
    alert("Vous avez gagné en " + compteur + " essais!!"); // Il sors de la
  }
  
  do { // d'abord execute l'action (function play();), c'est un block de instructions
      play(game.numberSearched, game.tryNumber);
  } while (confirm("Désirez-vous rejouer ? ")); // fait la condition repetitive, TANT qu'il est true il va executer do play() et quand il sera false il va sortir de la boucle.
  
  
  
  