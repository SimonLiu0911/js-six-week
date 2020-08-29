import Vue from 'vue';
// Bootstrap4
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// VeeValidate
import { ValidationProvider, ValidationObserver, configure } from 'vee-validate/dist/vee-validate.full';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);

Vue.use(VueAxios, axios);

// VeeValidate
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
