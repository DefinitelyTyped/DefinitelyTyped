/// <reference types="node" />

import { EventEmitter } from "events";
import * as mqtt from "mqtt";
import * as WebSocket from "ws";

export interface DeviceOptions extends mqtt.IClientOptions {
    /** the AWS IoT region you will operate in (default "us-east-1") */
    region?: string | undefined;

    /** the client ID you will use to connect to AWS IoT */
    clientId?: string | undefined;

    /**
     * path of the client certificate file path of the private key file
     * associated with the client certificate
     */
    certPath?: string | undefined;

    /** path of the private key file associated with the client certificate */
    keyPath?: string | undefined;

    /** path of your CA certificate file */
    caPath?: string | undefined;

    /**
     * same as certPath, but can also accept a buffer containing client
     * certificate data
     */
    clientCert?: string | Buffer | undefined;

    /**
     * same as keyPath, but can also accept a buffer containing private key
     * data
     */
    privateKey?: string | Buffer | undefined;

    /**
     * same as caPath, but can also accept a buffer containing CA certificate
     * data
     */
    caCert?: string | Buffer | undefined;

    /**
     * set to "true" to automatically re-subscribe to topics after
     * reconnection (default "true")
     */
    autoResubscribe?: boolean | undefined;

    /** set to "true" to automatically queue published messages while
     * offline (default "true")
     */
    offlineQueueing?: boolean | undefined;

    /**
     * enforce a maximum size for the offline message queue
     * (default 0, e.g. no maximum)
     */
    offlineQueueMaxSize?: number | undefined;

    /**
     * set to "oldest" or "newest" to define drop behavior on a full
     * queue when offlineQueueMaxSize > 0
     */
    offlineQueueDropBehavior?: "oldest" | "newest" | undefined;

    /**
     * the minimum time in milliseconds between publishes when draining
     * after reconnection (default 250)
     */
    drainTimeMs?: number | undefined;

    /** the base reconnection time in milliseconds (default 1000) */
    baseReconnectTimeMs?: number | undefined;

    /** the maximum reconnection time in milliseconds (default 128000) */
    maximumReconnectTimeMs?: number | undefined;

    /**
     * the minimum time in milliseconds that a connection must be maintained
     * in order to be considered stable (default 20000)
     */
    minimumConnectionTimeMs?: number | undefined;

    /**
     * the connection type, either "mqtts" (default) or "wss" (WebSocket/TLS).
     * Note that when set to "wss", values must be provided for the
     * Access Key ID and Secret Key in either the following options or in
     * environment variables as specified in WebSocket Configuration[1].
     *
     * 1. https://github.com/aws/aws-iot-device-sdk-js#websockets
     */
    protocol?: "mqtts" | "wss" | undefined;
    /**
     * if protocol is set to "wss", you can use this parameter to pass
     * additional options to the underlying WebSocket object;
     * these options are documented here.
     */
    websocketOptions?: WebSocket.ClientOptions | undefined;

    /**
     * used to specify the Access Key ID when protocol is set to "wss".
     * Overrides the environment variable AWS_ACCESS_KEY_ID if set.
     */
    accessKeyId?: string | undefined;
    /**
     * used to specify the Secret Key when protocol is set to "wss".
     * Overrides the environment variable AWS_SECRET_ACCESS_KEY if set.
     */
    secretKey?: string | undefined;
    /**
     * (required when authenticating via Cognito, optional otherwise) used
     * to specify the Session Token when protocol is set to "wss". Overrides
     * the environment variable AWS_SESSION_TOKEN if set.
     */
    sessionToken?: string | undefined;

    /**
     * optional hostname, if not specified a hostname will be constructed
     * from the region option
     */
    // NB Not documented but present in examples, see
    // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L376
    // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L149
    host?: string | undefined;

    /** optional port, will be appended to hostname if present and not 443 */
    // NB Not documented but present in examples, see
    // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L154
    port?: number | undefined;

    /** enable console logging, default false */
    // NB Not documented but present in examples, see
    // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L436
    debug?: boolean | undefined;
}

export class device extends EventEmitter {
    /**
     * Returns a wrapper for the mqtt.Client() class, configured for a TLS
     * connection with the AWS IoT platform and with arguments as specified
     * in options.
     */
    constructor(options?: DeviceOptions);

