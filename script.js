/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// utente avrà numero random max di 6, dato che arrotonda per difetto darà da 1 a 5.
let numero_utente = Math.floor(Math.random() * 6) +1; //agg +1 per arrivare a 6
let numero_pc = Math.floor(Math.random() * 6) +1;
// se numero utente è maggiore di pc vince utente.
if (numero_utente > numero_pc) {
    console.log(numero_utente, numero_pc, "vince utente");
// se numero pc è maggiore numero utente vince pc
} else if (numero_pc > numero_utente) {
    console.log(numero_utente, numero_pc, "vince pc");

} else {
    console.log("numero utente pari al numero del pc");
}
