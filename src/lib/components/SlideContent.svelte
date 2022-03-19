<script lang="ts">
  import { onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let contents: string[] | number[]
  let current_index: number = 0
  let contents_len = contents.length 

  const interval = setInterval(() => {
    current_index = (current_index + 1) % contents_len
  }, 3000)

  onDestroy(() => clearInterval(interval));
</script>

<div>
  {#key contents[current_index]}
    <p class={$$props.class} in:fly="{{ y: 50, duration: 2000 }}" out:fade>
      {contents[current_index]}
    </p>
  {/key}
</div>