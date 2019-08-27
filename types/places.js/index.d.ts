// Type definitions for places.js 1.16
// Project: https://community.algolia.com/places
// Definitions by: Samuel Jaeschke <https://github.com/samjetski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as algoliasearch from 'algoliasearch';
import { EventEmitter } from 'events';

export as namespace places;

export = places;

declare function places(options: places.PlacesStaticOptions): places.PlacesAutocomplete;

declare namespace places {
    type PlaceType
        = "country"
        | "city"
        | "address"
        | "busStop"
        | "trainStation"
        | "townhall"
        | "airport";

    interface PlaceLatLng {
        lat: number;
        lng: number;
    }

    interface PlaceSuggestion {
        type: PlaceType;
        name: string;
        city?: string;
        country?: string;
        countryCode: string;
        administrative?: string;
        county?: string;
        suburb?: string;
        latlng: PlaceLatLng;
        postcode?: string;
        postcodes?: string[];
        value: string;
        highlight: {
            name: string;
            suburb?: string;
            city?: string;
            postcode?: string;
            county?: string;
            administrative?: string;
            country?: string;
        };
        rawAnswer: unknown;
    }

    interface PlacesChangeEvent {
        query: string;
        rawAnswer: unknown;
        suggestion: PlaceSuggestion;
        suggestionIndex: number;
    }

    interface PlacesSuggestionsEvent {
        query: string;
        rawAnswer: unknown;
        suggestions: PlaceSuggestion[];
    }

    interface PlacesMessageEvent {
        message: string;
    }

    /**
     * Options for initial configuration of a PlacesAutocomplete instance.
     */
    interface PlacesStaticOptions extends PlacesOptions {
        /**
         * Determines the `<input>` that will be used for the Algolia Places autocompletion menu.
         * @remarks
         * You just need to pass a reference to an Element. Obtained via {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector | document.querySelector} for example.
         * Important: This parameter can only be set at instantiation.
         */
        container: HTMLInputElement | string;

        /**
         * The Places application ID to use.
         * @remarks
         * Tip: Places application IDs always start by `pl`, which makes them recognizable at a glance.
         * You can {@link https://www.algolia.com/users/sign_up/places | create a Places app here}.
         * Important: This parameter can only be set at instantiation.
         */
        appId?: string;

        /**
         * The Places search API key to use.
         * @remarks
         * Important: This parameter can only be set at instantiation.
         */
        apiKey?: string;

        /**
         * Change the templates used in place.js.
         * @remarks
         * Each template is a function that will receive a {@link PlaceSuggestion} and must return a `string`.
         * Important: This parameter can only be set at instantiation.
         */
        templates?: {
            /**
             * Must return a plain string as it's used to fill the `input.value`.
             * @param suggestion
             */
            value?: (suggestion: PlaceSuggestion) => string;

            /**
             * Should return an HTML string to be displayed in the dropdown.
             * @param suggestion
             */
            suggestion?: (suggestion: PlaceSuggestion) => string;
        };

        /**
         * Control whether the default styles should be used.
         * @remarks
         * Important: This parameter can only be set at instantiation.
         * @defaultValue `true`
         */
        style?: boolean;

        /**
         * Algolia {@link https://github.com/algolia/algoliasearch-client-js#client-options | JavaScript API client options}.
         * @remarks
         * Note: This is an advanced option.
         */
        clientOptions?: algoliasearch.ClientOptions;

        /**
         * {@link https://github.com/algolia/autocomplete.js#options | autocomplete.js options} to configure the underlying autocomplete.js instance.
         * @remarks
         * Note: This is an advanced option.
         */
        // autocomplete.js types are not currently available
        autocompleteOptions?: any;
    }

    /**
     * Options to reconfigure an existing PlacesAutocomplete instance.
     */
    interface PlacesOptions {
        /**
         * Restrict the search results to a specific type.
         * @remarks
         * Default: Search in all types.
         * Note: If you restrict the search to city or airport, you probably want to disable the {@link aroundLatLngViaIP} option as well. This will make sure you don't get only nearby results.
         */
        type?: PlaceType;

        /**
         * Change the default language of the results.
         * @remarks
         * You can pass two letters language codes ({@link https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes | ISO 639-1}).
         * Default: Current user language obtained via `navigator.language` in the two letter form.
         * @example
         * // When navigator.language == 'en_US'
         * 'en'
         */
        language?: string;

        /**
         * Change the countries to search in.
         * @remarks
         * You must pass an array of two letters country codes ({@link https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes | ISO 639-1}).
         * Default: Search on the whole planet.
         */
        countries?: string[];

        /**
         * Force to first search around a specific latitude longitude.
         * @remarks
         * The option value must be provided as a string: `latitude, longitude` like `12.232,23.1`.
         * The default is to search around the location of the user determined via his IP address (geoip).
         */
        aroundLatLng?: string;

        /**
         * Whether or not to first search around the geolocation of the user found via his IP address.
         * @defaultValue: `true`
         */
        aroundLatLngViaIP?: boolean;

