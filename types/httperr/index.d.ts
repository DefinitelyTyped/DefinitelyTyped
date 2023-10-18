/** Overall module shape, expressed as an interface. */
interface HttpErr {
    /** The base type for all httperr error types. You probably don't want to use this directly. */
    HttpError: HttpErrorStatic;

    /**
     * Creates a new error type for the given HTTP error status.
     * @param {number} status - The HTTP response status code for the HTTP error.
     * @param {string} title - A human-readable title for the HTTP error.
     * @param {Function} init - (optional) A function which will be invoked as a method of the
     *                          new error with the config argument immediately after the error
     *                          is created by the factory. Can be used to process additional
     *                          error-specific configuration parameters.
     */
    createHttpError(status: number, title: string, init?: (config: Config) => void): HttpErrorStatic;

    // Error builders by camel-cased name.
    badRequest: ErrorBuilder;
    unauthorized: ErrorBuilder;
    paymentRequired: ErrorBuilder;
    forbidden: ErrorBuilder;
    notFound: ErrorBuilder;
    methodNotAllowed: ErrorBuilder;
    notAcceptable: ErrorBuilder;
    proxyAuthenticationRequired: ErrorBuilder;
    requestTimeout: ErrorBuilder;
    conflict: ErrorBuilder;
    gone: ErrorBuilder;
    lengthRequired: ErrorBuilder;
    preconditionFailed: ErrorBuilder;
    requestEntityTooLarge: ErrorBuilder;
    requestUriTooLong: ErrorBuilder;
    unsupportedMediaType: ErrorBuilder;
    requestedRangeNotSatisfiable: ErrorBuilder;
    expectationFailed: ErrorBuilder;
    imATeapot: ErrorBuilder;
    authenticationTimeout: ErrorBuilder;
    enhanceYourCalm: ErrorBuilder;
    unprocessableEntity: ErrorBuilder;
    locked: ErrorBuilder;
    methodFailure: ErrorBuilder;
    failedDependency: ErrorBuilder;
    unorderedCollection: ErrorBuilder;
    upgradeRequired: ErrorBuilder;
    preconditionRequired: ErrorBuilder;
    tooManyRequests: ErrorBuilder;
    requestHeaderFieldsTooLarge: ErrorBuilder;
    loginTimeout: ErrorBuilder;
    noResponse: ErrorBuilder;
    retryWith: ErrorBuilder;
    blockedByWindowsParentalControls: ErrorBuilder;
    redirect: ErrorBuilder;
    unavailableForLegalReasons: ErrorBuilder;
    requestHeaderTooLarge: ErrorBuilder;
    certError: ErrorBuilder;
    noCert: ErrorBuilder;
    httpToHttps: ErrorBuilder;
    clientClosedRequest: ErrorBuilder;
    internalServerError: ErrorBuilder;
    notImplemented: ErrorBuilder;
    badGateway: ErrorBuilder;
    serviceUnavailable: ErrorBuilder;
    gatewayTimeout: ErrorBuilder;
    httpVersionNotSupported: ErrorBuilder;
    variantAlsoNegotiates: ErrorBuilder;
    insufficientStorage: ErrorBuilder;
    loopDetected: ErrorBuilder;
    bandwidthLimitExceeded: ErrorBuilder;
    notExtended: ErrorBuilder;
    networkAuthenticationRequired: ErrorBuilder;
    originError: ErrorBuilder;
    connectionTimedOut: ErrorBuilder;
    proxyDeclinedRequest: ErrorBuilder;
    aTimeoutOccured: ErrorBuilder;
    networkReadTimeoutError: ErrorBuilder;
    networkConnectTimeoutError: ErrorBuilder;

    // Error builders by title-cased name.
    BadRequest: ErrorBuilder;
    Unauthorized: ErrorBuilder;
    PaymentRequired: ErrorBuilder;
    Forbidden: ErrorBuilder;
    NotFound: ErrorBuilder;
    MethodNotAllowed: ErrorBuilder;
    NotAcceptable: ErrorBuilder;
    ProxyAuthenticationRequired: ErrorBuilder;
    RequestTimeout: ErrorBuilder;
    Conflict: ErrorBuilder;
    Gone: ErrorBuilder;
    LengthRequired: ErrorBuilder;
    PreconditionFailed: ErrorBuilder;
    RequestEntityTooLarge: ErrorBuilder;
    RequestUriTooLong: ErrorBuilder;
    UnsupportedMediaType: ErrorBuilder;
    RequestedRangeNotSatisfiable: ErrorBuilder;
    ExpectationFailed: ErrorBuilder;
    ImATeapot: ErrorBuilder;
    AuthenticationTimeout: ErrorBuilder;
    EnhanceYourCalm: ErrorBuilder;
    UnprocessableEntity: ErrorBuilder;
    Locked: ErrorBuilder;
    MethodFailure: ErrorBuilder;
    FailedDependency: ErrorBuilder;
    UnorderedCollection: ErrorBuilder;
    UpgradeRequired: ErrorBuilder;
    PreconditionRequired: ErrorBuilder;
    TooManyRequests: ErrorBuilder;
    RequestHeaderFieldsTooLarge: ErrorBuilder;
    LoginTimeout: ErrorBuilder;
    NoResponse: ErrorBuilder;
    RetryWith: ErrorBuilder;
    BlockedByWindowsParentalControls: ErrorBuilder;
    Redirect: ErrorBuilder;
    UnavailableForLegalReasons: ErrorBuilder;
    RequestHeaderTooLarge: ErrorBuilder;
    CertError: ErrorBuilder;
    NoCert: ErrorBuilder;
    HttpToHttps: ErrorBuilder;
    ClientClosedRequest: ErrorBuilder;
    InternalServerError: ErrorBuilder;
    NotImplemented: ErrorBuilder;
    BadGateway: ErrorBuilder;
    ServiceUnavailable: ErrorBuilder;
    GatewayTimeout: ErrorBuilder;
    HttpVersionNotSupported: ErrorBuilder;
    VariantAlsoNegotiates: ErrorBuilder;
    InsufficientStorage: ErrorBuilder;
    LoopDetected: ErrorBuilder;
    BandwidthLimitExceeded: ErrorBuilder;
    NotExtended: ErrorBuilder;
    NetworkAuthenticationRequired: ErrorBuilder;
    OriginError: ErrorBuilder;
    ConnectionTimedOut: ErrorBuilder;
    ProxyDeclinedRequest: ErrorBuilder;
    ATimeoutOccured: ErrorBuilder;
    NetworkReadTimeoutError: ErrorBuilder;
    NetworkConnectTimeoutError: ErrorBuilder;

