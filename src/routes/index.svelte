<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import SlideContent from '$lib/components/SlideContent.svelte'

  let sub_header_texts: string[] = ['Software Engineer', 'Problem Solver', 'Agile 👥']
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="w-full h-full flex flex-col justify-center items-center text-center gap-4 mb-12">
  <p class="text-6xl text-white"> Hello, I'm New 🧑🏻‍💻</p>
  <SlideContent 
    class="absolute -translate-x-1/2 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-tertiary" 
    contents={sub_header_texts}
  />
</div>
