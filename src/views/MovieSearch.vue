<template>
  <v-container>
    <!-- 検索バー -->
    <SearchBar @search="fetchMovies" />

    <!-- 映画カード一覧 -->
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>

    <!-- 検索済みかつ結果ゼロのときのアラート -->
    <v-alert v-if="searched && !movies.length" type="info">
      該当する映画が見つかりませんでした。
    </v-alert>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import MovieCard  from '@/components/MovieCard.vue'
import { api }     from '@/api'   // json-server への Axios インスタンス

export default {
  name: 'MovieSearch',
  components: { SearchBar, MovieCard },

  data() {
    return {
      movies: [],     // 映画データ配列
      searched: false // 一度でも検索したかどうか
    }
  },

  methods: {
    /**
     * 検索キーワードを受け取って映画一覧を取得・絞り込み
     * @param {string} keyword — SearchBar から渡される検索文字列
     */
    async fetchMovies(keyword) {
      this.searched = true
      try {
        // 1. 全件取得
        const res = await api.get('/movies')
        // 2. クライアント側で部分一致フィルタリング
        this.movies = res.data.filter(movie =>
          movie.title.includes(keyword)
        )
      } catch (e) {
        console.error('映画データ取得エラー:', e)
        this.movies = []
      }
    }
  }
}
</script>

<style scoped>
/* 必要に応じてスタイルを追加してください */
</style>
