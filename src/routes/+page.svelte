<script>
  // Data untuk demo, bisa Anda sesuaikan
  let features = [
    {
      title: 'Fast and Responsive',
      description: 'Our platform is designed to be fast and fully responsive on all devices.',
      icon: '⚡'
    },
    {
      title: 'Secure',
      description: 'Your data is encrypted and kept safe with industry-leading security practices.',
      icon: '🔒'
    },
    {
      title: 'User Friendly',
      description: 'Intuitive UI for easy navigation and seamless experience.',
      icon: '👌'
    }
  ];
</script>

<main class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  <!-- Header -->
  <header class="w-full bg-blue-600 text-white py-6">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-bold">My App</h1>
      <nav>
        <a href="/" class="mx-4 text-white hover:underline">Home</a>
        <a href="/about" class="mx-4 text-white hover:underline">About</a>
        <a href="/contact" class="mx-4 text-white hover:underline">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="w-full py-20 bg-white text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4">Welcome to My App</h2>
      <p class="text-gray-700 mb-8">The platform that provides fast, secure, and user-friendly solutions.</p>
      <a href="/get-started" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Started</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="w-full py-20 bg-gray-50">
    <div class="container mx-auto text-center">
      <h3 class="text-3xl font-semibold mb-6">Why Choose Us</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each features as feature}
          <div class="p-6 bg-white shadow-md rounded-lg">
            <div class="text-5xl mb-4">{feature.icon}</div>
            <h4 class="text-xl font-semibold mb-2">{feature.title}</h4>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="w-full py-6 bg-blue-600 text-white text-center">
    <p>&copy; 2024 My App. All rights reserved.</p>
  </footer>
</main>
