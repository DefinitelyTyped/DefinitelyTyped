// Type definitions for restify-cors-middleware 1.0
// Project: https://github.com/TabDigital/restify-cors-middleware
// Definitions by: Daniel Thunell <https://github.com/dthunell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { RequestHandler } from 'restify';

declare namespace corsMiddleware {
  interface Options {
    /**
     * an array of whitelisted origins
     * can be both strings and regular expressions
     */
    origins: Array<string | RegExp>;
    /** user defined headers to allow */
    allowHeaders: string[];
    /** user defined headers to expose */
    exposeHeaders: string[];
    /** if true, uses creds */
    credentials?: boolean;
    /** ms to cache preflight requests */
    preflightMaxAge?: number;
    /** customize preflight request handling */
    preflightStrategy?: any;
  }

  interface CorsMiddleware {
    actual: RequestHandler;
    preflight: RequestHandler;
  }
}

declare function corsMiddleware(options: corsMiddleware.Options): corsMiddleware.CorsMiddleware;
export = corsMiddleware;
