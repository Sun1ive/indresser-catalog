import Vue from 'vue';
import 'bulma/css/bulma.css';
import App from './App';
import store from './store/index';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
