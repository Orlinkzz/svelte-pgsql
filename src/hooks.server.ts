// import type { Handle } from '@sveltejs/kit';
// import knex from 'knex';
// import cron from 'node-cron';

// // Contoh fungsi untuk menghapus sesi yang expired
// const deleteExpiredSessions = async () => {
//     const now = new Date();
//     try {
//         await knex('sessions')
//             .where('expires_at', '<', now)
//             .del();
//         console.log('Expired sessions deleted.');
//     } catch (error) {
//         console.error('Error deleting expired sessions:', error);
//     }
// };

// // Menjadwalkan cron job yang akan berjalan setiap hari pukul 00:00
// cron.schedule('0 0 * * *', () => {
//     console.log('Running cron job to delete expired sessions');
//     deleteExpiredSessions();
// });

// // Handle requests and responses (sesuaikan dengan kebutuhan proyekmu)
// export const handle: Handle = async ({ event, resolve }) => {
//     const response = await resolve(event);
//     return response;
// };