    /**
     * Update the credentials set used to authenticate via WebSocket/SigV4.
     *
     * This method is designed to be invoked during the callback of the
     * getCredentialsForIdentity method in the AWS SDK for JavaScript.
     */
    updateWebSocketCredentials(accessKeyId: string, secretKey: string, sessionToken: string, expiration: Date): void;

    on(event: "connect" | "close" | "reconnect" | "offline", listener: () => void): this;

    // Error | string comes from:
    // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b46/device/index.js#L744
    // Remove when https://github.com/aws/aws-iot-device-sdk-js/issues/95 is fixed
    on(event: "error", listener: (error: Error | string) => void): this;

    /** Emitted when a message is received on a topic not related to any Thing Shadows */
    on(event: "message", listener: (topic: string, payload: any) => void): this;

    // The following publish, subscribe, unsubscribe and end Definitions
    // are derived from the mqtt definition as they are re-surfaced through
    // thingShadow
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e7772769fab8c206449ce9673cac417370330aa9/mqtt/mqtt.d.ts#L199

    /**
     * Publish a message to a topic
     *
     * @param topic to publish to
     * @param message to publish
     * @param publish options
     * @param called when publish succeeds or fails
     */
    publish(
        topic: string,
        message: Buffer | string,
        options?: mqtt.IClientPublishOptions,
        callback?: (error?: Error) => void,
    ): mqtt.Client;

    /**
     * Subscribe to a topic or topics
     * @param topic to subscribe to or an Array of topics to subscribe to. It can also be an object.
     * @param the options to subscribe with
     * @param callback fired on suback
     */
    subscribe(
        topic: string | string[],
        options?: mqtt.IClientSubscribeOptions,
        callback?: mqtt.ClientSubscribeCallback,
    ): mqtt.Client;

    /**
     * Unsubscribe from a topic or topics
     *
     * @param topic  is a String topic or an array of topics to unsubscribe from
     * @param callback  fired on unsuback
     */
    unsubscribe(topic: string | string[], callback?: mqtt.PacketCallback): mqtt.Client;

    /**
     * end - close connection
     *
     * @param force passing it to true will close the client right away, without waiting for the in-flight messages to be acked.
     *     This parameter is optional.
     * @param callback
     */
    end(force?: boolean, callback?: Function): mqtt.Client;
}

export interface ThingShadowOptions extends DeviceOptions {
    /** the timeout for thing operations (default 10 seconds) */
    operationTimeout?: number | undefined;
}

export interface RegisterOptions {
    /**
     * set to true to not subscribe to the delta sub-topic for this
     * Thing Shadow; used in cases where the application is not interested in
     * changes (e.g. update only.) (default false)
     */
    ignoreDeltas?: boolean | undefined;

    /**
     * set to false to unsubscribe from all operation sub-topics while not
     * performing an operation (default true)
     */
    persistentSubscribe?: boolean | undefined;

    /**
     * set to false to allow receiving messages with old version
     * numbers (default true)
     */
    discardStale?: boolean | undefined;

    /** set to true to send version numbers with shadow updates (default true) */
    enableVersioning?: boolean | undefined;
}

/**
 * The thingShadow class wraps an instance of the device class with
 * additional functionality to operate on Thing Shadows via the AWS IoT API.
 */
export class thingShadow extends EventEmitter {
    constructor(options?: ThingShadowOptions);

    /**
     * Register interest in the Thing Shadow named thingName.
     *
     * The thingShadow class will subscribe to any applicable topics, and will
     * fire events for the Thing Shadow until awsIot.thingShadow#unregister()
     * is called with thingName
     *
     * If the callback parameter is provided, it will be invoked after
     * registration is complete (i.e., when subscription ACKs have been received
     * for all shadow topics). Applications should wait until shadow
     * registration is complete before performing update/get/delete operations.
     */
    register(
        thingName: string,
        options?: RegisterOptions,
        callback?: (error: Error, failedTopics: mqtt.ISubscriptionGrant[]) => void,
    ): void;

    /**
     * Unregister interest in the Thing Shadow named thingName.
     *
     * The thingShadow class will unsubscribe from all applicable topics
     * and no more events will be fired for thingName.
     */
    unregister(thingName: string): void;

