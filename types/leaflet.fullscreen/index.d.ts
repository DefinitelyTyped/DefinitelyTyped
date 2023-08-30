// Type definitions for Leaflet.fullscreen 1.6
// Project: https://github.com/brunob/leaflet.fullscreen
// Definitions by: William Comartin <https://github.com/wcomartin>
//                 Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from "leaflet";

declare module "leaflet" {
    namespace Control {
        class Fullscreen extends Control {
            constructor(options?: FullscreenOptions);
            options: FullscreenOptions;
        }

        interface FullscreenOptions {
            content?: string | undefined;
            position?: ControlPosition | undefined;
            title?: string | undefined;
            titleCancel?: string | undefined;
            forceSeparateButton?: boolean | undefined;
            forcePseudoFullscreen?: boolean | undefined;
            pseudoFullscreen?: boolean | undefined;
            fullscreenElement?: false | HTMLElement | undefined;
        }
    }

    namespace control {
        /**
         * Creates a fullscreen control.
         */
        function fullscreen(options?: Control.FullscreenOptions): Control.Fullscreen;
    }

    interface MapOptions {
        fullscreenControl?: boolean | undefined;
        fullscreenControlOptions?: Control.FullscreenOptions | undefined;
    }

    interface Map {
        toggleFullScreen(): void;
    }
}
