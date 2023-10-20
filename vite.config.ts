import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export const __filename = fileURLToPath(new URL(import.meta.url))
export const __dirname = dirname(__filename)

const pathAlias = {
  '@/config': resolve(__dirname, './src/config'),
  '@/components': resolve(__dirname, './src/components'),
  '@/pages': resolve(__dirname, './src/pages'),
  '@/services': resolve(__dirname, './src/services'),
  '@/styles': resolve(__dirname, './src/styles'),
  '@/utils': resolve(__dirname, './src/utils'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...pathAlias,
    },
  },
})
