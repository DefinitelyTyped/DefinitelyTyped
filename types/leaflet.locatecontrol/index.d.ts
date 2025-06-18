import * as L from "leaflet";

declare module "leaflet" {
    namespace Control {
        class Locate extends Control {
            constructor(locateOptions?: LocateOptions);
            onAdd(map: Map): HTMLElement;
            start(): void;
            stop(): void;
            stopFollowing(): void;
            setView(): void;
        }
        interface LocateOptions extends ControlOptions {
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
            createButtonCallback?:
                | ((
                    container: HTMLDivElement,
                    options: LocateOptions,
                ) => { link: HTMLAnchorElement; icon: HTMLElement })
                | undefined;
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

export type LocateOptions = L.Control.LocateOptions;

// Usage with bundler or esm
// https://github.com/domoritz/leaflet-locatecontrol/blob/b20d77e4184fdfc59ff0037f8d95471a49af6f81/README.md#with-npm
export class LocateControl extends L.Control.Locate {}
