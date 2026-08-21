/// <reference types="node" />
import https = require("https");
/**
 * To send a push notification call this method with a subscription, optional payload and any options.
 *
 * Note: you don't need to define a payload, and this method will work without a GCM API Key and / or VAPID keys if the push service supports it.
 *
 * @param subscription  The PushSubscription you wish to send the notification to.
 * @param payload       The payload you wish to send to the the user.
 * @param options       Options for the GCM API key and vapid keys can be passed in if they are unique for each notification you wish to send.
 *
 * @throws  WebPushError if the upstream push endpoint returns a non-200 status code.
 * @returns  This method returns a Promise which resolves if the sending of the notification was successful, otherwise it rejects.
 *
 * @see SendResult
 * @see WebPushError
 * @see https://github.com/web-push-libs/web-push#sendnotificationpushsubscription-payload-options
 */
export function sendNotification(
    subscription: PushSubscription,
    payload?: string | Buffer | null,
    options?: RequestOptions,
): Promise<SendResult>;

/**
 * Generate VAPID keys.
 *
 * @returns Returns an object with publicKey and privateKey values which are URL Safe Base64 encoded strings.
 *
 * Note: You should create these keys once, store them and use them for all future messages you send.
 */
export function generateVAPIDKeys(): VapidKeys;

/**
 * This method expects the GCM API key that is linked to the gcm_sender_id in your web app manifest.
 * You can use a GCM API Key from the Google Developer Console or the Cloud Messaging tab under a Firebase Project.
 *
 * @param apiKey An API key, or null.
 */
export function setGCMAPIKey(apiKey: string | null): void;

/**
 * Encrypts the payload according to the Message Encryption for Web Push standard.
 *
 * (sendNotification will automatically encrypt the payload for you, so if you use sendNotification() you don't need to worry about it).
 *
 * @param userPublicKey    The public key of the receiver (from the browser).
 * @param userAuth         The auth secret of the receiver (from the browser).
 * @param payload          The message to attach to the notification.
 * @param contentEncoding  The type of content encoding to use (e.g. aesgcm or aes128gcm).
 *
 * @returns This method returns an object with the following fields:
 *           localPublicKey:  The public key matched the private key used during encryption.
 *           salt:            A string representing the salt used to encrypt the payload.
 *           cipherText:      The encrypted payload as a Buffer.
 *
 * @see ContentEncoding
 * @see https://github.com/web-push-libs/web-push#encryptuserpublickey-userauth-payload-contentencoding
 */
export function encrypt(
    userPublicKey: string,
    userAuth: string,
    payload: string | Buffer,
    contentEncoding: ContentEncoding,
): EncryptionResult;

/**
 * This method takes the required VAPID parameters and returns the required
 * header to be added to a Web Push Protocol Request.
 * @param audience         This must be the origin of the push service.
 * @param subject          This should be a 'https:' URL or a 'mailto:' email address.
 * @param publicKey        The VAPID public key.
 * @param privateKey       The VAPID private key.
 * @param contentEncoding  The contentEncoding type.
 * @param [expiration]     The expiration of the VAPID JWT.
 * @returns                 Returns an Object with the Authorization and 'Crypto-Key' values to be used as headers.
 */
export function getVapidHeaders(
    audience: string,
    subject: string,
    publicKey: string,
    privateKey: string,
    contentEncoding: "aes128gcm",
    expiration?: number,
): {
    Authorization: string;
};
export function getVapidHeaders(
    audience: string,
    subject: string,
    publicKey: string,
    privateKey: string,
    contentEncoding: "aesgcm",
    expiration?: number,
): {
    Authorization: string;
    "Crypto-Key": string;
};
export function getVapidHeaders(
    audience: string,
    subject: string,
    publicKey: string,
    privateKey: string,
    contentEncoding: ContentEncoding,
    expiration?: number,
): {
    Authorization: string;
    "Crypto-Key"?: string | undefined;
};

/**
 * Note: When calling generateRequestDetails() the payload argument does not need to be defined, passing in null
 * will return no body and exclude any unnecessary headers.
 * Headers related to the GCM API Key and / or VAPID keys will be included if supplied and required.
 *
 * @param subscription  must be an object containing the details for a push subscription.
 *                      The expected format is the same output as JSON.stringify'ing a PushSubscription in the browser.
 * @param payload       The payload is optional, but if set, will be encrypted and a Buffer will be returned via the payload parameter.
 *                      This argument must be either a string or a node Buffer.
 *                      Note: In order to encrypt the payload, the pushSubscription must have a keys object with p256dh and auth values.
 * @param options       Optional argument, none of its parameters are required.
 *
 * @returns  An object containing all the details needed to make a network request.
 *
 * @see PushSubscription
 * @see RequestDetails
 * @see https://github.com/web-push-libs/web-push#generaterequestdetailspushsubscription-payload-options
 */
export function generateRequestDetails(
    subscription: PushSubscription,
    payload?: null,
    options?: RequestOptions,
): RequestDetails & { body: null };
export function generateRequestDetails(
    subscription: PushSubscription,
    payload?: string | Buffer,
    options?: RequestOptions,
): RequestDetails & { body: Buffer };
export function generateRequestDetails(
    subscription: PushSubscription,
    payload?: string | Buffer,
    options?: RequestOptions,
): RequestDetails;

/**
 * Valid content encodings used by encrypt(), getVapidHeaders(), generateRequestDetails() and sendNotification().
 */
export type ContentEncoding = "aesgcm" | "aes128gcm";

/**
 * Map of valid content encodings.
 */
