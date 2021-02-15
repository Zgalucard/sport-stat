<template>
  <div class="teams page">
    <h1>TEAM</h1>
    <v-simple-table dark v-if="team">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NAME:</td>
          <td>{{ team.name }}</td>
        </tr>
        <tr>
          <td>ADDRESS:</td>
          <td>{{ team.address }}</td>
        </tr>
        <tr>
          <td>COLORS:</td>
          <td>{{ team.clubColors }}</td>
        </tr>
        <tr>
          <td>CREST:</td>
          <td><img :src="team.crestUrl" alt="" /></td>
        </tr>
        <tr>
          <td>FOUNDED:</td>
          <td>{{ team.founded }}</td>
        </tr>
        <tr>
          <td>PHONE:</td>
          <td>{{ team.phone }}</td>
        </tr>
        <tr>
          <td>TLA:</td>
          <td>{{ team.tla }}</td>
        </tr>
        <tr>
          <td>VENUE:</td>
          <td>{{ team.venue }}</td>
        </tr>
        <tr>
          <td>WEBSITE:</td>
          <td>
            <a target="_blank" :href="team.website">{{ team.website }}</a>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <div>
      <h2>Фильтровать по дате</h2>
      <div class="teams__filter">
        <div class="teams__inputs">
          <span>От</span>
          <v-text-field
            v-model="search.startYear"
            label="year"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
          <v-text-field
            v-model="search.startMonth"
            label="month"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
          <v-text-field
            v-model="search.startDay"
            label="day"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
        </div>
        <div class="teams__inputs">
          <span>До</span>
          <v-text-field
            v-model="search.endYear"
            label="year"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
          <v-text-field
            v-model="search.endMonth"
            label="month"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
          <v-text-field
            v-model="search.endDay"
            label="day"
            filled
            outlined
            class="ml-3 search-field"
            @input="inputSearch"
          ></v-text-field>
        </div>
      </div>
    </div>

    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="match in dateFilter"
            :key="match.id"
            cols="12"
            lg="3"
            md="4"
            sm="6"
          >
            <v-card class="mx-auto my-12" max-width="374">
              <v-card-title>
                {{ match.group }} : {{ match.competition.name }}
              </v-card-title>

              <v-card-subtitle>
                {{ match.season.startDate }} / {{ match.season.endDate }}
              </v-card-subtitle>

              <div>
                <v-divider></v-divider>

                <v-card-text>
                  <p>Away Team: {{ match.awayTeam.name }}</p>
                  <p>Home Team:{{ match.homeTeam.name }}</p>
                  <p>Winner: {{ match.score.winner }}</p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "teamCalendar",

  components: {
    //
  },

  data: () => ({
    team: null,
    matches: null,
    filteredMatches: [],
    search: {
      startYear: "",
      startMonth: "",
      startDay: "",
      endYear: "",
      endMonth: "",
      endDay: ""
    }
  }),

  methods: {
    inputSearch() {
      this.$router.replace({
        query: {
          startYear: this.search.startYear,
          startMonth: this.search.startMonth,
          startDay: this.search.startDay,
          endYear: this.search.endYear,
          endMonth: this.search.endMonth,
          endDay: this.search.endDay
        }
      });
    }
  },

  computed: {
    dateFilter() {
      //eslint-disable-next-line
      this.filteredMatches = [];
      if (
        this.search.startYear.trim().length &&
        this.search.startMonth.trim().length &&
        this.search.startDay.trim().length &&
        this.search.endYear.trim().length &&
        this.search.endMonth.trim().length &&
        this.search.endDay.trim().length
      ) {
        this.matches.forEach(match => {
          let startDate = new Date(match.season.startDate);
          let startDay = startDate.getDate();
          let startMonth = startDate.getMonth() + 1;
          let startYear = startDate.getFullYear();
          let endDate = new Date(match.season.endDate);
          let endDay = endDate.getDate();
          let endMonth = endDate.getMonth() + 1;
          let endYear = endDate.getFullYear();

          if (
            startDay <= Number(this.search.startDay) &&
            startMonth <= Number(this.search.startMonth) &&
            startYear <= Number(this.search.startYear) &&
            endDay >= Number(this.search.endDay) &&
            endMonth >= Number(this.search.endMonth) &&
            endYear >= Number(this.search.endYear)
          ) {
            this.filteredMatches.push(match);
          }
        });
        return this.filteredMatches;
      } else {
        return this.matches;
      }
    }
  },

  async created() {
    try {
      const { id } = this.$route.params;
      if (id) {
        const { data } = await this.$store.dispatch("fetchTeamById", id);
        this.team = data;
        const matches = await this.$store.dispatch("fetchTeamMatches", id);
        this.matches = matches.data.matches;

        this.search.startYear = this.$route.query.startYear || "";
        this.search.startMonth = this.$route.query.startMonth || "";
        this.search.startDay = this.$route.query.startDay || "";
        this.search.endYear = this.$route.query.endYear || "";
        this.search.endMonth = this.$route.query.endMonth || "";
        this.search.endDay = this.$route.query.endDay || "";
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
table {
  img {
    width: 100%;
  }
}

.teams {
  &__filter {
    display: flex;
  }
  &__inputs {
    text-align: center;
  }
}
</style>
