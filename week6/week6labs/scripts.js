let score=Number(prompt("enter your score 0-100"));
// input

// grade cal
if (score>=90){
    console.log("A");
} else if (score >= 80){
     console.log("B");
} else if (score >= 70){
     console.log("C")
} else {
     console.log("F");
}
// age check
let age=(prompt("How old are you?"));
if (age>=18){
    console.log("Adult");
}
else {
    console.log("Minor");
}

//  weather question
let weather=(prompt("is it raining or is it sunny outside?"));
if (weather===raining){
    console.log("I should bring an umbrella");
}
if (weather===sunny){
    console.log("I should bring a t-shirt");
}
else {
    console.log(" sorry,thats not what i asked");
}


document.body.innerHTML += "<h1>" + weather + age + score + "<h1>"