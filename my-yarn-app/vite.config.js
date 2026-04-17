import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/setupTests.js',
},

  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    open: false, 
  },
});