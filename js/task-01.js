const numberOfCategories = document.querySelector("#categories");


const categoryAnimals = numberOfCategories.querySelectorAll(".item");
console.log(`Number of categories: ${categoryAnimals.length}`);

categoryAnimals.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}\n`);
});