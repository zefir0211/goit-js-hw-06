const inputEl = document.querySelector('#validation-input');
const lengthEL = inputEl.getAttribute('data-length');

const handleInputColor = (e) => {
if (e.target.value.length < lengthEL) {
    e.target.classList.add('invalid')
} else {
    e.target.classList.add('valid')
    e.target.classList.remove('invalid')
}
};

inputEl.addEventListener('blur', handleInputColor);


