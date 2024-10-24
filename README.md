# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Installation

Clone this repository:

```bash
git clone https://github.com/Orlinkzz/svelte-pgsql.git
cd svelte-pgsql
npm install
cp .env.example .env

npm run dev 
# or start the server and open the app in a new browser tab 
npm run dev -- --open
```

## **Creating Migrations and Seeders Using Knex.js**

**Knex.js** is a query builder library for Node.js that supports various types of databases, including PostgreSQL, MySQL, and SQLite. Knex allows you to efficiently manage database schema migrations and seeders for initial data.

### **Installing Knex.js and Database Driver**

To get started, install **Knex.js** and the appropriate database driver (for example, PostgreSQL):

```bash
npm install knex pg
```

If you are using another database like MySQL, you can replace `pg` with the relevant driver, such as `mysql2`.

### **Main Uses of Knex:**

1. **Migrations**: Manage changes to the database structure (e.g., creating, modifying, or deleting tables).
2. **Seeders**: Populate tables with initial or example data.
3. **Query Builder**: Dynamically construct SQL queries using a JavaScript API.

To simplify using migration and seeder commands, you can use shorter scripts as follows:

- **Create a new migration**: `npm run migrate:make create_table_name_migration`
- **Run all migrations**: `npm run migrate`
- **Rollback the last migration**: `npm run rollback`
- **Create a new seeder**: `npm run seed:make seed_name`
- **Run all seeders**: `npm run seed`
- **Run a specific seeder**: `npm run seed -- --specific=seed_name.cjs`

This documentation allows you to manage migrations and seeders more efficiently by using scripts in `package.json`, speeding up your development and database management process.

### **Email and Password for Login**
- Email and Password: `example@test.com` or `senajhon@gmail.com`