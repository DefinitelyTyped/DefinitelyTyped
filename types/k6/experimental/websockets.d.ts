/**
 * This module provides an experimental implementation of the WebSocket API
 * for k6.
 */

/**
 * The Websocket object provides the API for creating and managing WebSocket
 * connections as well as for sending and receiving data on the connection.
 */
export class WebSocket {
    protected __brand: never;

    /**
     * The absolute URL to which the Websocket connection is established.
     */
    readonly url: string;

    /**
     * The current state of the Websocket connection.
     */
    readonly readyState: ReadyState;

    /**
     * The number of bytes of data that have been queued using calls to send()
     * but not yet transmitted to the network.
     *
     * This value resets to zero once all queued data has been sent.
     * This value does not reset to zero when the connection is closed;
     * if you keep calling send(), this will continue to climb.
     */
    readonly bufferedAmount: number;

    /**
     * The type of binary data being transmitted over the connection.
     */
    readonly binaryType: BinaryType;

    /**
     * The Websocket constructor returns a newly created WebSocket object.
     *
     * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
     */
    constructor(url: string);

    /**
     * Enqueues data to be transmitted to the server over the WebSocket connection.
     *
     * @param data - the data to send to the server
     */
    send(data: string | ArrayBuffer): void;

    /**
     * Bind event names to event handlers to be executed when their
     * respective event is received by the server.
     *
     * @param event - the event to listen for
     * @param listener - the callback to invoke when the event is emitted
     */
    addEventListener(event: EventName, listener: (message: MessageEvent) => void): void;

    /**
     * Closes the WebSocket connection or connection attempt, if any.
     */
    close(): void;
}

/**
 * ReadyState describes the possible states of a WebSocket connection.
 */
export enum ReadyState {
    /**
     * Socket has been created. The connection is not yet open.
     */
    Connecting = 0,

    /**
     * The connection is open and ready to communicate.
     */
    Open = 1,

    /**
     * The connection is in the process of closing.
     */
    Closing = 2,

    /**
     * The connection is closed or couldn't be opened.
     */
    Closed = 3,
}

/**
 * Type alias describe the types of binary data that can be
 * transmitted over a Websocket connection.
 */
export type BinaryType = 'arrayBuffer';

/**
 * EventName describes the possible events that can be emitted
 * by a Websocket connection.
 */
export enum EventName {
    /**
     * Event fired when the connection is opened and ready to communcate.
     */
    Open = 'open',

    /**
     * Event fired when the connection has been closed.
     */
    Close = 'close',

    /**
     * Event fired when a connection has been closed due to an error.
     */
    Error = 'error',

    /**
     * Event fired when a message has been received from the server.
     */
    Message = 'message',
}

/**
 * MessageEvent is a simple class that holds the data of a message received from the server.
 */
export interface MessageEvent {
    /**
     * The data sent by the message emitter.
     */
    data: string | ArrayBuffer;

    /**
     * the type of the event.
     */
    type: MessageType;

    /**
     * The time when the message was received.
     */
    time: number;
}

/**
 * WebSocket message types, as defined in RFC 6455, section 11.8.
 */
export enum MessageType {
    /**
     * The message is a text message. The text message payload is
     * interpreted as UTF-8 encodedtext data.
     */
    Text = 1,

    /**
     * The message is a binary message.
     */
    Binary = 2,

    /**
     * The message is a close control message. The optional message
     * payload contains a numeric code and a text reason.
     */
    Close = 8,

    /**
     * The message is a ping control message. The optional message
     * payload is UTF-8 encoded text.
     */
    PingMessage = 9,

    /**
     * The message is a pong control message. The optional message
     * payload is UTF-8 encoded text.
     */
    PongMessage = 10,
}
