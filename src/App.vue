<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
        <span>Url Shortener</span>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
      <notifications position="top right" ignore-duplicates style="z-index: 1000000" />
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
