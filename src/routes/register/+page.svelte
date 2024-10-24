<script lang="ts">
  let email: string = '';
  let password: string = '';
  let firstName: string = '';
  let lastName: string = '';
  let errorMessage: string = '';
  let successMessage: string = '';

  const handleRegister = async () => {
    errorMessage = '';
    successMessage = '';
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName })
      });

      const data = await response.json();
      if (data.success) {
        successMessage = data.message;
        email = '';
        password = '';
        firstName = '';
        lastName = '';

        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 2000);
      } else {
        errorMessage = data.message;
      }
    } catch (error) {
      errorMessage = 'An error occurred during registration.';
    }
  };
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>

    {#if errorMessage}
      <div class="bg-red-100 text-red-800 p-2 mb-4 rounded">
        {errorMessage}
      </div>
    {/if}

    <form on:submit|preventDefault={handleRegister}>
      <div class="mb-4">
        <label for="text" class="block text-gray-700">First Name</label>
        <input
          id="firstName"
          type="firstName"
          bind:value={firstName}
          required
          class="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your first name"
        />
      </div>

      <div class="mb-4">
        <label for="text" class="block text-gray-700">Last Name</label>
        <input
          id="lastName"
          type="lastName"
          bind:value={lastName}
          class="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your Last Name"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          class="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-6">
        <label for="password" class="block text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          required
          class="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Register
      </button>
    </form>
    <p class="text-center text-gray-700 my-2">
      Sudah memiliki akun? 
      <a href="/login" class="text-blue-500 underline hover:text-blue-700">
          Login di sini
      </a>
    </p>  
  </div>
</main>
