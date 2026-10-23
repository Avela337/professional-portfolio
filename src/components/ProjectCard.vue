<script setup>
import { computed } from 'vue';

const props = defineProps({project: Object})
const src= computed( ()=>
    props.project.image? import.meta.env.BASE_URL + props.project.image.replace(/^\//,''):null

)
</script>

<template>
    <article class="card">
        <img v-if="src" :src="src" :alt="`${project.title} screenshot`"/>
        <div v-else class="placeholder">Iyeza sungxama</div>

        <div class="body">
            <p class="label">{{ project.number }}/ {{ project.type }}</p>
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <p class="role">{{ project.role }}</p>

            <ul class="tags">
                <li v-for="t in (project.tags || project.tag)" :key="t">{{ t }}</li>

            </ul>
            <div class="links">
                <a v-for="l in project.links" :key="l.label" :href="l.url" target="_blank" rel="noopener">
                    {{ l.label }} click
                </a>
            </div>
        </div>
    </article>
</template>

<style scoped>
.card { display: grid; grid-template-columns: 1.2fr 1fr; gap: 2.5rem; align-items: center; margin-bottom: 4rem; }
.placeholder { aspect-ratio: 16 / 10; display: grid; place-items: center; background: var(--surface); border-radius: var(--radius); color: var(--muted); font-family: var(--font-mono); font-size: 0.85rem; }
img { width: 100%; border-radius: var(--radius); }
h2 { margin-bottom: 1rem; }
.role { font-size: 0.95rem; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 1.25rem 0; }
.tags li { font-family: var(--font-mono); font-size: 0.78rem; border: 1px solid var(--line); padding: 0.2rem 0.6rem; border-radius: 4px; }
.links { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; }
.links a { text-decoration: none; border-bottom: 1px solid var(--accent); }
.links a:hover { color: var(--accent); }
@media (max-width: 768px) { .card { grid-template-columns: 1fr; gap: 1.5rem; } }
</style>
