<script lang="ts">
  import { fly } from 'svelte/transition';
  import TextHeader from '$lib/components/TextHeader.svelte';
  import { paragraph_1, paragraph_2, paragraph_3 } from '$lib/settings.json';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="w-full h-full overflow-auto px-20 py-20 sm:px-10 sm:py-5">
  <TextHeader text="About me 🙋‍♂️" with_line={true} />
  <div class="flex flex-row gap-3 md:flex-col">
    <div in:fly={{ y: 200, duration: 1000 }} class="flex flex-col gap-y-4 pl-8 w-4/6 md:w-full">
      <p class="leading-7"> {paragraph_1} </p>
      <p class="leading-7"> {paragraph_2} </p>
      <p class="leading-7"> {paragraph_3} </p>
    </div>
    <div in:fly={{ x: 200, duration: 1000 }} class="w-2/6 self-center md:w-full"> 
      <img class="rounded-full ml-auto mr-auto" alt="passakorn.k" width={240} height={240} src="static/profile.jpg" />
    </div>
  </div>
</div>
