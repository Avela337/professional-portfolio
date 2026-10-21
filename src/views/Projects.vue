<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="page container">
    
    <h1 class="title">Built to learn. Made to work.</h1>
    <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
  </section>
</template>

<style scoped>
.title { max-width: 16ch; margin-bottom: 3.5rem; }
</style>