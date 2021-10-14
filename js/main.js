function play() {
    // On recupere la saisi de l'utilisateur avec le promp et on le met dans la variable reponse. On transforme la saisie en nombre avec parseInt
    var reponse = parseInt(prompt("Veuillez saisir un nombre svp"), 10);
    // C'est pour demander une fois, apres il va changer
    var solution = Math.round(Math.random() * 500); // On recupére un nombre aleatoire t on l'stock dans la variable solution
    var compteur = 1; // De façon logique le premier nombre, on l'initialise donc a 1
    console.log(solution);
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
  
  
  
  do { // d'abord execute l'action, c'est un block de instructions
      play();
  } while (confirm("Désirez-vous rejouer ? ")); // fait la condition repetitive, TANT qu'il est true il va executer do play() et quand il sera false il va sortir de la boucle.
  
  
  
  