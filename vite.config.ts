import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/portfolio/' : '/',
    plugins: [react()],
    server: {            // ←--追加
      host: true,
      port: 5173,
    }
  }
})


