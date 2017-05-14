// Project: https://github.com/mcavage/node-restify
// Definitions by: Kostya Tretyak <https://github.com/KostyaTretyak>

declare module 'restify-plugins'
{
  import {RequestHandler} from 'restify';

  //*************** This module includes the follow pre plugins, which are intended to be used prior to the routing of a request:
  
  module pre
  {
    /**
     * cleans up duplicate or trailing / on the URL
     */
    function sanitizePath(options?: any): RequestHandler;

    /**
     * used to support edge cases for HEAD requests when using curl
     */
    function pause(): RequestHandler;

    /**
     * {RegExp} regexp to capture curl user-agents
     */
    function userAgentConnection(options?: any): RequestHandler;
  }

  //*************** This module includes the following header parser plugins:

  /**
   * Accept header
   */
  function acceptParser(accepts: string[]): RequestHandler;

  /**
   * Authorization header
   */
  function authorizationParser(options?:any): RequestHandler;

  /**
   * Conditional headers (If-*)
   */
  function conditionalRequest(): RequestHandler[];

  /**
   * handles disappeared CORS headers
   */
  function fullResponse(): RequestHandler;

  //************ This module includes the following data parsing plugins:

  /**
   * an audit logger for recording all handled requests
   */
  function auditLogger(options:{log:any, body?:string}): Function;

  /**
   * parses POST bodies to req.body. Automatically uses one of the following parsers based on content type
   *   options.mapParams - default false. copies parsed post body values onto req.params
   *   options.overrideParams - default false. only applies when if mapParams true. when true,
   *   will stomp on req.params value when existing value is found.
   */
  function bodyParser(options?: {mapParams?:boolean, overrideParams?:boolean}): RequestHandler[];

  /**
   * parses url encoded form bodies
   */
  function urlEncodedBodyParser(options?: {mapParams?:boolean, overrideParams?:boolean}): RequestHandler[];

  /**
   * parses JSON POST bodies
   */
  function jsonBodyParser(options?: {mapParams?:boolean, overrideParams?:boolean}): RequestHandler[];


  /**
   * parses multipart form bodies
   */
  function jsonBodyParser(options?: {mapParams?:boolean, overrideParams?:boolean}): RequestHandler[];

  /**
   * parses JSONP callback
   */
  function jsonp(): RequestHandler;

  /**
   * parses URL query paramters
   *   options.mapParams - default false. copies parsed post body values onto req.params
   *   options.overrideParams - default false. only applies when if mapParams true. when true,
   *   will stomp on req.params value when existing value is found.
   */
  function queryParser(options?: {mapParams?:boolean, overrideParams?:boolean}): RequestHandler;

  /**
   * adds timers for each handler in your request chain
   *   options.properties {Object} properties to pass to bunyan's log.child() method
   */
  function requestLogger(options?: {properties?:any}): RequestHandler;

  //******************** The module includes the following response plugins:

  /**
   * expires requests based on current time + delta
   *   delta - age in seconds
   */
  function dateParser(delta?: number): RequestHandler;

  /**
   * gzips the response if client accepts it
   *   options {Object} options to pass to gzlib
   */
  function gzipResponse(options?: any): RequestHandler;

  /**
   * used to serve static files
   */
  function serveStatic(options?:any): RequestHandler;

  interface ThrottleOptions
  {
    burst?: number;
    rate?: number;
    ip?: boolean;
    username?: boolean;
    xff?: boolean;
    // tokensTable?: Object;
    // maxKeys?: number;
    overrides?: any; // Object
  }

  /**
   *  throttles responses
   */
  function throttle(options?: ThrottleOptions): RequestHandler;

  /**
   * A request expiry will use headers to tell if the incoming request has expired or not.
   *   options.absoluteHeader {String} header name of the absolute time for request expiration
   *   options.startHeader {String} header name for the start time of the request
   *   options.timeoutHeader {String} The header name for the time in milliseconds that should
   *   ellapse before the request is considered expired.
   * There are two options for this plugin:
   *   1. Absolute Time
   *     * Time in Milliseconds since the Epoch when this request should be considered expired
   *   2. Timeout
   *     * The request start time is supplied
   *     * A timeout, in milliseconds, is given
   *     * The timeout is added to the request start time to arrive at the absolute time
   *       in which the request is considered expires
   */
  function requestExpiry(options?: {absoluteHeader?:string, startHeader?:string, timeoutHeader?:string})
}
