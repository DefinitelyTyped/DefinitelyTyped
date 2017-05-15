// Type definitions for leaflet.gridlayer.googlemutant 0.4
// Project: https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant#README
// Definitions by: Ernest Rhinozeros <https://github.com/ernest-rhinozeros>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L.gridLayer {
    interface GoogleMutant extends L.GridLayer {
        setElementSize(e: HTMLElement, size: L.Point): void ;
    }

    type GoogleMutantType = 'roadmap' | 'satellite' | 'terrain' | 'hybrid';

    interface GoogleMutantStyler {
        hue?: string;
        lightness?: number;
        saturation?: number;
        gamma?: number;
        invert_lightness?: boolean;
        visibility?: string;
        color?: string;
        weight?: number;
    }

    /**
     * Google's map style.
     *
     * https://developers.google.com/maps/documentation/javascript/style-reference
     */
    interface GoogleMutantStyle {
        /**
         * https://developers.google.com/maps/documentation/javascript/style-reference#style-features
         */
        featureType?: string;

        /**
         * https://developers.google.com/maps/documentation/javascript/style-reference#style-elements
         */
        elementType?: string;

        /**
         * https://developers.google.com/maps/documentation/javascript/style-reference#stylers
         */
        stylers?: GoogleMutantStyler[];
    }

    interface GoogleMutantOptions extends L.TileLayerOptions {
        minZoom?: number;
        maxZoom?: number;
        maxNativeZoom?: number;
        tileSize?: number | Point;
        subdomains?: string | string[];
        errorTileUrl?: string;

        /**
         * The mutant container will add its own attribution anyways.
         */
        attribution?: string;

        opacity?: number;
        continuousWorld?: boolean;
        noWrap?: boolean;

        /**
         * Google's map type. 'hybrid' is not really supported.
         */
        type?: GoogleMutantType;

        /**
         * Google's map styles.
         */
        styles?: GoogleMutantStyle[];
    }

    function googleMutant(options?: GoogleMutantOptions): GoogleMutant;
}
