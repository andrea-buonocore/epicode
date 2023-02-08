/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 50;
const num2 = 10;



if(num1 > num2){
  document.getElementById('es1').innerHTML = num1 + ' è il numero più grande';
}
else if(num1<num2){
  document.getElementById('es1').innerHTML = num2 + ' è il numero più grande';
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 8;

if(num3 != 5){
  document.getElementById('es2').innerHTML = 'not equal';
}
else{
  document.getElementById('es2').innerHTML = 'equal';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num4 = 5;

if((num4 % 5) == 0){
  document.getElementById('es3').innerHTML = num4 + ' è divisibile per 5';
}
else{
  document.getElementById('es3').innerHTML = num4 + ' non è divisibile per 5';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num5 = 6;
const num6 = 2;

if((num5 || num6) == 8){
  document.getElementById('es4').innerHTML = 'il valore di uno delle due variabili è 8';
}
else if ((num5+num6) == 8){
  document.getElementById('es4').innerHTML = 'la somma di ' + num5 + ' e ' + num6 + ' equivale a 8';
}
else if ((num5-num6) == 8){
  document.getElementById('es4').innerHTML = 'la differenza fra ' + num5 + ' e ' + num6 + ' equivale a 8';
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 50;
var spedizione = 10;
var checkout;
if(totalShoppingCart>50){
  document.getElementById('es5').innerHTML = 'hai diritto alla spedizione gratuita, pagherai solo ' + totalShoppingCart;
}
else{
  checkout = totalShoppingCart+spedizione
  document.getElementById('es5').innerHTML = 'costo totale = ' + checkout;
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var sconto = totalShoppingCart*0.2;
console.log(`sconto = ${sconto}`);

totalShoppingCartScontato = totalShoppingCart-sconto;
console.log(`prezzo finale = ${totalShoppingCartScontato}`);

if(totalShoppingCartScontato>50){
  document.getElementById('es6').innerHTML = 'hai diritto alla spedizione gratuita, pagherai solo ' + totalShoppingCartScontato;
}
else{
  checkout = totalShoppingCartScontato+spedizione
  document.getElementById('es6').innerHTML = 'costo totale = ' + checkout;
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var num7 = 4;
var num8 = 7;
var num9 = 8;
var primo,secondo,terzo;

if(num7>num8 && num8>num9){
  if(num8>num9){
    document.getElementById('es7').innerHTML = `N1. ${num7}, N2. ${num8}, N3. ${num9}`;
  }
  else{
    document.getElementById('es7').innerHTML = `N1. ${num7}, N2. ${num9}, N3. ${num8}`;
  }
  
}else if (num8>num7 && num8>num9){
  if(num7>num9){
    document.getElementById('es7').innerHTML = `N1. ${num8}, N2. ${num7}, N3. ${num9}`;
  }
  else{
    document.getElementById('es7').innerHTML = `N1. ${num8}, N2. ${num9}, N3. ${num7}`;
  }
}
else if (num8>num7 && num8>num9){
  if(num7>num9){
    document.getElementById('es7').innerHTML = `N1. ${num8}, N2. ${num7}, N3. ${num9}`;
  }
  else{
    document.getElementById('es7').innerHTML = `N1. ${num8}, N2. ${num9}, N3. ${num7}`;
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
var valoreFornito = 5;
if(typeof(valoreFornito) === 'number'){
  document.getElementById('es8').innerHTML = `${valoreFornito} è un numero`;
}
else{
  document.getElementById('es8').innerHTML = `${valoreFornito} non è un numero`;
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num10 = 3;

if(num10%2 == 0){
  document.getElementById('es9').innerHTML = `${num10} è pari`;
}
else{
    document.getElementById('es9').innerHTML = `${num10} è dispari`;
}

// ESERCIZIO 10
//  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 5;
  if (val < 10) {
    document.getElementById('es10').innerHTML = 'Meno di 10';
    } else if (val < 5) {
      document.getElementById('es10').innerHTML = 'Meno di 5';
    } else {
      document.getElementById('es10').innerHTML = 'Maggiore o uguale a 10';
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);

document.getElementById('es11').innerHTML = 'guarda in console';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);
document.getElementById('es12').innerHTML = 'guarda in console';
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

me.skills.pop();
console.log(me);
document.getElementById('es13').innerHTML = 'guarda in console';

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array = [];
array.push('1', '2', '3','4','5','6','7','8','9','10');
document.getElementById('es14').innerHTML = array;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(9, 1,'100');
console.log(array);
document.getElementById('es15').innerHTML = array;
