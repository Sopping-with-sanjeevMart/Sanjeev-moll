// function login(form) {                                                                                     //Function for login form
//     let eMial = form.id.value;
//     let password = form.pass.value;

//     if(eMial == "admin@admin.com" && password == "123456") {
//         alert ("Login Successful")
//     } else {
//         alert ("Incorrect email or password")
//     }
// }

function login(form) {
    const email = form.id.value;
    const password = form.pass.value;

    // Basic validation
    if (email && password) {
        // Simulate a successful login and store the email
        localStorage.setItem('userEmail', email);
        alert('Login successful!'); // Optional: Show a success message
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Please enter both email and password.');
    }
}
