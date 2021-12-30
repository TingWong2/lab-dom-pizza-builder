// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();

  let ingredientUlTag = document.getElementById("ingredient-list"); 
  ingredientUlTag.innerHTML = ''

  for ( const property in state ) {
    if (state[property]) {
      let ingredientLiTag = document.createElement("li"); 
      ingredientLiTag.innerHTML = ` $ ${ingredients[property].price} ${ingredients[property].name}` 
      ingredientUlTag.appendChild(ingredientLiTag)
    }
  }

}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector('.sauce'); 
    if (state.whiteSauce) {
      whiteSauce.classList.add("sauce-white");
    } else {
      whiteSauce.classList.remove("sauce-white");
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenCrust  = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      glutenCrust.classList.add("crust-gluten-free");
    } else {
      glutenCrust.classList.remove("crust-gluten-free");
    }
  };


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  for (const property in state) {

    const dashedCase = property.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    const buttonTag = document.querySelector('.btn-' + dashedCase)
    
      console.log("buttonTag", property, buttonTag)

    if (state[property]) {
      buttonTag.classList.add("active")
    } else {
      buttonTag.classList.remove("active")
    }
  }
    
};


function renderPrice() {
  
  console.log("renderPrice state", state)

  // check the properties in state:
  let finalPrice = basePrice
  for ( const property in state ) {
    if (state[property]) {
      finalPrice += ingredients[property].price
    }
  }
   
  let totalPizzaPriceTag = document.getElementById("total-pizza-price"); 
  totalPizzaPriceTag.innerHTML = `$ ${finalPrice}`
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-white-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}); 
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-gluten-free-crust').addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


