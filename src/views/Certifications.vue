<script setup>
import { certifications } from '../data/certifications'
import CertificateCard from '../components/CertificateCard.vue'
</script>

<template>
  <section class="page container">
    
    <h1 class="title">Learning milestones and credentials.</h1>
    <CertificateCard v-for="(c, i) in certifications" :key="i" :cert="c" />
  </section>
</template>

<style scoped>
.title { max-width: 18ch; margin-bottom: 3rem; }
</style>