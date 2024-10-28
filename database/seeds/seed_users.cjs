/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('users').del();
  await knex('users').insert([
    { email: 'example@test.com', first_name: 'example', last_name: 'test', password: '$2b$10$FvcKBDnjOV8Dm5TMUs7TC.8Ly2yzIqa/W4j/X47YF6lck4ozvTIoS' },
    { email: 'senajhon@gmail.com', first_name: 'sena', last_name: 'jhon', password: '$2b$10$HoYG9KMdKNPr0pE5Me2ZXuF/Fz8Km3ZZ0RdHvzGDVdJ.tuu7AbyDS' }
  ]);
};
