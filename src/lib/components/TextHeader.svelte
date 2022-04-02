<script lang="ts">
  import { fly } from 'svelte/transition';

  export let text: string;
  export let withLine: boolean = false;
</script>

<div in:fly={{ x: -200, duration: 1000 }} class="w-fit py-6 ">
  <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-white to-tertiary">{text}</h1>
  {#if withLine}
    <hr class="border-2 border-tertiary border-dotted " />
  {/if}
</div>
