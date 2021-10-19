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
console.log("1- Je suis juste avant la function generateRandomValue ", game);

// Voici ma function pour recuperer un nombre aleatoire. Elle est déclanché et utilise dans la function play()
function generateRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log("2 Je suis la, j'ai viens de generer mon nombre aleatoire" + generateRandomValue);

// Voici ma function play qui lance le jeux
// game.serchedNumber ajoute dans l'object game la valeur de le resultat ou return de la function generateRandomValue
// var enteredNumber va stocker la reponse d'utilisateur a la question " Quel est le nombre à trouver"
function play() {
  game.searchedNumber = generateRandomValue(game.minValue, game.maxValue);
  console.log("number searched is:" + game.searchedNumber);
  var enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));
  console.log("3 J'ai vien de poser la question et la reponse d'utilisateur c'est: ", enteredNumber)
  // On va ajouter la valeur 1 à la propriete attemps, il est comme notre conteur, il commence en 1
  game.attemps = 1;
  console.log("4 je viens de ajouter la valeur 1 dans la propriete attemps du objet game, donc la valeur au depart c'est " + game.attemps)
  // tant que la proposition et fause on le permet de reproposer un nouveu nombre != c'est l'inverse de === prend en compte le type de la valeur
  // (proposition !== randomNumber) sera true si c'est different et false si c'est egal
  // (proposition === randomNumber) sera false si c'est different et true si c'est egal
  // Ici c'est comment dire "si le nombre choisi ou saisi pour l'utilisateur es different au nombre aleatoire et que la saisi n'est pas null "anuler" on passe dans la condition" si c'est true on passe dans le if
  // Seulement ça: Number.isNaN(enteredNumber) nous donne true ou false donc !Number.isNaN(enteredNumber) c'est la negation
  while (enteredNumber !== game.searchedNumber && ! Number.isNaN(enteredNumber)) {
    if (enteredNumber < game.searchedNumber) {
      // on ecrase la reponse initial
      enteredNumber = parseInt(prompt("trop petit, veuillez rééssayer"));
    } else {
      // on ecrase la reponse
      enteredNumber = parseInt(prompt("trop grand, veuillez rééssayer"));
    }
    // on peut mettre le compteur dans le if et le else (conditions et deux fois) mais pour l'ecrire une seule fois on le mets dans la boucle while
    // compteur++;
    // game.attemps += 1 va ajouter 1 et stocker la valeur dernier chaque boucle ou chaque essai, on incremente le nombre de essais
    game.attemps += 1;
    console.log("J'ai fait un tour de la boucle, la valeur de attemps maintenant c'est: " + game.attemps);
  }

  console.log("5 J'ai sorti de la boucle car maintenant je vas faire la condition pour dire abandon ou dire gagne");
  if (Number.isNaN(enteredNumber)) {
    game.attemps = 'Abandon';
    console.log("6 J'ai ajoute 'abandon' dans attemps, neuveau valeu: " + game.attemps)
  } else {
  console.log("7 Je suis dans l'alert gagné et la valeur des attemps est : ", game.attemps)
  // Si on sors de la boucle on sait qu'on est trouve le bon nombre et l'alert se declanche
  // game.attemps equivaut au numero d'essais apres avoir sorti de la boucle while
  alert("Vous avez gagné en " + game.attemps + " essais!!"); // Il sors de la
  }
  // on push dans le tableau score qui est dans e object game chaque fois qu'il gagne
  game.score.push(game.attemps);

  console.log( "on vien de faire le push des attemps dans le tableau la valeur de score est",game.score, typeof game.score);
}

console.log("je suis juste avant d'executer la function pour la premier fois do{}")
do {
  // d'abord execute l'action (function play();), c'est un block de instructions, on est sure que la boucl e sera execute a moins une fois
  play();
} while (confirm("Désirez-vous rejouer ? ")); // fait la condition repetitive, TANT qu'il est true il va executer do play() et quand il sera false il va sortir de la boucle.
console.log("je suis la j'ai sortie de la boucle 6")

var resultTable = '';
resultTable += '<table>';
resultTable += '<tr>';
resultTable += '<th>Partie</th>';
resultTable += "<th>Nombre d'essais</th>";
resultTable += '</tr>';
// Pour parcourir notre tableau on va utiliser la boucle for
for (var scoreIndex = 0; scoreIndex < game.score.length; scoreIndex++) {

  resultTable += '<tr>'

  resultTable += '<td>' + (scoreIndex + 1) + '</td>';
  if (game.score[scoreIndex] === 'Abandon') {
    resultTable += '<td>Abandonnée</td>';
  }else{
    resultTable += '<td>' + game.score[scoreIndex] + ' essais</td>';
  }
  resultTable += '</tr>'
  
}

resultTable += '</table>';
// a la place de createElement on utilise innerHtml pour aficher les balises de tableau en html
document.body.innerHTML = resultTable;
