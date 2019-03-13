import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import UserList from '@/views/user/UserList'
import UserAdd from '@/views/user/UserAdd'
import UserUpdate from '@/views/user/UserUpdate'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
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

// 有些页面是不需要登录验证
router.beforeEach((to,from,next) => {
    console.log(to.path);
    
    // '/' 和 登录页 直接放行
    if(to.path === '/login' || to.path === '/' ){
      next(); 
      return;
    }

    //如果用户已经登录放行
    let user = sessionStorage.getItem('user');
    if(user != null){
      next(); 
      return;
    }

    next({ path: '/login'});

});


export default router;
