import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Client from '@/views/Client'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    }
  ]
})
