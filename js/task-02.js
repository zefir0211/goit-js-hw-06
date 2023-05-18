const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
  const newIngredientsList = document.createElement("li");
  newIngredientsList.textContent = ingredient;

  return newIngredientsList;
});

console.log(ingredientsEl);

ingredientsEl.append(...element);