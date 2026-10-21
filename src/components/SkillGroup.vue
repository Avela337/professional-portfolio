<script setup>
defineProps ({group: Object})
</script>

<template>
    <section class="group">
        <h2>{{ group.title }}</h2>
        <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
        <p class="muted">{{ group.note }}</p>
    </section>
</template>

<style scoped>
.group { border-top: 1px solid var(--line); padding-top: 1.5rem; }
h2 { font-size: 1.3rem; margin-bottom: 1rem; }
ul { list-style: none; padding: 0; margin: 0 0 1rem; display: grid; gap: 0.35rem; }
</style>