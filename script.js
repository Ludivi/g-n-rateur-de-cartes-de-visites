/* Composant racine */
const RootComponent = {
  /* Data properties */
  data() {
    return {
      lastname: "NOM", // Nom
      firstname: "Prénom", // Prénom
      occupation: "Poste", // Poste
      business: "Entreprise", // Entreprise
      email: "email@test.com", // Adresse email
      phone: "000000000000", // Numéro de téléphone
      theme: "", // Classe définissant le thème de couleur
    };
  },

  /* Methodes */
  methods: {
    /**
     * Gestion des champs de saisie
     * Cette méthode récupère le contenu du champs sur lequel l'èvènement
     * est détecté et modifie la data property correspondante.
     */
    handleInput(e) {
      this[e.target.name] = e.target.value;
    },
    /**
     * Changement de thèmes
     *
     */
    switchTheme() {
      switch (this.theme) {
        case "":
          this.theme = "red";
          break;
        case "red":
          this.theme = "blue";
          break;
        case "blue":
          this.theme = "green";
          break;
        default:
          this.theme = "";
          break;
      }
    },
  },
};

/* Création de l'instance d'application Vue et montage */
Vue.createApp(RootComponent).mount("#root");
