import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import login from '../components/login.vue';
import Setting from '../components/Setting.vue';
import bedDetail from '../components/pages/bedDetail.vue';
import Diary from '../components/Diary.vue';
import Entries from '../components/Entries.vue';
import Calendar from '../components/Calendar.vue';
import Write from '../components/Write.vue';
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
      path: '/setting',
      component: Setting
    },
    {
      path: '/diary',
      component: Diary,
      children: [{
        path: 'entries',
        component: Entries
      },
      {
        path: 'calendar',
        component: Calendar
      },
      {
        path: 'write',
        component: Write
      }]
    },
    {
      path: '/bedDetail/:id',
      name: 'bedDetail',
      component: bedDetail
    }
  ]
});
