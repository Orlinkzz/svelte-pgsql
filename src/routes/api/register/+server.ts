import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import sql from '$lib/server/db';

async function isEmailTaken(email: string): Promise<boolean> {
  try {
    const result = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    return result.length > 0;
  } catch (error) {
    console.error('Database error in isEmailTaken:', error);
    throw new Error('Database error');
  }
}

async function createUser(email: string, hashedPassword: string, firstName: string, lastName: string): Promise<void> {
  try {
    await sql`
      INSERT INTO users (email, password, first_name, last_name) 
      VALUES (${email}, ${hashedPassword}, ${firstName}, ${lastName})
    `;
  } catch (error) {
    console.error('Database error in createUser:', error);
    throw new Error('Database error');
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email, password, firstName, lastName }: { email: string; password: string; firstName: string; lastName: string } = await request.json();

    if (!isValidEmail(email)) {
      console.error('Invalid email format:', email);
      return new Response(JSON.stringify({ success: false, message: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (await isEmailTaken(email)) {
      console.error('Email is already taken:', email);
      return new Response(JSON.stringify({ success: false, message: 'Email is already taken' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser(email, hashedPassword, firstName, lastName);

    // Mengembalikan respons JSON sukses
    return new Response(JSON.stringify({ success: true, message: 'User registered successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in registration process:', error);
    return new Response(JSON.stringify({ success: false, message: `Internal server error: ${error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
