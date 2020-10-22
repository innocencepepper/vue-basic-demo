import Vue from 'vue'

// 导入vue-router
import VueRouter from 'vue-router'

// 导入英雄、武器、装备三个列表页面组件
import HeroList from '@/pages/HeroList.vue'
import WeapenList from '@/pages/WeapenList.vue'
import ArmorList from '@/pages/ArmorList.vue'
import AddHeroForm from '@/pages/AddHeroForm.vue'
import EditHeroForm from '@/pages/EditHeroForm.vue'

// 使用vue-router插件
Vue.use(VueRouter)

// 创建VueRouter实例
const router = new VueRouter({
    // 使得当前路由的链接样式设置为'active'
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',

    routes: [
        // 英雄列表页面
        { name: 'hero-list', path: '/hero-list', component: HeroList },
        // 武器列表页面
        { name: 'weapen-list', path: '/weapen-list', component: WeapenList },
        // 装备列表页面
        { name: 'armor-list', path: '/armor-list', component: ArmorList },
        // 添加英雄表单页面
        { name: 'add-hero', path: '/add-hero', component: AddHeroForm },
        { name: 'edit-hero', path: '/edit-hero/:id', component: EditHeroForm }
    ]
})

// 导出 router 实例
export default router