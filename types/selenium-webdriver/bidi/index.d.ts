import { EventEmitter } from "events";

export interface BuildInfo {
    version: string;
}

export interface OsInfo {
    arch: string;
    name: string;
    version: string;
}

export interface ResultData {
    build: BuildInfo;
    message: string;
    os: OsInfo;
    ready: boolean;
}

export interface StatusResult {
    id: number;
    result: ResultData;
    type: string;
}

export interface Params {
    method: string;
    params: {
        [key: string]: any;
    };
}

export class Index extends EventEmitter {
    id: boolean;
    connected: boolean;
    events: string[];
    browsingContexts: string[];

    /**
     * Create a new websocket connection
     * @param _webSocketUrl
     */
    constructor(_webSocketUrl: string);

    /**
     * @returns {boolean}
     */
    get socket(): WebSocket;

    /**
     * @returns {boolean}
     */
    get isConnected(): boolean;

    /**
     * Get Bidi Status
     * @returns {Promise<any>}
     */
    get status(): Promise<StatusResult>;

    /**
     * Resolve connection
     * @returns {Promise<void>}
     */
    waitForConnection(): Promise<unknown>;

    /**
     * Sends a bidi request
     * @param params
     * @returns {Promise<any>}
     */
    send(params: Params): Promise<unknown>;

    /**
     * Subscribe to events
     * @param events
     * @param browsingContexts
     * @returns {Promise<void>}
     */
    subscribe(events: string | string[], browsingContexts?: string | string[]): Promise<void>;

    /**
     * Unsubscribe to events
     * @param events
     * @param browsingContexts
     * @returns {Promise<void>}
     */
    unsubscribe(events: string | string[], browsingContexts?: string | string[]): Promise<void>;

    /**
     * Close ws connection.
     * @returns {Promise<void>}
     */
    close(): Promise<unknown>;
}
