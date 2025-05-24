
// src/main.js
import { createApp }  from 'vue'
import App            from './App.vue'
import router         from './router'
import store          from './store'

// Vuetify のスタイル読み込み
import 'vuetify/styles'
// （必要ならアイコンフォントも）
// import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
// Vuetify コンポーネントとディレクティブを一括インポート
import * as components    from 'vuetify/components'
import * as directives    from 'vuetify/directives'

// コンポーネント／ディレクティブを登録して Vuetify インスタンスを生成
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
