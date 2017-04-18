// Type definitions for aurelia-http-client v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/http-client/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-path.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />


declare module 'aurelia-http-client' {
  import {
    join,
    buildQueryString
  } from 'aurelia-path';
  import {
    PLATFORM,
    DOM
  } from 'aurelia-pal';
  
  /**
   * Creates an XHR implementation.
   */
  export interface XHRConstructor {
  
  }
  
  //new():XHR;
  /**
   * Represents an XHR.
   */
  export interface XHR {
    
    /**
      * The status code of the response.
      */
    status: number;
    
    /**
      * The status text.
      */
    statusText: string;
    
    /**
      * The raw response.
      */
    response: any;
    
    /**
      * The raw response text.
      */
    responseText: string;
    
    /**
      * The load callback.
      */
    onload: Function;
    
    /**
      * The timeout callback.
      */
    ontimeout: Function;
    
    /**
      * The error callback.
      */
    onerror: Function;
    
    /**
      * The abort callback.
      */
    onabort: Function;
    
    /**
      * Aborts the request.
      */
    abort(): void;
    
    /**
      * Opens the XHR channel.
      */
    open(method: string, url: string, isAsync: boolean, user?: string, password?: string): void;
    
    /**
      * Sends the request.
      */
    send(content?: any): void;
  }
  
  /**
   * Represents an XHR transformer.
   */
  /**
   * Represents an XHR transformer.
   */
  export interface XHRTransformer {
    (client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): void;
  }
  
  /**
   * Intercepts requests, responses and errors.
   */
  export interface Interceptor {
    
    /**
    	 * Intercepts the response.
    	 */
    response?: Function;
    
    /**
    	 * Intercepts a response error.
    	 */
    responseError?: Function;
    
    /**
    	 * Intercepts the request.
    	 */
    request?: Function;
    
    /**
    	 * Intercepts a request error.
    	 */
    requestError?: Function;
  }
  
  /**
   * Transforms a request.
   */
  /**
   * Transforms a request.
   */
  export interface RequestTransformer {
    (client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage): void;
  }
  
  /**
  * Represents http request/response headers.
  */
  export class Headers {
    
    /**
      * Creates an instance of the headers class.
      * @param headers A set of key/values to initialize the headers with.
      */
    constructor(headers?: Object);
    
    /**
      * Adds a header.
      * @param key The header key.
      * @param value The header value.
      */
    add(key: string, value: string): void;
    
    /**
      * Gets a header value.
      * @param key The header key.
      * @return The header value.
      */
    get(key: string): string;
    
    /**
      * Clears the headers.
      */
    clear(): void;
    
    /**
      * Determines whether or not the indicated header exists in the collection.
      * @param key The header key to check.
      * @return True if it exists, false otherwise.
      */
    has(header: string): boolean;
    
    /**
      * Configures an XMR object with the headers.
      * @param xhr The XHRT instance to configure.
      */
    configureXHR(xhr: XHR): void;
    
    /**
       * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
       * headers according to the format described here:
       * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
       * This method parses that string into a user-friendly key/value pair object.
       * @param headerStr The string from the XHR.
       * @return A Headers instance containing the parsed headers.
       */
    static parse(headerStr: string): Headers;
  }
  
  /**
  * Represents a request message.
  */
  export class RequestMessage {
    
    /**
      * The HTTP method.
      */
    method: string;
    
    /**
      * The url to submit the request to.
      */
    url: string;
    
    /**
      * The content of the request.
      */
    content: any;
    
    /**
      * The headers to send along with the request.
      */
    headers: Headers;
    
    /**
      * The base url that the request url is joined with.
      */
    baseUrl: string;
    
    /**
      * Creates an instance of RequestMessage.
      * @param method The HTTP method.
      * @param url The url to submit the request to.
      * @param content The content of the request.
      * @param headers The headers to send along with the request.
      */
    constructor(method: string, url: string, content: any, headers?: Headers);
    
    /**
      * Builds the url to make the request from.
      * @return The constructed url.
      */
    buildFullUrl(): string;
  }
  
  /**
  * Represents a response message from an HTTP or JSONP request.
  */
  export class HttpResponseMessage {
    
    /**
      * The request message that resulted in this response.
      */
    requestMessage: RequestMessage;
    
    /**
      * The status code of the response.
      */
    statusCode: number;
    
    /**
      * The raw response.
      */
    response: any;
    
    /**
      * The success status of the request based on status code.
      */
    isSuccess: boolean;
    
    /**
      * The status text.
      */
    statusText: string;
    
    /**
      * A reviver function to use in transforming the content.
      */
    reviver: ((key: string, value: any) => any);
    
    /**
      * The mime type of the response.
      */
    mimeType: string;
    
    /**
      * The headers received with the response.
      */
    headers: Headers;
    
