import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/pages/Home.vue'

const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/films', name: 'films', component: () => import('@/pages/Films.vue')},
        {path: '/series', name: 'series', component: () => import('@/pages/Series.vue')},
        {path: '/search', name: 'search', component: () => import('@/pages/Search.vue')},
        {path: '/movie/:id', name: 'movieid', component: () => import('@/pages/FilmId.vue')},
        {path: '/tv/:id', name: 'seriesid', component: () => import('@/pages/SeriesId.vue')},
    ], 
    scrollBehavior() {
        return top = 0
    }
})
export default routers