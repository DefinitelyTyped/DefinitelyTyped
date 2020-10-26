import { SocketProtocolIgnoreStatuses, SocketProtocolErrorStatuses } from 'sc-errors';
import WebSocket = require('ws');
import AsyncStreamEmitter = require('async-stream-emitter');
import AGChannel = require('ag-channel');
import Consumer = require('writable-consumable-stream/consumer');
import AGServer = require('socketcluster-server/server');
import DemuxedConsumableStream = require('stream-demux/demuxed-consumable-stream');
import ConsumableStream = require('consumable-stream');

import AuthEngine = require('./auth');
import AGTransport = require('./transport');

declare class AGClientSocket extends AsyncStreamEmitter<any> implements AGChannel.Client {
    readonly CONNECTING: 'connecting';
    readonly OPEN: 'open';
    readonly CLOSED: 'closed';

    readonly AUTHENTICATED: 'authenticated';
    readonly UNAUTHENTICATED: 'unauthenticated';

    readonly SUBSCRIBED: 'subscribed';
    readonly PENDING: 'pending';
    readonly UNSUBSCRIBED: 'unsubscribed';

    readonly ignoreStatuses: SocketProtocolIgnoreStatuses;
    readonly errorStatuses: SocketProtocolErrorStatuses;

    options: AGClientSocket.ClientOptions;

    id: string | null;
    clientId?: string;

    version: string | null;
    protocolVersion: AGClientSocket.ProtocolVersions;

    state: AGClientSocket.States;

    authState: AGClientSocket.AuthStates;
    signedAuthToken: AuthEngine.SignedAuthToken | null;
    authToken: AuthEngine.AuthToken | null;
    authTokenName: string;

    wsOptions?: WebSocket.ClientOptions;

    pendingReconnect: boolean;
    pendingReconnectTimeout: number;

    preparingPendingSubscriptions: boolean;

    ackTimeout: number;
    connectTimeout: number;

    pingTimeout: number;
    pingTimeoutDisabled: boolean;

    channelPrefix: string | null;
    disconnectOnUnload: boolean;

    connectAttempts: number;

    isBufferingBatch: boolean;
    isBatching: boolean;
    batchOnHandshake: boolean;
    batchOnHandshakeDuration: number;

    auth: AuthEngine.AGAuthEngine;
    codec: AGServer.CodecEngine;
    transport?: AGTransport;

    poolIndex?: number;

    constructor(opts: AGClientSocket.ClientOptions);

    emit(eventName: 'removeAuthToken', data: { oldAuthToken: AuthEngine.AuthToken }): void;
    emit(eventName: 'connect', data: AGClientSocket.ConnectData): void;
    emit(eventName: 'connecting', data: {}): void;
    emit(eventName: 'authStateChange', data: AGClientSocket.AuthStateChangeData): void;
    emit(eventName: 'authenticate', data: AGClientSocket.AuthenticateData): void;
    emit(eventName: 'deauthenticate', data: AGClientSocket.DeauthenticateData): void;
    emit(eventName: 'error', data: { error: Error }): void;
    emit(eventName: 'connectAbort' | 'disconnect' | 'close', data: AGClientSocket.CloseData): void;
    emit(eventName: 'subscribeStateChange', data: AGClientSocket.SubscribeStateChangeData): void;
    emit(eventName: 'subscribe' | 'subscribeRequest', data: AGClientSocket.SubscribeData): void;
    emit(eventName: 'subscribeFail', data: AGClientSocket.SubscribeFailData): void;
    emit(eventName: 'unsubscribe', data: AGClientSocket.UnsubscribeData): void;
    emit(eventName: 'kickOut', data: AGClientSocket.KickOutData): void;

