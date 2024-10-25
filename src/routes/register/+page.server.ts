import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import sql from '$lib/server/db';

async function getSessionByToken(token: string) {
  const result = await sql`
    SELECT * FROM sessions WHERE token = ${token} AND expires_at > NOW()
  `;
  return result[0];
}

export const load: ServerLoad = async (event) => {
  const sessionToken = event.cookies.get('session');

  if (sessionToken) {
    const session = await getSessionByToken(sessionToken);

    if (session) {
      throw redirect(302, '/dashboard');
    }
  }
  return {};
};
