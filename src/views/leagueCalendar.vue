<template>
  <div class="league page">
    <h1>LEAGUE</h1>
    <div v-if="league">
      {{ league }}
    </div>
  </div>
</template>

<script>
export default {
  name: "leagueCalendar",

  components: {
    //
  },

  data: () => ({
    league: null
  }),

  methods: {
    //
  },

  async created() {
    try {
      const { id } = this.$route.params;
      if (id) {
        const league = await this.$store.dispatch("fetchCompetitionsById", id);
        console.log(league);
        // this.league = league.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>