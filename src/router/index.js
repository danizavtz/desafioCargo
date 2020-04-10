import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listar from '../views/Listar.vue'
import Filtrar from '../views/Filtrar.vue'
import Agrupar from '../views/Agrupar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/filtrar',
    name: 'Filtrar',
    component: Filtrar
  },
  {
    path: '/agrupar',
    name: 'Agrupar',
    component: Agrupar
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
