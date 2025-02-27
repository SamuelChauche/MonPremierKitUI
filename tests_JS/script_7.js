// Fonction pour interagir avec le bot adolescent
function parlerAvecBot() {
    // Demander à l'utilisateur de saisir une phrase
    const phrase = prompt("Parle au bot adolescent :");

    // Règles de conversation du bot (par ordre de priorité)
    if (phrase === null || phrase.trim() === "") {
        // Si le message est vide ou annulé
        console.log("t'es en PLS ?");
    } else if (phrase.endsWith("?")) {
        // Si c'est une question
        console.log("Ouais Ouais...");
    } else if (phrase === phrase.toUpperCase()) {
        // Si l'utilisateur hurle (tout en majuscules)
        console.log("Pwa, calme-toi...");
    } else if (phrase.toLowerCase().includes("fortnite")) {
        // Si la phrase contient "Fortnite" (insensible à la casse)
        console.log("on s' fait une partie soum-soum ?");
    } else {
        // Pour tout autre phrase
        console.log("balek.");
    }
}

// Appeler la fonction pour démarrer la conversation
parlerAvecBot();