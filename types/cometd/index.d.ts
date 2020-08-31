// Type definitions for CometD 4.0
// Project: https://cometd.org
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
//                 Daniel Perez Alvarez <https://github.com/unindented>
//                 Alex Henry <https://github.com/alxHenry>
//                 Harald Gliebe <https://github.com/hagl>
//                 P.J. Swesey <https://github.com/swese44>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Configuration {
    /**
     * The URL of the Bayeux server this client will connect to.
     */
    url: string;
    /**
     * The log level. Possible values are: "warn", "info", "debug". Output to `window.console` if
     * available.
     */
    logLevel?: string;
    /**
     * The maximum number of connections used to connect to the Bayeux server. Change this value
     * only if you know exactly the client’s connection limit and what "request queued behind long
     * poll" means.
     */
    maxConnections?: number;
    /**
     * The number of milliseconds that the backoff time increments every time a connection with the
     * Bayeux server fails. CometD attempts to reconnect after the backoff time elapses.
     */
    backoffIncrement?: number;
    /**
     * The maximum number of milliseconds of the backoff time after which the backoff time is not
     * incremented further.
     */
    maxBackoff?: number;
    /**
     * The maximum number of milliseconds to wait before considering a request to the Bayeux server
     * failed.
     */
    maxNetworkDelay?: number;
    /**
     * An object containing the request headers to be sent for every Bayeux request (for example,
     * `{"My-Custom-Header": "MyValue"}`).
     */
    requestHeaders?: object;
    /**
     * Determines whether or not the Bayeux message type (handshake, connect, disconnect) is
     * appended to the URL of the Bayeux server (see above).
     */
    appendMessageTypeToURL?: boolean;
    /**
     * Determines whether multiple publishes that get queued are sent as a batch on the first
     * occasion, without requiring explicit batching.
     */
    autoBatch?: boolean;
    /**
     * The maximum number of milliseconds to wait for a WebSocket connection to be opened. It does
     * not apply to HTTP connections. A timeout value of 0 means to wait forever.
     */
    connectTimeout?: number;
    /**
     * Only applies to the websocket transport. Determines whether to stick using the websocket
     * transport when a websocket transport failure has been detected after the websocket transport
     * was able to successfully connect to the server.
     */
    stickyReconnect?: boolean;
    /**
     * The max length of the URI for a request made with the callback-polling transport. Microsoft
     * Internet Explorer 7 and 8 are known to limit the URI length, so single large messages sent by
     * CometD may fail to remain within the max URI length when encoded in JSON.
     */
    maxURILength?: number;
    /**
     * Uses the scheduler service available in Web Workers via Worker.setTimeout(fn, delay) rather
     * than using that available via Window.setTimeout(fn, delay). Browsers are now throttling the
     * Window scheduler in background tabs to save battery in mobile devices, so the Window scheduler
     * events are delayed by possibly several seconds, causing CometD sessions to timeout on the
     * server. The Worker scheduler is not throttled and guarantees that scheduler events happen
     * on time.
     */
    useWorkerScheduler?: boolean;
}

export type ConnectionType = 'long-polling' | 'callback-polling' | 'iframe' | 'flash';
export type ReconnectAdvice = 'retry' | 'handshake' | 'none';
export type Status = 'disconnected' | 'disconnecting' | 'handshaking' | 'connected' | 'connecting';

export interface BaseMessage {
    successful: boolean;
    channel: string;
    id?: string;
    clientId?: string;
    advice?: {
        reconnect?: ReconnectAdvice;
        timeout?: number;
        interval?: number;
        'multiple-clients'?: boolean;
        hosts?: string[];
    };
    connectionType?: ConnectionType;
    timestamp?: string;
    data?: any;
    error?: string;
    ext?: any;
    version?: string;
    minimumVersion?: string;
}

export interface SuccessfulHandshakeMessage extends BaseMessage {
    successful: true;
    version: string;
    supportedConnectionTypes: ConnectionType[];
    clientId: string;
    authSuccessful?: true;
    reestablish: boolean;
}

export interface UnsuccessfulHandshakeMessage extends BaseMessage {
    successful: false;
    error: string;
    supportedConnectionTypes?: ConnectionType[];
    reestablish?: undefined;
}

export type HandshakeMessage = SuccessfulHandshakeMessage | UnsuccessfulHandshakeMessage;

export interface SubscribeMessage extends BaseMessage {
    subscription: string;
}

