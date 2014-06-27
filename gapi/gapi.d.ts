// Type definitions for Google API Client
// Project: https://code.google.com/p/google-api-javascript-client/
// Definitions by: Frank M <https://github.com/sgtfrankieboy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
 * The OAuth 2.0 token object represents the OAuth 2.0 token and any associated data.
 */
interface GoogleApiOAuth2TokenObject {
    /**
     * The OAuth 2.0 token. Only present in successful responses
     */
    access_token: string;
    /**
     * Details about the error. Only present in error responses
     */
    error: string;
    /**
     * The duration, in seconds, the token is valid for. Only present in successful responses
     */
    expires_in: string;
    /**
     * The Google API scopes related to this token
     */
    state: string;
}

declare module gapi.auth {
    /**
     * Initiates the OAuth 2.0 authorization process. The browser displays a popup window prompting the user authenticate and authorize. After the user authorizes, the popup closes and the callback function fires.
     * @param params A key/value map of parameters for the request. If the key is not one of the expected OAuth 2.0 parameters, it is added to the URI as a query parameter.
     * @param callback The function to call once the login process is complete. The function takes an OAuth 2.0 token object as its only parameter.
     */
    export function authorize(params: {
        /**
         * The application's client ID.
         */
        client_id?: string;
        /**
         * If true, then login uses "immediate mode", which means that the token is refreshed behind the scenes, and no UI is shown to the user.
         */
        immediate?: boolean;
        /**
         * The OAuth 2.0 response type property. Default: token
         */
        response_type?: string;
        /**
         * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
         */
        scope?: any
    }, callback: (token: GoogleApiOAuth2TokenObject) => any): void;
    /**
     * Initializes the authorization feature. Call this when the client loads to prevent popup blockers from blocking the auth window on gapi.auth.authorize calls.
     * @param callback A callback to execute when the auth feature is ready to make authorization calls.
     */
    export function init(callback: () => any): void;
    /**
     * Retrieves the OAuth 2.0 token for the application.
     * @return The OAuth 2.0 token.
     */
    export function getToken(): GoogleApiOAuth2TokenObject;
    /**
     * Sets the OAuth 2.0 token for the application.
     * @param token The token to set.
     */
    export function setToken(token: GoogleApiOAuth2TokenObject): void;
}

declare module gapi.client {
    /**
    * Loads the client library interface to a particular API. The new API interface will be in the form gapi.client.api.collection.method.
    * @param name The name of the API to load.
    * @param version The version of the API to load
    * @param callback the function that is called once the API interface is loaded
    */
    export function load(name: string, version: string, callback?: () => any): void;
    /**
    * Creates a HTTP request for making RESTful requests.
    * An object encapsulating the various arguments for this method.
    */
    export function request(args: {
        /**
         * The URL to handle the request
         */
        path: string;
        /**
         * The HTTP request method to use. Default is GET
         */
        method?: string;
        /**
         * URL params in key-value pair form
         */
        params?: any;
        /**
         * Additional HTTP request headers
         */
        headers?: any;
        /**
         * The HTTP request body (applies to PUT or POST).
         */
        body?: any;
        /**
         * If supplied, the request is executed immediately and no gapi.client.HttpRequest object is returned
         */
        callback?: () => any;
    }): HttpRequest<any>;
    /**
    * Creates an RPC Request directly. The method name and version identify the method to be executed and the RPC params are provided upon RPC creation.
    * @param method The method to be executed.
    * @param version The version of the API which defines the method to be executed. Defaults to v1
    * @param rpcParams A key-value pair of the params to supply to this RPC
    */
    export function rpcRequest(method: string, version?: string, rpcParams?: any): RpcRequest;
    /**
    * Sets the API key for the application.
    * @param apiKey The API key to set
    */
    export function setApiKey(apiKey: string): void;

    /**
     * An object encapsulating an HTTP request. This object is not instantiated directly, rather it is returned by gapi.client.request.
     */
    export class HttpRequest<T> {
        /**
         * Executes the request and runs the supplied callback on response.
         * @param callback The callback function which executes when the request succeeds or fails.
         */
        execute(callback: (
            /**
             * contains the response parsed as JSON. If the response is not JSON, this field will be false.
             */
            jsonResp: T,
            /**
             * is the HTTP response. It is JSON, and can be parsed to an object
             */
            rawResp: {
                body: string;
                headers: any[];
                status: number;
                statusText: string;
            }
            ) => any):void;
    }
    /**
     * Represents an HTTP Batch operation. Individual HTTP requests are added with the add method and the batch is executed using execute.
     */
    export class HttpBatch {
        /**
         * Adds a gapi.client.HttpRequest to the batch.
         * @param httpRequest The HTTP request to add to this batch.
         * @param opt_params extra parameters for this batch entry.
         */
        add(httpRequest: HttpRequest<any>, opt_params?: {
            /**
             * Identifies the response for this request in the map of batch responses. If one is not provided, the system generates a random ID.
             */
            id: string;
            callback: (
            /**
             * is the response for this request only. Its format is defined by the API method being called.
             */
            individualResponse: any,
            /**
             * is the raw batch ID-response map as a string. It contains all responses to all requests in the batch.
             */
            rawBatchResponse: any
            ) => any
        }):void;
        /**
         * Executes all requests in the batch. The supplied callback is executed on success or failure.
         * @param callback The callback to execute when the batch returns.
         */
        execute(callback: (
            /**
             * is an ID-response map of each requests response.
             */
            responseMap: any,
            /**
             * is the same response, but as an unparsed JSON-string.
             */
            rawBatchResponse: string
            ) => any):void;
    }

    /**
     * Similar to gapi.client.HttpRequest except this object encapsulates requests generated by registered methods.
     */
    export class RpcRequest {

        /**
         * Executes the request and runs the supplied callback with the response.
         * @param callback The callback function which executes when the request succeeds or fails.
         */
        callback(callback: (
            /**
             * contains the response parsed as JSON. If the response is not JSON, this field will be false.
             */
            jsonResp: any,
            /**
             * is the same as jsonResp, except it is a raw string that has not been parsed. It is typically used when the response is not JSON.
             */
            rawResp: string
            ) => void ):void;
    }

}
