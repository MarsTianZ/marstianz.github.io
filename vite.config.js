import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    allowedHosts: true, // Fitur Vite terbaru: 'true' akan mengizinkan semua domain forwarder
  }
})