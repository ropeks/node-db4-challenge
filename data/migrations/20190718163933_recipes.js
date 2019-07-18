
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.float('quantity', 128).notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('text', 128).notNullable();
        tbl.integer('step_number')
            .unsigned()
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions');
};
