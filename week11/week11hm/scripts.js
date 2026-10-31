

// this allows you to change theme to dark mode
// / 1. Find the button by its ID
const themeButton = document.getElementById("themeToggle");
// 2. Listen for a click event on that button
themeButton.addEventListener ("click", () => {
// 3. Add/remove the "dark" class on the body
document.body.classList.toggle("dark");
console.log("Theme changed to dark!");
});




const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; // keeps track of item numbers




addBtn.addEventListener("click", () => {
// Create a new list item
const newItem = document.createElement("li");
// Give it text (Item 1, Item 2, ...)
newItem.textContent = "game" + counter;
// Add it to the list on the page
list.appendChild(newItem);
counter++; // increase number for next item
});


list.addEventListener("click", (event) => {
    // Check if you clicked directly on a list item
    if (event.target.tagName === "LI") {
    event.target.remove(); // delete that <li>
    console.log("Game removed!")
    }
    });


    const keyOutput = document.getElementById("keyOutput");
    document.addEventListener("keyup", (event) => {
    keyOutput.textContent = "You pressed: " + event.key;
    });