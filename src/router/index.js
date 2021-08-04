import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import('@/views/Categories.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
