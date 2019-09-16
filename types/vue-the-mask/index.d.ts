// Type definitions for vue-the-mask 0.11.1
// Project: https://github.com/vuejs-tips/vue-the-mask
// Definitions by: Dominik Schmidt <https://github.com/domschmidt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import {Component, DirectiveFunction, PluginObject} from "vue";

declare namespace VueTheMaskPlugin {
    interface Options {}

    interface VueStatic {
        (options: Options): void;
    }
}

declare module 'vue/types/vue' {
    interface Vue {}
}

interface VueTheMaskPlugin extends PluginObject<VueTheMaskPlugin.Options> {
    mask: DirectiveFunction,
    TheMask: Component
}

declare const VueTheMask: VueTheMaskPlugin;
export = VueTheMask;
