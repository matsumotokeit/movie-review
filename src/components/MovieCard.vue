<template>
  <v-card>
    <v-img :src="movie.poster" height="300px" />
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle>{{ movie.year }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  }
}
</script>
