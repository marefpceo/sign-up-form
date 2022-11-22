const form1 = document.getElementById('form1');
const passwordError = document.querySelector('fieldset > p > span');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_pass');
const submitBtn = document.getElementById('submitBtn');

let isValid = false;


// Event listeners added to all inputs. Constraint Validation API is used for all inputs
// with modifications made to message output for phone number. 
firstName.addEventListener('input', () => {
    if (firstName.validity.tooShort){
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity('');
    }
});


lastName.addEventListener('input', () => {
    if (lastName.validity.tooShort){
        lastName.reportValidity();
    } else {
        lastName.setCustomValidity('');
    }
});


email.addEventListener('input', () => {
    if (email.validity.typeMismatch){
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }
});


phone.addEventListener('input', ()=> {
    if (phone.validity.patternMismatch){
        phone.setCustomValidity('Please match the requested format. (ex. 123-456-7890)');
        phone.reportValidity();
    } else {
        phone.setCustomValidity('');
    }
});

// Custom validation code to check that password and confirmPassword input fields match
password.addEventListener('input', () => {
    if ((password.value.toString() !== confirmPassword.value.toString()) || 
        password.value.toString() === '' || confirmPassword.value.toString() === ''){
        passwordError.textContent = '*Passwords do not match';
        confirmPassword.className = 'error';
        password.className = 'error';
        isValid = false;
    } else {
        passwordError.textContent = '';
        password.className = '';
        confirmPassword.className = '';
        isValid = true;
    }console.log(isValid);
});


confirmPassword.addEventListener('input', () => {
    if ((password.value.toString() !== confirmPassword.value.toString())){
        passwordError.textContent = '*Passwords do not match';
        confirmPassword.className = 'error'
        password.className = 'error'
        isValid = false;
    } else {
        passwordError.textContent = '';
        password.className = '';
        confirmPassword.className = '';
        isValid = true;
    }console.log(isValid);
});


// Checks that all input fields are valid before submitting the form
submitBtn.addEventListener('click', () => {
    if (!firstName.validity.valid){
        firstName.reportValidity();
    } else if (!lastName.validity.valid){
        lastName.reportValidity();
    } else if (!email.validity.valid){
        email.reportValidity();
    } else if (!phone.validity.valid){
        phone.reportValidity();
    } else if ((!password.validity.valid) || (!confirmPassword.validity.valid)) {
        password.reportValidity();
        confirmPassword.reportValidity();
    } else if (isValid === false){
        password.setCustomValidity('Passwords do not match');
        confirmPassword.setCustomValidity('Passwords do not match');
        password.reportValidity();
        confirmPassword.reportValidity();
    }else {
        form1.submit();
        alert('Form Submitted!');
    }    
});


