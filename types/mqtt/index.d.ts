// Type definitions for MQTT
// Project: https://github.com/mqttjs/MQTT.js
// Definitions by: Pekka Leppänen <https://github.com/PekkaPLeppanen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace mqtt {

    import ReadableStream = NodeJS.ReadableStream;
    import EventEmitter = NodeJS.EventEmitter;

    interface Packet {
        messageId: number;
        [key: string]: any;
    }

    interface Granted {
        /**
         *  is a subscribed to topic
         */
        topic: string;
        /**
         *  is the granted qos level on it
         */
        qos: number;
    }

    interface Topic {
        /**
         * object which has topic names as object keys and as value the QoS, like {'test1': 0, 'test2': 1}.
         */
        [topic: string]: number;
    }

    /**
     * MQTT CLIENT
     */

    interface ClientOptions extends SecureClientOptions {
        /**
         *  10 seconds, set to 0 to disable
         */
        keepalive?: number;

        /**
         * 'mqttjs_' + Math.random().toString(16).substr(2, 8)
         */
        clientId?: string;
        /**
         * 'MQTT'
         */
        protocolId?: string;
        /**
         * 4
         */
        protocolVersion?: number;
        /**
         * true, set to false to receive QoS 1 and 2 messages while offline
         */
        clean?: boolean;
        /**
         * 1000 milliseconds, interval between two reconnections
         */
        reconnectPeriod?: number;
        /**
         * 30 * 1000 milliseconds, time to wait before a CONNACK is received
         */
        connectTimeout?: number;
        /**
         * the username required by your broker, if any
         */
        username?: string;
        /**
         * the password required by your broker, if any
         */
        password?: string;
        /**
         * a Store for the incoming packets
         */
        incomingStore?: Store;
        /**
         * a Store for the outgoing packets
         */
        outgoingStore?: Store;
        /**
         * a message that will sent by the broker automatically when the client disconnect badly.
         */
        will?: {
            /**
             * the topic to publish
             */
            topic: string;
            /**
             * the message to publish
             */
            payload: string;
            /**
             * the QoS
             */
            qos: number;
            /**
             * the retain flag
             */
            retain: boolean;
        };

    }

    interface SecureClientOptions {
        /**
         * path to private key
         */
        keyPath?: string;
        /**
         * path to corresponding public cert
         */
        certPath?: string;
        rejectUnauthorized?: boolean;
    }

    interface ClientPublishOptions {
        /**
         * the QoS
         */
        qos?: number;
        /**
         * the retain flag
         */
        retain?: boolean;
    }

    interface ClientSubscribeOptions {
        /**
         * the QoS
         */
        qos?: number;
    }

    interface ClientSubscribeCallback {
        (err: any, granted: Granted): void;
    }

    /**
     * @deprecated use connect() instead
     * Create a new IClient (see: IClient)
     *
     * @param port - broker port (default: 1883)
     * @param host  - broker host (default: localhost)
     * @param options - connect options
     */
    function createClient(port?: number, host?: string, options?: ClientOptions): Client;

    /**
     * @deprecated use connect() instead
     * Create a new secure IClient
     *
     * @param port
     * @param host
     * @param options - connection options, must include keys.
     */
    function createSecureClient(port?: number, host?: string, options?: SecureClientOptions): Client;

    /**
     * Create a new MqttClient (see: IClient)
     *
     * The brokerUrl supports normal connections using mqtt:// or tcp:// and secure connections using mqtts:// or ssl://.
     *
     *  Passing the clientId is also supported, for example mqtt://user@localhost?clientId=123abc.
     *
     * @param brokerUrl
     * @param options
     */
    function connect(brokerUrl: string, options?: ClientOptions): Client;

    /**
     * The Client class wraps a client connection to an MQTT broker over an arbitrary transport method (TCP, TLS, WebSocket, ecc).
     *
     * Client automatically handles the following:
     *  - Regular server pings
     *  - QoS flow
     *  - Automatic reconnections
     *  - Start publishing before being connected
     *
     */
    interface Client extends EventEmitter {
        (streamBuilder: any, options: ClientOptions): Client;

        /**
         * Publish a message to a topic
         *
         * @param topic
         * @param message
         * @param options
         * @param callback
         */
        publish(topic: string, message: Buffer, options?: ClientPublishOptions, callback?: Function): Client;
        publish(topic: string, message: string, options?: ClientPublishOptions, callback?: Function): Client;

        /**
         * Subscribe to a topic or topics
         * @param topic to subscribe to or an Array of topics to subscribe to. It can also be an object.
         * @param the options to subscribe with
         * @param callback fired on suback
         */
        subscribe(topic: string, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback): Client;
        subscribe(topic: string[], options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback): Client;
        subscribe(topic: Topic, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback): Client;

        /**
         * Unsubscribe from a topic or topics
         *
         * @param topic  is a String topic or an array of topics to unsubscribe from
         * @param options
         * @param callback  fired on unsuback
         */
        unsubscribe(topic: string, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback): Client;
        unsubscribe(topic: string[], options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback): Client;

        /**
         * end - close connection
         *
         * @param force passing it to true will close the client right away, without waiting for the in-flight messages to be acked.
         *     This parameter is optional.
         * @param callback
         */
        end(force?: boolean, callback?: Function): Client;

        /**
         * Handle messages with backpressure support, one at a time. Override at will, but always call callback, or the client will
         * hang.
         *
         * @param packet
         * @param callback
         */
        handleMessage(packet: Packet, callback: Function): Client;

        /**
         * get last message id. This is for sent messages only.
         */
        getLastMessageId(): number;
    }

    /**
     * STORE
     */

    /**
     * In-memory implementation of the message store.
     *
     * Another implementaion is mqtt-level-store which uses Level-browserify to store the inflight data,
     * making it usable both in Node and the Browser.
     */
    interface Store {
        /**
         * Adds a packet to the store, a packet is anything that has a messageId property. The callback is called when the packet has
         * been stored.
         * @param packet
         * @param callback
         */
        put(packet: Packet, callback: Function): Store;

        /**
         * get a packet from the store
         *
         * @param packet
         * @param callback
         */
        get(packet: Packet, callback: Function): Store;

        /**
         * Creates a stream with all the packets in the store.
         */
        createStream(): ReadableStream;

        /**
         * Removes a packet from the store, a packet is anything that has a messageId property. The callback is called when the packet
         * has been removed.
         * @param packet
         * @param callback
         */
        del(packet: Packet, callback: Function): Store;

        /**
         * Closes the Store.
         * @param callback
         */
        close(callback: Function): void;

    }

    /**
     * CONNECTION
     */

    /**
     * @deprecated use mqtt-connect instead
     * Create a new MqttConnection (see: MqttConnection)
     *
     * @param port - broker port (default: 1883)
     * @param host - broker host (default: localhost)
     * @param callback - fired on underlying stream connect
     */
    function createConnection(port?: number, host?: string, callback?: Function): Connection;

    interface ConnectOptions {

        /**
         * Protocol ID, usually MQIsdp.
         */
        protocolId?: string;
        /**
         * Protocol version, usually 3.
         */
        protocolVersion?: number;
        /**
         * keepalive period in seconds.
         */
        keepalive?: number;
        /**
         * client ID.
         */
        clientId?: string;
        /**
         * the client's will message options
         */
        will?: {
            /**
             * the topic to publish
             */
            topic: string;
            /**
             * the message to publish
             */
            payload: string;
            /**
             * the QoS
             */
            qos: number;
            /**
             * the retain flag
             */
            retain: boolean;
        };
        /**
         * the 'clean start' flag.
         */
        clean?:  boolean;
        /**
         * username for protocol v3.1.
         */
        username?: string;
        /**
         * password for protocol v3.1.
         */
        password?: string;
    }

    interface ConnectionPublishOptions {
        /**
         * the message ID of the packet, required if qos > 0.
         */
        messageId?: number;
        /**
         * the topic to publish
         */
        topic?: string;
        /**
         * the message to publish
         */
        payload?: string;
        /**
         * the QoS
         */
        qos?: number;
        /**
         * the retain flag
         */
        retain?: boolean;
    }

    /**
     * The MqttConnection class represents a raw MQTT connection, both on the server and on the client side. For client side
     * operations, it is strongly recommended that MqttClient is used, as MqttConnection requires a great deal of additional
     * boilerplate such as setting up error handling and ping request/responses.
     *
     * If such fine grained control is required, MqttConnection can be instantiated using the mqtt.createConnection method.
     *
     * MqttServerClient is an unaltered subclass of MqttConnection and can be used in exactly the same way.
     *
     * @link https://github.com/mqttjs/MQTT.js/wiki/connection
     *
     */
    interface Connection extends EventEmitter {
        /**
         * Send an MQTT connect packet.
         * @param options
         */
        connect(options?: ConnectOptions): Connection;
        /**
         * Send an MQTT connack packet.
         * @param options
         */
        connack(options?: { returnCode: number; }): Connection;
        /**
         * Send an MQTT publish packet.
         * @param options
         */
        publish(options?: ConnectionPublishOptions): Connection;
    }

    /**
     * SERVER
     */

    /**
     * @deprecated use connect instead
     * Create a new MqttServer (see : IServer)
     *
     * @param listener - callback called on server client event
     */
    function createServer(listener?: Function): Server;

    /**
     * @deprecated use connect instead
     * Create a new MqttSecureServer
     * @param keyPath - path to private key file
     * @param certPath - path to corresponding public cert
     * @param listener - callback called on server client event
     */
    function createSecureServer(keyPath: string, certPath: string, listener?: Function): Server;

    /**
     * The primary methods of instantiating mqtt.js server classes are through the mqtt.createServer and mqtt.createSecureServer
     * methods. The former returns an instance of MqttServer and and the latter returns an instance of MqttSecureServer.
     *
     * While it is possible to instantiate these classes through new MqttServer(), it is strongly recommended to use the factory
     * methods
     *
     * @link https://github.com/mqttjs/MQTT.js/wiki/server
     */
    interface Server extends EventEmitter {

    }

}

export = mqtt;
