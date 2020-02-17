import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import ScrollLoader from 'vue-scroll-loader';
import Highcharts from 'vue-highcharts';
import App from './App.vue';
import './globals';
import store from './store';
import routes from './routes';
import vuetify from './plugins/vuetify';

Vue.prototype.axios = Axios;
Vue.config.productionTip = false;
Vue.use(ScrollLoader);
Vue.use(VueRouter);
Vue.use(Highcharts);
const router = new VueRouter({routes});

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
