<template>
  <section class="hero-section">
    <div class="background-decoration fade-in"></div>
    <div class="content-container">
      <h1>Welcome to Our Website</h1>
      <p>Your success starts here!</p>
      <button class="cta-button">Get Started</button>
      <button class="cta-button">Learn More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero-section {
  position: relative;
  text-align: center;
  color: white;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('path/to/your/background-image.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content-container {
  padding: 20px;
}

.cta-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>