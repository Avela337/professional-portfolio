<script setup>
import { ref } from 'vue';

const base= import.meta.env.BASE_URL
const photoFailed = ref(false)
</script>

<template>
    <section class="hero container">
        <div class="copy">
            <p class="label">Full Stack developer. Open yo opportunities</p>
            <h1>Everyday problems. Practical software</h1>
            <p class="lead">
                I'm Avela, a full stack developer in Cape Town. I build REST APIs and responsive Vue interfaces that help real people get things done.
            </p>
            <div class="actions">
                <RouterLink to="/projects" class="btn">View my work</RouterLink>
                <a :href="`${base}cv/Avela-Gxotiwe-CV.pdf`" class="btn ghost" download>Download CV</a>"
            </div>
        </div>
        <figure>
            <img v-if="!photoFailed" :src="`${base} images/avela.jpg`" alt="Avela Gxotiwe" @error="photoFailed=true"/>
            <div v-else class="photo-pllaceholder" aria-hidden="true">ag.</div>
            <figcaption>Cape Town, South Africa</figcaption>
        </figure>
    </section>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: center; padding: 5rem 0 6rem; }
.lead { font-size: 1.15rem; color: var(--muted); margin: 1.5rem 0 2rem; }
.actions { display: flex; flex-wrap: wrap; gap: 1rem; }
figure { margin: 0; }
img, .photo-placeholder { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: var(--radius); }
.photo-placeholder { display: grid; place-items: center; background: var(--accent-soft); color: var(--accent); font-size: 4rem; }
figcaption { margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--muted); }
@media (max-width: 820px) {
  .hero { grid-template-columns: 1fr; gap: 2.5rem; padding: 3rem 0 4rem; }
  figure { max-width: 320px; }
}
</style>