export type Message = BaseMessage | HandshakeMessage | SubscribeMessage;

export type Listener = (message: Message) => void;
export type HandshakeListener = (message: HandshakeMessage) => void;
export type SubscribeListener = (message: SubscribeMessage) => void;
export type Callback = (data: any) => void;

export interface SubscriptionHandle {
    id: number;
    channel: string;
    listener: boolean;
    callback: Callback;
    scope?: any;
}

export interface Extension {
    incoming?: Listener;
    outgoing?: Listener;
    registered?: (name: string, cometd: CometD) => void;
    unregistered?: () => void;
}

export class CometD {
    constructor(options?: Configuration);

    /**
     * Registers the given transport under the given transport type.
     *
     * The optional index parameter specifies the priority at which the transport is registered
     * (where `0` is the max priority).
     *
     * If a transport with the same type is already registered, this function does nothing and
     * returns `false`.
     *
     * @param type the transport type
     * @param transport the transport object
     * @param index the index at which this transport is to be registered
     * @return true if the transport has been registered, false otherwise
     */
    registerTransport(type: string, transport: object, index?: number): boolean;

    /**
     * Unregisters the transport with the given transport type.
     *
     * @param type the transport type to unregister
     * @return the transport that has been unregistered, or null if no transport was previously
     * registered under the given transport type
     */
    unregisterTransport(type: string): void;

    /**
     * Unregisters all transports.
     */
    unregisterTransports(): void;

    /**
     * Gets all registered transport types.
     *
     * @return an array of all registered transport types
     */
    getTransportTypes(): string[];

    /**
     * Configures and establishes the Bayeux communication with the Bayeux server via a handshake
     * and a subsequent connect.
     *
     * @param configuration the configuration object
     * @param handshakeProps an object to be merged with the handshake message
     */
    init(configuration: string | Configuration, handshakeProps?: object): void;

    /**
     * Configures the initial Bayeux communication with the Bayeux server.
     *
     * @param configuration the URL of the Bayeux server, or a configuration object that must
     * contain a mandatory field `url`
     */
    configure(config: string | Configuration): void;

    /**
     * Establishes the Bayeux communication with the Bayeux server via a handshake and a subsequent
     * connect.
     *
     * @param handshakeCallback a function to be invoked when the handshake is acknowledged
     */
    handshake(handshakeCallback: HandshakeListener): void;

    /**
     * Establishes the Bayeux communication with the Bayeux server via a handshake and a subsequent
     * connect.
     *
     * @param handshakeProps an object to be merged with the handshake message
     * @param handshakeCallback a function to be invoked when the handshake is acknowledged
     */
    handshake(handshakeProps: object, handshakeCallback: HandshakeListener): void;

    /**
     * Disconnects from the Bayeux server.
     *
     * @param disconnectCallback a function to be invoked when the disconnect is acknowledged
     */
    disconnect(disconnectCallback: Listener): void;

    /**
     * Disconnects from the Bayeux server.
     *
     * @param disconnectProps an object to be merged with the disconnect message
     * @param disconnectCallback a function to be invoked when the disconnect is acknowledged
     */
    disconnect(disconnectProps: object, disconnectCallback: Listener): void;

    /**
     * Marks the start of a batch of application messages to be sent to the server in a single
     * request, obtaining a single response containing (possibly) many application reply messages.
     *
     * Messages are held in a queue and not sent until `endBatch` is called. If `startBatch` is
     * called multiple times, then an equal number of `endBatch` calls must be made to close and
     * send the batch of messages.
     */
    startBatch(): void;

    /**
     * Marks the end of a batch of application messages to be sent to the server in a single
     * request.
     */
    endBatch(): void;

    /**
     * Executes the given callback in the given scope, surrounded by a `startBatch` and `endBatch`
     * calls.
     *
     * @param callback the callback to be executed within `startBatch` and `endBatch` calls
     */
    batch(callback: () => void): void;

    /**
     * Adds a listener for Bayeux messages, performing the given callback in the given scope when a
     * message for the given channel arrives.
     *
     * - Must be used to listen to meta channel messages.
     * - May be used to listen to service channel messages.
     * - Should not be used to listen broadcast channel messages (use `subscribe` instead).
     * - Does not involve any communication with the Bayeux server, and as such can be called before
     *   calling `handshake`.
     * - Is synchronous: when it returns, you are guaranteed that the listener has been added.
     *
     * @param channel the channel the listener is interested to
     * @param callback the callback to call when a message is sent to the channel
     * @returns the subscription handle to be passed to `removeListener`
     */
    addListener(channel: string, callback: Listener): SubscriptionHandle;

