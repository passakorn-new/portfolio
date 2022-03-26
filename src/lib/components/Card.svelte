<script lang="ts">
  import GlobeIcon from '$lib/components/icons/GlobeIcon.svelte';

  type Project = {
    name: string;
    information: string;
    year: string | number;
    link?: string;
  };

  export let project: Project;
</script>

<div
  class="transition duration-500 relative flex-none bg-secondary w-96 h-56 rounded-2xl break-words px-7 py-5 sm:w-full sm:h-full shadow-lg hover:shadow-2xl hover:scale-110"
>
  {#if project.link}
    <a class="absolute right-4 top-4 cursor-pointer" href={project.link} target="_blank">
      <GlobeIcon />
    </a>
  {/if}
  <p class="text-xl mb-2 border-b-2 text-tertiary font-bold w-fit">{project.name}</p>
  <p>{project.information}</p>
  <div class="absolute bottom-0 right-0 px-3 py-1 bg-tertiary text-primary rounded-br-lg">
    {project.year}
  </div>
</div>
