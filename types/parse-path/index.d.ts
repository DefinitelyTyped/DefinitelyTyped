// Type definitions for parse-path 4.0
// Project: https://github.com/IonicaBizau/parse-path
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace parsePath {
    type Protocol = 'http' | 'https' | 'ssh' | 'file' | 'git';

    interface ParsedPath {
        /** The url hash. */
        hash: string;
        /** The input url. */
        href: string;
        /** The url pathname. */
        pathname: string;
        /** The domain port. */
        port: null | number;
        /** The first protocol, `"ssh"` (if the url is a ssh url) or `"file"`. */
        protocol: Protocol;
        /** An array with the url protocols (usually it has one element). */
        protocols: Protocol[];
        /** The url querystring, parsed as object. */
        query: any;
        /** The url domain (including subdomains). */
        resource: string;
        /** The url querystring value. */
        search: string;
        /** The authentication user (usually for ssh urls). */
        user: string;
    }
}

declare function parsePath(url: string): parsePath.ParsedPath;
export = parsePath;
