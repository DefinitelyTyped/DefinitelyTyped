declare module goog {
    function require(name: 'goog.net.HttpStatus'): typeof goog.net.HttpStatus;
}

declare module goog.net {

    /**
     * HTTP Status Codes defined in RFC 2616 and RFC 6585.
     * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     * @see http://tools.ietf.org/html/rfc6585
     * @enum {number}
     */
    type HttpStatus = number;
    var HttpStatus: {
        CONTINUE: HttpStatus;
        SWITCHING_PROTOCOLS: HttpStatus;
        OK: HttpStatus;
        CREATED: HttpStatus;
        ACCEPTED: HttpStatus;
        NON_AUTHORITATIVE_INFORMATION: HttpStatus;
        NO_CONTENT: HttpStatus;
        RESET_CONTENT: HttpStatus;
        PARTIAL_CONTENT: HttpStatus;
        MULTIPLE_CHOICES: HttpStatus;
        MOVED_PERMANENTLY: HttpStatus;
        FOUND: HttpStatus;
        SEE_OTHER: HttpStatus;
        NOT_MODIFIED: HttpStatus;
        USE_PROXY: HttpStatus;
        TEMPORARY_REDIRECT: HttpStatus;
        BAD_REQUEST: HttpStatus;
        UNAUTHORIZED: HttpStatus;
        PAYMENT_REQUIRED: HttpStatus;
        FORBIDDEN: HttpStatus;
        NOT_FOUND: HttpStatus;
        METHOD_NOT_ALLOWED: HttpStatus;
        NOT_ACCEPTABLE: HttpStatus;
        PROXY_AUTHENTICATION_REQUIRED: HttpStatus;
        REQUEST_TIMEOUT: HttpStatus;
        CONFLICT: HttpStatus;
        GONE: HttpStatus;
        LENGTH_REQUIRED: HttpStatus;
        PRECONDITION_FAILED: HttpStatus;
        REQUEST_ENTITY_TOO_LARGE: HttpStatus;
        REQUEST_URI_TOO_LONG: HttpStatus;
        UNSUPPORTED_MEDIA_TYPE: HttpStatus;
        REQUEST_RANGE_NOT_SATISFIABLE: HttpStatus;
        EXPECTATION_FAILED: HttpStatus;
        PRECONDITION_REQUIRED: HttpStatus;
        TOO_MANY_REQUESTS: HttpStatus;
        REQUEST_HEADER_FIELDS_TOO_LARGE: HttpStatus;
        INTERNAL_SERVER_ERROR: HttpStatus;
        NOT_IMPLEMENTED: HttpStatus;
        BAD_GATEWAY: HttpStatus;
        SERVICE_UNAVAILABLE: HttpStatus;
        GATEWAY_TIMEOUT: HttpStatus;
        HTTP_VERSION_NOT_SUPPORTED: HttpStatus;
        NETWORK_AUTHENTICATION_REQUIRED: HttpStatus;
        QUIRK_IE_NO_CONTENT: HttpStatus;

        /**
         * Returns whether the given status should be considered successful.
         *
         * Successful codes are OK (200), CREATED (201), ACCEPTED (202),
         * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),
         * and IE's no content code (1223).
         *
         * @param {number} status The status code to test.
         * @return {boolean} Whether the status code should be considered successful.
         */
        isSuccess: (status: number) => boolean;
    };
}
