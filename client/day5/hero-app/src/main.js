// 引入bootstrap样式文件
import 'bootstrap/dist/css/bootstrap.css'
// 引用全局的样式文件
import '@/assets/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import axios from 'axios'

// // 全局配置URL前导路径
// axios.defaults.baseURL = 'http://localhost:3000'

// // 将 axios 放到 Vue 实例对象的 $http 属性上，以便在组件中可以直接通过this.$http发起网络请求
// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
