<template>
  <div id="q-app">
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white">
        <main-header></main-header>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

    </q-layout>
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
