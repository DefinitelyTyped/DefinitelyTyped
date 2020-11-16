// Type definitions for leaflet-loading 0.1
// Project: https://github.com/ebrelsford/Leaflet.loading
// Definitions by: BePo <https://github.com/BePo65>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        loadingControl?: boolean;
    }

    interface LoadingOptions extends ControlOptions {
        delayIndicator?: number;
        separate?: boolean;
        zoomControl?: Control.Zoom;
        spinjs?: boolean;
        spin?: {
            lines?: number;
            length?: number;
            width?: number;
            radius?: number;
            rotate?: number;
            top?: string;
        };
    }

    namespace Control {
        class Loading extends Control {
            constructor(options?: LoadingOptions);
            options: LoadingOptions;
        }

        function loading(options?: LoadingOptions): Loading;
    }
}
