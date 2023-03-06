// Type definitions for paho-mqtt 1.0
// Project: https://github.com/eclipse/paho.mqtt.javascript#readme
// Definitions by: Alex Mikhalev <https://github.com/amikhalev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = Paho.MQTT;

declare global {
    /**
     * Send and receive messages using web browsers.
     * <p>
     * This programming interface lets a JavaScript client application use the MQTT V3.1 or
     * V3.1.1 protocol to connect to an MQTT-supporting messaging server.
     *
     * The function supported includes:
     * <ol>
     * <li>Connecting to and disconnecting from a server. The server is identified by its host name and port number.
     * <li>Specifying options that relate to the communications link with the server,
     * for example the frequency of keep-alive heartbeats, and whether SSL/TLS is required.
     * <li>Subscribing to and receiving messages from MQTT Topics.
     * <li>Publishing messages to MQTT Topics.
     * </ol>
     * <p>
     * The API consists of two main objects:
     * <dl>
     * <dt><b>{@link Paho.MQTT.Client}</b></dt>
     * <dd>This contains methods that provide the functionality of the API,
     * including provision of callbacks that notify the application when a message
     * arrives from or is delivered to the messaging server,
     * or when the status of its connection to the messaging server changes.</dd>
     * <dt><b>{@link Paho.MQTT.Message}</b></dt>
     * <dd>This encapsulates the payload of the message along with various attributes
     * associated with its delivery, in particular the destination to which it has
     * been (or is about to be) sent.</dd>
     * </dl>
     * <p>
     * The programming interface validates parameters passed to it, and will throw
     * an Error containing an error message intended for developer use, if it detects
     * an error with any parameter.
     * <p>
     */
    namespace Paho.MQTT {
        /**
         * The Quality of Service used to deliver a message.
         * <dl>
         *    <dt>0 Best effort (default).</dt>
         *    <dt>1 At least once.</dt>
         *    <dt>2 Exactly once.</dt>
         * </dl>
         */
        type Qos = 0 | 1 | 2;

        interface MQTTError {
            /** A number indicating the nature of the error. */
            errorCode: number;

            /** Text describing the error */
            errorMessage: string;
        }
        interface WithInvocationContext {
            /**
             * <code>invocationContext</code> as passed in with the corresponding field in the connectOptions or
             * subscribeOptions.
             */
            invocationContext: any;
        }
        interface ErrorWithInvocationContext extends MQTTError, WithInvocationContext {}
        interface OnSubscribeSuccessParams extends WithInvocationContext {
            grantedQos: Qos;
        }

        /**
         * Called when the connect acknowledgement has been received from the server.
         * @param o
         *  A single response object parameter is passed to the onSuccess callback containing the following fields:
         *  <li><code>invocationContext</code> as passed in with the corresponding field in the connectOptions.
         */
        type OnSuccessCallback = (o: WithInvocationContext) => void;

        /**
         * Called when the subscribe acknowledgement has been received from the server.
         * @param o
         *  A single response object parameter is passed to the onSuccess callback containing the following fields:
         *  <li><code>invocationContext</code> as passed in with the corresponding field in the connectOptions.
         */
        type OnSubscribeSuccessCallback = (o: OnSubscribeSuccessParams) => void;

        /**
         * Called when the connect request has failed or timed out.
         * @param e
         *  A single response object parameter is passed to the onFailure callback containing the following fields:
         *  <li><code>invocationContext</code> as passed in with the corresponding field in the connectOptions.
         *  <li><code>errorCode</code> a number indicating the nature of the error.
         *  <li><code>errorMessage</code> text describing the error.
         */
        type OnFailureCallback = (e: ErrorWithInvocationContext) => void;

        /**
         * Called when a connection has been lost.
         * @param error A single response object parameter is passed to the onConnectionLost callback containing the
         *  following fields:
         *  <li>errorCode
         *  <li>errorMessage
         */
        type OnConnectionLostHandler = (error: MQTTError) => void;

        /**
         * Called when a message was delivered or has arrived.
         * @param message The {@link Paho.MQTT.Message} that was delivered or has arrived.
         */
        type OnMessageHandler = (message: Message) => void;

        /**
         * Attributes used with a connection.
         */
        interface ConnectionOptions {
            /**
             * If the connect has not succeeded within this number of seconds, it is deemed to have failed.
             * @default The default is 30 seconds.
             */
            timeout?: number | undefined;
            /** Authentication username for this connection. */
            userName?: string | undefined;
            /** Authentication password for this connection. */
            password?: string | undefined;
            /** Sent by the server when the client disconnects abnormally. */
            willMessage?: Message | undefined;
            /**
             * The server disconnects this client if there is no activity for this number of seconds.
             * @default The default value of 60 seconds is assumed if not set.
             */
            keepAliveInterval?: number | undefined;
            /**
             * If true(default) the client and server persistent state is deleted on successful connect.
             * @default true
             */
            cleanSession?: boolean | undefined;
            /** If present and true, use an SSL Websocket connection. */
            useSSL?: boolean | undefined;
            /** Passed to the onSuccess callback or onFailure callback. */
            invocationContext?: any;
            /**
             * Called when the connect acknowledgement has been received from the server.
             */
            onSuccess?: OnSuccessCallback | undefined;
            /**
             * Specifies the mqtt version to use when connecting
             * <dl>
             *     <dt>3 - MQTT 3.1</dt>
             *     <dt>4 - MQTT 3.1.1 (default)</dt>
             * </dl>
             * @default 4
             */
            mqttVersion?: 3 | 4 | undefined;
            /**
             * If set to true, will force the connection to use the selected MQTT Version or will fail to connect.
             */
            mqttVersionExplicit?: boolean | undefined;
            /**
             * Called when the connect request has failed or timed out.
             */
            onFailure?: OnFailureCallback | undefined;
            /**
             * If present this contains either a set of hostnames or fully qualified
             * WebSocket URIs (ws://example.com:1883/mqtt), that are tried in order in place of the host and port
             * paramater on the construtor. The hosts are tried one at at time in order until one of then succeeds.
             */
            hosts?: string[] | undefined;
            /**
             * If present the set of ports matching the hosts. If hosts contains URIs, this property is not used.
             */
            ports?: number[] | undefined;
            /**
             * Sets whether the client will automatically attempt to reconnect
             * to the server if the connection is lost.
             */
            reconnect?: boolean | undefined;
            /**
             * If present, should contain a list of fully qualified WebSocket
             * uris (e.g. ws://mqtt.eclipseprojects.io:80/mqtt), that are tried
             * in order in place of the host and port parameter of the
             * construtor. The uris are tried one at a time in order until one
             * of them succeeds. Do not use this in conjunction with hosts as
             * the hosts array will be converted to uris and will overwrite this
             * property.
             */
            uris?: string[] | undefined;
        }

        /**
         * Used to control a subscription
         */
        interface SubscribeOptions {
            /** the maximum qos of any publications sent as a result of making this subscription. */
            qos?: Qos | undefined;
            /** passed to the onSuccess callback or onFailure callback. */
            invocationContext?: any;
            /** called when the subscribe acknowledgement has been received from the server. */
            onSuccess?: OnSubscribeSuccessCallback | undefined;
            /** called when the subscribe request has failed or timed out. */
            onFailure?: OnFailureCallback | undefined;
            /**
             * timeout which, if present, determines the number of seconds after which the onFailure calback is called.
             * The presence of a timeout does not prevent the onSuccess callback from being called when the subscribe
             * completes.
             */
            timeout?: number | undefined;
        }

        interface UnsubscribeOptions {
            /** passed to the onSuccess callback or onFailure callback.  */
            invocationContext?: any;
            /** called when the unsubscribe acknowledgement has been received from the server. */
            onSuccess?: OnSuccessCallback | undefined;
            /** called when the unsubscribe request has failed or timed out. */
            onFailure?: OnFailureCallback | undefined;
            /**
             * timeout which, if present, determines the number of seconds after which the onFailure calback is called.
             * The presence of a timeout does not prevent the onSuccess callback from being called when the unsubscribe
             * completes.
             */
            timeout?: number | undefined;
        }

        interface TraceElement {
            severity: 'Debug';
            message: string;
        }

        type TraceFunction = (element: TraceElement) => void;

        /**
         * The JavaScript application communicates to the server using a {@link Paho.MQTT.Client} object.
         *
         * Most applications will create just one Client object and then call its connect() method,
         * however applications can create more than one Client object if they wish.
         * In this case the combination of host, port and clientId attributes must be different for each Client object.
         *
         * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
         * (even though the underlying protocol exchange might be synchronous in nature).
         * This means they signal their completion by calling back to the application,
         * via Success or Failure callback functions provided by the application on the method in question.
         * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
         * of the script that made the invocation.
         *
         * In contrast there are some callback functions, most notably {@link onMessageArrived},
         * that are defined on the {@link Paho.MQTT.Client} object.
         * These may get called multiple times, and aren't directly related to specific method invocations made by the
         * client.
         *
         */
        class Client {
            /** used when connecting to the server. */
            readonly clientId: string;

            /** the server's DNS hostname or dotted decimal IP address. */
            readonly host: string;

            /** the server's path. */
            readonly path: string;

            /** the server's port. */
            readonly port: number;

            /** function called with trace information, if set */
            trace?: TraceFunction | undefined;

            /**
             * called when a connection has been lost. after a connect() method has succeeded.
             * Establish the call back used when a connection has been lost. The connection may be
             * lost because the client initiates a disconnect or because the server or network
             * cause the client to be disconnected. The disconnect call back may be called without
             * the connectionComplete call back being invoked if, for example the client fails to
             * connect.
             * A single response object parameter is passed to the onConnectionLost callback containing the following
             * fields:
             * <li>errorCode
             * <li>errorMessage
             */
            onConnectionLost: OnConnectionLostHandler;

            /**
             * called when a message has been delivered.
             * All processing that this Client will ever do has been completed. So, for example,
             * in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
             * and the message has been removed from persistent storage before this callback is invoked.
             * Parameters passed to the onMessageDelivered callback are:
             * <li>{@link Paho.MQTT.Message} that was delivered.
             */
            onMessageDelivered: OnMessageHandler;

            /**
             * called when a message has arrived in this Paho.MQTT.client.
             * Parameters passed to the onMessageArrived callback are:
             * <li> {@link Paho.MQTT.Message} that has arrived.
             */
            onMessageArrived: OnMessageHandler;

            /**
             * @param host - the address of the messaging server as a DNS name or dotted decimal IP address.
             * @param port - the port number to connect to
             * @param path - the path on the host to connect to - only used if host is not a URI. Default: '/mqtt'.
             * @param clientId - the Messaging client identifier, between 1 and 23 characters in length.
             */
            constructor(host: string, port: number, path: string, clientId: string); // tslint:disable-line unified-signatures (these cannot actually be neatly unified)

            /**
             * @param host - the address of the messaging server as a DNS name or dotted decimal IP address.
             * @param port - the port number to connect to
             * @param clientId - the Messaging client identifier, between 1 and 23 characters in length.
             */
            constructor(host: string, port: number, clientId: string);

            /**
             * @param hostUri - the address of the messaging server as a fully qualified WebSocket URI
             * @param clientId - the Messaging client identifier, between 1 and 23 characters in length.
             */
            constructor(hostUri: string, clientId: string);

            /**
             * Connect this Messaging client to its server.
             * @throws {InvalidState} if the client is not in disconnected state. The client must have received
             *      connectionLost or disconnected before calling connect for a second or subsequent time.
             */
            connect(connectionOptions?: ConnectionOptions): void;

            /**
             * Normal disconnect of this Messaging client from its server.
             *
             * @throws {InvalidState} if the client is already disconnected.
             */
            disconnect(): void;

            /**
             * @returns True if the client is currently connected
             */
            isConnected(): boolean;

            /**
             * Get the contents of the trace log.
             *
             *  @return tracebuffer containing the time ordered trace records.
             */
            getTraceLog(): any[];

            /**
             * Start tracing.
             */
            startTrace(): void;

            /**
             * Stop tracing.
             */
            stopTrace(): void;

            /**
             * Send a message to the consumers of the destination in the Message.
             *
             * @param message - <b>mandatory</b> The {@link Paho.MQTT.Message} object to be sent.
             * @throws {InvalidState} if the client is not connected.
             */
            send(message: Message): void;

            /**
             * Send a message to the consumers of the destination in the Message.
             *
             * @param topic - <b>mandatory</b> The name of the destination to which the message is to be sent.
             * @param payload - The message data to be sent.
             * @param qos The Quality of Service used to deliver the message.
             *        <dl>
             *            <dt>0 Best effort (default).
             *            <dt>1 At least once.
             *            <dt>2 Exactly once.
             *        </dl>
             * @param retained If true, the message is to be retained by the server and delivered to both
             * current and future subscriptions. If false the server only delivers the message to current subscribers,
             * this is the default for new Messages. A received message has the retained boolean set to true if the
             * message was published with the retained boolean set to true and the subscrption was made after the
             * message has been published.
             * @throws {InvalidState} if the client is not connected.
             */
            send(topic: string, payload: string | ArrayBuffer, qos?: Qos, retained?: boolean): void;

            /**
             * Subscribe for messages, request receipt of a copy of messages sent to the destinations described by the
             * filter.
             *
             * @param filter A filter describing the destinations to receive messages from.
             * @param subcribeOptions Used to control the subscription
             * @throws {InvalidState} if the client is not in connected state.
             */
            subscribe(filter: string, subcribeOptions?: SubscribeOptions): void;

            /**
             * Unsubscribe for messages, stop receiving messages sent to destinations described by the filter.
             *
             * @param filter - describing the destinations to receive messages from.
             * @param unsubscribeOptions - used to control the subscription
             * @throws {InvalidState} if the client is not in connected state.
             */
            unsubscribe(filter: string, unsubcribeOptions?: UnsubscribeOptions): void;
        }

        type TypedArray =
            | Int8Array
            | Uint8Array
            | Uint8ClampedArray
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array
            | Float32Array
            | Float64Array;

        /**
         * An application message, sent or received.
         */
        class Message {
            /**
             * The name of the destination to which the message is to be sent
             * (for messages about to be sent) or the name of the destination from which the message has been received.
             * (for messages received by the onMessage function).
             */
            destinationName: string;

            /**
             * If true, this message might be a duplicate of one which has already been received.
             * This is only set on messages received from the server.
             */
            readonly duplicate: boolean;

            /**
             * The payload.
             * @return if payload is a string. Return the original otherwise.
             */
            readonly payloadBytes: ArrayBuffer | TypedArray;

            /**
             *  The payload as a string if the payload consists of valid UTF-8 characters.
             *  @throw {Error} if the payload is not valid UTF-8
             */
            readonly payloadString: string;

            /**
             * The Quality of Service used to deliver the message.
             * <dl>
             *     <dt>0 Best effort (default).
             *     <dt>1 At least once.
             *     <dt>2 Exactly once.
             * </dl>
             *
             * @default 0
             */
            qos: Qos;

            /**
             * If true, the message is to be retained by the server and delivered to both current and future
             * subscriptions. If false the server only delivers the message to current subscribers, this is the default
             * for new Messages. A received message has the retained boolean set to true if the message was published
             * with the retained boolean set to true and the subscription was made after the message has been published.
             *
             * @default false
             */
            retained: boolean;

            /**
             * @param payload The message data to be sent.
             */
            constructor(payload: string | ArrayBuffer | TypedArray);
        }
    }
}
