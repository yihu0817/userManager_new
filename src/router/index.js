import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import UserList from '@/views/user/UserList'
import UserAdd from '@/views/user/UserAdd'
import UserUpdate from '@/views/user/UserUpdate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'user_list',
          name: 'UserList',
          component: UserList
        },
        {
          path: 'user_add',
          name: 'UserAdd',
          component: UserAdd
        },
        {
          path: 'user_update',
          name:'UserUpdate',
          component: UserUpdate
        }
      ]
    }
  ]
})
