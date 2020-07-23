/**
 * Defines the WebApi exception errors.
 * @since 2.3
 */

export interface WebAPIException {
    /**
     * Error code
     * @since 2.3
     */
    readonly code: number;
    /**
     * Error name. The attribute must return the value it was initialized with.\
     * @since 2.3
     */
    readonly name: string;

    /**
     * Detailed error message
     * @since 2.3
     */
    readonly message: string;

    /**
     * Index is not in the allowed range
     * @since 2.3
     */
    INDEX_SIZE_ERR: 1;

    /**
     * Specified text range is too large
     * @since 2.3
     */
    DOMSTRING_SIZE_ERR: 2;

    /**
     * Operation yields an incorrect node tree
     * @since 2.3
     */
    HIERARCHY_REQUEST_ERR: 3;

    /**
     * Object is in the wrong document
     * @since 2.3
     */
    WRONG_DOCUMENT_ERR: 4;

    /**
     * String contains invalid characters
     * @since 2.3
     */
    INVALID_CHARACTER_ERR: 5;

    /**
     * Data specified for a node that does not support it
     * @since 2.3
     */
    NO_DATA_ALLOWED_ERR: 6;

    /**
     * Object cannot be modified
     * @since 2.3
     */
    NO_MODIFICATION_ALLOWED_ERR: 7;

    /**
     * Object not found
     * @since 2.3
     */
    NOT_FOUND_ERR: 8;

    /**
     * Operation not supported
     * @since 2.3
     */
    NOT_SUPPORTED_ERR: 9;

    /**
     * Specified attribute already in use
     * @since 2.3
     */
    INUSE_ATTRIBUTE_ERR: 10;

    /**
     * Object is in an invalid state
     * @since 2.3
     */
    INVALID_STATE_ERR: 11;

    /**
     * String does not match the expected pattern
     * @since 2.3
     */
    SYNTAX_ERR: 12;

    /**
     * Object cannot be modified in this way
     * @since 2.3
     */
    INVALID_MODIFICATION_ERR: 13;

    /**
     * Operation not allowed in XML namespaces
     * @since 2.3
     */
    NAMESPACE_ERR: 14;

    /**
     * Object does not support the operation or argument
     * @since 2.3
     */
    INVALID_ACCESS_ERR: 15;

    /**
     * Operation causes the node to fail validation
     * @since 2.3
     */
    VALIDATION_ERR: 16;

    /**
     * Object type does not match the expected type
     * @since 2.3
     */
    TYPE_MISMATCH_ERR: 17;

    /**
     * Operation insecure
     * @since 2.3
     */
    SECURITY_ERR: 18;

    /**
     * Network error occurred
     * @since 2.3
     */
    NETWORK_ERR: 19;

    /**
     * Operation aborted
     * @since 2.3
     */
    ABORT_ERR: 20;

    /**
     * URL provided does not match
     * @since 2.3
     */
    URL_MISMATCH_ERR: 21;

    /**
     * Quota exceeded
     * @since 2.3
     */
    QUOTA_EXCEEDED_ERR: 22;

    /**
     * Operation timed out
     * @since 2.3
     */
    TIMEOUT_ERR: 23;

    /**
     * Supplied node is incorrect or has an incorrect ancestor for this operation
     * @since 2.3
     */
    INVALID_NODE_TYPE_ERR: 24;

    /**
     * Object cannot be cloned
     * @since 2.3
     */
    DATA_CLONE_ERR: 25;

    /**
     * Input parameter contains an invalid value
     * @since 2.3
     */
    INVALID_VALUES_ERR: 26;

    /**
     * IO error
     * @since 2.3
     */
    IO_ERR: 27;

    /**
     * Service not available
     * @since 2.3
     */
    SERVICE_NOT_AVAILABLE_ERR: 28;

    /**
     * Unknown error
     * @since 2.3
     */
    UNKNOWN_ERR: 9999;
}

/**
 * Defines the data returned by asynchronous method error callbacks.
 * @since 2.3
 */

export interface WebAPIError {
    /**
     * Error code
     * @since 2.3
     */
    readonly code: number;

    /**
     * Error name. The attribute must return the value it was initialized with.
     * @since 2.3
     */
    readonly name: string;

    /**
     * Detailed error message
     * @since 2.3
     */
    readonly message: string;
}

/**
 * Defines a generic callback for methods that do not require a return value in the success callback.
 * @since 2.3
 */

export interface SuccessCallback {
    /**
     * Callback method invoked when an asynchronous call completes successfully.
     * @since 2.3
     */
    (): void;
}

/**
 * Defines a generic error callback for methods that require only the error as an input parameter in the error callback.
 * @since 2.3
 */

export interface ErrorCallback {
    /**
     * @descEng Callback method invoked if an error occurs.
     * @since 2.3
     */
    (error: WebAPIError): void;
}