    /**
     * Update the Thing Shadow named thingName with the state specified in the
     * JavaScript object stateObject. thingName must have been previously
     * registered using awsIot.thingShadow#register().
     *
     * The thingShadow class will subscribe to all applicable topics and
     * publish stateObject on the update sub-topic.
     *
     * This function returns a clientToken, which is a unique value associated
     * with the update operation. When a "status" or "timeout" event is emitted,
     * the clientToken will be supplied as one of the parameters, allowing the
     * application to keep track of the status of each operation. The caller may
     * create their own clientToken value; if stateObject contains a clientToken
     * property, that will be used rather than the internally generated value.
     * Note that it should be of atomic type (i.e. numeric or string).
     * This function returns "null" if an operation is already in progress.
     */
    update(thingName: string, stateObject: any): string | null;

    /**
     * Get the current state of the Thing Shadow named thingName, which must
     * have been previously registered using awsIot.thingShadow#register().
     * The thingShadow class will subscribe to all applicable topics and
     * publish on the get sub-topic.
     *
     * This function returns a clientToken, which is a unique value
     * associated with the get operation. When a "status or "timeout" event
     * is emitted, the clientToken will be supplied as one of the parameters,
     * allowing the application to keep track of the status of each operation.
     * The caller may supply their own clientToken value (optional); if
     * supplied, the value of clientToken will be used rather than the
     * internally generated value. Note that this value should be of atomic
     * type (i.e. numeric or string). This function returns "null" if an
     * operation is already in progress.
     */
    get(thingName: string, clientToken?: string): string | null;

    /**
     * Delete the Thing Shadow named thingName, which must have been previously
     * registered using awsIot.thingShadow#register(). The thingShadow class
     * will subscribe to all applicable topics and publish on the delete sub-topic.
     *
     * This function returns a clientToken, which is a unique value associated
     * with the delete operation. When a "status" or "timeout" event is
     * emitted, the clientToken will be supplied as one of the parameters,
     * allowing the application to keep track of the status of each operation.
     * The caller may supply their own clientToken value (optional); if
     * supplied, the value of clientToken will be used rather than the
     * internally generated value. Note that this value should be of atomic
     * type (i.e. numeric or string). This function returns "null" if an
     * operation is already in progress.
     */
    delete(thingName: string, clientToken?: string): string | null;

    // The following publish, subscribe, unsubscribe and end Definitions
    // are copied from the mqtt definition as they are re-surfaced through
    // thingShadow
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e7772769fab8c206449ce9673cac417370330aa9/mqtt/mqtt.d.ts#L199

    /**
     * Publish a message to a topic
     *
     * @param topic
     * @param message
     * @param options
     * @param callback
     */
    publish(
        topic: string,
        message: Buffer | string,
        options?: mqtt.IClientPublishOptions,
        callback?: Function,
    ): mqtt.Client;

    /**
     * Subscribe to a topic or topics
     * @param topic to subscribe to or an Array of topics to subscribe to. It can also be an object.
     * @param the options to subscribe with
     * @param callback fired on suback
     */
    subscribe(topic: string | string[], options?: { qos: 0 | 1 }, callback?: mqtt.ClientSubscribeCallback): mqtt.Client;

    /**
     * Unsubscribe from a topic or topics
     *
     * @param topic  is a String topic or an array of topics to unsubscribe from
     * @param options
     * @param callback  fired on unsuback
     */
    unsubscribe(
        topic: string | string[],
        options?: mqtt.IClientSubscribeOptions,
        callback?: mqtt.ClientSubscribeCallback,
    ): mqtt.Client;

    /**
     * end - close connection
     *
     * @param force passing it to true will close the client right away, without waiting for the in-flight messages to be acked.
     *     This parameter is optional.
     * @param callback
     */
    end(force?: boolean, callback?: Function): mqtt.Client;

    on(event: "connect" | "close" | "reconnect" | "offline", listener: () => void): this;
    on(event: "error", listener: (error: Error) => void): this;

    /** Emitted when a message is received on a topic not related to any Thing Shadows */
    on(event: "message", listener: (topic: string, payload: any) => void): this;

    /**
     * Emitted when an operation update|get|delete completes.
     *
     * thingName - name of the Thing Shadow for which the operation has completed
     * stat - status of the operation accepted|rejected
     * clientToken - the operation"s clientToken
     * stateObject - the stateObject returned for the operation
     *
     * Applications can use clientToken values to correlate status events with
     * the operations that they are associated with by saving the clientTokens
     * returned from each operation.
     */
    on(
        event: "status",
        listener: (
            thingName: string,
            operationStatus: "accepted" | "rejected",
            clientToken: string,
            stateObject: any,
        ) => void,
    ): this;

