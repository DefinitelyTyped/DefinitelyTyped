// Type definitions for Google Page Speed Online Api
// Project: https://developers.google.com/api-client-library/javascript/reference/referencedocs
// Definitions by: Gabriel Garcia <https://github.com/garciat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module gapi.auth {
    /**
     * The OAuth 2.0 token object represents the OAuth 2.0 token and any associated data.
     */
    interface OAuth2Token {
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
     * Initiates the OAuth 2.0 authorization process. The browser displays a
     * popup window prompting the user authenticate and authorize. After the
     * user authorizes, the popup closes and the callback function fires.
     */
    export function authorize(
        params: {
            /**
             * The application's client ID.
             */
            client_id: string,
            
            /**
             * The auth scope or scopes to authorize as a space-delimited string
             * or array (deprecated). Auth scopes for individual APIs can be found
             * in their documentation.
             */
            scope: string | string[],
            
            /**
             * If true, then login uses "immediate mode", which means that the
             * token is refreshed behind the scenes, and no UI is shown to the user.
             */
            immediate: boolean,
            
            /**
             * The OAuth 2.0 response type property.
             */
            response_type?: string
        },
        callback: (token: OAuth2Token) => any
    ): void;
    
    /**
     * Initializes the authorization feature.
     * 
     * Call this when the client loads to prevent popup blockers from blocking
     * the auth window on gapi.auth.authorize calls.
     * 
     * Note: Calling gapi.auth.authorize({immediate: true}) when the client
     * loads achieves the same effect. If your application does an
     * immediate-mode check, gapi.auth.init should be omitted entirely.
     */
    export function init(callback: () => any): void;
    
    /**
     * Retrieves the OAuth 2.0 token for the application.
     */
    export function getToken(): OAuth2Token;
    
    /**
     * Sets the OAuth 2.0 token for the application.
     */
    export function setToken(token: OAuth2Token): void;
}

declare module gapi.client {
    interface HttpRequest<T> {
        execute(
            callback: (
                response: ApiResponse<T>,
                
                rawResponse: string
            ) => any
        ): void;
        
        then<U>(
            onFulfilled?: (result: HttpResponse<T>) => U,
            
            onRejected?: (error: HttpResponse<boolean>) => U,
            
            context?: any
        ): void;
    }
    
    interface HttpResponse<T> {
        result: T;
        
        body: string;
        
        headers?: { [name: string]: string };
        
        status?: number;
        
        statusText?: string;
    }
    
    interface ApiResponse<T> {
        error?: ApiErrorResult;
        
        result?: T;
    }
    
    interface ApiErrorResult {
        code: number;
        
        message: string;
        
        errors: ApiError[]
    }
    
    interface ApiError {
        domain: string;
        
        reason: string;
        
        message: string;
        
        locationType?: string;
        
        locatin?: string;
    }
    
    interface Batch {
        add<T>(
            request: HttpRequest<T>,
            params?: {
                /**
                 * Identifies the response for this request in the map of batch responses.
                 * If one is not provided, the system generates a random ID.
                 */
                id?: string,
                
                callback?: (
                    /**
                     * The response for this request only.
                     */
                    individualResponse: ApiResponse<T>,
                    
                    /**
                     * The raw batch ID-response map as a string.
                     * It contains all responses to all requests in the batch.
                     */
                    rawBatchResponse: string
                ) => any;
            }
        ): void;
        
        execute(
            callback: (
                responseMap: { [requestId: string]: ApiResponse<any> },
                
                rawBatchResponse: string
            ) => any
        ): void;
        
        then<U>(
            onFulfilled?: (result: { [requestId: string]: HttpResponse<any> }) => U,
            
            onRejected?: (error: HttpResponse<boolean>) => U,
            
            context?: any
        ): void;
    }
    
    /**
     * Loads the client library interface to a particular API.
     * 
     * The loaded API interface will be in the form gapi.client.api.collection.method.
     */
    export function load(
        /**
         * The name of the API to load.
         */
        name: string,
        
        /**
         * The version of the API to load.
         */
        version: string,
        
        /**
         * (optional) the function that is called once the API interface is loaded.
         * If not provided, a promise is returned.
         */
        callback?: () => any
    ): { then(callback: () => any): void };
    
    /**
     * Loads the client library interface to a particular API.
     * 
     * The loaded API interface will be in the form gapi.client.api.collection.method.
     */
    export function load(
        /**
         * The name of the API to load.
         */
        name: string,
        
        /**
         * The version of the API to load.
         */
        version: string,
        
        /**
         * The function that is called once the API interface is loaded.
         */
        callback: () => any
    ): void;
    
    /**
    * Creates a HTTP request for making RESTful requests.
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
        params?: { [key: string]: string },
        /**
         * Additional HTTP request headers
         */
        headers?: { [key: string]: string },
        /**
         * The HTTP request body (applies to PUT or POST).
         */
        body?: any;
    }): HttpRequest<any>;
    
    export function newBatch(args: {
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
        params?: { [key: string]: string },
        /**
         * Additional HTTP request headers
         */
        headers?: { [key: string]: string },
        /**
         * The HTTP request body (applies to PUT or POST).
         */
        body?: any;
    }): Batch;
    
    /**
     * Sets the API key for the application
     */
    export function setApiKey(apiKey: string): void;
}