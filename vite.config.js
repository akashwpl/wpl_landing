import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react-editor-js'],  // Prevent Vite from externalizing this dependency
  },
  optimizeDeps: {
    include: ['react-editor-js']
  }
})