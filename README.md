# générateur-de-cartes-de-visites

Objectifs:

    Créer une instance d'application et un composant racine
    Utiliser les propriétés data
    Comprendre le rendu dynamique

 

Sujet: 

Dans cet atelier, nous allons créer un générateur de carte de visite. Pour cela, nous allons commerncer dans cette partie à créer le visuel de la carte de visite. Suivez les étapes ci-dessous:

- Commencez par créer un nouveau projet composé d'une page index.html, d'un fichier de style, d'un script et sans oublier d'importer Vue.js.

- Ensuite créez en HTML et CSS un visuel de carte de visite composé d'un nom, d'un prénom, d'un nom d'entreprise, d'un intitulé de poste, d'une adresse email et d'un numéro de téléphone.

- Parmis les classes, créez-en pour gérer spécifiquement la couleur du fond, la couleur du texte et la taille de la police. Vous devez créer plusieurs variantes dans votre style CSS pour chaque classe, par exemple: .red-background (fond rouge), .blue-background (fond bleu), etc... L'idée est de pouvoir changer le style de la carte de visite en changeant simplement la classe utilisée.

- Créez maintenant une instance d'application Vue ainsi qu'un composant racine dans votre script. N'oubliez pas de créer, si ce n'est pas déjà fait, un élément englobant le contenu HTML de votre app (comme une <div>) et de lui attribuer un id. Cet id devra être utilisé pour monter l'application.

- Ajoutez au composant racine des data properties contenant les informations de la carte de visite: nom, prénom, etc... et utilisez dans le HTML de votre visuel de carte de visite

- Enfin ajoutez au composant racine des data properties contenant le nom des classes à attribuer aux différent éléments HTML et utilisez les à l'aide de la directive v-bind
  
  Objectifs:

    Créer une instance d'application et un composant racine
    Utiliser les propriétés data
    Comprendre le rendu dynamique
    Créer des méthodes
    Savoir écouter des évènements

 

Sujet: 

Au fil de cette deuxième partie de l'atelier, nous allons ajouter des champs de saisie et boutons permettant de personnaliser en temps réel le contenu de la carte de visite. Vous devez reprendre le projet réalisé lors de la partie précédente puis suivre ces étapes:

- Ajoutez un <input> sur votre page permettant à l'utilisateur de saisir son nom.

- Créez ensuite un écouteur d'évènement sur l'élement <input> pour détecter l'évènement de saisie.

- Attribuer à cet écouteur d'évènement une méthode qui modifiera la valeur de la data property correspondant au nom, elle devra prendre la valeur saisie par l'utilisateur. Chaque saisie sur l'input sera con immédiatement visible sur la carte de visite.

- Recommencez les étapes précédentes pour toutes les données.

- Ajoutez maintenant une serie de bouton permettant de choisir une couleur de fond.

- Créez un écouteur d'évènement au clic sur chaque bouton.

- Attribuez à chacun de ces écouteurs évènements une méthode modifiant la data property correspondant à la classe de la couleur de fond de la carte de visite.
