import * as L from "leaflet";

declare module "leaflet" {
    namespace gridLayer {
        interface GoogleMutant extends GridLayer {
            setElementSize(e: HTMLElement, size: Point): void;

            /**
             * Add additional Google Maps layer.
             *
             * https://developers.google.com/maps/documentation/javascript/trafficlayer
             *
             * @param googleLayerName such as BicyclingLayer, TrafficLayer, or TransitLayer.
             * @param options? constructor arguments to pass through to the google layer.
             * @returns Promise for the native Google Maps Layer instance.
             */
            addGoogleLayer(googleLayerName: string, options?: object): Promise<object>;

            /**
             * Removes Google Maps layer.
             *
             *  https://developers.google.com/maps/documentation/javascript/trafficlayer
             *
             * @param googleLayerName such as BicyclingLayer, TrafficLayer, or TransitLayer.
             */
            removeGoogleLayer(googleLayerName: string): void;
        }

        type GoogleMutantType = "roadmap" | "satellite" | "terrain" | "hybrid";

        interface GoogleMutantStyler {
            hue?: string | undefined;
            lightness?: number | undefined;
            saturation?: number | undefined;
            gamma?: number | undefined;
            invert_lightness?: boolean | undefined;
            visibility?: string | undefined;
            color?: string | undefined;
            weight?: number | undefined;
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
            featureType?: string | undefined;

            /**
             * https://developers.google.com/maps/documentation/javascript/style-reference#style-elements
             */
            elementType?: string | undefined;

            /**
             * https://developers.google.com/maps/documentation/javascript/style-reference#stylers
             */
            stylers?: GoogleMutantStyler[] | undefined;
        }

        interface GoogleMutantOptions extends TileLayerOptions {
            minZoom?: number | undefined;
            maxZoom?: number | undefined;
            maxNativeZoom?: number | undefined;
            tileSize?: number | Point | undefined;
            subdomains?: string | string[] | undefined;
            errorTileUrl?: string | undefined;

            /**
             * The mutant container will add its own attribution anyways.
             */
            attribution?: string | undefined;

            opacity?: number | undefined;
            continuousWorld?: boolean | undefined;
            noWrap?: boolean | undefined;

            /**
             * Google's map type. 'hybrid' is not really supported.
             */
            type?: GoogleMutantType | undefined;

            /**
             * Google's map styles.
             */
            styles?: GoogleMutantStyle[] | undefined;
        }

        function googleMutant(options?: GoogleMutantOptions): GoogleMutant;
    }
}
