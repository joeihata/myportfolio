import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import introduction from '@/components/introduction'
import language from '@/components/language'
import career from '@/components/career'
import portfolio from '@/components/portfolio'

Vue.use(Router)
Vue.use(BootstrapVue)

import BootstrapVue from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/language',
      name: 'language',
      component: language
    },
    {
      path: '/career',
      name: 'career',
      component: career
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
  ]
})