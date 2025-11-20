welcomeMessage();


function welcomeMessage() {
    let userName = prompt("Please enter your name:");
    if (userName === '' || userName=== null) {
        userName = "Guest";
    }
    
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
    
}

/// Function to validate the message form (to be implemented)
function validateForm() {

}