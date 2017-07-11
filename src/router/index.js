import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import login from '../components/login.vue';
import bedDetail from '../components/pages/bedDetail.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: index
    },
    {
      path: '/bedDetail/:id',
      name: 'bedDetail',
      component: bedDetail
    }
  ]
});