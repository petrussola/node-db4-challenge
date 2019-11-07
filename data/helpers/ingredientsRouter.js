const express = require("express");
const Ingredients = require("./ingredientsModel");
const router = express.Router();

router.get("/:id/recipes", async (req, res) => {
  const { id } = req.params;
  try {
    const receipe = await Ingredients.getRecipesByIngredient(id);
    res.status(200).json(receipe);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
