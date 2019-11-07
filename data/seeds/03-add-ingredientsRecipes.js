exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredientsRecipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredientsRecipes").insert([
        { ingredient_id: 1, receipe_id: 1, ingredient_quantity: 2 },
        { ingredient_id: 2, receipe_id: 1, ingredient_quantity: 1500 },
        { ingredient_id: 3, receipe_id: 1, ingredient_quantity: 200 },
        { ingredient_id: 1, receipe_id: 2, ingredient_quantity: 4 },
        { ingredient_id: 2, receipe_id: 2, ingredient_quantity: 1250 },
        { ingredient_id: 2, receipe_id: 3, ingredient_quantity: 1250 },
        { ingredient_id: 3, receipe_id: 3, ingredient_quantity: 750 }
      ]);
    });
};
