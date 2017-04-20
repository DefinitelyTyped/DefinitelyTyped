// Type definitions for ngSmoothScroll v1.7.1
// Project: https://github.com/d-oliveros/ngSmoothScroll
// Definitions by: Bernhard Keprt <https://github.com/goosefraba>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ng.smoothScroll {
    interface SmoothScroll {
        (element : HTMLElement, options?: ISmoothScrollOptions) : void;
    }

    interface ISmoothScrollOptions {
        duration?: number;
        offset?: number;
        easing?: string;
        callbackBefore?: () => void;
        callbackAfter?: () => void;
    }
}
