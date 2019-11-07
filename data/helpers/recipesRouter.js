const express = require("express");
const Recipes = require("./recipesModel");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(404)
        .json({ message: `Could not find recipes: ${error.message}` });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(404)
        .json({ message: `Could not find shopping list: ${error.message}` });
    });
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipes.getInstructions(id);
    res.status(200).json(instructions);
  } catch (error) {
    res
      .status(404)
      .json({ message: `Could not retrieve isntructions: ${error.message}` });
  }
});

module.exports = router;
