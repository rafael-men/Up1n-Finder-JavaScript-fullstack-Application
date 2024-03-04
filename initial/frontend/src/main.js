import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBNZW5lemVzIiwiZW1haWwiOiJyYWZhZWxAZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkzMzQ3NDksImV4cCI6MTcwOTU5Mzk0OX0.JkkHZofd95ico3cLIQnAbTzFl4F38Jw0gOqbqfSgrZE'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
