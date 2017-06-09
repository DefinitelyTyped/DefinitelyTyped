// Type definitions for json-socket v0.1.2
// Project: https://github.com/sebastianseilund/node-json-socket
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>



import {Socket} from "net";

declare class JsonSocket extends Socket {

    constructor(socket: Socket);

    /**
     * sends a single message and closes the connection instantly. Use this if you need to send a server a message,
     * but you don't need any response.
     * @param port port to send the message to
     * @param host host to send the message to
     * @param message the message to send
     * @param callback will be called after the message has been sent
     */
    static sendSingleMessage(port: number, host: string, message: any, callback: (err: Error) => void): void;

    /**
     * sends a single message, waits for a single response message from the server and closes the connection right after.
     * Use this if you need to send a server a message, and get a response, but you don't need the connection to stay
     * open.
     * @param port port to send the message to
     * @param host host to send the message to
     * @param message the message to send
     * @param callback will be called when the response message has been received
     */
    static sendSingleMessageAndReceive(port: number, host: string, message: any, callback: (err: Error, message: any) => void): void;

    /**
    * Convenience method for sending an error as a message.
    * @param err an Error object that should be formatted as a message
    * @param callback will be called after the message has been sent
    */
    sendError(err: Error, callback: (err: Error) => void): void;

    /**
     * Same as {@link JsonSocket.sendError}, except that the socket is closed right after the message has been sent
     * using <a href="https://nodejs.org/api/net.html#net_socket_end_data_encoding">net.end()</a>.
     * No more messages can be sent from either the server or client through this socket.
     * @param err
     * @param callback
     */
    sendEndError(err: Error, callback: (err: Error) => void): void;

    /**
     * Sends a JSON message over the socket.
     * @param message the message to send
     * @param callback will be called after the message has been sent
     */
    sendMessage(message: any, callback: (err: Error) => void): void;

    /**
     * Same as {@link JsonSocket.sendMessage}, except that the socket is closed right after the message has been sent
     * using <a href="https://nodejs.org/api/net.html#net_socket_end_data_encoding">net.end()</a>.
     * No more messages can be sent from either the server or client through this socket.
     * @param message the message to send
     * @param callback will be called after the message has been sent
     */
    sendEndMessage(message: any, callback: (err: Error) => void): void;
}

export = JsonSocket;
