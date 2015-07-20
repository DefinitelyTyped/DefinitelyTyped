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
        version: string
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
        params?: any;
        /**
         * Additional HTTP request headers
         */
        headers?: any;
        /**
         * The HTTP request body (applies to PUT or POST).
         */
        body?: any;
    }): HttpRequest<any>;
}