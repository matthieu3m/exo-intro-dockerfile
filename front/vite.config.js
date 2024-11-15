import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permet à Vite d'écouter sur toutes les interfaces réseau
    watch: {
      usePolling: true,
    }       // Le port sur lequel l'app sera exposée (modifiable)
  }
})
