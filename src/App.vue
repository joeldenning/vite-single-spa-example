<script setup>
import logo from "./assets/logo.png"
</script>

<template>
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
