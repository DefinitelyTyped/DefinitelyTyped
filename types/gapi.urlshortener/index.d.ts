// Type definitions for Google Url Shortener API
// Project: https://developers.google.com/url-shortener/
// Definitions by: Frank M <https://github.com/sgtfrankieboy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.urlshortener {

    export interface url {

        /**
         * Expands a short URL or gets creation time and analytics.
         */
        get(object: {
            /**
             * The short URL, including the protocol.
             */
            'shortUrl': string;
            /**
             * Additional information to return. ANALYTICS_CLICKS, ANALYTICS_TOP_STRINGS, FULL
             */
            'projection'?: string;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            'fields'?: string
        }): HttpRequest<GoogleApiUrlShortenerUrlResource>;
        /**
         * Creates a new short URL.
         */
        insert(object: {
            /**
             * Selector specifying which fields to include in a partial response.
             */
            'fields'?: string;
            /**
             * HTTP Request Body
             */
            'RequestBody'?: string
        }): HttpRequest<GoogleApiUrlShortenerUrlResource>;
        /**
         * Retrieves a list of URLs shortened by a user.
         */
        list(object: {
            /**
             * Additional information to return. ANALYTICS_CLICKS, FULL
             */
            'projection'?: string;
            /**
             * Token for requesting successive pages of results.
             */
            'start-token'?: string;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            'fields'?: string
        }): HttpRequest<GoogleApiUrlShortenerUrlResource>;
    }
}

interface GoogleApiUrlShortenerUrlResource {
    /**
     * The fixed string "urlshortener#url".
     */
    kind: string;
    /**
     * Short URL
     */
    id: string;
    /**
     * Long URL
     */
    longUrl: string;
    /**
     * Status of the target URL. Possible values: "OK", "MALWARE", "PHISHING", or "REMOVED".
     */
    status: string;
    /**
     * Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd'T'HH:mm:ss.SSSZZ format.
     */
    created: string;
    /**
     * A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
     */
    analytics: {
        /**
         * Click analytics over all time.
         */
        allTime: GoogleApiUrlShortenerUrlResourceAnalyticsObject;
        /**
         * Click analytics over the last month.
         */
        month: GoogleApiUrlShortenerUrlResourceAnalyticsObject;
        /**
         * Click analytics over the last week.
         */
        week: GoogleApiUrlShortenerUrlResourceAnalyticsObject;
        /**
         * Click analytics over the last day.
         */
        day: GoogleApiUrlShortenerUrlResourceAnalyticsObject;
        /**
         * Click analytics over the last two hours.
         */
        twoHours: GoogleApiUrlShortenerUrlResourceAnalyticsObject;
    }
}

interface GoogleApiUrlShortenerUrlResourceAnalyticsObject {
    /**
     * Number of clicks on this short URL.
     */
    shortUrlClicks: string;
    /**
     * Number of clicks on all goo.gl short URLs pointing to this long URL.
     */
    longUrlClicks: string;
    /**
     * Top referring hosts, e.g. "www.google.com"; sorted by (descending) click counts. Only present if this data is available.
     */
    referrers: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[];
    /**
     * Top countries (expressed as country codes), e.g. "US" or "DE"; sorted by (descending) click counts. Only present if this data is available.
     */
    countries: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[];
    /**
     * Top browsers, e.g. "Chrome"; sorted by (descending) click counts. Only present if this data is available.
     */
    browsers: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[];
    /**
     * Top platforms or OSes, e.g. "Windows"; sorted by (descending) click counts. Only present if this data is available.
     */
    platforms: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[];
}

interface GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject {
    /**
     * Number of clicks for this top entry, e.g. for this particular country or browser.
     */
    count: string;
    /**
     * Label assigned to this top entry, e.g. "US" or "Chrome".
     */
    id: string;
}
