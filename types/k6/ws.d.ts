/*
 * WebSocket client.
 * https://docs.k6.io/docs/k6-websocket-api
 */

// === Main ===
// ------------

/**
 * Open WebSocket connection.
 * https://docs.k6.io/docs/connect-url-params-func
 * @param url - Request URL.
 * @param callback - Logic to execute with socket.
 * @returns HTTP response to connection request.
 * @public
 */
export function connect(url: string, callback: Executor): Response;

/**
 * Open WebSocket connection.
 * https://docs.k6.io/docs/connect-url-params-func
 * @param url - Request URL.
 * @param params - Request parameters.
 * @param callback - Logic to execute with socket.
 * @returns HTTP response to connection request.
 * @public
 */
export function connect(url: string, params: Params | null, callback: Executor): Response;

// === Parameters ===
// ------------------

/**
 * Request parameters.
 * @public
 */
export interface Params {
    /** Request headers. */
    headers?: { [name: string]: string };

    /** Response time metric tags. */
    tags?: { [name: string]: string };
}

/**
 * Socket executor.
 * @public
 */
export interface Executor {
    /** @param socket - The opened socket. */
    (socket: Socket): void;
}

// === Response ===
// ----------------

/**
 * HTTP response to connection request.
 * @public
 */
export interface Response {
    /** Fetched URL. May differ from request URL due to redirects. */
    url: string;

    /** HTTP status code. */
    status: number;

    /** Response headers. */
    headers: { [name: string]: string };

    /** Response body. */
    body: string;

    /** Non-HTTP error message. */
    error: string;
}

// === Socket ===
// --------------

/**
 * Created socket.
 * https://docs.k6.io/docs/socket
 * @public
 */
export abstract class Socket {
    protected __brand: never;

    /**
     * Close connection.
     * https://docs.k6.io/docs/socketclose
     * @param code - WebSocket status code.
     */
    close(code?: number): void;

    /**
     * Listen to event.
     * https://docs.k6.io/docs/socketon
     * @param event - Event type.
     * @param handler - Event handler.
     */
    on<ET extends EventType>(event: ET, handler: EventHandler<ET>): void;

    /**
     * Send ping.
     * https://docs.k6.io/docs/socketping
     */
    ping(): void;

    /**
     * Send data.
     * https://docs.k6.io/docs/socketsend
     * @param data - Data to send.
     */
    send(data: string): void;

    /**
     * Call a function repeatedly, while the WebSocket connection is open.
     * https://docs.k6.io/docs/socketsetinterval
     * @param handler - The function to call every `interval` milliseconds.
     * @param interval - Milliseconds between two calls to `callback`.
     */
    setInterval(handler: TimerHandler, interval: number): void;

    /**
     * Call a function at a later time,
     * if the WebSocket connection is still open then.
     * https://docs.k6.io/docs/socketsettimeout
     * @param handler - The function to call when `delay` has expired.
     * @param delay - Delay in milliseconds.
     */
    setTimeout(handler: TimerHandler, delay: number): void;
}

/**
 * Event type.
 * @public
 */
export type EventType = 'close' | 'error' | 'message' | 'open' | 'ping' | 'pong';

/**
 * Timer handler.
 * @public
 */
export interface TimerHandler {
    (): void;
}

// === Event handlers ===
// ----------------------

/**
 * Event handler. Signature varies with event type.
 * @public
 */
export type EventHandler<ET extends EventType> = ET extends 'close'
    ? CloseEventHandler
    : ET extends 'error'
    ? ErrorEventHandler
    : ET extends 'message'
    ? MessageEventHandler
    : ET extends 'open'
    ? OpenEventHandler
    : ET extends 'ping'
    ? PingEventHandler
    : ET extends 'pong'
    ? PongEventHandler
    : never;

/**
 * Close event handler.
 * @public
 */
export interface CloseEventHandler {
    /** @param code - WebSocket status code. */
    (code: number): void;
}

/**
 * Error event handler.
 * @public
 */
export interface ErrorEventHandler {
    /** @param error - Error object. */
    (error: WebSocketError): void;
}

/**
 * Message event handler.
 * @public
 */
export interface MessageEventHandler {
    /** @param message - Message. */
    (message: string): void;
}

/**
 * Open event handler.
 * @public
 */
export interface OpenEventHandler {
    (): void;
}

/**
 * Ping event handler.
 * @public
 */
export interface PingEventHandler {
    (): void;
}

/**
 * Pong event handler.
 * @public
 */
export interface PongEventHandler {
    (): void;
}

// === Error ===
// -------------

/**
 * Error.
 * @public
 */
export abstract class WebSocketError {
    protected __brand: never;

    /** Error message. */
    error(): string;
}
