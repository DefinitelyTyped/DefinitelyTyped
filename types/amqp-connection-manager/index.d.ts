// Type definitions for amqp-connection-manager 2.0
// Project: https://github.com/benbria/node-amqp-connection-manager
// Definitions by: rogierschouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ConfirmChannel, Connection, Message, Options, Replies } from "amqplib";
import { EventEmitter } from "events";
import { SecureContextOptions } from "tls";

/**
 * connect() options
 */
export interface AmqpConnectionManagerOptions {
	/**
	 * Interval to send heartbeats to broker. Defaults to 5 seconds.
	 */
	heartbeatIntervalInSeconds?: number;

	/**
	 * The time to wait before trying to reconnect. If not specified, defaults to heartbeatIntervalInSeconds
	 */
	reconnectTimeInSeconds?: number;

	/**
	 * is a function which returns one or more servers to connect to. This should return either a single URL or an array of URLs.
	 * This is handy when you're using a service discovery mechanism such as Consul or etcd. Instead of taking a callback, this can also
	 * return a Promise. Note that if this is supplied, then urls is ignored.
	 */
	findServers?: ((callback: (urls: string | string[]) => void) => void) | (() => Promise<string | string[]>);

	/**
	 * TLS options
	 */
	connectionOptions?: SecureContextOptions;
}

/**
 * Creates a new AmqpConnectionManager, which will connect to one of the URLs provided in urls.
 * If a broker is unreachable or dies, then AmqpConnectionManager will try the next available broker, round-robin.
 * @param urls
 * @param options
 */
export function connect(urls: string[], options?: AmqpConnectionManagerOptions): AmqpConnectionManager;

export type SetupFunc = ((channel: ConfirmChannel, callback: (error?: Error) => void) => void) | ((channel: ConfirmChannel) => Promise<void>);

export interface CreateChannelOpts {
	/**
	 * Name for this channel. Used for debugging.
	 */
	name?: string;
	/**
	 * A function to call whenever we reconnect to the broker (and therefore create a new underlying channel.)
	 * This function should either accept a callback, or return a Promise. See addSetup below
	 */
	setup?: SetupFunc;
	/**
	 * if true, then ChannelWrapper assumes all messages passed to publish() and sendToQueue() are plain JSON objects.
	 * These will be encoded automatically before being sent.
	 */
	json?: boolean;
}

export interface AmqpConnectionManager extends EventEmitter {
	addListener(event: string, listener: (...args: any[]) => void): this;
	addListener(event: "connect", listener: (arg: { connection: Connection, url: string }) => void): this;
	addListener(event: "disconnect", listener: (arg: {err: Error}) => void): this;

	on(event: string, listener: (...args: any[]) => void): this;
	on(event: "connect", listener: (arg: { connection: Connection, url: string }) => void): this;
	on(event: "disconnect", listener: (arg: {err: Error}) => void): this;

	once(event: string, listener: (...args: any[]) => void): this;
	once(event: "connect", listener: (arg: { connection: Connection, url: string }) => void): this;
	once(event: "disconnect", listener: (arg: {err: Error}) => void): this;

	prependListener(event: string, listener: (...args: any[]) => void): this;
	prependListener(event: "connect", listener: (arg: { connection: Connection, url: string }) => void): this;
	prependListener(event: "disconnect", listener: (arg: {err: Error}) => void): this;

	prependOnceListener(event: string, listener: (...args: any[]) => void): this;
	prependOnceListener(event: "connect", listener: (arg: { connection: Connection, url: string }) => void): this;
	prependOnceListener(event: "disconnect", listener: (arg: {err: Error}) => void): this;

	/**
	 * Create a new ChannelWrapper. This is a proxy for the actual channel (which may or may not exist at any moment, depending on whether or not we are currently connected.)
	 * @param opts
	 */
	createChannel(opts: CreateChannelOpts): ChannelWrapper;

	/**
	 * Returns true if the AmqpConnectionManager is connected to a broker, false otherwise.
	 */
	isConnected(): boolean;

	/**
	 * Close this AmqpConnectionManager and free all associated resources.
	 */
	close(): Promise<void>;
}

export interface ChannelWrapper extends EventEmitter {
	addListener(event: string, listener: (...args: any[]) => void): this;
	addListener(event: "connect", listener: () => void): this;
	addListener(event: "error", listener: (err: Error, info: { name: string }) => void): this;
	addListener(event: "close", listener: () => void): this;

	on(event: string, listener: (...args: any[]) => void): this;
	on(event: "connect", listener: () => void): this;
	on(event: "error", listener: (err: Error, info: { name: string }) => void): this;
	on(event: "close", listener: () => void): this;

	once(event: string, listener: (...args: any[]) => void): this;
	once(event: "connect", listener: () => void): this;
	once(event: "error", listener: (err: Error, info: { name: string }) => void): this;
	once(event: "close", listener: () => void): this;

	prependListener(event: string, listener: (...args: any[]) => void): this;
	prependListener(event: "connect", listener: () => void): this;
	prependListener(event: "error", listener: (err: Error, info: { name: string }) => void): this;
	prependListener(event: "close", listener: () => void): this;

	prependOnceListener(event: string, listener: (...args: any[]) => void): this;
	prependOnceListener(event: "connect", listener: () => void): this;
	prependOnceListener(event: "error", listener: (err: Error, info: { name: string }) => void): this;
	prependOnceListener(event: "close", listener: () => void): this;

	/**
	 * Adds a new 'setup handler'. setup(channel, [cb]) is a function to call when a new underlying channel is created -
	 * handy for asserting exchanges and queues exists, and whatnot. The channel object here is a ConfirmChannel from amqplib.
	 * The setup function should return a Promise (or optionally take a callback) - no messages will be sent until this Promise resolves.
	 * If there is a connection, setup() will be run immediately, and the addSetup Promise/callback won't resolve until setup is complete.
	 * Note that in this case, if the setup throws an error, no 'error' event will be emitted, since you can just handle the error here
	 * (although the setup will still be added for future reconnects, even if it throws an error.)
	 * Setup functions should, ideally, not throw errors, but if they do then the ChannelWrapper will emit an 'error' event.
	 * @param func
	 */
	addSetup(func: SetupFunc): Promise<void>;

	/**
	 * @see amqplib
	 * @param exchange
	 * @param routingKey
	 * @param content
	 * @param options
	 * @param callback
	 */
    publish(exchange: string, routingKey: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void): Promise<void>;

	/**
	 * @see amqplib
	 * @param queue
	 * @param content
	 * @param options
	 * @param callback
	 */
    sendToQueue(queue: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void): Promise<void>;

	/**
	 * @see amqplib
	 * @param message
	 * @param allUpTo
	 */
    ack(message: Message, allUpTo?: boolean): void;

	/**
	 * @see amqplib
	 * @param message
	 * @param allUpTo
	 * @param requeue
	 */
    nack(message: Message, allUpTo?: boolean, requeue?: boolean): void;

	/**
	 * Returns a count of messages currently waiting to be sent to the underlying channel.
	 */
	queueLength(): number;

	/**
	 * Close a channel, clean up resources associated with it.
	 */
	close(): Promise<void>;
}
