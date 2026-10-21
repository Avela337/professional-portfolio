<script setup>
defineProps({cert: Object})

</script>

<template>
  <article class="cert">
    <div class="top">
      <h2>{{ cert.name }}</h2>
      <span class="status" :class="cert.status">
        {{ cert.status === 'completed' ? 'Completed' : 'In Progress' }}
      </span>
    </div>
    <p class="muted">{{ cert.issuer }} ~ {{ cert.date }}</p>
    <p v-if="cert.Summary">{{ cert.Summary }}</p>
    
    <div v-if="cert.file" class="actions">
      <a :href="`${base}${cert.file}`" target="_blank" rel="noopener" class="cert-link">
        View Certificate (PDF) 
      </a>
    </div>
  </article>
</template>

<style scoped>
.cert { background: var(--surface); border-radius: var(--radius); padding: 1.5rem 1.75rem; margin-bottom: 1.25rem; }
.top { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 0.4rem; }
h2 { font-size: 1.4rem; }
.status { font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); white-space: nowrap; }
.status.completed { color: var(--accent); }
</style>