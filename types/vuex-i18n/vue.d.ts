// Type definitions for vuex-i18n 1.7.0
// Project: https://github.com/dkfbasel/vuex-i18n
// Definitions by: Cedric Kemp <https://github.com/jaeggerr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// TypeScript Version: 2.3

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
