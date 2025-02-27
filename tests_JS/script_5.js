const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
// Quel est livre le plus emprunté ?
// Quel est le livre le moins emprunté ?
// Trouve le livre avec l'ID: 873495 ;
// Supprime le livre avec l'ID: 133712 ;
// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

const allrented = books.every(book => book.rented > 0);
console.log("Tous les livres ont-ils été empruntés au moins une fois ?", allrented);

const maxRented = Math.max(...books.map(book => book.rented));
const livrePlusEmprunte = books.find(book => book.rented === maxRented);
console.log("Livre le plus emprunté :", livrePlusEmprunte);

const lessRented = Math.min(...books.map(book => book.rented));
const livreMoinsEmprunte = books.find(book =>book.rented === lessRented);
console.log("Le livre le moins emprunté :", livreMoinsEmprunte);

const search = books.find(book=>book.id === 873495)
console.log("Le livre avec l'id 873495 est :", search)

const booksSansID133712 = books.filter(book => book.id !== 133712);
console.log("Livres après suppression de l'ID 133712 :", booksSansID133712);

const livresTries = booksSansID133712.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", livresTries);