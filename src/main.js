import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import BlogPage from "@/components/BlogPage";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')







Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: "BlogPage",
    name: " BlogPage",
    component: BlogPage,
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
