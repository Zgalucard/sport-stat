<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="red">
        <strong class="subheading">Dev by Nikita Sattarov!</strong>

        <v-spacer></v-spacer>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  //import HelloWorld from "./components/HelloWorld";

  export default {
    name: "sFooter",
  };

</script>

<style lang="scss">

</style>
