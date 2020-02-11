import Vue from 'vue'
import Axios from 'axios'
import ScrollLoader from 'vue-scroll-loader';
import App from './App.vue'
import './globals'
import store from './store'

Vue.prototype.axios = Axios
Vue.config.productionTip = false
Vue.use(ScrollLoader)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
