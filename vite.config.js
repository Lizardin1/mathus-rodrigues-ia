import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['b5d8-2804-d46-4329-b900-bd4d-4ec1-400b-9f85.ngrok-free.app']
  }
})
