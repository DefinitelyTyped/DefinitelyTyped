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

export interface Params {
    headers?: { [name: string]: string };
    tags?: { [name: string]: string };
}
export interface Executor {
    (socket: Socket): void;
}

// === Response ===
// ----------------

export interface Response {
    url: string;
    status: number;
    headers: { [name: string]: string };
    body: string;
    error: string;
}

// === Socket ===
// --------------

export abstract class Socket {
    protected __brand: never;
    close(code?: number): void;
    on<ET extends EventType>(event: ET, handler: EventHandler<ET>): void;
    ping(): void;
    send(data: string): void;
    setInterval(handler: TimerHandler, interval: number): void;
    setTimeout(handler: TimerHandler, delay: number): void;
}
export type EventType = 'close' | 'error' | 'message' | 'open' | 'ping' | 'pong';
export type EventHandler<ET extends EventType> = ET extends 'close'
    ? (code: number) => void
    : ET extends 'error'
    ? (error: WebSocketError) => void
    : ET extends 'message'
    ? (message: string) => void
    : ET extends 'open'
    ? () => void
    : ET extends 'ping'
    ? () => void
    : ET extends 'pong'
    ? () => void
    : never;
export interface TimerHandler {
    (): void;
}

// === Error ===
// -------------

export abstract class WebSocketError {
    protected __brand: never;
    error(): string;
}
