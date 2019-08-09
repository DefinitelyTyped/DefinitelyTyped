// Type definitions for splunk-sdk 1.9
// Project: http://dev.splunk.com
// Definitions by: Evan Welsh <https://github.com/evanatibm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'splunk-sdk' {
  type Provider<P> = () => P;
  type VoidProvider = Provider<void>;
  type DoneCallbackFn<C> = (done: C) => void;
  type TaskCallbackFn<T> = DoneCallbackFn<
    (err: Error | null, ...taskResults: T[]) => void
  >;

  type Results = { [key: string]: any };

  // TODO Splunk seems to intermix network and JS errors (figure out how to separate them)
  class SplunkError extends Error {
    status?: number;
    data?: any;
  }
  type Error = SplunkError;

  // TODO Is user correct?
  type Namespace = Partial<{
    user: string;
    owner: string;
    app: string;
    sharing: string;
  }>;

  type ClassDef<U> = { init: (...params: any[]) => void; [key: string]: any };

  // TODO Basic definition of Splunk's class polyfill
  class Class {
    static extend<S, Class, T extends ClassDef<S>>(
      def: T,
    ): Class & { new (...params: any[]): Class & T };

    _super(...params: any[]): void;
  }

  // TODO Should this be an enum?
  export module Paths {
    const apps: string;
    const capabilities: string;
    const configurations: string;
    const dataModels: string;
    const deploymentClient: string;
    const deploymentServers: string;
    const deploymentServerClasses: string;
    const deploymentTenants: string;
    const eventTypes: string;
    const firedAlerts: string;
    const indexes: string;
    const info: string;
    const jobs: string;
    const licenseGroups: string;
    const licenseMessages: string;
    const licensePools: string;
    const licenseSlaves: string;
    const licenseStacks: string;
    const licenses: string;
    const loggers: string;
    const login: string;
    const messages: string;
    const passwords: string;
    const parser: string;
    const pivot: string;
    const properties: string;
    const roles: string;
    const savedSearches: string;
    const settings: string;
    const storagePasswords: string;
    const users: string;
    const typeahead: string;
    const views: string;
    const currentUser: string;
    const submitEvent: string;
  }

  /**
   * Provides utilities for asynchronous control flow and collection handling.
   *
   * @module Async
   */
  module Async {
    /**
     * Runs an asynchronous `while` loop.
     *
     * @example
     *
     *      let i = 0;
     *      Async.whilst(
     *          () => { return i++ < 3; },
     *          (done) => {
     *              Async.sleep(0, () => done());
     *          },
     *          (err) => {
     *              console.log(i) // == 3;
     *          }
     *      );
     *
     * @param {Function} condition A function that returns a _boolean_ indicating whether the condition has been met.
     * @param {Function} body A function that runs the body of the loop: `(done)`.
     * @param {Function} callback The function to call when the loop is complete: `(err)`.
     *
     */
    function whilst(
      condition: () => boolean,
      body: (done: (res?: any) => void) => void,
      callback: (err: Error | null) => void,
    ): void;

    /**
     * Runs multiple functions (tasks) in parallel.
     * Each task takes the callback function as a parameter.
     * When all tasks have been completed or if an error occurs, the callback
     * function is called with the combined results of all tasks.
     *
     * **Note**: Tasks might not be run in the same order as they appear in the any[],
     * but the results will be returned in that order.
     *
     * @example
     *
     *      Async.parallel([
     *          function(done) {
     *              done(null, 1);
     *          },
     *          function(done) {
     *              done(null, 2, 3);
     *          }],
     *          function(err, one, two) {
     *              console.log(err); // == null
     *              console.log(one); // == 1
     *              console.log(two); // == [1,2]
     *          }
     *      );
     *
     * @param {Function} tasks An any[] of functions: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err, ...)`.
     *
     */
    function parallel<T>(
      tasks: TaskCallbackFn<T>[],
      callback: (err: Error | null, ...results: Array<T | T[]>) => void,
    ): void;

    function parallel<T>(...fns: Function[]): void;

    /**
     * Runs multiple functions (tasks) in series.
     * Each task takes the callback function as a parameter.
     * When all tasks have been completed or if an error occurs, the callback
     * function is called with the combined results of all tasks in the order
     * they were run.
     *
     * @example
     *
     *      var keeper = 0;
     *      Async.series([
     *          function(done) {
     *              Async.sleep(10, function() {
     *                  console.log(keeper++); // == 0
     *                  done(null, 1);
     *              });
     *          },
     *          function(done) {
     *              console.log(keeper++); // == 1
     *              done(null, 2, 3);
     *          }],
     *          function(err, one, two) {
     *              console.log(err); // == null
     *              console.log(one); // == 1
     *              console.log(two); // == [1,2]
     *          }
     *      );
     *
     * @param {Function} tasks An any[] of functions: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err, ...)`.
     *
     */
    function series<T>(
      tasks: TaskCallbackFn<T>[],
      callback: (err: Error | null, ...results: ReadonlyArray<T>) => void,
    ): void;

    /**
     * Runs an asynchronous function (mapping it) over each element in an any[], in parallel.
     * When all tasks have been completed or if an error occurs, a callback
     * function is called with the resulting any[].
     *
     * @example
     *
     *      Async.parallelMap(
     *          [1, 2, 3],
     *          function(val, idx, done) {
     *              if (val === 2) {
     *                  Async.sleep(100, function() { done(null, val+1); });
     *              }
     *              else {
     *                  done(null, val + 1);
     *              }
     *          },
     *          function(err, vals) {
     *              console.log(vals); // == [2,3,4]
     *          }
     *      );
     *
     * @param {any[]} vals An any[] of values.
     * @param {Function} fn A function (possibly asynchronous) to apply to each element: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err, mappedVals)`.
     *
     */
    function parallelMap<P, N>(
      vals: ReadonlyArray<N>,
      fn: (done: (prev: P, next: N) => void) => void,
      callback: (err: Error | null, vals: ReadonlyArray<P>) => void,
    ): void;

    /**
     * Runs an asynchronous function (mapping it) over each element in an any[], in series.
     * When all tasks have been completed or if an error occurs, a callback
     * function is called with the resulting any[].
     *
     * @example
     *
     *      var keeper = 1;
     *      Async.seriesMap(
     *          [1, 2, 3],
     *          function(val, idx, done) {
     *              console.log(keeper++); // == 1, then 2, then 3
     *              done(null, val + 1);
     *          },
     *          function(err, vals) {
     *              console.log(vals); // == [2,3,4];
     *          }
     *      );
     *
     * @param {N[]} vals An N[] of values.
     * @param {Function} fn A function (possibly asynchronous) to apply to each element: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err, mappedVals)`.
     *
     */
    function seriesMap<P, N>(
      vals: ReadonlyArray<N>,
      fn: (done: (prev: P, next: N) => void) => void,
      callback: (err: Error | null, vals: ReadonlyArray<P>) => void,
    ): void;

    /**
     * Applies an asynchronous function over each element in an N[], in parallel.
     * A callback function is called when all tasks have been completed. If an
     * error occurs, the callback function is called with an error parameter.
     *
     * @example
     *
     *      var total = 0;
     *      Async.parallelEach(
     *          [1, 2, 3],
     *          function(val, idx, done) {
     *              var go = function() {
     *                  total += val;
     *                  done();
     *              };
     *
     *              if (idx === 1) {
     *                  Async.sleep(100, go);
     *              }
     *              else {
     *                  go();
     *              }
     *          },
     *          function(err) {
     *              console.log(total); // == 6
     *          }
     *      );
     *
     * @param {N[]} vals An N[] of values.
     * @param {Function} fn A function (possibly asynchronous) to apply to each element: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err)`.
     *
     */
    function parallelEach<N>(
      vals: N[],
      fn: (val: N, idx: number, done: VoidProvider) => void,
      callback: (err: Error | null) => void,
    ): void;

    /**
     * Applies an asynchronous function over each element in an any[], in series.
     * A callback function is called when all tasks have been completed. If an
     * error occurs, the callback function is called with an error parameter.
     *
     * @example
     *
     *      var results = [1, 3, 6];
     *      var total = 0;
     *      Async.seriesEach(
     *          [1, 2, 3],
     *          function(val, idx, done) {
     *              total += val;
     *              console.log(total === results[idx]); //== true
     *              done();
     *          },
     *          function(err) {
     *              console.log(total); //== 6
     *          }
     *      );
     *
     * @param {any[]} vals An any[] of values.
     * @param {Function} fn A function (possibly asynchronous)to apply to each element: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err)`.
     *
     */
    function seriesEach<N>(
      vals: N[],
      fn: (val: N, idx: number, don: VoidProvider) => void,
      callback: (err: Error | null) => void,
    ): void;

    /**
     * Chains asynchronous tasks together by running a function (task) and
     * passing the results as arguments to the next task. When all tasks have
     * been completed or if an error occurs, a callback function is called with
     * the results of the final task.
     *
     * Each task takes one or more parameters, depending on the previous task in the chain.
     * The last parameter is always the function to run when the task is complete.
     *
     * `err` arguments are not passed to individual tasks, but are are propagated
     * to the final callback function.
     *
     * @example
     *
     *     Async.chain(
     *         [
     *               function(callback) {
     *                  callback(null, 1, 2);
     *               },
     *               function(val1, val2, callback) {
     *                   callback(null, val1 + 1);
     *               },
     *               function(val1, callback) {
     *                  callback(null, val1 + 1, 5);
     *              },
     *          ]
     *         function(err, val1, val2) {
     *             console.log(val1); //== 3
     *             console.log(val2); //== 5
     *         }
     *     );
     *
     * @param {Function} tasks An any[] of functions: `(done)`.
     * @param {Function} callback The function to call when all tasks are done or if an error occurred: `(err, ...)`.
     *
     */
    function chain(
      tasks: ((...params: any[]) => void)[],
      callback: (err: Error | null, ...results: any[]) => void,
    ): void;

    function chain(...fns: Function[]): void;

    /**
     * Runs a function after a delay (a specified timeout period).
     * The main purpose of this function is to make `setTimeout` adhere to
     * Node.js-style function signatures.
     *
     * @example
     *
     *     Async.sleep(1000, function() { console.log("TIMEOUT");});
     *
     * @param {Number} timeout The timeout period, in milliseconds.
     * @param {Function} callback The function to call when the timeout occurs.
     *
     */
    function sleep(timeout: number, callback: () => void): void;

    /**
     * Runs a callback function with additional parameters, which are appended to
     * the parameter list.
     *
     * @example
     *
     *      var callback = function(a, b) {
     *          console.log(a); //== 1
     *          console.log(b); //== 2
     *      };
     *
     *      var augmented = Async.augment(callback, 2);
     *      augmented(1);
     *
     * @param {Function} callback The callback function to augment.
     * @param {any...} rest The number of arguments to add.
     *
     */
    function augment(callback: (...params: any[]) => any, ...args: any[]): void;
  }

  /**
   * @class Context
   */
  export class Context {
    /**
         * Constructor for `Context`.
         *
         
         * @param {Http} http An instance of a `Http` class.
         * @param {Object} params A dictionary of optional parameters:
         *    - `scheme` (_string_): The scheme ("http" or "https") for accessing Splunk.
         *    - `host` (_string_): The host name (the default is "localhost").
         *    - `port` (_integer_): The port number (the default is 8089).
         *    - `username` (_string_): The Splunk account username, which is used to authenticate the Splunk instance.
         *    - `password` (_string_): The password, which is used to authenticate the Splunk instance.
         *    - `owner` (_string_): The owner (username) component of the namespace.
         *    - `app` (_string_): The app component of the namespace.
         *    - `sessionKey` (_string_): The current session token.
         *    - `autologin` (_boolean_): `true` to automatically try to log in again if the session terminates, `false` if not (`true` by default).
         *    - 'timeout' (_integer): The connection timeout in milliseconds. ('0' by default).
         *    - `version` (_string_): The version string for Splunk, for example "4.3.2" (the default is "5.0").
         * @return {Context} A new `Context` instance.
         *
         */
    constructor(http: Http, params: ContextParams);

    login(callback: (err: Error | null, success: boolean) => void): void;

    /**
     * This internal function aids with the autologin feature.
     * It takes two parameters: `task`, which is a function describing an
     * HTTP request, and `callback`, to be invoked when all is said
     * and done.
     *
     * @param  {Function} task A function taking a single argument: `(callback)`.
     * @param  {Function} callback The function to call when the request is complete: `(err, response)`.
     */
    _requestWrapper(
      task: (...params: any[]) => any,
      callback: (...params: any[]) => any,
    ): void;

    /**
     * Converts a partial path to a fully-qualified path to a REST endpoint,
     * and if necessary includes the namespace owner and app.
     *
     * @param {String} path The partial path.
     * @param {String} namespace The namespace, in the format "_owner_/_app_".
     * @return {String} The fully-qualified path.
     *
     */
    fullpath(path: string, namespace: string): string;

    /**
     * Performs a GET request.
     *
     * @param {String} path The REST endpoint path of the GET request.
     * @param {Object} params The entity-specific parameters for this request.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     */
    get(
      path: string,
      params: Params,
      callback: (err: Error | null, ...params: any[]) => void,
    ): void;

    /**
     * Performs a DELETE request.
     *
     * @param {String} path The REST endpoint path of the DELETE request.
     * @param {Object} params The entity-specific parameters for this request.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     */
    del(
      path: string,
      params: Params,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Performs a POST request.
     *
     * @param {String} path The REST endpoint path of the POST request.
     * @param {Object} params The entity-specific parameters for this request.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     */
    post(
      path: string,
      params: Params,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Issues an arbitrary HTTP request to the REST endpoint path segment.
     *
     * @param {String} path The REST endpoint path segment (with any query parameters already appended and encoded).
     * @param {String} method The HTTP method (can be `GET`, `POST`, or `DELETE`).
     * @param {Object} query The entity-specific parameters for this request.
     * @param {Object} post A dictionary of POST argument that will get form encoded.
     * @param {Object} body The body of the request, mutually exclusive with `post`.
     * @param {Object} headers Headers for this request.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     */
    request(
      path: string,
      method: 'GET' | 'POST' | 'DELETE',
      query: any,
      post: any,
      body: any,
      headers: any,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Compares the Splunk server's version to the specified version string.
     * Returns -1 if (this.version <  otherVersion),
     *          0 if (this.version == otherVersion),
     *          1 if (this.version >  otherVersion).
     *
     * @param {String} otherVersion The other version string, for example "5.0".
     *
     */
    versionCompare(otherVersion: string): void;
  }

  /**
   * A class for Node.js implementing the HTTP abstraction.
   *
   * @class NodeHttp
   */
  export class NodeHttp extends Http {}

  /**
   * A base class for HTTP abstraction that provides the basic functionality
   * for performing GET, POST, DELETE, and REQUEST operations, and provides
   * utilities to construct uniform responses.
   *
   * Base classes should only override `makeRequest` and `parseJSON`.
   *
   * @class Http
   */
  export class Http {
    /**
         * Constructor for `Http`.
         *
         
         * @return {Http} A new `Http` instance.
         *
         *
         */
    constructor();

    /**
     * Returns all cookies formatted as a string to be put into the Cookie Header.
     */
    _getCookieString(): string;

    /**
     * Takes a cookie header and returns an object of form { key: $cookieKey value: $cookieValue }
     */
    _parseCookieHeader(header: any): any;

    /**
     * Performs a GET request.
     *
     * @param {String} url The URL of the GET request.
     * @param {Object} headers An object of headers for this request.
     * @param {Object} params Parameters for this request.
     * @param {Number} timeout A timeout period.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     */
    get(
      url: string,
      headers: any,
      params: Params,
      timeout: number,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Performs a POST request.
     *
     * @param {String} url The URL of the POST request.
     * @param {Object} headers  An object of headers for this request.
     * @param {Object} params Parameters for this request.
     * @param {Number} timeout A timeout period.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     *
     */
    post(
      url: string,
      headers: any,
      params: Params,
      timeout: number,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Performs a DELETE request.
     *
     * @param {String} url The URL of the DELETE request.
     * @param {Object} headers An object of headers for this request.
     * @param {Object} params Query parameters for this request.
     * @param {Number} timeout A timeout period.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     *
     */
    del(
      url: string,
      headers: any,
      params: Params,
      timeout: number,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Performs a request.
     *
     * This function sets up how to handle a response from a request, but
     * delegates calling the request to the `makeRequest` subclass.
     *
     * @param {String} url The encoded URL of the request.
     * @param {Object} message An object with values for method, headers, timeout, and encoded body.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     *
     * @see makeRequest
     */
    request(
      url: string,
      message: any,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Encapsulates the client-specific logic for performing a request. This
     * function is meant to be overriden by subclasses.
     *
     * @param {String} url The encoded URL of the request.
     * @param {Object} message An object with values for method, headers, timeout, and encoded body.
     * @param {Function} callback The function to call when the request is complete: `(err, response)`.
     *
     *
     */
    makeRequest(
      url: string,
      message: any,
      callback: (err: Error | null, response: any) => void,
    ): void;

    /**
     * Encapsulates the client-specific logic for parsing the JSON response.
     *
     * @param {String} json The JSON response to parse.
     * @return {Object} The parsed JSON
     */
    parseJson(json: string): any;

    /**
     * Generates a unified response with the given parameters.
     *
     * @param {Object} error An error object, if one exists for the request.
     * @param {Object} response The response object.
     * @param {Object} data The response data.
     * @return {Object} A unified response object.
     *
     *
     */
    _buildResponse(error: any, response: any, data: any): any;

    /**
         
         * Encodes a dictionary of values into a URL-encoded format.
         *
         * @example
         *
         *      // should be a=1&b=2&b=3&b=4
         *      encode({a: 1, b: [2,3,4]})
         *
         * @param {Object} params The parameters to URL encode.
         * @return {String} The URL-encoded string.
         *
         *
         */
    static encode(params: any): string;
  }

  type ArgumentConfig = {
    name: string;
    description?: string;
    validation?: string;
    dataType?: any;
    requiredOnEdit?: boolean;
    requiredOnCreate?: boolean;
  };

  /**
   * Class representing an argument to a modular input kind.
   *
   * `Argument` is meant to be used with `Scheme` to generate an XML
   * definition of the modular input kind that Splunk understands.
   *
   * `name` is the only required parameter for the constructor.
   *
   * @example
   *
   *      // Example with minimal parameters
   *      var myArg1 = new Argument({name: "arg1"});
   *
   *      // Example with all parameters
   *      var myArg2 = new Argument({
   *          name: "arg1",
   *          description: "This an argument with lots of parameters",
   *          validation: "is_pos_int('some_name')",
   *          dataType: Argument.dataTypeNumber,
   *          requiredOnEdit: true,
   *          requiredOnCreate: true
   *      });
   *
   * @param {Object} argumentConfig An object containing at least the name property to configure this Argument
   * @class Argument
   */
  export class Argument {
    constructor(argumentConfig: ArgumentConfig);
  }

  type EventConfig = {
    data: string;
    stanza: string;
    time: number;
    host?: string;
    index?: string;
    source?: string;
    sourcetype?: string;
    done?: boolean;
    unbroken?: boolean;
  };

  /**
   * `Event` represents an event or fragment of an event to be written by this
   * modular input to Splunk.
   *
   * @example
   *
   *      // Minimal configuration
   *      var myEvent =  new Event({
   *          data: "This is a test of my new exports.Event.",
   *          stanza: "myStanzaName",
   *          time: parseFloat("1372187084.000")
   *      });
   *
   *      // Full configuration
   *      var myBetterEvent =  new Event({
   *          data: "This is a test of my better exports.Event.",
   *          stanza: "myStanzaName",
   *          time: parseFloat("1372187084.000"),
   *          host: "localhost",
   *          index: "main",
   *          source: "Splunk",
   *          sourcetype: "misc",
   *          done: true,
   *          unbroken: true
   *      });
   *
   * @param {Object} eventConfig An object containing the configuration for an `Event`.
   * @class Event
   */
  export class Event {
    constructor(eventConfig: EventConfig);

    /**
     * Formats a time for Splunk, should be something like `1372187084.000`.
     *
     * @example
     *
     *   // When the time parameter is a string.
     *   var stringTime = "1372187084";
     *   var stringTimeFormatted = exports.Event.formatTime(stringTime);
     *
     *   // When the time parameter is a number, no decimals.
     *   var numericalTime = 1372187084;
     *   var numericalTimeFormatted = exports.Event.formatTime(numericalTime);
     *
     *   // When the time parameter is a number, with decimals.
     *   var decimalTime = 1372187084.424;
     *   var decimalTimeFormatted = exports.Event.formatTime(decimalTime);
     *
     *   // When the time parameter is a Date object.
     *   var dateObjectTime = Date.now();
     *   var dateObjectTimeFormatted = exports.Event.formatTime(dateObjectTime);
     *
     * @param {any} time The unformatted time in seconds or milliseconds, typically a String, Number, or `Date` Object.
     * @return {Number} The formatted time in seconds.
     *
     */
    static formatTime(time: any): number;

    /**
     * Writes an XML representation of this, and Event object to the provided `Stream`,
     * starting at the provided offset.
     *
     * If this.data is undefined, or if there is an error writing to the provided `Stream`,
     * an error will be thrown.
     *
     * @param {Object} stream A `Stream` object to write this `Event` to.
     *
     */
    _writeTo(stream: any): void;
  }

  /**
   * `EventWriter` writes events and error messages to Splunk from a modular input.
   *
   * Its two important methods are `writeEvent`, which takes an `Event` object,
   * and `log`, which takes a severity and an error message.
   *
   * @param {Object} output A stream to output data, defaults to `process.stdout`
   * @param {Object} error A stream to output errors, defaults to `process.stderr`
   * @class EventWriter
   */
  export class EventWriter {
    constructor(output: any, error: Error | null);

    /**
     * Writes an `Event` object to the output stream specified
     * in the constructor.
     *
     * @param {Object} event An `Event` Object.
     *
     */
    writeEvent(event: any): void;

    /**
     * Writes a string representation of an `Elementtree` Object to the
     * output stream specified in the constructor.
     *
     * This function will throw an exception if there is an error
     * while making a string from `xmlDocument`, or
     * while writing the string created from `xmlDocument`.
     *
     * @param {Object} xmlDocument An `Elementtree` Object representing an XML document.
     *
     */
    writeXMLDocument(xmlDocument: any): void;

    /**
     * Writes the closing </stream> tag to make the XML well formed.
     *
     *
     */
    close(): void;
  }

  /**
   * `InputDefinition` encodes the XML defining inputs that Splunk passes to
   * a modular input script.
   *
   * @example
   *
   *      var i =  new InputDefinition();
   *
   * @class InputDefinition
   */
  export class InputDefinition {
    /**
     * Parse a string containing XML into an `InputDefinition`.
     *
     * This function will throw an exception if `str`
     * contains unexpected XML.
     *
     * The XML typically will look like this:
     *
     * `<input>`
     *   `<server_host>tiny</server_host>`
     *   `<server_uri>https://127.0.0.1:8089</server_uri>`
     *   `<checkpoint_dir>/opt/splunk/var/lib/splunk/modinputs</checkpoint_dir>`
     *   `<session_key>123102983109283019283</session_key>`
     *   `<configuration>`
     *     `<stanza name="foobar://aaa">`
     *       `<param name="param1">value1</param>`
     *       `<param name="param2">value2</param>`
     *       `<param name="disabled">0</param>`
     *       `<param name="index">default</param>`
     *     `</stanza>`
     *     `<stanza name="foobar://bbb">`
     *       `<param name="param1">value11</param>`
     *       `<param name="param2">value22</param>`
     *       `<param name="disabled">0</param>`
     *       `<param name="index">default</param>`
     *       `<param_list name="multiValue">`
     *         `<value>value1</value>`
     *         `<value>value2</value>`
     *       `</param_list>`
     *       `<param_list name="multiValue2">`
     *         `<value>value3</value>`
     *         `<value>value4</value>`
     *       `</param_list>`
     *     `</stanza>`
     *   `</configuration>`
     * `</input>`
     *
     * @param {String} str A string containing XML to parse.
     * @return {Object} An InputDefiniion object.
     *
     */
    static parse(str: string): InputDefinition;
  }

  /**
   * `Logger` logs messages to Splunk's internal logs.
   *
   */
  export module Logger {
    function setLevel(level: number | string): void;

    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param {String} name The name of this modular input.
     * @param {String} message The message to log.
     * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
     *
     */
    export function debug(name: string, message: string, stream: any): void;

    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param {String} name The name of this modular input.
     * @param {String} message The message to log.
     * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
     *
     */
    export function info(name: string, message: string, stream: any): void;

    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param {String} name The name of this modular input.
     * @param {String} message The message to log.
     * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
     *
     */
    export function warn(name: string, message: string, stream: any): void;

    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param {String} name The name of this modular input.
     * @param {String} message The message to log.
     * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
     *
     */
    export function error(name: string, message: string, stream: any): void;

    /**
     * Logs messages about the state of this modular input to Splunk.
     * These messages will show up in Splunk's internal logs.
     *
     * @param {String} name The name of this modular input.
     * @param {String} message The message to log.
     * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
     *
     */
    export function fatal(name: string, message: string, stream: any): void;
  }

  /**
   *
   */
  export namespace ModularInputs {
    /**
     * Class representing an argument to a modular input kind.
     *
     * `Argument` is meant to be used with `Scheme` to generate an XML
     * definition of the modular input kind that Splunk understands.
     *
     * `name` is the only required parameter for the constructor.
     *
     * @example
     *
     *      // Example with minimal parameters
     *      var myArg1 = new Argument({name: "arg1"});
     *
     *      // Example with all parameters
     *      var myArg2 = new Argument({
     *          name: "arg1",
     *          description: "This an argument with lots of parameters",
     *          validation: "is_pos_int('some_name')",
     *          dataType: Argument.dataTypeNumber,
     *          requiredOnEdit: true,
     *          requiredOnCreate: true
     *      });
     *
     * @param {Object} argumentConfig An object containing at least the name property to configure this Argument
     * @class Argument
     *
     */
    export class Argument {
      static dataTypeBoolean: 'BOOLEAN';
      static dataTypeNumber: 'NUMBER';
      static dataTypeString: 'STRING';

      constructor(argumentConfig: any);

      /**
       * Adds an `Argument` object the passed in elementtree object.
       *
       * Adds an <arg> subelement to the parent element, typically <args>,
       * and sets up its subelements with their respective text.
       *
       * @param {Object} parent An elementtree element object to be the parent of a new <arg> subelement
       * @return {Object} An elementtree element object representing this exports.Argument.
       *
       */
      addToDocument(parent: any): any;
    }

    /**
     * `Event` represents an event or fragment of an event to be written by this
     * modular input to Splunk.
     *
     * @example
     *
     *      // Minimal configuration
     *      var myEvent =  new Event({
     *          data: "This is a test of my new exports.Event.",
     *          stanza: "myStanzaName",
     *          time: parseFloat("1372187084.000")
     *      });
     *
     *      // Full configuration
     *      var myBetterEvent =  new Event({
     *          data: "This is a test of my better exports.Event.",
     *          stanza: "myStanzaName",
     *          time: parseFloat("1372187084.000"),
     *          host: "localhost",
     *          index: "main",
     *          source: "Splunk",
     *          sourcetype: "misc",
     *          done: true,
     *          unbroken: true
     *      });
     *
     * @param {Object} eventConfig An object containing the configuration for an `Event`.
     * @class Event
     */
    export class Event {
      constructor(eventConfig: any);

      /**
       * Formats a time for Splunk, should be something like `1372187084.000`.
       *
       * @example
       *
       *   // When the time parameter is a string.
       *   var stringTime = "1372187084";
       *   var stringTimeFormatted = exports.Event.formatTime(stringTime);
       *
       *   // When the time parameter is a number, no decimals.
       *   var numericalTime = 1372187084;
       *   var numericalTimeFormatted = exports.Event.formatTime(numericalTime);
       *
       *   // When the time parameter is a number, with decimals.
       *   var decimalTime = 1372187084.424;
       *   var decimalTimeFormatted = exports.Event.formatTime(decimalTime);
       *
       *   // When the time parameter is a Date object.
       *   var dateObjectTime = Date.now();
       *   var dateObjectTimeFormatted = exports.Event.formatTime(dateObjectTime);
       *
       * @param {any} time The unformatted time in seconds or milliseconds, typically a String, Number, or `Date` Object.
       * @return {Number} The formatted time in seconds.
       *
       */
      static formatTime(time: any): number;

      /**
       * Writes an XML representation of this, and Event object to the provided `Stream`,
       * starting at the provided offset.
       *
       * If this.data is undefined, or if there is an error writing to the provided `Stream`,
       * an error will be thrown.
       *
       * @param {Object} stream A `Stream` object to write this `Event` to.
       *
       */
      _writeTo(stream: any): void;
    }

    /**
     * `EventWriter` writes events and error messages to Splunk from a modular input.
     *
     * Its two important methods are `writeEvent`, which takes an `Event` object,
     * and `log`, which takes a severity and an error message.
     *
     * @param {Object} output A stream to output data, defaults to `process.stdout`
     * @param {Object} error A stream to output errors, defaults to `process.stderr`
     * @class EventWriter
     */
    export class EventWriter {
      constructor(output: any, error: Error | null);
      /**
       * Writes an `Event` object to the output stream specified
       * in the constructor.
       *
       * @param {Object} event An `Event` Object.
       *
       */
      writeEvent(event: any): void;
      /**
       * Writes a string representation of an `Elementtree` Object to the
       * output stream specified in the constructor.
       *
       * This function will throw an exception if there is an error
       * while making a string from `xmlDocument`, or
       * while writing the string created from `xmlDocument`.
       *
       * @param {Object} xmlDocument An `Elementtree` Object representing an XML document.
       *
       */
      writeXMLDocument(xmlDocument: any): void;
      /**
       * Writes the closing </stream> tag to make the XML well formed.
       *
       *
       */
      close(): void;
    }

    /**
     * Executes a modular input script.
     *
     * @param {Object} exports An instance of ModularInput representing a modular input.
     * @param {Object} module The module object, used for determining if it's the main module (`require.main`).
     */
    export function execute(exports: ModularInput, module: any): void;

    /**
     * `InputDefinition` encodes the XML defining inputs that Splunk passes to
     * a modular input script.
     *
     * @example
     *
     *      const i =  new InputDefinition();
     *
     * @class InputDefinition
     */
    export class InputDefinition {
      /**
       * Parse a string containing XML into an `InputDefinition`.
       *
       * This function will throw an exception if `str`
       * contains unexpected XML.
       *
       * The XML typically will look like this:
       *
       * `<input>`
       *   `<server_host>tiny</server_host>`
       *   `<server_uri>https://127.0.0.1:8089</server_uri>`
       *   `<checkpoint_dir>/opt/splunk/var/lib/splunk/modinputs</checkpoint_dir>`
       *   `<session_key>123102983109283019283</session_key>`
       *   `<configuration>`
       *     `<stanza name="foobar://aaa">`
       *       `<param name="param1">value1</param>`
       *       `<param name="param2">value2</param>`
       *       `<param name="disabled">0</param>`
       *       `<param name="index">default</param>`
       *     `</stanza>`
       *     `<stanza name="foobar://bbb">`
       *       `<param name="param1">value11</param>`
       *       `<param name="param2">value22</param>`
       *       `<param name="disabled">0</param>`
       *       `<param name="index">default</param>`
       *       `<param_list name="multiValue">`
       *         `<value>value1</value>`
       *         `<value>value2</value>`
       *       `</param_list>`
       *       `<param_list name="multiValue2">`
       *         `<value>value3</value>`
       *         `<value>value4</value>`
       *       `</param_list>`
       *     `</stanza>`
       *   `</configuration>`
       * `</input>`
       *
       * @param {String} str A string containing XML to parse.
       * @return {Object} An InputDefiniion object.
       *
       */
      static parse(str: string): InputDefinition;
    }

    /**
     * `Logger` logs messages to Splunk's internal logs.
     *
     * @class Logger
     */
    export module Logger {
      /**
       * Logs messages about the state of this modular input to Splunk.
       * These messages will show up in Splunk's internal logs.
       *
       * @param {String} name The name of this modular input.
       * @param {String} message The message to log.
       * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
       *
       */
      export function debug(name: string, message: string, stream?: any): void;

      /**
       * Logs messages about the state of this modular input to Splunk.
       * These messages will show up in Splunk's internal logs.
       *
       * @param {String} name The name of this modular input.
       * @param {String} message The message to log.
       * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
       *
       */
      export function info(name: string, message: string, stream?: any): void;

      /**
       * Logs messages about the state of this modular input to Splunk.
       * These messages will show up in Splunk's internal logs.
       *
       * @param {String} name The name of this modular input.
       * @param {String} message The message to log.
       * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
       *
       */
      export function warn(name: string, message: string, stream?: any): void;

      /**
       * Logs messages about the state of this modular input to Splunk.
       * These messages will show up in Splunk's internal logs.
       *
       * @param {String} name The name of this modular input.
       * @param {String} message The message to log.
       * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
       *
       */
      export function error(name: string, message: string, stream: any): void;

      /**
       * Logs messages about the state of this modular input to Splunk.
       * These messages will show up in Splunk's internal logs.
       *
       * @param {String} name The name of this modular input.
       * @param {String} message The message to log.
       * @param {Object} stream (Optional) A stream to write log messages to, defaults to process.stderr.
       *
       */
      export function fatal(name: string, message: string, stream?: any): void;
    }

    /**
     * A base class for implementing modular inputs.
     *
     * Subclasses should implement `getScheme` and `streamEvents`,
     * and optionally `validateInput` if the modular input uses
     * external validation.
     *
     * The `run` function is used to run modular inputs; it typically
     * should not be overridden.
     * @class ModularInput
     */
    export class ModularInput {
      /**
       * Handles all the specifics of running a modular input.
       *
       * @param {Object} exports An object representing a modular input script.
       * @param {Array} args A list of command line arguments passed to this script.
       * @param {Object} eventWriter An `EventWriter` object for writing event.
       * @param {Object} inputStream A `Stream` object for reading inputs.
       * @param {Function} callback The function to call after running this script: `(err, status)`.
       *
       */
      static runScript(
        exports: any,
        args: any[],
        eventWriter: any,
        inputStream: any,
        callback: (err: Error | null, status: any) => void,
      ): void;
      /**
       * Returns a `Service` object for this script invocation.
       *
       * The service object is created from the Splunkd URI and session key
       * passed to the command invocation on the modular input stream. It is
       * available as soon as the `exports.ModularInput.streamEvents` function is called.
       *
       * @return {Object} A `Service` Object, or null if you call this function before the `exports.ModularInput.streamEvents` function is called.
       *
       */
      static service(): Service;

      /**
       * Runs before streaming begins.
       *
       * @param {Function} done The function to call when done: `(err)`.
       *
       */
      setup(done: (err: Error | null) => void): void;

      /**
       * Runs once the streaming starts, for an input.
       *
       * @param {String} name The name of this modular input.
       * @param {Object} definition An InputDefinition object.
       * @param {Function} done The function to call when done: `(err)`.
       *
       */
      start(
        name: string,
        definition: InputDefinition,
        done: (err: Error | null) => void,
      ): void;
      /**
       * Runs once the streaming ends, for an input (upon successfully streaming all events).
       *
       * @param {String} name The name of this modular input.
       * @param {Object} definition An InputDefinition object.
       * @param {Function} done The function to call when done: `(err)`.
       *
       */
      end(
        name: string,
        definition: InputDefinition,
        done: (err: Error | null) => void,
      ): void;

      /**
       * Runs after all streaming is done for all inputs definitions.
       *
       * @param {Function} done The function to call when done: `(err)`.
       *
       */
      teardown(done: (err: Error | null) => void): void;
    }

    /**
     * Class representing the metadata for a modular input kind.
     *
     * A `Scheme` specifies a title, description, several options of how Splunk
     * should run modular inputs of this kind, and a set of arguments that define
     * a particular modular input's properties.
     * The primary use of `Scheme` is to abstract away the construction of XML
     * to feed to Splunk.
     *
     * @example
     *
     *      var s =  new Scheme();
     *
     *      var myFullScheme = new Scheme("fullScheme");
     *      myFullexports.Scheme.description = "This is how you set the other properties";
     *      myFullexports.Scheme.useExternalValidation = true;
     *      myFullexports.Scheme.useSingleInstance = false;
     *      myFullexports.Scheme.streamingMode = exports.Scheme.streamingModeSimple;
     *
     * @param {String} The identifier for this Scheme in Splunk.
     * @class Scheme
     */
    export class Scheme {
      constructor(title: string);

      /**
       * Add the provided argument, `arg`, to the `this.arguments` Array.
       *
       * @param {Object} arg An Argument object to add to this Scheme's argument list.
       */
      addArgument(arg: Argument): void;

      /**
       * Creates an elementtree Element representing this Scheme, then returns it.
       *
       * @return {Object} An elementtree Element object representing this exports.Scheme.
       */
      toXML(): any;
    }

    /**
     * This class represents the XML sent by Splunk for external validation of a
     * new modular input.
     *
     * @example
     *
     *      const v =  new ValidationDefinition();
     *
     * @class ValidationDefinition
     */
    export class ValidationDefinition {
      /**
       * Creates a `ValidationDefinition` from a provided string containing XML.
       *
       * This function will throw an exception if `str`
       * contains unexpected XML.
       *
       * The XML typically will look like this:
       *
       * `<items>`
       * `   <server_host>myHost</server_host>`
       * `     <server_uri>https://127.0.0.1:8089</server_uri>`
       * `     <session_key>123102983109283019283</session_key>`
       * `     <checkpoint_dir>/opt/splunk/var/lib/splunk/modinputs</checkpoint_dir>`
       * `     <item name="myScheme">`
       * `       <param name="param1">value1</param>`
       * `       <param_list name="param2">`
       * `         <value>value2</value>`
       * `         <value>value3</value>`
       * s`         <value>value4</value>`
       * `       </param_list>`
       * `     </item>`
       * `</items>`
       *
       * @param {String} str A string containing XML to parse.
       *
       *
       */
      static parse(str: string): ValidationDefinition;
    }
  }

  /**
   * Provides various utility functions, which are mostly modeled after
   * [Underscore.js](http://documentcloud.github.com/underscore/).
   *
   * @module Utils
   */
  module Utils {
    /**
     * Binds a function to a specific object.
     *
     * @example
     *
     *      var obj = {a: 1, b: function() { console.log(a); }};
     *      var bound = Utils.bind(obj, obj.b);
     *      bound(); // prints 1
     *
     * @param {Object} me The object to bind to.
     * @param {Function} fn The function to bind.
     * @return {Function} The bound function.
     *
     *
     */
    function bind(
      me: any,
      fn: (...params: any[]) => any,
    ): (...params: any[]) => any;

    /**
     * Strips a string of all leading and trailing whitespace characters.
     *
     * @example
     *
     *      var a = " aaa ";
     *      var b = Utils.trim(a); //== "aaa"
     *
     * @param {String} str The string to trim.
     * @return {String} The trimmed string.
     *
     *
     */
    function trim(str: string): string;

    /**
     * Searches an any[] for a specific object and returns its location.
     *
     * @example
     *
     *      var a = ["a", "b', "c"];
     *      console.log(Utils.indexOf(a, "b")) //== 1
     *      console.log(Utils.indexOf(a, "d")) //== -1
     *
     * @param {any[]} arr The any[] to search in.
     * @param {any} search The object to search for.
     * @return {Number} The index of the object (`search`), or `-1` if the object wasn't found.
     *
     */
    function indexOf(arr: any[], search: any): number;

    /**
     * Indicates whether an any[] contains a specific object.
     *
     * @example
     *
     *      var a = {a: 3};
     *      var b = [{}, {c: 1}, {b: 1}, a];
     *      var contained = Utils.contains(b, a); // true
     *
     * @param {any[]} arr The any[] to search in.
     * @param {any} obj The object to search for.
     * @return {Boolean} `true` if the any[] contains the object, `false` if not.
     *
     *
     */
    function contains(arr: any[], obj: any): boolean;

    /**
     * Indicates whether a string starts with a specific prefix.
     *
     * @example
     *
     *      var starts = Utils.startsWith("splunk-foo", "splunk-");
     *
     * @param {String} original The string to search in.
     * @param {String} prefix The prefix to search for.
     * @return {Boolean} `true` if the string starts with the prefix, `false` if not.
     *
     *
     */
    function startsWith(original: string, prefix: string): boolean;

    /**
     * Indicates whether a string ends with a specific suffix.
     *
     * @example
     *
     *      var ends = Utils.endsWith("foo-splunk", "-splunk");
     *
     * @param {String} original The string to search in.
     * @param {String} suffix The suffix to search for.
     * @return {Boolean} `true` if the string ends with the suffix, `false` if not.
     *
     *
     */
    function endsWith(original: string, suffix: string): boolean;

    /**
     * Converts an iterable to an any[].
     *
     * @example
     *
     *      function() {
     *          console.log(arguments instanceof any[]); // false
     *          var arr = console.log(Utils.toany[](arguments) instanceof any[]); // true
     *      }
     *
     * @param {Arguments} iterable The iterable to convert.
     * @return {any[]} The converted any[].
     *
     *
     */
    function toArray(iterable: any[]): any[];

    /**
     * Indicates whether an argument is an any[].
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isany[](arguments)); // false
     *          console.log(Utils.isany[]([1,2,3])); // true
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is an any[], `false` if not.
     *
     *
     */
    var isArray: any;

    /**
     * Indicates whether an argument is a function.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isFunction([1,2,3]); // false
     *          console.log(Utils.isFunction(function() {})); // true
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is a function, `false` if not.
     *
     *
     */
    function isFunction(obj: any): boolean;

    /**
     * Indicates whether an argument is a number.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isNumber(1); // true
     *          console.log(Utils.isNumber(function() {})); // false
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is a number, `false` if not.
     *
     *
     */
    function isNumber(obj: any): boolean;

    /**
     * Indicates whether an argument is a string.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isString("abc"); // true
     *          console.log(Utils.isString(function() {})); // false
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is a string, `false` if not.
     *
     *
     */
    function isString(obj: any): boolean;

    /**
     * Indicates whether an argument is an object.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isObject({abc: "abc"}); // true
     *          console.log(Utils.isObject("abc"); // false
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is an object, `false` if not.
     *
     *
     */
    function isObject(obj: any): boolean;

    /**
     * Indicates whether an argument is empty.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.isEmpty({})); // true
     *          console.log(Utils.isEmpty({a: 1})); // false
     *      }
     *
     * @param {any} obj The argument to evaluate.
     * @return {Boolean} `true` if the argument is empty, `false` if not.
     *
     *
     */
    function isEmpty(obj: any): boolean;

    /**
     * Applies an iterator function to each element in an object.
     *
     * @example
     *
     *      Utils.forEach([1,2,3], function(el) { console.log(el); }); // 1,2,3
     *
     * @param {Object|any[]} obj An object or any[].
     * @param {Function} iterator The function to apply to each element: `(element, list, index)`.
     * @param {Object} context A context to apply to the function (optional).
     *
     *
     */
    function forEach(
      obj: any | any[],
      iterator: (...params: any[]) => any,
      context?: any,
    ): void;

    /**
     * Extends a given object with all the properties from other source objects.
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.extend({foo: "bar"}, {a: 2})); // {foo: "bar", a: 2}
     *      }
     *
     * @param {Object} obj The object to extend.
     * @param {Object...} sources The source objects from which to take properties.
     * @return {Object} The extended object.
     *
     *
     */
    function extend(obj: any): any;

    /**
     * Creates a shallow-cloned copy of an object or any[].
     *
     * @example
     *
     *      function() {
     *          console.log(Utils.clone({foo: "bar"})); // {foo: "bar"}
     *          console.log(Utils.clone([1,2,3])); // [1,2,3]
     *      }
     *
     * @param {Object|any[]} obj The object or any[] to clone.
     * @return {Object|any[]} The cloned object or any[].
     *
     *
     */
    function clone(obj: any | any[]): any | any[];

    /**
     * Extracts namespace information from a dictionary of properties. Namespace
     * information includes values for _owner_, _app_, and _sharing_.
     *
     * @param {Object} props The dictionary of properties.
     * @return {Object} Namespace information from the properties dictionary.
     *
     *
     */
    function namespaceFromProperties(props: any): any;

    /**
     * Tests whether a value appears in a given object.
     *
     * @param {any} val The value to search for.
     * @param {Object} obj The object to search in.
     *
     *
     */
    function keyOf(val: any, obj: any): number;

    /**
     * Finds a version in a dictionary.
     *
     * @param {String} version The version to search for.
     * @param {Object} map The dictionary to search.
     * @return {any} The value of the dictionary at the closest version match.
     *
     *
     */
    function getWithVersion(version: string, map: any): any;

    /**
     * Checks if an object is undefined.
     *
     * @param {Object} obj An object.
     * @return {Boolean} `true` if the object is undefined, `false` if not.
     */
    function isUndefined(obj: any): boolean;

    /**
     * Read files in a way that makes unit tests work as well.
     *
     * @example
     *
     *      // To read `splunk-sdk-javascript/tests/data/empty_data_model.json`
     *      // from    `splunk-sdk-javascript/tests/test_service.js`
     *      var fileContents = utils.readFile(__filename, "../data/empty_data_model.json");
     *
     * @param {String} __filename of the script calling this function.
     * @param {String} a path relative to the script calling this function.
     * @return {String} The contents of the file.
     */
    function readFile(__filename: string, a: string): string;
  }

  type Params = { [key: string]: any };

  type ServiceParams = Partial<{
    scheme: string;
    host: string;
    port: number;
    username: string;
    password: string;
    owner: string;
    app: string;
    sessionKey: string;
    autologin: boolean;
    version: string;
  }>;

  type ContextParams = ServiceParams & { timeout?: number };

  // TODO is `search` mandatory?
  type SearchParams = Partial<
    { search: string } & {
      auto_cancel: number;
      auto_finalize_ec: number;
      auto_pause: number;
      earliest_time: string;
      enable_lookups: boolean;
      exec_mode: 'blocking' | 'oneshot' | 'normal';
      force_bundle_replication: boolean;
      id: string;
      index_earliest: string;
      index_latest: string;
      latest_time: string;
      max_count: number;
      max_time: number;
      namespace: string;
      now: string;
      reduce_freq: number;
      reload_macros: boolean;
      remote_server_list: string;
      rf: string;
      rt_blocking: boolean;
      rt_indexfilter: boolean;
      rt_maxblocksecs: number;
      rt_queue_size: number;
      search_listener: string;
      search_mode: 'normal' | 'realtime';
      spawn_process: boolean;
      status_buckets: number;
      sync_bundle_replication: boolean;
      time_format: string;
      timeout: number;
    }
  >;

  type JobParams = SearchParams;

  type OutputMode = { output_mode: 'XML' | 'JSON' | 'CSV' };

  type OneshotSearchParams = Partial<
    OutputMode & Pick<SearchParams, 'rf' | 'earliest_time' | 'latest_time'>
  >;

  /**
   * Provides a root access point to Splunk functionality with typed access to
   * Splunk resources such as searches, indexes, inputs, and more. Provides
   * methods to authenticate and create specialized instances of the
   *
   * @class Service
   */
  export class Service extends Context {
    /**
     * Constructor for `Service`.
     *
     * @param {Http} http An instance of a `Http` class.
     * @param {Object} params A dictionary of optional parameters:
     *    - `scheme` (_string_): The scheme ("http" or "https") for accessing Splunk.
     *    - `host` (_string_): The host name (the default is "localhost").
     *    - `port` (_integer_): The port number (the default is 8089).
     *    - `username` (_string_): The Splunk account username, which is used to authenticate the Splunk instance.
     *    - `password` (_string_): The password, which is used to authenticate the Splunk instance.
     *    - `owner` (_string_): The owner (username) component of the namespace.
     *    - `app` (_string_): The app component of the namespace.
     *    - `sessionKey` (_string_): The current session token.
     *    - `autologin` (_boolean_): `true` to automatically try to log in again if the session terminates, `false` if not (`true` by default).
     *    - `version` (_string_): The version string for Splunk, for example "4.3.2" (the default is "5.0").
     * @return {Service} A new `Service` instance.
     *
     *
     */
    constructor(http: Http, params?: ServiceParams);

    /**
     * Constructor for `Service`.
     *
     * @param {Object} params A dictionary of optional parameters:
     *    - `scheme` (_string_): The scheme ("http" or "https") for accessing Splunk.
     *    - `host` (_string_): The host name (the default is "localhost").
     *    - `port` (_integer_): The port number (the default is 8089).
     *    - `username` (_string_): The Splunk account username, which is used to authenticate the Splunk instance.
     *    - `password` (_string_): The password, which is used to authenticate the Splunk instance.
     *    - `owner` (_string_): The owner (username) component of the namespace.
     *    - `app` (_string_): The app component of the namespace.
     *    - `sessionKey` (_string_): The current session token.
     *    - `autologin` (_boolean_): `true` to automatically try to log in again if the session terminates, `false` if not (`true` by default).
     *    - `version` (_string_): The version string for Splunk, for example "4.3.2" (the default is "5.0").
     * @return {Service} A new `Service` instance.
     *
     *
     */
    constructor(params?: ServiceParams);

    /**
     * Creates a specialized version of the current `Service` instance for
     * a specific namespace context.
     *
     * @example
     *
     *      var svc = ...;
     *      var newService = svc.specialize("myuser", "unix");
     *
     * @param {String} owner The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     * @param {String} app The app context for this resource (such as "search"). The "-" wildcard means all apps.
     * @return {Service} The specialized `Service` instance.
     *
     *
     */
    specialize(owner: string, app: string): Service;

    /**
     * Gets the `Applications` collection, which allows you to
     * list installed apps and retrieve information about them.
     *
     * @example
     *
     *      // List installed apps
     *      var apps = svc.apps();
     *      apps.fetch(function(err) { console.log(apps.list()); });
     *
     * @return {Collection} The `Applications` collection.
     *
     * @endpoint apps/local
     *
     * @see Applications
     */
    apps(): Service.Applications;

    /**
     * Gets the `Configurations` collection, which lets you
     * create, list, and retrieve configuration (.conf) files.
     *
     * @example
     *
     *      // List all properties in the 'props.conf' file
     *      var files = svc.configurations();
     *      files.item("props", function(err, propsFile) {
     *          propsFile.fetch(function(err, props) {
     *              console.log(props.properties());
     *          });
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {Configurations} The `Configurations` collection.
     *
     * @endpoint configs
     *
     * @see Configurations
     */
    configurations(namespace?: Namespace): Service.Configurations;

    /**
     * Gets the `Indexes` collection, which lets you create,
     * list, and update indexes.
     *
     * @example
     *
     *      // Check if we have an _internal index
     *      var indexes = svc.indexes();
     *      indexes.fetch(function(err, indexes) {
     *          var index = indexes.item("_internal");
     *          console.log("Was index found: " + !!index);
     *          // `index` is an Index object.
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {Indexes} The `Indexes` collection.
     *
     * @endpoint data/indexes
     *
     * @see Indexes
     */
    indexes(namespace?: Namespace): Service.Indexes;

    /**
     * Gets the `SavedSearches` collection, which lets you
     * create, list, and update saved searches.
     *
     * @example
     *
     *      // List all # of saved searches
     *      var savedSearches = svc.savedSearches();
     *      savedSearches.fetch(function(err, savedSearches) {
     *          console.log("# Of Saved Searches: " + savedSearches.list().length);
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {SavedSearches} The `SavedSearches` collection.
     *
     * @endpoint saved/searches
     *
     * @see SavedSearches
     */
    savedSearches(namespace?: Namespace): Service.SavedSearches;

    /**
     * Gets the `StoragePasswords` collection, which lets you
     * create, list, and update storage passwords.
     *
     * @example
     *
     *      // List all # of storage passwords
     *      var storagePasswords = svc.storagePasswords();
     *      storagePasswords.fetch(function(err, storagePasswords) {
     *          console.log("# of Storage Passwords: " + storagePasswords.list().length);
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {StoragePasswords} The `StoragePasswords` collection.
     *
     * @endpoint storage/passwords
     *
     * @see StoragePasswords
     */
    storagePasswords(namespace?: Namespace): Service.StoragePasswords;

    /**
     * Gets the `FiredAlertGroupCollection` collection, which lets you
     * list alert groups.
     *
     * @example
     *
     *      // List all # of fired alert groups
     *      var firedAlertGroups = svc.firedAlertGroups();
     *      firedAlertGroups.fetch(function(err, firedAlertGroups) {
     *          console.log("# of alert groups: " + firedAlertGroups.list().length);
     *      });
     *
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {FiredAlertGroupCollection} The `FiredAlertGroupCollection` collection.
     *
     * @endpoint saved/searches
     *
     * @see FiredAlertGroupCollection
     */
    firedAlertGroups(namespace?: Namespace): Service.FiredAlertGroupCollection;

    /**
     * Gets the `Jobs` collection, which lets you create, list,
     * and retrieve search jobs.
     *
     * @example
     *
     *      // List all job IDs
     *      var jobs = svc.jobs();
     *      jobs.fetch(function(err, jobs) {
     *          var list = jobs.list();
     *          for(var i = 0; i < list.length; i++) {
     *              console.log("Job " + (i+1) + ": " + list[i].sid);
     *          }
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {Jobs} The `Jobs` collection.
     *
     * @endpoint search/jobs
     *
     * @see Jobs
     */
    jobs(namespace?: Namespace): Service.Jobs;

    /**
     * Gets the `DataModels` collection, which lets you create, list,
     * and retrieve data models.
     *
     * @endpoint datamodel/model
     *
     * @see DataModels
     */
    dataModels(): Service.DataModels;

    /**
     * Gets the `Users` collection, which lets you create,
     * list, and retrieve users.
     *
     * @example
     *
     *      // List all usernames
     *      var users = svc.users();
     *      users.fetch(function(err, users) {
     *          var list = users.list();
     *          for(var i = 0; i < list.length; i++) {
     *              console.log("User " + (i+1) + ": " + list[i].properties().name);
     *          }
     *      });
     *
     * @return {Users} The `Users` collection.
     *
     * @endpoint authorization/users
     *
     * @see Users
     */
    users(): Service.Users;

    /**
     * Gets the `Views` collection, which lets you create,
     * list, and retrieve views (custom UIs built in Splunk's app framework).
     *
     * @example
     *
     *      // List all views
     *      var views = svc.views();
     *      views.fetch(function(err, views) {
     *          var list = views.list();
     *          for(var i = 0; i < list.length; i++) {
     *              console.log("View " + (i+1) + ": " + list[i].properties().name);
     *          }
     *      });
     *
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @return {Views} The `Views` collection.
     *
     * @endpoint data/ui/views
     *
     * @see Views
     */
    views(namespace?: Namespace): Service.Views;

    /**
     * Creates a search job with a given search query and optional parameters, including `exec_mode` to specify the type of search:
     *
     *    - Use `exec_mode=normal` to return a search job ID immediately (default).
     *      Poll for completion to find out when you can retrieve search results.
     *
     *    - Use `exec_mode=blocking` to return the search job ID when the search has finished.
     *
     * To run a oneshot search, which does not create a job but rather returns the search results, use `oneshotSearch`.
     *
     * @example
     *
     *      search("search ERROR", {id: "myjob_123"}, function(err, newJob) {
     *          console.log("CREATED": newJob.sid);
     *      });
     *
     * @param {String} query The search query.
     * @param {Object} params A dictionary of properties for the job. For a list of available parameters, see <a href=" http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @param {Function} callback A function to call with the created job: `(err, createdJob)`.
     *
     * @endpoint search/jobs
     *
     */
    search(
      query: string,
      params: SearchParams,
      namespace: Namespace,
      callback: (err: Error | null, job: Service.Job) => void,
    ): void;

    /**
     * Creates a search job with a given search query and optional parameters, including `exec_mode` to specify the type of search:
     *
     *    - Use `exec_mode=normal` to return a search job ID immediately (default).
     *      Poll for completion to find out when you can retrieve search results.
     *
     *    - Use `exec_mode=blocking` to return the search job ID when the search has finished.
     *
     * To run a oneshot search, which does not create a job but rather returns the search results, use `oneshotSearch`.
     *
     * @example
     *
     *      search("search ERROR", {id: "myjob_123"}, function(err, newJob) {
     *          console.log("CREATED": newJob.sid);
     *      });
     *
     * @param {String} query The search query.
     * @param {Object} params A dictionary of properties for the job. For a list of available parameters, see <a href=" http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
     * @param {Function} callback A function to call with the created job: `(err, createdJob)`.
     *
     * @endpoint search/jobs
     *
     */
    search(
      query: string,
      params: SearchParams,
      callback: (err: Error | null, createdJob: Service.Job) => void,
    ): void;

    /**
     * A convenience method to get a `Job` by its sid.
     *
     * @param {String} sid The search ID for a search job.
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @param {Function} callback A function to call with the created job: `(err, job)`.
     *
     * @endpoint search/jobs
     *
     */
    getJob(
      sid: string,
      namespace: Namespace,
      callback: (err: Error | null, job: Service.Job) => void,
    ): void;

    /**
     * A convenience method to get a `Job` by its sid.
     *
     * @param {String} sid The search ID for a search job.
     * @param {Function} callback A function to call with the created job: `(err, job)`.
     *
     * @endpoint search/jobs
     *
     */
    getJob(
      sid: string,
      callback: (err: Error | null, job: Service.Job) => void,
    ): void;

    /**
     * Creates a oneshot search from a given search query and optional parameters.
     *
     * @example
     *
     *      oneshotSearch("search ERROR", {id: "myjob_123"}, function(err, results) {
     *          console.log("RESULT FIELDS": results.fields);
     *      });
     *
     * @param {String} query The search query.
     * @param {Object} params A dictionary of properties for the search:
     *    - `output_mode` (_string_): Specifies the output format of the results (XML, JSON, or CSV).
     *    - `earliest_time` (_string_): Specifies the earliest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
     *    - `latest_time` (_string_): Specifies the latest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
     *    - `rf` (_string_): Specifies one or more fields to add to the search.
     * @param {Object} namespace Namespace information:
     *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
     *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
     *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
     * @param {Function} callback A function to call with the results of the search: `(err, results)`.
     *
     * @endpoint search/jobs
     *
     */
    oneshotSearch(
      query: string,
      params: OneshotSearchParams,
      namespace: Namespace,
      callback: (err: Error | null, results: { [key: string]: any }) => void,
    ): void;

    /**
     * Creates a oneshot search from a given search query and optional parameters.
     *
     * @example
     *
     *      oneshotSearch("search ERROR", {id: "myjob_123"}, function(err, results) {
     *          console.log("RESULT FIELDS": results.fields);
     *      });
     *
     * @param {String} query The search query.
     * @param {Object} params A dictionary of properties for the search:
     *    - `output_mode` (_string_): Specifies the output format of the results (XML, JSON, or CSV).
     *    - `earliest_time` (_string_): Specifies the earliest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
     *    - `latest_time` (_string_): Specifies the latest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
     *    - `rf` (_string_): Specifies one or more fields to add to the search.
     * @param {Function} callback A function to call with the results of the search: `(err, results)`.
     *
     * @endpoint search/jobs
     *
     */
    oneshotSearch(
      query: string,
      params: OneshotSearchParams,
      callback: (err: Error | null, results: { [key: string]: any }) => void,
    ): void;

    /**
     * Gets the user that is currently logged in.
     *
     * @example
     *
     *      currentUser(function(err, user) {
     *          console.log("Real name: ", user.properties().realname);
     *      });
     *
     * @param {Function} callback A function to call with the user instance: `(err, user)`.
     * @return {User} The `User`.
     *
     * @endpoint authorization/current-context
     *
     */
    currentUser(
      callback: (err: Error | null, user: Service.User) => void,
    ): void;

    /**
     * Gets configuration information about the server.
     *
     * @example
     *
     *      serverInfo(function(err, info) {
     *          console.log("Splunk Version: ", info.properties().version);
     *      });
     *
     * @param {Function} callback A function to call with the server info: `(err, info)`.
     *
     * @endpoint server/info
     *
     */
    serverInfo(
      callback: (err: Error | null, info: Service.ServerInfo) => void,
    ): void;

    /**
     * Parses a search query.
     *
     * @example
     *
     *      parse("search index=_internal | head 1", function(err, parse) {
     *          console.log("Commands: ", parse.commands);
     *      });
     *
     * @param {String} query The search query to parse.
     * @param {Object} params An object of options for the parser:
     *    - `enable_lookups` (_boolean_): If `true`, performs reverse lookups to expand the search expression.
     *    - `output_mode` (_string_): The output format (XML or JSON).
     *    - `parse_only` (_boolean_): If `true`, disables the expansion of search due to evaluation of subsearches, time term expansion, lookups, tags, eventtypes, and sourcetype alias.
     *    - `reload_macros` (_boolean_): If `true`, reloads macro definitions from macros.conf.
     * @param {Function} callback A function to call with the parse info: `(err, parse)`.
     *
     * @endpoint search/parser
     *
     */
    parse(
      query: string,
      params: Partial<
        OutputMode & {
          enable_lookups: boolean;
          parse_only: boolean;
          reload_macros: boolean;
        }
      >,
      callback: (err: Error | null, parse: any) => void,
    ): void;

    /**
     * Provides auto-complete suggestions for search queries.
     *
     * @example
     *
     *      typeahead("index=", 10, function(err, options) {
     *          console.log("Autocompletion options: ", options);
     *      });
     *
     * @param {String} prefix The query fragment to autocomplete.
     * @param {Number} count The number of options to return (optional).
     * @param {Function} callback A function to call with the autocompletion info: `(err, options)`.
     *
     * @endpoint search/typeahead
     *
     */
    typeahead(
      prefix: string,
      count: number,
      callback: (err: Error | null, options: any) => void,
    ): void;

    /**
     * Logs an event to Splunk.
     *
     * @example
     *
     *      log("A new event", {index: "_internal", sourcetype: "mysourcetype"}, function(err, result) {
     *          console.log("Submitted event: ", result);
     *      });
     *
     * @param {String|Object} event The text for this event, or a JSON object.
     * @param {Object} params A dictionary of parameters for indexing:
     *    - `index` (_string_): The index to send events from this input to.
     *    - `host` (_string_): The value to populate in the Host field for events from this data input.
     *    - `host_regex` (_string_): A regular expression used to extract the host value from each event.
     *    - `source` (_string_): The value to populate in the Source field for events from this data input.
     *    - `sourcetype` (_string_): The value to populate in the Sourcetype field for events from this data input.
     * @param {Function} callback A function to call when the event is submitted: `(err, result)`.
     *
     * @endpoint receivers/simple
     *
     */
    log(
      event: string | any,
      params: Partial<{
        index: string;
        host: string;
        host_regex: string;
        source: string;
        sourcetype: string;
      }>,
      callback?: (err: Error | null, result: any) => void,
    ): void;
  }

  export namespace Service {
    type ServerLicense =
      | 'Enterprise'
      | 'Forwarder'
      | 'Free'
      | 'Invalid'
      | 'Trial';

    type ProductType = 'enterprise' | 'hunk' | 'lite' | 'lite_free' | 'splunk';

    // See also: server/roles endpoint.
    type ServerRole =
      | 'indexer'
      | 'universal_forwarder'
      | 'heavyweight_forwarder'
      | 'lightweight_forwarder'
      | 'license_master'
      | 'license_slave'
      | 'cluster_master'
      | 'cluster_slave'
      | 'cluster_search_head'
      | 'deployment_server'
      | 'deployment_client'
      | 'search_head'
      | 'search_peer'
      | 'shc_captain'
      | 'shc_deployer'
      | 'shc_member';

    type ServerMode = 'normal' | 'dedicated forwarder';

    type PropertyBase = string | number | boolean | null;
    type Property = PropertyBase | PropertyBase[] | { [key: string]: Property };

    type ServerInfoProperties = {
      activeLicenseGroup: ServerLicense;
      activeLicenseSubgroup: 'Production' | string;
      addOns: { [key: string]: Property };
      build: string;
      cpu_arch: 'x86_64' | string;
      guid: string;
      host: string;
      host_fqdn: string;
      isForwarding: boolean;
      isFree: boolean;
      isTrial: boolean;
      kvStoreStatus: 'ready' | string;
      license_labels: string[];
      licenseKeys: string[];
      licenseSignature: string;
      licenseState: 'OK' | 'Expired';
      master_guid: string;
      max_users: number;
      mode: ServerRole;
      numberOfCores: number;
      os_build: string;
      os_name: string;
      os_version: string;
      physicalMemoryMB: number;
      product_type: string;
      rtsearch_enabled: boolean;
      server_roles: ServerRole[];
      serverName: string;
      startup_time: number;
      version: string;
      [key: string]: Property;
    };

    /**
     * Provides a base definition for a Splunk endpoint, which is a combination of
     * a specific service and path. Provides convenience methods for GET, POST, and
     * DELETE operations used in  automatically preparing the path correctly
     * and allowing for relative calls.
     *
     * @class Endpoint
     */
    export class Endpoint extends Class {
      service: Service;

      /**
             * Constructor for `Endpoint`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} qualifiedPath A fully-qualified relative endpoint path (for example, "/services/search/jobs").
             * @return {Endpoint} A new `Endpoint` instance.
             *
             * 
             */
      constructor(
        service: Service,
        qualifiedPath: string,
        namespace?: Namespace,
      );

      /**
       * Performs a relative GET request on an endpoint's path,
       * combined with the parameters and a relative path if specified.
       *
       * @example
       *
       *      // Will make a request to {prefix}/search/jobs/123456/results?offset=1
       *      var endpoint = new Endpoint(service, "search/jobs/12345");
       *      endpoint.get("results", {offset: 1}, function() { console.log("DONE"))});
       *
       * @param {String} relpath A relative path to append to the endpoint path.
       * @param {Object} params A dictionary of entity-specific parameters to add to the query string.
       * @param {Function} callback A function to call when the request is complete: `(err, response)`.
       *
       *
       */
      get(
        relpath: string,
        params: Params,
        callback: (err: Error | null, response: any) => void,
      ): void;

      /**
       * Performs a relative POST request on an endpoint's path,
       * combined with the parameters and a relative path if specified.
       *
       * @example
       *
       *      // Will make a request to {prefix}/search/jobs/123456/control
       *      var endpoint = new Endpoint(service, "search/jobs/12345");
       *      endpoint.post("control", {action: "cancel"}, function() { console.log("CANCELLED"))});
       *
       * @param {String} relpath A relative path to append to the endpoint path.
       * @param {Object} params A dictionary of entity-specific parameters to add to the body.
       * @param {Function} callback A function to call when the request is complete: `(err, response)`.
       *
       *
       */
      post(
        relpath: string,
        params: Params,
        callback: (err: Error | null, response: any) => void,
      ): void;

      /**
       * Performs a relative DELETE request on an endpoint's path,
       * combined with the parameters and a relative path if specified.
       *
       * @example
       *
       *      // Will make a request to {prefix}/search/jobs/123456
       *      var endpoint = new Endpoint(service, "search/jobs/12345");
       *      endpoint.delete("", {}, function() { console.log("DELETED"))});
       *
       * @param {String} relpath A relative path to append to the endpoint path.
       * @param {Object} params A dictionary of entity-specific parameters to add to the query string.
       * @param {Function} callback A function to call when the request is complete: `(err, response)`.
       *
       *
       */
      del(
        relpath: string,
        params: Params,
        callback: (err: Error | null, response: any) => void,
      ): void;
    }

    /**
     * Provides a base definition for a Splunk resource (for example, an entity
     * such as an index or search job, or a collection of entities). Provides
     * basic methods for handling Splunk resources, such as validation and
     * accessing properties.
     *
     * This class should not be used directly because most methods are meant to be overridden.
     *
     * @class Resource
     * @extends Endpoint
     */
    export class Resource<K> extends Endpoint {
      /**
             * Constructor for `Resource`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} path A relative endpoint path (for example, "search/jobs").
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Resource} A new `Resource` instance.
             *
             * 
             */
      constructor(service: Service, path: string, namespace?: Namespace);
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
       * Loads the resource and stores the properties.
       *
       * @param {Object} properties The properties for this resource.
       *
       *
       * @protected
       */
      protected _load(properties: any): void;

      /**
       * Refreshes the resource by fetching the object from the server
       * and loading it.
       *
       * @param {Function} callback A function to call when the object is retrieved: `(err, resource)`.
       *
       *
       * @protected
       */
      protected fetch(callback: (err: Error | null, resource: K) => void): void;

      /**
       * Refreshes the resource by fetching the object from the server
       * and loading it.
       *
       * @param {any} options Options for the fetch.
       * @param {Function} callback A function to call when the object is retrieved: `(err, resource)`.
       *
       *
       * @protected
       */
      protected fetch(
        options: any,
        callback: (err: Error | null, resource: K) => void,
      ): void;

      /**
       * Retrieves the current properties for this resource.
       *
       * @return {Object} The properties.
       *
       *
       */
      properties(): any;

      /**
       * Retrieves the current full state (properties and metadata) of this resource.
       *
       * @return {Object} The current full state of this resource.
       *
       *
       */
      state(): any;
    }

    /**
     * Defines a base class for a Splunk entity, which is a well-defined construct
     * with certain operations (such as "properties", "update", and "delete").
     * Entities include search jobs, indexes, inputs, apps, and more.
     *
     * Provides basic methods for working with Splunk entities, such as fetching and
     * updating them.
     *
     * @class Entity
     * @extends Resource
     */
    export class Entity<K> extends Resource<K> {
      /**
       * A property that indicates whether to call `fetch` after an
       * update to get the updated entity. By default, the entity is not
       * fetched because the endpoint returns (echoes) the updated entity.
       *
       *
       */
      fetchOnUpdate: boolean;
      name: string;

      /**
             * Constructor for `Entity`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} path A relative endpoint path (for example, "search/jobs").
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Entity} A new `Entity` instance.
             * 
             */
      constructor(
        service: Service,
        path: string,
        namespace?: Namespace,
        options?: any,
      );

      /**
       * Loads the entity and stores the properties.
       *
       * @param {Object} properties The properties for this entity.
       *
       *
       * @protected
       */
      protected _load(properties: any): void;

      /**
       * Retrieves the fields information for this entity, indicating which
       * fields are wildcards, required, and optional.
       *
       * @return {Object} The fields information.
       *
       *
       */
      fields(): any;

      /**
       * Retrieves the access control list (ACL) information for this entity,
       * which contains the permissions for accessing the entity.
       *
       * @return {Object} The ACL.
       *
       *
       */
      acl(): any;

      /**
       * Retrieves the links information for this entity, which is the URI of
       * the entity relative to the management port of a Splunk instance.
       *
       * @return {Object} The links information.
       *
       *
       */
      links(): any;

      /**
       * Retrieves the author information for this entity.
       *
       * @return {String} The author.
       *
       *
       */
      author(): string;

      /**
       * Retrieves the updated time for this entity.
       *
       * @return {String} The updated time.
       *
       *
       */
      updated(): string;

      /**
       * Retrieves the published time for this entity.
       *
       * @return {String} The published time.
       *
       *
       */
      published(): string;

      /**
       * Refreshes the entity by fetching the object from the server and
       * loading it.
       *
       * @param {Object} options An optional dictionary of collection filtering and pagination options:
       *    - `count` (_integer_): The maximum number of items to return.
       *    - `offset` (_integer_): The offset of the first item to return.
       *    - `search` (_string_): The search query to filter responses.
       *    - `sort_dir` (_string_): The direction to sort returned items: “asc” or “desc”.
       *    - `sort_key` (_string_): The field to use for sorting (optional).
       *    - `sort_mode` (_string_): The collating sequence for sorting returned items: “auto”, “alpha”, “alpha_case”, or “num”.
       * @param {Function} callback A function to call when the object is retrieved: `(err, resource)`.
       *
       *
       */
      fetch(
        options: any,
        callback: (err: Error | null, entity: K) => void,
      ): void;

      /**
       * Refreshes the entity by fetching the object from the server and
       * loading it.
       *
       * @param {Function} callback A function to call when the object is retrieved: `(err, resource)`.
       *
       *
       */
      fetch(callback: (err: Error | null, entity: K) => void): void;

      /**
       * Deletes the entity from the server.
       *
       * @param {Function} callback A function to call when the object is deleted: `(err)`.
       *
       *
       * (at)Protected
       * TODO Are callbacks optional?
       */
      remove(callback?: (err: Error | null) => void): void;

      /**
       * Updates the entity on the server.
       *
       * @param {Object} props The properties to update the object with.
       * @param {Function} callback A function to call when the object is updated: `(err, entity)`.
       *
       *
       * (at)Protected
       */
      update(
        props: any,
        callback: (err: Error | null, entity: K) => void,
      ): void;

      /**
       * Disables the entity on the server.
       *
       * @param {Function} callback A function to call when the object is disabled: `(err, entity)`.
       *
       *
       * (at)Protected
       */
      disable(callback: (err: Error | null, entity: K) => void): void;

      /**
       * Enables the entity on the server.
       *
       * @param {Function} callback A function to call when the object is enabled: `(err, entity)`.
       *
       *
       * (at)Protected
       */
      enable(callback: (err: Error | null, entity: K) => void): void;

      /**
       * Reloads the entity on the server.
       *
       * @param {Function} callback A function to call when the object is reloaded: `(err, entity)`.
       *
       *
       * (at)Protected
       */
      reload(callback: (err: Error | null, entity: K) => void): void;
    }

    /**
     * Defines a base class for a Splunk collection, which is a well-defined construct
     * that provides basic methods for working with collections of entities, such as
     * creating and listing entities.
     *
     * @class Collection
     * @extends Resource
     */
    export class Collection<K, L> extends Resource<Collection<K, L>> {
      /**
       * A property that indicates whether to call `fetch` after an
       * entity has been created. By default, the entity is not fetched
       * because the endpoint returns (echoes) the new entity.
       *
       */
      fetchOnEntityCreation: boolean;

      /**
       * Constructor for `Collection`.
       *
       * @param {Service} service A `Service` instance.
       * @param {String} path A relative endpoint path (for example, "search/jobs").
       * @param {Object} namespace Namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
       *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       * @return {Collection} A new `Collection` instance.
       *
       *
       */
      constructor(service: Service, path: String, namespace: Namespace);

      /**
       * Creates a local instance of an entity.
       *
       * @param {Object} props The properties for this entity.
       * @return {K} A new `K` instance.
       *
       */
      instantiateEntity(props: L): K;

      /**
       * Retrieves the links information for this collection, which is the URI of
       * the resource relative to the management port of a Splunk instance.
       *
       * @return {Object} The links information.
       *
       *
       */
      links(): any;

      /**
       * Retrieves the author information for this collection.
       *
       * @return {String} The author.
       *
       *
       */
      paging(): string;
      /**
       * Retrieves the updated time for this collection.
       *
       * @return {String} The updated time.
       *
       *
       */
      updated(): string;

      /**
       * Refreshes the resource by fetching the object from the server and
       * loading it.
       *
       * @param {Object} options A dictionary of collection filtering and pagination options:
       *    - `count` (_integer_): The maximum number of items to return.
       *    - `offset` (_integer_): The offset of the first item to return.
       *    - `search` (_string_): The search query to filter responses.
       *    - `sort_dir` (_string_): The direction to sort returned items: “asc” or “desc”.
       *    - `sort_key` (_string_): The field to use for sorting (optional).
       *    - `sort_mode` (_string_): The collating sequence for sorting returned items: “auto”, “alpha”, “alpha_case”, or “num”.
       * @param {Function} callback A function to call when the object is retrieved: `(err, resource)`.
       *
       */
      fetch(
        options: Partial<{
          count: number;
          offset: number;
          search: string;
          sort_dir: string;
          sort_key: string;
          sort_mode: string;
        }>,
        callback: (err: Error | null, resource: Collection<K, L>) => void,
      ): void;

      /**
       * Refreshes the resource by fetching the object from the server and
       * loading it.
       *
       *
       */
      fetch(
        callback: (err: Error | null, resource: Collection<K, L>) => void,
      ): void;

      /**
       * Returns a specific entity from the collection.
       *
       * @example
       *
       *      var apps = apps();
       *      apps.fetch(function(err, apps) {
       *          var app = apps.item("search");
       *          console.log("Search App Found: " + !!app);
       *          // `app` is an Application object.
       *      });
       *
       * @param {String} id The name of the entity to retrieve.
       * @param {Object} namespace Namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The wildcard value "-", is not acceptable when searching for an entity.
       *    - `app` (_string_): The app context for this resource (such as "search"). The wildcard value "-" is unacceptable when searching for an entity.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       * @returns {K} The entity, or `null` if one is not found.
       *
       *
       */
      item(id: string, namespace?: Namespace): K;

      /**
       * Creates an entity on the server for this collection with the specified
       * parameters.
       *
       * @example
       *
       *      var apps = apps();
       *      apps.create({name: "NewSearchApp"}, function(err, newApp) {
       *          console.log("CREATED");
       *      });
       *
       * @param {Object} params A dictionary of entity-specific properties.
       * @param {Function} callback The function to call when the request is complete: `(err, response)`.
       * @returns {Array} An array of `K` objects.
       *
       *
       */
      // TODO Fixed by tweaking root callback.
      create(
        params: L,
        callback: (err: Error | null, response: K) => void,
      ): void;

      /**
       * Retrieves a list of all entities in the collection.
       *
       * @example
       *
       *      var apps = apps();
       *      var jobs = apps.list();
       *
       */
      // TODO: Fix original JSDoc
      // listed argument: callback: (...params: any[]) => any
      list(): K[];
    }

    /**
     * Represents a specific saved search, which you can then view, modify, and
     * remove.
     *
     * @endpoint saved/searches/{name}
     * @class SavedSearch
     * @extends Entity
     */
    export class SavedSearch extends Entity<SavedSearch> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
             * Constructor for `SavedSearch`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name for the new saved search.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {SavedSearch} A new `SavedSearch` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);

      /**
       * Gets the count of triggered alerts for this savedSearch,
       * defaulting to 0 when undefined.
       *
       * @example
       *
       *      var savedSearch = savedSearches().item("MySavedSearch");
       *      var alertCount = savedSearch.alertCount();
       *
       * @return {Number} The count of triggered alerts.
       *
       *
       */
      alertCount(): number;
      /**
       * Acknowledges the suppression of the alerts from a saved search and
       * resumes alerting.
       *
       * @example
       *
       *      var savedSearch = savedSearches().item("MySavedSearch");
       *      savedSearch.acknowledge(function(err, search) {
       *          console.log("ACKNOWLEDGED");
       *      });
       *
       * @param {Function} callback A function to call when the saved search is acknowledged: `(err, savedSearch)`.
       *
       * @endpoint saved/searches/{name}/acknowledge
       *
       */
      acknowledge(
        callback: (err: Error | null, savedSearch: SavedSearch) => void,
      ): void;
      /**
       * Dispatches a saved search, which creates a search job and returns a
       * `Job` instance in the callback function.
       *
       * @example
       *
       *      var savedSearch = savedSearches().item("MySavedSearch");
       *      savedSearch.dispatch({force_dispatch: false}, function(err, job, savedSearch) {
       *          console.log("Job SID: ", job.sid);
       *      });
       *
       * @param {Object} options The options for dispatching this saved search:
       *    - `dispatch.now` (_string_): The time that is used to dispatch the search as though the specified time were the current time.
       *    - `dispatch.*` (_string_): Overwrites the value of the search field specified in *.
       *    - `trigger_actions` (_boolean_): Indicates whether to trigger alert actions.
       *    - `force_dispatch` (_boolean_): Indicates whether to start a new search if another instance of this search is already running.
       * @param {Function} callback A function to call when the saved search is dispatched: `(err, job, savedSearch)`.
       *
       * @endpoint saved/searches/{name}/dispatch
       *
       */
      dispatch(
        options: Partial<{
          dispatch: { now: string; [key: string]: string };
          trigger_actions: boolean;
          force_dispatch: boolean;
        }>,
        callback: (
          err: Error | null,
          job: Job,
          savedSearch: SavedSearch,
        ) => void,
      ): void;

      /**
       * Gets the `FiredAlertGroup` for firedAlerts associated with this saved search.
       *
       * @example
       *
       *      var alerts = firedAlertGroups().item("MySavedSearch");
       *
       * @return {FiredAlertGroup} An AlertGroup object with the
       * same name as this SavedSearch object.
       *
       *
       */
      firedAlertGroup(): FiredAlertGroup;

      /**
       * Retrieves the job history for a saved search, which is a list of
       * `Job` instances.
       *
       * @example
       *
       *      var savedSearch = savedSearches().item("MySavedSearch");
       *      savedSearch.history(function(err, jobs, search) {
       *          for(var i = 0; i < jobs.length; i++) {
       *              console.log("Job", i, ":", jobs[i].sid);
       *          }
       *      });
       *
       * @param {Function} callback A function to call when the history is retrieved: `(err, job, savedSearch)`.
       *
       * @endpoint saved/searches/{name}/history
       *
       */
      history(
        callback: (
          err: Error | null,
          job: Job,
          savedSearch: SavedSearch,
        ) => void,
      ): void;

      /**
       * Retrieves the suppression state of a saved search.
       *
       * @example
       *
       *      var savedSearch = savedSearches().item("MySavedSearch");
       *      savedSearch.history(function(err, suppressionState, search) {
       *          console.log("STATE: ", suppressionState);
       *      });
       *
       * @param {Function} callback A function to call when the suppression state is retrieved: `(err, suppressionState, savedSearch)`.
       *
       * @endpoint saved/searches/{name}/suppress
       *
       */
      suppressInfo(
        callback: (
          err: Error | null,
          suppressionState: any,
          search: SavedSearch,
        ) => void,
      ): void;

      /**
       * Updates the saved search on the server.
       *
       * **Note:** The search query is required, even when it isn't being modified.
       * If you don't provide it, this method will fetch the search string from
       * the server or from the local cache.
       *
       * @param {Object} props The properties to update the saved search with. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#savedsearchparams" target="_blank">Saved search parameters</a> on Splunk Developer Portal.
       * @param {Function} callback A function to call when the object is updated: `(err, entity)`.
       *
       *
       */
      update(
        props: any,
        callback: (err: Error | null, entity: SavedSearch) => void,
      ): void;
    }

    type SavedSearchParams = {
      search: string;
    } & Partial<{
      auto_cancel: number;
      auto_finalize_ec: string;
      auto_pause: string;
      earliest_time: string;
      enable_lookups: boolean;
      exec_mode: 'blocking' | 'oneshot' | 'normal';
      force_bundle_replication: boolean;
      id: string;
      index_earliest: string;
      index_latest: string;
      latest_time: string;
      max_count: number;
      max_time: string;
      namespace: string;
      now: string;
      reduce_freq: number;
      reload_macros: boolean;
      remote_server_list: string;
      rf: string;
      rt_blocking: boolean;
      rt_indexfilter: boolean;
      rt_maxblocksecs: number;
      rt_queue_size: number;
      search_listener: string;
      search_mode: 'normal' | 'realtime';
      spawn_process: boolean;
      status_buckets: number;
      sync_bundle_replication: boolean;
      time_format: string;
      timeout: number;
    }>;

    /**
     * Represents a collection of saved searches. You can create and list saved
     * searches using this collection container, or get a specific saved search.
     *
     * @endpoint saved/searches
     * @class SavedSearches
     * @extends Collection
     */
    export class SavedSearches extends Collection<
      SavedSearch,
      SavedSearchParams
    > {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of a saved search.
       *
       * @param {Object} props The properties for the new saved search. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#savedsearchparams" target="_blank">Saved search parameters</a> on Splunk Developer Portal.
       * @return {SavedSearch} A new `SavedSearch` instance.
       */
      instantiateEntity(props: SavedSearchParams): SavedSearch;

      /**
             * Constructor for `SavedSearches`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {SavedSearches} A new `SavedSearches` instance.
             *
             * 
             */
      constructor(service: Service, namespace?: Namespace);
    }

    /**
     * Represents a specific storage password, which you can then view, modify, and
     * remove.
     *
     * @endpoint storage/passwords/{name}
     * @class StoragePassword
     * @extends Entity
     */
    export class StoragePassword extends Entity<StoragePassword> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
             * Constructor for `StoragePassword`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name for the new storage password.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {StoragePassword} A new `StoragePassword` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);
    }

    type StoragePasswordParams = {
      name: string;
      password: string;
      realm?: string;
    };

    /**
     * Represents a collection of storage passwords. You can create and list storage
     * passwords using this collection container, or get a specific storage password.
     *
     * @endpoint storage/passwords
     * @class StoragePasswords
     * @extends Collection
     */
    export class StoragePasswords extends Collection<
      StoragePassword,
      StoragePasswordParams
    > {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;

      /**
       * Creates a local instance of a storage password.
       *
       * @param {Object} props The properties for the new storage password. For a list of available parameters,
       * see <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTaccess#POST_storage.2Fpasswords" target="_blank">
       * POST storage/passwords</a> on Splunk Developer Portal.
       * @return {StoragePassword} A new `StoragePassword` instance.
       */
      instantiateEntity(props: StoragePasswordParams): StoragePassword;

      /**
       * Constructor for `StoragePasswords`.
       *
       * @param {Service} service A `Service` instance.
       * @param {Object} namespace Namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
       *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       * @return {StoragePasswords} A new `StoragePasswords` instance.
       */
      constructor(service: Service, namespace?: Namespace);
    }

    /**
     * Represents a fired alert.
     * You can retrieve several of the fired alert's properties by
     * the corresponding function name.
     *
     * @endpoint alerts/fired_alerts/{name}
     * @class FiredAlert
     * @extends Entity
     */
    export class FiredAlert extends Entity<FiredAlert> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
       * Returns this alert's actions (such as notifying by email, running a
       * script, adding to RSS, tracking in Alert Manager, and enabling
       * summary indexing).
       *
       * @return {Array} of actions, an empty {Array} if no actions
       *
       */
      actions(): any[];
      /**
       * Returns this alert's type.
       *
       * @return {String} the alert's type.
       *
       */
      alertType(): string;
      /**
       * Indicates whether the result is a set of events (digest) or a single
       * event (per result).
       *
       * This method is available in Splunk 4.3 and later.
       *
       * @return {Boolean} true if the result is a digest, false if per result
       *
       */
      isDigestMode(): boolean;
      /**
       * Returns the rendered expiration time for this alert.
       *
       * This method is available in Splunk 4.3 and later.
       *
       * @return {String}
       *
       */
      expirationTime(): string;
      /**
       * Returns the saved search for this alert.
       *
       * @return {String} The saved search name, or {null} if not available.
       *
       */
      savedSearchName(): string;
      /**
       * Returns this alert's severity on a scale of 1 to 10, with 1 being the
       * highest severity.
       *
       * @return {Number} this alert's severity, -1 if not specified
       *
       */
      severity(): number;
      /**
       * Returns this alert's search ID (SID).
       *
       * @return {String} This alert's SID, or {null} if not available.
       *
       */
      sid(): string;
      /**
       * Returns the time this alert was triggered.
       *
       * @return {Number} This alert's trigger time, or {null} if not available.
       *
       */
      triggerTime(): number;
      /**
       * Returns this alert's rendered trigger time.
       *
       * This method is available in Splunk 4.3 and later.
       *
       * @return {String} This alert's rendered trigger time, or {null} if not available.
       *
       */
      triggerTimeRendered(): string;
      /**
       * Returns the count of triggered alerts.
       *
       * This method is available in Splunk 4.3 and later.
       *
       * @return {Number} The number of triggered alerts, or -1 if not specified.
       *
       */
      triggeredAlertCount(): number;
      /**
             * Constructor for `FiredAlert`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name for the new alert group.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {FiredAlert} A new `FiredAlert` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);
    }

    /**
     * Represents a specific alert group, which you can then view and
     * remove.
     *
     * @endpoint alerts/fired_alerts/{name}
     * @class FiredAlertGroup
     * @extends Entity
     */
    export class FiredAlertGroup extends Entity<FiredAlertGroup> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
       * Returns the `triggered_alert_count` property, the count
       * of triggered alerts.
       *
       * @return {Number} the count of triggered alerts
       *
       *
       */
      count(): number;
      /**
       * Returns fired instances of this alert, which is
       * a list of `FiredAlert` instances.
       *
       * @example
       *
       *      var alertGroup = firedAlertGroups().item("MyAlert");
       *      alertGroup.list(function(err, firedAlerts, alert) {
       *          for(var i = 0; i < firedAlerts.length; i++) {
       *              console.log("Fired alert", i, ":", firedAlerts[i].sid);
       *          }
       *      });
       *
       * @param {Function} callback A function to call when the fired alerts are retrieved: `(err, firedAlerts, alertGroup)`.
       *
       *
       */
      list(
        callback: (
          err: Error | null,
          firedAlerts: ReadonlyArray<FiredAlert>,
          alertGroup: FiredAlertGroup,
        ) => void,
      ): void;

      /**
             * Constructor for `FiredAlertGroup`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name for the new alert group.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {FiredAlertGroup} A new `FiredAlertGroup` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);
    }

    type FiredAlertGroupParams = {};

    /**
     * Represents a collection of fired alerts for a saved search. You can
     * create and list saved searches using this collection container, or
     * get a specific alert group.
     *
     * @endpoint alerts/fired_alerts
     * @class FiredAlertGroupCollection
     * @extends Collection<FiredAlertGroup>
     */
    export class FiredAlertGroupCollection extends Collection<
      FiredAlertGroup,
      FiredAlertGroupParams
    > {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;

      /**
       * Creates a local instance of an alert group.
       *
       * @param {Object} props The properties for the alert group.
       * @return {FiredAlertGroup} A new `FiredAlertGroup` instance.
       */
      instantiateEntity(props: FiredAlertGroupParams): FiredAlertGroup;

      /**
       * Suppress removing alerts via the fired alerts endpoint.
       */
      remove(): void;

      /**
             * Constructor for `FiredAlertGroupCollection`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {FiredAlertGroupCollection} A new `FiredAlertGroupCollection` instance.
             *
             * 
             */
      constructor(service: Service, namespace?: Namespace);
    }

    /**
     * Represents a specific Splunk app that you can view, modify, and
     * remove.
     *
     * @endpoint apps/local/{name}
     * @class Application
     * @extends Entity
     */
    export class Application extends Entity<Application> {
      /**
       * Indicates whether to call `fetch` after an update to get the updated
       * item.
       */
      fetchOnUpdate: boolean;

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;

      /**
       * Constructor for `Application`.
       *
       * @param {Service} service A `Service` instance.
       * @param {String} name The name of the Splunk app.
       * @return {Application} A new `Application` instance.
       */
      constructor(service: Service, name: string);

      /**
       * Retrieves the setup information for a Splunk app.
       *
       * @example
       *
       *      var app = apps().item("app");
       *      app.setup(function(err, info, search) {
       *          console.log("SETUP INFO: ", info);
       *      });
       *
       * @param {Function} callback A function to call when setup information is retrieved: `(err, info, app)`.
       *
       * @endpoint apps/local/{name}/setup
       *
       */
      setupInfo(
        callback: (err: Error | null, info: any, app: Application) => any,
      ): void;

      /**
       * Retrieves any information for an update to a locally-installed Splunk app.
       *
       * @example
       *
       *      var app = apps().item("MyApp");
       *      app.updateInfo(function(err, info, app) {
       *          console.log("UPDATE INFO: ", info);
       *      });
       *
       * @param {Function} callback A function to call when update information is retrieved: `(err, info, app)`.
       *
       * @endpoint apps/local/{name}/update
       *
       */
      updateInfo(
        callback: (err: Error | null, info: any, app: Application) => any,
      ): void;
    }

    type ApplicationParams = {
      name: String;
    } & Partial<{
      auth: String;
      author: String;
      configured: Boolean;
      description: String;
      explicit_appname: String;
      filename: Boolean;
      label: String;
      session: String;
      template: 'barebones' | 'sample_app' | string;
      update: Boolean;
      version: String;
      visible: Boolean;
    }>;

    /**
     * Represents a collection of Splunk apps. You can create and list applications
     * using this collection container, or get a specific app.
     *
     * @endpoint apps/local
     * @class Applications
     * @extends Collection
     */
    export class Applications extends Collection<
      Application,
      ApplicationParams
    > {
      /**
       * Indicates whether to call `fetch` after an entity has been created. By
       * default, the entity is not fetched because the endpoint returns
       * (echoes) the new entity.
       *
       *
       */
      fetchOnEntityCreation: boolean;
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
       * Creates a local instance of an app.
       *
       * @param {Object} props The properties for the new app. For details, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTapps#POST_apps.2Flocal" target="_blank">POST apps/local</a> endpoint in the REST API documentation.
       * @return {Application} A new `Application` instance.
       *
       *
       */
      instantiateEntity(props: ApplicationParams): Application;

      /**
       * Constructor for `Applications`.
       *
       * @param {Service} service A `Service` instance.
       * @return {Applications} A new `Applications` instance.
       */
      constructor(service: Service);
    }

    /**
     * Provides access to configuration information about the server.
     *
     * @endpoint server/info
     * @class ServerInfo
     * @extends Entity
     */
    export class ServerInfo extends Entity<ServerInfo> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      // Override for typing
      properties(): ServerInfoProperties;

      /**
       * Constructor for `ServerInfo`.
       *
       * @param {Service} service A `Service` instance.
       * @return {ServerInfo} A new `ServerInfo` instance.
       *
       */
      constructor(service: Service);
    }

    /**
     * Represents a specific Splunk user, which you can view, modify, and
     * remove.
     *
     * @endpoint authentication/users/{name}
     * @class User
     * @extends Entity
     */
    export class User extends Entity<User> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
             * Constructor for `User`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The Splunk username.
             * @return {User} A new `User` instance.
             *
             * 
             */
      constructor(service: Service, name: string);
    }

    type UserParams = {
      authString: string;
      capabilities: any[];
      defaultApp: string;
      defaultAppIsUserOverride: boolean;
      defaultAppSourceRole: string;
      email: string;
      password: string;
      realname: string;
      restart_background_jobs: boolean;
      roles: string[];
      searchId: string;
      timeAccessed: any;
      type: 'LDAP' | 'Scripted' | 'Splunk' | 'System';
      tz: string;
      username: string;
    };

    /**
     * Represents a collection of users. You can create and list users using
     * this collection container, or get a specific user.
     *
     * @endpoint authentication/users
     * @class Users
     * @extends Collection
     */
    export class Users extends Collection<User, UserParams> {
      /**
       * Indicates whether to call `fetch` after an entity has been created. By
       * default, the entity is not fetched because the endpoint returns
       * (echoes) the new entity.
       *
       *
       */
      fetchOnEntityCreation: boolean;
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of a user.
       *
       * @param {Object} props The properties for this new user. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEJ8#userauthparams" target="_blank">User authentication parameters</a> on Splunk Developer Portal.
       * @return {User} A new `User` instance.
       *
       *
       */
      instantiateEntity(props: UserParams): User;

      /**
             * Constructor for `Users`.
             *
             
             * @param {Service} service A `Service` instance.
             * @return {Users} A new `Users` instance.
             *
             * 
             */
      constructor(service: Service);

      /**
       * Creates a new user.
       *
       * **Note:** This endpoint requires a special implementation.
       *
       * @param {Object} params A dictionary of properties. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEJ8#userauthparams" target="_blank">User authentication parameters</a> on Splunk Developer Portal.
       * @param {Function} callback A function to call with the new entity: `(err, createdEntity)`.
       *
       *
       */
      create(
        params: UserParams,
        callback: (err: Error | null, createdUser: User) => void,
      ): void;
    }

    /**
     * Represents a specific Splunk view, which you can view, modify, and
     * remove.
     *
     * @endpoint data/ui/views/{name}
     * @class View
     * @extends Entity
     */
    export class View extends Entity<View> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
             * Constructor for `View`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name of the view.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {View} A new `View` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);
    }

    type ViewParams = {
      'action.email.to': string;
      'action.email': string;
      cron_schedule: string;
      description: string;
      disabled: boolean;
      is_scheduled: boolean;
      next_scheduled_time: string;
    };

    /**
     * Represents a collection of views. You can create and list views using
     * this collection container, or get a specific view.
     *
     * @endpoint data/ui/views
     * @class Views
     * @extends Collection<View>
     */
    export class Views extends Collection<View, ViewParams> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of a view.
       *
       * @param {Object} props The properties for the new view. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#POST_scheduled.2Fviews.2F.7Bname.7D" target="_blank">POST scheduled/views/{name}</a> endpoint in the REST API documentation.
       * @return {View} A new `View` instance.
       *
       *
       */
      instantiateEntity(props: any): View;

      /**
             * Constructor for `Views`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Views} A new `Views` instance.
             *
             * 
             */
      constructor(service: Service, namespace?: Namespace);
    }

    /**
     * Represents an index, which you can update and submit events to.
     *
     * @endpoint data/indexes/name
     * @class Index
     * @extends Entity
     */
    export class Index extends Entity<Index> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;

      /**
             * Constructor for `Index`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name of the index.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Index} A new `Index` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);

      /**
       * Submits an event to this index.
       *
       * @example
       *
       *      var index = indexes().item("_internal");
       *      index.submitEvent("A new event", {sourcetype: "mysourcetype"}, function(err, result, index) {
       *          console.log("Submitted event: ", result);
       *      });
       *
       * @param {String} event The text for this event.
       * @param {Object} params A dictionary of parameters for indexing:
       *    - `host` (_string_): The value to populate in the host field for events from this data input.
       *    - `host_regex` (_string_): A regular expression used to extract the host value from each event.
       *    - `source` (_string_): The source value to fill in the metadata for this input's events.
       *    - `sourcetype` (_string_): The sourcetype to apply to events from this input.
       * @param {Function} callback A function to call when the event is submitted: `(err, result, index)`.
       *
       * @endpoint receivers/simple?index={name}
       *
       */
      submitEvent(
        event: string,
        params: Params,
        callback: (err: Error | null, result: any, index: Index) => void,
      ): void;
    }

    type IndexParams = {
      assureUTF8: boolean; // that indicates whether all data retrieved from the index is in proper UTF8 encoding. When true, indexing performance is reduced. This setting is global, not per index.
      blockSignatureDatabase: string; // that specifies the name of the index that stores block signatures of events. This setting is global, not per index.
      blockSignSize: number; // that indicates how many events make up a block for block signatures. A value of 0 means block signing has been disabled for this index.
      bloomfilterTotalSizeKB: number; // that indicates the total size of all bloom filter files, in KB.
      bucketRebuildMemoryHint: string; // that contains a suggestion for the Splunk bucket rebuild process for the size of the time-series (tsidx) file to make.
      coldPath: string; // that contains the file path to the cold databases for the index.
      coldPath_expanded: string; // that contains an absolute path to the cold databases for the index.
      coldToFrozenDir: string; // that contains the destination path for the frozen archive. Use as an alternative to the "coldToFrozenScript" parameter. The "coldToFrozenDir" parameter takes precedence over "coldToFrozenScript" if both are specified.
      coldToFrozenScript: string; // that contains the destination path to the archiving script. If your script requires a program to run it (for example, python), specify the program followed by the path. The script must be in $SPLUNK_HOME/bin or one of its subdirectories.
      // compressRawdata	This parameter is ignored.
      currentDBSizeMB: number; // that indicates the total size of data stored in the index, in MB. This total includes data in the home, cold, and thawed paths.
      defaultDatabase: string; // that contains the index destination, which is used when index destination information is not available in the input data.
      disabled: boolean; // that indicates whether the index has been disabled.
      'eai:acl': string; // that contains the access control list for this input.
      'eai:attributes': string; // that contains the metadata for this input.
      enableOnlineBucketRepair: boolean; // that indicates whether to enable asynchronous online fsck bucket repair, which runs in a concurrent process with Splunk. When enabled, you do not have to wait until buckets are repaired to start Splunk. However, you might observe a slight performance degradation.
      enableRealtimeSearch: boolean; // that indicates whether real-time search is enabled. This setting is global, not per index.
      frozenTimePeriodInSecs: number; // that indicates how many seconds after which indexed data rolls to frozen.
      homePath: string; // that contains a file path to the hot and warm buckets for the index.
      homePath_expanded: string; // that contains an absolute file path to the hot and warm buckets for the index.
      indexThreads: number; // that indicates how many threads are used for indexing. This setting is global, not per index.
      isInternal: boolean; // that indicates whether the index in internal.
      lastInitTime: string; // that contains the last time the index processor was successfully initialized. This setting is global, not per index.
      maxBloomBackfillBucketAge: string; // that indicates the age of the bucket. If a warm or cold bucket is older than this time, Splunk does not create (or re-create) its bloom filter. The valid format is number followed by a time unit ("s", "m", "h", or "d"), for example "5d".
      maxConcurrentOptimizes: number; // that indicates how many concurrent optimize processes can run against a hot bucket.
      maxDataSize: string; // that indicates the maximum size for a hot bucket to reach before a roll to warm is triggered. The valid format is a number in MB, "auto" (Splunk auto-tunes this value, setting the size to 750 MB), or "auto_high_volume" (for high-volume indexes such as the main index, setting the size to 10 GB on 64-bit, and 1 GB on 32-bit systems).
      maxHotBuckets: number; // that indicates the maximum number of hot buckets that can exist per index. When this value is exceeded, Splunk rolls the least recently used (LRU) hot bucket to warm. Both normal hot buckets and quarantined hot buckets count towards this total. This setting operates independently of "maxHotIdleSecs", which can also cause hot buckets to roll.
      maxHotIdleSecs: number; // that indicates the maximum life, in seconds, of a hot bucket. When this value is exceeded, Splunk rolls the hot bucket to warm. This setting operates independently of "maxHotBuckets", which can also cause hot buckets to roll. A value of 0 turns off the idle check.
      maxHotSpanSecs: number; // that indicates the upper bound, in seconds, of the target maximum timespan of hot and warm buckets. If this value is set too small, you can get an explosion of hot and warm buckets in the file system.
      maxMemMB: number; // that indicates the amount of memory, in MB, that is allocated for indexing.
      maxMetaEntries: number; // that indicates the maximum number of unique lines in .data files in a bucket, which may help to reduce memory consumption. When set to 0, this parameter is ignored. When this value is exceeded, a hot bucket is rolled to prevent further increase.
      maxRunningProcessGroups: number; // that indicates the maximum number of processes that the indexer creates at a time. This setting is global, not per index.
      maxTime: string; // that contains the UNIX timestamp of the newest event time in the index.
      maxTimeUnreplicatedNoAcks: number; // that specifies the upper limit, in seconds, on how long an event can remain in a raw slice. This value applies only when replication is enabled for this index.
      maxTimeUnreplicatedWithAcks: number; // that specifies the upper limit, in seconds, on how long events can remain unacknowledged in a raw slice. This value applies only when acks are enabled on forwarders and replication is enabled (with clustering).
      maxTotalDataSizeMB: number; // that indicates the maximum size of an index, in MB. If an index grows larger than the maximum size, the oldest data is frozen.
      maxWarmDBCount: number; // that indicates the maximum number of warm buckets. If this number is exceeded, the warm buckets with the lowest value for their latest times are moved to cold.
      memPoolMB: number; // that indicates how much memory is given to the indexer memory pool. This setting is global, not per index.
      minRawFileSyncSecs: string; // that indicates how frequently splunkd forces a file system sync while compressing journal slices. This value can be either an integer or "disable". If set to 0, splunkd forces a file system sync after every slice has finished compressing. If set to "disable", syncing is disabled and uncompressed slices are removed as soon as compression is complete. Some file systems are very inefficient at performing sync operations, so only enable this if you are sure it is needed. During this interval, uncompressed slices are left on disk even after they are compressed, then splunkd forces a file system sync of the compressed journal and removes the accumulated uncompressed files.
      minTime: string; // that contains the UNIX timestamp of the oldest event time in the index.
      name: string; // that contains the name of the index.
      numBloomfilters: number; // that indicates how many bloom filters are created for this index.
      numHotBuckets: number; // that indicates how many hot buckets are created for this index.
      numWarmBuckets: number; // that indicates how many warm buckets are created for this index.
      partialServiceMetaPeriod: number; // that indicates how often to sync metadata, in seconds, but only for records where the sync can be done efficiently in place, without requiring a full re-write of the metadata file. Records that require a full re-write are synced at the frequency specified by "serviceMetaPeriod". When set to 0 or a value greater than "serviceMetaPeriod", metadata is not partially synced, but is synced at the frequency specified by "serviceMetaPeriod".
      quarantineFutureSecs: number; // that indicates a time, in seconds. Events with a timestamp of this value newer than "now" are dropped into a quarantine bucket. This is a mechanism to prevent main hot buckets from being polluted with fringe events.
      quarantinePastSecs: number; // that indicates a time, in seconds. Events with timestamp of this value older than "now" are dropped into a quarantine bucket. This is a mechanism to prevent the main hot buckets from being polluted with fringe events.
      rawChunkSizeBytes: number; // that indicates the target uncompressed size, in bytes, for individual raw slice in the raw data journal of the index. If set to 0, "rawChunkSizeBytes" is set to the default value. Note that this value specifies a target chunk size. The actual chunk size may be slightly larger by an amount proportional to an individual event size.
      repFactor: string; // that contains the replication factor, which is a non-negative number or "auto". This value only applies to Splunk clustering slaves.
      rotatePeriodInSecs: number; // that indicates how frequently, in seconds, to check whether a new hot bucket needs to be created, and how frequently to check if there are any warm or cold buckets that should be rolled or frozen.
      serviceMetaPeriod: number; // that indicates how frequently metadata is synced to disk, in seconds.
      summarize: boolean; // that indicates whether to omit certain index details to provide a faster response. This parameter is only used when retrieving the index collection.
      suppressBannerList: string; // that contains a list of indexes to suppress "index missing" warning banner messages for. This setting is global, not per index.
      sync: number; // that indicates how many events can trigger the indexer to sync events. This setting is global, not per index.
      syncMeta: boolean; // that indicates whether to call a sync operation before the file descriptor is closed on metadata file updates.
      thawedPath: string; // that contains the file path to the thawed (resurrected) databases for the index.
      thawedPath_expanded: string; // that contains the absolute file path to the thawed (resurrected) databases for the index.
      throttleCheckPeriod: number; // that indicates how frequently Splunk checks for index throttling condition, in seconds.
      totalEventCount: number; // that indicates the total number of events in the index.
    };

    /**
     * Represents a collection of indexes. You can create and list indexes using
     * this collection container, or get a specific index.
     *
     * @endpoint data/indexes
     * @class Indexes
     * @extends Collection<Index>
     */
    export class Indexes extends Collection<Index, IndexParams> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of an index.
       *
       * @param {Object} props The properties for the new index. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEJ3#indexparams" target="_blank">Index parameters</a> on Splunk Developer Portal.
       * @return {Index} A new `Index` instance.
       *
       *
       */
      instantiateEntity(props: any): Index;

      /**
             * Constructor for `Indexes`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Indexes} A new `Indexes` instance.
             *
             * 
             */
      constructor(service: Service, namespace?: Namespace);

      /**
       * Creates an index with the given name and parameters.
       *
       * @example
       *
       *      var indexes = indexes();
       *      indexes.create("NewIndex", {assureUTF8: true}, function(err, newIndex) {
       *          console.log("CREATED");
       *      });
       *
       * @param {String} name A name for this index.
       * @param {Object} params A dictionary of properties. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEJ3#indexparams" target="_blank">Index parameters</a> on Splunk Developer Portal.
       * @param {Function} callback A function to call with the new index: `(err, createdIndex)`.
       *
       * @endpoint data/indexes
       *
       */
      create(
        params: IndexParams,
        callback: (err: Error | null, index: Index) => void,
      ): void;
      create(
        name: string,
        params: IndexParams,
        callback: (err: Error | null, index: Index) => void,
      ): void;
    }

    /**
     * Represents a specific stanza, which you can update and remove, from a
     * configuration file.
     *
     * @endpoint configs/conf-{file}/{name}`
     * @class ConfigurationStanza
     * @extends Entity
     */
    export class ConfigurationStanza extends Entity<ConfigurationStanza> {
      /**
             * Constructor for `ConfigurationStanza`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} file The name of the configuration file.
             * @param {String} name The name of the new stanza.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {ConfigurationStanza} A new `ConfigurationStanza` instance.
             *
             * 
             */
      constructor(
        service: Service,
        file: string,
        name: string,
        namespace?: Namespace,
      );

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;
    }

    type ConfigurationStanzaParams = {
      [key: string]: any;
    };

    /**
     * Represents a collection of stanzas for a specific property file. You can
     * create and list stanzas using this collection container, or get a specific
     * stanza.
     *
     * @endpoint configs/conf-{file}
     * @class ConfigurationFile
     * @extends Collection<ConfigurationStanza>
     */
    export class ConfigurationFile extends Collection<
      ConfigurationStanza,
      ConfigurationStanzaParams
    > {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of the default stanza in a configuration file.
       * You cannot directly update the `ConfigurationStanza` returned by this function.
       *
       * This is equivalent to viewing `configs/conf-{file}/_new`.
       *
       * @return {ConfigurationStanza} A new `ConfigurationStanza` instance.
       *
       *
       */
      getDefaultStanza(): ConfigurationStanza;
      /**
       * Creates a local instance of a stanza in a configuration file.
       *
       * @param {Object} props The key-value properties for the new stanza.
       * @return {ConfigurationStanza} A new `ConfigurationStanza` instance.
       *
       *
       */
      instantiateEntity(props: any): ConfigurationStanza;
      /**
             * Constructor for `ConfigurationFile`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {String} name The name of the configuration file.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {ConfigurationFile} A new `ConfigurationFile` instance.
             *
             * 
             */
      constructor(service: Service, name: string, namespace?: Namespace);
      /**
       * Creates a stanza in this configuration file.
       *
       * @example
       *
       *      var file = configurations().item("props");
       *      file.create("my_stanza", function(err, newStanza) {
       *          console.log("CREATED");
       *      });
       *
       * @param {String} stanzaName A name for this stanza.
       * @param {Object} values A dictionary of key-value pairs to put in this stanza.
       * @param {Function} callback A function to call with the created stanza: `(err, createdStanza)`.
       *
       * @endpoint configs/conf-{file}
       *
       */
      create(
        values: ConfigurationStanzaParams,
        callback: (err: Error | null, created: ConfigurationStanza) => void,
      ): void;
      create(
        stanzaName: string,
        values: ConfigurationStanzaParams,
        callback: (err: Error | null, created: ConfigurationStanza) => void,
      ): void;
    }

    type ConfigurationFileParams = {
      [key: string]: any;
    };

    /**
     * Represents a collection of configuration files. You can create and list
     * configuration files using this collection container, or get a specific file.
     *
     * @endpoint properties
     * @class Configurations
     * @extends Collection
     */
    export class Configurations extends Collection<
      ConfigurationFile,
      ConfigurationFileParams
    > {
      /**
       * Constructor for `Configurations`.
       *
       * @param {Service} service A `Service` instance.
       * @param {Object} namespace Namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
       *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       * @return {Configurations} A new `Configurations` instance.
       *
       *
       */
      constructor(service: Service, namespace?: Namespace);

      /**
       * Indicates whether to call `fetch` after an entity has been created. By
       * default, the entity is not fetched because the endpoint returns
       * (echoes) the new entity.
       *
       *
       */
      fetchOnEntityCreation: boolean;

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Creates a local instance of a configuration file.
       *
       * @param {Object} props The properties for this configuration file.
       * @return {ConfigurationFile} A new `ConfigurationFile` instance.
       *
       *
       */
      instantiateEntity(props: ConfigurationFileParams): ConfigurationFile;

      /**
       * Creates a configuration file.
       *
       * @example
       *
       *      var configurations = configurations();
       *      configurations.create("myprops", function(err, newFile) {
       *          console.log("CREATED");
       *      });
       *
       * @param {String} filename A name for this configuration file.
       * @param {Function} callback A function to call with the new configuration file: `(err, createdFile)`.
       *
       * @endpoint properties
       *
       */
      create(
        callback: (err: Error | null, created: ConfigurationFile) => void,
      ): void;
      create(
        filename: string,
        callback: (err: Error | null, created: ConfigurationFile) => void,
      ): void;
    }

    /**
     * Represents a specific search job. You can perform different operations
     * on this job, such as reading its status, canceling it, and getting results.
     *
     * @endpoint search/jobs/{search_id}
     * @class Job
     * @extends Entity
     */
    export class Job extends Entity<Job> {
      /**
       * Constructor for `Job`.
       *
       * @param {Service} service A `Service` instance.
       * @param {String} sid The search ID for this search job.
       * @param {Object} namespace Namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
       *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       * @return {Job} A new `Job` instance.
       *
       *
       */
      constructor(service: Service, sid: string, namespace?: Namespace);

      /**
       * The search ID for this search job.
       */
      sid: string;

      name: string;

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Cancels a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.cancel(function(err) {
       *          console.log("CANCELLED");
       *      });
       *
       * @param {Function} callback A function to call when the search is done: `(err)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      cancel(callback: (...params: any[]) => any): void;

      /**
       * Disables preview generation for a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.disablePreview(function(err, job) {
       *          console.log("PREVIEW DISABLED");
       *      });
       *
       * @param {Function} callback A function to call with this search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      disablePreview(callback: (...params: any[]) => any): void;

      /**
       * Enables preview generation for a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.disablePreview(function(err, job) {
       *          console.log("PREVIEW ENABLED");
       *      });
       *
       * @param {Function} callback A function to call with this search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      enablePreview(callback: (...params: any[]) => any): void;

      /**
       * Returns the events of a search job with given parameters.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.events({count: 10}, function(err, events, job) {
       *          console.log("Fields: ", events.fields);
       *      });
       *
       * @param {Object} params The parameters for retrieving events. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#GET_search.2Fjobs.2F.7Bsearch_id.7D.2Fevents" target="_blank">GET search/jobs/{search_id}/events</a> endpoint in the REST API documentation.
       * @param {Function} callback A function to call when the events are retrieved: `(err, events, job)`.
       *
       * @endpoint search/jobs/{search_id}/events
       *
       */
      events(params: Params, callback: (...params: any[]) => any): void;

      /**
       * Finalizes a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.finalize(function(err, job) {
       *          console.log("JOB FINALIZED");
       *      });
       *
       * @param {Function} callback A function to call with the job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      finalize(callback: (...params: any[]) => any): void;

      /**
       * Returns an iterator over this search job's events or results.
       *
       * @param {String} type One of {"events", "preview", "results"}.
       * @param {Object} params A dictionary of optional parameters:
       *    - `pagesize` (_integer_): The number of items to return on each request. Defaults to as many as possible.
       * @return {Object} An iterator object with a `next(callback)` method, where `callback` is of the form `(err, results, hasMoreResults)`.
       *
       * @endpoint search/jobs/{search_id}/results
       *
       */
      iterator(type: string, params?: any): any;

      /**
       * Pauses a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.pause(function(err, job) {
       *          console.log("JOB PAUSED");
       *      });
       *
       * @param {Function} callback A function to call with the job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      pause(callback: (...params: any[]) => any): void;

      /**
       * Gets the results for a search job with given parameters.
       *
       * The callback can get `undefined` for its `results` parameter if the
       * job is not yet done. To avoid this, use the `Job.track()` method to
       * wait until the job is complete prior to fetching the results with
       * this method.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.results({count: 10}, function(err, results, job) {
       *          console.log("Fields: ", results.results);
       *      });
       *
       * @param {Object} params The parameters for retrieving search results. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#GET_search.2Fjobs.2F.7Bsearch_id.7D.2Fresults" target="_blank">GET search/jobs/{search_id}/results</a> endpoint in the REST API documentation.
       * @param {Function} callback A function to call when the results are retrieved: `(err, results, job)`.
       *
       * @endpoint search/jobs/{search_id}/results
       *
       */
      results(
        params: Params,
        callback: (
          err: Error | null,
          results: { [key: string]: any },
          job: Job,
        ) => void,
      ): void;

      /**
       * Gets the search log for this search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.searchlog(function(err, searchlog, job) {
       *          console.log(searchlog);
       *      });
       *
       * @param {Function} callback A function to call with the search log and job: `(err, searchlog, job)`.
       *
       * @endpoint search/jobs/{search_id}/search.log
       *
       */
      searchlog(callback: (...params: any[]) => any): void;

      /**
       * Sets the priority for this search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.setPriority(6, function(err, job) {
       *          console.log("JOB PRIORITY SET");
       *      });
       *
       * @param {Number} value The priority (an integer between 1-10). A higher value means a higher priority.
       * @param {Function} callback A function to call with the search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      setPriority(value: number, callback: (...params: any[]) => any): void;

      /**
       * Sets the time to live (TTL) for the search job, which is the time before
       * the search job expires after it has been completed and is still available.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.setTTL(1000, function(err, job) {
       *          console.log("JOB TTL SET");
       *      });
       *
       * @param {Number} value The time to live, in seconds.
       * @param {Function} callback A function to call with the search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      setTTL(value: number, callback: (...params: any[]) => any): void;

      /**
       * Gets the summary for this search job with the given parameters.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.summary({top_count: 5}, function(err, summary, job) {
       *          console.log("Summary: ", summary);
       *      });
       *
       * @param {Object} params The parameters for retrieving the summary. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#GET_search.2Fjobs.2F.7Bsearch_id.7D.2Fsummary" target="_blank">GET search/jobs/{search_id}/summary</a> endpoint in the REST API documentation.
       * @param {Function} callback A function to call with the summary and search job: `(err, summary, job)`.
       *
       * @endpoint search/jobs/{search_id}/summmary
       *
       */
      summary(params: Params, callback: (...params: any[]) => any): void;

      /**
       * Gets the timeline for this search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.timeline({time_format: "%c"}, function(err, job, timeline) {
       *          console.log("Timeline: ", timeline);
       *      });
       *
       * @param {Object} params The parameters for retrieving the timeline. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#GET_search.2Fjobs.2F.7Bsearch_id.7D.2Ftimeline" target="_blank">GET search/jobs/{search_id}/timeline </a> endpoint in the REST API documentation.
       * @param {Function} callback A function to call with the timeline and search job: `(err, timeline, job)`.
       *
       * @endpoint search/jobs/{search_id}/timeline
       *
       */
      timeline(params: Params, callback: (...params: any[]) => any): void;

      /**
       * Touches a search job, which means extending the expiration time of
       * the search to now plus the time to live (TTL).
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.touch(function(err) {
       *          console.log("JOB TOUCHED");
       *      });
       *
       * @param {Function} callback A function to call with the search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      touch(callback: (...params: any[]) => any): void;

      /**
       * Starts polling the status of this search job, and fires callbacks
       * upon each status change.
       *
       * @param {Object} options A dictionary of optional parameters:
       *    - `period` (_integer_): The number of milliseconds to wait between each poll. Defaults to 500.
       * @param {Object|Function} callbacks A dictionary of optional callbacks:
       *    - `ready`: A function `(job)` invoked when the job's properties first become available.
       *    - `progress`: A function `(job)` invoked whenever new job properties are available.
       *    - `done`: A function `(job)` invoked if the job completes successfully. No further polling is done.
       *    - `failed`: A function `(job)` invoked if the job fails executing on the server. No further polling is done.
       *    - `error`: A function `(err)` invoked if an error occurs while polling. No further polling is done.
       * Or, if a function `(job)`, equivalent to passing it as a `done` callback.
       *
       *
       */
      track(
        options: any,
        callbacks:
          | Partial<{
              ready: (job: Job) => void;
              progress: (job: Job) => void;
              done: (job: Job) => void;
              failed: (job: Job) => void;
              error: (
                err: Error | null,
                done: (...args: any[]) => void,
              ) => void;
            }>
          | ((job: Job) => void),
      ): void;

      /**
       * Resumes a search job.
       *
       * @example
       *
       *      var job = jobs().item("mysid");
       *      job.unpause(function(err) {
       *          console.log("JOB UNPAUSED");
       *      });
       *
       * @param {Function} callback A function to call with the search job: `(err, job)`.
       *
       * @endpoint search/jobs/{search_id}/control
       *
       */
      unpause(callback: (...params: any[]) => any): void;

      /**
       * Gets the preview results for a search job with given parameters.
       *
       * @example
       *
       *      var job = service.jobs().item("mysid");
       *      job.preview({count: 10}, function(err, results, job) {
       *          console.log("Fields: ", results.fields);
       *      });
       *
       * @param {Object} params The parameters for retrieving preview results. For a list of available parameters, see the <a href="http://docs.splunk.com/Documentation/Splunk/latest/RESTAPI/RESTsearch#GET_search.2Fjobs.2F.7Bsearch_id.7D.2Fresults_preview" target="_blank">GET search/jobs/{search_id}/results_preview</a> endpoint in the REST API documentation.
       * @param {Function} callback A function to call when the preview results are retrieved : `(err, results, job)`.
       *
       * @endpoint search/jobs/{search_id}/results_preview
       */
      preview(params: {}, callback: (...params: any[]) => any): void;
    }

    /**
     * Represents a collection of search jobs. You can create and list search
     * jobs using this collection container, or get a specific search job.
     *
     * @endpoint search/jobs
     * @class Jobs
     * @extends Collection
     */
    export class Jobs extends Collection<Job, JobParams> {
      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       */
      path(): string;

      /**
       * Creates a local instance of a job.
       *
       * @param {Object} props The properties for this new job. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * @return {Job} A new `Job` instance.
       *
       *
       */
      instantiateEntity(props: any): Job;

      /**
             * Constructor for `Jobs`.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} namespace Namespace information:
             *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
             *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
             *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
             * @return {Jobs} A new `Jobs` instance.
             *
             * 
             */
      constructor(service: Service, namespace?: Namespace);

      /**
       * Creates a search job with a given search query and optional parameters, including `exec_mode` to specify the type of search:
       *
       *    - Use `exec_mode=normal` to return a search job ID immediately (default).
       *      Poll for completion to find out when you can retrieve search results.
       *
       *    - Use `exec_mode=blocking` to return the search job ID when the search has finished.
       *
       * To run a oneshot search, which does not create a job but rather returns the search results, use `Jobs.oneshotSearch`.
       *
       * @example
       *
       *      var jobs = jobs();
       *      jobs.search("search ERROR", {id: "myjob_123"}, function(err, newJob) {
       *          console.log("CREATED": newJob.sid);
       *      });
       *
       * @param {String} query The search query.
       * @param {Object} params A dictionary of properties for the search job. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * **Note:** This method throws an error if the `exec_mode=oneshot` parameter is passed in with the properties dictionary.
       * @param {Function} callback A function to call with the new search job: `(err, createdJob)`.
       *
       * @endpoint search/jobs
       *
       */
      search(
        query: string,
        params: SearchParams,
        callback: (err: Error | null, job: Job) => void,
      ): void;

      /**
       * Creates a oneshot search from a given search query and parameters.
       *
       * @example
       *
       *      var jobs = jobs();
       *      jobs.oneshotSearch("search ERROR", {id: "myjob_123"}, function(err, results) {
       *          console.log("RESULT FIELDS": results.fields);
       *      });
       *
       * @param {String} query The search query.
       * @param {Object} params A dictionary of properties for the search:
       *    - `output_mode` (_string_): Specifies the output format of the results (XML, JSON, or CSV).
       *    - `earliest_time` (_string_): Specifies the earliest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
       *    - `latest_time` (_string_): Specifies the latest time in the time range to search. The time string can be a UTC time (with fractional seconds), a relative time specifier (to now), or a formatted time string.
       *    - `rf` (_string_): Specifies one or more fields to add to the search.
       * @param {Function} callback A function to call with the results of the search: `(err, results)`.
       *
       * @endpoint search/jobs
       *
       */
      oneshotSearch(
        query: string,
        params: OneshotSearchParams,
        callback: (err: Error | null, results: Results) => void,
      ): void;

      /**
       * Creates a search job with a given search query and optional parameters, including `exec_mode` to specify the type of search:
       *
       *    - Use `exec_mode=normal` to return a search job ID immediately (default).
       *      Poll for completion to find out when you can retrieve search results.
       *
       *    - Use `exec_mode=blocking` to return the search job ID when the search has finished.
       *
       * To run a oneshot search, which does not create a job but rather returns the search results, use `Jobs.oneshotSearch`.
       *
       * @param {String} query The search query.
       * @param {Object} params A dictionary of properties for the search job. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * @param {Function} callback A function to call with the created job: `(err, createdJob)`.
       *
       * @endpoint search/jobs
       *
       */
      create(
        params: JobParams,
        callback: (err: Error | null, job: Job) => void,
      ): void;
      create(
        query: string,
        params: JobParams,
        callback: (err: Error | null, job: Job) => void,
      ): void;

      /**
       * Creates a search job with a given search query and optional parameters, including `exec_mode` to specify the type of search:
       *
       *    - Use `exec_mode=normal` to return a search job ID immediately (default).
       *      Poll for completion to find out when you can retrieve search results.
       *
       *    - Use `exec_mode=blocking` to return the search job ID when the search has finished.
       *
       * To run a oneshot search, which does not create a job but rather returns the search results, use `Jobs.oneshotSearch`.
       *
       * @param {String} query The search query.
       * @param {Function} callback A function to call with the created job: `(err, createdJob)`.
       *
       * @endpoint search/jobs
       *
       */
      create(
        query: string,
        callback: (err: Error | null, job: Job) => void,
      ): void;
    }

    /**
     * Represents a field of a data model object.
     * This is a helper class for `DataModelCalculation`
     * and `DataModelObject`.
     *
     * Has these properties:
     *    - `fieldName` (_string_): The name of this field.
     *    - `displayName` (_string_):  A human readable name for this field.
     *    - `type` (_string_): The type of this field.
     *    - `multivalued` (_boolean_): Whether this field is multivalued.
     *    - `required` (_boolean_): Whether this field is required.
     *    - `hidden` (_boolean_): Whether this field should be displayed in a data model UI.
     *    - `editable` (_boolean_): Whether this field can be edited.
     *    - `comment` (_string_): A comment for this field, or `null` if there isn't one.
     *    - `fieldSearch` (_string_): A search query fragment for this field.
     *    - `lineage` (_array_): An array of strings of the lineage of the data model
     *          on which this field is defined.
     *    - `owner` (_string_): The name of the data model object on which this field is defined.
     *
     * Possible types for a data model field:
     *    - `string`
     *    - `boolean`
     *    - `number`
     *    - `timestamp`
     *    - `objectCount`
     *    - `childCount`
     *    - `ipv4`
     *
     * @class DataModelField
     */
    export class DataModelField {
      /**
       * Constructor for a data model field.
       * SDK users are not expected to invoke this constructor directly.
       *
       * @param {Object} props A dictionary of properties to set:
       *     - `fieldName` (_string_): The name of this field.
       *     - `displayName` (_string_): A human readable name for this field.
       *     - `type` (_string_): The type of this field, see valid types in class docs.
       *     - `multivalue` (_boolean_): Whether this field is multivalued.
       *     - `required` (_boolean_): Whether this field is required on events in the object
       *     - `hidden` (_boolean_): Whether this field should be displayed in a data model UI.
       *     - `editable` (_boolean_): Whether this field can be edited.
       *     - `comment` (_string_): A comment for this field, or `null` if there isn't one.
       *     - `fieldSearch` (_string_): A search query fragment for this field.
       *     - `lineage` (_string_): The lineage of the data model object on which this field
       *          is defined, items are delimited by a dot. This is converted into an array of
       *          strings upon construction.
       */
      constructor(props: any);

      /**
       * Is this data model field of type string?
       *
       * @return {Boolean} True if this data model field is of type string.
       *
       *
       */
      isString(): boolean;

      /**
       * Is this data model field of type number?
       *
       * @return {Boolean} True if this data model field is of type number.
       *
       *
       */
      isNumber(): boolean;

      /**
       * Is this data model field of type timestamp?
       *
       * @return {Boolean} True if this data model field is of type timestamp.
       *
       *
       */
      isTimestamp(): boolean;

      /**
       * Is this data model field of type object count?
       *
       * @return {Boolean} True if this data model field is of type object count.
       *
       *
       */
      isObjectcount(): boolean;

      /**
       * Is this data model field of type child count?
       *
       * @return {Boolean} True if this data model field is of type child count.
       *
       *
       */
      isChildcount(): boolean;

      /**
       * Is this data model field of type ipv4?
       *
       * @return {Boolean} True if this data model field is of type ipv4.
       *
       *
       */
      isIPv4(): boolean;

      /**
       * Is this data model field of type boolean?
       *
       * @return {Boolean} True if this data model field is of type boolean.
       *
       *
       */
      isBoolean(): boolean;
    }

    /**
     * Represents a constraint on a `DataModelObject` or a `DataModelField`.
     *
     * Has these properties:
     *    - `query` (_string_): The search query defining this data model constraint.
     *    - `lineage` (_array_): The lineage of this data model constraint.
     *    - `owner` (_string_): The name of the data model object that owns
     *          this data model constraint.
     *
     * @class DataModelConstraint
     */
    export class DataModelConstraint {
      /**
       * Constructor for a data model constraint.
       * SDK users are not expected to invoke this constructor directly.
       *
       * @param {Object} props A dictionary of properties to set:
       *     - `search` (_string_): The Splunk search query this constraint specifies.
       *     - `owner` (_string_): The lineage of the data model object that owns this
       *          constraint, items are delimited by a dot. This is converted into
       *          an array of strings upon construction.
       *
       *
       */
      constructor(props: { search?: string; owner?: string });
    }

    /**
     * Used for specifying a calculation on a `DataModelObject`.
     *
     * Has these properties:
     *    - `id` (_string_): The ID for this data model calculation.
     *    - `type` (_string_): The type of this data model calculation.
     *    - `comment` (_string_|_null_): The comment for this data model calculation, or `null`.
     *    - `editable` (_boolean_): True if this calculation can be edited, false otherwise.
     *    - `lineage` (_array_): The lineage of the data model object on which this calculation
     *          is defined in an array of strings.
     *    - `owner` (_string_): The data model that this calculation belongs to.
     *    - `outputFields` (_array_): The fields output by this calculation.
     *
     * The Rex and Eval types have an additional property:
     *    - `expression` (_string_): The expression to use for this calculation.
     *
     * The Rex and GeoIP types have an additional property:
     *    - `inputField` (_string_): The field to use for calculation.
     *
     * The Lookup type has additional properties:
     *    - `lookupName` (_string_): The name of the lookup to perform.
     *    - `inputFieldMappings` (_object_): The mappings from fields in the events to fields in the lookup.
     *
     * Valid types of calculations are:
     *    - `Lookup`
     *    - `Eval`
     *    - `GeoIP`
     *    - `Rex`
     *
     * @class DataModelCalculation
     */
    export class DataModelCalculation {
      /**
       * Constructor for a data model calculation.
       * SDK users are not expected to invoke this constructor directly.
       *
       * @param {Object} props A dictionary of properties to set:
       *     - `calculationID` (_string_): The ID of this calculation.
       *     - `calculationType` (_string_): The type of this calculation, see class docs for valid types.
       *     - `editable` (_boolean_): Whether this calculation can be edited.
       *     - `comment` (_string_): A comment for this calculation, or `null` if there isn't one.
       *     - `owner` (_string_): The lineage of the data model object on which this calculation
       *          is defined, items are delimited by a dot. This is converted into an array of
       *          strings upon construction.
       *     - `outputFields` (_array_): An array of the fields this calculation generates.
       *     - `expression` (_string_): The expression to use for this calculation; exclusive to `Eval` and `Rex` calculations (optional)
       *     - `inputField` (_string_): The field to use for calculation; exclusive to `GeoIP` and `Rex` calculations (optional)
       *     - `lookupName` (_string_): The name of the lookup to perform; exclusive to `Lookup` calculations (optional)
       *     - `inputFieldMappings` (_array_): One element array containing an object with the mappings from fields in the events to fields
       *         in the lookup; exclusive to `Lookup` calculations (optional)
       *
       *
       */
      constructor(props: any);
      /**
       * Returns an array of strings of output field names.
       *
       * @return {Array} An array of strings of output field names.
       *
       *
       */
      outputFieldNames(): string[];
      /**
       * Is this data model calculation editable?
       *
       * @return {Boolean} True if this data model calculation is editable.
       *
       *
       */
      isEditable(): boolean;
      /**
       * Is this data model calculation of type lookup?
       *
       * @return {Boolean} True if this data model calculation is of type lookup.
       *
       *
       */
      isLookup(): boolean;
      /**
       * Is this data model calculation of type eval?
       *
       * @return {Boolean} True if this data model calculation is of type eval.
       *
       *
       */
      isEval(): boolean;
      /**
       * Is this data model calculation of type Rex?
       *
       * @return {Boolean} True if this data model calculation is of type Rex.
       *
       *
       */
      isRex(): boolean;
      /**
       * Is this data model calculation of type GeoIP?
       *
       * @return {Boolean} True if this data model calculation is of type GeoIP.
       *
       *
       */
      isGeoIP(): boolean;
    }

    /**
     * Pivot represents data about a pivot report returned by the Splunk Server.
     *
     * Has these properties:
     *    - `service` (_Service_): A `Service` instance.
     *    - `search` (_string_): The search string for running the pivot report.
     *    - `drilldownSearch` (_string_): The search for running this pivot report using drilldown.
     *    - `openInSearch` (_string_): Equivalent to search parameter, but listed more simply.
     *    - `prettyQuery` (_string_): Equivalent to `openInSearch`.
     *    - `pivotSearch` (_string_): A pivot search command based on the named data model.
     *    - `tstatsSearch` (_string_): The search for running this pivot report using tstats.
     *
     * @class Pivot
     */
    export class Pivot {
      /**
             * Constructor for a pivot.
             * SDK users are not expected to invoke this constructor directly.
             *
             
             * @param {Service} service A `Service` instance.
             * @param {Object} props A dictionary of properties to set:
             *    - `search` (_string_): The search string for running the pivot report.
             *    - `drilldown_search` (_string_): The search for running this pivot report using drilldown.
             *    - `open_in_search` (_string_): Equivalent to search parameter, but listed more simply.
             *    - `pivot_search` (_string_): A pivot search command based on the named data model.
             *    - `tstats_search` (_string_|_null_): The search for running this pivot report using tstats, null if acceleration is disabled.
             *
             * 
             */
      constructor(service: Service, props: any);
      /**
       * Starts a search job running this pivot, accelerated if possible.
       *
       * @param {Object} args A dictionary of properties for the search job (optional). For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * **Note:** This method throws an error if the `exec_mode=oneshot` parameter is passed in with the properties dictionary.
       * @param {Function} callback A function to call when done creating the search job: `(err, job)`.
       *
       */
      run(args: any, callback: (...params: any[]) => any): void;
    }

    /**
     * PivotSpecification represents a pivot to be done on a particular data model object.
     * The user creates a PivotSpecification on some data model object, adds filters, row splits,
     * column splits, and cell values, then calls the pivot method to query splunkd and
     * get a set of SPL queries corresponding to this specification.
     *
     * Call the `pivot` method to query Splunk for SPL queries corresponding to this pivot.
     *
     * This class supports a fluent API, each function except `static init`, `toJsonObject` & `pivot`
     * return the modified `PivotSpecification` instance.
     *
     * @example
     *     dataModels().fetch(function(err, dataModels) {
     *         var searches = dataModels.item("internal_audit_logs").objectByName("searches");
     *         var pivotSpecification = searches.createPivotSpecification();
     *         pivotSpecification
     *             .addRowSplit("user", "Executing user")
     *             .addRangeColumnSplit("exec_time", {limit: 4})
     *             .addCellValue("search", "Search Query", "values")
     *             .pivot(function(err, pivot) {
     *                 console.log("Got a Pivot object from the Splunk server!");
     *             });
     *     });
     *
     * Has these properties:
     *    - `dataModelObject` (_DataModelObject_): The `DataModelObject` from which
     *        this `PivotSpecification` was created.
     *    - `columns` (_array_): The column splits on this `PivotSpecification`.
     *    - `rows` (_array_): The row splits on this `PivotSpecification`.
     *    - `filters` (_array_): The filters on this `PivotSpecification`.
     *    - `cells` (_array_): The cell aggregations for this`PivotSpecification`.
     *    - `accelerationNamespace` (_string_|_null_): The name of the `DataModel` that owns the `DataModelObject`
     *        on which this `PivotSpecification` was created if the `DataModel` is accelerated. Alternatively,
     *        you can set this property manually to the sid of an acceleration job in the format `sid=<sid>`.
     *
     * Valid comparison types are:
     *    - `boolean`
     *    - `string`
     *    - `number`
     *    - `ipv4`
     *
     * Valid boolean comparisons are:
     *    - `=`
     *    - `is`
     *    - `isNull`
     *    - `isNotNull`
     *
     * Valid string comparisons are:
     *    - `=`
     *    - `is`
     *    - `isNull`
     *    - `isNotNull`
     *    - `contains`
     *    - `doesNotContain`
     *    - `startsWith`
     *    - `endsWith`
     *    - `regex`
     *
     * Valid number comparisons are:
     *    - `=`
     *    - `!=`
     *    - `<`
     *    - `>`
     *    - `<=`
     *    - `>=`
     *    - `is`
     *    - `isNull`
     *    - `isNotNull`
     *
     * Valid ipv4 comparisons are:
     *    - `is`
     *    - `isNull`
     *    - `isNotNull`
     *    - `contains`
     *    - `doesNotContain`
     *    - `startsWith`
     *
     * Valid binning values are:
     *    - `auto`
     *    - `year`
     *    - `month`
     *    - `day`
     *    - `hour`
     *    - `minute`
     *    - `second`
     *
     * Valid sort directions are:
     *    - `ASCENDING`
     *    - `DECENDING`
     *    - `DEFAULT`
     *
     * Valid stats functions are:
     *    - `list`
     *    - `values`
     *    - `first`
     *    - `last`
     *    - `count`
     *    - `dc`
     *    - `sum`
     *    - `average`
     *    - `max`
     *    - `min`
     *    - `stdev`
     *    - `duration`
     *    - `earliest`
     *    - `latest`
     *
     * @class PivotSpecification
     */
    export class PivotSpecification {
      /**
             * Constructor for a pivot specification.
             *
             
             * @param {DataModel} parentDataModel The `DataModel` that owns this data model object.
             *
             * 
             */
      constructor(parentDataModel: DataModel);
      /**
       * Set the acceleration cache for this pivot specification to a job,
       * usually generated by createLocalAccelerationJob on a DataModelObject
       * instance, as the acceleration cache for this pivot specification.
       *
       * @param {String|Job} sid The sid of an acceleration job,
       *     or, a `Job` instance.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      setAccelerationJob(sid: string | Job): PivotSpecification;
      /**
       * Add a filter on a boolean valued field. The filter will be a constraint of the form
       * `field `comparison` compareTo`, for example: `is_remote = false`.
       *
       * @param {String} fieldName The name of field to filter on
       * @param {String} comparisonType The type of comparison, see class docs for valid types.
       * @param {String} comparisonOp The comparison, see class docs for valid comparisons, based on type.
       * @param {String} compareTo The value to compare the field to.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addFilter(
        fieldName: string,
        comparisonType: string,
        comparisonOp: string,
        compareTo: string,
      ): PivotSpecification;
      /**
       * Add a limit on the events shown in a pivot by sorting them according to some field, then taking
       * the specified number from the beginning or end of the list.
       *
       * @param {String} fieldName The name of field to filter on.
       * @param {String} sortAttribute The name of the field to use for sorting.
       * @param {String} sortDirection The direction to sort events, see class docs for valid types.
       * @param {String} limit The number of values from the sorted list to allow through this filter.
       * @param {String} statsFunction The stats function to use for aggregation before sorting, see class docs for valid types.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addLimitFilter(
        fieldName: string,
        sortAttribute: string,
        sortDirection: string,
        limit: string,
        statsFunction: string,
      ): PivotSpecification;
      /**
       * Add a row split on a numeric or string valued field, splitting on each distinct value of the field.
       *
       * @param {String} fieldName The name of field to split on.
       * @param {String} label A human readable name for this set of rows.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addRowSplit(fieldName: string, label: string): PivotSpecification;
      /**
       * Add a row split on a numeric field, splitting into numeric ranges.
       *
       * This split generates bins with edges equivalent to the
       * classic loop 'for i in <start> to <end> by <step>' but with a maximum
       * number of bins <limit>. This dispatches to the stats and xyseries search commands.
       * See their documentation for more details.
       *
       * @param {String} fieldName The field to split on.
       * @param {String} label A human readable name for this set of rows.
       * @param {Object} options An optional dictionary of collection filtering and pagination options:
       *    - `start` (_integer_): The value of the start of the first range, or null to take the lowest value in the events.
       *    - `end` (_integer_): The value for the end of the last range, or null to take the highest value in the events.
       *    - `step` (_integer_): The the width of each range, or null to have Splunk calculate it.
       *    - `limit` (_integer_): The maximum number of ranges to split into, or null for no limit.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addRangeRowSplit(
        fieldName: string,
        label: string,
        options: any,
      ): PivotSpecification;
      /**
       * Add a row split on a boolean valued field.
       *
       * @param {String} fieldName The name of field to split on.
       * @param {String} label A human readable name for this set of rows.
       * @param {String} trueDisplayValue A string to display in the true valued row label.
       * @param {String} falseDisplayValue A string to display in the false valued row label.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addBooleanRowSplit(
        fieldName: string,
        label: string,
        trueDisplayValue: string,
        falseDisplayValue: string,
      ): PivotSpecification;
      /**
       * Add a row split on a timestamp valued field, binned by the specified bucket size.
       *
       * @param {String} fieldName The name of field to split on.
       * @param {String} label A human readable name for this set of rows.
       * @param {String} binning The size of bins to use, see class docs for valid types.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addTimestampRowSplit(
        fieldName: string,
        label: string,
        binning: string,
      ): PivotSpecification;
      /**
       * Add a column split on a string or number valued field, producing a column for
       * each distinct value of the field.
       *
       * @param {String} fieldName The name of field to split on.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addColumnSplit(fieldName: string): PivotSpecification;
      /**
       * Add a column split on a numeric field, splitting the values into ranges.
       *
       * @param {String} fieldName The field to split on.
       * @param {Object} options An optional dictionary of collection filtering and pagination options:
       *    - `start` (_integer_): The value of the start of the first range, or null to take the lowest value in the events.
       *    - `end` (_integer_): The value for the end of the last range, or null to take the highest value in the events.
       *    - `step` (_integer_): The the width of each range, or null to have Splunk calculate it.
       *    - `limit` (_integer_): The maximum number of ranges to split into, or null for no limit.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addRangeColumnSplit(
        fieldName: string,
        options: Partial<{
          start: number;
          end: number;
          step: number;
          limit: number;
        }>,
      ): PivotSpecification;

      /**
       * Add a column split on a boolean valued field.
       *
       * @param {String} fieldName The name of field to split on.
       * @param {String} trueDisplayValue A string to display in the true valued column label.
       * @param {String} falseDisplayValue A string to display in the false valued column label.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addBooleanColumnSplit(
        fieldName: string,
        trueDisplayValue: string,
        falseDisplayValue: string,
      ): PivotSpecification;
      /**
       * Add a column split on a timestamp valued field, binned by the specified bucket size.
       *
       * @param {String} fieldName The name of field to split on.
       * @param {String} binning The size of bins to use, see class docs for valid types.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addTimestampColumnSplit(
        fieldName: string,
        binning: string,
      ): PivotSpecification;
      /**
       * Add an aggregate to each cell of the pivot.
       *
       * @param {String} fieldName The name of field to aggregate.
       * @param {String} label a human readable name for this aggregate.
       * @param {String} statsFunction The function to use for aggregation, see class docs for valid stats functions.
       * @return {PivotSpecification} The updated pivot specification.
       *
       *
       */
      addCellValue(
        fieldName: string,
        label: string,
        statsFunction: string,
      ): PivotSpecification;
      /**
       * Returns a JSON ready object representation of this pivot specification.
       *
       * @return {Object} The JSON ready object representation of this pivot specification.
       *
       *
       */
      toJsonObject(): any;
      /**
       * Query Splunk for SPL queries corresponding to a pivot report
       * for this data model, defined by this `PivotSpecification`.
       *
       * @example
       *
       *      dataModels().fetch(function(err, dataModels) {
       *          var searches = dataModels.item("internal_audit_logs").objectByName("searches");
       *          var pivotSpec = searches.createPivotSpecification();
       *          // Use of the fluent API
       *          pivotSpec.addRowSplit("user", "Executing user")
       *              .addRangeColumnSplit("exec_time", {start: 0, end: 12, step: 5, limit: 4})
       *              .addCellValue("search", "Search Query", "values")
       *              .pivot(function(pivotErr, pivot) {
       *                  console.log("Pivot search is:", pivot.search);
       *              });
       *      });
       *
       * @param {Function} callback A function to call when done getting the pivot: `(err, pivot)`.
       *
       *
       */
      pivot(callback: (...params: any[]) => any): void;
      /**
       * Convenience method to wrap up the `PivotSpecification.pivot()` and
       * `Pivot.run()` function calls.
       *
       * Query Splunk for SPL queries corresponding to a pivot report
       * for this data model, defined by this `PivotSpecification`; then,
       * starts a search job running this pivot, accelerated if possible.
       *
       *      dataModels().fetch(function(fetchErr, dataModels) {
       *          var searches = dataModels.item("internal_audit_logs").objectByName("searches");
       *          var pivotSpec = searches.createPivotSpecification();
       *          // Use of the fluent API
       *          pivotSpec.addRowSplit("user", "Executing user")
       *              .addRangeColumnSplit("exec_time", {start: 0, end: 12, step: 5, limit: 4})
       *              .addCellValue("search", "Search Query", "values")
       *              .run(function(err, job, pivot) {
       *                  console.log("Job SID is:", job.sid);
       *                  console.log("Pivot search is:", pivot.search);
       *              });
       *      });
       * @param {Object} args A dictionary of properties for the search job (optional). For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * **Note:** This method throws an error if the `exec_mode=oneshot` parameter is passed in with the properties dictionary.
       * @param {Function} callback A function to call when done getting the pivot: `(err, job, pivot)`.
       *
       *
       */
      run(args: any, callback: (...params: any[]) => any): void;

      /**
       * Convenience method to wrap up the `PivotSpecification.pivot()` and
       * `Pivot.run()` function calls.
       *
       * Query Splunk for SPL queries corresponding to a pivot report
       * for this data model, defined by this `PivotSpecification`; then,
       * starts a search job running this pivot, accelerated if possible.
       *
       *      dataModels().fetch(function(fetchErr, dataModels) {
       *          var searches = dataModels.item("internal_audit_logs").objectByName("searches");
       *          var pivotSpec = searches.createPivotSpecification();
       *          // Use of the fluent API
       *          pivotSpec.addRowSplit("user", "Executing user")
       *              .addRangeColumnSplit("exec_time", {start: 0, end: 12, step: 5, limit: 4})
       *              .addCellValue("search", "Search Query", "values")
       *              .run(function(err, job, pivot) {
       *                  console.log("Job SID is:", job.sid);
       *                  console.log("Pivot search is:", pivot.search);
       *              });
       *      });
       * **Note:** This method throws an error if the `exec_mode=oneshot` parameter is passed in with the properties dictionary.
       * @param {Function} callback A function to call when done getting the pivot: `(err, job, pivot)`.
       *
       *
       */
      run(callback: (...params: any[]) => any): void;
    }

    /**
     * Represents one of the structured views in a `DataModel`.
     *
     * Has these properties:
     *    - `dataModel` (_DataModel_): The `DataModel` to which this `DataModelObject` belongs.
     *    - `name` (_string_): The name of this `DataModelObject`.
     *    - `displayName` (_string_): The human readable name of this `DataModelObject`.
     *    - `parentName` (_string_): The name of the parent `DataModelObject` to this one.
     *    - `lineage` (_array_): An array of strings of the lineage of the data model
     *          on which this field is defined.
     *    - `fields` (_object_): A dictionary of `DataModelField` objects, accessible by name.
     *    - `constraints` (_array_): An array of `DataModelConstraint` objects.
     *    - `calculations` (_object_): A dictionary of `DataModelCalculation` objects, accessible by ID.
     *
     * BaseSearch has an additional property:
     *    - `baseSearch` (_string_): The search query wrapped by this data model object.
     *
     * BaseTransaction has additional properties:
     *    - `groupByFields` (_string_): The fields that will be used to group events into transactions.
     *    - `objectsToGroup` (_array_): Names of the data model objects that should be unioned
     *        and split into transactions.
     *    - `maxSpan` (_string_): The maximum time span of a transaction.
     *    - `maxPause` (_string_): The maximum pause time of a transaction.
     *
     * @class DataModelObject
     */
    export class DataModelObject {
      displayName: string;
      dataModel: DataModel;
      parentName: string;
      lineage: string[];
      fields: { [name: string]: DataModelField };
      constraints: DataModelConstraint[];
      calculations: { [name: string]: DataModelCalculation };
      name: string;

      /**
             * Constructor for a data model object.
             * SDK users are not expected to invoke this constructor directly.
             *
             
             * @param {Object} props A dictionary of properties to set:
             *     - `objectName` (_string_): The name for this data model object.
             *     - `displayName` (_string_): A human readable name for this data model object.
             *     - `parentName` (_string_): The name of the data model that owns this data model object.
             *     - `lineage` (_string_): The lineage of the data model that owns this data model object,
             *          items are delimited by a dot. This is converted into an array of
             *          strings upon construction.
             *     - `fields` (_array_): An array of data model fields.
             *     - `constraints` (_array_): An array of data model constraints.
             *     - `calculations` (_array_): An array of data model calculations.
             *     - `baseSearch` (_string_): The search query wrapped by this data model object; exclusive to BaseSearch (optional)
             *     - `groupByFields` (_array_): The fields that will be used to group events into transactions; exclusive to BaseTransaction (optional)
             *     - `objectsToGroup` (_array_): Names of the data model objects that should be unioned
             *         and split into transactions; exclusive to BaseTransaction (optional)
             *     - `maxSpan` (_string_): The maximum time span of a transaction; exclusive to BaseTransaction (optional)
             *     - `maxPause` (_string_): The maximum pause time of a transaction; exclusive to BaseTransaction (optional)
             *
             * @param {DataModel} parentDataModel The `DataModel` that owns this data model object.
             *
             * 
             */
      constructor(props: any, parentDataModel: DataModel);

      /**
       * Is this data model object a BaseSearch?
       *
       * @return {Boolean} Whether this data model object is the root type, BaseSearch.
       *
       *
       */
      isBaseSearch(): boolean;

      /**
       * Is this data model object is a BaseTransaction?
       *
       * @return {Boolean} Whether this data model object is the root type, BaseTransaction.
       *
       *
       */
      isBaseTransaction(): boolean;

      /**
       * Returns a string array of the names of this data model object's fields.
       *
       * @return {Array} An array of strings with the field names of this
       * data model object.
       *
       *
       */
      fieldNames(): any[];

      /**
       * Returns a data model field instance, representing a field on this
       * data model object.
       *
       * @return {DataModelField|null} The data model field
       * from this data model object with the specified name, null if it the
       * field by that name doesn't exist.
       *
       *
       */
      fieldByName(): DataModelField | null;

      /**
       * Returns an array of data model fields from this data model object's
       * calculations, and this data model object's fields.
       *
       * @return {Array} An array of `splunk.DataModelField` objects
       * which includes this data model object's fields, and the fields from
       * this data model object's calculations.
       *
       *
       */
      allFields(): any[];

      /**
       * Returns a string array of the field names of this data model object's
       * calculations, and the names of this data model object's fields.
       *
       * @return {Array} An array of strings with the field names of this
       * data model object's calculations, and the names of fields on
       * this data model object.
       *
       *
       */
      allFieldNames(): any[];
      /**
       * Returns an array of data model fields from this data model object's
       * calculations.
       *
       * @return {Array} An array of `splunk.DataModelField` objects
       * of the fields from this data model object's calculations.
       *
       *
       */
      calculatedFields(): any[];
      /**
       * Returns a string array of the field names of this data model object's
       * calculations.
       *
       * @return {Array} An array of strings with the field names of this
       * data model object's calculations.
       *
       *
       */
      calculatedFieldNames(): any[];
      /**
       * Returns whether this data model object contains the field with the
       * name passed in the `fieldName` parameter.
       *
       * @param {String} fieldName The name of the field to look for.
       * @return {Boolean} True if this data model contains the field by name.
       *
       *
       */
      hasField(fieldName: string): boolean;
      /**
       * Returns a string array of the IDs of this data model object's
       * calculations.
       *
       * @return {Array} An array of strings with the IDs of this data model
       * object's calculations.
       *
       *
       */
      calculationIDs(): any[];
      /**
       * Local acceleration is tsidx acceleration of a data model object that is handled
       * manually by a user. You create a job which generates an index, and then use that
       * index in your pivots on the data model object.
       *
       * The namespace created by the job is 'sid={sid}' where {sid} is the job's sid. You
       * would use it in another job by starting your search query with `| tstats ... from sid={sid} | ...`
       *
       * The tsidx index created by this job is deleted when the job is garbage collected by Splunk.
       *
       * It is the user's responsibility to manage this job, including cancelling it.
       *
       * @example
       *
       *      dataModels().fetch(function(err, dataModels) {
       *          var object = dataModels.item("some_data_model").objectByName("some_object");
       *          object.createLocalAccelerationJob("-1d", function(err, accelerationJob) {
       *              console.log("The job has name:", accelerationJob.name);
       *          });
       *      });
       *
       * @param {String} earliestTime A time modifier (e.g., "-2w") setting the earliest time to index.
       * @param {Function} callback A function to call with the search job: `(err, accelerationJob)`.
       *
       *
       */
      createLocalAccelerationJob(
        earliestTime: string,
        callback: (...params: any[]) => any,
      ): void;
      /**
       * Start a search job that applies querySuffix to all the events in this data model object.
       *
       * @example
       *
       *      dataModels().fetch(function(err, dataModels) {
       *          var object = dataModels.item("internal_audit_logs").objectByName("searches");
       *          object.startSearch({}, "| head 5", function(err, job) {
       *              console.log("The job has name:", job.name);
       *          });
       *      });
       *
       * @param {Object} params A dictionary of properties for the search job. For a list of available parameters, see <a href="http://dev.splunk.com/view/SP-CAAAEFA#searchjobparams" target="_blank">Search job parameters</a> on Splunk Developer Portal.
       * **Note:** This method throws an error if the `exec_mode=oneshot` parameter is passed in with the properties dictionary.
       * @param {String} querySuffix A search query, starting with a '|' that will be appended to the command to fetch the contents of this data model object (e.g., "| head 3").
       * @param {Function} callback A function to call with the search job: `(err, job)`.
       *
       *
       */
      startSearch(
        params: Params,
        querySuffix: string,
        callback: (...params: any[]) => any,
      ): void;
      /**
       * Returns the data model object this one inherits from if it is a user defined,
       * otherwise return null.
       *
       * @return {DataModelObject|null} This data model object's parent
       *     or null if this is not a user defined data model object.
       *
       *
       */
      parent(): DataModelObject | null;
      /**
       * Returns a new Pivot Specification, accepts no parameters.
       *
       * @return {PivotSpecification} A new pivot specification.
       *
       *
       */
      createPivotSpecification(): PivotSpecification;
    }

    /**
     * Represents a data model on the server. Data models
     * contain `DataModelObject` instances, which specify structured
     * views on Splunk data.
     *
     * @endpoint datamodel/model/{name}
     * @class DataModel
     * @extends Entity
     */

    export class DataModel extends Entity<DataModel> {
      displayName: string;
      displayDescription: string;

      /**
           * Constructor for `DataModel`.
           *
           
           * @param {Service} service A `Service` instance.
           * @param {String} name The name for the new data model.
           * @param {Object} namespace (Optional) namespace information:
           *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
           *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
           *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
           * @param {Object} props Properties of this data model:
           *    - `acceleration` (_string_): A JSON object with an `enabled` key, representing if acceleration is enabled or not.
           *    - `concise` (_string_): Indicates whether to list a concise JSON description of the data model, should always be "0".
           *    - `description` (_string_): The JSON describing the data model.
           *    - `displayName` (_string_): The name displayed for the data model in Splunk Web.
           *
           * 
           */
      constructor(
        service: Service,
        name: string,
        namespace: Namespace,
        props?: any,
      );

      constructor(service: Service, name: string, props?: any);

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;
      /**
       * Returns a boolean indicating whether acceleration is enabled or not.
       *
       * @return {Boolean} true if acceleration is enabled, false otherwise.
       *
       *
       */
      isAccelerated(): boolean;
      /**
       * Returns a data model object from this data model
       * with the specified name if it exists, null otherwise.
       *
       * @return {Object|null} a data model object.
       *
       *
       */
      objectByName(name: string): DataModelObject | null;
      /**
       * Returns a boolean of whether this exists in this data model or not.
       *
       * @return {Boolean} Returns true if this data model has object with specified name, false otherwise.
       *
       *
       */
      hasObject(): boolean;
      /**
       * Updates the data model on the server, used to update acceleration settings.
       *
       * @param {Object} props A dictionary of properties to update the object with:
       *     - `acceleration` (_object_): The acceleration settings for the data model.
       *         Valid keys are: `enabled`, `earliestTime`, `cronSchedule`.
       *         Any keys not set will be pulled from the acceleration settings already
       *         set on this data model.
       * @param {Function} callback A function to call when the data model is updated: `(err, dataModel)`.
       *
       *
       */
      update(
        props: any,
        callback: (err: Error | null, dataModel: DataModel) => void,
      ): void;
    }

    type DataModelParams = { [key: string]: any };

    /**
     * Represents a collection of data models. You can create and
     * list data models using this collection container, or
     * get a specific data model.
     *
     * @endpoint datamodel/model
     * @class DataModels
     * @extends Collection
     */
    export class DataModels extends Collection<DataModel, DataModelParams> {
      /**
       * Creates a new `DataModel` object with the given name and parameters.
       * It is preferred that you create data models through the Splunk
       * Enterprise with a browser.
       *
       * @param {String} name The name of the data model to create. If it contains spaces they will be replaced
       *     with underscores.
       * @param {Object} params A dictionary of properties.
       * @param {Function} callback A function to call with the new `DataModel` object: `(err, createdDataModel)`.
       *
       *
       */
      create(
        name: string,
        params: DataModelParams,
        callback: (err: Error | null, dataModel: DataModel) => void,
      ): void;

      /**
       * @deprecated
       * DO NOT USE THIS METHOD.
       *
       * @param {Object} params A dictionary of properties.
       * @param {Function} callback A function to call with the new `DataModel` object: `(err, createdDataModel)`.
       *
       */
      create(
        params: DataModelParams,
        callback: (err: Error | null, created: DataModel) => void,
      ): void;

      /**
       * Retrieves the REST endpoint path for this resource (with no namespace).
       *
       *
       */
      path(): string;

      /**
       * Constructor for `DataModels`.
       *
       * @param {Service} service A `Service` instance.
       * @param {Object} namespace (Optional) namespace information:
       *    - `owner` (_string_): The Splunk username, such as "admin". A value of "nobody" means no specific user. The "-" wildcard means all users.
       *    - `app` (_string_): The app context for this resource (such as "search"). The "-" wildcard means all apps.
       *    - `sharing` (_string_): A mode that indicates how the resource is shared. The sharing mode can be "user", "app", "global", or "system".
       *
       *
       */
      constructor(service: Service, namespace?: Namespace);
      /**
                     * Constructor for `DataModel`.
                     *
                     
                     * @param {Object} props A dictionary of properties used to create a
                     * `DataModel` instance.
                     * @return {DataModel} A new `DataModel` instance.
                     *
                     * 
                     */
      instantiateEntity(props: any): DataModel;
    }
  }
}
