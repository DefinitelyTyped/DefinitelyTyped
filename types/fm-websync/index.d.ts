// Type definitions for fm-websync 3.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Markus Mauch <https://github.com/markusmauch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fm {
    namespace websync {
        interface initializeConfig {
            /**
             * If set to true, an asynchronous disconnect request will be launched when the page unloads. If set to false, no automatic disconnection will be attempted.
             * If set to an object, then a disconnect request will be launched when the page unloads using the object as the disconnect configuration.
             * (See disconnectConfig for details.) Note that automatic disconnects are a best-effort. The only way to guarantee success is to execute the disconnect synchronously
             * and target a request URL on the same domain as the page ({ sync: true, requestUrl: '...relative path.../request.ashx' }). Defaults to false.
             */
            autoDisconnect?: boolean;

            /**
             * The amount of time in milliseconds to add to the delay between each reconnect attempt in the event of network failure. Defaults to 3000 (3 seconds).
             */

            backoffInterval?: number;

            /**
             * The URL of the HTML frame to be used with HTML5 postMessage for cross-domain environments. Must have the same domain as requestUrl.
             * Defaults to a dynamically generated URL based on the host of the client script URL (or the host web.config attribute, if specified) and the path to the WebSync Server
             * ClientHandler registered in web.config with "frame" added to the query.
             */
            clientFrameUrl?: string;

            /**
             * The domain key to send with each request. If using WebSync On-Demand, this should be set to the public or private API key specified in the Frozen Mountain Portal.
             * If using WebSync Server, this should be used only if grouping connections. Defaults to "11111111-1111-1111-1111-111111111111".
             */
            key?: string;

            /**
             * The callback to invoke after onSuccess or onFailure. See initializeCompleteArgs for callback argument details.
             */
            onComplete?(args: baseArgs): void;

            /**
             * The callback to invoke if the initialize fails. Defaults to an alert of the error. See initializeFailureArgs for callback argument details.
             */
            onFailure?(args: initializeFailureArgs): void;

            /**
             * The callback to invoke if the initialize succeeds. See initializeSuccessArgs for callback argument details.
             */
            onSuccess?(args: baseArgs): void;

            /**
             * Whether or not to suppress the alerting of a failure if the client is already initialized.
             */
            quiet?: boolean;

            /**
             * The URL of the WebSync request handler. This URL typically ends with request.ashx. Must have the same domain as clientFrameUrl.
             * Defaults to a dynamically generated URL based on the host of the client script URL (or the host web.config attribute, if specified) and the path to the
             * WebSync Server RequestHandler registered in web.config.
             */
            requestUrl?: string;

            /**
             * The number of times to retry a request in the event of network failure before considering it failed and invoking the corresponding OnFailure callback. Defaults to 3.
             */
            retries?: number;

            /**
             * The URLs to use for streaming connections. Three properties are available:
             *
             * requestUrl: string
             *      Same as the root requestUrl parameter, but used for streaming connections. Must have the same domain as stream.clientFrameUrl.
             * Defaults to a dynamically generated URL based on the host of the client script URL (or the streamHost web.config attribute, if specified) and the path to the
             * WebSync Server RequestHandler registered in web.config.
             * clientFrameUrl: string
             *      Same as the root clientFrameUrl parameter, but used for streaming connections. Must have the same domain as stream.requestUrl.
             * Defaults to a dynamically generated URL based on the host of the client script URL (or the streamHost web.config attribute, if specified) and the path to the
             * WebSync Server ClientHandler registered in web.config with "frame" added to the query.
             * timeout: number
             *      Same as the root timeout parameter, but used for streaming connections. Defaults to the root timeout + 25000 (25 seconds).
             */
            stream?: any;

            /**
             * The number of milliseconds to wait for a standard request to return a response before it is cancelled and a new attempt is made. Defaults to 15000 (15 seconds).
             */
            timeout?: number;

            /**
             * The token sent with every client request identifying it for query-based load balancing. Defaults to the current timestamp.
             */

            token?: string;

            /**
             * An object specifying URLs to be used for specific client methods. Overrides initializeConfig.requestUrl for the specified method type, but can be overridden
             * by the requestUrl specified in individual method configurations.
             *
             * connect: string
             * The URL to use for all client.connect requests.
             *
             * bind: string
             * The URL to use for all client.bind requests.
             *
             * unbind: string
             * The URL to use for all client.unbind requests.
             *
             * subscribe: string
             * The URL to use for all client.subscribe requests.
             *
             * unsubscribe: string
             * The URL to use for all client.unsubscribe requests.
             *
             * publish: string
             * The URL to use for all client.publish requests.
             *
             * disconnect: string
             * The URL to use for all client.disconnect requests.
             */
            urls?: any;
        }

        interface baseArgs {
            [key: string]: any;
        }

        interface baseRequestConfig {
            /**
             * Extra meta data to associate with the request/response.
             */
            meta?: any;

            /**
             * The URL of the proxy to use for this request.
             */
            requestUrl?: string;

            /**
             * Whether to ignore errors when parsing the server response. If true, any errors thrown while parsing the JSON response received from the server will be ignored.
             * Defaults to false.
             */
            suppressErrors?: boolean;

            /**
             * Whether the request should be executed asynchronously. If true, the request will be executed synchronously if supported by the browser; otherwise,
             * it will be executed asynchronously. All browsers support synchronous requests if the request URL is the same domain as the page. Synchronous requests
             * are not supported in IE6 and IE7 for cross-domain environments. Defaults to false.
             */
            sync?: boolean;
        }

        interface connectConfig extends baseRequestConfig {
            /**
             * The callback to invoke after onSuccess or onFailure. See connectCompleteArgs for callback argument details.
             */
            onComplete?(args: connectCompleteArgs): void;

            /**
             * The callback to invoke if the connect fails. Defaults to an alert of the error. See connectFailureArgs for callback argument details.
             */
            onFailure?(args: connectFailureArgs): void;

            /**
             * The callback to invoke if the streaming connection fails. See streamFailureArgs for callback argument details.
             * This method will be invoked if (a) the connection was lost, automatic retries succeeded, but the client had idled on the server (and so needs to reconnect),
             * or (b) the connection was lost and automatic retries failed. In the former case, willReconnect is true, and in the latter case, willReconnect is false.
             * See client for more details on these two scenarios.
             * If willReconnect is true, the client will automatically reconnect. If the reconnect succeeds, the callback specified by onSuccess will be invoked with isReconnect set to true.
             * If the reconnect fails, the callback specified by onFailure will be invoked with isReconnect set to false.
             * With the exception of UI updates, invocations of this callback with willReconnect set to true can be ignored.
             */
            onStreamFailure?(args: streamFailureArgs): void;

            /**
             * The callback to invoke if the connect succeeds. See connectSuccessArgs for callback argument details.
             */
            onSuccess?(args: connectSuccessArgs): void;

            /**
             * The callback to invoke when a message is received on a channel that has no local callback specified to handle it. See receiveArgs for callback argument details.
             * This can occur if (a) a client is manually subscribed to a channel by the server or (b) a client subscribed to a channel and then manually removed the local callback using client.
             */
            onUnhandledReceive?(args: receiveArgs): void;

            /**
             * Whether to always attempt to stay connected in the event of network failure. If true, the client will continually reconnect, even after exhausting the specified number
             * of retries specified by initializeConfig.retries. If false, the client will stop reconnecting if all retry attempts fail.
             */
            stayConnected?: boolean;
        }

        interface subscribeConfig extends baseRequestConfig {
            /**
             * The channel to which the client should be subscribed. Must start with a forward slash (/). Overrides channels.
             */
            channel?: string;

            /**
             * The channels to which the client should be subscribed. Each must start with a forward slash (/). Overrides channel.
             */
            channels?: string[];

            /**
             * The callback to invoke after onSuccess or onFailure. See subscribeCompleteArgs for callback argument details.
             */
            onComplete?(args: subscribeCompleteArgs): void;

            /**
             * (OptionalThe callback to invoke if the subscribe fails. See subscribeFailureArgs for callback argument details.
             */
            onFailure?(args: subscribeFailureArgs): void;

            /**
             * The callback to invoke when data is received on the channel(s). See receiveArgs for callback argument details.
             */
            onReceive?(args: receiveArgs): void;

            /**
             * Subscribers extension. The callback to invoke when a subscribers change notification is received (i.e. when a client subscribes to or unsubscribes from the channel(s)).
             * The current subscribe request will trigger this callback. See subscribersChangeArgs for callback argument details.
             */
            onSubscribersChange?(args: subscribersChangeArgs): void;

            /**
             * The callback to invoke if the subscribe succeeds. See subscribeSuccessArgs for callback argument details.
             */
            onSuccess?(args: subscribeSuccessArgs): void;
        }

        interface initializeFailureArgs extends baseArgs {
            /**
             * The error generated while initializing.
             */
            error: string;
        }

        interface subscribeSuccessArgs extends baseResponseArgs {
            /**
             * The channel to which the client was subscribed. Must start with a forward slash (/).
             */
            channel: string;

            /**
             * The channels to which the client was subscribed. Each must start with a forward slash (/).
             */
            channels: string[];

            /**
             * Whether the call to client.subscribe was triggered by a reconnection after network failure.
             */
            isResubscribe: boolean;

            /**
             * Subscribers extension. The active subscribed clients on the just-subscribed channel(s).
             */
            subscribedClients: subscribedClient[];
        }

        interface subscribeCompleteArgs extends baseResponseArgs {
            /**
             * Whether the call to client.subscribe was triggered by a reconnection after network failure.
             */
            isResubscribe: boolean;
        }

        interface subscribeFailureArgs extends baseFailureArgs {
            /**
             * Whether the call to client.subscribe was triggered by a reconnection after network failure.
             */
            isResubscribe: boolean;
        }

        interface baseFailureArgs extends baseResponseArgs {
            /**
             * The error generated while completing the request.
             */
            error: string;
        }

        interface baseResponseArgs extends baseArgs {
            /**
             * The singleton client.
             */
            client: client;

            /**
             * The ID of the singleton client.
             */
            clientId: string;

            /**
             * Extra meta data associated with the request/response.
             */
            meta: any;

            /**
             * The date/time the message was processed on the server.
             */
            timestamp: Date;
        }

        interface connectSuccessArgs extends baseResponseArgs {
            /**
             * Whether the call to client.connect was triggered by a reconnection after network failure.
             */
            isReconnect: boolean;
        }

        interface connectFailureArgs extends baseResponseArgs {
            /**
             * The error generated while completing the request.
             */
            error: string;

            /**
             * Whether the call to client.connect was triggered by a reconnection after network failure.
             */
            isReconnect: boolean;

            /**
             * Whether or not to reconnect automatically after this callback has finished execution.
             */
            reconnect: boolean;
        }

        interface streamFailureArgs extends baseResponseArgs {
            /**
             * The error generated while completing the request.
             */
            error: string;

            /**
             * Whether the client will automatically reconnect after the callback returns.
             */
            willReconnect: boolean;
        }

        interface connectCompleteArgs extends baseResponseArgs {
            /**
             * Whether the call to client.connect was triggered by a reconnection after network failure.
             */
            isReconnect: boolean;
        }

        interface receiveArgs extends baseResponseArgs {
            /**
             * The channel over which the data was published.
             */
            channel: string;

            /**
             * The published data.
             */
            data: any;

            /**
             * Details about the client publishing the data.
             */
            publishingClient: publishingClient;
        }

        interface subscribersChangeArgs extends baseResponseArgs {
            /**
             * The details of the change that occurred.
             */
            change?: subscribersChange;

            /**
             * The channel on which the change occurred.
             */
            channel?: string;
        }

        interface publishingClient {
            /**
             * The publishing client's bound records.
             */
            boundRecords: any;

            /**
             * The publishing client's unique identifier.
             */
            id: string;
        }

        interface subscribersChange {
            /**
             * The clients who subscribed to or unsubscribed from the channel.
             */
            clients: subscribedClient[];

            /**
             * The type of the change, either "subscribe" or "unsubscribe".
             */
            type: string;
        }

        interface subscribedClient {
            /**
             * The subscribed client's bound records.
             */
            boundRecords: any;

            /**
             * The subscribed client's unique identifier.
             */
            id: string;
        }

        interface disconnectConfig extends baseRequestConfig {
            /**
             * The callback to invoke after onSuccess or onFailure. See disconnectCompleteArgs for callback argument details.
             */
            onComplete?(args: baseResponseArgs): void;

            /**
             * The callback to invoke if the disconnect fails. See disconnectFailureArgs for callback argument details.
             */
            onFailure?(args: baseFailureArgs): void;

            /**
             * The callback to invoke if the disconnect succeeds. See disconnectSuccessArgs for callback argument details.
             */
            onSuccess?(args: baseResponseArgs): void;
        }

        interface unsubscribeSuccessArgs extends baseResponseArgs {
            /**
             * The channel from which the client was unsubscribed. Must start with a forward slash (/).
             */
            channel: string;

            /**
             * The channels from which the client was unsubscribed. Each must start with a forward slash (/).
             */
            channels: string[];
        }

        interface unsubscribeConfig extends baseRequestConfig {
            /**
             * The channel from which the client should be unsubscribed. Must start with a forward slash (/). Overrides channels.
             */
            channel?: string;

            /**
             * The channels from which the client should be unsubscribed. Each must start with a forward slash (/). Overrides channel.
             */
            channels?: string[];

            /**
             * The callback to invoke after onSuccess or onFailure. See unsubscribeCompleteArgs for callback argument details.
             */
            onComplete?(args: baseResponseArgs): void;

            /**
             * The callback to invoke if the unsubscribe fails. See unsubscribeFailureArgs for callback argument details.
             */
            onFailure?(args: baseFailureArgs): void;

            /**
             * The callback to invoke if the unsubscribe succeeds. See unsubscribeSuccessArgs for callback argument details.
             */
            onSuccess?(args: unsubscribeSuccessArgs): void;
        }

        class client {
            /**
             * Sets up and maintains a streaming connection to the server.
             * While this method will typically run asychronously, the WebSync client is designed to be used without (much) consideration for its asynchronous nature.
             * To that end, any calls to methods that require an active connection, like bind, subscribe and publish, will be queued automatically and executed once this
             * method has completed successfully.
             */
            connect(config: connectConfig): client;

            /**
             *
             * @param config Takes down a streaming connection to the server and unsubscribes the client.
             * After the disconnect completes successfully, any further calls to methods that require an active connection, like bind, subscribe and publish, will be queued
             * automatically and executed only if/when the client reconnects.
             */
            disconnect(config: disconnectConfig): client;

            /**
             * Initializes the client according to the specified configuration.
             * This method must always be called first. While is always executes synchronously, callbacks are allowed for the purposes of method chaining.
             */
            static initialize(config: initializeConfig): client;

            /**
             * Reconnects after a stream failure using either the most recent connectConfig or the one specified.
             * This method should only be called from the callback specified by onSreamFailure and only if the args.willReconnect flag is set to false.
             * Otherwise, the client will reconnect automatically.
             */
             reconnect(config?: connectConfig): client;

            /**
             * Subscribes the client to receive messages on one or more channels.
             * When the subscribe completes successfully, the callback specified by onSuccess will be invoked, passing in the subscribed channel(s),
             * including any modifications made on the server.
             */
            subscribe(config: subscribeConfig): client;

            /**
             * Unsubscribes the client from receiving messages on one or more channels.
             * When the unsubscribe completes successfully, the callback specified by onSuccess will be invoked, passing in the unsubscribed channel(s),
             * including any modifications made on the server.
             */
            unsubscribe(config: unsubscribeConfig): client;
        }
    }
}
