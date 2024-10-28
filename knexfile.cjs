module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.VITE_DB_HOST,
      user: process.env.VITE_DB_USERNAME,
      password: process.env.VITE_DB_PASSWORD,
      database: process.env.VITE_DB_DATABASE
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
