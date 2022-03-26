<script lang="ts">
  import IconButton from '$lib/components/IconButton.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
  import LeetcodeIcon from '$lib/components/icons/LeetcodeIcon.svelte';
  import GmailIcon from '$lib/components/icons/GmailIcon.svelte';
  import { socialLink } from '$src/data';
</script>

<footer class="px-4 py-2 flex flex-col gap-4 justify-center items-center bottom-0">
  <div class="flex flex-row gap-4">
    <IconButton name="github" href={socialLink.github} target="_blank">
      <GithubIcon />
    </IconButton>
    <IconButton name="linkedin" href={socialLink.linkedin} target="_blank">
      <LinkedInIcon />
    </IconButton>
    <IconButton name="leetcode" href={socialLink.leetcode} target="_blank">
      <LeetcodeIcon />
    </IconButton>
    <IconButton name="gmail" href={socialLink.gmail} target="_blank">
      <GmailIcon />
    </IconButton>
  </div>
  <p class="text-tertiary sm:text-xs">Made with svelte</p>
</footer>
