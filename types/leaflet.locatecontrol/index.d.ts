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
            position?: string;
            layer?: Layer;
            setView?: boolean | string;
            flyTo?: boolean;
            keepCurrentZoomLevel?: boolean;
            clickBehavior?: any;
            returnToPrevBounds?: boolean;
            cacheLocation?: boolean;
            drawCircle?: boolean;
            drawMarker?: boolean;
            markerClass?: any;
            circleStyle?: PathOptions;
            markerStyle?: PathOptions | MarkerOptions;
            followCircleStyle?: PathOptions;
            followMarkerStyle?: PathOptions;
            icon?: string;
            iconLoading?: string;
            iconElementTag?: string;
            circlePadding?: number[];
            onLocationError?: any;
            onLocationOutsideMapBounds?: any;
            showPopup?: boolean;
            strings?: any;
            locateOptions?: L.LocateOptions;
        }
    }

    namespace control {
        /**
         * Creates a Leaflet.Locate control
         */
        function locate(options?: Control.LocateOptions): Control.Locate;
    }
}
