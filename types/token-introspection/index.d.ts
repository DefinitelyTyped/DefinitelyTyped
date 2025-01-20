import { JwtPayload } from "jsonwebtoken";
import { RequestInit, Response } from "node-fetch";
import { RSA_JWK } from "pem-jwk";

import customErrors = require("./errors");

type Fetch = (url: string, options: RequestInit) => Promise<Response>;

declare function tokenIntrospect(opts?: tokenIntrospect.Options): tokenIntrospect.IntrospectionFunction;

export = tokenIntrospect;

declare namespace tokenIntrospect {
    const errors: typeof customErrors;

    interface Options {
        /**
         * Static JWKS of trusted keys, for example `{keys: [{kty:'RSA',n:'4-4mhUVhY2k',e:'AQAB'}]}`
         */
        jwks?: {
            keys: RSA_JWK[];
        };
        /**
         * URL of a trusted JWKS, for example `https://example.com/jwks`
         */
        jwks_uri?: string;
        /**
         * URL to call, for instance https://example.com/introspect
         */
        endpoint?: string;
        /**
         * List of allowed signing algorithms, defaults to `['RS256']`
         */
        allowed_algs?: string[];
        /**
         * If jwks response should be cached, defaults to true
         */
        jwks_cache_enabled?: boolean;
        /**
         * How many jwk's to cache, defaults to 10
         */
        jwks_cache_maxentries?: number;
        /**
         * How long a jwk is cached, in ms, defaults to 5 min
         */
        jwks_cache_time?: number;
        /**
         * If ratelimit of calls to jwks endpoint, defaults to true
         */
        jwks_ratelimit_enabled?: boolean;
        /**
         * Limits of jwks calls, defaults to 60 rpm
         */
        jwks_ratelimit_per_minute?: number;
        /**
         * Client ID used to introspect
         */
        client_id?: string;
        /**
         * Client secret used to introspect
         */
        client_secret?: string;
        /**
         * Access token used to introspect, instead of client credentials
         */
        access_token?: string;
        /**
         * Defaults to `token-introspection`
         */
        user_agent?: string;
        /**
         * Defaults to [node-fetch](https://github.com/bitinn/node-fetch), but you can inject [zipkin-instrumentation-fetch](https://www.npmjs.com/package/zipkin-instrumentation-fetch).
         */
        fetch?: Fetch;
    }

    interface IntrospectResult extends JwtPayload {
        active: true | "true";
    }

    /** @async */
    type IntrospectionFunction = (token: string, tokenTypeHint?: string) => Promise<IntrospectResult>;
}
