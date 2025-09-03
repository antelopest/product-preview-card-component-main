import { defineConfig } from 'vite';

export default defineConfig({
  base: '/product-preview-card-component-main/',
  server: {
    port: 3000,
    host: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});
