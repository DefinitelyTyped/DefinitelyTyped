// Type definitions for non-npm package Google API client 1.0
// Project: https://developers.google.com
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace gapi {
    /**
     * Pragmatically initialize gapi class member.
     */
    function load(api: string, callback: () => void): void;

    namespace client {
        /**
         * Loads the client library interface to a particular API. The new API interface will be in the form gapi.client.api.collection.method.
         * @param name The name of the API to load.
         * @param version The version of the API to load
         * @param callback the function that is called once the API interface is loaded
         */
        function load(name: string, version: string, callback: () => any): void;
        function load(name: string, version: string): Promise<void>;

        /**
         * Creates a HTTP request for making RESTful requests.
         * An object encapsulating the various arguments for this method.
         */
        function request(args: {
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
            // /**
            //  * If supplied, the request is executed immediately and no gapi.client.HttpRequest object is returned
            //  */
            // callback?: () => any;
        }): Request<any>;

        /**
         * Sets the API key for the application.
         * @param apiKey The API key to set
         */
        function setApiKey(apiKey: string): void;

        /**
         * An object containing information about the HTTP response
         */
        interface Response<T> {
            // The JSON-parsed result.
            result: T;

            // The raw response string.
            body: string;

            // The map of HTTP response headers.
            headers?: any[];

            // HTTP status
            status?: number;

            // HTTP status text
            statusText?: string;
        }

        /**
         * An object encapsulating an HTTP request. This object is not instantiated directly, rather it is returned by gapi.client.request.
         */
        interface Request<T> extends Promise<Response<T>> {
            /**
             * Executes the request and runs the supplied callback on response.
             * @param callback The callback function which executes when the request succeeds or fails.
             */
            execute(callback: (
                /**
                 * contains the response parsed as JSON. If the response is not JSON, this field will be false.
                 */
                response: Response<T>
            ) => any): void;
        }

        interface ResponseMap<T> {
            [id: string]: Response<T>;
        }

        /**
         * Represents an HTTP Batch operation. Individual HTTP requests are added with the add method and the batch is executed using execute.
         */
        interface Batch<T> extends Promise<Response<ResponseMap<T>>> {
            /**
             * Adds a gapi.client.Request to the batch.
             * @param request The HTTP request to add to this batch.
             * @param opt_params extra parameters for this batch entry.
             */
            add<T>(request: Request<T>, opt_params?: {
                /**
                 * Identifies the response for this request in the map of batch responses. If one is not provided, the system generates a random ID.
                 */
                id: string;
                callback(
                    /**
                     * is the response for this request only. Its format is defined by the API method being called.
                     */
                    individualResponse: Response<T>,
                    /**
                     * is the raw batch ID-response map as a string. It contains all responses to all requests in the batch.
                     */
                    rawBatchResponse: string
                ): any
            }): void;
            /**
             * Executes all requests in the batch. The supplied callback is executed on success or failure.
             * @param callback The callback to execute when the batch returns.
             */
            execute(callback: (
                /**
                 * is an ID-response map of each requests response.
                 */
                responseMap: ResponseMap<T>,
                /**
                 * is the same response, but as an unparsed JSON-string.
                 */
                rawBatchResponse: string
            ) => any): void;
        }

        /**
         * Creates a batch object for batching individual requests.
         */
        function newBatch(): Batch<any>;
    }

    namespace auth {
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

        /**
         * Initiates the OAuth 2.0 authorization process. The browser displays a popup window prompting the user authenticate and authorize.
         * After the user authorizes, the popup closes and the callback function fires.
         * @param params A key/value map of parameters for the request. If the key is not one of the expected OAuth 2.0 parameters, it is added to the
         * URI as a query parameter.
         * @param callback The function to call once the login process is complete. The function takes an OAuth 2.0 token object as its only parameter.
         */
        function authorize(
            params: {
                /**
                 * The application's client ID. Visit the Google Developers Console to get an OAuth 2.0 client ID.
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
                scope?: string | string[];
            },
            callback: (authResult: GoogleApiOAuth2TokenObject) => void): void;

        /**
         * Initializes the authorization feature. Call this when the client loads to prevent popup blockers from blocking the auth window on gapi.auth.authorize calls.
         * @param callback A callback to execute when the auth feature is ready to make authorization calls.
         */
        function init(callback: () => any): void;

        /**
         * Retrieves the OAuth 2.0 token for the application.
         * @return The OAuth 2.0 token.
         */
        function getToken(): GoogleApiOAuth2TokenObject;

        /**
         * Sets the OAuth 2.0 token for the application.
         * @param token The token to set.
         */
        function setToken(token: GoogleApiOAuth2TokenObject): void;
    }
}
