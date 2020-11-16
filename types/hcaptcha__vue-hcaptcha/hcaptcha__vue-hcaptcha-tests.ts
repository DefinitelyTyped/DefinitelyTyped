import Vue from 'vue';
import HCaptcha from '@hcaptcha/vue-hcaptcha';

new Vue({
  el: '#app',
  components: {
    hcaptcha: HCaptcha
  }
});
