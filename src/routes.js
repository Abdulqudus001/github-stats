import Vue from 'vue';
import VueRouter from 'vue-router';

// Importing components
import Home from '@/pages/home.vue';
import Stats from '@/pages/stats.vue';
import ErrorPage from '@/pages/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  },
  { path: '*', component: ErrorPage }
];

export default routes;