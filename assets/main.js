const fullname = document.getElementById('name');
const nameError = document.getElementById('name-error');

const number = document.getElementById('number');
const numberError = document.getElementById('number-error');
const numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

const message = document.getElementById('message');
const messageError = document.getElementById('message-error');

const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    let detectError = false; 

    if (fullname.value.trim() === '') {
        detectError = true;
        nameError.style.display = 'block';
        fullname.classList.add('error-style');
    } else {
        nameError.style.display = 'none';
        fullname.classList.remove('error-style');
    }

    if (number.value.trim() === '') {
        detectError = true;
        numberError.style.display = 'block';
        number.classList.add('error-style');
    } else{
        if(!numberRegex.test(number.value)){
           detectError =true;
           numberError.style.display='block';
           number.classList.add('error-style');
           numberError.innerHTML=`Enter a valide phone number `;


        }else{
            numberError.style.display = 'none';
            number.classList.remove('error-style');
        }

    
    }
    
   
    if (email.value.trim() === '') {
        detectError = true;
        emailError.style.display = 'block';
        email.classList.add('error-style');
    } else {
        emailError.style.display = 'none';
        email.classList.remove('error-style');
    }

    if (message.value.trim() === '') {
        detectError = true;
        messageError.style.display = 'block';
        message.classList.add('error-style');
    } else {
        messageError.style.display = 'none';
        message.classList.remove('error-style');
    }

    if (!detectError) {
        alert('Form submitted successfully!');
        form.reset(); 
    }
});
