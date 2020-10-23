# vite-single-spa-example

This shows a vite application that functions as a single-spa application.

## Local dev

```sh
yarn install
yarn dev
open http://single-spa-playground.org/playground/instant-test?name=vite-test&framework=vue&useNativeModules=true&url=http%3A%2F%2Flocalhost%3A3000%2Fsrc%2Fmain.js
```

## To-do

1. Merge https://github.com/single-spa/single-spa-playground/pull/37
2. Get https://github.com/vuejs/vue-next/pull/2477 merged
3. Get build working by modifying rollup output options to compile to systemjs format