<template>
  <!--  <v-app-bar app color="orange" dark hide-on-scroll class="header">-->
  <!--    <div class="d-flex align-center header__logo">-->
  <!--      <router-link to="/">-->
  <!--        <v-img-->
  <!--          alt="Vuetify Logo"-->
  <!--          class="shrink mr-2"-->
  <!--          contain-->
  <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
  <!--          transition="scale-transition"-->
  <!--          width="40"-->
  <!--        />-->
  <!--      </router-link>-->
  <!--    </div>-->

  <!--    <v-spacer></v-spacer>-->

  <!--    <router-link to="/leagueList" class="ma-2 header__link">-->
  <!--      <span class="mr-2">Список лиг</span>-->
  <!--    </router-link>-->
  <!--    <router-link to="/teamsList" class="ma-2 header__link">-->
  <!--      <span class="mr-2">Список команд</span>-->
  <!--    </router-link>-->
  <!--    <router-link to="/leagueCalendar" class="ma-2 header__link">-->
  <!--      <span class="mr-2">Календарь лиги</span>-->
  <!--    </router-link>-->
  <!--    <router-link to="/teamCalendar" class="ma-2 header__link">-->
  <!--      <span class="mr-2">Календарь одной команды</span>-->
  <!--    </router-link>-->
  <!--  </v-app-bar>-->

  <div>
    <v-app-bar
      collapse
      app
      hide-on-scroll
      color="deep-orange accent-4"
      dark
      class="header"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
      color="deep-orange"
    >
      <v-list nav dense>
        <v-list-item-group active-class="deep-orange--text text--accent-4">
          <v-list-item>
            <div class="d-flex align-center header__logo">
              <router-link to="/">
                <v-img
                  alt="Vuetify Logo"
                  class="shrink mr-2"
                  contain
                  src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                  transition="scale-transition"
                  width="40"
                />
              </router-link>
            </div>
          </v-list-item>

          <v-list-item>
            <router-link to="/leagueList" class="ma-2 header__link white--text">
              Список лиг
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/teamsList" class="ma-2 header__link white--text">
              Список команд
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link
              to="/leagueCalendar"
              class="ma-2 header__link white--text"
            >
              Календарь лиги
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link
              to="/teamCalendar"
              class="ma-2 header__link white--text"
            >
              Календарь одной команды
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "sHeader",

  data: () => ({
    drawer: false
  })
};
</script>

<style lang="scss">
.header {
  &__link {
    text-decoration: none;
    font-size: 20px;
  }
}
</style>
