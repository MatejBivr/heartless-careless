<template>
  <v-app>
    <TheMenu />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TheMenu from '~/components/TheMenu.vue'
import TheFooter from '~/components/TheFooter.vue'
export default Vue.extend({
  name: 'Default',
  components: {
    TheMenu,
    TheFooter,
  },
})
</script>
