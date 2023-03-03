import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import '@/assets/main.css';
import '@/assets/tailwind.css';

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (store.getters.token !== undefined) {
    next();
  } else {
    next({
      path: '/login',
    });
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
