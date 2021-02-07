<template>
  <div class="teams">
    <h1>This is an teams list page</h1>
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
      v-if="Object.keys(this.teams).length === 0"
    ></v-progress-circular>
    <v-item-group v-else>
      <v-container>
        <v-row>
          <!--          cols="12" lg="3" md="4" sm="6"-->
          <v-col v-for="team of searchInstance" :key="team.id">
            <v-card class="mx-auto my-12 teams__card" max-width="374">
              <v-img height="250" :src="team.crestUrl"></v-img>
              <v-card-title>{{ team.shortName }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text ml-4">
                    {{ team.clubColors }}
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                  {{ team.email }}
                </div>
                <div class="my-4 subtitle-1">
                  {{ team.phone }}
                </div>
                <div>
                  {{ team.address }}
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title>{{ team.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "teamList",

  components: {
    //
  },

  data: () => ({
    searchField: ""
  }),

  computed: {
    teams() {
      return this.$store.getters.getTeams;
    },

    searchInstance() {
      if (!this.searchField) {
        return this.teams.teams;
      } else {
        return this.teams.teams.filter(item => {
          return Object.keys(item).find(key => {
            if (typeof item[key] === "string") {
              return item[key]
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(this.searchField.toLowerCase().replace(/\s+/g, ""));
            }
          });
        });
      }
    }
  },

  created() {
    this.$store.dispatch("fetchTeams");
  }
};
</script>

<style lang="scss">
.teams {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__card {
    height: 100%;
    display: flex !important;
    flex-direction: column;
  }
}
</style>
