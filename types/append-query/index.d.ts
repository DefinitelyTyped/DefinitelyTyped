// Type definitions for append-query 2.0
// Project: https://github.com/lakenen/node-append-query
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace appendQuery {
    interface Query {
        [index: string]: string | null;
    }

    interface Options {
        /**
         * whether or not to encode appended passed params using `encodeURIComponent`.
         * Default: `true`.
         */
        encodeComponents?: boolean;
        /**
         * whether or not to remove params for `null` properties in the query object.
         * Default: `false` (properties will be preserved with no value).
         */
        removeNull?: boolean;
    }
}

/**
 * @param url a string URL to append to
 * @param query a string or object containing query params to append
 */
declare function appendQuery(url: string, query: string | appendQuery.Query, options?: appendQuery.Options): string;

export = appendQuery;
