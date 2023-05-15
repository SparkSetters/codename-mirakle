document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Add functionality to store the email
    console.log(email);
});
