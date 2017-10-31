/**
 * Extends interfaces in Vue.js
 */
import Vue from "vue";
import { Ii18n } from "./index";

declare module "vue/types/vue" {
  interface Vue {
    $i18n: Ii18n;
  }

  interface VueConstructor<V extends Vue = Vue> {
    i18n: Ii18n;
  }
}
