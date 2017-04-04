// Type definitions for leaflet.locatecontrol 0.60
// Project: https://github.com/domoritz/leaflet-locatecontrol
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    namespace Control {
        interface LocateOptions {
            position?: string;
            layer?: L.Layer;
            setView?: boolean | string;
            flyTo?: boolean;
            keepCurrentZoomLevel?: boolean;
            clickBehavior?: any;
            returnToPrevBounds?: boolean;
            cacheLocation?: boolean;
            drawCircle?: boolean;
            drawMarker?: boolean;
            markerClass?: any;
            circleStyle?: L.PathOptions;
            markerStyle?: L.PathOptions;
            followCircleStyle?: L.PathOptions;
            followMarkerStyle?: L.PathOptions;
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
        function locate(options?: Control.LocateOptions): L.Control;
    }
}
