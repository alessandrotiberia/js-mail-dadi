/*Mail
Crea una lista di email di invitati ad una festa.

Chiedi all utente la sua email,

controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.

Nota: 
Non è necessario provvedere alla validazione delle email, però se volete è una feature ben accetta. */

//creare lista di email
let email = ["mail0", "mail1", "mail2", "mail3", "mail4", "mail5", "mail6"];

//prompt per chiedere utente la sua email
let utente = prompt("inserire la propria email")

//variabile per trovare email booleana
let trova_email = false;

//scorri lista e dice guardo da 0 a 6
for (let i = 0; i <= 6; i++) {
    // se utente inserisce email corretta dentro i 
    if (utente === email[i]) {
        trova_email = true; // qui diventa vero esci dal ciclo

    }
} // se controllo ok stampa altrimenti non ok accesso negato
if (trova_email === true) {
    console.log("esito controllo ok");

} else {
    console.log("accesso negato");

} 