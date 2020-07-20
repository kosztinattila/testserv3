<template>
  <div id="q-app">
    <main-header></main-header>
    <router-view />
  </div>
</template>

<script lang="ts">
  import header from "./components/header.vue";
export default {
  name: 'App',
  components: {
    "main-header": header,
  }
}
</script>
