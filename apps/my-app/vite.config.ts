import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8814,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
