declare namespace ReconnectingWebSocket {
    interface Options {
        /**
         * Whether or not the WebSocket should attempt to connect immediately upon instantiation.
         * The socket can be manually opened or closed at any time using `open()` and `close()`.
         * @default `true`
         */
        automaticOpen?: boolean | undefined;
        /**
         * The binary type, possible values `'blob'` or `'arraybuffer'`.
         * @default `'blob'`
         */
        binaryType?: globalThis.WebSocket["binaryType"] | undefined;
        /**
         * Whether this instance should log debug messages.
         * @default `false`
         */
        debug?: boolean | undefined;
        /**
         * The maximum number of reconnection attempts to make. Unlimited if `null`.
         * @default `null`
         */
        maxReconnectAttempts?: number | null | undefined;
        /**
         * The maximum number of milliseconds to delay a reconnection attempt.
         * Accepts integer.
         * @default `30000`
         */
        maxReconnectInterval?: number | undefined;
        /**
         * The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist.
         * Accepts integer or float.
         * @default `1.5`
         */
        reconnectDecay?: number | undefined;
        /**
         * The number of milliseconds to delay before attempting to reconnect.
         * Accepts integer.
         * @default `1000`
         */
        reconnectInterval?: number | undefined;
        /**
         * The maximum time in milliseconds to wait for a connection to succeed before closing and retrying.
         * Accepts integer.
         * @default `2000`
         */
        timeoutInterval?: number | undefined;
    }

    interface OpenEvent extends CustomEvent<undefined> {
        type: "open";
        isReconnect: boolean;
    }

    interface CloseEvent extends CustomEvent<undefined> {
        type: "close";
    }

    interface ConnectingEvent extends CustomEvent<undefined> {
        type: "connecting";
        code: globalThis.CloseEvent["code"];
        reason: globalThis.CloseEvent["reason"];
        wasClean: globalThis.CloseEvent["wasClean"];
    }

    interface MessageEvent extends CustomEvent<undefined> {
        type: "message";
        data: globalThis.MessageEvent["data"];
    }

    interface ErrorEvent extends CustomEvent<undefined> {
        type: "error";
    }

    interface EventMap {
        "open": OpenEvent;
        "close": CloseEvent;
        "connecting": ConnectingEvent;
        "message": MessageEvent;
        "error": ErrorEvent;
    }
}

/**
 * This behaves like a `WebSocket` in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 * ```ts
 * ws = new WebSocket('ws://....');
 * ```
 * you can replace with:
 * ```ts
 * ws = new ReconnectingWebSocket('ws://....');
 * ```
 *
 * The event stream will typically look like:
 * - `onconnecting`
 * - `onopen`
 * - `onmessage`
 * - `onmessage`
 * - `onclose` // lost connection
 * - `onconnecting`
 * - `onopen`  // sometime later...
 * - `onmessage`
 * - `onmessage`
 * - etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 */
declare class ReconnectingWebSocket extends EventTarget {
    /**
     * @param url The url you are connecting to.
     * @param protocols Optional string or array of protocols.
     * @param options See `ReconnectingWebSocket.Options`
     */
    constructor(url: string, protocols?: string | string[], options?: ReconnectingWebSocket.Options);

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    static debugAll: boolean;

    static CONNECTING: globalThis.WebSocket["CONNECTING"];
    static OPEN: globalThis.WebSocket["OPEN"];
    static CLOSING: globalThis.WebSocket["CLOSING"];
    static CLOSED: globalThis.WebSocket["CLOSED"];

    /**
     * An event listener to be called when the WebSocket connection's `readyState` changes to `OPEN`;
     * this indicates that the connection is ready to send and receive data.
     */
    onopen: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.OpenEvent) => void;
    /** An event listener to be called when the WebSocket connection's `readyState` changes to `CLOSED`. */
    onclose: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.CloseEvent) => void;
    /** An event listener to be called when a connection begins being attempted. */
    onconnecting: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.ConnectingEvent) => void;
    /** An event listener to be called when a message is received from the server. */
    onmessage: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.MessageEvent) => void;
    /** An event listener to be called when an error occurs. */
    onerror: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.ErrorEvent) => void;

    addEventListener<K extends keyof ReconnectingWebSocket.EventMap>(
        type: K,
        listener: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.EventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof ReconnectingWebSocket.EventMap>(
        type: K,
        listener: (this: ReconnectingWebSocket, event: ReconnectingWebSocket.EventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;

    /**
     * Closes the WebSocket connection or connection attempt, if any.
     * If the connection is already `CLOSED`, this method does nothing.
     */
    close: globalThis.WebSocket["close"];
    open(reconnectAttempt?: boolean): void;
    /**
     * Additional public API method to refresh the connection if still open (close, re-open).
     * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
     */
    refresh(): void;
    /** Transmits data to the server over the WebSocket connection. */
    send: globalThis.WebSocket["send"];

    /**
     * Whether or not the WebSocket should attempt to connect immediately upon instantiation.
     * The socket can be manually opened or closed at any time using `open()` and `close()`.
     */
    automaticOpen: NonNullable<ReconnectingWebSocket.Options["automaticOpen"]>;
    /**
     * Whether this instance should log debug messages.
     */
    debug: NonNullable<ReconnectingWebSocket.Options["debug"]>;
    /** The maximum number of reconnection attempts to make. Unlimited if `null`. */
    maxReconnectAttempts: NonNullable<ReconnectingWebSocket.Options["maxReconnectAttempts"]> | null;
    /**
     * The maximum number of milliseconds to delay a reconnection attempt.
     * Accepts integer.
     */
    maxReconnectInterval: NonNullable<ReconnectingWebSocket.Options["maxReconnectInterval"]>;
    /**
     * The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist.
     * Accepts integer or float.
     */
    reconnectDecay: NonNullable<ReconnectingWebSocket.Options["reconnectDecay"]>;
    /**
     * The number of milliseconds to delay before attempting to reconnect.
     * Accepts integer.
     */
    reconnectInterval: NonNullable<ReconnectingWebSocket.Options["reconnectInterval"]>;
    /**
     * The maximum time in milliseconds to wait for a connection to succeed before closing and retrying.
     * Accepts integer.
     */
    timeoutInterval: NonNullable<ReconnectingWebSocket.Options["timeoutInterval"]>;

    /** The number of attempted reconnects since starting, or the last successful connection. */
    readonly reconnectAttempts: number;
    /**
     * The binary type, possible values `'blob'` or `'arraybuffer'`.
     */
    readonly binaryType: globalThis.WebSocket["binaryType"];
    /**
     * The current state of the connection.
     * Can be one of: `WebSocket.CONNECTING`, `WebSocket.OPEN`, `WebSocket.CLOSING`, `WebSocket.CLOSED`.
     */
    readonly readyState: globalThis.WebSocket["readyState"];
    /**
     * A string indicating the name of the sub-protocol the server selected; this will be one of
     * the strings specified in the protocols parameter when creating the `WebSocket` object.
     */
    readonly protocol: globalThis.WebSocket["protocol"] | null;
    /**
     * The URL as resolved by the constructor. This is always an absolute URL.
     */
    readonly url: globalThis.WebSocket["url"];
}

export = ReconnectingWebSocket;
