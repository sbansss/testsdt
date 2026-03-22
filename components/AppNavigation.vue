<template>
  <nav class="glitch-hover">
    <div class="logo">My Logo</div>
    <ul class="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>

<style scoped>
.glitch-hover {
  position: relative;
  display: inline-block;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.menu li {
  position: relative;
}

.menu li a {
  text-decoration: none;
  color: #000;
}
</style>