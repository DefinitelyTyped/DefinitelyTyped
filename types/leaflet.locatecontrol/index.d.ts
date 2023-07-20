// Type definitions for leaflet.locatecontrol 0.74
// Project: https://github.com/domoritz/leaflet-locatecontrol
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class Locate extends Control {
          constructor(locateOptions?: LocateOptions);
          onAdd(map: Map): HTMLElement;
          start(): void;
          stop(): void;
          stopFollowing(): void;
          setView(): void;
        }
        interface LocateOptions {
            position?: string | undefined;
            layer?: Layer | undefined;
            setView?: boolean | string | undefined;
            keepCurrentZoomLevel?: boolean | undefined;
            initialZoomLevel?: number | boolean | undefined;
            flyTo?: boolean | undefined;
            clickBehavior?: any;
            returnToPrevBounds?: boolean | undefined;
            cacheLocation?: boolean | undefined;
            drawCircle?: boolean | undefined;
            drawMarker?: boolean | undefined;
            showCompass?: boolean | undefined;
            markerClass?: any;
            compassClass?: any;
            circleStyle?: PathOptions | undefined;
            markerStyle?: PathOptions | MarkerOptions | undefined;
            compassStyle?: PathOptions | undefined;
            followCircleStyle?: PathOptions | undefined;
            followMarkerStyle?: PathOptions | undefined;
            icon?: string | undefined;
            iconLoading?: string | undefined;
            iconElementTag?: string | undefined;
            textElementTag?: string | undefined;
            circlePadding?: number[] | undefined;
            metric?: boolean | undefined;
            createButtonCallback?: ((container: HTMLDivElement, options: LocateOptions) => void) | undefined;
            onLocationError?: ((event: ErrorEvent, control: Locate) => void) | undefined;
            onLocationOutsideMapBounds?: ((control: Locate) => void) | undefined;
            showPopup?: boolean | undefined;
            strings?: StringsOptions | undefined;
            locateOptions?: L.LocateOptions | undefined;
        }
        interface StringsOptions {
            title?: string | undefined;
            metersUnit?: string | undefined;
            feetUnit?: string | undefined;
            popup?: string | undefined;
            outsideMapBoundsMsg?: string | undefined;
        }
    }

    namespace control {
        /**
         * Creates a Leaflet.Locate control
         */
        function locate(options?: Control.LocateOptions): Control.Locate;
    }
}
