const nombre = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

if (nombre < 1 || nombre > 25)
  console.log("Le nombre doit etre compris entre 1 et 25. Veuillez réessayer");
else
/*(0...nb).each do |i|*/

  for (let i = 0; i < nombre; i++) {
    const espace = i + 1;
    console.log("#".repeat(espace));
  }

