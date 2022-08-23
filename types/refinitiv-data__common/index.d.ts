// Type definitions for refinitiv-data__common 1.0
// Project: https://git.sami.int.thomsonreuters.com/dapi/rdp-library-typescript
// Definitions by: Seryozha Harutyunyan <https://github.com/seryozhaharutyunyan1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// IPC-BUS-SERVICE START
/**
 * @param {string} channel The channel you are subscribed for to receive the messages/data
 * @param {any} data The data which is passed with the publish event into the channel
 */
export type IpcBusCallback = (channel: string, data: any) => void;

/**
 * The IPC bus subscription interface
 */
export interface IpcBusSubscription {
    /**
     * Method to unsubscribe from current subscription
     */
    unsubscribe(): void;
}

export interface IpcBusService extends BusCore {
    /**
     * Used for connection initialization. Should be called firstly before any publish/subscribe
     */
    connect(): Promise<void>;
}

export interface WorkspaceSdkBus extends BusCore {
    connect?(): Promise<void>;
}

/**
 * IpcBusService is a common interface for communication through IPC bus on different environments
 */
interface BusCore {
    /**
     * Used for subscription on all communications published onto a given channel
     * @param {string} channel - a name of a channel to subscribe to all published communications
     * @param {IpcBusCallback} callback - a callback function to be called when there is a publish on subscribed channel
     */
    subscribe(channel: string, callback: IpcBusCallback): IpcBusSubscription;
    /**
     * Used for cancelling all subscriptions on a specific channel
     * @param {string} channel - a name of a channel to unsubscribe from.
     * @param {IpcBusCallback} callback - a callback used for the subscription
     */
    unsubscribe(channel: string, callback: IpcBusCallback): void;
    /**
     * Used for publishing a message to a given a channel
     * @param {string} channel - a name of a channel which messages will be published to
     * @param {any} data - a message to publish.
     *
     * @example
     * pubsub.publish('/country/city', 'Paris');
     */
    publish(channel: string, data: any): void;
}
// IPC-BUS-SERVICE END

// DACS START
/**
 * Dacs describes params needed for streaming connection
 */
export interface Dacs {
    /**
     * The ID of the application connecting in. Default to '256'
     */
    readonly applicationId?: string;
    /**
     * The username used for connection. Default to 'user'
     */
    readonly userName?: string;
    /**
     * The IP address position of the application logging in. Default to local machine's ip address
     * (or “127.0.0.1” if we can't retrieve real ip address)
     */
    readonly position?: string;
}

/**
 * Default user
 */
export const DEFAULT_DACS_USERNAME = 'user';
// DACS END

// IPC-BUS-SERVICE-OPTIONS START
export interface IpcBusServiceOptions {
    disableStringify?: boolean;
}
// IPC-BUS-SERVICE-OPTIONS END

// DEEP-PARTIAL START
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
// DEEP-PARTIAL END

// HTTP START
export interface HttpHeaders {
    [header: string]: number | string | string[] | undefined;
}

export interface HttpConfig {
    url?: string;
    method?: string;
    baseURL?: string;
    headers?: HttpHeaders;
    params?: any;
    data?: any;
    maxRedirects?: number;
}

/**
 * The RESTful Data service can support multiple methods when sending requests.
 */
export const enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

/**
 * Defines the endpoint response specification.
 */
export interface HttpResponse<T = any> {
    /**
     * Defines data returned by the endpoint.
     */
    data: T;
    /**
     * Defines HTTP status code from the endpoint response.
     */
    status: number;
    /**
     * Defines the HTTP status message from the endpoint response.
     */
    statusText: string;
    /**
     * Defines the headers that the endpoint responded with.
     */
    headers: HttpHeaders;
    /**
     * Defines the config that was provided for the request.
     */
    config: HttpConfig;
    /**
     * Defines the request that generated this response. It is the last ClientRequest instance in Node.JS (in redirects)
     * and an XMLHttpRequest instance in browser.
     */
    request?: any;
}

/**
 * Defines interface .
 */

export interface APIProxyHttpResponse {
    /**
     * Body of the response, if any.
     */
    body?: string;
    /**
     * Headers of the response, if any.
     */
    headers?: HttpHeaders;
    /**
     * Status code, as returned by the remote server.
     */
    statusCode: number;
    /**
     * Status message, as returned by the remote server.
     */
    statusMessage?: string;
}

/**
 * Defines the endpoint error response specification.
 */
export interface HttpErrorResponse {
    /**
     * Defines the config that was provided for the request.
     */
    config: HttpConfig;
    /**
     * Defines HTTP status code from the endpoint error response.
     */
    code?: string;
    /**
     * Defines the request that generated this error. It is the last ClientRequest instance in Node.JS (in redirects)
     * and an XMLHttpRequest instance in browser
     */
    request?: any;
    /**
     * Defines the endpoint response.
     */
    response?: HttpResponse;
}

export const enum HttpCode {
    OK = 200,
    MULTIPLE_CHOICES = 300,
    BAD_REQUEST = 400,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    REQUEST_TIMEOUT = 408,
    INTERNAL_SERVER_ERROR = 500,
}
// HTTP END

// BUFFER START
export type OnMessageCallback = (message: { data: string | Buffer | ArrayBuffer | Buffer[]; type: string; target: any }) => void;

export type OnCloseCallback = (details: { reason: string; wasClean: boolean; target: any; code: number }) => void;
export type OnErrorCallback = (details: { error: Error; message: string; type: string; target: any }) => void;
export type OnOpenCallback = (details: { target: any }) => void;

