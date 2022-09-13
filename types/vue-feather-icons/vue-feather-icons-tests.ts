import Vue from 'vue';
import * as icons from 'vue-feather-icons';

Object.entries(icons).forEach(([k, v]) => {
  Vue.component(k, v);
});
