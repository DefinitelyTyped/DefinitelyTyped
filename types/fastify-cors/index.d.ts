// Type definitions for fastify-cors 0.1
// Project: https://github.com/fastify/fastify-cors#readme
// Definitions by: Jannik Keye <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type originCallback = (err: Error, allow: boolean) => void;

/**
 * fastify-cors enables the use of CORS in a Fastify application.
 */
declare function fastifyCors(): void;

declare namespace fastifyCors {
  /**
   * Options for configuring the fastify-cors plugin.
   */
  interface FastifyCorsOptions {
    /**
     * Configures the Access-Control-Allow-Origin CORS header.
     */
    origin?: string | boolean | RegExp | string[] | RegExp[] | originCallback;
    /**
     * Configures the Access-Control-Allow-Credentials CORS header.
     * Set to true to pass the header, otherwise it is omitted.
     */
    credentials?: boolean;
    /**
     * Configures the Access-Control-Expose-Headers CORS header.
     * Expects a comma-delimited string (ex: 'Content-Range,X-Content-Range')
     * or an array (ex: ['Content-Range', 'X-Content-Range']).
     * If not specified, no custom headers are exposed.
     */
    exposedHeaders?: string | string[];
    /**
     * Configures the Access-Control-Allow-Headers CORS header.
     * Expects a comma-delimited string (ex: 'Content-Type,Authorization')
     * or an array (ex: ['Content-Type', 'Authorization']). If not
     * specified, defaults to reflecting the headers specified in the
     * request's Access-Control-Request-Headers header.
     */
    allowedHeaders?: string | string[];
    /**
     * Configures the Access-Control-Allow-Methods CORS header.
     * Expects a comma-delimited string (ex: 'GET,PUT,POST') or an array (ex: ['GET', 'PUT', 'POST']).
     */
    methods?: string | string[];
    /**
     * Configures the Access-Control-Max-Age CORS header.
     * Set to an integer to pass the header, otherwise it is omitted.
     */
    maxAge?: number;
    /**
     * Pass the CORS preflight response to the route handler (default: false).
     */
    preflightContinue?: boolean;
    /**
     * Provides a status code to use for successful OPTIONS requests,
     * since some legacy browsers (IE11, various SmartTVs) choke on 204.
     */
    optionsSuccessStatus?: number;
    /**
     * Pass the CORS preflight response to the route handler (default: false).
     */
    preflight?: boolean;
  }
}

export = fastifyCors;
