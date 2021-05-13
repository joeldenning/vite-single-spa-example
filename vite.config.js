import vue from '@vitejs/plugin-vue'

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  base: 'http://localhost:3000',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}