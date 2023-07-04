const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const countryName = document.getElementById('country');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-submit')[0];



submit.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log("clicked");
    let ebody = `
    <b>Name: </b>${fullName.value}
    <b>Email: </b>${email.value}
    <b>Phone: </b>${phoneNumber.value}
    <b>Message: </b>${message.value}
    <b>Country: </b>${countryName.value}

    `
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'n0one4u2kill@gmail.com',
        From : "n0one4u2kill@gmail.com",
        Subject : "This is the subject" + email.value,
        Body : ebody
    }).then(
        message => alert("Message sent successfully")
    );

});

