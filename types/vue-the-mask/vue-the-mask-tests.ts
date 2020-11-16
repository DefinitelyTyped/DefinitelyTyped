import Vue from 'vue';
import { mask } from 'vue-the-mask';

new Vue({
  el: '#app',
  data: {},
  directives: {
    mask,
  },
  template: `
    <input mask="##.##.####" type="text">
`,
});