export interface StreamTransport {
    onmessage?: OnMessageCallback;
    onclose?: OnCloseCallback;
    onerror?: OnErrorCallback;
    onopen?: OnOpenCallback;
    protocol?: string;

    binaryType: string;

    send(message: string): void;
    close(code?: number, data?: string): void;
}
// BUFFER END

// CONTAINER-SESSION-AUTHORIZE START
export interface ContainerSessionAuthorize {
    appKey: string;
    scope: string;
}

export interface ContainerSessionAuthorizeStatus {
    error?: any;
}
// CONTAINER-SESSION-AUTHORIZE END

// CONTAINER-SESSION-CHANNEL START
export const enum ContainerSessionChannel {
    Authorize = '/data-platform-proxy/csm/authorize',
    Request = '/data-platform-proxy/csm/request',
    Stream = '/data-platform-proxy/csm/stream',
}
// CONTAINER-SESSION-CHANNEL END

// CONTAINER-SESSION-REQUEST START
export interface ContainerSessionRequest {
    url: string;
    appKey: string;
    scope?: string;
    handleAutoRedirect?: boolean;
    method?: HttpMethod;
    query?: {};
    body?: {};
    headers?: HttpHeaders;
    path?: {};
}

export type ContainerSessionRequestStatus = HttpErrorResponse | HttpResponse;
// CONTAINER-SESSION-REQUEST END

// CONTAINER-SESSION-SERVICE START
export const enum ContainerSessionService {
    ApiProxy = '/data-platform-proxy/csm',
}
// CONTAINER-SESSION-SERVICE END

// IPC-BUS-REPLIER START
export interface IpcBusReplySuccessMessage {
    reply: any;
    correlationId: string;
}

export interface IpcBusReplyErrorMessage {
    error: any;
    correlationId: string;
}

export type IpcBusReplyMessage = IpcBusReplyErrorMessage | IpcBusReplySuccessMessage;

export type IpcBusReplyHandler = (data: any) => Promise<any>;
// IPC-BUS-REPLIER END

// IPC-BUS-REQUESTER START
/**
 * IpcBusRequesterInterface defines a wrapper that allows to send messages through IPC bus
 * It makes it similar to HTTP requests handling instead of publish/subscribe approach
 */
export interface IpcBusRequesterInterface {
    /**
     * Connects to IPC bus and subscribes for its own replyChannel
     */
    connect(): Promise<void>;
    /**
     * Unsubscribes from the replyChannel
     */
    disconnect(): Promise<void>;
    /**
     * Sends a message to IPC bus
     * @param {string} channel - a name of a channel the message should be sent
     * @param {object} message - a message content to be sent
     * @returns {Promise<any>} - a promise that will be resolved with a response sent for the message
     */
    request(channel: string, message: object): Promise<any>;
}

/**
 * IpcBusRequestMessage defines a common structure for all messaged send by IPC bus
 */
export interface IpcBusRequestMessage {
    /**
     * Metadata required for correct message handling
     */
    meta: {
        /**
         * Unique id of {{IpcBusRequester}} that sends this message and waits for its response
         */
        replyTo: string;
        /**
         * Unique id of this message. Used for appropriate response handling
         */
        correlationId: string;
    };
    /**
     * Message content itself
     */
    content: any;
}
// IPC-BUS-REQUESTER END

// IPC-BUS-SOCKET START
/**
 * IPC Socket message types
 */
export const enum IpcBusSocketMessageType {
    Init = 'init',
    Data = 'data',
    Close = 'close',
    Ping = 'ping',
    Pong = 'pong',
}

export interface SocketData {
    streamApi: StreamingConnectionApi;
    streamProtocol: string;
    [key: string]: any;
}

/**
 * Client init message to use the specific channels
 */
export interface IpcBusSocketCreateMessage {
    clientChannel: string;
    serverChannel: string;
    data: SocketData;
}

/**
 * Server message that confirms connection
 */
export interface IpcBusSocketInitMessage {
    type: IpcBusSocketMessageType.Init;
}

/**
 * Server/Client message format to send the data
 */
export interface IpcBusSocketDataMessage {
    type: IpcBusSocketMessageType.Data;
    data: string;
}

/**
 * Server/Client message to indicate close event
 */
export interface IpcBusSocketCloseMessage {
    type: IpcBusSocketMessageType.Close;
    reason: string;
}

/**
 * Server/Client message to check if the other side is still active
 */
export interface IpcBusSocketPingMessage {
    type: IpcBusSocketMessageType.Ping;
}

/**
 * Server/Client message to confirm that connection is still active
 */
export interface IpcBusSocketPongMessage {
    type: IpcBusSocketMessageType.Pong;
}

/**
 * All possible messages formats
 */
export type IpcBusSocketMessage =
    | IpcBusSocketInitMessage
    | IpcBusSocketDataMessage
    | IpcBusSocketCloseMessage
    | IpcBusSocketPingMessage
    | IpcBusSocketPongMessage;
// IPC-BUS-SOCKET END

// STREAMING-CONNECTION-API START
export const enum StreamingConnectionApi {
    PRICING = 'streaming/pricing/main',
    TRADING_ANALYTICS = 'streaming/trading-analytics/redi',
    QUANTITATIVE_ANALYTICS = 'streaming/quantitative-analytics/financial-contracts',
    BENCHMARK = 'streaming/benchmark/resource',
    CUSTOM_INSTRUMENTS = 'streaming/custom-instruments/resource',
}
// STREAMING-CONNECTION-API END
