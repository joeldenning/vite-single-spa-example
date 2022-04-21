import vue from '@vitejs/plugin-vue'

const BASE_URL = 'http://localhost:3000'

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: BASE_URL,
  server: {
    origin: BASE_URL,
  },
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}