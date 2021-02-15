import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/api/index";
import {
  TEAMS,
  COMPETITIONS,
  TEAM_BY_ID,
  TEAM_MATCHES,
  COMPETITIONS_BY_ID
} from "@/api/routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: {},
    competitions: {}
  },
  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    setCompetitions(state, teams) {
      state.competitions = teams;
    }
  },
  actions: {
    fetchTeams({ commit }) {
      return axiosInstance
        .get(TEAMS())
        .then(({ data }) => {
          commit("setTeams", data);
        })
        .catch(err => console.log(err));
    },

    fetchCompetitions({ commit }) {
      return axiosInstance
        .get(COMPETITIONS())
        .then(({ data }) => {
          commit("setCompetitions", data);
        })
        .catch(err => console.log(err));
    },

    fetchCompetitionsById(_, id) {
      return axiosInstance.get(COMPETITIONS_BY_ID(id));
    },

    fetchTeamById(_, id) {
      return axiosInstance.get(TEAM_BY_ID(id));
    },

    fetchTeamMatches(_, id) {
      return axiosInstance.get(TEAM_MATCHES(id));
    }
  },
  getters: {
    getTeams: state => state.teams,
    getCompetitions: state => state.competitions,
    getTeamsById: state => id => state.teams.teams.find(team => team.id === id)
  }
});
