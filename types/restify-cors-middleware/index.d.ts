// Type definitions for restify-cors-middleware 1.0.0
// Project: https://github.com/TabDigital/restify-cors-middleware
// Definitions by: Daniel Thunell <https://github.com/dthunell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3.4

/// <reference types="node" />

import { RequestHandler } from 'restify';

declare namespace corsMiddleware {
  interface Options {
    origins: string[];
    allowHeaders: string[];
    exposeHeaders: string[];
    credentials?: boolean;
    preflightMaxAge?: number;
    preflightStrategy?: Object | Function;
  }

  interface CorsMiddleware {
    actual: RequestHandler;
    preflight: RequestHandler;
  }
}

/**
 * @public
 * @param    {Object} options an options object
 * @param    {Array} [options.origins] an array of whitelisted origins, can be
 * both strings and regular expressions
 * @param    {Boolean} [options.credentials] if true, uses creds
 * @param    {Array} [options.allowHeaders] user defined headers to allow
 * @param    {Array} [options.exposeHeaders] user defined headers to expose
 * @param    {Number} [options.preflightMaxAge] ms to cache preflight requests
 * @param    {Object | Function} [options.preflightStrategy]
 * customize preflight request handling
 * @returns  {Object} returns an object with actual and preflight handlers
 */
declare function corsMiddleware(options: corsMiddleware.Options): corsMiddleware.CorsMiddleware;

export = corsMiddleware;
