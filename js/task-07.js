const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const lineFontSize = () => {
    const fontSize = inputEl.value + 'px';
    textSpan.style.fontSize = fontSize;
};



inputEl.addEventListener('input', lineFontSize);


