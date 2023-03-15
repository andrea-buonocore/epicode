console.log('collegato!');

let countUntilThreeWithPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log('ho contato fino a 3...');
            if(5<2){
                console.log('5 è maggiore di 3!');
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
}

let startWithPromise = () => {
    countUntilThreeWithPromise()
    .then(() => {
        setTimeout(() => {
            console.log('fatto!');
        },3000)
    })
    .catch(() => {
        console.log('Errore!');
    })
}

startWithPromise();