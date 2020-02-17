import Vue from 'vue';
import VueRouter from 'vue-router';

// Importing components
import Home from '@/components/Home.vue';
import ErrorPage from '@/components/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { path: '*', component: ErrorPage }
];

export default routes;