import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
