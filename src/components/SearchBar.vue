<template>
  <v-row align="center" justify="center" class="my-4">
    <v-col cols="8" sm="6" md="4">
      <v-text-field
        v-model="keyword"
        label="映画タイトルで検索"
        @keyup.enter="onSearch"
        clearable
      />
    </v-col>
    <v-col cols="2" sm="2" md="2">
      <v-btn color="primary" @click="onSearch">検索</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return { keyword: '' };
  },
  methods: {
    onSearch() {
      if (this.keyword.trim()) {
        this.$emit('search', this.keyword.trim());
      }
    }
  }
}
</script>

