//DOM elements
const form = document.getElementById('form');

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const locationSelector = document.getElementsByName("location");
const errorCityText = document.getElementById('errorCity');
const checkboxConditions = document.getElementById('checkbox1');
const errorConditions = document.getElementById('errorConditionsText');

//REGEX
let nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]{2,}/;
let emailRegex = /\S+@\S+\.\S{2,}/;

// Show error if input is invalid.
function showError(input) {
    input.style.border = 'solid 2px #ff4e60';
    input.nextElementSibling.style.display = "block";
    return false;
}

function showSuccess(input) {
	input.style.border = 'none';
    input.nextElementSibling.style.display = "none";
    return true;
}
// VALIDATIONS INPUTS


// check prénom
function checkFirstName() {
    if (firstName.value.trim() === '' || !firstName.value.match(nameRegex)) { // si l'input est vide, ou a moins de 2 caractères
        showError(firstName);
    }else {
        showSuccess(firstName);
    }
}

//check nom de famille
function checkLastName() {
    if (lastName.value.trim() === '' || !lastName.value.match(nameRegex)) {
        showError(lastName);
    }else {
        showSuccess(lastName);
    }
}

//check email
function checkEmail() {
    if (email.value.match(emailRegex)) { // si l'email est valide, match le Regex, 
        showSuccess(email);
    }else {
        showError(email);
    }
}

//check date de naissance
function checkBirthdate() {
    if (birthdate.value< birthdate.min || birthdate.value > birthdate.max) { //si la date de naissance ne se trouve pas entre le min et le max définit dans le HTML
        showError(birthdate);
    }else {
        showSuccess(birthdate);
    }
}

function checkTournements() {
    if (tournamentQuantity.value == "" || tournamentQuantity.value < 0) {
        showError(tournamentQuantity);
    } else {
        showSuccess(tournamentQuantity);
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

    if(showSuccess(firstName) === true && showSuccess(lastName) === true 
    && showSuccess(email) === true && showSuccess(birthdate) === true 
    && showSuccess(tournamentQuantity) === true && checkCity() === true && checkConditions() === true) { //si les inputs sont valides, une alerte s'affiche
    const modalBody = document.getElementsByClassName('modal-body');
    const successMessage  = document.createElement('button');
    modalBody[0].innerHTML = '<h2>Merci ! Votre réservation a été reçue.</h2>';
    modalBody[0].style.minHeight = '850px';
    modalBody[0].style.textAlign = 'center';
    modalBody[0].style.display = 'flex';
    modalBody[0].style.flexDirection = 'column';
    modalBody[0].style.justifyContent = "center";
    modalBody[0].style.alignItems = "center";


    successMessage.innerHTML = "Fermer";
    successMessage.classList.add('btn-submit');
    successMessage.classList.add('button');
    successMessage.style.position = 'absolute';
    successMessage.style.bottom = '25px';
    modalBody[0].appendChild(successMessage);

    successMessage.addEventListener("click", closeModal);
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