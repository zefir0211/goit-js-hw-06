const numberOfCategories = document.querySelector("#categories");


const categoryAnimals = numberOfCategories.querySelectorAll(".item");
console.log(`Number of categories: ${categoryAnimals.length}`);

categoryAnimals.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const categoryElements = item.lastElementChild.children.length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}\n`);
});