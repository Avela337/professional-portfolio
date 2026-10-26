<script setup>
defineProps({ group: Object })
</script>

<template>
    <section class="group">
        <h2>{{ group.title }}</h2>
        <ul>
            <li v-for="item in group.items" :key="item.name">
                <i v-if="item.icon" :class="item.icon" class="icon" aria-hidden="true"></i>
                <span v-else class="icon badge" aria-hidden="true">{{ item.badge }}</span>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <p class="muted">{{ group.notes }}</p>
    </section>
</template>

<style scoped>
.group { border-top: 1px solid var(--line); padding-top: 1.5rem; }
h2 { font-size: 1.3rem; margin-bottom: 1rem; }
ul { list-style: none; padding: 0; margin: 0 0 1rem; display: grid; gap: 0.6rem; }
li { display: flex; align-items: center; gap: 0.75rem; }
.icon { width: 1.75rem; font-size: 1.5rem; line-height: 1; text-align: center; flex-shrink: 0; }
.badge { font-family: var(--font-mono); font-size: 0.6rem; font-weight: 600; color: var(--accent); background: var(--accent-soft); border-radius: 4px; padding: 0.3rem 0; }
</style>
