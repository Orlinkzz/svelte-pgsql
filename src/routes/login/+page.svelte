<script lang="ts">
  let email: string = '';
  let password: string = '';
  let errorMessage: string = '';

  const handleLogin = async () => {
    errorMessage = '';
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        errorMessage = data.message;
      }
    } catch (error) {
      errorMessage = 'An error occurred during login.';
    }
  };
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
    <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

    {#if errorMessage}
      <div class="bg-red-100 text-red-800 p-2 mb-4 rounded">
        {errorMessage}
      </div>
    {/if}

    <form on:submit|preventDefault={handleLogin}>
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
        Login
      </button>
    </form>
  </div>
</main>
