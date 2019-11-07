exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
      table.string("ingredient_unit", 128).notNullable();
    })
    .createTable("recipes", table => {
      table.increments();
      table
        .text("receipe_name")
        .notNullable()
        .unique();
    })
    .createTable("ingredientsRecipes", table => {
      table.increments();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      table
        .integer("receipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table.float("ingredient_quantity").notNullable();
    })
    .createTable("steps", table => {
      table.increments();
      table.integer("step_number").notNullable();
      table.text("instructions").notNullable();
      table
        .integer("receipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredientsRecipes")
    .dropTableIfExists("steps");
};
