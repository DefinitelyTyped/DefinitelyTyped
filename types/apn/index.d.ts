// Type definitions for node-apn
// Project: https://github.com/argon/node-apn
// Definitions by: Zenorbi <https://github.com/zenorbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>

import events = require("events");
import net = require("net");
export interface ConnectionOptions {
    /**
     * The filename of the connection certificate to load from disk, or a Buffer/String containing the certificate data. (Defaults to: `cert.pem`)
     */
    cert?: string | Buffer;
    /**
     * The filename of the connection key to load from disk, or a Buffer/String containing the key data. (Defaults to: `key.pem`)
     */
    key?: string | Buffer;
    /**
     * An array of trusted certificates. Each element should contain either a filename to load, or a Buffer/String (in PEM format) to be used directly. If this is omitted several well known "root" CAs will be used. - You may need to use this as some environments don't include the CA used by Apple (entrust_2048).
     */
    ca?: (string | Buffer)[];
    /**
     * File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer containing the PFX data. If supplied will always be used instead of certificate and key above.
     */
    pfx?: string | Buffer;
    /**
     * The passphrase for the connection key, if required
     */
    passphrase?: string;
    /**
     * Specifies which environment to connect to: Production (if true) or Sandbox - The hostname will be set automatically. (Defaults to NODE_ENV == "production", i.e. false unless the NODE_ENV environment variable is set accordingly)
     */
    production?: boolean;
    /**
     * Enable when you are using a VoIP certificate to enable paylods up to 4096 bytes.
     */
    voip?: boolean;
    /**
     * Gateway port (Defaults to: `2195`)
     */
    port?: number;
    /**
     * Reject Unauthorized property to be passed through to tls.connect() (Defaults to `true`)
     */
    rejectUnauthorized?: boolean;
    /**
     * Number of notifications to cache for error purposes (See "Handling Errors" below, (Defaults to: `1000`)
     */
    cacheLength?: number;
    /**
     * Whether the cache should grow in response to messages being lost after errors. (Will still emit a 'cacheTooSmall' event) (Defaults to: `true`)
     */
    autoAdjustCache?: boolean;
    /**
     * The maximum number of connections to create for sending messages. (Defaults to: `1`)
     */
    maxConnections?: number;
    /**
     * The duration of time the module should wait, in milliseconds, when trying to establish a connection to Apple before failing. 0 = Disabled. {Defaults to: `10000`}
     */
    connectTimeout?: number;
    /**
     * The duration the socket should stay alive with no activity in milliseconds. 0 = Disabled. (Defaults to: `3600000` - 1h)
     */
    connectionTimeout?: number;
    /**
     * The maximum number of connection failures that will be tolerated before `apn` will "terminate". (Defaults to: 10)
     */
    connectionRetryLimit?: number;
    /**
     * Whether to buffer notifications and resend them after failure. (Defaults to: `true`)
     */
    buffersNotifications?: number;
    /**
     * Whether to aggresively empty the notification buffer while connected - if set to true node-apn may enter a tight loop under heavy load while delivering notifications. (Defaults to: `false`)
     */
    fastMode?: boolean;
}
export declare class Connection extends events.EventEmitter {
    constructor(options: ConnectionOptions);
    /**
     * This is the business end of the module. Create a `Notification` object and pass it in, along with a single recipient or an array of them and node-apn will take care of the rest, delivering the notification to each recipient.
     * 
     * A "recipient" is either a `Device` object, a `String`, or a `Buffer` containing the device token. `Device` objects are used internally and will be created if necessary. Where applicable, all events will return a `Device` regardless of the type passed to this method.
     */
    pushNotification(notification: Notification, recipient: Device | string | Buffer | (Device | string | Buffer)[]): void;
    /**
     * Used to manually adjust the "cacheLength" property in the options. This is ideal if you choose to use the `cacheTooSmall` event to tweak your environment. It is safe for increasing and reducing cache size.
     */
    setCacheLength(newLength: number): void;
    /**
     * Indicate to node-apn that when the queue of pending notifications is fully drained that it should close all open connections. This will mean that if there are no other pending resources (open sockets, running timers, etc.) the application will terminate. If notifications are pushed after the connection has completely shutdown a new connection will be established and, if applicable, `shutdown` will need to be called again.
     */
    shutdown(): void;
    /**
     * Emitted when an error occurs during initialisation of the module, usually due to a problem with the keys and certificates.
     */
    on(event: "error", listener: (error: Error) => void): this;
    /**
     * Emitted when the connection socket experiences an error. This may be useful for debugging but no action should be necessary.
     */
    on(event: "socketError", listener: (error: Error) => void): this;
    /**
     * Emitted when a notification has been sent to Apple - not a guarantee that it has been accepted by Apple, an error relating to it may occur later on. A notification may also be "transmitted" several times if a preceding notification caused an error requiring retransmission.
     */
    on(event: "transmitted", listener: (notification: Notification, decive: Device) => void): this;
    /**
     * Emitted when all pending notifications have been transmitted to Apple and the pending queue is empty. This may be called more than once if a notification error occurs and notifications must be re-sent.
     */
    on(event: "completed", listener: () => void): this;
    /**
     * Emitted when Apple returns a notification as invalid but the notification has already been expunged from the cache - usually due to high throughput and indicates that notifications will be getting lost. The parameter is an estimate of how many notifications have been lost. You should experiment with increasing the cache size or enabling ```autoAdjustCache``` if you see this frequently.
     * 
     * **Note**: With ```autoAdjustCache``` enabled this event will still be emitted when an adjustment is triggered.
     */
    on(event: "cacheTooSmall", listener: (sizeDifference: number) => void): this;
    /**
     * Emitted when a connection to Apple is successfully established. The parameter indicates the number of open connections. No action is required as the connection is managed internally.
     */
    on(event: "connected", listener: (openSockets: net.Socket[]) => void): this;
    /**
     * Emitted when the connection to Apple has been closed, this could be for numerous reasons, for example an error has occurred or the connection has timed out. The parameter is the same as for `connected` and again, no action is required.
     */
    on(event: "disconnected", listener: (openSockets: net.Socket[]) => void): this;
    /**
     * Emitted when the connectionTimeout option has been specified and no activity has occurred on a socket for a specified duration. The socket will be closed immediately after this event and a `disconnected` event will also be emitted.
     */
    on(event: "timeout", listener: () => void): this;
    /**
     * Emitted when a message has been received from Apple stating that a notification was invalid or if an internal error occurred before that notification could be pushed to Apple. If the notification is still in the cache it will be passed as the second argument, otherwise null. Where possible the associated `Device` object will be passed as a third parameter, however in cases where the token supplied to the module cannot be parsed into a `Buffer` the supplied value will be returned.

     * Error codes smaller than 512 correspond to those returned by Apple as per their [docs][errors]. Other errors are applicable to `node-apn` itself. Definitions can be found in `lib/errors.js`.
     */
    on(event: "transmissionError", listener: (errorCode: number, notification: Notification, device: Device | Buffer) => void): this;
    on(event: string, listener: Function): this;
}
export interface NotificationAlertOptions {
    title?: string;
    subtitle?: string;
    body: string;
    "title-loc-key"?: string;
    "title-loc-args"?: string[];
    "action-loc-key"?: string;
    "loc-key"?: string;
    "loc-args"?: string[];
    "launch-image"?: string;
}
export declare class Notification {
    /**
     * The maximum number of retries which should be performed when sending a notification if an error occurs. A value of 0 will only allow one attempt at sending (0 retries). Set to -1 to disable (default).
     */
    public retryLimit: number;
    /**
     * The UNIX timestamp representing when the notification should expire. This does not contribute to the 2048 byte payload size limit. An expiry of 0 indicates that the notification expires immediately.
     */
    public expiry: number;
    /**
     * From Apple's Documentation, Provide one of the following values:
     * 
     * - 10 - The push message is sent immediately. (Default)
     *   > The push notification must trigger an alert, sound, or badge on the device. It is an error use this priority for a push that contains only the content-available key.
     * - 5 - The push message is sent at a time that conserves power on the device receiving it.
     */
    public priority: number;
    /**
     * The encoding to use when transmitting the notification to APNS, defaults to `utf8`. `utf16le` is also possible but as each character is represented by a minimum of 2 bytes, will at least halve the possible payload size. If in doubt leave as default.
     */
    public encoding: string;
    /**
     * This object represents the root JSON object that you can add custom information for your application to. The properties below will only be added to the payload (under `aps`) when the notification is prepared for sending.
     */
    public payload: any;
    /**
     * The value to specify for `payload.aps.badge`
     */
    public badge: number;
    /**
     * The value to specify for `payload.aps.sound`
     */
    public sound: string;
    /**
     * The value to specify for `payload.aps.alert` can be either a `String` or an `Object` as outlined by the payload documentation.
     */
    public alert: string | NotificationAlertOptions;
    /**
     * Setting this to true will specify "content-available" in the payload when it is compiled.
     */
    public newsstandAvailable: boolean;
    /**
     * Setting this to true will specify "content-available" in the payload when it is compiled.
     */
    public contentAvailable: boolean;
    /**
     * The value to specify for the `mdm` field where applicable.
     */
    public mdm: string | Object;
    /**
     * The value to specify for `payload.aps['url-args']`. This used for Safari Push NOtifications and should be an array of values in accordance with the Web Payload Documentation.
     */
    public urlArgs: string[];
    /**
     * When this parameter is set and `notification#trim()` is called it will attempt to truncate the string at the nearest space.
     */
    public truncateAtWordEnd: boolean;
    /**
     * You can optionally pass in an object representing the payload, or configure properties on the returned object.
     */
    constructor(payload?: any);
    /**
     * Set the `aps.alert` text body. This will use the most space-efficient means.
     */
    setAlertText(alertText: string): Notification;
    /**
     * Set the `title` property of the `aps.alert` object - used with Safari Push Notifications
     */
    setAlertTitle(alertTitle: string): Notification;
    /**
     * Set the `action` property of the `aps.alert` object - used with Safari Push Notifications
     */
    setAlertAction(alertAction: string): Notification;
    /**
     * Set the `action-loc-key` property of the `aps.alert` object.
     */
    setActionLocKey(key: string): Notification;
    /**
     * Set the `loc-key` property of the `aps.alert` object.
     */
    setLocKey(key: string): Notification;
    /**
     * Set the `loc-args` property of the `aps.alert` object.
     */
    setLocArgs(args: string[]): Notification;
    /**
     * Set the `launch-image` property of the `aps.alert` object.
     */
    setLaunchImage(image: string): Notification;
    /**
     * Set the `mdm` property on the payload.
     */
    setMDM(mdm: string | Object): Notification;
    /**
     * Set the `content-available` property of the `aps` object.
     */
    setNewsstandAvailable(available: boolean): Notification;
    /**
     * Set the `content-available` property of the `aps` object.
     */
    setContentAvailable(available: boolean): Notification;
    /**
     * Set the `url-args` property of the `aps` object.
     */
    setUrlArgs(urlArgs: string[]): Notification;
    /**
     * Attempt to automatically trim the notification alert text body to meet the payload size limit of 2048 bytes.
     */
    trim(): number;
}
export declare class Device {
    public token: Buffer;
    /**
     * `deviceToken` can be a `Buffer` or a `String` containing a "hex" representation of the token. Throws an error if the deviceToken supplied is invalid.
     */
    constructor(deviceToken: string | Buffer);
}

