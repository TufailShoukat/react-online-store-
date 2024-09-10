import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output is going to 'dist'
    rollupOptions: {
      output: {
        manualChunks: undefined, // Try removing manual chunks if there's an issue
      }
    }
  }
});
