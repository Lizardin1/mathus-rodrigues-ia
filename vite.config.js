import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3c8b-2804-d46-4329-b900-806d-81ca-2818-680d.ngrok-free.app']
  }
})
