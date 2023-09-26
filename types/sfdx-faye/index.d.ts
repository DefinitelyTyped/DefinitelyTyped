import { EventEmitter } from "events";

/**
 * Any valid JSON primitive value.
 */
type JsonPrimitive = null | boolean | number | string;

/**
 * Any valid JSON collection value.
 */
type JsonCollection = JsonMap | JsonArray;

/**
 * Any valid JSON value.
 */
type AnyJson = JsonPrimitive | JsonCollection;

/**
 * Any JSON-compatible object.
 */
interface JsonMap extends Record<string, AnyJson> {
}

/**
 * Any JSON-compatible array.
 */
interface JsonArray extends Array<AnyJson> {
}

type Message = JsonMap;
type Callback<T = unknown> = (...args: any[]) => T;

/**
 * Types for defining extensions.
 */
interface StreamingExtension {
    /**
     * Extension for outgoing message.
     *
     * @param message The message.
     * @param callback The callback to invoke after the message is processed.
     */
    outgoing?: (message: Message, callback: Callback) => void;
    /**
     * Extension for the incoming message.
     *
     * @param message The message.
     * @param callback The callback to invoke after the message is processed.
     */
    incoming?: (message: Message, callback: Callback) => void;
}

/**
 * The subscription object returned from the cometd subscribe object.
 */
interface CometSubscription {
    callback(callback: () => void): void;
    errback(callback: (error: Error) => void): void;
}

/**
 * Return type for the Streaming and Polling client.
 */
interface StatusResult {
    /**
     * If the result of the streaming or polling client is expected to return a result
     */
    payload?: AnyJson;
    /**
     * Indicates to the streaming or polling client that the subscriber has what its needs. If `true` the client will end
     * the messaging exchanges with the endpoint.
     */
    completed: boolean;
}

/**
 * Function type for processing messages
 */
type StreamProcessor = (message: Message) => StatusResult;

declare class Subscription extends Promise<void> {
    cancel(): void;
    unsubscribe(): void;
    withChannel(callback: (channel: string, message: any) => void): void;
}

declare class Client extends EventEmitter {
    constructor(url?: string, options?: Record<string, unknown>);

    /**
     * Disable polling features.
     *
     * @param label Polling feature label.
     */
    disable(label: string): void;

    /**
     * Add a custom extension to the underlying client.
     *
     * @param extension The json function for the extension.
     */
    addExtension(extension: StreamingExtension): void;

    /**
     * Sets an http header name/value.
     *
     * @param name The header name.
     * @param value The header value.
     */
    setHeader(name: string, value: string): void;

    /**
     * handshake with the streaming channel
     *
     * @param callback Callback for the handshake when it successfully completes. The handshake should throw
     * errors when errors are encountered.
     */
    handshake(callback: () => void): void;

    /**
     * Subscribes to Comet topics. Subscribe should perform a handshake if one hasn't been performed yet.
     *
     * @param channel The topic to subscribe to.
     * @param callback The callback to execute once a message has been received.
     */
    subscribe(channel: string, callback: (message: JsonMap) => void): CometSubscription;

    unsubscribe(channelName: string, subscr: Subscription): void;
    /**
     * Method to call to disconnect the client from the server.
     */
    disconnect(): void;
}

export let logger: any;

export {
    Callback,
    Client,
    CometSubscription,
    Message,
    StatusResult,
    StreamingExtension,
    StreamProcessor,
    Subscription,
};
