// Type definitions for Socketty v0.2.2
// Project: https://www.npmjs.com/package/socketty
// Definitions by: Nax <https://github.com/Nax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var socketty: Socketty;

declare module 'socketty' {
    export = socketty;
}

interface Socketty {
    /**
     * Connect to a socketty server.
     * @param url The server url
     * @param callback The callback to be run when the connection is open
     * @return A Socket
     */
    connect(url: string, callback: (socket: SockettySocket) => void): SockettySocket;

    /**
     * Create a socketty server.
     * @param httpServer The HTTP server to use
     * @return A socketty server
     */
    createServer(httpServer: any): SockettyServer;
}

interface SockettySocket {
    /**
     * Listen for an action.
     * @param action The action to listen to
     * @param callback A callback to be run when the action is fired
     */
    on(action: string, callback: (message?: any) => void): void;

    /**
     * Send an action, as well as an optional message.
     * @param action The action to send
     * @param message The message to send
     */
    send(action: string, message?: any): void;

    /**
     * Specify a callback to be run when the socket is disconnected.
     * @param callback The disconnect callback
     */
    disconnect(callback: () => void): void;
}

interface SockettyServer {
    /**
     * Specify a callback to be run when a new socket connects to the server.
     * @param callback The callback
     */
    connection(callback: (socket: SockettySocket) => void): void;
}
