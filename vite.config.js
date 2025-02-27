import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['a893-2804-d46-432f-1900-f4c3-e26c-1013-874b.ngrok-free.app']
  }
})
