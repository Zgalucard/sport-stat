<template>
  <v-app-bar app color="orange" dark hide-on-scroll class="header">
    <div class="d-flex align-center header__logo">
      <router-link to="/">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      </router-link>
    </div>
    
    <v-text-field
      v-model="searchField"
      label="Regular"
      clearable
      filled
      outlined
      class="ml-3"
    ></v-text-field>
    
    <v-spacer></v-spacer>

    <router-link to="/leagueCalendar" class="ma-2 header__link">
      <span class="mr-2">Список лиг</span>
    </router-link>
    <router-link to="/leagueList" class="ma-2 header__link">
      <span class="mr-2">Список команд</span>
    </router-link>
    <router-link to="/teamCalendar" class="ma-2 header__link">
      <span class="mr-2">Календарь лиги</span>
    </router-link>
    <router-link to="/teamsList" class="ma-2 header__link">
      <span class="mr-2">Календарь одной команды</span>
    </router-link>
  </v-app-bar>
</template>

<script>

  export default {
    name: "sHeader",
    
    data: () => ({
      //
      searchField: ''
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
