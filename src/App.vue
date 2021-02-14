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
// import axios from "axios";

const sHeader = () => import("@/components/layout/sHeader.vue");
const sFooter = () => import("@/components/layout/sFooter.vue");

export default {
  name: "App",

  components: {
    sHeader,
    sFooter
  },

  data: () => ({
    //
  }),

  mounted() {
    // const options = {
    //   method: "GET",
    //   headers: { "X-Auth-Token": "314e96c919e54091997a566ae0fdc0fa" },
    //   url: "https://api.football-data.org/v2/competitions/2006"
    // };
    // axios(options)
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));
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

.v-progress-circular {
  margin: auto 0;
}

.search-field {
  flex: 0 !important;
}
</style>
