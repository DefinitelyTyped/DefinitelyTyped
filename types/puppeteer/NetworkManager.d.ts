import { EventEmitter } from "events";
import { FrameManager, Frame } from "./FrameManager";
import { JSHandle } from "./JSHandle";

export interface NetworkManager extends EventEmitter {
    setFrameManager(frameManager: FrameManager): void;
    authenticate(option: { [key: string]: string }): Promise<any>;
    extraHTTPHeaders(): { [key: string]: string };
    setOfflineMode(enabled: boolean): Promise<void>;
    setUserAgent(userAgent: string): Promise<void>;
    setCacheEnabled(enabled?: boolean): Promise<void>;
    setRequestInterception(enabled: boolean): Promise<void>;
}

/** Response class represents responses which are received by page. */
export interface Response {
    /** Promise which resolves to a buffer with response body. */
    buffer(): Promise<Buffer>;
    /** A Frame that initiated this response, or null if navigating to error pages. */
    frame(): Frame | null;
    /** True if the response was served from either the browser's disk cache or memory cache. */
    fromCache(): boolean;
    /** True if the response was served by a service worker. */
    fromServiceWorker(): boolean;
    /** An object with HTTP headers associated with the response. All header names are lower-case. */
    headers(): Headers;
    /**
     * Promise which resolves to a JSON representation of response body.
     * @throws This method will throw if the response body is not parsable via `JSON.parse`.
     */
    json(): Promise<any>;
    /** Contains a boolean stating whether the response was successful (status in the range 200-299) or not. */
    ok(): boolean;
    /** Returns remote connection info */
    remoteAddress(): RemoteInfo;
    /** Returns an object with security details associated with the response. */
    securityDetails(): SecurityDetails | null;
    /** A matching Request object. */
    request(): Request;
    /** Contains the status code of the response (e.g., 200 for a success). */
    status(): number;
    /** Contains the status text of the response (e.g. usually an "OK" for a success).  */
    statusText(): string;
    /** Promise which resolves to a text representation of response body. */
    text(): Promise<string>;
    /** Contains the URL of the response. */
    url(): string;
}
export type ConsoleMessageType = "log"
    | "debug"
    | "info"
    | "error"
    | "warning"
    | "dir"
    | "dirxml"
    | "table"
    | "trace"
    | "clear"
    | "startGroup"
    | "startGroupCollapsed"
    | "endGroup"
    | "assert"
    | "profile"
    | "profileEnd"
    | "count"
    | "timeEnd";

export interface ConsoleMessageLocation {
    /**
     * URL of the resource if known.
     */
    url?: string;
    /**
     * Line number in the resource if known
     */
    lineNumber?: number;
    /**
     * Column number in the resource if known.
     */
    columnNumber?: number;
}

/** ConsoleMessage objects are dispatched by page via the 'console' event. */
export interface ConsoleMessage {
    /** The message arguments. */
    args(): JSHandle[];
    /** The location the message originated from */
    location(): ConsoleMessageLocation;
    /** The message text. */
    text(): string;
    type(): ConsoleMessageType;
}

/** Represents a page request. */
export interface Request {
    /**
     * Aborts request.
     * To use this, request interception should be enabled with `page.setRequestInterception`.
     * @throws An exception is immediately thrown if the request interception is not enabled.
     */
    abort(errorCode?: ErrorCode): Promise<void>;

    /**
     * Continues request with optional request overrides.
     * To use this, request interception should be enabled with `page.setRequestInterception`.
     * @throws An exception is immediately thrown if the request interception is not enabled.
     */
    continue(overrides?: Overrides): Promise<void>;

    /**
     * @returns An object if the request failed, null otherwise.
     */
    failure(): { errorText: string; } | null;

    /**
     * @returns The `Frame` object that initiated the request, or `null` if navigating to error pages
     */
    frame(): Frame | null;

    /**
     * An object with HTTP headers associated with the request.
     * All header names are lower-case.
     */
    headers(): Headers;

    /** Whether this request is driving frame's navigation. */
    isNavigationRequest(): boolean;

    /** Returns the request's method (GET, POST, etc.) */

    method(): HttpMethod;

    /** Contains the request's post body, if any. */
    postData(): string | undefined;

    /**
     * A `redirectChain` is a chain of requests initiated to fetch a resource.
     *
     * - If there are no redirects and the request was successful, the chain will be empty.
     * - If a server responds with at least a single redirect, then the chain will contain all the requests that were redirected.
     *
     * `redirectChain` is shared between all the requests of the same chain.
     *
     * @since 1.2.0
     */
    redirectChain(): Request[];

    /** Contains the request's resource type as it was perceived by the rendering engine.  */
    resourceType(): ResourceType;

    /**
     * Fulfills request with given response.
     * To use this, request interception should be enabled with `page.setRequestInterception`.
     * @throws An exception is immediately thrown if the request interception is not enabled.
     * @param response The response options that will fulfill this request.
     */
    respond(response: RespondOptions): Promise<void>;

    /** A matching `Response` object, or `null` if the response has not been received yet. */
    response(): Response | null;

    /** Contains the URL of the request. */
    url(): string;
}

/** Options for `Request.respond` method */
export interface RespondOptions {
    /**
     * Specifies the response status code.
     * @default 200
     */
    status?: number;
    /** Specifies the response headers. */
    headers?: Headers;
    /** Specifies the Content-Type response header. */
    contentType?: string;
    /** Specifies the response body. */
    body?: Buffer | string;
}

export interface RemoteInfo {
    /** the IP address of the remote server */
    ip: string;
    /** the port used to connect to the remote server */
    port: number;
}

export interface SecurityDetails {
    /** A string with the name of issuer of the certificate. (e.g. "Let's Encrypt Authority X3"). */
    issuer(): string;
    /** String with the security protocol (e.g. TLS 1.2). */
    protocol(): string;
    /** Name of the subject to which the certificate was issued to (e.g. "www.example.com"). */
    subjectName(): string;
    /** Timestamp stating the start of validity of the certificate. */
    validFrom(): number;
    /** Timestamp stating the end of validity of the certificate. */
    validTo(): number;
}

export type Headers = Record<string, string>;
export type HttpMethod =
    | "GET"
    | "POST"
    | "PATCH"
    | "PUT"
    | "DELETE"
    | "OPTIONS";

export type ResourceType =
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "other";

export type ErrorCode =
    | "aborted"
    | "accessdenied"
    | "addressunreachable"
    | "blockedbyclient"
    | "blockedbyresponse"
    | "connectionaborted"
    | "connectionclosed"
    | "connectionfailed"
    | "connectionrefused"
    | "connectionreset"
    | "internetdisconnected"
    | "namenotresolved"
    | "timedout"
    | "failed";

export interface Overrides {
    url?: string;
    method?: HttpMethod;
    postData?: string;
    headers?: Headers;
}
