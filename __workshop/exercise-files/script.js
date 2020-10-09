// clear any error indicators on the form
function clearErrorIndicators () {
    message.style.display = 'none';
    password1.classList.remove('text-field-error');
    password2.classList.remove('text-field-error');
}

// provide addition validation for the form
function validateInput(event) {
    let formValid = true;

    clearErrorIndicators();

    if (fullName.value.length > 0 && address.value.length > 0 && email.value.length > 0 && phone.value.length > 0) {
        event.preventDefault(); // disable default behaviour of submit button
        if (document.querySelector('.agree-checkbox').checked === false) {
            // the user did not agree to the terms of service
            formValid = false;
            window.alert('Please agree to the terms of service before submitting the form.');
        } else if (password1.value.length < 10) {
            // the password was too short
            formValid = false;
            message.innerText = 'Your password is too short! Please provide a password that is at least 10 characters long.';
            message.style.display = ('block');
            password1.classList.add('text-field-error');
            password1.focus();
        } else if (password1.value !== password2.value) {
            // the passwords did not match
            formValid = false;
            message.innerText = 'Your passwords didn\'t match! Please provide the same password in each field.';
            message.style.display = 'block';
            password2.classList.add('text-field-error');
            password2.focus();
        }
    } else {
        formValid = false;
    }

    if (formValid) {
        // we're good. Let 'er rip!
        // normally we would submit the form to the server, but we'll
        // just clear it and pop up a message instead
        document.querySelector('.signup-form').reset();
        window.alert('Success!');
    }
}

let fullName = document.querySelector('#fullname');
let address = document.querySelector('#address');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
let message = document.querySelector('.message');

// on clicking submit validate input
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    validateInput(event);
});
