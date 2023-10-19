import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import { __dirname } from './src/utils/path-extra'

const pathAlias = {
  '@/': resolve(__dirname, './src'),
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