export const supportedContentEncodings: {
    readonly AES_GCM: "aesgcm" & ContentEncoding;
    readonly AES_128_GCM: "aws128gcm" & ContentEncoding;
};

/**
 * Valid urgency used by RequestOptions.
 */
export type Urgency = "very-low" | "low" | "normal" | "high";

/**
 * Map of valid urgency values.
 */
export const supportedUrgency: {
    readonly VERY_LOW: "very-low" & Urgency;
    readonly LOW: "low" & Urgency;
    readonly NORMAL: "normal" & Urgency;
    readonly HIGH: "high" & Urgency;
};

/**
 * Returned by encrypt() on success.
 */
export interface EncryptionResult {
    localPublicKey: string;
    salt: string;
    cipherText: Buffer;
}

/**
 * A private/public key pair for use with VAPID methods.
 */
export interface VapidKeys {
    publicKey: string;
    privateKey: string;
}

/**
 * When making requests where you want to define VAPID details, call this method before sendNotification()
 * or pass in the details and options to sendNotification.
 *
 * @param  subject     This must be either a 'https:' URL or a 'mailto:' address.
 *                     For example: 'https://my-site.com/contact' or 'mailto: contact@my-site.com'
 * @param  publicKey   The public VAPID key, a URL safe, base64 encoded string.
 * @param  privateKey  The private VAPID key, a URL safe, base64 encoded string.
 */
export function setVapidDetails(subject: string, publicKey: string, privateKey: string): void;

/**
 * Configuration for a Push Subscription. This can be obtained on the frontend by calling
 * serviceWorkerRegistration.pushManager.subscribe().
 * The expected format is the same output as JSON.stringify'ing a PushSubscription in the browser.
 */
export interface PushSubscription {
    endpoint: string;
    expirationTime?: null | number;
    keys: {
        p256dh: string;
        auth: string;
    };
}

export interface Headers {
    [header: string]: string;
}

/**
 * Options which can be passed to the https-proxy-agent constructor.
 * These are the usual http.Agent constructor options, and some additional properties:
 * headers - Object containing additional headers to send to the proxy server in the CONNECT request.
 * @see https://www.npmjs.com/package/https-proxy-agent#user-content-api
 */
export type HttpsProxyAgentOptions = https.AgentOptions & { headers: Headers };

/**
 * Options for configuring the outgoing request in generateRequestDetails() or sendNotification().
 */
export interface RequestOptions {
    /**
     * Can be a GCM API key to be used for this request and this request only. This overrides any API key set via setGCMAPIKey().
     */
    gcmAPIKey?: string | undefined;
    /**
     * Should be an object with subject, publicKey and privateKey values defined. These values should follow the VAPID Spec.
     * @see https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid
     */
    vapidDetails?:
        | {
            subject: string;
            publicKey: string;
            privateKey: string;
        }
        | undefined;
    /**
     * A value in milliseconds that specifies the request's socket timeout.
     * On timeout, the request will be destroyed and the promise will be rejected with a meaningful error.
     * It's a common misconception that a socket timeout is the timeout to receive the full response.
     * So if you have a socket timeout of 1 second, and a response comprised of 3 TCP packets,
     * where each response packet takes 0.9 seconds to arrive, for a total response time of 2.7 seconds,
     * then there will be no timeout.
     * Once a socket 'timeout' triggers the request will be aborted by the library (by default undefined).
     */
    timeout?: number | undefined;
    /**
     * A value in seconds that describes how long a push message is retained by the push service (by default, four weeks).
     */
    TTL?: number | undefined;
    /**
     * An object with all the extra headers you want to add to the request.
     */
    headers?: Headers | undefined;
    /**
     * The type of push encoding to use (e.g. 'aesgcm', by default, or 'aes128gcm').
     * @see supportedContentEncodings
     */
    contentEncoding?: ContentEncoding | undefined;
    /**
     * To indicate to the push service whether to send the notification immediately
     * or prioritize the recipient’s device power considerations for delivery.
     * Provide one of the following values: very-low, low, normal, or high.
     * To attempt to deliver the notification immediately, specify high.
     * @see supportedUrgency
     */
    urgency?: Urgency | undefined;
    /**
     * Optionally provide an identifier that the push service uses to coalesce notifications.
     * Use a maximum of 32 characters from the URL or filename-safe Base64 characters sets.
     */
    topic?: string | undefined;
    /**
     * The HttpsProxyAgent's constructor argument that may either be a string URI of the proxy server
     * (eg. http://< hostname >:< port >) or an "options" object with more specific properties.
     * @see https://github.com/TooTallNate/node-https-proxy-agent#new-httpsproxyagentobject-optionsb
     */
    proxy?: string | HttpsProxyAgentOptions | undefined;
    /**
     * The HTTPS Agent instance which will be used in the https.request method. If the proxy options are defined, agent will be ignored!
     */
    agent?: https.Agent | undefined;
}

/**
 * An object containing all the details needed to make a network request.
 * Buffer is null unless a payload was passed into generateRequestDetails().
 */
export interface RequestDetails {
    method: "POST";
    headers: Headers;
    body: Buffer | null;
    endpoint: string;
    proxy?: string | undefined;
}

/**
 * If calling sendNotification() was successful, this result contains the response from the push endpoint.
 */
export interface SendResult {
    statusCode: number;
    body: string;
    headers: Headers;
}

/**
 * Error thrown when sendNotification() receives a non-200 status code from the push endpoint.
 */
export class WebPushError extends Error {
    readonly message: string;
    readonly statusCode: number;
    readonly headers: Headers;
    readonly body: string;
    readonly endpoint: string;

    constructor(message: string, statusCode: number, headers: Headers, body: string, endpoint: string);
}
