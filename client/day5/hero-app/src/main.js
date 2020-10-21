// 引入bootstrap样式文件
import 'bootstrap/dist/css/bootstrap.css'
// 引用全局的样式文件
import '@/assets/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
