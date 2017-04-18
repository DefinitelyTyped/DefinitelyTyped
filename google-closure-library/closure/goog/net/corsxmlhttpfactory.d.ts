declare module goog {
    function require(name: 'goog.net.CorsXmlHttpFactory'): typeof goog.net.CorsXmlHttpFactory;
    function require(name: 'goog.net.IeCorsXhrAdapter'): typeof goog.net.IeCorsXhrAdapter;
}

declare module goog.net {

    /**
     * A factory of XML http request objects that supports cross domain requests.
     * This class should be instantiated and passed as the parameter of a
     * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
     *
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class CorsXmlHttpFactory extends goog.net.XmlHttpFactory {
        constructor();
    }

    /**
     * An adapter around Internet Explorer's XDomainRequest object that makes it
     * look like a standard XMLHttpRequest. This can be used instead of
     * XMLHttpRequest to support CORS.
     *
     * @implements {goog.net.XhrLike}
     * @constructor
     * @struct
     * @final
     */
    class IeCorsXhrAdapter {
        constructor();
        
        /**
         * Opens a connection to the provided URL.
         * @param {string} method The HTTP method to use. Valid methods include GET and
         *     POST.
         * @param {string} url The URL to contact. The authority of this URL must match
         *     the authority of the current page's URL (e.g. http or https).
         * @param {?boolean=} opt_async Whether the request is asynchronous, defaulting
         *     to true. XDomainRequest does not support syncronous requests, so setting
         *     it to false will actually raise an exception.
         * @override
         */
        open(method: string, url: string, opt_async?: boolean): void;
        
        /**
         * Sends the request to the remote server. Before calling this function, always
         * call {@link open}.
         * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string)=}
         *     opt_content The content to send as POSTDATA, if any. Only string data is
         *     supported by this implementation.
         * @override
         */
        send(opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|void|string): void;
        
        /**
         * Sets a request header to send to the remote server. Because this
         * implementation does not support request headers, this function does nothing.
         * @param {string} key The name of the HTTP header to set. Ignored.
         * @param {string} value The value to set for the HTTP header. Ignored.
         * @override
         */
        setRequestHeader(key: string, value: string): void;
        
        /**
         * Returns the value of the response header identified by key. This
         * implementation only supports the 'content-type' header.
         * @param {string} key The request header to fetch. If this parameter is set to
         *     'content-type' (case-insensitive), this function returns the value of
         *     the 'content-type' request header. If this parameter is set to any other
         *     value, this function always returns an empty string.
         * @return {string} The value of the response header, or an empty string if key
         *     is not 'content-type' (case-insensitive).
         * @override
         */
        getResponseHeader(key: string): string;
        
        /**
         * Returns the response headers from the server. This implemntation only returns
         * the 'content-type' header.
         * @return {string} The headers returned from the server.
         * @override
         */
        getAllResponseHeaders(): string;
    }
}