    /**
     * Removes the subscription obtained with a call to `addListener`.
     *
     * @param subscription the subscription to unsubscribe.
     */
    removeListener(subscription: SubscriptionHandle): void;

    /**
     * Removes all listeners registered with `addListener` or `subscribe`.
     */
    clearListeners(): void;

    /**
     * Subscribes to the given channel, performing the given callback in the given scope when a
     * message for the channel arrives.
     *
     * - Must not be used to listen to meta channels messages (if attempted, the server returns an
     *   error).
     * - May be used to listen to service channel messages.
     * - Should be used to listen to broadcast channel messages.
     * - Involves a communication with the Bayeux server and as such cannot be called before calling
     *   `handshake`.
     * - Is asynchronous: it returns immediately, well before the Bayeux server has received the
     *   subscription request.
     *
     * @param channel the channel to subscribe to
     * @param callback the callback to call when a message is sent to the channel
     * @param subscribeCallback a function to be invoked when the subscription is acknowledged
     * @return the subscription handle to be passed to `unsubscribe`
     */
    subscribe(channel: string, callback: Callback, subscribeCallback?: SubscribeListener): SubscriptionHandle;

    /**
     * Subscribes to the given channel, performing the given callback in the given scope when a
     * message for the channel arrives.
     *
     * - Must not be used to listen to meta channels messages (if attempted, the server returns an
     *   error).
     * - May be used to listen to service channel messages.
     * - Should be used to listen to broadcast channel messages.
     * - Involves a communication with the Bayeux server and as such cannot be called before calling
     *   `handshake`.
     * - Is asynchronous: it returns immediately, well before the Bayeux server has received the
     *   subscription request.
     *
     * @param channel the channel to subscribe to
     * @param callback the callback to call when a message is sent to the channel
     * @param subscribeProps an object to be merged with the subscribe message
     * @param subscribeCallback a function to be invoked when the subscription is acknowledged
     * @return the subscription handle to be passed to `unsubscribe`
     */
    subscribe(
        channel: string,
        callback: Callback,
        subscribeProps: object,
        subscribeCallback?: SubscribeListener,
    ): SubscriptionHandle;

    /**
     * Unsubscribes the subscription obtained with a call to `subscribe`.
     *
     * @param subscription the subscription to unsubscribe.
     * @param unsubscribeCallback a function to be invoked when the unsubscription is acknowledged
     */
    unsubscribe(subscription: SubscriptionHandle, unsubscribeCallback?: SubscribeListener): void;

    /**
     * Unsubscribes the subscription obtained with a call to `subscribe`.
     *
     * @param subscription the subscription to unsubscribe.
     * @param unsubscribeProps an object to be merged with the unsubscribe message
     * @param unsubscribeCallback a function to be invoked when the unsubscription is acknowledged
     */
    unsubscribe(
        subscription: SubscriptionHandle,
        unsubscribeProps: object,
        unsubscribeCallback?: SubscribeListener,
    ): void;

    /**
     * Resubscribes as necessary in case of a re-handshake.
     */
    resubscribe(subscription: SubscriptionHandle, subscribeProps?: object): SubscriptionHandle;

    /**
     * Removes all subscriptions added via `subscribe`, but does not remove the listeners added via
     * `addListener`.
     */
    clearSubscriptions(): void;

    /**
     * Publishes a message on the given channel, containing the given content.
     *
     * @param channel the channel to publish the message to
     * @param content the content of the message
     * @param publishCallback a function to be invoked when the publish is acknowledged by the
     * server
     */
    publish(channel: string, content: object, publishCallback?: Listener): void;

    /**
     * Publishes a message on the given channel, containing the given content.
     *
     * @param channel the channel to publish the message to
     * @param content the content of the message
     * @param publishProps an object to be merged with the publish message
     * @param publishCallback a function to be invoked when the publish is acknowledged by the
     * server
     */
    publish(channel: string, content: object, publishProps: object, publishCallback?: Listener): void;

