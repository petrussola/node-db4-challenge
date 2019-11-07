const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
    getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select("i.ingredient_name", "ir.ingredient_quantity", "i.ingredient_unit")
    .from("ingredientsRecipes as ir")
    .join("ingredients as i", "ir.ingredient_id", "i.id")
    .join("recipes as r", "ir.receipe_id", "r.id")
    .where("ir.receipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select("step_number", "instructions")
    .from("steps")
    .where("receipe_id", recipe_id);
}
