import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/dashboard',
      component: Dashboard
    },
  ]
})
