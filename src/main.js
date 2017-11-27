import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router';
import 'element-ui/lib/theme-default/index.css';

Vue.use( ElementUI );
Vue.config.productionTip = false;

new Vue({
  router
}).$mount('#app');
