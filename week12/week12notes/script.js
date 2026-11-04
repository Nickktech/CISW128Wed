// console.log="linked"
// // select the form element
// const form=document.getElementById("contactform")
// // listen for the submit event
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // this stops the page from reloading when users submit
//     // get the input value
//     const name=document.getElementById("name").value;
//     // in the console, state hello 
//     console.log("hello, ",name);
// });


// display data on the front side of the website
const result=document.getElementById("contactform");
result.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    result.innerHTML=`<p>hello, ${name}! Thanks for submiting. <p/>`;


})