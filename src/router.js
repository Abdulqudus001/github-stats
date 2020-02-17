import Vue from 'vue';
import VueRouter from 'vue-router'

// Importing components
import Home from '@/components/Home.vue';

const routes = [
  { path: '/home', component: Home }
]

module.exports = new VueRouter({routes})