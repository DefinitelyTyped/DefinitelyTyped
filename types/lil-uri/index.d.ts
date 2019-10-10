// Type definitions for lil-uri 0.2
// Project: https://github.com/lil-js/uri#readme
// Definitions by: Wayne Carson <https://github.com/wcarson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Global exposed when library is used outside of a module environment.
 */
export as namespace lil;

/**
 * Exported function
 */
export = uri;

/**
 * Parses the given URI string
 *
 * @param the URI string to parse.
 */
declare function uri(uri?: string): uri.URI;

declare namespace uri {
    /**
     * Provides access to URI component values and parser/builder functions.
     */
    interface URI {
        /**
         * Parses the given URI string
         * @param uri the URI to parse
         */
        parse(uri: string): URIParts;

        /**
         * Builds URI components into a URI string
         */
        build(): string;

        /**
         * Builds URI components into a URI string
         */
        toString(): string;

        /**
         * Builds URI components into a URI string
         */
        valueOf(): string;

        /**
         * Gets the protocol value
         */
        protocol(): string;

        /**
         * Sets the protocol
         * @param protocol the protocol
         * @return this object
         */
        protocol(protocol: string): URI;

        /**
         * Gets the host value
         */
        host(): string;

        /**
         * Sets the host
         * @param host the host
         * @return this object
         */
        host(host: string): URI;

        /**
         * Gets the hostname value
         */
        hostname(): string;

        /**
         * Sets the hostname
         * @param hostname the hostname
         * @return this object
         */
        hostname(hostname: string): URI;

        /**
         * Gets the port value
         */
        port(): number;

        /**
         * Sets the port
         * @param port the port
         * @return this object
         */
        port(port: string): URI;

        /**
         * Gets the auth value
         */
        auth(): Credentials;

        /**
         * Sets the auth
         * @param auth the auth
         * @return this object
         */
        auth(auth: string): URI;

        /**
         * Gets the user value
         */
        user(): string;

        /**
         * Sets the user
         * @param user the user
         * @return this object
         */
        user(user: string): URI;

        /**
         * Gets the password value
         */
        password(): string;

        /**
         * Sets the password
         * @param password the password
         * @return this object
         */
        password(password: string): URI;

        /**
         * Gets the path value
         */
        path(): string;

        /**
         * Sets the path
         * @param path the path
         * @return this object
         */
        path(path: string): URI;

        /**
         * Gets the search value
         */
        search(): string;

        /**
         * Sets the search
         * @param search the search
         * @return this object
         */
        search(search: string): URI;

        /**
         * Gets the query value
         */
        query(): QueryString;

        /**
         * Sets the query
         * @param query the query
         * @return this object
         */
        query(query: QueryString): URI;

        /**
         * Gets the hash value
         */
        hash(): string;

        /**
         * Sets the hash
         * @param hash the hash
         * @return this object
         */
        hash(hash: string): URI;
    }

    /**
     * URI parts
     */
    interface URIParts {
        uri: string;
        protocol: string;
        host: string;
        hostname: string;
        port: string;
        auth: string;
        user: string;
        password: string;
        path: string;
        search: string;
        query: QueryString;
        hash: string;
    }

    /**
     * Map of query string keys and values
     */
    interface QueryString {
        [key: string]: string|string[];
    }

    /**
     * Credentials map
     */
    interface Credentials {
        user: string;
        password: string;
    }
}
