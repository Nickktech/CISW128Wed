const form = document.getElementById("contactform");
const username = document.getElementById("username");
const email= document.getElementById("email");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage")


// regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// name check
function checkName(){
    let name = document.getElementById("username").value;

    if (name.trim() === ""){
        nameError.textContent = "you must enter"
    }
}
// email check
function checkEmail(){
    const emailValue = email.value.trim();

    if (emailValue === ""){
        emailError.textContent = "Please enter your email.";
        return false;
    }
    else if (!emailPattern.test(emailValue)){
        emailError.textContent = "Please enter a valid email.";
        return false
    }
    else {
        emailError.textContent = "";
        return true
    }
}

// age check
function checkAge(){
    const ageValue = age.value.trim();
    const ageNumber = number(ageValue);

    if (ageValue === ""){
        ageError.textContent = " Please enter your age";
        return false;
    }
    else if (!Number.isInteger(ageNumber) || ageNumber < 1){
        ageError.textContent = "You must be older the 1 years old"
        return false
    }
    else {
        ageError.textContent= "";
        return true
    }
}


// blur. after users leave this area it checks its value
username.addEventListener("blur", function(){
    checkName();
});

email.addEventListener("blur", function(){
    checkEmail();
});

age.addEventListener("blur", function(){
    checkAge();
});

form.addEventListener("submit", function(event){
    // stops refreshes
    event.preventDefault();

    // clears old successmessage
    successMessage.textContent = " ";

    // validates
    const validName = checkName();
    const validEmail = checkEmail();
    const validAge = checkAge();


    // successmessage if everything is filled out 
    if (validName && validAge && validEmail){
        successMessage.textContent = "Form submitted successfully!";

        form.reset();

        nameError.textContent = " ";
        emailError.textContent = " ";
        ageError.textContent = " ";
    }
});

