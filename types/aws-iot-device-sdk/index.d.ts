// Type definitions for aws-iot-device-sdk 2.1.0
// Project: https://github.com/aws/aws-iot-device-sdk-js
// Definitions by: Markus Olsson <https://github.com/niik>
//                 Margus Lamp <https://github.com/mlamp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as mqtt from "mqtt";
import * as WebSocket from "ws";

export interface DeviceOptions extends mqtt.IClientOptions {
  /** the AWS IoT region you will operate in (default "us-east-1") */
  region?: string;

  /** the client ID you will use to connect to AWS IoT */
  clientId?: string;

  /**
   * path of the client certificate file path of the private key file
   * associated with the client certificate
   */
  certPath?: string;

  /** path of the private key file associated with the client certificate */
  keyPath?: string;

  /** path of your CA certificate file */
  caPath?: string;

  /**
   * same as certPath, but can also accept a buffer containing client
   * certificate data
   */
  clientCert?: string | Buffer;

  /**
   * same as keyPath, but can also accept a buffer containing private key
   * data
   */
  privateKey?: string | Buffer;

  /**
   * same as caPath, but can also accept a buffer containing CA certificate
   * data
   */
  caCert?: string | Buffer;

  /**
   * set to "true" to automatically re-subscribe to topics after
   * reconnection (default "true")
   */
  autoResubscribe?: boolean;

  /** set to "true" to automatically queue published messages while
   * offline (default "true")
   */
  offlineQueueing?: boolean;

  /**
   * enforce a maximum size for the offline message queue
   * (default 0, e.g. no maximum)
   */
  offlineQueueMaxSize?: number;

  /**
   * set to "oldest" or "newest" to define drop behavior on a full
   * queue when offlineQueueMaxSize > 0
   */
  offlineQueueDropBehavior?: "oldest" | "newest";

  /**
   * the minimum time in milliseconds between publishes when draining
   * after reconnection (default 250)
   */
  drainTimeMs?: number;

  /** the base reconnection time in milliseconds (default 1000) */
  baseReconnectTimeMs?: number;

  /** the maximum reconnection time in milliseconds (default 128000) */
  maximumReconnectTimeMs?: number;

  /**
   * the minimum time in milliseconds that a connection must be maintained
   * in order to be considered stable (default 20000)
   */
  minimumConnectionTimeMs?: number;

  /**
   * the connection type, either "mqtts" (default) or "wss" (WebSocket/TLS).
   * Note that when set to "wss", values must be provided for the
   * Access Key ID and Secret Key in either the following options or in
   * environment variables as specified in WebSocket Configuration[1].
   *
   * 1. https://github.com/aws/aws-iot-device-sdk-js#websockets
   */
  protocol?: "mqtts" | "wss";
  /**
   * if protocol is set to "wss", you can use this parameter to pass
   * additional options to the underlying WebSocket object;
   * these options are documented here.
   */
  websocketOptions?: WebSocket.ClientOptions;

  /**
   * used to specify the Access Key ID when protocol is set to "wss".
   * Overrides the environment variable AWS_ACCESS_KEY_ID if set.
   */
  accessKeyId?: string;
  /**
   * used to specify the Secret Key when protocol is set to "wss".
   * Overrides the environment variable AWS_SECRET_ACCESS_KEY if set.
   */
  secretKey?: string;
  /**
   * (required when authenticating via Cognito, optional otherwise) used
   * to specify the Session Token when protocol is set to "wss". Overrides
   * the environment variable AWS_SESSION_TOKEN if set.
   */
  sessionToken?: string;

  /**
   * optional hostname, if not specified a hostname will be constructed
   * from the region option
   */
  // NB Not documented but present in examples, see
  // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L376
  // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L149
  host?: string;

  /** optional port, will be appended to hostname if present and not 443 */
  // NB Not documented but present in examples, see
  // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L154
  port?: number;

  /** enable console logging, default false */
  // NB Not documented but present in examples, see
  // https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d/device/index.js#L436
  debug?: boolean;
}

export class device extends NodeJS.EventEmitter {
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
  publish(topic: string, message: Buffer | string, options?: mqtt.IClientPublishOptions, callback?: (error?: Error) => void): mqtt.Client;

  /**
   * Subscribe to a topic or topics
   * @param topic to subscribe to or an Array of topics to subscribe to. It can also be an object.
   * @param the options to subscribe with
   * @param callback fired on suback
   */
  subscribe(topic: string | string[], options?: mqtt.IClientSubscribeOptions, callback?: mqtt.ClientSubscribeCallback): mqtt.Client;

  /**
   * Unsubscribe from a topic or topics
   *
   * @param topic  is a String topic or an array of topics to unsubscribe from
   * @param options
   * @param callback  fired on unsuback
   */
  unsubscribe(topic: string | string[], options?: mqtt.IClientSubscribeOptions, callback?: mqtt.ClientSubscribeCallback): mqtt.Client;

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
  operationTimeout?: number;
}

export interface RegisterOptions {
  /**
   * set to true to not subscribe to the delta sub-topic for this
   * Thing Shadow; used in cases where the application is not interested in
   * changes (e.g. update only.) (default false)
   */
  ignoreDeltas?: boolean;

  /**
   * set to false to unsubscribe from all operation sub-topics while not
   * performing an operation (default true)
   */
  persistentSubscribe?: boolean;

  /**
   * set to false to allow receiving messages with old version
   * numbers (default true)
   */
  discardStale?: boolean;

  /** set to true to send version numbers with shadow updates (default true) */
  enableVersioning?: boolean;
}

/**
 * The thingShadow class wraps an instance of the device class with
 * additional functionality to operate on Thing Shadows via the AWS IoT API.
 */
export class thingShadow extends NodeJS.EventEmitter {

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
  register(thingName: string, options?: RegisterOptions, callback?: (error: Error, failedTopics: mqtt.ISubscriptionGrant[]) => void): void

  /**
   * Unregister interest in the Thing Shadow named thingName.
   *
   * The thingShadow class will unsubscribe from all applicable topics
   * and no more events will be fired for thingName.
   */
  unregister(thingName: string): void

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
  publish(topic: string, message: Buffer | string, options?: mqtt.IClientPublishOptions, callback?: Function): mqtt.Client;

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
  unsubscribe(topic: string | string[], options?: mqtt.IClientSubscribeOptions, callback?: mqtt.ClientSubscribeCallback): mqtt.Client;

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
  on(event: "status", listener: (thingName: string, operationStatus: "accepted" | "rejected", clientToken: string, stateObject: any) => void): this;

  /** Emitted when an operation update|get|delete has timed out. */
  on(event: "timeout", listener: (thingName: string, clientToken: string) => void): this;

  /** Emitted when a delta has been received for a registered Thing Shadow. */
  on(event: "delta", listener: (thingName: string, stateObject: any) => void): this;

  /** Emitted when a different client"s update or delete operation is accepted on the shadow. */
  on(event: "foreignStateChange", listener: (thingName: string, operation: "update" | "delete", stateObject: any) => void): this;
}
