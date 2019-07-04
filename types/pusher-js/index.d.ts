// Type definitions for pusher-js 4.2
// Project: https://github.com/pusher/pusher-js
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Lance Ivy <https://github.com/cainlevy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pusher {
    interface PusherStatic {
        logToConsole: boolean;
        log: (msg: string) => void;
        instances: Pusher[];
        isReady: boolean;
        new (apiKey: string, config?: Config): Pusher;
    }

    interface Pusher extends EventsDispatcher {
        channel(name: string): Channel;
        allChannels(): Channel[];
        connect(): void;
        disconnect(): void;
        subscribe(name: string): Channel;
        subscribeAll(): void;
        unsubscribe(name: string): void;
        isEncrypted(): boolean;
        key: string;
        config: Config; // TODO: add GlobalConfig typings
        channels: any; // TODO: Type this
        global_emitter: EventsDispatcher;
        sessionID: number;
        timeline: any; // TODO: Type this
        connection: ConnectionManager;
    }

    interface Config {
        /**
         * Forces the connection to use encrypted transports.
         */
        forceTLS?: boolean;
        /**
         * Forces the connection to use encrypted transports.
         * @deprecated
         */
        encrypted?: boolean;

        /**
         * Endpoint on your server that will return the authentication signature needed for private channels.
         */
        authEndpoint?: string;

        /**
         * Defines how the authentication endpoint, defined using authEndpoint, will be called.
         * There are two options available: ajax and jsonp.
         */
        authTransport?: 'ajax' | 'jsonp';

        /**
         * Allows passing additional data to authorizers. Supports query string params and headers (AJAX only).
         * For example, following will pass foo=bar via the query string and baz: boo via headers:
         */
        auth?: AuthConfig;

        /**
         * If you need custom authorization behavior you can provide your own authorizer function as follows:
         */
        authorizer?: Authorizer;

        /**
         * Allows connecting to a different datacenter by setting up correct hostnames and ports for the connection.
         */
        cluster?: string;

        /**
         * Disables stats collection, so that connection metrics are not submitted to Pusher’s servers. These stats
         * are used for internal monitoring only and they do not affect the account stats.
         */
        disableStats?: boolean;

        /**
         * Specifies which transports should be used by Pusher to establish a connection.
         * Useful for applications running in controlled, well-behaving environments.
         * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
         * Additional transports may be added in the future and without adding them to this list, they will be disabled.
         */
        enabledTransports?: Transport[];

        /**
         * Specified which transports must not be used by Pusher to establish a connection.
         * This settings overwrites transports whitelisted via the enabledTransports options.
         * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
         * Additional transports may be added in the future and without adding them to this list, they will be enabled.
         */
        disabledTransports?: Transport[];

        /**
         * Ignores null origin checks for HTTP fallbacks. Use with care, it should be disabled only if necessary (i.e. PhoneGap).
         */
        ignoreNullOrigin?: boolean;

        /**
         * After this time (in miliseconds) without any messages received from the server,
         * a ping message will be sent to check if the connection is still working.
         * Default value is is supplied by the server, low values will result in unnecessary traffic.
         */
        activityTimeout?: number;

        /**
         * Time before the connection is terminated after sending a ping message.
         * Default is 30000 (30s). Low values will cause false disconnections, if latency is high.
         */
        pongTimeout?: number;

        wsHost?: string;
        wsPath?: string;
        wsPort?: number;
        wssPort?: number;
        httpHost?: string;
        httpPort?: number;
        httpsPort?: number;
    }

    type Transport = 'ws' | 'wss' | 'xhr_streaming' | 'xhr_polling' | 'sockjs';

    interface AuthConfig {
        params?: { [key: string]: any };
        headers?: { [key: string]: any };
    }

    interface AuthInfo {
        auth: string;
        channel_data?: string;
    }

    type Authorizer = (channel: Channel, options: Config) => {
        authorize: (socketId: string, callback: (errored: boolean, authInfo?: AuthInfo) => void) => void;
    };

    type EventCallback = (context: any, data: any) => void;

    interface EventsDispatcher {
        bind(eventName: string, callback: EventCallback, context?: any): this;
        bind_global(callback: EventCallback): this;
        unbind(eventName?: string | null, callback?: EventCallback | null, context?: any): this;
        unbind_global(callback?: EventCallback): this;
        unbind_all(): this;
        emit(eventName: string, data?: any): this;
    }

    interface Channel extends EventsDispatcher {
        /** Triggers an event */
        trigger(eventName: string, data?: any): boolean;
        pusher: Pusher;
        name: string;
        subscribed: boolean;
        /**
         * Authenticates the connection as a member of the channel.
         */
        authorize(socketId: string, callback: (data: any) => void): void;
    }

    interface ConnectionManager extends EventsDispatcher {
        key: string;
        options: any; // TODO: Timeline.js
        state: string;
        socket_id: string;
        connection: any; // TODO: Type this
        encrypted: boolean;
        timeline: any; // TODO: Type this
        connectionCallbacks: {
            message: (message: string) => void;
            ping: () => void;
            activity: () => void;
            error: (error: any) => void;
            closed: () => void;
        };
        errorCallbacks: {
            ssl_only: () => void;
            refused: () => void;
            backoff: () => void;
            retry: () => void;
        };
        handshakeCallbacks: {
            ssl_only: () => void;
            refused: () => void;
            backoff: () => void;
            retry: () => void;
            connected: (handshake: any) => void; // TODO: Type this
        };
        /**
         * Establishes a connection to Pusher.
         *
         * Does nothing when connection is already established. See top-level doc
         * to find events emitted on connection attempts.
         */
        connect(): void;
        /**
         * Sends raw data.
         */
        send(data: string): boolean;
        /**
         * Sends an event.
         */
        send_event(name: string, data: string, channel: string): boolean;
        /** Closes the connection. */
        disconnect(): void;
        isEncrypted(): boolean;
    }

    interface PresenceChannel<T> extends Channel {
        members: Members<T>;
    }

    interface Members<T> {
        /**
         * Returns member's info for given id.
         *
         * Resulting object containts two fields - id and info.
         */
        get(id: string): null | T;
        /**
         * Calls back for each member in unspecified order.
         */
        each(callback: (member: Member<T>) => void): void;
        members: { [id: string]: Member<T> };
        count: number;
        myID: string;
        me: Member<T>;
    }

    interface Member<T> {
        id: string;
        info: T;
    }
}

declare var pusher: pusher.PusherStatic;

export as namespace Pusher;

export = pusher;
