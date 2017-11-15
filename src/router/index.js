import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Order from '@/components/Order';
import Catalog from '@/components/Catalog';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/:id',
      name: 'Catalog',
      component: Catalog,
    },
  ],
});
