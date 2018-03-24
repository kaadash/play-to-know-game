import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'
import Game from '../views/Game'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/dashboard',
      component: Dashboard
    }, {
      path: '/game/:gameId',
      name: 'game',
      component: Game
    },
  ]
})
