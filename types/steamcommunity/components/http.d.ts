import { Callback } from '../index';

export interface Http {
    /**
     * All arguments are optional, but you need one of uri and options. If uri isn't provided, then either options.uri or options.url must be defined with the request URI.
     * The options object will be passed to the request module (if provided). If you don't specify a method in options, then it will default to GET.
     *
     * @param uri Optional. A string containing the request URI.
     * @param options Optional. An object containing request options (this object will be passed to the request module).
     * @param callback Optional. Called when the request completes.
     * @param source Optional (but highly encouraged). A string which is passed to hooks as the source value.
     * @param args
     */
    httpRequest(uri?: string, options?: any, callback?: Callback, source?: string, ...args: any[]): void;

    /**
     * Convenience method which performs a GET request.
     * @param args
     */
    httpRequestGet(...args: any[]): any;

    /**
     * Convenience method which performs a POST request.
     * @param args
     */
    httpRequestPost(...args: any[]): any;
}