    /** Emitted when an operation update|get|delete has timed out. */
    on(event: "timeout", listener: (thingName: string, clientToken: string) => void): this;

    /** Emitted when a delta has been received for a registered Thing Shadow. */
    on(event: "delta", listener: (thingName: string, stateObject: any) => void): this;

    /** Emitted when a different client"s update or delete operation is accepted on the shadow. */
    on(
        event: "foreignStateChange",
        listener: (thingName: string, operation: "update" | "delete", stateObject: any) => void,
    ): this;
}

export interface statusDetails {
    progress: string;
}

export interface jobStatus {
    status: string;
    statusDetails: statusDetails;
}

export interface jobDocument {
    [key: string]: any;
}

export interface job {
    /** Object that contains job execution information and functions for updating job execution status. */

    /** Returns the job id. */
    id: string;

    /**
     * The JSON document describing details of the job to be executed eg.
     * {
     *   "operation": "install",
     *   "otherProperty": "value",
     *   ...
     * }
     */
    document: jobDocument;

    /**
     * Returns the job operation from the job document. Eg. 'install', 'reboot', etc.
     */
    operation: string;

    /**
     * Returns the current job status according to AWS Orchestra.
     */
    status: jobStatus;

    /**
     * Update the status of the job execution to be IN_PROGRESS for the thing associated with the job.
     *
     * @param statusDetails - optional document describing the status details of the in progress job
     * @param callback - function(err) optional callback for when the operation completes, err is null if no error occurred
     */
    inProgress(statusDetails?: statusDetails, callback?: (err: Error) => void): void;

    /**
     * Update the status of the job execution to be FAILED for the thing associated with the job.
     *
     * @param statusDetails - optional document describing the status details of the in progress job e.g.
     * @param callback - function(err) optional callback for when the operation completes, err is null if no error occurred
     */
    failed(statusDetails?: statusDetails, callback?: (err: Error) => void): void;

    /**
     * Update the status of the job execution to be SUCCESS for the thing associated with the job.
     *
     * @param statusDetails - optional document describing the status details of the in progress job e.g.
     * @param callback - function(err) optional callback for when the operation completes, err is null if no error occurred
     */
    succeeded(statusDetails?: statusDetails, callback?: (err: Error) => void): void;
}

export class jobs extends device {
    /**
     * The `jobs` class wraps an instance of the `device` class with additional functionality to
     * handle job execution management through the AWS IoT Jobs platform. Arguments in `deviceOptions`
     * are the same as those in the device class and the `jobs` class supports all of the
     * same events and functions as the `device` class.
     */
    constructor(options?: DeviceOptions);

    /**
     * Subscribes to job execution notifications for the thing named `thingName`. If
     * `operationName` is specified then the callback will only be called when a job
     * ready for execution contains a property called `operation` in its job document with
     * a value matching `operationName`. If `operationName` is omitted then the callback
     * will be called for every job ready for execution that does not match another
     * `subscribeToJobs` subscription.
     *
     * @param thingName - name of the Thing to receive job execution notifications
     * @param operationName - optionally filter job execution notifications to jobs with a value
     *      for the `operation` property that matches `operationName
     * @param callback - function (err, job) callback for when a job execution is ready for processing or an error occurs
     *     - `err` a subscription error or an error that occurs when client is disconnecting
     *     - `job` an object that contains  job execution information and functions for updating job execution status.
     */
    subscribeToJobs(thingName: string, operationName: string, callback?: (err: Error, job: job) => void): void;

    /**
     * Causes any existing queued job executions for the given thing to be published
     * to the appropriate subscribeToJobs handler. Only needs to be called once per thing.
     *
     * @param thingName - name of the Thing to cancel job execution notifications for
     * @param callback - function (err) callback for when the startJobNotifications operation completes
     */
    startJobNotifications(thingName: string, callback: (error: Error) => void): mqtt.Client;

    /**
     * Unsubscribes from job execution notifications for the thing named `thingName` having
     * operations with a value of the given `operationName`. If `operationName` is omitted then
     * the default handler for the thing with the given name is unsubscribed.
     *
     * @param thingName - name of the Thing to cancel job execution notifications for
     * @param operationName - optional name of previously subscribed operation names
     * @param callback - function (err) callback for when the unsubscribe operation completes
     */
    unsubscribeFromJobs(thingName: string, operationName: string, callback: (err: Error) => void): void;
}
