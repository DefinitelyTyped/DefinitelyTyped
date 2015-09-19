// Type definitions for pusher-js
// Project: https://github.com/pusher/pusher-js
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "pusher-js" {

    namespace pusher {
        interface PusherStatic {
            new(apiKey: string, config?: Config): Pusher;
        }

        interface Pusher {
            subscribe(name: string): Channel;
            subscribeAll(): void;
            unsubscribe(name: string): void;
            channel(name: string): Channel;
            allChannels(): Channel[];
            bind(eventName: string, callback: Function): Pusher;
            bind_all(callback: Function): Pusher;
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

        interface Channel {
            bind(eventName: string, callback: Function, context?: any): Channel;
            bind_all(callback: Function): Channel;
            unbind(eventName?: string, callback?: Function, context?: any): Channel;
            unbind_all(eventName?: string, callback?: Function): Channel;
            trigger(eventName: string, data?: any): any;
            pusher: Pusher;
            name: string;
            subscribed: boolean;
        }
    }

    var pusher: pusher.PusherStatic;

    export = pusher;
}

