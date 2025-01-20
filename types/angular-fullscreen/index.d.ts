/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace fullscreen {
        /**
         * Prefixing interface name with "I" is not recommended: https://www.typescriptlang.org/Handbook#writing-dts-files
         * However, we let it here to keep consistency with all the other Angular-related definitions
         */
        interface IFullscreen {
            // enable document fullscreen
            all(): void;

            // enable or disable the document fullscreen
            toggleAll(): void;

            // enable fullscreen to a specific element
            enable(element: Element | HTMLElement): void;

            // disable fullscreen
            cancel(): void;

            // return true if fullscreen is enabled, otherwise false
            isEnabled(): boolean;

            // return true if fullscreen API is supported by your browser
            isSupported(): boolean;
        }
    }
}
