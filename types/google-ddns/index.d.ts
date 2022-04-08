// Type definitions for google-ddns 1.1
// Project: https://github.com/DEDAjs/google-ddns#readme
// Definitions by: Mick Dekkers <https://github.com/mickdekkers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * The options for the DynamicDNS class
 */
export interface DynamicDNSOptions {
    /**
     * The dynamic DNS hostname.
     */
    hostname: string;
    /**
     * The dynamic DNS username.
     */
    username: string;
    /**
     * The dynamic DNS password.
     */
    password: string;
    /**
     * The URL used to check the current public IP of the device.
     */
    publicIpUrl?: string;
    /**
     * The URL of the Google Dynamic DNS API. Must include the text `%HOSTNAME%` and `%IPADDRESS%` as placeholders for the hostname and IP
     * address.
     */
    updateIpUrl?: string;
    /**
     * The HTTP header User-Agent to send when updating the IP address.
     * This is required by the Google Dynamic DNS API.
     */
    userAgent?: string;
    /**
     * Whether to fail or continue synchronizing if the current hostname
     * was not resolved. This typically happens if the domain was created
     * and has not yet been applied or propagated. See TTL (Time-to-Live)
     * for more information. Even if this fails, the update can still be
     * successful.
     */
    failOnUnresolvedHostName?: boolean;
    /**
     * The maximum number of times to attempt synchronization despite the
     * hostname not being resolved. Applies if `failOnUnresolvedHostName`
     * is `false`.
     */
    maxUnresolvedHostNameFail?: number;
    /**
     * Whether to cache the IP address of the DNS record or make a DNS
     * request every time. This can usually be left enabled since this
     * client is the only one responsible for updating the DNS record.
     */
    useHostIPAddressCache?: boolean;
    /**
     * If `useHostIPAddressCache` is `true`, this option is used to force a
     * DNS request every once in a while. This is the number of seconds
     * until the cache expires.
     */
    hostIPAddressCacheExpires?: number;
    /**
     * If debug mode is enabled, debug and status information will be
     * written to the console.
     */
    debug?: boolean;
}

/**
 * A response object for a successful response
 */
export interface SuccessResponse {
    /**
     * The response status
     */
    status: 'success';
    /**
     * The response code
     */
    response: 'good' | 'nochg';
    /**
     * A human-readable response message
     */
    message: string;
    /**
     * The IP address in the DNS record.
     */
    ip: string;
}

/**
 * A response object for an error response
 */
export interface ErrorResponse {
    /**
     * The response status
     */
    status: 'error';
    /**
     * The response code (may include `good` or `nochg` in edge cases)
     */
    response:
        | 'nohost'
        | 'badauth'
        | 'notfqdn'
        | 'badagent'
        | 'abuse'
        | '911'
        // Error status is possible for these in certain edge cases
        | 'good'
        | 'nochg';
    /**
     * A human-readable response message
     */
    message: string;
    // This definition is here to make it possible to access the `ip`
    // property in the union `SuccessResponse | ErrorResponse`
    // See https://github.com/Microsoft/TypeScript/issues/12815
    ip?: undefined;
}

/**
 * A class to get the current public and DNS IPs and update the Google
 * Dynamic DNS record.
 */
export class DynamicDNS {
    constructor(options: DynamicDNSOptions);
    /**
     * Synchronizes the DNS IP address with the current public IP address.
     * Compares the current public IP address against the DNS record for
     * the domain, and updates the record if they differ.
     * @param force Send an update request without checking whether
     * the current DNS and public IPs differ.
     * @returns `Promise<true>` if the public IP address and the IP address
     * in the DNS record are the same and no sync was attempted. Otherwise
     * returns a Promise of an object with response data. Error responses
     * are rejected.
     */
    sync(force?: boolean): Promise<true | SuccessResponse>;
    /**
     * Gets the public IP address of the network hosting this application.
     * @returns a Promise resolving with the IP or rejecting with an error object `{error: message}`
     */
    getPublicIP(): Promise<string>;
    /**
     * Gets the current IP address in the DNS record.
     * @returns a Promise resolving with the IP or rejecting with an error object `{error: message}`
     */
    getCurrentIP(): Promise<string>;
}

/**
 * The options for the Service class
 */
export interface ServiceOptions extends DynamicDNSOptions {
    /**
     * The number of seconds between updates.
     */
    checkInterval?: number;
    /**
     * The maximum number of consecutive errors before stopping the service
     * if `exitOnMaxErrors` is `true`.
     */
    maxConsecutiveErrors?: number;
    /**
     * Whether to stop the service if the maximum number of consecutive
     * errors is reached.
     */
    exitOnMaxErrors?: boolean;
    /**
     * The path of the log file to output to. Set to `false` to disable
     * logging to file.
     */
    logPath?: string | false;
    /**
     * Whether to log output to the console.
     */
    logToConsole?: boolean;
}

/**
 * A service class used to update a Google Dynamic DNS record on a time
 * interval.
 */
export class Service {
    constructor(options: ServiceOptions);
    /**
     * Start the service time interval.
     */
    start(): void;
}
