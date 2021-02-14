<template>
  <div class="league page" v-resize="onResize">
    <h1>LEAGUE LIST</h1>
    <v-text-field
      v-model="searchField"
      label="Search"
      clearable
      filled
      outlined
      class="ml-3 search-field"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-progress-circular
      :width="10"
      color="deep-orange"
      indeterminate
      :size="100"
      v-if="Object.keys(this.competitions).length === 0"
    ></v-progress-circular>
    <v-item-group v-else>
      <v-container>
        <v-row>
          <v-list rounded>
            <v-subheader
              ><span v-if="windowSize.x > 767">LEAGUE PLAN</span><v-spacer /> <span>LEAGUE NAME</span> <v-spacer /> <span v-if="windowSize.x > 767">LEAGUE SEASON</span></v-subheader
            >
            <v-list-item-group color="red">
              <v-list-item
                v-for="competition of searchInstance"
                :key="competition.id"
                class="league__item"
                @click="getLeague(competition)"
              >
                <v-list-item-icon v-if="windowSize.x > 767">{{ competition.plan }}</v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="competition.name"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content v-if="windowSize.x > 767">
                  <v-list-item-title
                    class="league__season"
                    v-if="competition.currentSeason"
                    v-html="
                      competition.currentSeason.startDate +
                        '<div' +
                        ' class=\'spacer\'' +
                        '></div>' +
                        ' - ' +
                        '<div' +
                        ' class=\'spacer\'' +
                        '></div>' +
                        competition.currentSeason.endDate
                    "
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "leagueList",

  components: {
    //
  },

  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
    searchField: "",
  }),

  mounted() {
    this.onResize();
  },

  methods: {
    getLeague(league) {
      console.log("API does not give data about one league", league);
      // this.$router.push({ name: "leagueCalendar", params: { id: league.id } });
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },

  computed: {
    competitions() {
      return this.$store.getters.getCompetitions;
    },

    searchInstance() {
      if (!this.searchField) {
        return this.competitions.competitions;
      } else {
        return this.competitions.competitions.filter((item) => {
          return Object.keys(item).find((key) => {
            if (typeof item[key] === "string") {
              return item[key]
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(this.searchField.toLowerCase().replace(/\s+/g, ""));
            }
          });
        });
      }
    },
  },

  created() {
    this.$store.dispatch("fetchCompetitions");
  },
};
</script>

<style lang="scss">
.league {
  &__season {
    display: flex !important;
  }
}
</style>
