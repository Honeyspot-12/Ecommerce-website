import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: '/React-Js-project-Stylehaven/',
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Change 3000 to your backend port if different
    },
  },
  

  build: {
    outDir: 'build'
  }

})
