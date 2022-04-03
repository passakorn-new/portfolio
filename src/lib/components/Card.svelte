<script lang="ts">
  import GlobeIcon from '$lib/components/icons/GlobeIcon.svelte';

  type CardInfo = {
    title: string;
    description: string;
    year: string | number;
    thumbnail: string;
    link?: string;
  };

  export let card_info: CardInfo;
</script>

<div
  class={`transition duration-500 relative flex-none bg-secondary overflow-y-auto rounded-2xl px-7 py-5 ${$$props.class} shadow-lg hover:shadow-2xl hover:scale-110`}
>
  {#if card_info.link}
    <a
      class="absolute right-4 top-4 cursor-pointer"
      href={card_info.link}
      target="_blank"
      aria-label="link_to"
    >
      <GlobeIcon />
    </a>
  {/if}

  <p class="text-xl pr-4 mb-2 border-b-2 text-tertiary font-bold w-fit">{card_info.title}</p>

  {#if card_info.thumbnail}
    <img class="py-3" alt={card_info.title} src={card_info.thumbnail} />
  {/if}

  <p>{card_info.description}</p>

  {#if card_info.year}
    <div class="absolute bottom-0 right-0 px-3 py-1 bg-tertiary text-primary rounded-br-lg">
      {card_info.year}
    </div>
  {/if}
</div>
