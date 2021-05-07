import cors from '@koa/cors'
import vue from '@vitejs/plugin-vue'

export default {
  configureServer: ({ app }) => {
    app.use(cors({ origin: '*' }));
  },
  rollupInputOptions: {
    input: 'src/main.js',
    preserveEntrySignatures: true
  },
  rollupOutputOptions: {
    format: 'system',
  },
  plugins: [vue()],
  vueTransformAssetUrls: {
    base: 'https://localhost:3000/src/'
  }
}