//DICHIARAZIONE VARIABILI

const reset = document.getElementById('c');
const displayed = document.getElementById('display');
const piu = document.getElementById('+');
const meno = document.getElementById('-');
const per = document.getElementById('*');
const diviso = document.getElementById('/');
var operazione = '';
var risultato = '';
var operatore;
var check;

//FUNZIONI

function display(_num) {
    if(!check){ //se è vuoto, scrivi
        displayed.innerHTML += _num;
        operazione += _num;
        console.log('operazione: ' + operazione);
    }else{ //altrimenti elimina e riscrivi
        displayed.innerHTML = '&nbsp';
        displayed.innerHTML += _num;
        operazione += _num;
        console.log('operazione: ' + operazione);
        check=false; //imposto la variabile di controllo
    }
    
}

function settaOperatore(_operator) {
    operazione += _operator;
    displayed.innerHTML = operazione;
    // displayed.innerHTML = '&nbsp';
}

function impostaDecimale(_decimale){
    operazione += _decimale;
    displayed.innerHTML = operazione;
}

function result() {
    console.log('eval: ' + eval(operazione));
    risultato = eval(operazione);
    displayed.innerHTML = risultato;
    operazione = '';
    check=true;
    
}

function resetta() {
    displayed.innerHTML = '&nbsp';
    operazione = '';
    console.log(operazione);
}