<script lang="ts">
  import { fly } from 'svelte/transition';

  export let text: string;
  export let with_line: boolean = false;
</script>
  
<div in:fly={{ x: -200, duration: 1000 }} class="w-fit py-6">
  <h1>{text}</h1>
  {#if with_line }
    <hr class="border-2 border-tertiary border-dotted"/>
  {/if}
</div>
  