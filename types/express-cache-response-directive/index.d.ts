import * as express from "express";

declare global {
    namespace Express {
        interface Response {
            cacheControl: (pattern: Pattern | Options, options?: Options) => void;
        }
    }
}

// https://github.com/dantman/express-cache-response-directive/blob/v1.1.0/index.js#L49-L62
type Pattern = "public" | "private" | "no-cache" | "no-store";

// https://github.com/dantman/express-cache-response-directive/blob/v1.1.0/index.js#L10-L21
// https://github.com/dantman/express-cache-response-directive/blob/v1.1.0/index.js#L36-L46
interface Options {
    public?: boolean;
    private?: boolean | string | string[];
    "no-cache"?: boolean | string | string[];
    noCache?: boolean | string | string[];
    "no-store"?: boolean;
    noStore?: boolean;
    "max-age"?: number | string;
    maxAge?: number | string;
    "s-maxage"?: number | string;
    sMaxage?: number | string;
    sMaxAge?: number | string;
    "must-revalidate"?: boolean;
    mustRevalidate?: boolean;
    "proxy-revalidate"?: boolean;
    proxyRevalidate?: boolean;
    "no-transform"?: boolean;
    noTransform?: boolean;
    "stale-while-revalidate"?: number | string;
    staleWhileRevalidate?: number | string;
    "stale-if-error"?: number | string;
    staleIfError?: number | string;
}

export = cacheResponseDirective;

declare function cacheResponseDirective(): express.RequestHandler;
