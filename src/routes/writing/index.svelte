<script lang="ts">
  import TextHeader from '$lib/components/TextHeader.svelte';
  import Card from '$lib/components/Card.svelte';
  import { onMount } from 'svelte';
  import { Shadow } from 'svelte-loading-spinners';
  import { fly } from 'svelte/transition';

  type StoryFields = {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
  };

  type StoryDetails = {
    items: StoryFields[];
    status: 'ok' | 'error';
  };

  let stories: StoryFields[] = [];
  let loading: boolean = true;

  const extractContentStory = (stories) => {
    for (let i in stories) {
      let first_paragraph: string = stories[i]['description'].match(/<p>(.*?)<\/p>/)[1];
      stories[i]['description'] = `${first_paragraph} ... `;
    }
    loading = false;
    return stories;
  };

  onMount(async () => {
    try {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://api.medium.com/feed/@passakorn.kijudomsup'
      );
      const { items, status }: StoryDetails = await response.json();

      stories = status == 'ok' ? extractContentStory(items) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
</script>

<svelte:head>
  <title>Writing</title>
</svelte:head>

<div class="w-full h-full relative   overflow-auto px-20 py-20 sm:px-10 sm:py-5">
  {#if loading}
    <div class="w-fit h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Shadow color="white" duration="1s" size="50" unit="px" />
    </div>
  {:else}
    <TextHeader text="Writing" withLine={true} />
    <div
      in:fly={{ x: 200, duration: 1000 }}
      class="flex flex-row flex-wrap gap-8 p-4 justify-center"
    >
      {#each stories as story}
        <Card class="w-96 h-72 break-words md:w-full md:h-full" card_info={story} />
      {/each}
    </div>
  {/if}
</div>
