exports.up = function(knex) {
  return knex.schema.createTable('sessions', function(table) {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('token').notNullable();
    table.timestamp('expires_at').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
