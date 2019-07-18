
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'minced meat', quantity: 500 , recipe_id: 1},
        {id: 2, name: 'onions', quantity: 200 , recipe_id: 1},
        {id: 3, name: 'chips', quantity: 300 , recipe_id: 1}
      ]);
    });
};
