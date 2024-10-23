<script lang="ts">
  let email: string = '';
  let password: string = '';
  let errorMessage: string = '';
  let successMessage: string = '';

  const handleRegister = async () => {
    errorMessage = '';
    successMessage = '';
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.success) {
        successMessage = data.message;
        email = '';
        password = '';
      } else {
        errorMessage = data.message;
      }
    } catch (error) {
      errorMessage = 'An error occurred during registration.';
    }
  };
</script>

<h1>Register</h1>

{#if errorMessage}
  <p style="color: red;">{errorMessage}</p>
{/if}

{#if successMessage}
  <p style="color: green;">{successMessage}</p>
{/if}

<form on:submit|preventDefault={handleRegister}>
  <label>
    Email:
    <input type="email" bind:value={email} placeholder="test@test.com" required />
  </label>
  <br>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <br>
  <button type="submit">Register</button>
</form>
