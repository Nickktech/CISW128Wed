
// simple code to get your name and reply with hello (Name)
let Name=(prompt("What is your name"))
console.log ("Hello"+ " " +(Name));

// this line of code asks you to pick a number that will be saved as a variable and the next lines will use that variable to count to whatever number you choose
let num=Number(prompt("Pick a medium number:"));
// for  this code of multiple of 3&5 i did google it because i didnt really understand it when i w3 schooled it 
// this line simply starts at 1 and tells it to keep going up by 1
for(let i=1; i<=num; i++){
// this line say that if i is divided by 3 with 0 remainder and if i is divided by 5 with 0 remainder print "fizzbuzz"
    if (i % 3=== 0 && i % 5 === 0)
        {console.log("FizzBuzz");}
// this line say that if i is divided by 3 with 0 remainder print fizz
    else if (i % 3 === 0)
        {console.log("Fizz");}
// if i is divided by 5 with 0 remainder print buzz
    else if (i % 5 === 0)
        {console.log("Buzz");}
// else means if its not divided by either simply print i which is just the number 
    else 
        {console.log(i);}
}    
    

// This allows you to pick what key on the keyboard you would like to make a triangle out of 
let picture=(prompt("Which button on the keyboard would you like to make a triangle out of?"))
console.log(picture);

// this is the format of the triangle /the start of it 
let triangle="";
// this says to start at 1 of the chosen variables and go up by 1 but stop at 9 lines 
for (let line=1;line<=9;line++)
    // this say to make the triangle out of the chosen key used in the input 
    {triangle+=(picture)
        // this simply prints the output
        console.log(triangle)
    }
