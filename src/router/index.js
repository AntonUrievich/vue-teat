import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'
//import Categories from '../views/Categories.vue'

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
    //component: Login
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    //component: Categories
    component: () => import('../views/Categories.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
