import sql from '$lib/server/db';

export const GET = async () => {
  try {
    await sql`SELECT 1`;
    return new Response(JSON.stringify({ status: 'Database connected successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    return new Response(JSON.stringify({ status: 'Database connection failed', error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};