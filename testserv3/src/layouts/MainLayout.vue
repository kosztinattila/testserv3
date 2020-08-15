<template>
    <q-layout view="hHh lpR fFf">

      <q-header class="bg-primary text-white">
        <main-header></main-header>
      </q-header>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>

      <q-footer class="bg-grey-8 text-white">
        <q-toolbar>

        </q-toolbar>
      </q-footer>

    </q-layout>
</template>

<script>
import header from 'components/Header/Layout/Header.vue'
export default {
  name: 'MainLayout',
  components: {
    'main-header': header
  },
  data: function () {
    return {
    }
  }
}
</script>
