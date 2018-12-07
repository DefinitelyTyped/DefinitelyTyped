declare namespace pc {

    /**
    * @name pc.Http
    * @class Used to send and receive HTTP requests.
    * @description Create a new Http instance. Note: By default a PlayCanvas application creates an instance of this object at `pc.http`.
    */
    class Http {

        /**
         * @function
         * @name pc.Http#get
         * @description Perform an HTTP GET request to the given url.
         * @param {String} url
         * @param {Object} [options] Additional options
         * @param {Object} [options.headers] HTTP headers to add to the request
         * @param {Boolean} [options.async] Make the request asynchronously (default: true)
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
         * @param {String} [options.responseType] Override the response type
         * @param {Document | Object} [options.postdata] Data to send in the body of the request.
         * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
         * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
         * @example
         * pc.http.get("http://example.com/", function (err, response) {
         *     console.log(response);
         * });
         */
        get(url: string, options: {
            headers: {},
            async: boolean,
            cache: {},
            withCredentials: boolean,
            responseType: string,
            postData: Document | {}
        } | Function, callback?: Function): void;

        /**
         * @function
         * @name pc.Http#post
         * @description Perform an HTTP POST request to the given url
         * @param {String} url The URL to make the request to
         * @param {Object} [options] Additional options
         * @param {Object} [options.headers] HTTP headers to add to the request
         * @param {Boolean} [options.async] Make the request asynchronously (default: true)
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
         * @param {String} [options.responseType] Override the response type
         * @param {Object} data Data to send in the body of the request.
         * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
         * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
         * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
         */
        post(url: string, data: Document | {}, options: {
            headers: {},
            async: boolean,
            cache: {},
            withCredentials: boolean,
            responseType: string,
        } | Function, callback?: Function): void;

        /**
         * @function
         * @name pc.Http#put
         * @description Perform an HTTP PUT request to the given url
         * @param {String} url The URL to make the request to
         * @param {Object} [options] Additional options
         * @param {Object} [options.headers] HTTP headers to add to the request
         * @param {Boolean} [options.async] Make the request asynchronously (default: true)
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
         * @param {String} [options.responseType] Override the response type
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Document | Object} data Data to send in the body of the request.
         * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
         * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
         * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
         */
        put(url: string, data: Document | {}, options: {
            headers: {},
            async: boolean,
            cache: {},
            withCredentials: boolean,
            responseType: string,
        } | Function, callback?: Function): void;

        /**
         * @function
         * @name pc.Http#del
         * @description Perform an HTTP DELETE request to the given url
         * @param {Object} url The URL to make the request to
         * @param {Object} [options] Additional options
         * @param {Object} [options.headers] HTTP headers to add to the request
         * @param {Boolean} [options.async] Make the request asynchronously (default: true)
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
         * @param {String} [options.responseType] Override the response type
         * @param {Document | Object} [options.postdata] Data to send in the body of the request.
         * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
         * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
         * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
         */
        del(url: string, options: {
            headers: {},
            async: boolean,
            cache: {},
            withCredentials: boolean,
            responseType: string,
            postData: Document | {}
        } | Function, callback?: Function): void;

        /**
         * @function
         * @name pc.Http#request
         * @description Make a general purpose HTTP request.
         * @param {String} method The HTTP method "GET", "POST", "PUT", "DELETE"
         * @param {String} url The url to make the request to
         * @param {Object} [options] Additional options
         * @param {Object} [options.headers] HTTP headers to add to the request
         * @param {Boolean} [options.async] Make the request asynchronously (default: true)
         * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
         * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
         * @param {String} [options.responseType] Override the response type
         * @param {Document|Object} [options.postdata] Data to send in the body of the request.
         * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
         * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
         * @param {Function} callback The callback used when the response has retured. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
         */
        request(method: string, url: string, options: {
            headers: {},
            async: boolean,
            cache: {},
            withCredentials: boolean,
            responseType: string,
            postData: Document | {}
        } | Function, callback?: Function): void;
    }
}
