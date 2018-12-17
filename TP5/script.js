console.log('Hello world');
/*Partie 1 traitement de données*/
/*1.1 - En JavaScript, créez un tableau à 2 dimensions de chaînes de caractères correspondant au
tableau de profil-utilisateur suivant*/
let userProfile = [["Prénom", "Nom", "Age", "Ville", "Adresse mail", "Identifiant"],
["Mathias", "Ritrono", "34", "Nanres", "mr@yopmail.com", "1"],
["Salif", "Bamogo", "25", "Brest", "sb@yopmail.com", "2"],
["Kristina", "Pavlov", "20", "Villeurbanne", "kp@yopmail.com", "3"],
["Elise", "Seti", "30", "Grenoble", "es@yopmail.com", "4"],
["Pierrick", "Di Angelo", "18", "Starsbourg", "pd@yopmail.com", "5"],
["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail.com", "6"],
["Paige", "Anderson", "42", "Evry", "pa@yopmail.com", "7"]];

console.log(userProfile);

/*1.2 - En JavaScript, créez une fonction permettant d’ajouter au tableau un profil-utilisateur. Cette
fonction doit demander paramètres 5 chaînes de caractères*/

function completUser(firstName, name, age, city, mail, login){
  function newLogin(sequence){
    let i = 0;
    let currentElt;
    let currentEltIncremented = 0;
    let login = userProfile[userProfile-1];
    while (i < sequence.length) {
      currentElt = sequence[i];
      currentEltIncremented = currentElt + 1;
      let login = currentEltIncremented;
      i++;
  }
  let newUser = [firstName, name, age, city, mail, login];
  completArray.push(newUser);
};


/*1.3 - En JavaScript, créez une fonction qui prend en paramètre une chaîne de caractères
correspondant à une ville. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils
des utilisateurs habitant dans cette ville.*/


/*1.4 - En JavaScript, créez une fonction qui prend en paramètre une chaîne de caractères
correspondant à un prénom ou un nom. Cette fonction retourne, sous forme de tableau à 2
dimensions, les profils des utilisateurs ayant ce prénom ou ce nom.*/


/*1.5 - En JavaScript, créez une fonction qui prend en paramètre une chaîne de caractères
correspondant. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils des
utilisateurs dans lesquelles apparaissent la chaîne de caractères passée en paramètre.*/