    /**
     * Publishes a message with binary data on the given channel.
     *
     * The binary data chunk may be an `ArrayBuffer`, a `DataView`, a `TypedArray` (such as
     * `Uint8Array`) or a plain integer array.
     *
     * The meta data object may contain additional application data such as a file name, a mime
     * type, etc.
     *
     * @param channel the channel to publish the message to
     * @param data the binary data to publish
     * @param last whether the binary data chunk is the last
     * @param meta an object containing meta data associated to the binary chunk
     * @param callback a function to be invoked when the publish is acknowledged by the server
     */
    publishBinary(
        channel: string,
        data: ArrayBuffer | DataView | Uint8Array | Uint16Array | Uint32Array,
        last: boolean,
        meta?: object,
        callback?: Listener,
    ): void;

    /**
     * Returns a string representing the status of the Bayeux communication with the Bayeux server.
     *
     * @return the status of the Bayeux communication
     */
    getStatus(): Status;

    /**
     * Returns true if this instance is disconnected or disconnecting.
     *
     * @return whether this instance disconnected or disconnecting.
     */
    isDisconnected(): boolean;

    /**
     * Sets the backoff period used to increase the backoff time when retrying an unsuccessful or
     * failed message.
     *
     * Default value is 1 second, which means if there is a persistent failure the retries will
     * happen after 1 second, then after 2 seconds, then after 3 seconds, etc. So for example with
     * 15 seconds of elapsed time, there will be 5 retries (at 1, 3, 6, 10 and 15 seconds elapsed).
     *
     * @param period the backoff period to set
     */
    setBackoffIncrement(period: number): void;

    /**
     * Returns the backoff period used to increase the backoff time when retrying an unsuccessful or
     * failed message.
     *
     * @returns the backoff increment
     */
    getBackoffIncrement(): void;

    /**
     * Returns the backoff period to wait before retrying an unsuccessful or failed message.
     *
     * @returns the backoff period
     */
    getBackoffPeriod(): void;

    /**
     * Increases the backoff period up to the maximum value configured.
     *
     * @returns the backoff period after increment
     */
    increaseBackoffPeriod(): number;

    /**
     * Resets the backoff period to zero.
     */
    resetBackoffPeriod(): void;

    /**
     * Sets the log level for console logging.
     *
     * @param level the log level string
     */
    setLogLevel(level: 'error' | 'warn' | 'info' | 'debug'): void;

    /**
     * Registers an extension whose callbacks are called for every incoming message (that comes from
     * the server to this client implementation) and for every outgoing message (that originates
     * from this client implementation for the server).
     *
     * The format of the extension object is the following:
     *
     *     {
     *       incoming: (message) => { ... },
     *       outgoing: (message) => { ... }
     *     }
     *
     * Both properties are optional, but if they are present they will be called respectively for
     * each incoming message and for each outgoing message.
     *
     * @param name the name of the extension
     * @param extension the extension to register
     * @return true if the extension was registered, false otherwise
     */
    registerExtension(name: string, extension: Extension): boolean;

    /**
     * Unregister an extension previously registered with `registerExtension`.
     *
     * @param name the name of the extension to unregister.
     * @return true if the extension was unregistered, false otherwise
     */
    unregisterExtension(name: string): boolean;

    /**
     * Find the extension registered with the given name.
     *
     * @param name the name of the extension to find
     * @return the extension found or null if no extension with the given name has been registered
     */
    getExtension(name: string): Extension;

    /**
     * Returns the name assigned to this CometD object, or the string 'default' if no name has been
     * explicitly passed as parameter to the constructor.
     *
     * @return the name assigned to this CometD object, or `'default'`
     */
    getName(): string;

    /**
     * Returns the client ID assigned by the Bayeux server during handshake.
     *
     * @return the client ID assigned by the Bayeux server
     */
    getClientId(): string;

    /**
     * Returns the URL of the Bayeux server.
     *
     * @return the URL of the Bayeux server
     */
    getURL(): string;

    /**
     * Returns the configuration for this CometD object.
     *
     * @return the configuration for this CometD object
     */
    getConfiguration(): Configuration;

    /**
     * Handler invoked every time a listener or subscriber throws an exception.
     *
     * @param exception the exception thrown
     * @param subscriptionHandle the listener or subscription that threw the exception
     * @param isListener whether it was a listener
     * @param message the message received from the Bayeux server
     */
    onListenerException: (
        exception: any,
        subscriptionHandle: SubscriptionHandle,
        isListener: boolean,
        message: string,
    ) => void;
}
