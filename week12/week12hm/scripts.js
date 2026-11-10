const form = document.getElementById("pizzaform");

form.addEventListener("submit", function(event){
    event.preventDefault();
// this adds the new element i created to the website and reads it back in a paragraph im creating.... but i didnt get it to work and have no idea what im doing
// but i left it on here because im use it as an example for my final 

    details.forEach(function(detail){
        const p = document.createElement("p");
        p.textContent = detail;
        result.appendChild(p)
        });
        

// Cx name
const name = document.getElementById("customerName").value;

// dropdown
const size = document.getElementById("pizzasize");
const pizzaprice = Number(size.value);
const pizzasize = size.options[size.selectedIndex].text;

// toppings
const checkedtoppings = document.querySelectorAll(
    'input[name="Toppings"]:checked'
);

let toppings = [];

checkedtoppings.forEach(function(topping){
    toppings.push(topping.value);
})

// quantity
const quantity = Number(document.getElementById("Quantity").value);

if (!Number.isInteger(quantity) || quantity <1){
    alert("please enter a valid quantity.");
    return;
}
// i did use the internet to look up this code because it kept breaking my whole code and i couldnt figure it out ^^^^^^^

// special instructions 
const Instructions = document.getElementById("Instructions").value;

// date / i looked this up to make it look nicer and more complete
const today = new Date();
const currentdate = today.toLocaleDateString();
document.getElementById("currentdate").textContent = currentdate;


// total 
const toppingprice = toppings.length * 5;
const total = (pizzaprice + toppingprice) * quantity;

// / i also needed help on reading back the order because i got stuck for awhile so i googled a bunch of different stuff untill i found one that worked
// but what i learned is that im making a new element that once the order is done it takes trhe result and puts in in to a summary 
const result = document.getElementById("orderResult");
result.replaceChildren();

const heading = document.createElement("h2");
heading.textContent = "Order Summary";
result.appendChild(heading);

// so this im telling what to add to the summary i created and telling it where to get the info and if theres no info put none
const details = [
    "Customer: "+  name,
    "Date: "+ new Date ().toLocaleDateString(),
    "Pizza: "+ pizzasize,
    "Toppings: "+  toppings.join(", ") || "none",
    "Quantity: "+ quantity,
    "Instructions: "+ Instructions || "none",
    "Total: $" + total.toFixed(2)
];
// this adds the new element i created to the website and reads it back in a paragraph im creating.... but i didnt get it to work and have no idea what im doing
// but i left it on here because im use it as an example for my final 

    

});