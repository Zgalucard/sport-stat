<template>
  <v-app>
    <v-main>
      <s-header />

      <router-view />

      <s-footer />
    </v-main>
  </v-app>
</template>

<script>
const sHeader = () => import("@/components/layout/sHeader.vue");
const sFooter = () => import("@/components/layout/sFooter.vue");

export default {
  name: "App",

  components: {
    sHeader,
    sFooter
  }
};
</script>

<style lang="scss">
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-main {
  padding: 0 10px;
}

.v-progress-circular {
  margin: auto 0;
}

.search-field {
  flex: 0 !important;
}

.v-input {
  flex: 0 !important;
}
</style>
