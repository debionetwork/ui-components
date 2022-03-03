import Vue from 'vue'
import Dev from './serve.vue'
import vuetify from './plugins/vuetify'
import './plugins/debionetwork-ui-components'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(Dev)
}).$mount('#app')
