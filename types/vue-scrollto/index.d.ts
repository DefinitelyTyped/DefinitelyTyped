// Type definitions for vue-scrollto 2.7
// Project: https://github.com/rigor789/vue-scrollto#readme
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { PluginFunction } from "vue";

declare namespace VueScrollTo {
    interface Options {
        // The element you want to scroll to.
        el?: string | Element;
        element?: string | Element;
        // The container that has to be scrolled. Default: body
        container?: string | Element;
        // The duration (in milliseconds) of the scrolling animation. Default: 500
        duration?: number;
        // The easing to be used when animating. Default: ease
        easing?: string;
        // The offset that should be applied when scrolling. Default: 0
        offset?: number;
        // Indicates if user can cancel the scroll or not. Default: true
        cancelable?: boolean;
        // A callback function that should be called when scrolling has ended. Default: noop
        onDone?: (() => void) | false;
        // A callback function that should be called when scrolling has been aborted by the user (user scrolled, clicked
        // etc.). Default: noop
        onCancel?: (() => void) | false;
        // Whether or not we want scrolling on the x axis. Default: true
        x?: boolean;
        // Whether or not we want scrolling on the y axis. Default: true
        y?: boolean;
    }

    interface VueStatic {
        (options: Options): void;
        (element: string | Element, options?: Options): void;
        (element: string | Element, duration: number, options?: Options): void;
    }
}

declare class VueScrollTo {
    static install: PluginFunction<never>;

    scrollTo: VueScrollTo.VueStatic;
}

declare module 'vue/types/vue' {
    interface Vue {
        $scrollTo: VueScrollTo.VueStatic;
    }
}

export = VueScrollTo;
