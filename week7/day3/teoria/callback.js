console.log('collegato!');


//conto fino a 3, poi stampo messaggio in console.

let countUntilThree = function() {
    setTimeout(() => {
        console.log('conto fino a 3...')
    }, 3000)
}
let start = () => {
    countUntilThree();
    console.log('...fatto');
}

// start();

let countUntilThreeWithCallback = function(func) {
    setTimeout(() => {
        console.log('conto fino a 3...')
        func();
    }, 3000)
}

let startWithCallback = () => {
    countUntilThreeWithCallback(() => 
    console.log('...fatto'));
}

startWithCallback();
