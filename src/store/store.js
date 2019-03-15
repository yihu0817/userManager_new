import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  user: null,  // 包含用户名和token
}

const mutations = {
  /**保存用户信息 */
  setUser(state, user) {
    state.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));

  },
  clearUser(state) {
    state.user = '';
    sessionStorage.removeItem('user');

  }
}

const actions = {
  saveUser({ commit}, user) {
    commit('setUser', user);
  },

  clearUser({ commit}) {
    commit('clearUser');
  }
}

const getters = {
  getUser(state) {
    if (state.user != null && state.user != '') {
      return state.user;
    }
    // console.log(sessionStorage.getItem('user'));

    if (sessionStorage.getItem('user') === null || sessionStorage.getItem('user')=== ''){
        return null;
    }else{
        return JSON.parse(sessionStorage.getItem('user'));
    }
        
  },
 
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
