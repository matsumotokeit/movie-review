<template>
  <div class="home">
    <!-- :src でバインド -->
    <img :src="logo" alt="Vue logo" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// Webpack がバンドルしてくれるよう import
import logo from '@/assets/logo.png'

export default {
  name: 'HomeView',
  components: { HelloWorld },
  data() {
    return {
      logo
    }
  }
}
</script>

