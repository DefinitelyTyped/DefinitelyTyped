/**
 * ServiceUsageError is thrown when either service usage limit has been reached or credentials quota has been exhausted.
 */
export class ServiceUsageError extends Error {
    constructor(message: any, requestTrackingId: any, statusCode: any, errorCode: any);
    requestTrackingId: any;
    statusCode: any;
    errorCode: any;
    /**
     * Returns the HTTP Status code or {@link DEFAULT_STATUS_CODE} if the status code doesn't adequately represent the error.
     */
    getStatusCode(): number;
    /**
     * Returns the Error code or {@link DEFAULT_ERROR_CODE} if the error code doesn't adequately represent the error.
     */
    getErrorCode(): string;
    /**
     * Returns the detailed message of this error.
     */
    getMessage(): string;
    /**
     * Returns the Request ID (the value of the X-Request-ID header).
     */
    getRequestTrackingId(): string;
}
