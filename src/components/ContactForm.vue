<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'

const form = ref(null)
const status = ref('idle')

async function send(){
    status.value='sending'
    try{

    
    await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.value,
        {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY}

    )
    status.value = 'sent'
    form.value.reset()

}catch(e){
    status.value= 'error'
}
}
</script>

<template>
    <form ref="form" @submit.prevent="send">
        <label>Your name
            <input name="from_name" type="text" required autocomplete="name" />
        </label>
        <label> Your email
            <input name="reply_to" type="email" required autocomplete="email"/>

        </label>
        <label>Message
            <textarea name="message" rows="5" required></textarea>
        </label>
        <button class="btn" type="submit" :disabled="status==='sending'">
            {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
        </button>
        <p class="note" role="status" aria-live="polite">
            <template v-if ="status==='sent'">Message sent. I will reply as soon as I can</template>
            <template v-else-if = "status==='error'">Message not sent. Check your connection and try again or email me directly</template>
        </p>
    </form>
</template>

<style scpoed>
form { display: grid; gap: 1.1rem; max-width: 520px; }
label { display: grid; gap: 0.4rem; font-size: 0.9rem; }
input, textarea { font: inherit; padding: 0.75rem 0.9rem; border-radius: var(--radius); border: 1px solid #3b443f; background: transparent; color: var(--dark-text); }
input:focus-visible, textarea:focus-visible { outline: 2px solid var(--accent-soft); outline-offset: 2px; }
.btn { justify-self: start; }
.btn:disabled { opacity: 0.6; cursor: wait; }
.note { min-height: 1.5rem; margin: 0; font-size: 0.9rem; }
</style>