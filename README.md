# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

### **Membuat Migrasi dan Seeder Menggunakan Knex.js**

**Knex.js** adalah library query builder untuk Node.js yang mendukung berbagai jenis database, termasuk PostgreSQL, MySQL, dan SQLite. Knex memungkinkan Anda mengelola migrasi skema database dan seeder untuk data awal secara efisien.

#### **Instalasi Knex.js dan Driver Database**

Untuk memulai, instal **Knex.js** dan driver database yang sesuai (misalnya, PostgreSQL):

```bash
npm install knex pg
```

Jika Anda menggunakan database lain seperti MySQL, Anda bisa mengganti `pg` dengan driver yang relevan seperti `mysql2`.

#### **Kegunaan Utama Knex:**

1. **Migrasi**: Mengelola perubahan struktur database (misalnya, membuat, mengubah, atau menghapus tabel).
2. **Seeder**: Mengisi tabel dengan data awal atau data contoh.
3. **Query Builder**: Menyusun query SQL secara dinamis menggunakan API JavaScript.

Untuk mempermudah penggunaan perintah migrasi dan seeder, Anda dapat menggunakan perintah yang lebih singkat sebagai berikut:

- **Membuat migrasi baru**: `npm run migrate:make create_namamigrasi_table`
- **Menjalankan semua migrasi**: `npm run migrate`
- **Rollback migrasi terakhir**: `npm run rollback`
- **Membuat seeder baru**: `npm run seed:make seed_nama`
- **Menjalankan semua seeder**: `npm run seed`
- **Menjalankan seeder tertentu**: `npm run seed -- --specific=namaseed.js`

Dokumentasi ini memungkinkan Anda mengelola migrasi dan seeder dengan lebih efisien menggunakan skrip di `package.json`, sehingga Anda bisa mempercepat pengembangan dan pengelolaan database.