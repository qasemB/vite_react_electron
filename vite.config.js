import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['electron'],
    },
    outDir: 'dist', // مسیر خروجی
  },
  resolve: {
    alias: {
      path: 'path-browserify',
    },
  },
  base: './', // اضافه کردن مسیر نسبی
})
