import { NavigationInfo } from "./browsingContextTypes";

/**
 * Represents the navigation parameters used in network requests.
 */
export interface NavigationParameters {
    context: string;
    navigation: string;
    timestamp: number;
    url: string;
}

/**
 * Represents the possible values for the SameSite attribute of a cookie.
 * @enum {string}
 */
export declare const SameSite: {
    readonly STRICT: "strict";
    readonly LAX: "lax";
    readonly NONE: "none";
    readonly DEFAULT: "default";
    /**
     * Finds a SameSite value by name
     * @param {string} name - The name to look up
     * @returns {string|null} The matching SameSite value or null if not found
     */
    findByName(name: string): string | null;
};

/**
 * Represents a BytesValue object.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-BytesValue.
 */
export declare class BytesValue {
    static readonly Type: {
        readonly STRING: "string";
        readonly BASE64: "base64";
    };
    /**
     * Creates a new BytesValue instance.
     * @param {string} type - The type of the BytesValue.
     * @param {string} value - The value of the BytesValue.
     */
    constructor(type: string, value: string);

    /**
     * Gets the type of the BytesValue.
     * @returns {string} The type of the BytesValue.
     */
    get type(): string;

    /**
     * Gets the value of the BytesValue.
     * @returns {string} The value of the BytesValue.
     */
    get value(): string;

    /**
     * Converts the BytesValue to a map.
     * @returns {Map<string, string>} A map representation of the BytesValue.
     */
    asMap(): Map<string, string>;
}

/**
 * Represents a header with a name and value.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-Header.
 */
export declare class Header {
    /**
     * Creates a new Header instance.
     * @param {string} name - The name of the header.
     * @param {BytesValue} value - The value of the header.
     * @throws {Error} If the value is not an instance of BytesValue.
     */
    constructor(name: string, value: BytesValue);

    /**
     * Gets the name of the header.
     * @returns {string} The name of the header.
     */
    get name(): string;

    /**
     * Gets the value of the header.
     * @returns {BytesValue} The value of the header.
     */
    get value(): BytesValue;
}

/**
 * Represents a cookie.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-Cookie.
 */
export declare class Cookie {
    constructor(
        name: string,
        value: BytesValue,
        domain: string,
        path: string,
        size: number,
        httpOnly: boolean,
        secure: boolean,
        sameSite: string,
        expires?: number,
    );

    /**
     * Gets the name of the cookie.
     * @returns {string} The name of the cookie.
     */
    get name(): string;

    /**
     * Gets the value of the cookie.
     * @returns {BytesValue} The value of the cookie.
     */
    get value(): BytesValue;

    /**
     * Gets the domain of the cookie.
     * @returns {string} The domain of the cookie.
     */
    get domain(): string;

    /**
     * Gets the path of the cookie.
     * @returns {string} The path of the cookie.
     */
    get path(): string;

    /**
     * Gets the expiration date of the cookie.
     * @returns {number} The expiration date of the cookie.
     */
    get expires(): number | undefined;

    /**
     * Gets the size of the cookie.
     * @returns {number} The size of the cookie.
     */
    get size(): number;

    /**
     * Checks if the cookie is HTTP-only.
     * @returns {boolean} True if the cookie is HTTP-only, false otherwise.
     */
    get httpOnly(): boolean;

    /**
     * Checks if the cookie is secure.
     * @returns {boolean} True if the cookie is secure, false otherwise.
     */
    get secure(): boolean;

    /**
     * Gets the same-site attribute of the cookie.
     * @returns {string} The same-site attribute of the cookie.
     */
    get sameSite(): string;
}

/**
 * Represents the time of each part of the request.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-FetchTimingInfo.
 */
export interface FetchTimingInfo {
    /** The origin time. */
    originTime: number;
    /** The request time. */
    requestTime: number;
    /** The timestamp when the redirect started. */
    redirectStart: number;
    /** The timestamp when the redirect ended. */
    redirectEnd: number;
    /** The timestamp when the fetch started. */
    fetchStart: number;
    /** The timestamp when the domain lookup started. */
    dnsStart: number;
    /** The timestamp when the domain lookup ended. */
    dnsEnd: number;
    /** The timestamp when the connection started. */
    connectStart: number;
    /** The timestamp when the connection ended. */
    connectEnd: number;
    /** The timestamp when the secure connection started. */
    tlsStart: number;
    /** The timestamp when the request started. */
    requestStart: number;
    /** The timestamp when the response started. */
    responseStart: number;
    /** The timestamp when the response ended. */
    responseEnd: number;
}

/**
 * Represents the data of a network request.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-RequestData.
 */
export interface RequestData {
    /** The request id. */
    request: string;
    /** The URL of the request. */
    url: string;
    /** The HTTP method of the request. */
    method: string;
    /** The headers of the request. */
    headers: Header[];
    /** The cookies of the request. */
    cookies: Cookie[];
    /** The size of the headers in bytes. */
    headersSize: number;
    /** The size of the request body in bytes. */
    bodySize: number;
    /** The timing information of the request. */
    timings: FetchTimingInfo;
}

/**
 * Represents the base parameters for a network request.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-BaseParameters.
 */
