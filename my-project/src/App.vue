<template>
  <v-app>
    <v-container>
      <h1 class="text-center">Девушки</h1>
      <GirlsList />
    </v-container>
  </v-app>
</template>

<script>
import GirlsList from './components/GirlsList.vue';

export default {
  name: 'App',
  components: { GirlsList },
};
</script>

<style>
body {
  background-color: #222;
  color: #fff;
}
</style>
