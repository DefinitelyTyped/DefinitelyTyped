import Emitter = require('component-emitter');
import { SCServer } from 'socketcluster-server';
import { SCAuthEngine } from 'sc-auth';
import { SocketProtocolIgnoreStatuses, SocketProtocolErrorStatuses } from 'sc-errors';
import { SCChannel } from 'sc-channel';
import WebSocket = require('ws');

declare class SCClientSocket extends Emitter {
    constructor(opts: SCClientSocket.ClientOptions);

    id: string;
    clientId: string;

    channels: {
        [channelName: string]: SCChannel;
    };

    readonly CONNECTING: 'connecting';
    readonly OPEN: 'open';
    readonly CLOSED: 'closed';

    state: SCClientSocket.States;
    getState(): SCClientSocket.States;

    readonly AUTHENTICATED: 'authenticated';
    readonly UNAUTHENTICATED: 'unauthenticated';

    authState: SCClientSocket.AuthStates;

    readonly PENDING: 'pending';

    pendingReconnect: boolean;
    pendingReconnectTimeout: number;

    ackTimeout: number;
    connectTimeout: number;

    pingTimeout: number;
    pingTimeoutDisabled: boolean;

    channelPrefix: string | null;
    disconnectOnUnload: boolean;

    authTokenName: string;

    connectAttempts: number;

    options: SCClientSocket.ClientOptions;

    authEngine: SCAuthEngine;
    codecEngine: SCServer.SCCodecEngine;

    readonly ignoreStatuses: SocketProtocolIgnoreStatuses;
    readonly errorStatuses: SocketProtocolErrorStatuses;

    getBytesReceived(): number;

    deauthenticate(callback?: (err: Error) => void): void;

    connect(): void;
    open(): void;
    disconnect(code?: number, data?: string | object): void;
    reconnect(code?: number, data?: string | object): void;
    destroy(code?: number, data?: string | object): void;

    decodeBase64(encodedString: string): string;
    encodeBase64(decodedString: string): string;

    getAuthToken(): object | null;
    authToken: object | null;

    getSignedAuthToken(): string | null;
    signedAuthToken: string | null;

    // Perform client-initiated authentication by providing an encrypted token string.
    authenticate(signedAuthToken: string, callback?: (err: Error, authStatus: SCClientSocket.AuthStatus) => void): void;

    decode(message: any): any;
    encode(object: any): any;

    send(data: any): void;

    emit(event: string, ...args: any[]): this;
    emit(event: string, data: any, callback?: (err: Error, responseData: any) => void): void;

    publish(channelName: string, data: any, callback?: (err: Error, ackData: any) => void): void;

    subscribe(channelName: string, options?: SCChannel.SCChannelOptions): SCChannel;
    unsubscribe(channelName: string): void;

    channel(channelName: string, options?: SCChannel.SCChannelOptions): SCChannel;

    destroyChannel(channelName: string): void;

    subscriptions(includePending?: boolean): string[];
    isSubscribed(channelName: string, includePending?: boolean): boolean;

    processPendingSubscriptions(): void;

    watch(channelName: string, handler: SCClientSocket.WatcherFunction): void;
    unwatch(channelName: string, handler?: SCClientSocket.WatcherFunction): void;
    watchers(channelName: string): SCClientSocket.WatcherFunction[];

