declare module goog.net {

    /**
     * Interface for the common parts of XMLHttpRequest.
     *
     * Mostly copied from externs/w3c_xml.js.
     *
     * @interface
     * @see http://www.w3.org/TR/XMLHttpRequest/
     */
    interface XhrLike {
        
        /**
         * @type {function()|null|undefined}
         * @see http://www.w3.org/TR/XMLHttpRequest/#handler-xhr-onreadystatechange
         */
        onreadystatechange: (() => any)|void|void;
        
        /**
         * @type {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsetext-attribute
         */
        responseText: string;
        
        /**
         * @type {Document}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsexml-attribute
         */
        responseXML: Document;
        
        /**
         * @type {number}
         * @see http://www.w3.org/TR/XMLHttpRequest/#readystate
         */
        readyState: number;
        
        /**
         * @type {number}
         * @see http://www.w3.org/TR/XMLHttpRequest/#status
         */
        status: number;
        
        /**
         * @type {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#statustext
         */
        statusText: string;
        
        /**
         * @param {string} method
         * @param {string} url
         * @param {?boolean=} opt_async
         * @param {?string=} opt_user
         * @param {?string=} opt_password
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-open()-method
         */
        open(method: string, url: string, opt_async?: boolean, opt_user?: string, opt_password?: string): void;
        
        /**
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=} opt_data
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-send()-method
         */
        send(opt_data?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string): void;
        
        /**
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-abort()-method
         */
        abort(): void;
        
        /**
         * @param {string} header
         * @param {string} value
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader()-method
         */
        setRequestHeader(header: string, value: string): void;
        
        /**
         * @param {string} header
         * @return {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
         */
        getResponseHeader(header: string): string;
        
        /**
         * @return {string}
         * @see http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders()-method
         */
        getAllResponseHeaders(): string;
    }
}

declare module goog.net.XhrLike {

    /**
     * Typedef that refers to either native or custom-implemented XHR objects.
     * @typedef {!goog.net.XhrLike|!XMLHttpRequest}
     */
    type OrNative = goog.net.XhrLike|XMLHttpRequest;
}
