import vue from '@vitejs/plugin-vue'

export default {
  preview: {
    port: "3000",
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: true,
      input: "src/main.js",
      output: {
        format: "system",
        entryFileNames: "src/[name].js",
      },
    },
  },
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}