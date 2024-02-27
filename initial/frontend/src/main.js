import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import Store from './config/store'

Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
