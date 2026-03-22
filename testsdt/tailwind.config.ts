import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#your_primary_color',
        background: '#your_background_color',
        surface: '#your_surface_color',
        'surface-container': '#your_surface_container_color',
        'outline-variant': '#your_outline_variant_color',
        'on-surface-variant': '#your_on_surface_variant_color',
      },
      fontFamily: {
        headline: ['YourHeadlineFont', 'sans-serif'],
        body: ['YourBodyFont', 'sans-serif'],
        label: ['YourLabelFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
});