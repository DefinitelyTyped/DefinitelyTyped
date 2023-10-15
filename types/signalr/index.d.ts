// Type definitions for SignalR 2.4.3
// Project: http://www.asp.net/signalr
// Definitions by: Boris Yankov <https://github.com/borisyankov>, T. Michael Keesey <https://github.com/keesey>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>, Jason Heard <https://github.com/101100>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace SignalR {
    const enum ConnectionState {
        Connecting = 0,
        Connected = 1,
        Reconnecting = 2,
        Disconnected = 4,
    }

    interface AvailableEvents {
        onStart: string;
        onStarting: string;
        onReceived: string;
        onError: string;
        onConnectionSlow: string;
        onReconnect: string;
        onStateChanged: string;
        onDisconnect: string;
    }

    interface Transport {
        name: string;
        supportsKeepAlive(): boolean;
        send(connection: SignalR.Connection, data: any): void;
        start(connection: SignalR.Connection, onSuccess: () => void, onFailed: (error?: ConnectionError) => void): void;
        reconnect(connection: SignalR.Connection): void;
        lostConnection(connection: SignalR.Connection): void;
        stop(connection: SignalR.Connection): void;
        abort(connection: SignalR.Connection, async: boolean): void;
    }

    interface Transports {
        foreverFrame: Transport;
        longPolling: Transport;
        serverSentEvents: Transport;
        webSockets: Transport;
    }

    namespace Hub {
        interface Proxy {
            state: any;
            connection: Connection;
            hubName: string;
            init(connection: Connection, hubName: string): void;
            hasSubscriptions(): boolean;
            /**
             * Wires up a callback to be invoked when a invocation request is received from the server hub.
             *
             * @param eventName The name of the hub event to register the callback for.
             * @param callback The callback to be invoked.
             */
            on(eventName: string, callback: (...msg: any[]) => void): Proxy;
            /**
             * Removes the callback invocation request from the server hub for the given event name.
             *
             * @param eventName The name of the hub event to unregister the callback for.
             * @param callback [Optional] The callback to unregister. If not provided, all callbacks previously registered under that event name will be unregistered.
             */
            off(eventName: string, callback?: (...msg: any[]) => void): Proxy;
            /**
             * Invokes a server hub method with the given arguments.
             *
             * @param methodName The name of the server hub method.
             */
            invoke(methodName: string, ...args: any[]): JQueryPromise<any>;
        }

        interface Options {
            qs?: string | undefined;
            logging?: boolean | undefined;
            useDefaultPath?: boolean | undefined;
        }

        interface ClientHubInvocation {
            Hub: string;
            Method: string;
            Args: string;
            State: string;
        }

        interface Connection extends SignalR.Connection {
            proxies: { [hubName: string]: any };
            transport: { name: string; supportsKeepAlive: () => boolean };
            /**
             * Creates a new proxy object for the given hub connection that can be used to invoke
             * methods on server hubs and handle client method invocation requests from the server.
             *
             * @param hubName The name of the hub on the server to create the proxy for.
             */
            createHubProxy(hubName: string): Proxy;
        }

        interface HubCreator {
            /**
             * Creates a new hub connection.
             *
             * @param url [Optional] The hub route url, defaults to "/signalr".
             * @param options [Optional] Settings to use when creating the hubConnection.
             */
            (url?: string, options?: Options): Connection;
        }

        interface IHub {
            start(): void;
        }
    }

    interface StateChanged {
        oldState: number;
        newState: number;
    }

    interface ConnectionStates {
        connecting: number;
        connected: number;
        reconnecting: number;
        disconnected: number;
    }

    interface Resources {
        nojQuery: string;
        noTransportOnInit: string;
        errorOnNegotiate: string;
        stoppedWhileLoading: string;
        stoppedWhileNegotiating: string;
        errorParsingNegotiateResponse: string;
        errorDuringStartRequest: string;
        stoppedDuringStartRequest: string;
        errorParsingStartResponse: string;
        invalidStartResponse: string;
        protocolIncompatible: string;
        sendFailed: string;
        parseFailed: string;
        longPollFailed: string;
        eventSourceFailedToConnect: string;
        eventSourceError: string;
        webSocketClosed: string;
        pingServerFailedInvalidResponse: string;
        pingServerFailed: string;
        pingServerFailedStatusCode: string;
        pingServerFailedParse: string;
        noConnectionTransport: string;
        webSocketsInvalidState: string;
        reconnectTimeout: string;
        reconnectWindowTimeout: string;
    }

    interface AjaxDefaults {
        processData: boolean;
        timeout: number;
        async: boolean;
        global: boolean;
        cache: boolean;
    }

    interface ConnectionOptions {
        transport?: string | Array<string> | Transport | undefined;
        callback?: Function | undefined;
        waitForPageLoad?: boolean | undefined;
        jsonp?: boolean | undefined;
        pingInterval?: number | undefined;
        withCredentials?: boolean | undefined;
    }

    interface SimplifyLocation {
        protocol: string;
        host: string;
    }

    interface ConnectionErrorContext {
        readyState: number;
        responseText: string;
        status: number;
        statusText: string;
    }

    interface ConnectionError extends Error {
        context: ConnectionErrorContext;
        transport?: string | undefined;
        source?: string | undefined;
    }

    interface Connection {
        clientProtocol: string;
        ajaxDataType: string;
        contentType: string;
        id: string;
        json: JSON;
        logging: boolean;
        url: string;
        qs: string | Object;
        state: number;
        reconnectDelay: number;
        transportConnectTimeout: number;
        /**
         * This should be set by the server in response to the negotiate request (30s default)
         */
        disconnectTimeout: number;
        /**
         * This should be set by the server in response to the negotiate request
         */
        reconnectWindow: number;
        /**
         * Warn user of slow connection if we breach the X% mark of the keep alive timeout
         */
        keepAliveWarnAt: number;

        /**
         * Data sent with each request as a query string called "connectionData".
         */
        data?: string;

        /**
         * Data sent with each request as a query string called "connectionToken".
         */
        token?: string;

        /**
         * Starts the connection
         */
        start(): JQueryPromise<any>;

        /**
         * Starts the connection
         *
         * @param callback A callback function to execute when the connection has started
         */
        start(callback: () => void): JQueryPromise<any>;

        /**
         * Starts the connection
         *
         * @param options Options map
         */
        start(options: ConnectionOptions): JQueryPromise<any>;

        /**
         * Starts the connection
         *
         * @param options Options map
         * @param calback A callback function to execute when the connection has started
         */
        start(options: ConnectionOptions, callback: () => void): JQueryPromise<any>;

        /**
         * Adds a callback that will be invoked before anything is sent over the connection
         *
         * @param calback A callback function to execute before the connection is fully instantiated.
         */
        starting(callback: () => void): Connection;

        /**
         * Sends data over the connection
         *
         * @param options Options map
         * @param calback The data to send over the connection
         */
        send(data: string): Connection;

        /**
         * Adds a callback that will be invoked after anything is received over the connection
         *
         * @param calback A callback function to execute when any data is received on the connection
         */
        received(callback: (data: any) => void): Connection;

        /**
         * Adds a callback that will be invoked when the connection state changes
         *
         * @param calback A callback function to execute when the connection state changes
         */
        stateChanged(callback: (change: StateChanged) => void): Connection;

        /**
         * Adds a callback that will be invoked after an error occurs with the connection
         *
         * @param calback A callback function to execute when an error occurs on the connection
         */
        error(callback: (error: ConnectionError) => void): Connection;

        /**
         * Adds a callback that will be invoked when the client disconnects
         *
         * @param calback A callback function to execute when the connection is broken
         */
        disconnected(callback: () => void): Connection;

        /**
         * Adds a callback that will be invoked when the client detects a slow connection
         *
         * @param calback A callback function to execute when the connection is slow
         */
        connectionSlow(callback: () => void): Connection;

        /**
         * Adds a callback that will be invoked when the underlying transport begins reconnecting
         *
         * @param calback A callback function to execute when the connection enters a reconnecting state
         */
        reconnecting(callback: () => void): Connection;

        /**
         * Adds a callback that will be invoked when the underlying transport reconnects
         *
         * @param calback A callback function to execute when the connection is restored
         */
        reconnected(callback: () => void): Connection;

        /**
         * Stops listening
         *
         * @param async Whether or not to asynchronously abort the connection
         * @param notifyServer Whether we want to notify the server that we are aborting the connection
         */
        stop(async?: boolean, notifyServer?: boolean): Connection;

        log(msg: string): Connection;

        /**
         * Checks if url is cross domain
         *
         * @param url The base URL
         * @param against An optional argument to compare the URL against, if not specified it will be set to window.location. If specified it must contain a protocol and a host property.
         */
        isCrossDomain(url: string, against?: Location | SimplifyLocation): boolean;

        hub: Hub.Connection;

        lastError: ConnectionError;
        resources: Resources;
    }
}

