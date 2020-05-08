
exports.up = function(knex) {
  return knex.schema.createTable('cases', function(table){
      table.increments().primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('users_id').notNullable();

      table.foreign('users_id').references('id').inTable('users');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cases');
};
