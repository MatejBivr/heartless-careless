<template>
  <v-app>
    <TheMenu />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TheMenu from '~/components/TheMenu.vue'
export default Vue.extend({
  name: 'Default',
  components: {
    TheMenu,
  },
})
</script>
