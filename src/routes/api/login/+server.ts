import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import type { RequestHandler } from '@sveltejs/kit';
import sql from '$lib/server/db';

async function getUserByEmail(email: string) {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  return result[0];
}

async function createSession(user_id: number, token: string) {
  await sql`
    INSERT INTO sessions (user_id, token, expires_at)
    VALUES (${user_id}, ${token}, NOW() + INTERVAL '1 day')
  `;
}

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { email, password }: { email: string; password: string } = await request.json();

  const user = await getUserByEmail(email);
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const sessionToken = randomUUID();
      await createSession(user.id, sessionToken);
      cookies.set('session', sessionToken, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only secure in production
        maxAge: 60 * 60 * 24 // 1 day expiration
      });

      return new Response(JSON.stringify({ success: true, message: 'Login successful' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    return new Response(JSON.stringify({ success: false, message: 'Invalid email' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
