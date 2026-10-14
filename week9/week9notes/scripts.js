// what is a functions?
// reuseable block of code designed to preform a specific task 

function greetUser()
{console.log("Hello There")}
greetUser(); 
// calls (executes) the fucntions

// function structure
// keyword, fucntion: tells js were defining a fucntion
// name, identify the fucntion
// parameters, Variables inside the paraenthese that receive data 
// body, The code between {}

// parameter and arguments
// Parameter: placeholders when defning a function
// Arguments: actual value when calling it

function greet(name)
// name is parameter
{
console.log("Hello"+ name)
}

greet("nicolas");
// "nicolas is the argument"


// i want a function that will add 2 numbers together 
// then console log the total
function addNumbers(a,b){
return (a+b);
}

let total=addNumbers(4,6)
console.log("the total is:" + total)
// return send =s a value back to where the function was called 
// console.log() just prints 

// return is like your function handing you back a notes with the answer written on it 
// console.log is your function yelling the answer out loud, we hear it but we cant use it again 
function mulitply(x,y){
    return x*y
}

let result=mulitply(15,15);
console.log(result);
// 225

// create me a function that will count up to 5 by 1s
function count(n){
    for (let i=1; i<=n; i++){
    console.log(i);
    }
}
count (5);
// its already console logged in for loop



// nested fucntions
// function can call another function inside of it
function square(num){
    return num*num;
}

function printsq(num){
    console.log("square is: "+ square(num));
}
printsq (6);
// 36
// use function is to separate things to make it easier to spot errors


// i want a function that greets the user ,asks for thier name , then prints it 
function username(){
    let name=prompt ("Whats your name?");
    console.log("welcome, "+ name);
}
username();