    listener(eventName: 'removeAuthToken'): ConsumableStream<{ oldAuthToken: AuthEngine.AuthToken }>;
    listener(eventName: 'connect'): ConsumableStream<AGClientSocket.ConnectData>;
    listener(eventName: 'connecting'): ConsumableStream<{}>;
    listener(eventName: 'authStateChange'): ConsumableStream<AGClientSocket.AuthStateChangeData>;
    listener(eventName: 'authenticate'): ConsumableStream<AGClientSocket.AuthenticateData>;
    listener(eventName: 'deauthenticate'): ConsumableStream<AGClientSocket.DeauthenticateData>;
    listener(eventName: 'error'): ConsumableStream<{ error: Error }>;
    listener(eventName: 'connectAbort' | 'disconnect' | 'close'): ConsumableStream<AGClientSocket.CloseData>;
    listener(eventName: 'subscribeStateChange'): ConsumableStream<AGClientSocket.SubscribeStateChangeData>;
    listener(eventName: 'subscribe' | 'subscribeRequest'): ConsumableStream<AGClientSocket.SubscribeData>;
    listener(eventName: 'subscribeFail'): ConsumableStream<AGClientSocket.SubscribeFailData>;
    listener(eventName: 'unsubscribe'): ConsumableStream<AGClientSocket.UnsubscribeData>;
    listener(eventName: 'kickOut'): ConsumableStream<AGClientSocket.KickOutData>;

    /* AGChannel.Client start */

    closeChannel(channelName: string): void;

    killChannel(channelName: string): void;

    killChannelOutputConsumer(consumerId: number): void;
    killChannelListenerConsumer(consumerId: number): void;

    getChannelOutputConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getChannelListenerConsumerStats(consumerId: number): Consumer.ConsumerStats;

    getChannelBackpressure(channelName: string): number;

    getChannelListenerConsumerBackpressure(consumerId: number): number;
    getChannelOutputConsumerBackpressure(consumerId: number): number;

    channelCloseOutput(channelName: string): void;
    channelCloseListener(channelName: string, eventName: string): void;
    channelCloseAllListeners(channelName: string): void;

    channelKillOutput(channelName: string): void;
    channelKillListener(channelName: string, eventName: string): void;
    channelKillAllListeners(channelName: string): void;

    channelGetOutputConsumerStatsList(channelName: string): Consumer.ConsumerStats[];
    channelGetListenerConsumerStatsList(channelName: string, eventName: string): Consumer.ConsumerStats[];
    channelGetAllListenersConsumerStatsList(channelName: string): Consumer.ConsumerStats[];

    channelGetOutputBackpressure(channelName: string): number;
    channelGetListenerBackpressure(channelName: string, eventName: string): number;
    channelGetAllListenersBackpressure(channelName: string): number;

    channelHasOutputConsumer(channelName: string, consumerId: number): boolean;
    channelHasListenerConsumer(channelName: string, eventName: string, consumerId: number): boolean;
    channelHasAnyListenerConsumer(channelName: string, consumerId: number): boolean;

    getChannelState(channelName: string): AGChannel.ChannelState;
    getChannelOptions(channelName: string): object;

    subscribe(channelName: string, options?: AGClientSocket.SubscribeOptions): AGChannel<any>;
    unsubscribe(channelName: string): Promise<void>;
    isSubscribed(channelName: string, includePending?: boolean): boolean;

    transmitPublish(channelName: string, data: any): Promise<void>;
    invokePublish(channelName: string, data: any): Promise<{ channel: string; data: any }>;

    /* AGChannel.Client end */

    getBackpressure(): number;

    getState(): AGClientSocket.States;
    getBytesReceived(): number;

    deauthenticate(): Promise<void>;

    connect(): void;
    disconnect(code?: number, reason?: string): void;
    reconnect(code?: number, reason?: string): void;

    decodeBase64(encodedString: string): string;
    encodeBase64(decodedString: string): string;

    getAuthToken(): AuthEngine.AuthToken | null;

    getSignedAuthToken(): AuthEngine.SignedAuthToken | null;

    // Perform client-initiated authentication by providing an encrypted token string.
    authenticate(signedAuthToken: string): Promise<AGClientSocket.AuthStatus>;

    decode(message: any): any;
    encode(object: any): any;

    send(data: any): void;

    transmit(event: string, data: any, options?: { ackTimeout?: number }): Promise<void>;
    invoke(event: string, data: any, options?: { ackTimeout?: number }): Promise<any>;

    startBatch(): void;
    flushBatch(): void;
    cancelBatch(): void;

    startBatching(): void;
    stopBatching(): void;
    cancelBatching(): void;

    // ---- Receiver logic ----

    receiver(receiverName: string): DemuxedConsumableStream<any>;

    closeReceiver(receiverName: string): void;
    closeAllReceivers(): void;

    killReceiver(receiverName: string): void;
    killAllReceivers(): void;
    killReceiverConsumer(consumerId: number): void;

    getReceiverConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getReceiverConsumerStatsList(receiverName: string): Consumer.ConsumerStats[];
    getAllReceiversConsumerStatsList(): Consumer.ConsumerStats[];

    getReceiverBackpressure(receiverName: string): number;
    getAllReceiversBackpressure(): number;
    getReceiverConsumerBackpressure(consumerId: number): number;

    hasReceiverConsumer(receiverName: string, consumerId: number): boolean;
    hasAnyReceiverConsumer(consumerId: number): boolean;

    // ---- Procedure logic ----

    procedure(procedureName: string): DemuxedConsumableStream<any>;

    closeProcedure(procedureName: string): void;
    closeAllProcedures(): void;

    killProcedure(procedureName: string): void;
    killAllProcedures(): void;
    killProcedureConsumer(consumerId: number): void;

    getProcedureConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getProcedureConsumerStatsList(procedureName: string): Consumer.ConsumerStats[];
    getAllProceduresConsumerStatsList(): Consumer.ConsumerStats[];

    getProcedureBackpressure(procedureName: string): number;
    getAllProceduresBackpressure(): number;
    getProcedureConsumerBackpressure(consumerId: number): number;

    hasProcedureConsumer(procedureName: string, consumerId: number): boolean;
    hasAnyProcedureConsumer(consumerId: number): boolean;

    // ---- Channel logic ----

    channel(channelName: string): AGChannel<any>;

    closeAllChannelOutputs(): void;
    closeAllChannelListeners(): void;
    closeAllChannels(): void;

    killAllChannelOutputs(): void;
    killAllChannelListeners(): void;
    killAllChannels(): void;

    getAllChannelOutputsConsumerStatsList(): any[];
    getAllChannelListenersConsumerStatsList(): any[];

    getAllChannelOutputsBackpressure(): number;
    getAllChannelListenersBackpressure(): number;
    getAllChannelsBackpressure(): number;

    hasAnyChannelOutputConsumer(consumerId: any): boolean;
    hasAnyChannelListenerConsumer(consumerId: any): boolean;

    // ---- Subscriptions ----

    subscriptions(includePending?: boolean): string[];

    processPendingSubscriptions(): void;
}

export = AGClientSocket;

declare namespace AGClientSocket {
    type AnyFunction = (...args: any[]) => any;

    interface ClientOptions {
        socketPath?: string;

        host?: string;

        // Defaults to the current host (read from the URL).
        hostname?: string;

        // Defaults to false.
        secure?: boolean;

        // Defaults to 80 if !secure otherwise defaults to 443.
        port?: number;

        // The URL which SocketCluster uses to make the initial handshake for the WebSocket. Defaults to '/socketcluster/'.
        path?: string;

        // The protocol scheme for the transport. Defaults to 'ws' or 'wss', depending upon the valur of secure.
        protocolScheme?: string;

        // A map of key-value pairs which will be used as query parameters for the initial HTTP handshake which will initiate the WebSocket connection.
        query?: string | { [key: string]: string };

        // (milliseconds) - This is the timeout for getting a response to a AGClientSocket invoke action.
        ackTimeout?: number;

        // (milliseconds)
        connectTimeout?: number;

        // Whether or not to automatically connect the socket as soon as it is created. Default is true.
        autoConnect?: boolean;

        // Whether or not to automatically reconnect the socket when it loses the connection. Default is true.
        autoReconnect?: boolean;

        // Valid properties are: initialDelay (milliseconds), randomness (milliseconds), multiplier (decimal; default is 1.5) and maxDelay (milliseconds).
        autoReconnectOptions?: AutoReconnectOptions;

        // Whether or not a client automatically disconnects on page unload. If enabled, the client will disconnect when a user navigates away from the page.
        // This can happen when a user closes the tab/window, clicks a link to leave the page, or types a new URL into the address bar. Defaults to true.
        disconnectOnUnload?: boolean;

        // Whether or not to add a timestamp to the WebSocket handshake request.
        timestampRequests?: boolean;

        // The query parameter name to use to hold the timestamp.
        timestampParam?: string;

        // A custom engine to use for storing and loading JWT auth tokens on the client side.
        authEngine?: AuthEngine.AGAuthEngine | null;

        // The name of the JWT auth token (provided to the authEngine - By default this is the localStorage variable name); defaults to 'socketcluster.authToken'.
        authTokenName?: string;

