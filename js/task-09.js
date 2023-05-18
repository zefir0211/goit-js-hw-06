function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtnEl = document.querySelector('.change-color');
const colorInformationEl = document.querySelector('.color');


const changeColor = () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorInformationEl.textContent = randomColor;
};


colorBtnEl.addEventListener('click', changeColor);