import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    chunkSizeWarningLimit:2600
  },
  test:{
    environment:'jsdom',
    setupFiles:'./src/tests/setup.js'
  }
})
