import type { RequestHandler } from '@sveltejs/kit';
import sql from '$lib/server/db';

async function deleteSessionByToken(token: string) {
  await sql`
    DELETE FROM sessions WHERE token = ${token}
  `;
}

export const POST: RequestHandler = async ({ cookies }) => {
  const sessionToken = cookies.get('session');

  if (sessionToken) {
    await deleteSessionByToken(sessionToken);
  }

  cookies.set('session', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0 // Hapus cookie
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/login'
    }
  });
};
