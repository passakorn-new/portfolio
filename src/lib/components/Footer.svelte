<script lang="ts">
  import IconButton from '$lib/components/IconButton.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
  import LeetcodeIcon from '$lib/components/icons/LeetcodeIcon.svelte';
  import GmailIcon from '$lib/components/icons/GmailIcon.svelte';
  import { github_link, linkedin_link, leetcode_link, gmail_link } from '$lib/settings.json';
</script>

<footer class="px-4 py-2 flex flex-col gap-4 justify-center items-center bottom-0">
  <div class="flex flex-row gap-4">
    <IconButton href={github_link} target="_blank">
      <GithubIcon />
    </IconButton>
    <IconButton href={linkedin_link} target="_blank">
      <LinkedInIcon />
    </IconButton>
    <IconButton href={leetcode_link} target="_blank">
      <LeetcodeIcon />
    </IconButton>
    <IconButton href={gmail_link} target="_blank">
      <GmailIcon />
    </IconButton>
  </div>
  <p class="text-tertiary sm:text-xs">Made with svelte</p>
</footer>
