import cors from '@koa/cors'

export default {
  configureServer: ({ app }) => {
    app.use(cors({ origin: '*' }));
  },
}