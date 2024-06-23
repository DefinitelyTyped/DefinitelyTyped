declare namespace appendQuery {
    interface Query {
        [index: string]: string | null;
    }

    interface Options {
        /**
         * whether or not to encode appended passed params using `encodeURIComponent`.
         * Default: `true`.
         */
        encodeComponents?: boolean | undefined;
        /**
         * whether or not to remove params for `null` properties in the query object.
         * Default: `false` (properties will be preserved with no value).
         */
        removeNull?: boolean | undefined;
    }
}

/**
 * @param url a string URL to append to
 * @param query a string or object containing query params to append
 */
declare function appendQuery(url: string, query: string | appendQuery.Query, options?: appendQuery.Options): string;

export = appendQuery;
