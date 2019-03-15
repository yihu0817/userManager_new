// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import axios from 'axios';
import NavMenu from './components/NavMenu.vue'
import Header from './components/Header.vue'

Vue.component('NavMenu', NavMenu); // 全局注册组件 <nav-menu></nav-menu>
Vue.component('Header', Header); // 全局注册组件 <nav-menu></nav-menu>
// Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.config.productionTip = false;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log(' http request 拦截器>>>>');
    const user = store.getters.getUser;
    if (user) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${user.token}}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });


// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log(' http response 拦截器 <<<<< ');
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

// // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
