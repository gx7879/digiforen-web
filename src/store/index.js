import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    // changeLang (state, payload) {
    //   app.$i18n.locale = payload
    //   localStorage.setItem('currentLanguage', payload)
    // }
  },
  actions: {
    // setLang ({ commit }, payload) {
    //   commit('changeLang', payload)
    // }
  },
  modules: {
    //   menu,
    user,
  },
});
