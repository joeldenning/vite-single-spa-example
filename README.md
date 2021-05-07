# vite-single-spa-example

This shows a vite application that functions as a single-spa application.

## Local dev

### Single-spa playground

```sh
pnpm install
pnpm run dev --https
open https://localhost:3000/src/main.js # The cert will be insecure - tell your browser to trust it
open 'https://single-spa-playground.org/playground/instant-test?name=vite-test&framework=vue&useNativeModules=true&url=https%3A%2F%2Flocalhost%3A3000%2Fsrc%2Fmain.js'
```

The url to go to when developing is https://single-spa-playground.org/playground/instant-test?name=vite-test&framework=vue&useNativeModules=true&url=https%3A%2F%2Flocalhost%3A3000%2Fsrc%2Fmain.js

The URL to be used when setting up import map overrides is http://localhost:3000/src/main.js

### Root config

See https://github.com/joeldenning/vite-single-spa-root-config which shows a root config that loads up this vite application

## To-do

1. ~~Merge https://github.com/single-spa/single-spa-playground/pull/37~~
2. Get https://github.com/vuejs/vue-next/pull/2477 merged and published
3. ~~Get build working by modifying rollup output options to compile to systemjs format~~
4. ~~Add documentation to single-spa.js.org (https://github.com/single-spa/single-spa.js.org/pull/352)~~
