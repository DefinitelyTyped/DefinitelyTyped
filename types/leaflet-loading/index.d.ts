// Type definitions for leaflet-loading 0.1
// Project: https://github.com/ebrelsford/Leaflet.loading
// Definitions by: BePo <https://github.com/BePo65>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        loadingControl?: boolean | undefined;
    }

    interface LoadingOptions extends ControlOptions {
        delayIndicator?: number | undefined;
        separate?: boolean | undefined;
        zoomControl?: Control.Zoom | undefined;
        spinjs?: boolean | undefined;
        spin?: {
            lines?: number | undefined;
            length?: number | undefined;
            width?: number | undefined;
            radius?: number | undefined;
            rotate?: number | undefined;
            top?: string | undefined;
        } | undefined;
    }

    namespace Control {
        class Loading extends Control {
            constructor(options?: LoadingOptions);
            options: LoadingOptions;
        }

        function loading(options?: LoadingOptions): Loading;
    }
}
