// Type definitions for load-google-maps-api 2.0
// Project: https://github.com/yuanqing/load-google-maps-api#readme
// Definitions by: Oscar Busk <https://github.com/oBusk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="googlemaps" />

interface Options {
    /**
     * The Google Maps API `script` tag URL
     *
     * Default Value `'https://maps.googleapis.com/maps/api/js'`
     */
    apiUrl?: string;
    /**
     * Client usage reporting channel
     *
     * https://developers.google.com/maps/premium/reports/usage-reports#channels
     */
    channel?: string;
    /**
     * Client ID
     *
     * https://developers.google.com/maps/documentation/javascript/get-api-key#specifying-a-client-id-when-loading-the-api
     */
    client?: string;
    /**
     * Your API key
     *
     * https://developers.google.com/maps/documentation/javascript/get-api-key#step-2-add-the-api-key-to-your-application
     */
    key?: string;
    /**
     * https://developers.google.com/maps/documentation/javascript/localization#Language
     */
    language?: string;
    /**
     * Supplemental libraries to load
     *
     * Default Value `[]`
     *
     * https://developers.google.com/maps/documentation/javascript/libraries
     */
    libraries?: string[];
    /**
     * https://developers.google.com/maps/documentation/javascript/localization#Region
     */
    region?: string;
    /**
     * Time in milliseconds before rejecting the Promise
     *
     * Default Value `10000`
     */
    timeout?: number;
    /**
     * API Version
     *
     * https://developers.google.com/maps/documentation/javascript/versions
     */
    v?: string;
}

declare function loadGoogleMapsApi(options?: Options): Promise<typeof google.maps>;

export = loadGoogleMapsApi;
