import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import './assets/sass/index.sass'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.filter('capitalize', value => {
  return value.toUpperCase()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
