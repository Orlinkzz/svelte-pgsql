/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('users').del();
  await knex('users').insert([
    { email: 'test@example.com', first_name: 'example', last_name: '', password: 'hashedpassword' },
    { email: 'test@test.com', first_name: 'test', last_name: '', password: 'hashedpassword' },
    { email: 'senajhon@gmail.com', first_name: 'sena', last_name: 'jhon', password: 'hashedpassword' }
  ]);
};
