// Type definitions for websocket-async 1.3
// Project: https://github.com/jcao219/websocket-async
// Definitions by: Ben O'Sullivan <https://github.com/bigbeno37>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.7

/**
 * An asynchronous WebSocket client.
 * @example
 * // Set up connection.
 * const webSocketClient = new WebSocketClient;
 * // Connect.
 * await webSocketClient.connect('ws://www.example.com/');
 * // Send is synchronous.
 * webSocketClient.send('Hello!');
 * // Receive is asynchronous.
 * console.log(await webSocketClient.receive());
 * // See if there are any more messages received.
 * if (webSocketClient.dataAvailable !== 0) {
 *     console.log(await webSocketClient.receive());
 * }
 * // Close the connection.
 * await webSocketClient.disconnect();
 */
declare class WebSocketClient {
    _socket: WebSocket;

    _closeEvent: CloseEvent | null;

    _receiveCallbacksQueue: Array<{ resolve: (data: any) => void, reject: (reason: any) => void }>;

    _receiveDataQueue: any[];

    constructor();

    /**
     * Whether a connection is currently open.
     * @returns true if the connection is open.
     */
    connected(): boolean;

    /**
     * The number of messages available to receive.
     * @returns The number of queued messages that can be retrieved with {@link #receive}
     */
    dataAvailable(): number;

    /**
     * Sets up a WebSocket connection to specified url. Resolves when the
     * connection is established. Can be called again to reconnect to any url.
     */
    connect(url: string, protocols?: string): Promise<void>;

    /**
     * Send data through the websocket.
     * Must be connected. See {@link #connected}.
     */
    send(data: any): void;

    /**
     * Asynchronously receive data from the websocket.
     * Resolves immediately if there is buffered, unreceived data.
     * Otherwise, resolves with the next rececived message,
     * or rejects if disconnected.
     * @returns A promise that resolves with the data received.
     */
    receive(): Promise<any>;

    /**
     * Initiates the close handshake if there is an active connection.
     * Returns a promise that will never reject.
     * The promise resolves once the WebSocket connection is closed.
     */
    disconnect(code?: number, reason?: string): Promise<CloseEvent | null>;

    /**
     * Sets up the event listeners, which do the bulk of the work.
     */
    private _setupListenersOnConnect(): Promise<void>;

    /**
     * Resets the receive arrays and close events, called in the constructor
     */
    private _reset(): void;
}

export = WebSocketClient;
