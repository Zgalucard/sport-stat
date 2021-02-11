import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/api/index";
import { TEAMS, COMPETITIONS } from "@/api/routes";

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
  },
  getters: {
    getTeams: state => state.teams,
    getCompetitions: state => state.competitions
  }
});
