const popUpHolder = document.querySelector('.pop-up');
const open = document.querySelector('.join-button-2');
const close = document.querySelector('.close');
const form = document.querySelector('.holder');
const errorMessages = document.getElementById('errorMessages');


function openForm(event) {
    event.preventDefault();
    popUpHolder.classList.add("active");
}

function closeForm(event) {
    event.preventDefault();
    popUpHolder.classList.remove("active");
}


function validEmail(email) {
    return /^[^\s@] + @[^\s@] + \.[^\s@] + $/.test(email);
}

function displayError(message) {
    errorMessages.innerHTML = message; 
}

function submit(event) {
        event.preventDefault();
        errorMessages.innerHTML = " ";
    
        const name = document.querySelector('.name').value.trim();
        const number = document.querySelector('.number').value.trim();
        const email = document.querySelector('.email').value.trim();

        if(!name) {
            displayError("Name is required");
            return;
        }
    
        if(!email) {
            displayError("Email is required");
        } else if (!validEmail(email)) {
            displayError("Invalid email format");
            return;
        }
    
        if(!number) {
            displayError("Phone number is required");
            return;
        } else if(number.length < 10) {
            displayError("Number must be at least 10 characters long");
            return;
        }
    
        form.submit();
    };


open.addEventListener('click', openForm);
close.addEventListener('click', closeForm);
form.addEventListener('submit', submit);
