import Vue from 'vue'
import VueRouter from 'vue-router'

import WeapenList from '@/pages/WeapenList.vue'
import ArmorList from '@/pages/ArmorList.vue'
import HeroList from "@/pages/HeroList.vue"
import AddHeroForm from '@/pages/AddHeroForm.vue'
import EditHeroForm from '@/pages/EditHeroForm.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'active',

    routes: [
        { name: 'weapens', path: '/weapens', component: WeapenList },
        { name: 'armores', path: '/armores', component: ArmorList },
        { name: 'heroes', path: '/heroes', component: HeroList },
        { name: 'add-hero', path: '/add-hero', component: AddHeroForm },
        { name: 'edit-hero', path: '/edit-hero/:id', component: EditHeroForm },
        { name: 'home', path: '/', redirect: { name: 'heroes' } }
    ]
})

export default router