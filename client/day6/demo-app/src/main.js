import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HotNews from '@/pages/HotNews.vue'
import Music from '@/pages/Music.vue'

import MusicPop from '@/pages/MusicPop.vue'
import MusicRock from '@/pages/MusicRock.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { name: 'hot-news', path: '/hot-news', component: HotNews },
    {
      name: 'music',
      path: '/music',
      component: Music,

      // 隶属于/music的子路由
      children: [
        // /music/pop
        { name: 'pop', path: 'pop', component: MusicPop },
        // /music/rock
        { name: 'rock', path: 'rock', component: MusicRock }
      ]
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
