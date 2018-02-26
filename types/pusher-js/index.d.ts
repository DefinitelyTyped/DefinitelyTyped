// Type definitions for pusher-js 3.0.0
// Project: https://github.com/pusher/pusher-js
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace pusher {
    interface PusherStatic {
        new (apiKey: string, config?: Config): Pusher;
    }

    interface Pusher {
        subscribe(name: string): Channel;
        subscribeAll(): void;
        unsubscribe(name: string): void;
        channel(name: string): Channel;
        allChannels(): Channel[];
        bind(eventName: string, callback: Function): Pusher;
        bind_all(callback: Function): Pusher;
        disconnect(): void;
        key: string;
        config: Config; //TODO: add GlobalConfig typings
        channels: any; //TODO: Type this
        global_emitter: EventsDispatcher;
        sessionID: number;
        timeline: any; //TODO: Type this
        connection: ConnectionManager;
    }

    interface Config {
        /**
         * Forces the connection to use encrypted transports.
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
        authTransport?: string;

        /**
         * Allows passing additional data to authorizers. Supports query string params and headers (AJAX only).
         * For example, following will pass foo=bar via the query string and baz: boo via headers:
         */
        auth?: AuthConfig;


        /**
         * Allows connecting to a different datacenter by setting up correct hostnames and ports for the connection.
         */
        cluster?: string;


        /**
         * Disables stats collection, so that connection metrics are not submitted to Pusher’s servers.
         */
        disableStats?: boolean;

        /**
         * Specifies which transports should be used by Pusher to establish a connection.
         * Useful for applications running in controlled, well-behaving environments.
         * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
         * Additional transports may be added in the future and without adding them to this list, they will be disabled.
         */
        enabledTransports?: string[];


        /**
         * Specified which transports must not be used by Pusher to establish a connection.
         * This settings overwrites transports whitelisted via the enabledTransports options.
         * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
         * Additional transports may be added in the future and without adding them to this list, they will be enabled.
         */
        disabledTransports?: string[];

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
        wsPort?: number;
        wssPort?: number;
        httpHost?: string;
        httpPort?: number;
        httpsPort?: number;
    }

    interface AuthConfig {
        params?: { [key: string]: any };
        headers?: { [key: string]: any };
    }

    interface GenericEventsDispatcher<Self extends EventsDispatcher> extends EventsDispatcher {
        bind(eventName: string, callback: Function, context?: any): Self;
        bind_all(callback: Function): Self;
        unbind(eventName?: string, callback?: Function, context?: any): Self;
        unbind_all(eventName?: string, callback?: Function): Self;
        emit(eventName: string, data?: any): Self;
    }

    interface Channel extends GenericEventsDispatcher<Channel> {
        /** Triggers an event */
        trigger(eventName: string, data?: any): boolean;
        pusher: Pusher;
        name: string;
        subscribed: boolean;
        /**
         * Authenticates the connection as a member of the channel.
         * @param  {String} socketId
         * @param  {Function} callback
         */
        authorize(socketId: string, callback: (data: any) => void): void;
    }

    interface EventsDispatcher {
        bind(eventName: string, callback: Function, context?: any): EventsDispatcher;
        bind_all(callback: Function): EventsDispatcher;
        unbind(eventName?: string, callback?: Function, context?: any): EventsDispatcher;
        unbind_all(eventName?: string, callback?: Function): EventsDispatcher;
        emit(eventName: string, data?: any): EventsDispatcher;
    }

    interface ConnectionManager extends GenericEventsDispatcher<ConnectionManager> {
        key: string;
        options: any; //TODO: Timeline.js
        state: string;
        socket_id: string;
        connection: any; //TODO: Type this
        encrypted: boolean;
        timeline: any; //TODO: Type this
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
            connected: (handshake: any) => void; //TODO: Type this
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
         * @param {String} data
         */
        send(data: string): boolean;
        /** Sends an event.
         *
         * @param {String} name
         * @param {String} data
         * @param {String} [channel]
         * @returns {Boolean} whether message was sent or not
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
         *
         * @param {Number} id
         * @return {Object} member's info or null
         */
        get(id: number): T;
        /**
         * Calls back for each member in unspecified order.
         *
         * @param  {Function} callback
         */
        each(callback: (member: any) => void): void;
        members: { [id: number]: UserInfo<T> };
        count: number;
        myID: number;
        me: UserInfo<T>;
    }

    interface UserInfo<T> {
        id: number;
        info: T;
    }
}

declare var pusher: pusher.PusherStatic;

export as namespace Pusher;

export = pusher;
