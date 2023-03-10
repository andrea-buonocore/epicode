/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

let myself = 'Andrea';
console.log(myself)

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];

pets.forEach((animal) => console.log('animale:', animal));

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/

pets.push('monkey');
console.log('pets.push()', pets);

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop();
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

for (let i = 0; i < pets.length; i++) {
    if (pets[i].slice(0, 1) === 'c') {
        console.log(pets[i], 'true');
    }
    else {
        console.log(pets[i], 'false');
    }
}
/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = 'AA000BB';
}

console.log('cars', cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

const addObj = () => {
    let newObj = {
        brand: 'newBrand',
        model: 'newModel',
        color: 'newColor',
        trims: ['purple', 'red', 'pink']
    };
    cars.push(newObj);
}

addObj();

console.log('new obj', cars);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui

const saveFirstElement = () => {
    cars.forEach((car) => {
        justFirstTrims.push(car.trims[0])
    })
}

saveFirstElement();

console.log('array 1o elemento cars.trims', justFirstTrims);

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.length <= 4) {
        console.log(i + ' Fizz');
    }
    else {
        console.log(i + ' Buzz')
    }
}

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

let moreAvailableTrims = cars.filter((car) => {
    return car.trims.length > 2;
})

console.log(moreAvailableTrims);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

let strings = cars.map((car) => {
    return `${car.brand} ${car.model}`;
})

console.log(strings);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (numericArray[i] != 32) {
    console.log('numero ', numericArray[i]);
    i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
    switch (charactersArray[i]) {
        case 'g':
            newArray.push(7);
            break;
        case 'n':
            newArray.push(14);
            break;
        case 'u':
            newArray.push(21);
            break;
        case 'z':
            newArray.push(26);
            break;
        case 'd':
            newArray.push(4);
            break;
    }
}

console.log(newArray);  
