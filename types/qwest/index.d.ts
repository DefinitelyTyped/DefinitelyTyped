// Type definitions for qwest v1.7.0
// Project: https://github.com/pyrsmk/qwest
// Definitions by: Lindsay Evans <https://github.com/lindsayevans>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Qwest {

    interface Static {

        /** Base URI for requests. Prepended to request URIs */
        base: string;

        /** Is XHR2 supported by the browser? */
        xhr2: boolean;

        /** Sets the request limit */
        limit(by: number): void;

        /** Set default cross-domain response type for IE8/9 (defaults to 'json') */
        setDefaultXdrResponseType(type: string): void;

        /** Set XHR options before request */
        before(callback: () => any): Static;

        /**
         * Perfoms an AJAX GET request
         * @param url URL that the request is sent to
         * @param data Data to send to the server
         * @param options Configuration options for the AJAX request
         * */
        get(url: string, data?: any, options?: Options): Promise;

        /**
         * Perfoms an AJAX POST request
         * @param url URL that the request is sent to
         * @param data Data to send to the server
         * @param options Configuration options for the AJAX request
         * */
        post(url: string, data?: any, options?: Options): Promise;

        /**
         * Perfoms an AJAX PUT request
         * @param url URL that the request is sent to
         * @param data Data to send to the server
         * @param options Configuration options for the AJAX request
         * */
        put(url: string, data?: any, options?: Options): Promise;

        /**
         * Perfoms an AJAX DELETE request
         * @param url URL that the request is sent to
         * @param data Data to send to the server
         * @param options Configuration options for the AJAX request
         * */
        delete(url: string, data?: any, options?: Options): Promise;
    }

    interface Promise {
        /** Request is successful */
        then(callback: (xhr: any, response?: any) => any): Promise;

        /** Request has failed */
        catch(callback: (e: any, xhr? : any, response?: any) => any): Promise;

        /** Always run */
        complete(callback: () => any): Promise;
    }

    interface Options {

        /** post (by default), json, text, arraybuffer, blob, document or formdata */
        dataType?: string;

        /** the response type; either auto (default), json, xml, text, arraybuffer, blob or document */
        responseType?: string;

        /** browser caching; default is false for GET requests and true for POST requests */
        cache?: boolean;

        /** true (default) or false; used to make asynchronous or synchronous requests */
        async?: boolean;

        /** the user to access to the URL, if needed */
        user?: string;

        /** the password to access to the URL, if needed */
        password?: string;

        /** javascript object containing headers to be sent */
        headers?: { [key: string]: any; };

        /** false by default; sends credentials with your XHR2 request */
        withCredentials?: boolean;

        /** the timeout for the request in ms; 30000 by default */
        timeout?: number;

        /** the total number of times to attempt the request through timeouts; 1 by default; if you want to remove the limit set it to null */
        attempts?: number;

    }

}

declare module "qwest" {
    export = qwest;
}

declare var qwest: Qwest.Static;
