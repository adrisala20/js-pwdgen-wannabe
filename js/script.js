/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

let nome = prompt ('quale è il tuo nome?');
let cognome = prompt ('quale è il tuo cognome?');
let preferito23 = prompt ('quale è il tuo colore preferito?');
let nomeCognomePreferito23= nome + cognome + preferito23;
console.log (nomeCognomePreferito23)

document.getElementById('utente').innerHTML= 'ciao! il tuo nome è: ' + nome + ', il tuo cognome è: ' + cognome + ' e il tuo colore preferito è: ' + preferito23;
