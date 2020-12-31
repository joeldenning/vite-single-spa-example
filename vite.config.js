import cors from '@koa/cors'

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
  vueTransformAssetUrls: {
    base: 'http://localhost:3000/src/'
  }
}