import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
import { UndrawCreditCard } from './components/index'
console.log('UndrawCreditCard', UndrawCreditCard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
