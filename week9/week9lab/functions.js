// 1.
function greetUser(name)
// name is parameter
{
console.log("Hello "+ name)
}
greetUser("nicolas");
// "nicolas is the argument"

// 2.
function addNumbers(a,b){
return (a+b);
}
// adds a+b
let total=addNumbers(4,6)
// calls total with whatever variables you put
console.log("The total of adding 2 numbers is:" + total)
// prints

// 3.
// making function
function CalArea(L,W){
    return L*W
}
// making variable
let result=CalArea(10,12);
// print variable
console.log("Your area is: "+ result);

// 4. add user input
// making function
function username(){
    let name=prompt ("Whats your name?");
    console.log("Welcome, "+ name);
}
// calls function
username();