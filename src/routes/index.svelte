<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import SlideContent from '$lib/components/SlideContent.svelte';
  import { sub_headers, description } from '$lib/settings.json';
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="w-full h-full flex flex-col justify-center items-center text-center gap-4">
  <p class="text-6xl text-white sm:text-3xl">Hello, I'm New 🧑🏻‍💻</p>
  <SlideContent
    class="absolute -translate-x-1/2 truncate text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-tertiary sm:text-2xl"
    contents={sub_headers}
  />
  <p class="text-gray-400 mt-8 sm:text-xs">{description}</p>
</div>
