/// <reference types="google.maps" />

interface Options {
    /**
     * The Google Maps API `script` tag URL
     *
     * Default Value `'https://maps.googleapis.com/maps/api/js'`
     */
    apiUrl?: string | undefined;
    /**
     * Client usage reporting channel
     *
     * https://developers.google.com/maps/premium/reports/usage-reports#channels
     */
    channel?: string | undefined;
    /**
     * Client ID
     *
     * https://developers.google.com/maps/documentation/javascript/get-api-key#specifying-a-client-id-when-loading-the-api
     */
    client?: string | undefined;
    /**
     * Your API key
     *
     * https://developers.google.com/maps/documentation/javascript/get-api-key#step-2-add-the-api-key-to-your-application
     */
    key?: string | undefined;
    /**
     * https://developers.google.com/maps/documentation/javascript/localization#Language
     */
    language?: string | undefined;
    /**
     * Supplemental libraries to load
     *
     * Default Value `[]`
     *
     * https://developers.google.com/maps/documentation/javascript/libraries
     */
    libraries?: string[] | undefined;
    /**
     * https://developers.google.com/maps/documentation/javascript/localization#Region
     */
    region?: string | undefined;
    /**
     * Time in milliseconds before rejecting the Promise
     *
     * Default Value `10000`
     */
    timeout?: number | undefined;
    /**
     * API Version
     *
     * https://developers.google.com/maps/documentation/javascript/versions
     */
    v?: string | undefined;
}

declare function loadGoogleMapsApi(options?: Options): Promise<typeof google.maps>;

export = loadGoogleMapsApi;
