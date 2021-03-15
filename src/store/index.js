import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setMovieDetails(state, payload) {
      state.movieDetails = payload;
    },
    setMovieReviews(state, payload) {
      state.reviews = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
