import cors from '@koa/cors'

export default {
  configureServer: ({ app }) => {
    app.use(cors({ origin: '*' }));
  },
  // This will fix the logo URL problem,
  // but is waiting on https://github.com/vuejs/vue-next/pull/2477
  // vueTransformAssetUrls: {
  //   base: 'http://localhost:3000/src/'
  // }
}