exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: 1, instructions: "open the oven", receipe_id: 1 },
        { step_number: 2, instructions: "put it in", receipe_id: 1 },
        { step_number: 3, instructions: "close the oven", receipe_id: 1 },
        { step_number: 1, instructions: "open the oven", receipe_id: 2 },
        { step_number: 2, instructions: "put it in", receipe_id: 2 },
        { step_number: 3, instructions: "close the oven", receipe_id: 2 },
        { step_number: 1, instructions: "open the oven", receipe_id: 3 },
        { step_number: 2, instructions: "put it in", receipe_id: 3 },
        { step_number: 3, instructions: "close the oven", receipe_id: 3 }
      ]);
    });
};
