const form = document.querySelector('form');
const passwords = document.querySelectorAll('.pass');
const button = document.querySelector('.btn');

const messages = {
    valueMissing: 'Please fill in this section!',
    patternMismatch: 'At least 8 chars, 1 letter & 1 number',
    notSame: `Paswords must be the same!`

}
const error = document.createElement('p');
error.classList.add('hint');
const passError = document.createElement('p')
passError.classList.add('hint')

form.addEventListener('input', e => {
    const target = e.target;
    console.log(target.validity);
    if(target.validity.valueMissing){
        error.innerText = messages.valueMissing;
        target.parentElement.appendChild(error);
    }else {
       
    }
})

for(pass of passwords) {
    pass.addEventListener('input', e => {
        const {target} = e;
        if(target.validity.patternMismatch){
            passError.innerText = messages.patternMismatch;
            target.parentElement.appendChild(passError);
        }else {
            target.parentElement.removeChild(passError);
        }
    })
}