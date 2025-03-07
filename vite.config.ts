import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      features: path.resolve(__dirname, './src/features'),
      entities: path.resolve(__dirname, './src/entities'),
      shared: path.resolve(__dirname, './src/shared'),
      widgets: path.resolve(__dirname, './src/widgets'),
      app: path.resolve(__dirname, './src/app'),
    },
  },
  base: '/mindbox-todo-app/',
})
