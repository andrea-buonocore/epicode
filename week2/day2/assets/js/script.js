//Es. 1

const pi = '3.14';
let Aldo = 'Aldo';
{
    var cliente = 'cliente';
    var concatena = document.getElementById('concatena');
    concatena.innerHTML = Aldo + ', ' + cliente + ', ' + pi;
    
    const concatenaSecondo = Aldo + ', ' + cliente + ', ' + pi;
    document.getElementById('concatena2').innerHTML = concatenaSecondo;
}    

//Es. 3
var key1 = 'Mario';
document.getElementById('var').innerHTML = key1;

{
    let key1 = 'Carla';
    document.getElementById('let').innerHTML = key1;
}

document.getElementById('final').innerHTML = key1;

document.getElementById('let2').innerHTML = key1;

{
    let key1 = 'Carla';
    document.getElementById('let3').innerHTML = key1;
    document.getElementById('final2').innerHTML = key1;
}

//Es 4

const valoreIniziale = 15;
document.getElementById('iniziale').innerHTML += valoreIniziale;
console.log(valoreIniziale);

var addizione = valoreIniziale+valoreIniziale;
console.log(addizione);
var incremento = addizione++;
console.log(incremento);
document.getElementById('valore1').innerHTML +=  addizione + ', ' + incremento;

var sottrazione = valoreIniziale-10;
console.log('sottrazione = ' + sottrazione);

var decremento = sottrazione--;
console.log('decremento = ' + decremento);
document.getElementById('valore2').innerHTML += sottrazione + ', ' + decremento;

console.log('prima della moltiplicazione = ' + valoreIniziale);
var moltiplicazione = valoreIniziale*3;
console.log('moltiplicazione = ' + moltiplicazione);
document.getElementById('valore3').innerHTML += moltiplicazione;

var divisione = valoreIniziale/3;
document.getElementById('valore4').innerHTML += divisione;

document.getElementById('valore5').innerHTML += valoreIniziale + ' è un numero';