    /**
      * Creates an instance of HttpResponseMessage.
      * @param requestMessage The request message that resulted in this response.
      * @param xhr The XHR instance that made the request.
      * @param responseType The type of the response.
      * @param reviver A reviver function to use in transforming the content.
      */
    constructor(requestMessage: RequestMessage, xhr: XHR, responseType: string, reviver: ((key: string, value: any) => any));
    
    /**
      * Gets the content of the response.
      * @return the response content.
      */
    content: any;
  }
  
  /**
   * MimeTypes mapped to responseTypes
   *
   * @type {Object}
   */
  export let mimeTypes: any;
  
  /**
   * Processes request messages.
   */
  /**
   * Processes request messages.
   */
  export class RequestMessageProcessor {
    
    /**
       * Creates an instance of RequestMessageProcessor.
       */
    constructor(xhrType: XHRConstructor, xhrTransformers: XHRTransformer[]);
    
    /**
       * Aborts the request.
       */
    abort(): void;
    
    /**
       * Processes the request.
       * @param client The HttpClient making the request.
       * @param requestMessage The message to process.
       * @return A promise for an HttpResponseMessage.
       */
    process(client: HttpClient, requestMessage: RequestMessage): Promise<HttpResponseMessage>;
  }
  
  /**
  * Adds a timeout to the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function timeoutTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Adds a callback parameter name to the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function callbackParameterNameTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Sets withCredentials on the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function credentialsTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Adds an onprogress callback to the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function progressTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Adds a response type transformer to the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function responseTypeTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Adds headers to the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function headerTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Transforms the content of the request.
  * @param client The http client.
  * @param processor The request message processor.
  * @param message The request message.
  * @param xhr The xhr instance.
  */
  export function contentTransformer(client: HttpClient, processor: RequestMessageProcessor, message: RequestMessage, xhr: XHR): any;
  
  /**
  * Represents an JSONP request message.
  */
  export class JSONPRequestMessage extends RequestMessage {
    
    /**
      * Creates an instance of JSONPRequestMessage.
      * @param url The url to submit the request to.
      * @param callbackParameterName The name of the callback parameter that the api expects.
      */
    constructor(url: string, callbackParameterName: string);
  }
  
  /**
  * Creates a RequestMessageProcessor for handling JSONP request messages.
  * @return A processor instance for JSONP request messages.
  */
  export function createJSONPRequestMessageProcessor(): RequestMessageProcessor;
  
  /**
  * Represents an HTTP request message.
  */
  export class HttpRequestMessage extends RequestMessage {
    
    /**
      * A replacer function to use in transforming the content.
      */
    replacer: ((key: string, value: any) => any);
    
    /**
      * Creates an instance of HttpRequestMessage.
      * @param method The http method.
      * @param url The url to submit the request to.
      * @param content The content of the request.
      * @param headers The headers to send along with the request.
      */
    constructor(method: string, url: string, content: any, headers?: Headers);
  }
  
  //text, arraybuffer, blob, document
  /**
  * Creates a RequestMessageProcessor for handling HTTP request messages.
  * @return A processor instance for HTTP request messages.
  */
  export function createHttpRequestMessageProcessor(): RequestMessageProcessor;
  
  /**
   * A builder class allowing fluent composition of HTTP requests.
   */
  /**
   * A builder class allowing fluent composition of HTTP requests.
   */
  export class RequestBuilder {
    
    /**
    	 * Creates an instance of RequestBuilder
    	 * @param client An instance of HttpClient
    	 */
    constructor(client: HttpClient);
    
