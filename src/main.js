import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import ScrollLoader from 'vue-scroll-loader';
import App from './App.vue';
import './globals';
import store from './store';
import routes from './routes';

Vue.prototype.axios = Axios;
Vue.config.productionTip = false;
Vue.use(ScrollLoader);
Vue.use(VueRouter);
const router = new VueRouter({routes});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
