<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <div class="dark">
    <section class="page container">
      <p class="label">Contact</p>
      <h1>Good work starts with a conversation.</h1>
      <div class="cols">
        <div>
          <p class="lead">
            Have an opportunity or a project to talk about? Send me a message and tell me
            what you're building.
          </p>
          <ContactForm />
        </div>
        <aside>
          <p>Cape Town, South Africa</p>
          <p class="muted">Open to local and remote opportunities.</p>
          <p><a href="https://github.com/Avela337" target="_blank" rel="noopener">GitHub </a></p>
          <p><a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener">LinkedIn </a></p>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dark { background: var(--dark); color: var(--dark-text); min-height: 70vh; }
.dark .label, .dark .muted { color: #a4aaa3; }
h1 { max-width: 14ch; margin-bottom: 2.5rem; }
.lead { font-size: 1.1rem; margin-bottom: 2rem; }
.cols { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4rem; }
aside a { text-decoration: none; border-bottom: 1px solid var(--accent-soft); }
@media (max-width: 820px) { .cols { grid-template-columns: 1fr; gap: 2.5rem; } }
</style>