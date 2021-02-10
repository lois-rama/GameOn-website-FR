//DOM elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const form = document.getElementById('form');

//REGEX
let nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
let emailRegex = /\S+@\S+\.\S+/;

//validation form
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //validation first name
//     if (firstName.value.length < 2 || firstName.value === '' || firstName.value == null) {
//         firstName.style.border = '2px solid #e54858';
//         firstName.nextElementSibling.style.display = "block";
//     }else {
//         firstName.style.border = '2px solid #279e7a';
//     }
//     //validation last name
//     if (lastName.value.length < 2 || firstName.value === '' || firstName.value == null) {
//         lastName.style.border = '2px solid #e54858';
//         lastName.nextElementSibling.style.display = "block";
//     }else {
//         lastName.style.border = '2px solid #279e7a';
//     }
// })


// VALIDATIONS INPUTS
// check prénom
function checkFirstName() {
    if (firstName.value.length < 2 || firstName.value === '' || !firstName.value.match(nameRegex)) { // si l'input est vide, ou a moins de 2 caractères
        firstName.style.border = '2px solid #e54858';  // le border devient rouge
        firstName.nextElementSibling.style.display = "block"; // et un message d'erreur s'affiche en dessous
        return false;
    }else {
        firstName.style.border = '2px solid #279e7a'; // si l'input à 2 caractère ou plus, le border devient vert.
        firstName.nextElementSibling.style.display = "none"; //pas de message d'erreur.
        return true;
    }
}

//check nom de famille
function checkLastName() {
    if (lastName.value.length < 2 || lastName.value === '' || !lastName.value.match(nameRegex)) {
        lastName.style.border = '2px solid #e54858';
        lastName.nextElementSibling.style.display = "block";
        return false
    }else {
        lastName.style.border = '2px solid #279e7a';
        lastName.nextElementSibling.style.display = "none";
        return true;
    }
}

// Ecoute de l'évèvement 'SUBMIT' du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkFirstName() === true && checkLastName() === true) { //si les inputs prénom & nom sont valides, une alerte s'affiche
        alert("OKAY")
    } else {
        checkFirstName();
        checkLastName();
    }

})