export interface BaseParameters {
    /** The browsing context ID of the network request. */
    id: string;
    /** The navigation information associated with the network request, or null if not available. */
    navigation: NavigationInfo | null;
    /** The number of redirects that occurred during the network request. */
    redirectCount: number;
    /** The request data for the network request. */
    request: RequestData;
    /** The timestamp of the network request. */
    timestamp: number;
}

/**
 * Represents source in the network.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-Initiator.
 */
export interface Initiator {
    /** The type of the initiator. */
    type: string;
    /** The column number. */
    columnNumber: number;
    /** The line number. */
    lineNumber: number;
    /** The stack trace. */
    stackTrace: string;
    /** The request ID. */
    request: string;
}

/**
 * Represents the BeforeRequestSent event parameters.
 * Described in https://w3c.github.io/webdriver-bidi/#event-network-beforeSendRequest.
 */
export declare class BeforeRequestSent implements BaseParameters {
    /** The browsing context ID of the network request. */
    id: string;
    /** The navigation information associated with the network request, or null if not available. */
    navigation: NavigationInfo | null;
    /** The number of redirects that occurred during the network request. */
    redirectCount: number;
    /** The request data for the network request. */
    request: RequestData;
    /** The timestamp of the network request. */
    timestamp: number;

    constructor(
        id: string,
        navigation: NavigationParameters | null,
        redirectCount: number,
        request: RequestData,
        timestamp: number,
        initiator: Initiator,
    );

    /**
     * Get the initiator of the request.
     * @returns {Initiator} The initiator object.
     */
    get initiator(): Initiator;
}

/**
 * Represents the response data received from a network request.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-ResponseData.
 */
export interface ResponseData {
    /** The URL. */
    url: string;
    /** The protocol. */
    protocol: string;
    /** The HTTP status. */
    status: number;
    /** The status text. */
    statusText: string;
    /** The value indicating whether the data is retrieved from cache. */
    fromCache: boolean;
    /** The headers object. */
    headers: Record<string, string>;
    /** The MIME type of the network resource. */
    mimeType: string;
    /** The number of bytes received. */
    bytesReceived: number;
    /** The size of the headers. */
    headerSize: number;
    /** The size of the body. */
    bodySize: number;
    /** The content. */
    content: unknown;
}

/**
 * Represents the response data received from a network request.
 * Described in https://w3c.github.io/webdriver-bidi/#type-network-ResponseData.
 */
declare class ResponseData {
    constructor(
        url: string,
        protocol: string,
        status: number,
        statusText: string,
        fromCache: boolean,
        headers: Record<string, string>,
        mimeType: string,
        bytesReceived: number,
        headersSize: number,
        bodySize: number,
        content: unknown,
    );

    /**
     * Get the URL.
     * @returns {string} The URL.
     */
    get url(): string;

    /**
     * Get the protocol.
     * @returns {string} The protocol.
     */
    get protocol(): string;

    /**
     * Get the HTTP status.
     * @returns {string} The HTTP status.
     */
    get status(): number;

    /**
     * Gets the status text.
     * @returns {string} The status text.
     */
    get statusText(): string;

    /**
     * Gets the value indicating whether the data is retrieved from cache.
     * @returns {boolean} The value indicating whether the data is retrieved from cache.
     */
    get fromCache(): boolean;

    /**
     * Get the headers.
     * @returns {Object} The headers object.
     */
    get headers(): Record<string, string>;

    /**
     * The MIME type of the network resource.
     * @returns {string} The MIME type of the network resource.
     */
    get mimeType(): string;

    /**
     * Gets the number of bytes received.
     * @returns {number} The number of bytes received.
     */
    get bytesReceived(): number;

    /**
     * Get the size of the headers.
     * @returns {number} The size of the headers.
     */
    get headerSize(): number;

    /**
     * Get the size of the body.
     * @returns {number} The size of the body.
     */
    get bodySize(): number;

    /**
     * Gets the content.
     * @returns {any} The content.
     */
    get content(): unknown;
}

/**
 * Represents the ResponseStarted event parameters.
 * Described in https://w3c.github.io/webdriver-bidi/#event-network-responseStarted.
 */
export declare class ResponseStarted extends BaseParameters {
    constructor(
        id: string,
        navigation: NavigationParameters | null,
        redirectCount: number,
        request: RequestData,
        timestamp: number,
        response: ResponseData,
    );

    /**
     * Get the response data.
     * @returns {ResponseData} The response data.
     */
    get response(): ResponseData;
}

/**
 * Represents the FetchError event parameters.
 * Described https://w3c.github.io/webdriver-bidi/#event-network-fetchError
 */
export declare class FetchError extends BaseParameters {
    /**
     * Creates a new FetchError instance.
     * @param {string} id - The ID of the error.
     * @param {string} navigation - The navigation information.
     * @param {number} redirectCount - The number of redirects.
     * @param {RequestData} request - The request object.
     * @param {number} timestamp - The timestamp of the error.
     * @param {string} errorText - The error text.
     */
    constructor(
        id: string,
        navigation: NavigationParameters | null,
        redirectCount: number,
        request: RequestData,
        timestamp: number,
        errorText: string,
    );

    /**
     * Gets the error text.
     * @returns {string} The error text.
     */
    get errorText(): string;
}
