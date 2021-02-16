//DOM elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const form = document.getElementById('form');
const locationSelector = document.getElementsByName("location");
const errorCityText = document.getElementById('errorCity');
const checkboxConditions = document.getElementById('checkbox1');
const errorConditions = document.getElementById('errorConditionsText');

//REGEX
let nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]{2,}/;
let emailRegex = /\S+@\S+\.\S{2,}/;


// VALIDATIONS INPUTS

// check prénom
function checkFirstName() {
    if (firstName.value === '' || !firstName.value.match(nameRegex)) { // si l'input est vide, ou a moins de 2 caractères
        firstName.style.border = '2px solid #e54858';  // le border devient rouge
        firstName.nextElementSibling.style.display = "block"; // et un message d'erreur s'affiche en dessous
        return false;
    }else {
        firstName.style.border = 'none'; // si l'input à 2 caractère ou plus,
        firstName.nextElementSibling.style.display = "none"; //pas de message d'erreur.
        return true;
    }
}

//check nom de famille
function checkLastName() {
    if (lastName.value === '' || !lastName.value.match(nameRegex)) {
        lastName.style.border = '2px solid #e54858';
        lastName.nextElementSibling.style.display = "block";
        return false;
    }else {
        lastName.style.border = "none";
        lastName.nextElementSibling.style.display = "none";
        return true;
    }
}

//check email
function checkEmail() {
    if (email.value.match(emailRegex)) { // si l'email est valide, match le Regex, 
        email.style.border = 'none';
        email.nextElementSibling.style.display = "none"; // pas de message d'erreur
        return true;
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
        return false;
    }else {
        birthdate.style.border = 'none';
        birthdate.nextElementSibling.style.display = "none"; //pas de message d'erreur
        return true;
    }
}

function checkTournements() {
    if (tournamentQuantity.value < tournamentQuantity.min || tournamentQuantity.value > tournamentQuantity.max) {
        tournamentQuantity.style.border = '2px solid #e54858'; // le border est rouge
        tournamentQuantity.nextElementSibling.style.display = "block"; // le message d'erreur s'affiche
        return false;
    } else {
        tournamentQuantity.style.border = 'none';
        tournamentQuantity.nextElementSibling.style.display = "none"; // pas de message d'erreur
        return true;
    }
}

function checkCity() {
    let check1 = false;
    for(i=0; i<locationSelector.length; i++) { // On observe les inputs pour savoir s'il y en a un de checked
        if (locationSelector[i].checked) {
           check1 = true; // si une check alors check1 = true
        }
      }
        if (check1 == false) { // si check1 est = false alors le message d'erreur s'affiche
             errorCityText.style.display = "block"
             return false;
        }else {
             errorCityText.style.display = "none"
             return true;
        }
}

function checkConditions() {
    if (!checkboxConditions.checked) {
        errorConditionsText.style.display = 'block';
        return false;
    } else {
        errorConditionsText.style.display = 'none';
        return true;
    }
}


// Ecoute de l'évèvement 'SUBMIT' du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkFirstName() === true && checkLastName() === true 
    && checkEmail() === true && checkBirthdate() === true 
    && checkTournements() === true && checkCity() === true && checkConditions() === true) { //si les inputs sont valides, une alerte s'affiche
        alert("OKAY")
    } else {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkBirthdate();
        checkTournements();
        checkCity();
        checkConditions()
    }

})


