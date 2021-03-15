<template>
  <div v-if="movieDetails">
    <p>{{ movieDetails.title }}</p>
    <p>{{ movieDetails.backdrop_path }}</p>
    <p>{{ movieDetails.runtime }}</p>
    <p>{{ movieDetails.release_date }}</p>
    <p>{{ movieDetails.overview }}</p>
    <ul>
      <li v-for="genre in movieDetails.genres" :key="genre.id">
        {{ genre.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["movieDetails"]),
  },
};
</script>

<style></style>
