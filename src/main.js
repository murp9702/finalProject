// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FullCalendar from 'vue-full-calendar'
Vue.use(FullCalendar)

import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
      App
    }
  })


  
