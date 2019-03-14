import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    user:'',
}

const mutations = {
    /**保存用户信息 */
    setUser(state,name){
        state.user = name;
        sessionStorage.setItem('user',name);
    },
    clearUser(state){
        state.user = '';
        sessionStorage.removeItem('user');
    }
}

const actions = {
    saveUser({commit},name){
        commit('setUser',name);
    },
    clearUser({commit}){
        commit('clearUser');
    }
}

const getters = {
    getUser(state){
        if (state.user != null && state.user!= '') {
            return state.user;
        } 
        return sessionStorage.getItem('user');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});