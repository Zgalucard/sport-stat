<template>
  <div class="teams page">
    <h1>TEAM</h1>
    <v-simple-table dark v-if="team">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Info
          </th>
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
    <div>
      <v-text-field
        v-model="search.startYear"
        label="year"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
      <v-text-field
        v-model="search.startMonth"
        label="month"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
      <v-text-field
        v-model="search.startDay"
        label="day"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        v-model="search.endYear"
        label="year"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
      <v-text-field
        v-model="search.endMonth"
        label="month"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
      <v-text-field
        v-model="search.endDay"
        label="day"
        clearable
        filled
        outlined
        class="ml-3 search-field"
      ></v-text-field>
    </div>
</div>

    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="match in matches"
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
    //
  },

  computed: {
    dateFilter(){
      return this.matches.filter(match => {
        let startDate = new Date(match.season.startDate)
        let startDay = startDate.getDate();
        let startMonth = startDate.getMonth() + 1;
        let startYear = startDate.getFullYear();
        let endDate = new Date(match.season.startDate)
        let endDay = endDate.getDate();
        let endMonth = endDate.getMonth() + 1;
        let endYear = endDate.getFullYear();

          if(startDay >= this.search.startDay && startMonth >= this.search.startMonth && startYear >= this.search.startYear && endDay <= this.search.endDay && endMonth <= this.search.endMonth && endYear <= this.search.endYear) {
            return match
          }
      })
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
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
  table{
    img{ width: 100%; }
  }
</style>
