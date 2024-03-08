import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsIm5hbWUiOiJSYWZhYSIsImVtYWlsIjoicmFmYWVsbUBnbWFpbC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA5ODU1MzM4LCJleHAiOjE3MTAxMTQ1Mzh9.K9y_Bt-F4eYLWsZ4NVmAX_rCgOG7248bSl6MtTUy_1E'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
