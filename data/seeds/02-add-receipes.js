
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {receipe_name: 'Apple Cake'},
        {receipe_name: 'Lemon Cake'},
        {receipe_name: 'Orange Cake'}
      ]);
    });
};
