const db = require("../db-config");

module.exports = {
  getRecipes
//   getShoppingList,
//   getInstructions
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
  
}

function getInstructions(recipe_id) {}