    /**
    	 * Makes the request a DELETE request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asDelete(): RequestBuilder;
    
    /**
    	 * Makes the request a GET request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asGet(): RequestBuilder;
    
    /**
    	 * Makes the request a HEAD request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asHead(): RequestBuilder;
    
    /**
    	 * Makes the request a OPTIONS request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asOptions(): RequestBuilder;
    
    /**
    	 * Makes the request a PATCH request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asPatch(): RequestBuilder;
    
    /**
    	 * Makes the request a POST request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asPost(): RequestBuilder;
    
    /**
    	 * Makes the request a PUT request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asPut(): RequestBuilder;
    
    /**
    	 * Makes the request a JSONP request.
    	 * @param callbackParameterName The name of the callback to use.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    asJsonp(callbackParameterName: string): RequestBuilder;
    
    /**
    	 * Sets the request url.
    	 * @param url The url to use.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withUrl(url: string): RequestBuilder;
    
    /**
    	 * Sets the request content.
    	 * @param The content to send.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withContent(content: any): RequestBuilder;
    
    /**
    	 * Sets the base url that will be prepended to the url.
    	 * @param baseUrl The base url to use.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withBaseUrl(baseUrl: string): RequestBuilder;
    
    /**
    	 * Sets params that will be added to the request url as a query string.
    	 * @param params The key/value pairs to use to build the query string.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withParams(params: Object): RequestBuilder;
    
    /**
    	 * Sets the response type.
    	 * @param responseType The response type to expect.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withResponseType(responseType: string): RequestBuilder;
    
    /**
    	 * Sets a timeout for the request.
    	 * @param timeout The timeout for the request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withTimeout(timeout: number): RequestBuilder;
    
    /**
    	 * Sets a header on the request.
    	 * @param key The header key to add.
    	 * @param value The header value to add.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withHeader(key: string, value: string): RequestBuilder;
    
    /**
    	 * Sets the withCredentials flag on the request.
    	 * @param value The value of the withCredentials flag to set.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withCredentials(value: boolean): RequestBuilder;
    
    /**
    	 * Sets the user and password to use in opening the request.
    	 * @param user The username to send.
    	 * @param password The password to send.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withLogin(user: string, password: string): RequestBuilder;
    
    /**
    	 * Sets a reviver to transform the response content.
    	 * @param reviver The reviver to use in processing the response.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withReviver(reviver: ((key: string, value: any) => any)): RequestBuilder;
    
    /**
    	 * Sets a replacer to transform the request content.
    	 * @param replacer The replacer to use in preparing the request.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withReplacer(replacer: ((key: string, value: any) => any)): RequestBuilder;
    
    /**
    	 * Sets an upload progress callback.
    	 * @param progressCallback The progress callback function.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withProgressCallback(progressCallback: Function): RequestBuilder;
    
    /**
    	 * Sets a callback parameter name for JSONP.
    	 * @param callbackParameterName The name of the callback parameter that the JSONP request requires.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withCallbackParameterName(callbackParameterName: string): RequestBuilder;
    
    /**
    	 * Adds an interceptor to the request.
    	 * @param interceptor The interceptor to add.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    withInterceptor(interceptor: Interceptor): RequestBuilder;
    
    /**
    	 * Skips the request content processing transform.
    	 * @return The chainable RequestBuilder to use in further configuration of the request.
    	 */
    skipContentProcessing(): RequestBuilder;
    
    /**
       * Adds a user-defined request transformer to the RequestBuilder.
       * @param name The name of the helper to add.
       * @param fn The helper function.
       */
    static addHelper(name: string, fn: (() => RequestTransformer)): void;
    
    /**
       * Sends the request.
       * @return {Promise} A cancellable promise object.
       */
    send(): Promise<HttpResponseMessage>;
  }
  
  /**
  * The main HTTP client object.
  */
  export class HttpClient {
    
    /**
      * Indicates whether or not the client is in the process of requesting resources.
      */
    isRequesting: boolean;
    
    /**
      * Creates an instance of HttpClient.
      */
    constructor();
    
    /**
       * Configure this HttpClient with default settings to be used by all requests.
       * @param fn A function that takes a RequestBuilder as an argument.
       */
    configure(fn: ((builder: RequestBuilder) => void)): HttpClient;
    
    /**
       * Returns a new RequestBuilder for this HttpClient instance that can be used to build and send HTTP requests.
       * @param url The target URL.
       */
    createRequest(url: string): RequestBuilder;
    
    /**
       * Sends a message using the underlying networking stack.
       * @param message A configured HttpRequestMessage or JSONPRequestMessage.
       * @param transformers A collection of transformers to apply to the HTTP request.
       * @return A cancellable promise object.
       */
    send(requestMessage: RequestMessage, transformers: Array<RequestTransformer>): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP DELETE request.
       * @param url The target URL.
       * @return A cancellable promise object.
       */
    delete(url: string): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP GET request.
       * @param url The target URL.
       * @return {Promise} A cancellable promise object.
       */
    get(url: string): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP HEAD request.
       * @param url The target URL.
       * @return A cancellable promise object.
       */
    head(url: string): Promise<HttpResponseMessage>;
    
    /**
       * Sends a JSONP request.
       * @param url The target URL.
       * @return A cancellable promise object.
       */
    jsonp(url: string, callbackParameterName?: string): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP OPTIONS request.
       * @param url The target URL.
       * @return A cancellable promise object.
       */
    options(url: string): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP PUT request.
       * @param url The target URL.
       * @param content The request payload.
       * @return A cancellable promise object.
       */
    put(url: string, content: any): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP PATCH request.
       * @param url The target URL.
       * @param content The request payload.
       * @return A cancellable promise object.
       */
    patch(url: string, content: any): Promise<HttpResponseMessage>;
    
    /**
       * Sends an HTTP POST request.
       * @param url The target URL.
       * @param content The request payload.
       * @return A cancellable promise object.
       */
    post(url: string, content: any): Promise<HttpResponseMessage>;
  }
}