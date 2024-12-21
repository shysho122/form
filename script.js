const form = document.getElementById('myform');
const username = document.getElementById('username');
const zip = document.getElementById('zip');
const zip2 = document.getElementById('zip2');

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
    const zipValue = zip.value.trim();
    const zip2Value = zip2.value.trim();

    if(usernameValue === '') {
        setError(username, 'first and last name is required');
    } else if (usernameValue.length > 20 ) {
        setError(username, 'username must be less than 20 character.')
    } else {
        setSuccess(username);
    }


    if(zipValue === '') {
        setError(zip, 'zip is required');
    } else if (pinValue.length < 5 ) {
        setError(zip, 'zip must be at least 5 character.')
    } else {
        setSuccess(zip);
    }

    if(zip2Value === '') {
        setError(zip2, 'Please confirm your zip');
    } else if (zip2Value !== pinValue) {
        setError(zip2, "zip doesn't match");
    } else {
        setSuccess(zip2);
    }



};

