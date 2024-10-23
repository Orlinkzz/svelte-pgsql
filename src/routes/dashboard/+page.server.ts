import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import sql from '$lib/server/db';

async function getUserBySessionToken(token: string) {
  const result = await sql`
    SELECT users.first_name, users.last_name 
    FROM users 
    JOIN sessions ON users.id = sessions.user_id
    WHERE sessions.token = ${token} AND sessions.expires_at > NOW()
  `;
  console.log('Database result:', result);
  return result[0];
}

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionToken = cookies.get('session');
  console.log('Session token:', sessionToken);
  
  if (!sessionToken) {
    throw redirect(302, '/login');
  }

  const user = await getUserBySessionToken(sessionToken);
  console.log('User data:', user);

  if (!user) {
    throw redirect(302, '/login');
  }

  return {
    fullName: `${user.first_name} ${user.last_name}`
  };  
};
