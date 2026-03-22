<template>
  <div class="pricing-section">
    <div class="pricing-tier basic">
      <h2>Basic Plan</h2>
      <p>Ad-supported access to our resources.</p>
      <p>Price: $10/month</p>
    </div>
    <div class="pricing-tier optimal">
      <h2>Optimal Plan</h2>
      <p>Ad-free access plus additional features.</p>
      <p>Price: $20/month</p>
    </div>
    <div class="pricing-tier corporate">
      <h2>Corporate Plan</h2>
      <p>Full access for teams with priority support.</p>
      <p>Price: $50/month</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingSection',
};
</script>

<style scoped>
.pricing-section {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.pricing-tier {
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}
</style>