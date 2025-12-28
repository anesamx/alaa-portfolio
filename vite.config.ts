import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitly set the project root. This ensures Vite knows where to find your index.html.
  root: process.cwd(),
})
