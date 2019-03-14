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
    if (store.getters.getUser) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      // config.headers.Authorization = `token ${store.getters.getUser.token}}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });



// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

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
