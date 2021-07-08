const db = require("../db-config");

module.exports = {
  getRecipesByIngredient
};

function getRecipesByIngredient(ingredient_id) {
  return db
    .select("r.receipe_name")
    .from("ingredientsRecipes as ir")
    .join("recipes as r", "ir.receipe_id", "r.id")
    .where("ir.ingredient_id", ingredient_id);
}
