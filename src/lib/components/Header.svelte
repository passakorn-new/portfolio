<script lang="ts">
  import { page } from '$app/stores';
  import { fullname } from '$lib/settings.json';
</script>

<header class="px-4 py-2 text-white flex justify-between sm:justify-center">
  <p
    class="p-4 text-sm tracking-widest uppercase font-mono duration-300 cursor-default hover:-translate-y-1 hover:scale-110 hover:text-tertiary sm:hidden"
  >
    {fullname}
  </p>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a sveltekit:prefetch href="/"> Home</a>
      </li>
      <li class:active={$page.url.pathname === '/about'}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
      <li class:active={$page.url.pathname === '/projects'}>
        <a sveltekit:prefetch href="/projects">Projects</a>
      </li>
      <li class:active={$page.url.pathname === '/writing'}>
        <a sveltekit:prefetch href="/writing">Writing</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active {
    animation: tab-selected 0.5s;
    -webkit-animation: tab-selected 0.5s;
    -moz-animation: tab-selected 0.5s;
    -o-animation: tab-selected 0.5s;
    -ms-animation: tab-selected 0.5s;
    transform: scale(1.15);
    border-bottom: 2px solid theme('colors.tertiary');
  }

  nav a {
    display: flex;
    text-align: center;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: theme('colors.tertiary');
  }
</style>
