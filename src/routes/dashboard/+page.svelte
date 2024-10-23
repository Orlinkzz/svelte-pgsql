<script lang="ts" context="module">
  export type { load } from './+page.server';
</script>

<script lang="ts">
  export let fullName: string;
  console.log(fullName);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST'
    });
    window.location.href = '/login';
  };
</script>

<main class="min-h-screen flex bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-blue-600 text-white flex flex-col">
    <div class="h-16 flex items-center justify-center text-2xl font-bold border-b border-blue-700">
      My Dashboard
    </div>
    <nav class="flex-1 px-4 py-6 space-y-2">
      <a href="/#" class="block py-2 px-4 bg-blue-700 rounded hover:bg-blue-500">Home</a>
      <a href="/#" class="block py-2 px-4 bg-blue-700 rounded hover:bg-blue-500">Profile</a>
      <a href="/#" class="block py-2 px-4 bg-blue-700 rounded hover:bg-blue-500">Settings</a>
    </nav>
    <button
      class="bg-red-500 hover:bg-red-600 text-white py-3 mx-4 rounded mb-4 transition"
      on:click={handleLogout}
    >
      Logout
    </button>
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col">
    <!-- Header -->
    <header class="h-16 bg-white shadow px-4 flex items-center justify-between">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <div class="text-gray-600">Welcome, !</div>
    </header>

    <!-- Dashboard Content -->
    <section class="flex-1 p-8">
      <h2 class="text-2xl font-bold mb-6">Overview</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <p>Welcome,  !</p>
      </div>
    </section>
  </div>
</main>
