<template>
  <section class="cta-section" style="background-color: white; padding: 20px; text-align: center;">
    <h2>Join Us Now!</h2>
    <p>Your next adventure awaits. Don't miss out!</p>
    <button @click="handleClick">Get Started</button>
    <div class="icons">
      <i class="fingerprint-icon">🖊️</i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
  methods: {
    handleClick() {
      // Handle click event
      console.log('CTA clicked!');
    }
  }
}
</script>

<style scoped>
.cta-section {
  /* Additional styling can be added here */
}
.fingerprint-icon {
  font-size: 24px;
  margin-top: 10px;
}
</style>