<script lang="ts">
  export let href: string = '#';
  export let target: '_blank' | '_self' | '_parent' | '_top' | 'framename' = '_blank';
</script>

<a {href} {target} class="duration-300 hover:scale-150">
  <slot />
</a>
