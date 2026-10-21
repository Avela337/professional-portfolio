<script setup>
import { skills } from '../data/skills';
import SkillGroup from '../components/SkillGroup.vue';
</script>

<template>
    <section class="page container">
        
        <h1>A solid foundation. An open mind.</h1>
        <p class="muted intro">The tools I use in my projects and the ones I'm still learning.</p>
        <div class="grid">
            <SkillGroup v-for="g in skills" :key="g.title" :group="g"/>
        </div>
    </section>
</template>

<style scoped>
h1 { max-width: 18ch; }
.intro { margin: 1.5rem 0 3rem; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
@media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
</style>