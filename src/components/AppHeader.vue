<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <h1>Movie Vuer</h1>
      <form @submit.prevent="handleSubmit" style="background: white">
        <input type="text" v-model="query" />
      </form>
    </v-app-bar>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["searchMovies"]),

    handleSubmit() {
      console.log("Search for:", this.query);
      this.searchMovies(this.query);
    },
  },
};
</script>

<style></style>
