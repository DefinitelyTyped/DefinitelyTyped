// Type definitions for vue-cookie
// Project: https://github.com/alfhen/vue-cookie
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Vue from "vue";
import {VueConstructor} from "vue/types/vue";

declare module "vue/types/vue" {
    interface Vue {
        $cookie: VueCookie;
    }
}

export interface VueCookie {
    install(Vue: VueConstructor): void;
    set(key: string, value: string, options: Options): void;
    get(key: string): string;
    delete(key: string, options?: Options): void;
}

type Options = {
    expires?: Date | String | Number;
    domain?: string;
} | Number | String;
