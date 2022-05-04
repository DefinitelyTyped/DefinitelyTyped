declare class HttpResponse {
    /**
     * Creates a HTTP Response that will be used to
     * mock out network interceptions.
     * @param {*} urlToIntercept
     */
    constructor(urlToIntercept?: any);
    returnBody: string;
    returnHeaders: any[];
    returnMethod: string;
    returnStatus: number;
    urlToIntercept: any;
    /**
     * Add headers that will be returned when we intercept
     * a HTTP Request
     * @param {*} header
     * @param {*} value
     */
    addHeaders(header: any, value: any): void;
    get headers(): any[];
    /**
     * Set the STATUS value of the returned HTTP Request
     * @param {*} value
     */
    set status(arg: any);
    get status(): any;
    /**
     * Sets the value of the body of the HTTP Request that
     * will be returned.
     * @param {*} value
     */
    set body(arg: any);
    get body(): any;
    /**
     * Sets the method of the HTTP Request
     * @param {*} value the method of the request.
     */
    set method(arg: any);
    /**
     * Returns the Method to be used in the intercept
     */
    get method(): any;
}
export {
    HttpResponse
};
