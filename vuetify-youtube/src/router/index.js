import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Botones from '../views/Botones.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
  },
  {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Botones.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
