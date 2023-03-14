const showLocalStorage = document.getElementById('showLocalStorage');
const userName = document.getElementById('userNameId');
const btnSave = document.getElementById('btnSave');
const btnRemove = document.getElementById('btnRemove');
const form = document.getElementById('form');
var count = 0;


const addToLocalStorage = () => {
    // if(localStorage.getItem('userName')){
    //     var storageArray = JSON.parse(localStorage.getItem('userName'));
    //     document.getElementById('showLocalStorage').innerHTML = storageArray[0];
    // }
    // else {
    //     var storageArray = [];
    // }

    var storageArray = localStorage.getItem('userName')
        ? JSON.parse(localStorage.getItem('userName'))
        : [];

    storageArray.push({
        name: userName.value
    });
    localStorage.setItem('userName', JSON.stringify(storageArray));

    showLocalStorage.innerText = userName.value;

    userName.value = '';
}

const removeFromLocalStorage = () => {
    //controllo se esiste un local storage
    if (localStorage.getItem('userName')) {
        showLocalStorage.innerText = '';
        localStorage.removeItem('userName');
    }
    else
        alert('Nessun valore presente nel local storage!');
}


// ES 2

let i = 0;
const counter = () => {
    //controllo se c'è già un session storage attivo
    if (sessionStorage.getItem('count')) {
        i = parseInt(sessionStorage.getItem('count'));
        i++;
        document.getElementById('counter').innerText = i;
        sessionStorage.setItem('count', i);

    }
    else {
        sessionStorage.setItem('count', i);
        document.getElementById('counter').innerText = i;

    }
    
}


setInterval(counter, 1000);