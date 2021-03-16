<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <search-results />
        <v-row class="mt-6">
          <v-col :sm="12" :md="6">
            <movie-details />
          </v-col>
          <v-col :sm="12" :md="6">
            <div v-if="reviews && reviews.length > 0">
              <h3 class="red--text">User Reviews</h3>
              <v-list three-line>
                <v-list-item v-for="review in reviews" :key="review.id">
                  <v-list-item-avatar>
                    <v-img
                      :src="
                        `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                      "
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ review.author }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ review.created_at }}
                    </v-list-item-subtitle>
                    <div class="mt-2">{{ review.content }}</div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MovieDetails from "./components/MovieDetails.vue";
import SearchResults from "./components/SearchResults";

export default {
  components: {
    SearchResults,
    AppHeader,
    MovieDetails,
  },
};
</script>

<style></style>
