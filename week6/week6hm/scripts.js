// let a=5;
// let b=10;
// let game="runescape";
// let RS="free";
// const isfavorite=true;


// // math operations
// let total = a*b;
// let PriceforRS= a*b*0;

// // string
// let aboutme= "My favorite game is" + game ;
// let gamer= "Also my favorite game is" + RS ;


// // all resaults with console
// console.log(b);
// console.log(a);
// console.log(total);
// console.log(PriceforRS);
// console.log(aboutme);
// console.log(gamer);
// console.log(game);
// console.log(RS);


// variables
let age=Number(prompt("who old are you?"))


// age check
if (age>=18);{
    console.log("You are old enough to play this game")
}

// experiance with if,else if,else
let experianced=(prompt("Have you played runescape before?"))
if (experianced==="yes"){
    console.log("Welcome back")
}
    else if (experianced==="no"){
        console.log("Welcome to the Runescape community")
}
        else {console.log ("Please answer with yes or no")};

// intrest variable
let interest=(prompt("do you like videogames?"))
if (interest==="yes");{
    console.log("This is a RPG game that involves questing and leveling your character")
}


// one nested if statement
let trail = ("Congradulation! You get a free 7 day trail with a free ledgendary skin")
if (interest === "yes"){
    if (experianced === "no"){
        console.log(trail);
        document.body.innerHTML += "<p>" + trail + "<p>"
    }
}
