import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/Admin/AdminPages'

import ArticlesbyCategory from "@components/article/ArticlesbyCategory"
import ArticlebyId from '@components/article/ArticlebyId'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
}, {
    name:"articlesByCategory",
    path: '/categories/:id/articles',
    component:ArticlesbyCategory
}, {
    name:"articlebyId",
    path: '/articles/:id',
    component:ArticlebyId
}]

export default new VueRouter({
    mode: 'history',
    routes
})
