<template>
  <div v-if="reviews && reviews.length > 0">
    <h3 class="red--text">User Reviews</h3>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <p>{{ review.author_details.avatar_path }}</p>
        <p>{{ review.author }}</p>
        <p>{{ review.created_at }}</p>
        <p>{{ review.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["reviews"]),
  },
};
</script>
