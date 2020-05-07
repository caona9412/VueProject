import Vue from 'vue'
import App from './App.vue'
//注册vuex
import store from '@/store'
//注册router
import router from '@/router'
//注册axios
import http from '@/http'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
