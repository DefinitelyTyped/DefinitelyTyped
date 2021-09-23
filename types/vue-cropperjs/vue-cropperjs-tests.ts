import Vue from 'vue';
import VueCropperJs from 'vue-cropperjs';

new Vue({
  el: '#app',
  data: {
      imgSrc: '',
  },
  components: {
      'vue-cropperjs': VueCropperJs
  },
  methods: {
      zoom(option: any) {
      },
  },
  template: `
  <vue-cropperjs :value="value"
              :imgSrc="imgSrc">
  </vue-cropperjs>
`
});
