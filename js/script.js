
// list of candidate for the party
var listaNomi = ["jason","grace"];

// nome = parseInt(prompt("inserisci il nome"));
var message ='';
// this methods transforms i = 0( i becomes zero) and i is less than 5 , i adds up plus one
for (var i = 0; i < 5; i++) {
var nome = prompt("inserisci il tuo cognome");
console.log(nome[i]);

listaNomi.sort();

console.log("Added " + nome);
listaNomi.push(nome);

}

// if we dont want a particular person to have access to the party we can use this method below

// if( nome >= listaNomi){
//
// document.getElementById('result').innerHTML ="welcome invitess your name has been adeede to the list " + listaNomi;
// }
//  else {
//   message = "sorry you are not invited";
//   document.getElementById('result2').innerHTML ="sorry you cant access the live party but your details have been saved";
// }










console.log(listaNomi);
