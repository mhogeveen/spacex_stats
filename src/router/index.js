import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dragons from '../views/Dragons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dragons',
    name: 'Dragons',
    component: Dragons
  }
]

const router = new VueRouter({
  routes
})

export default router
