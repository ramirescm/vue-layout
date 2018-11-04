import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebar.vue";


Vue.use(Vuetify)
Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
