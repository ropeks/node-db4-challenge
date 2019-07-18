
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_number: 2, text: 'cook everything' , recipe_id: 1},
        {id: 2, step_number: 1, text: 'eat everything' , recipe_id: 1}
      ]);
    });
};
