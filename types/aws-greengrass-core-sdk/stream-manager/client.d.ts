import { Message, MessageStreamDefinition, MessageStreamInfo, ReadMessagesOptions } from "./data";
import * as util from "./util";

export * from "./data";
export * from "./exceptions";
export { util };

export interface StreamManagerLogger {
    error(...args: never[]): void;
    warn(...args: never[]): void;
    info(...args: never[]): void;
    debug(...args: never[]): void;
}

export interface StreamManagerClientOptions {
    port?: number;
    host?: string;
    onConnectCb?: () => unknown;
    onErrorCb?: (e: Error) => unknown;
    logger?: StreamManagerLogger;
}

/**
 * Stream manager client
 *
 * @example <caption>StreamManager Usage</caption>
 * const { StreamManagerClient } = require('aws-greengrass-core-sdk/stream-manager');
 * const client = new StreamManagerClient();
 * c.onConnected(async () => {
 *     // Do work with the client (c) here.
 * });
 */
export class StreamManagerClient {
    /**
     * Constructs a new Stream Manager client. Once connected, <tt>onConnectCb</tt> will be called and
     * the client can then be used.
     *
     * @param opts All these options are optional.
     * @param opts.port
     * @param opts.host
     * @param opts.onConnectCb Optional callback to be called once the client has connected.
     * @param opts.onErrorCb Optional, but highly suggested callback to be called when a connection error occurs.
     * @param opts.logger
     */
    constructor(opts?: StreamManagerClientOptions);

    /**
     * Append a message into the specified message stream. Returns the sequence number of the message
     * if it was successfully appended.
     *
     * @param streamName The name of the stream to append to.
     * @param data Buffer containing the data to be written.
     * @returns
     */
    appendMessage(streamName: string, data: Buffer): Promise<number>;

    /**
     * Create a message stream with a given definition.
     *
     * @param definition
     * @returns
     */
    createMessageStream(definition: MessageStreamDefinition): Promise<void>;

    /**
     * Updates a message stream with the new definition.
     * Minimum version requirements: StreamManager server version 1.1 (or AWS IoT Greengrass Core 1.11.0)
     *
     * @param definition
     * @returns
     */
    updateMessageStream(definition: MessageStreamDefinition): Promise<void>;

    /**
     * Deletes a message stream based on its name. Nothing is returned if the request succeeds.
     * An error will be thrown if the request fails.
     *
     * @param streamName The name of the stream to be deleted.
     * @returns
     */
    deleteMessageStream(streamName: string): Promise<void>;

    /**
     * Read message(s) from a chosen stream with options. If no options are specified it will try to read
     * 1 message from the stream.
     *
     * @param streamName The name of the stream to read from.
     * @param options.
     *     Defaults are:
     * <ul>
     *     <li>desiredStartSequenceNumber: 0</li>
     *     <li>minMessageCount: 1</li>
     *     <li>maxMessageCount: 1</li>
     *     <li>readTimeoutMillis: 0 <pre>// Where 0 here represents that the server will immediately return the messages
     * // or an exception if there were not enough messages available.</pre></li>
     * </ul>
     * <p>
     *     If desiredStartSequenceNumber is specified in the options and is less
     *     than the current beginning of the stream, returned messages will start
     *     at the beginning of the stream and not necessarily the desiredStartSequenceNumber.
     * </p>
     * @returns  List of one or more messages.
     */
    readMessages(streamName: string, options?: ReadMessagesOptions | null): Promise<Message[]>;

    /**
     * List the streams in StreamManager. Returns a list of their names.
     *
     * @returns
     */
    listStreams(): Promise<string[]>;

    /**
     * Describe a message stream to get metadata including the stream's definition,
     * size, and exporter statuses.
     *
     * @param streamName The name of the stream to describe
     * @returns
     */
    describeMessageStream(streamName: string): Promise<MessageStreamInfo>;

    /**
     * Add a callback for when the client connects.
     * @param f
     */
    onConnected(f: () => unknown): void;

    /**
     * Add a callback for when an error occurs.
     * @param f
     */
    onError(f: (e: Error) => unknown): void;

    /**
     * Close the connection
     */
    close(): void;
}
