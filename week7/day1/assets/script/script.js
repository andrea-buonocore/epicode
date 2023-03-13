// es. 1

class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;   
    }

    compareAge(newUser){
        if(this.age > newUser.age){
            return `${this.firstName} ${this.lastName} è più vecchio di ${newUser.firstName} ${newUser.lastName}`;
        }
        else{
            return `${newUser.firstName} ${newUser.lastName} è più vecchio di ${this.firstName} ${this.lastName} `;
        }
    }

}

const user1 = new User ('Mario', 'Rossi', 32, 'Roma');
const user2 = new User ('Carlo', 'Bianchi', 41, 'Milano');
console.log(user1.compareAge(user2));
console.log(user2);

// --------


// es. 2

let petName = document.getElementById('petName');
let ownerName = document.getElementById('ownerName');
let species = document.getElementById('species');
let breed = document.getElementById('breed')
let btn = document.getElementById('btn');
let ulList = document.getElementById('petList');

class Pet {
    constructor (petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    compareOwner (newPet) {
        if(this.ownerName === newPet.ownerName){
            return true;
        }
        else return false;
    }
}

let petList = []

btn.addEventListener('click', () => {

    let newPet = new Pet(petName.value,ownerName.value,species.value,breed.value);
    let newLi = document.createElement('li');

    newLi.innerText = `${petName.value}, specie ${species.value}, razza ${breed.value}, proprietario ${ownerName.value}`;
    
    ulList.appendChild(newLi);

    petName.value = '';
    ownerName.value = '';
    species.value = '';
    breed.value = '';

})