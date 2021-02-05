<template>
  <v-app>

    <s-header />

    <v-main>
      <router-view />
    </v-main>

    <s-footer />

  </v-app>
</template>

<script>
  const sHeader = () => import("@/components/layout/sHeader.vue")
  const sFooter = () => import("@/components/layout/sFooter.vue")

  export default {
    name: "App",

    components: {
      sHeader,
      sFooter
    },

    data: () => ({
      //
    })
  };

</script>

<style lang="scss">

</style>
