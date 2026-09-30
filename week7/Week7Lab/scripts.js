// 1.for loop, starts at 1 ends at 10
for(let i=1; i<=10; i++){
    console.log("i is: "+1);
}

// 2.for loop with user input, num has to be changed to a number. whatever user puts in it counts by 1 to that number
let num=Number(prompt("Pick a number:"));
for(let i=1; i<=num; i++){
    console.log(i);
}


// 3.building a triangle
let triangle="";
for(let line=1;line<=7;line++){
    triangle+="*";
    console.log(triangle)
}
