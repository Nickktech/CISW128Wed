console.log("LINKED")
// DOM and basic minipulation
// what is the DOM
// document object model, this is how the browzer represents your web page in memory
// HTML elements becomes a JS object that we can access, change or delete
// JS to change text , images, colors. classes , ect. this occurs after the web page


// change text content with JS
// we are going to find the HTML element via its ID attribute
const title= document.getElementById("title");
// document, represents full webpage loaded in the browser
// .getelementbyid("title"), finds the element in the html with the exsact id
// const, means that the variable refrerence wont change
// it will always dpoint to the same DOM element
title.textContent="Welcome to my webpage!"
// .textcontent accesses or changes the text inside the element


// Selecting elements
// getelementbyid(), selects one element by its id           document.getelementbyid("title")
// queryselector(),selects the first match (id,class,tag)    document.queryselector(".main")
// queryselectorall(), returns a nodelist of all matches     document.queryselectorall("p")

// queryselector
const mainSection=document.querySelector("main");
mainSection.style.backgroundColor="green";
// mainSection.style.backgroundColor="#d3154b";

// queryselectorall
const paragraphs=document.querySelectorAll("p")
// loop through all p elements and change their text
paragraphs.forEach((para, index) => {
para.textContent = `paragraph ${index + 1} modified by queryselectorall()`;
para.style.color = "blue";
});




// adding interactivity with event listeners.... button to trigger an event
// select button
const button=document.getElementById("toggle");
// listen for a button click
button.addEventListener("click",() =>{
// toggle the hightlightclass on body
document.body.classList.toggle("highlight");





});


