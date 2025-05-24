<!-- src/views/MovieSearch.vue -->
<template>
  <v-container>
    <p>―― MovieSearch コンポーネント読み込み OK ――</p>
    <SearchBar @search="fetchMovies" />
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
    <v-alert v-if="!movies.length && searched" type="info">
      該当する映画が見つかりませんでした。
    </v-alert>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import MovieCard from '@/components/MovieCard.vue'
import { api } from '@/api'  // axios インスタンス

export default {
  name: 'MovieSearch',
  components: { SearchBar, MovieCard },
  data() {
    return {
      movies: [],
      searched: false,   // 検索実行済フラグ
    }
  },
  methods: {
    async fetchMovies(keyword) {
      this.searched = true;
      try {
        const res = await api.get('/movies', { params: { query: keyword } });
        this.movies = res.data;
      } catch (e) {
        console.error(e);
        this.movies = [];
      }
    }
  }
}
</script>
