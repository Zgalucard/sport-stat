import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/api/index";
import { TEAMS } from "@/api/routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: {},
    competitions: {}
  },
  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
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
    }
  },
  getters: {
    getTeams: state => state.teams,
    teams: state => state.teams.teams
  }
});
