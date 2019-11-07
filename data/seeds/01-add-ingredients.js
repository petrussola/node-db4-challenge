
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "eggs", ingredient_unit: 'units'},
        {ingredient_name: "flour", ingredient_unit: 'grams'},
        {ingredient_name: "milk", ingredient_unit: 'milliliters'},
      ]);
    });
};
