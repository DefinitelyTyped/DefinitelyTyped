declare namespace parsePath {
    type Protocol = "http" | "https" | "ssh" | "file" | "git";

    interface ParsedPath {
        /** The url hash. */
        hash: string;
        /** The url domain (including subdomain and port). */
        host: string;
        /** The input url. */
        href: string;
        /**
         * @default ''
         */
        password: string;
        /**
         * Whether the parsing failed or not.
         */
        parse_failed: boolean;
        /** The url pathname. */
        pathname: string;
        /**
         * The domain port.
         * @default ''
         */
        port: string;
        /** The first protocol, `"ssh"` (if the url is a ssh url) or `"file"`. */
        protocol: Protocol;
        /** An array with the url protocols (usually it has one element). */
        protocols: Protocol[];
        /** The url querystring, parsed as object. */
        query: Record<string, string>;
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
