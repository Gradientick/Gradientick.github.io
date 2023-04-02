

function sendEmail() = {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "camus.luis95@gmail.com",
        Password : "Stream7756",
        To : 'camus.luis95@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}