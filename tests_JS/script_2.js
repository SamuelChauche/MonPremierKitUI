// Fonction factorielle
const factorielle = (n) => n <= 1 ? 1 : n * factorielle(n - 1);

// Demander un nombre à l'utilisateur et afficher le résultat
const nombre = prompt("Entrez un nombre pour calculer sa factorielle :");
    console.log(`La factorielle de ${nombre} est : ${factorielle(nombre)}`);
