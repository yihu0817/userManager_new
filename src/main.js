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
Vue.config.productionTip = false;
// Vue.prototype.apiBaseUrl = 'http://192.168.35.114:8089';

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// 复习 面向对象知识
// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   // this.say = function(){
//   //   console.log('say hello');
//   // }
// }


// Person.prototype.say = function(){
//   console.log('say hello');
// }

// var zhangs = new Person('张三',23);
// var lishi = new Person('李四',23);

// zhangs.say();
// lishi.say();

// 每个构造函数都有一个原型对象，在原型对象上定义公有属性方法，在构造函数中定义私有属性方法


