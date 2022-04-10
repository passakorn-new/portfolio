<script lang="ts">
  import { fly } from 'svelte/transition';
  import { projects } from '$src/data';
  import TextHeader from '$lib/components/TextHeader.svelte';
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="w-full h-full px-20 py-20 overflow-y-scroll overflow-x-hidden sm:px-10 sm:py-5">
  <TextHeader text="Projects" withLine={true} />

  <div
    in:fly={{ x: 200, duration: 1000 }}
    class="flex flex-row flex-wrap gap-8 p-4 justify-center 2xl:justify-start"
  >
    {#each projects as project}
      <Card class="w-96 h-56 break-words lg:w-full lg:h-full" card_info={project} />
    {/each}
  </div>
</div>
