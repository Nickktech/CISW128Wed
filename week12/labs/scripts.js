// Select the form and result section
const form = document.getElementById("contactform");
const result = document.getElementById("results");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const color=document.getElementById("color").value;
    // Display the info back to the user
    result.innerHTML = `
      <h3>__________</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Favorite Color:</strong> ${color}</p>
    `;
form.addEventListener("color",function(event){
     event.preventDefault();
})
     
    



});

// 1.it prevents the page from reloading automatically when the form is submitted
// 2.value returns the value of the input field, which is what the user has typed in
// 3. to save you time and make it easier to read, you can use template literals to insert variables into a string without having to concatenate them with + signs.