    // Error builders by statusCode.
    400: ErrorBuilder;
    401: ErrorBuilder;
    402: ErrorBuilder;
    403: ErrorBuilder;
    404: ErrorBuilder;
    405: ErrorBuilder;
    406: ErrorBuilder;
    407: ErrorBuilder;
    408: ErrorBuilder;
    409: ErrorBuilder;
    410: ErrorBuilder;
    411: ErrorBuilder;
    412: ErrorBuilder;
    413: ErrorBuilder;
    414: ErrorBuilder;
    415: ErrorBuilder;
    416: ErrorBuilder;
    417: ErrorBuilder;
    418: ErrorBuilder;
    419: ErrorBuilder;
    420: ErrorBuilder;
    422: ErrorBuilder;
    423: ErrorBuilder;
    424: ErrorBuilder;
    425: ErrorBuilder;
    426: ErrorBuilder;
    428: ErrorBuilder;
    429: ErrorBuilder;
    431: ErrorBuilder;
    440: ErrorBuilder;
    444: ErrorBuilder;
    449: ErrorBuilder;
    450: ErrorBuilder;
    451: ErrorBuilder;
    494: ErrorBuilder;
    495: ErrorBuilder;
    496: ErrorBuilder;
    497: ErrorBuilder;
    499: ErrorBuilder;
    500: ErrorBuilder;
    501: ErrorBuilder;
    502: ErrorBuilder;
    503: ErrorBuilder;
    504: ErrorBuilder;
    505: ErrorBuilder;
    506: ErrorBuilder;
    507: ErrorBuilder;
    508: ErrorBuilder;
    509: ErrorBuilder;
    510: ErrorBuilder;
    511: ErrorBuilder;
    520: ErrorBuilder;
    522: ErrorBuilder;
    523: ErrorBuilder;
    524: ErrorBuilder;
    598: ErrorBuilder;
    599: ErrorBuilder;
}

/** Constructor function for the HttpError class. */
interface HttpErrorStatic {
    new(config?: string | Error | Config, extra?: {}): HttpError;
}

/** An instance of the HttpError class. */
interface HttpError extends Error {
    /** A human-readable title for the HTTP error. */
    title: string;

    code: string;

    /** The HTTP response status code for the HTTP error. */
    statusCode: number;

    toObject(...skip: (string | RegExp)[]): any;
}

/** Configuration object for constructing HttpErrors. */
interface Config {
    /** A descriptive human-readable title describing the error's cause. */
    message?: string | undefined;

    /** The underlying exception that caused the HTTP error. */
    cause?: Error | undefined;

    /** A detailed human-readable description of the error's cause and possible solutions. */
    details?: string | undefined;

    /**
     *  The methods allowed for this URL.
     *  This property is only available for 405 Method Not Allowed errors
     *  and can be used to populate the Allow header.
     */
    allowed?: string[] | undefined;

    /**
     *  The minimum delay before the request should be attempted again.
     *  This property is only available for 429 Too Many Requests and 420 Enhance Your Calm
     *  (Twitter API) errors and can be used to populate the Retry-After header.
     */
    retryAfter?: any;

    /**
     *  The parameters with which the request should be retried.
     *  This property is only available for 449 Retry With (Microsoft) errors and can be
     *  used to populate the response status message.
     */
    parameters?: any;

    /**
     *  The location for which the request should be repeated.
     *  This property is only available for 451 Redirect (Microsoft) errors and can be
     *  used to populate the proprietary X-MS-Location response header.
     */
    location?: any;
}

/** Factory function for creating an Error object. */
interface ErrorBuilder {
    /**
     *  Creates an Error object. The new keyword is optional.
     * @param {string | Error | Config} config - If config is a string, it will be treated as config.message.
     *                                           If config is an Error object, it will be treated as config.cause.
     */
    (config?: string | Error | Config): HttpError;

    /**
     *  Creates an Error object. The new keyword is optional.
     * @param {string | Error | Config} config - If config is a string, it will be treated as config.message.
     *                                           If config is an Error object, it will be treated as config.cause.
     */
    new(config?: string | Error | Config): HttpError;
}

// The module value satisfies the HttpErr interface.
declare var _: HttpErr;
export = _;