export interface FeedbackOptions {
    /**
     * The filename of the connection certificate to load from disk, or a Buffer/String containing the certificate data. (Defaults to: `cert.pem`)
     */
    cert?: string | Buffer;
    /**
     * The filename of the connection key to load from disk, or a Buffer/String containing the key data. (Defaults to: `key.pem`)
     */
    key?: string | Buffer;
    /**
     * An array of trusted certificates. Each element should contain either a filename to load, or a Buffer/String (in PEM format) to be used directly. If this is omitted several well known "root" CAs will be used. - You may need to use this as some environments don't include the CA used by Apple (entrust_2048).
     */
    ca?: (string | Buffer)[];
    /**
     * File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer containing the PFX data. If supplied will be used instead of certificate and key above.
     */
    pfx?: string | Buffer;
    /**
     * The passphrase for the connection key, if required
     */
    passphrase?: string;
    /**
     * Specifies which environment to connect to: Production (if true) or Sandbox - The hostname will be set automatically. (Defaults to NODE_ENV == "production", i.e. false unless the NODE_ENV environment variable is set accordingly)
     */
    production?: boolean;
    /**
     * Feedback server port (Defaults to: `2196`)
     */
    port?: number;
    /**
     * Sets the behaviour for triggering the `feedback` event. When `true` the event will be triggered once per connection with an array of timestamp and device token tuples. Otherwise a `feedback` event will be emitted once per token received. (Defaults to: true)
     */
    batchFeedback?: boolean;
    /**
     * The maximum number of tokens to pass when emitting the event - a value of 0 will cause all tokens to be passed after connection is reset. After this number of tokens are received the `feedback` event will be emitted. (Only applies when `batchFeedback` is enabled)
     */
    batchSize?: number;
    /**
     * How often to automatically poll the feedback service. Set to `0` to disable. (Defaults to: `3600`)
     */
    interval?: number;
}
export interface FeedbackData {
    time: number;
    device: Device;
}
/**
 * Connection to the Apple Push Notification Feedback Service and if `interval` isn't disabled automatically begins polling the service. Many of the options are the same as `apn.Connection()`
 */
