// Type definitions for YouTube Analytics API
// Project: https://developers.google.com/youtube/analytics/
// Definitions by: Frank M <https://github.com/sgtfrankieboy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.youtubeAnalytics {

    export interface reports {

        /**
         * Retrieve your YouTube Analytics reports.
         */
        query(object: {
            /**
             * Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the ids parameter value to contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content owner.
             */
            ids: string;
            /**
             * The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
             */
            'start-date': string;
            /**
             * The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
             */
            'end-date': string;
            /**
             * A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes.
             */
            metrics: string;
            /**
             * A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender.
             */
            dimensions?: string;
            /**
             * A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters.
             */
            filters?: string;
            /**
             * The maximum number of rows to include in the response.
             */
            'max-results'?: number;
            /**
             * A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
             */
            sort?: string;
            /**
             * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
             */
            'start-index'?: number;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            fields?: string;
        }): HttpRequest<any>

    }

}
