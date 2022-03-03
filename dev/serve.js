import Vue from 'vue';
import vuetify from '@/plugins';
import Dev from './serve.vue';
import "@/assets/open-sans-font.css";
import "vuetify/dist/vuetify.min.css";

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import DebionetworkUiComponents from '@/entry.esm';
Vue.use(DebionetworkUiComponents);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
