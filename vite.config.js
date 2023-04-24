import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@components': path.join(__dirname, 'src/components'),
    },
  },
})
