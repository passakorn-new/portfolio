<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<main class="flex flex-col w-screen h-screen justify-between overflow-hidden">
  <Header />
  <slot />
  <Footer />
</main>
