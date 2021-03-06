import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App.vue'
import EventBus from './lib/eventBus.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