        // The type to use to represent binary on the client. Defaults to 'arraybuffer'.
        binaryType?: string;

        // If you set this to true, any data/objects/arrays that you pass to the client socket will be cloned before being sent/queued up. If the socket
        // is disconnected and you emit an event, it will be added to a queue which will be processed upon reconnection. The cloneData option is false
        // by default; this means that if you emit/publish an object and that object changes somewhere else in your code before the queue is processed,
        // then the changed version of that object will be sent out to the server.
        cloneData?: boolean;

        // This is true by default. If you set this to false, then the socket will not automatically try to subscribe to pending subscriptions on
        // connect - Instead, you will have to manually invoke the processSubscriptions callback from inside the 'connect' event handler on the client side.
        // See AGClientSocket API. This gives you more fine-grained control with regards to when pending subscriptions are processed after the socket
        // connection is established (or re-established).
        autoSubscribeOnConnect?: boolean;

        // Lets you set a custom codec engine. This allows you to specify how data gets encoded before being sent over the wire and how it gets decoded
        // once it reaches the other side. The codecEngine must be an object which exposes an encode(object) and a decode(encodedData) function.
        // The encode function can return any data type - Commonly a string or a Buffer/ArrayBuffer. The decode function needs to return a JavaScript
        // object which adheres to the SC protocol. The idea of using a custom codec is that it allows you to compress SocketCluster packets in any format
        // you like (optimized for any use case) - By decoding these packets back into their original protocol form, SocketCluster will be able process
        // them appropriately. Note that if you provide a codecEngine when creating a client socket, you will need to make sure that the server uses the
        // same codec by passing the same engine to the AGServer constructor (using the codecEngine option).
        codecEngine?: AGServer.CodecEngine | null;

        // A prefix to add to the channel names.
        channelPrefix?: string | null;

        subscriptionRetryOptions?: object | null;

        // Whether or not to start batching messages immediately after the connection handshake completes. This is useful for handling connection recovery
        // when the client tries to resubscribe to a large number of channels in a very short amount of time. Defaults to false.
        batchOnHandshake?: boolean;

        // The amount of time in milliseconds after the handshake completes during which all socket messages will be batched. Defaults to 100.
        batchOnHandshakeDuration?: number;

        // The amount of milliseconds to wait before flushing each batch of messages. Defaults to 50.
        batchInterval?: number;

        protocolVersion?: ProtocolVersions;

        // This object will be passed to the constructor of the ws WebSocket instance.
        wsOptions?: WebSocket.ClientOptions;

        version?: string;

        clientId?: string;

        // pingTimeout will be connectTimeout at the start, but it will be updated with values provided by the 'connect' event.
        pingTimeout?: number;

        pingTimeoutDisabled?: boolean;

        callIdGenerator?: CallIdGenerator;
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
        oldAuthState: AuthStates;
        newAuthState: AuthStates;
        signedAuthToken?: AuthEngine.SignedAuthToken;
        authToken?: AuthEngine.AuthToken;
    }

    interface AuthenticateData {
        signedAuthToken: AuthEngine.SignedAuthToken;
        authToken: AuthEngine.AuthToken;
    }

    interface DeauthenticateData {
        oldSignedAuthToken: AuthEngine.SignedAuthToken | null;
        oldAuthToken: AuthEngine.AuthToken | null;
    }

    interface CloseData {
        code: number;
        reason: string;
    }

    interface ConnectData extends AGTransport.OnOpenValue {
        processPendingSubscriptions: () => void;
    }

    interface SubscribeStateChangeData extends SubscribeData {
        oldChannelState: AGChannel.ChannelState;
        newChannelState: AGChannel.ChannelState;
    }

    interface SubscribeData {
        channel: string;
        subscriptionOptions: SubscribeOptions;
    }

    interface SubscribeFailData {
        error: Error;
        channel: string;
        subscriptionOptions: SubscribeOptions;
    }

    interface UnsubscribeData {
        channel: string;
    }

    interface KickOutData {
        channel: string;
        message?: string;
    }

    interface SubscribeOptions {
        waitForAuth?: boolean;
        priority?: number;
        data?: any;
    }

    type AuthStates = 'authenticated' | 'unauthenticated';
    type States = 'connecting' | 'open' | 'closed';
    type ProtocolVersions = 1 | 2;
    type CallIdGenerator = () => number;
}
