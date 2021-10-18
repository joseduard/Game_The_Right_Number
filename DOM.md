# DOM

Le DOM pour Document Object Model est la structure dans la mémoire de notre navigateur qui va représenter notre page Web. C'est avec cette structure (en mémoire) que l'on va venir intéragir pour modifier la page (on ne va pas modifier directement le fichier `.html`).

## En JS

En JS "Front" il existe une variable globale, toujours accessible qui sera la base de toutes intéraction avec le DOM.

C'est la variable `window`.

Pour ne pas à avoir à la répeter tt le temps on peut accéder directement aux propriétés et aux méthodes qui sont dans `window`.

Donc pas besoin d'écrire

```javascript
    window.alert('Coucou !');
```

On appeler directement

```javascript
    alert('Coucou !');
```

On peut considérer que la variable `window` représente notre navigateur, c'est en passant par elle que l'on va pouvoir accéder à l'adresse, à l'historique, à la console... et au DOM.

## `document`

La propriété `document` de l'objet `window` est le point d'entrée sur le DOM.

Cette propriété à de nombreuse méthodes et sous propriété intéréssante.

### `createElement`

On peut créer de nouveau **"Element"** (l'équivalent d'une balise mais du point de vu du DOM) avec cette fonction.

On donnera en argument le type de balise que l'on veut créer.

```javascript
document.createElement('h1');
```

Pour faire apparaître cete balise dans le DOM il faut l'ajouter en tant qu'"enfant" d'un parent.

### body

`document.body` fait référence à la balise `<body>` (mais dans le DOM) => `document.body` fait référence à l'Element body.

C'est utile pour insérer des éléments à la racine de la page.

### `getElementById()`

C'est une fonction qui permet de récupérer **1** l'élément du DOM qui a l'id donné en argument.

### `getElementsByClassName()`

C'est une fonction qui permet de récupérer **plusieurs** éléments du DOM qui partagent la classe donnée en argument.

## Element

Petite précision : On va parfois voir le terme **Element** et parfois le terme **Node**. On peut considérer qu'il s'agit de la même chose.

### `appendChild()`

`appendChild()` est une méthode des Node prenant en paramètre un autre Node et permet de l'ajouter en tant qu'enfant dans le DOM.

### `textContent`

C'est une **propriété** qui permet de définir du contenu textuel pour une balise.

### `classList`

La propriété `classList` est un objet qui permet d'intéragir avec les classes de mes éléments dans le DOM.

Cet objet dispose de plusieurs méthode :

```javascript
// Pour ajouter une classe
element.classList.add('main-title');

// Pour supprimer une classe
element.classList.remove('main-title');

// etc...
```

Pour voir ce qu'il possible de faire je n'hésite à aller voir la [doc](https://developer.mozilla.org/fr/docs/Web/API/Element/classList).

### `id`

`id` est une propriété qui permet de lire / modifier l'id de la balise.

### `value`

La propriété `value` existe pour les Node de formulaire et permet d'intéragir avec la valeur saisie.

### `innerHTML`

`innerHTML` est une propriété "magique" des éléments. Elle permet de définir à l'aide d'une string un contenu HTML pour notre balise (les balises dans notre string seront donc chargé dans le DOM.