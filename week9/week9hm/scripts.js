// 1. Make 3 functions 
function greet(){
    let name = prompt("what is your name?");
    console.log("Hello" + name);
}
this simply greets users who enter my page with user input


function add(x,y){
    let x= Number(prompt("Whose what number you want x to be?"));
    let y= Number(prompt("Whose what number you want y to be?"));
    return add; 
}
// this makes x,y variable and uses it in a function 


function multiply(a,b){
    return(a*b)
}

function multiply_result(){
    let a= Number(prompt("Whose what number you want a to be?"))
    let b= Number(prompt("Whose what number you want b to be?"))

    let result = multiply
    console.log("Your answer is; " + result);
}
// this is the smae as multiply but i created result as a nested function 

// function count(n){
// for  (let i=n; i>+0; i--){

//     console.log(i);
// }
// }
// let countdown = number(prompt("What number would you like to count down from?"))
// count(countdown)
// this will make a function save it pretty much counting down from whatever number and stoping at 0 gpoing down by 1
// countdown is whatever number useer will put in obviously i dont have any error messages though

