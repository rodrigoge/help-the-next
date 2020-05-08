
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments().primary();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('type').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
