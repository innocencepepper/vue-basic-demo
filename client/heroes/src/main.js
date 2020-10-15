import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