        /**
         * Radius in meters to search around the latitude longitude.
         * @remarks
         * Otherwise a default radius is automatically computed given the area density.
         */
        aroundRadius?: number;

        /**
         * Filters the results inside the area defined by the two extreme points of a rectangle.
         *
         * @remarks
         * {@link https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filter-inside-rectanglepolygonal-area | See guide} or
         * {@link https://www.algolia.com/doc/api-reference/api-parameters/insideBoundingBox/ | API reference}.
         * Format: `topRightLat, topRightLng, bottomLeftLat, bottomLeftLng`
         * @example
         * "60, 16, 40, -4"
         */
        insideBoundingBox?: string;

        /**
         * Filters the results inside the area defined by a shape.
         * @remarks
         * {@link https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filter-inside-rectanglepolygonal-area | See guide} or
         * {@link https://www.algolia.com/doc/api-reference/api-parameters/insidePolygon/ | API reference}.
         * Format: `p1Lat, p1Lng, p2Lat, p2Lng, p3Lat, p3Lng...`
         */
        insidePolygon?: string;

        /**
         * Controls whether the {@link https://www.algolia.com/doc/api-reference/api-methods/search/#method-response-_rankinginfo | _rankingInfo} object should be included in the hits.
         * @remarks
         * The _rankingInfo object for a Places query is slightly different from a regular Algolia query and you can read up more about the difference and how to leverage them in
         * {@link https://community.algolia.com/places/examples.html#using-_rankinginfo | our guide}.
         * @defaultValue `false`
         */
        getRankingInfo?: boolean;

        /**
         * Ask and use the device location.
         */
        useDeviceLocation?: boolean;

        /**
         * Allows you to override computed query parameters sent to the {@link https://community.algolia.com/places/rest.html | Algolia Places REST API}.
         */
        computeQueryParams?: algoliasearch.QueryParameters;
    }

    interface PlacesAutocomplete extends EventEmitter {
        /**
         * Fired when suggestion selected in the dropdown or hint was validated.
         * @remarks
         * You can use this event to then populate another form, {@link https://community.algolia.com/places/examples.html#complete-form | see the example}.
         * @param type "change"
         * @param listener
         */
        on(type: "change", listener: (event: PlacesChangeEvent) => void): this;

        /**
         * Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.
         * @remarks
         * You will also receive this event when no places were found.
         * You can use this event to display the suggestions on a map, see the @{link https://community.algolia.com/places/examples.html#link-to-a-map | map example}.
         * @param type "suggestions"
         * @param listener
         */
        on(type: "suggestions", listener: (event: PlacesSuggestionsEvent) => void): this;

        /**
         * Fired when arrows keys are used to navigate suggestions.
         * @remarks
         * You can use this event to highlight markers on a map, see the @{link https://community.algolia.com/places/examples.html#link-to-a-map | map example}.
         * @param type "cursorChanged"
         * @param listener
         */
        // tslint:disable-next-line:unified-signatures
        on(type: "cursorChanged", listener: (event: PlacesChangeEvent) => void): this;

        /**
         * Fired when the input is cleared.
         * @remarks
         * This event doesn't return anything, as the value of the query is then `''` and no suggestion is displayed nor selected.
         * You can use this event when used with a map to reset the pins and the default center. See this behaviour live on the
         * @{link https://community.algolia.com/places/examples.html#link-to-a-map | map example}.
         * @param type "clear"
         * @param listener
         */
        on(type: "clear", listener: () => void): this;

        /**
         * Fired when you reached your current @{link https://community.algolia.com/places/pricing.html#rate-limits | rate limit}.
         * @param type "limt"
         * @param listener
         */
        on(type: "limit", listener: (event: PlacesMessageEvent) => void): this;

        /**
         * Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.
         * @param type "error"
         * @param listener
         */
        // tslint:disable-next-line:unified-signatures
        on(type: "error", listener: (event: PlacesMessageEvent) => void): this;

        /**
         * Opens the dropdown menu. The menu will be visible if it has content to show.
         */
        open: () => void;

        /**
         * Closes the dropdown menu.
         */
        close: () => void;

        /**
         * Get the current input value.
         */
        getVal: () => string;

        /**
         * Set the current input value.
         * @remarks
         * This will not open the menu. You will need to call {@link open}.
         */
        setVal: (val: string) => void;

        /**
         * Removes the places autocomplete instance, switch the input back to its original behavior.
         */
        destroy: () => undefined;

        /**
         * Reconfigure the places autocomplete instance with new options.
         */
        configure: (options: PlacesOptions) => this;

        /*
         * These helpers exist but official documentation is patchy and types are not currently available.
         * Underlying autocomplete.js instance:
         *   autocomplete: ???;
         * Direct search method:
         *   search: (query: string) => Promise<???>;
         * Reverse-geocoding search instance:
         *   reverse: ???;
         * These seem to be lightweight clones of `algoliasearch.Places` methods which have recently been added to
         * DefinitelyTyped, although it is unclear how closely the interfaces match this version.
         * See: https://community.algolia.com/places/api-clients.html#rest-api
         */
    }
}
