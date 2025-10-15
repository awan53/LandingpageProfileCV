import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/LandingpageProfileCV/',

  server: {
    historyApiFallback: true, // 🔥 ini penting untuk React Router
  },
  
})
