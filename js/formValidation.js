//DOM elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const form = document.getElementById('form');

//REGEX
let nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+$/;
let emailRegex = /\S+@\S+\.\S+/;


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

//check email
function checkEmail() {
    if (email.value.match(emailRegex)) { // si l'email est valide, match le Regex, 
        email.style.border = '2px solid #279e7a'; // le border est vert
        email.nextElementSibling.style.display = "none"; // pas de message d'erreur
        return true
    }else {
        email.style.border = '2px solid #e54858'; // sinon le border est rouge et le message d'erreur s'affiche
        email.nextElementSibling.style.display = "block";
        return false;
    }
}

//check date de naissance
function checkBirthdate() {
    if (birthdate.value < birthdate.min || birthdate.value > birthdate.max) { //si la date de naissance ne se trouve pas entre le min et le max définit dans le HTML
        birthdate.style.border = '2px solid #e54858'; // le border est rouge
        birthdate.nextElementSibling.style.display = "block"; // le message d'erreur s'affiche
        return false
    }else {
        birthdate.style.border = '2px solid #279e7a'; // si la date est valide
        birthdate.nextElementSibling.style.display = "none"; // le border est vert et pas de message d'erreur
        return true;
    }
}


// Ecoute de l'évèvement 'SUBMIT' du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkBirthdate() === true) { //si les inputs prénom & nom sont valides, une alerte s'affiche
        alert("OKAY")
    } else {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkBirthdate();
    }

})