interface SignalR {
    /**
     * Creates a new SignalR connection for the given url
     *
     * @param url   The URL of the long polling endpoint
     * @param queryString   [Optional] Custom querystring parameters to add to the connection URL. If an object, every non-function member will be added to the querystring. If a string, it's added to the QS as specified.
     * @param logging [Optional] A flag indicating whether connection logging is enabled to the browser console/log. Defaults to false.
     */
    (url: string, queryString?: string | Object, logging?: boolean): SignalR.Connection;
    ajaxDefaults: SignalR.AjaxDefaults;
    changeState(connection: SignalR.Connection, expectedState: number, newState: number): void;
    connectionState: SignalR.ConnectionStates;
    events: SignalR.AvailableEvents;
    transports: SignalR.Transports;
    hub: SignalR.Hub.Connection;
    hubConnection: SignalR.Hub.HubCreator;
    isDisconnecting(connection: SignalR.Connection): boolean;
    /**
     *   Reinstates the original value of $.connection and returns the signalR object for manual assignment.
     */
    noConflict(): SignalR.Connection;
    /**
     *   Current SignalR version.
     */
    version: string;
}

interface JQueryStatic {
    signalR: SignalR;
    connection: SignalR;
    hubConnection: SignalR.Hub.HubCreator;
}
