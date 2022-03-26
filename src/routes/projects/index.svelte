<script lang="ts">
  import { fly } from 'svelte/transition';
  import { projects } from '$src/data';
  import TextHeader from '$lib/components/TextHeader.svelte';
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="w-full h-full overflow-auto px-20 py-20 sm:px-10 sm:py-5">
  <TextHeader text="Projects" withLine={true} />

  <div
    in:fly={{ x: 200, duration: 1000 }}
    class="flex flex-nowrap flex-row overflow-auto no-scrollbar gap-8 p-4 sm:flex-col sm:p-0"
  >
    {#each projects as project}
      <Card {project} />
    {/each}
  </div>
</div>