    on(event: string, listener: SCClientSocket.AnyFunction): this;
    on(event: 'connecting', listener: () => void): this;
    on(
        event: 'connect',
        listener: (status: SCClientSocket.ConnectStatus, processSubscriptions: () => void) => void,
    ): this;
    on(event: 'connectAbort' | 'disconnect' | 'close', listener: (code: number, data: string | object) => void): this;
    on(event: 'kickOut', listener: (message: string, channelName: string) => void): this;
    on(event: 'authenticate', listener: (signedAuthToken: string | null) => void): this;
    on(event: 'deauthenticate', listener: (oldSignedToken: string | null) => void): this;
    on(event: 'authStateChange', listener: (stateChangeData: SCClientSocket.AuthStateChangeData) => void): this;
    on(event: 'removeAuthToken', listener: (oldToken: object | null) => void): this;
    on(
        event: 'subscribe' | 'subscribeRequest',
        listener: (channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    on(
        event: 'subscribeStateChange',
        listener: (stateChangeData: SCClientSocket.SubscribeStateChangeData) => void,
    ): this;
    on(
        event: 'subscribeFail',
        listener: (err: Error, channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    on(event: 'unsubscribe', listener: (channelName: string) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'raw', listener: (data: any) => void): this;
    on(event: 'message', listener: (message: WebSocket.Data) => void): this;

    once(event: string, listener: SCClientSocket.AnyFunction): this;
    once(event: 'connecting', listener: () => void): this;
    once(
        event: 'connect',
        listener: (status: SCClientSocket.ConnectStatus, processSubscriptions: () => void) => void,
    ): this;
    once(event: 'connectAbort' | 'disconnect' | 'close', listener: (code: number, data: string | object) => void): this;
    once(event: 'kickOut', listener: (message: string, channelName: string) => void): this;
    once(event: 'authenticate', listener: (signedAuthToken: string | null) => void): this;
    once(event: 'deauthenticate', listener: (oldSignedToken: string | null) => void): this;
    once(event: 'authStateChange', listener: (stateChangeData: SCClientSocket.AuthStateChangeData) => void): this;
    once(event: 'removeAuthToken', listener: (oldToken: object | null) => void): this;
    once(
        event: 'subscribe' | 'subscribeRequest',
        listener: (channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    once(
        event: 'subscribeStateChange',
        listener: (stateChangeData: SCClientSocket.SubscribeStateChangeData) => void,
    ): this;
    once(
        event: 'subscribeFail',
        listener: (err: Error, channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    once(event: 'unsubscribe', listener: (channelName: string) => void): this;
    once(event: 'error', listener: (err: Error) => void): this;
    once(event: 'raw', listener: (data: any) => void): this;
    once(event: 'message', listener: (message: WebSocket.Data) => void): this;

    off(event?: string, listener?: SCClientSocket.AnyFunction): this;
    off(event: 'connecting', listener?: () => void): this;
    off(
        event: 'connect',
        listener?: (status: SCClientSocket.ConnectStatus, processSubscriptions: () => void) => void,
    ): this;
    off(event: 'connectAbort' | 'disconnect' | 'close', listener?: (code: number, data: string | object) => void): this;
    off(event: 'kickOut', listener?: (message: string, channelName: string) => void): this;
    off(event: 'authenticate', listener?: (signedAuthToken: string | null) => void): this;
    off(event: 'deauthenticate', listener?: (oldSignedToken: string | null) => void): this;
    off(event: 'authStateChange', listener?: (stateChangeData: SCClientSocket.AuthStateChangeData) => void): this;
    off(event: 'removeAuthToken', listener?: (oldToken: object | null) => void): this;
    off(
        event: 'subscribe' | 'subscribeRequest',
        listener?: (channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    off(
        event: 'subscribeStateChange',
        listener?: (stateChangeData: SCClientSocket.SubscribeStateChangeData) => void,
    ): this;
    off(
        event: 'subscribeFail',
        listener?: (err: Error, channelName: string, subscriptionOptions: SCChannel.SCChannelOptions) => void,
    ): this;
    off(event: 'unsubscribe', listener?: (channelName: string) => void): this;
    off(event: 'error', listener?: (err: Error) => void): this;
    off(event: 'raw', listener?: (data: any) => void): this;
    off(event: 'message', listener?: (message: WebSocket.Data) => void): this;
}

export = SCClientSocket;

declare namespace SCClientSocket {
    type AnyFunction = (...args: any[]) => any;

    interface ClientOptions {
        host?: string;

        // Defaults to the current host (read from the URL).
        hostname?: string;

        // Defaults to false.
        secure?: boolean;

        // Defaults to 80 if !secure otherwise defaults to 443.
        port?: number;

        // The URL which SC uses to make the initial handshake for the WebSocket. Defaults to '/socketcluster/'.
        path?: string;

        // A map of key-value pairs which will be used as query parameters for the initial HTTP handshake which will initiate the WebSocket connection.
        query?: string | { [key: string]: string };

        // (milliseconds) - This is the timeout for getting a response to a SCSocket emit event (when a callback is provided).
        ackTimeout?: number;

        // (milliseconds)
        connectTimeout?: number;

        // Whether or not to automatically connect the socket as soon as it is created. Default is true.
        autoConnect?: boolean;

        // Whether or not to automatically reconnect the socket when it loses the connection.
        autoReconnect?: boolean;

        // Valid properties are: initialDelay (milliseconds), randomness (milliseconds), multiplier (decimal; default is 1.5) and maxDelay (milliseconds).
        autoReconnectOptions?: AutoReconnectOptions;

        // Whether or not a client automatically disconnects on page unload. If enabled, the client will disconnect when a user navigates away from the page.
        // This can happen when a user closes the tab/window, clicks a link to leave the page, or types a new URL into the address bar. Defaults to true.
        disconnectOnUnload?: boolean;

        // Turn on/off per-message deflate compression. If this is true, you need to make sure that this property is also set to true on the server-side.
        //  Note that this option is only relevant when running the client from Node.js. Most modern browsers will automatically use perMessageDeflate so
        // you only need to turn it on from the server-side.
        perMessageDeflate?: boolean;

        // Defaults to true; multiplexing allows you to reuse a socket instead of creating a second socket to the same address.
        multiplex?: boolean;

        // Defaults to null (0 milliseconds); this property affects channel subscription batching; it determines the period in milliseconds for batching
        // multiple subscription requests together. It only affects channels that have the batch option set to true. A value of null or 0 means that all
        // subscribe or unsubscribe requests which were made within the same call stack will be batched together. This property was introduced on the
        // client-side in SC version 8 (both the client and server versions need to be >= 8.0.0). Note that there is also a separate property with the
        // same name which can be configured on the server.
        pubSubBatchDuration?: number;

        // Whether or not to add a timestamp to the WebSocket handshake request.
        timestampRequests?: boolean;

        // The query parameter name to use to hold the timestamp.
        timestampParam?: string;

        // A custom engine to use for storing and loading JWT auth tokens on the client side.
        authEngine?: SCAuthEngine | null;

        // The name of the JWT auth token (provided to the authEngine - By default this is the localStorage variable name); defaults to 'socketCluster.authToken'.
        authTokenName?: string;

        // The type to use to represent binary on the client. Defaults to 'arraybuffer'.
        binaryType?: string;

        // Set this to false during debugging - Otherwise client connection will fail when using self-signed certificates.
        rejectUnauthorized?: boolean;

        // If you set this to true, any data/objects/arrays that you pass to the client socket will be cloned before being sent/queued up. If the socket
        // is disconnected and you emit an event, it will be added to a queue which will be processed upon reconnection. The cloneData option is false
        // by default; this means that if you emit/publish an object and that object changes somewhere else in your code before the queue is processed,
        // then the changed version of that object will be sent out to the server.
        cloneData?: boolean;

        // This is true by default. If you set this to false, then the socket will not automatically try to subscribe to pending subscriptions on
        // connect - Instead, you will have to manually invoke the processSubscriptions callback from inside the 'connect' event handler on the client side.
        // See SCSocket Client API. This gives you more fine-grained control with regards to when pending subscriptions are processed after the socket
        // connection is established (or re-established).
        autoSubscribeOnConnect?: boolean;

        // Lets you set a custom codec engine. This allows you to specify how data gets encoded before being sent over the wire and how it gets decoded
        // once it reaches the other side. The codecEngine must be an object which exposes an encode(object) and a decode(encodedData) function.
        // The encode function can return any data type - Commonly a string or a Buffer/ArrayBuffer. The decode function needs to return a JavaScript
        // object which adheres to the SC protocol. The idea of using a custom codec is that it allows you to compress SC packets in any format you like
        // (optimized for any use case) - By decoding these packets back into their original protocol form, SC will be able process them appropriately.
        // Note that if you provide a codecEngine when creating a client socket see 'codecEngine', you will need to make sure that the server uses the
        // same codec by passing the same engine to `worker.scServer.setCodecEngine(codecEngine)` when your SC worker initializes on the server side
        // (see 'setCodecEngine' method here). The default codec engine used by SC is here.
        codecEngine?: SCServer.SCCodecEngine | null;

        // A prefix to add to the channel names.
        channelPrefix?: string | null;

        subscriptionRetryOptions?: object | null;
    }

    interface AutoReconnectOptions {
        initialDelay?: number;
        randomness?: number;
        multiplier?: number;
        maxDelay?: number;
    }

    interface AuthStatus {
        isAuthenticated: AuthStates;
        authError: Error;
    }

    interface AuthStateChangeData {
        oldState: AuthStates;
        newState: AuthStates;
    }

    interface ConnectStatus {
        id: string;
        pingTimeout: number;
        isAuthenticated: boolean;
        authToken?: object;
        authError?: Error;
    }

    interface SubscribeStateChangeData {
        channel: string;
        oldState: SCChannel.ChannelState;
        newState: SCChannel.ChannelState;
        subscriptionOptions: SCChannel.SCChannelOptions;
    }

    type WatcherFunction = (data: any) => void;
    type AuthStates = 'authenticated' | 'unauthenticated';
    type States = 'connecting' | 'open' | 'closed';
}
