const entryFieldEl = document.querySelector("#name-input");
const nameDisplayEl = document.querySelector("#name-output");

const handleClick = (e) => {
    nameDisplayEl.innerText = e.target.value.length !== 0 ? `${e.target.value}` : "Anonymous";
};

entryFieldEl.addEventListener('input', handleClick);
