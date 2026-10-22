<script setup>
import { ref } from 'vue';

const open = ref(false)
const links=[
    {
        to:'/',label:'Home'
    },
    {to: '/about',label:'About'},
    {to:'/skills',label:'Skills'},
    {to:'/projects',label:'Projects'},
    {to:'/certifications',label:'Certifications'},
    {to:'/contact',label:'Contact'}

]
</script>

<template>
  <header class="nav">
    <div class="container bar">
      <RouterLink to="/" class="brand" @click="open = false">
        Avela Gxotiwe
      </RouterLink>

      <button class="toggle" :aria-expanded="open" aria-controls="menu" @click="open = !open">
        {{ open ? 'Close' : 'Menu' }}
      </button>

      <!-- Links must be inside the nav element -->
      <nav id="menu" :class="{ open }" aria-label="Main">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" @click="open = false">
          {{ l.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav { position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--line); }
.bar { display: flex; align-items: center; justify-content: space-between; min-height: 4.5rem; }
.brand { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; font-weight: 500; font-size: 1.1rem; }
nav { display: flex; gap: 1.8rem; }
nav a { text-decoration: none; color: var(--muted); font-size: 0.95rem; padding: 0.25rem 0; border-bottom: 2px solid transparent; }
nav a:hover { color: var(--ink); }
nav a.router-link-exact-active { color: var(--ink); border-bottom-color: var(--accent); }
.toggle { display: none; background: none; border: 1px solid var(--line); border-radius: var(--radius); padding: 0.4rem 0.9rem; font: inherit; cursor: pointer; }
@media (max-width: 820px) {
  .toggle { display: block; }
  nav { display: none; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; gap: 0; background: var(--bg); border-bottom: 1px solid var(--line); padding: 0.5rem 1.5rem 1rem; }
  nav.open { display: flex; }
  nav a { padding: 0.8rem 0; }
}
</style>
