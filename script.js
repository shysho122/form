const form = document.getElementById('myform');
const username = document.getElementById('username');
const pin = document.getElementById('pin');
const pin2 = document.getElementById('pin2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const pinValue = pin.value.trim();
    const pin2Value = pin2.value.trim();

    if(usernameValue === '') {
        setError(username, 'first and last name is required');
    } else if (usernameValue.length < 20 ) {
        setError(username, 'username must be at least 20 character.')
    } else {
        setSuccess(username);
    }


    if(pinValue === '') {
        setError(pin, 'pin is required');
    } else if (pinValue.length < 5 ) {
        setError(pin, 'pin must be at least 5 character.')
    } else {
        setSuccess(pin);
    }

    if(pin2Value === '') {
        setError(pin2, 'Please confirm your pin');
    } else if (pin2Value !== pinValue) {
        setError(pin2, "pin doesn't match");
    } else {
        setSuccess(pin2);
    }



};