export declare class Feedback {
    constructor(options: FeedbackOptions);
    /**
     * Trigger a query of the feedback service. If `interval` is non-zero then this method will be called automatically.
     */
    start(): void;
    /**
     * You can cancel the interval by calling `feedback.cancel()`. If you do not wish to have the service automatically queried then set `interval` to 0 and use `feedback.start()` to manually invoke it one time.
     */
    cancel(): void;
    /**
     * Emitted when an error occurs initialising the module. Usually caused by failing to load the certificates.
     */
    on(event: "error", listener: (error: Error) => void): Feedback;
    /**
     * Emitted when an error occurs receiving or processing the feedback and in the case of a socket error occurring. These errors are usually informational and node-apn will automatically recover.
     */
    on(event: "feedbackError", listener: (error: Error) => void): Feedback;
    /**
     * Emitted when data has been received from the feedback service, typically once per connection. `feedbackData` is an array of objects, each containing the `time` returned by the server (epoch time) and the `device` a `Buffer` containing the device token.
     */
    on(event: "feedback", listener: (feedbackData: FeedbackData[]) => void): Feedback;
    on(event: string, listener: Function): Feedback;
}

export declare enum Errors {
    "noErrorsEncountered" = 0,
    "processingError" = 1,
    "missingDeviceToken" = 2,
    "missingTopic" = 3,
    "missingPayload" = 4,
    "invalidTokenSize" = 5,
    "invalidTopicSize" = 6,
    "invalidPayloadSize" = 7,
    "invalidToken" = 8,
    "apnsShutdown" = 10,
    "none" = 255,
    "retryLimitExceeded" = 512,
    "moduleInitialisationFailed" = 513,
    "connectionRetryLimitExceeded" = 514, // When a connection is unable to be established. Usually because of a network / SSL error this will be emitted
    "connectionTerminated" = 515
}

//Lowercase aliases
export { Connection as connection };
export { Device as device };
export { Errors as error };
export { Feedback as feedback };
export { Notification as notification };
