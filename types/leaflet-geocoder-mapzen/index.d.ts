import * as L from "leaflet";

declare module "leaflet" {
    namespace Control {
        interface GeocoderStatic extends ClassStatic {
            /**
             * Creates a geocoder control.
             */
            new(options?: GeocoderOptions): Geocoder;
        }

        // tslint:disable-next-line:no-empty-interface
        interface Geocoder extends Control {}

        interface GeocoderOptions {
            /**
             * Host endpoint for a Pelias-compatible search API.
             *
             * Default value: 'https://search.mapzen.com/v1'.
             */
            url?: string | undefined;

            /**
             * If true, search is bounded by the current map view.
             * You may also provide a custom bounding box in form of a LatLngBounds object.
             * Note: bounds is not supported by autocomplete.
             *
             * Default value: false.
             */
            bounds?: LatLngBounds | boolean | undefined;

            /**
             * If true, search and autocomplete prioritizes results near the center
             * of the current view.
             * You may also provide a custom LatLng value
             * (in any of the accepted Leaflet formats) to act as the center bias.
             *
             * Default value: 'true'.
             */
            focus?: LatLng | boolean | undefined;

            /**
             * Filters results by layers (documentation).
             * If left blank, results will come from all available layers.
             *
             * Default value: null.
             */
            layers?: string | any[] | undefined;

            /**
             * An object of key-value pairs which will be serialized
             * into query parameters that will be passed to the API.
             * This allows custom queries that are not already supported
             * by the convenience options listed above.
             * For a full list of supported parameters,
             * please read the Mapzen Search documentation.
             *
             * IMPORTANT: some parameters only work with the /search endpoint,
             * and do not apply to /autocomplete requests!
             * All supplied parameters are passed through;
             * this library doesn't know which are valid parameters and which are not.
             * In the event that other options conflict with parameters passed through params,
             * the params option takes precedence.
             *
             * Default value: null.
             */
            params?: object | undefined;

            /**
             * The position of the control (one of the map corners).
             * Can be 'topleft', 'topright', 'bottomleft', or 'bottomright'.
             *
             * Default value: 'topleft'.
             */
            position?: PositionString | undefined;

            /**
             * Attribution text to include.
             * Set to blank or null to disable.
             *
             * Default value: 'Geocoding by <a href="https://mapzen.com/projects/search/">Mapzen</a>'
             */
            attribution?: string | undefined;

            /**
             * Placeholder text to display in the search input box.
             * Set to blank or null to disable.
             *
             * Default value: 'Search'
             */
            placeholder?: string | undefined;

            /**
             * Tooltip text to display on the search icon. Set to blank or null to disable.
             *
             * Default value: 'Search'
             */
            title?: string | undefined;

            /**
             * If true, highlighting a search result pans the map to that location.
             *
             * Default value: true
             */
            panToPoint?: boolean | undefined;

            /**
             * If true, an icon is used to indicate a polygonal result,
             * matching any non-"venue" or non-"address" layer type.
             * If false, no icon is displayed.
             * For custom icons, pass a string containing a path to the image.
             *
             * Default value: true
             */
            polygonIcon?: boolean | string | undefined;

            /**
             * If true, search results drops Leaflet's default blue markers onto the map.
             * You may customize this marker's appearance and
             * behavior using Leaflet marker options.
             *
             * Default value: true
             */
            markers?: MarkerOptions | boolean | undefined;

            /**
             * If true, the input box will expand to take up the full width of the map container.
             * If an integer breakpoint is provided,
             * the full width applies only if the map container width is below this breakpoint.
             *
             * Default value: 650
             */
            fullWidth?: number | boolean | undefined;

            /**
             * If true, the search input is always expanded.
             * It does not collapse into a button-only state.
             *
             * Default value: false
             */
            expanded?: boolean | undefined;

            /**
             * If true, suggested results are fetched on each keystroke.
             * If false, this is disabled and users must obtain results
             * by pressing the Enter key after typing in their query.
             *
             * Default value: true
             */
            autocomplete?: boolean | undefined;

            /**
             * If true, selected results will make a request to the service /place endpoint.
             * If false, this is disabled.
             * The geocoder does not handle responses to /place,
             * you will need to do handle it yourself in the results event listener (see below).
             *
             * Default value: false
             */
            place?: boolean | undefined;
        }
    }

    namespace control {
        /**
         * Creates a geocoder control.
         */
        function geocoder(api_key: string, options?: Control.GeocoderOptions): Control.Geocoder;
    }
}
