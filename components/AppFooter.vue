<template>
  <footer>
    <div class="footer-links">
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
    </div>
    <div class="copyright">
      © 2026 Your Company Name. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-links {
  display: flex;
  justify-content: space-around;
  padding: 1em;
  background: #f1f1f1;
}

.copyright {
  text-align: center;
  padding: 1em;
  background: #f1f1f1;
}
</style>