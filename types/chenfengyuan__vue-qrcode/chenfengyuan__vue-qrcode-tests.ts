import Vue from 'vue';
import VueQrCode from '@chenfengyuan/vue-qrcode';

new Vue({
  el: '#app',
  components: {
    VueQrCode,
  },
  template: `<vue-qr-code :value="'http://example.com/'"></vue-qr-code>`
});
