// Type definitions for leaflet.locatecontrol 0.60
// Project: https://github.com/domoritz/leaflet-locatecontrol
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class Locate extends Control {
          onAdd(map: Map): HTMLElement;
          start(): void;
          stop(): void;
          setView(): void;
        }
        interface LocateOptions {
            position?: string | undefined;
            layer?: Layer | undefined;
            setView?: boolean | string | undefined;
            flyTo?: boolean | undefined;
            keepCurrentZoomLevel?: boolean | undefined;
            clickBehavior?: any;
            returnToPrevBounds?: boolean | undefined;
            cacheLocation?: boolean | undefined;
            drawCircle?: boolean | undefined;
            drawMarker?: boolean | undefined;
            markerClass?: any;
            circleStyle?: PathOptions | undefined;
            markerStyle?: PathOptions | MarkerOptions | undefined;
            followCircleStyle?: PathOptions | undefined;
            followMarkerStyle?: PathOptions | undefined;
            icon?: string | undefined;
            iconLoading?: string | undefined;
            iconElementTag?: string | undefined;
            circlePadding?: number[] | undefined;
            onLocationError?: any;
            onLocationOutsideMapBounds?: any;
            showPopup?: boolean | undefined;
            strings?: any;
            locateOptions?: L.LocateOptions | undefined;
        }
    }

    namespace control {
        /**
         * Creates a Leaflet.Locate control
         */
        function locate(options?: Control.LocateOptions): Control.Locate;
    }
}
