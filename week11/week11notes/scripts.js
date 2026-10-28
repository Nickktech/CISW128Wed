console.log("linked")

// Example 1: Click event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
alert("You clicked! Hello World!");
});

// this is a click event
document.getElementById("timeBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();}


// this allows you to click the H1 tag and everytime you click it it counts and goes up by one. so it pretty much counts each time you click the h1
const ele1 = document.querySelector('h1');
let counter =0;
ele1.onclick = ()=>{
    counter++;
    console.log(`click ${counter}`)
};
function output(){
    console.log('clicked');
}




// Example 2: Double-click event
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "Double-clicked!";
});


// Example 3: Hover in / out
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
hoverText.style.color = "Blue";
hoverText.textContent = "Thank you!"
});

hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "black";
});
const box = document.getElementById("box");



// this is another example of hover but in a box . it lets you know when the mouse is in or out the box
// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Mouse is out!";
});







// Example 4: Key press
document.addEventListener("keyup", (event) => {
document.getElementById("output").textContent = "You pressed: " + event.key;
});

// Example 5: Input typing
const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
console.log("User typed:", textInput.value);
});

// background color
document.title = "My website";
document.body.style.backgroundColor = "hsl(112, 95%, 50%)";

