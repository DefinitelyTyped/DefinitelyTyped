declare namespace pc {

    /**
     * @private
     * @function
     * @name pc.createURI
     * @description Create a URI object from constituent parts
     * @param {Object} options Parts of the URI to build
     * @param {String} [options.scheme] The URI scheme (e.g. http)
     * @param {String} [options.authority] The URI authority (e.g. www.example.com)
     * @param {String} [options.host] Combination of scheme and authority (e.g. http://www.example.com)
     * @param {String} [options.path] The URI path (e.g. /users/example)
     * @param {String} [options.hostpath] Combination of scheme, authority and path (e.g. http://www.example.com/users/example)
     * @param {String} [options.query] The query section, after the ?(e.g. http://example.com?<b>key=value&another=123</b>)
     * @param {String} [options.fragment] The fragment section, after the # (e.g. http://example.com#<b>fragment/data</b>)
     * @returns {String} A URI string
     */
    function createURI(options: {
        scheme?: string,
        authority?: string,
        host?: string,
        path?: string,
        hostpath?: string,
        query?: string,
        fragment?: string
    }): string;

    /**
     * @private
     * @name pc.URI
     * @description Create a new URI object
     * @class A URI object
     * @param {String} uri URI string
     */
    class URI {
        constructor(uri: string)

        /**
         * @name pc.URI#scheme
         * @description The scheme. (e.g. http)
         */
        scheme: string;

        /**
         * @name pc.URI#authority
         * @description The authority. (e.g. www.example.com)
         */
        authority: string;

        /**
         * @name pc.URI#path
         * @description The path. (e.g. /users/example)
         */
        path: string;

        /**
         * @name pc.URI#query
         * @description The query, the section after a ?. (e.g. search=value)
         */
        query: string;

        /**
         * @name pc.URI#fragment
         * @description The fragment, the section after a #
         */
        fragment: string;

        /**
         * @function
         * @name pc.URI#toString
         * @description Convert URI back to string
         */
        toString(): string;

        /**
         * @function
         * @name pc.URI#getQuery
         * @description Returns the query parameters as an Object
         * @example
         * <code><pre lang="javascript">
         * var s = "http://example.com?a=1&b=2&c=3
         * var uri = new pc.URI(s);
         * var q = uri.getQuery();
         * console.log(q.a); // logs "1"
         * console.log(q.b); // logs "2"
         * console.log(q.c); // logs "3"
         * </code></pre>
         */
        getQuery(): { [prop: string]: string };

        /**
         * @function
         * @name pc.URI#setQuery
         * @description Set the query section of the URI from a Object
         * @param {Object} params Key-Value pairs to encode into the query string
         * @example
         * var s = "http://example.com";
         * var uri = new pc.URI(s);
         * uri.setQuery({"a":1,"b":2});
         * console.log(uri.toString()); // logs "http://example.com?a=1&b=2
         */
        setQuery(params: { [prop: string]: string | number }): void;
    }
}
