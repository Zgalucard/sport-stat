import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/leagueCalendar/:id",
  //   name: "leagueCalendar",
  //   component: () => import("../views/leagueCalendar.vue")
  // },
  {
    path: "/leagueList",
    name: "leagueList",
    component: () => import("../views/leagueList.vue")
  },
  {
    path: "/teamCalendar/:id",
    name: "teamCalendar",
    component: () => import("../views/teamCalendar.vue")
  },
  {
    path: "/teamsList",
    name: "teamsList",
    component: () => import("../views/teamsList.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
