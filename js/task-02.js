const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsEl = document.querySelector("#ingredients");
// console.log("ingredientsEl:", ingredientsEl)


const ingredientsEl = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
  const newIngredientsList = document.createElement("li");
  newIngredientsList.textContent = ingredient;

  return newIngredientsList;
})

ingredientsEl.append(...element)