import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['7169-2804-d46-432f-1900-c5b4-ecdf-ac79-556c.ngrok-free.app']
  }
})
