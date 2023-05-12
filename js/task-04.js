const counter = document.getElementById('counter');
const visualResult = document.querySelector('#value');
const counterAdd = document.querySelector('[data-action="increment');
const counterRemove = document.querySelector('[data-action="decrement');

let counterValue = 0;

counterAdd.addEventListener('click', () => {
    counterValue += 1;
visualResult.textContent = counterValue;
});
counterRemove.addEventListener('click', () => {
    counterValue -= 1;
visualResult.textContent = counterValue;
})