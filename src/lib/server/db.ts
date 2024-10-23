import postgres from 'postgres';

const dbHost = import.meta.env.VITE_DB_HOST;
const dbPort = import.meta.env.VITE_DB_PORT;
const dbName = import.meta.env.VITE_DB_DATABASE;
const dbUser = import.meta.env.VITE_DB_USERNAME;
const dbPassword = import.meta.env.VITE_DB_PASSWORD;

const DATABASE_URL = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const sql = postgres(DATABASE_URL);

export default sql;
