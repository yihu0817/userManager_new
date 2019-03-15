import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import UserList from '@/views/user/UserList'
import UserAdd from '@/views/user/UserAdd'
import UserUpdate from '@/views/user/UserUpdate'
import store from '../store/store'
import jwt from 'jsonwebtoken'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [{
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
          name: 'UserUpdate',
          component: UserUpdate
        }
      ]
    }
  ]
})

// 有些页面是不需要登录验证
router.beforeEach((to, from, next) => {

  // '/' 和 登录页 直接放行
  if (to.path === '/login' || to.path === '/') {
    next();
    return;
  }

  //如果用户已经登录放行
  // const user = sessionStorage.getItem('user');
  const user = store.getters.getUser;
  // console.log(`beforeEach user = ${user}`);

  if (user != null && user != '') {
    next();
    return;
  }

  next({
    path: '/login'
  });

});




export default router;
