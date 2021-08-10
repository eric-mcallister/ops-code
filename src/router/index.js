import Vue from 'vue'
import VueRouter from 'vue-router'

import SplashScreen from '../components/SplashScreen.vue'
import About from '../components/About.vue'
import OpsList from '../components/OpsList.vue'
import OpsTable from '../components/OpsTable.vue'
import Type from '../components/Type.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SplashScreen
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ops-list',
    name: 'OpsList',
    component: OpsList
  },
  {
    path: '/ops-table',
    name: 'OpsTable',
    component: OpsTable
  },
  {
    path: '/type/:number',
    name: 'Type',
    component: Type
  }
]

const router = new VueRouter({
  routes
})

export default router
