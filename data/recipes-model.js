const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/test.db',
    },
    useNullAsDefault: true,
});

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipes')
        .select('ingredients.name as ingredient', 'ingredients.quantity')
        .join('ingredients', 'recipes.id', 'ingredients.recipe_id')
        .where('recipes.id', recipe_id);
}

function getInstructions(recipe_id) {
    return db('recipes')
        .select('instructions.step_number', 'instructions.text')
        .join('instructions', 'recipes.id', 'instructions.recipe_id')
        .where('recipes.id', recipe_id)
        .orderBy('instructions.step_number');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}