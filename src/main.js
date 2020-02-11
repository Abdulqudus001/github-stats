import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import './globals'
import store from './store'

Vue.prototype.axios = Axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
