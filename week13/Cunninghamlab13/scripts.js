
 // Select the form
const form = document.getElementById("contactForm");

// Select the error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");

// Email pattern from the notes
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Check name when user leaves the field
const username = document.getElementById("username");

username.addEventListener("blur", function() {

    let name = username.value;

    if (name.trim() === "") {
        nameError.textContent = "You must enter your name.";
    } else {
        nameError.textContent = "";
    }

});


// Check email when user leaves the field
const emailInput = document.getElementById("email");

emailInput.addEventListener("blur", function() {

    let email = emailInput.value;

    if (email.trim() === "") {
        emailError.textContent = "You must enter your email.";
    } else if (emailPattern.test(email.trim()) === false) {
        emailError.textContent = "Please enter a valid email.";
    } else {
        emailError.textContent = "";
    }

});


// Check age when user leaves the field
const ageInput = document.getElementById("age");

ageInput.addEventListener("blur", function() {

    let age = ageInput.value;

    if (age.trim() === "") {
        ageError.textContent = "You must enter your age.";
    } else if (Number(age) < 1 || Number.isInteger(Number(age)) === false) {
        ageError.textContent = "Please enter a valid age.";
    } else {
        ageError.textContent = "";
    }

});


// Check the form when the submit button is clicked
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the information entered
    let name = username.value;
    let email = emailInput.value;
    let age = ageInput.value;

    // Check if the form is valid
    let valid = true;

    successMessage.textContent = "";


    // Check name
    if (name.trim() === "") {
        nameError.textContent = "You must enter your name.";
        valid = false;
    } else {
        nameError.textContent = "";
    }


    // Check email
    if (email.trim() === "") {
        emailError.textContent = "You must enter your email.";
        valid = false;
    } else if (emailPattern.test(email.trim()) === false) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }


    // Check age
    if (age.trim() === "") {
        ageError.textContent = "You must enter your age.";
        valid = false;
    } else if (Number(age) < 1 || Number.isInteger(Number(age)) === false) {
        ageError.textContent = "Please enter a valid age.";
        valid = false;
    } else {
        ageError.textContent = "";
    }


    // If everything is correct, show success
    if (valid === true) {

        successMessage.textContent = "Form submitted successfully!";

        // Clear the form
        form.reset();

        // Clear error messages
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

    }

});
