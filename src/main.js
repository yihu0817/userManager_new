// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios';
import NavMenu from './components/NavMenu.vue'
import Header from './components/Header.vue'

Vue.component('NavMenu', NavMenu);// 全局注册组件 <nav-menu></nav-menu>
Vue.component('Header', Header); // 全局注册组件 <nav-menu></nav-menu>
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
