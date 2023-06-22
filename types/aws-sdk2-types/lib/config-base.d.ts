import {Agent as httpAgent} from 'http';
import {Agent as httpsAgent} from 'https';
import {AWSError} from './error';
import {Credentials, CredentialsOptions} from './credentials';
import {CredentialProviderChain} from './credentials/credential_provider_chain';
import {Token} from './token';
import {TokenProviderChain} from './token/token_provider_chain';

export class ConfigBase extends ConfigurationOptions{
    constructor(options?: ConfigurationOptions);
    /**
     * Loads credentials from the configuration object.
     */
    getCredentials(callback: (err: AWSError|null, credentials: Credentials|CredentialsOptions|null) => void): void;
    /**
     * Loads token from the token object.
     */
    getToken(callback: (err: AWSError|null, token: Token|null) => void): void;
    /**
     * Loads configuration data from a JSON file into this config object.
     * Loading configuration will reset all existing configuration on the object.
     * This feature is not supported in the browser environment of the SDK.
     *
     * @param {string} path - the path relative to your process's current working directory to load configuration from.
     */
    loadFromPath(path: string): ConfigBase;
    /**
     * Updates the current configuration object with new options.
     *
     * @param {ConfigurationOptions} options - a map of option keys and values.
     * @param {boolean} allowUnknownKeys - Whether unknown keys can be set on the configuration object.
     */
    update(options: ConfigurationOptions & {[key: string]: any}, allowUnknownKeys: true): void;
    /**
     * Updates the current configuration object with new options.
     *
     * @param {ConfigurationOptions} options - a map of option keys and values.
     * @param {boolean} allowUnknownKeys - Defaults to false. Whether unknown keys can be set on the configuration object.
     */
    update(options: ConfigurationOptions, allowUnknownKeys?: false): void;
    /**
     * Gets the promise dependency the SDK will use wherever Promises are returned.
     */
    getPromisesDependency(): typeof Promise | void;
    /**
     * Sets the promise dependency the SDK will use wherever Promises are returned.
     * @param {function} dep - a reference to a Promise constructor
     */
    setPromisesDependency(dep: any): void;
}

export interface HTTPOptions {
    /**
     * the URL to proxy requests through.
     */
    proxy?: string;
    /**
     * the Agent object to perform HTTP requests with.
     * Used for connection pooling.
     * Defaults to the global agent (http.globalAgent) for non-SSL connections.
     */
    agent?: httpAgent | httpsAgent;
    /**
     * The maximum time in milliseconds that the connection phase of the request
     * should be allowed to take. This only limits the connection phase and has
     * no impact once the socket has established a connection.
     * Used in node.js environments only.
     */
    connectTimeout?: number;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     * Defaults to two minutes (120000).
     */
    timeout?: number;
    /**
     * Whether the SDK will send asynchronous HTTP requests.
     * Used in the browser environment only.
     * Set to false to send requests synchronously.
     * Defaults to true (async on).
     */
    xhrAsync?: boolean;
    /**
     * Sets the 'withCredentials' property of an XMLHttpRequest object.
     * Used in the browser environment only.
     * Defaults to false.
     */
    xhrWithCredentials?: boolean;
}
export interface Logger {
    write?: (chunk: any, encoding?: string, callback?: () => void) => void
    log?: (...messages: any[]) => void;
    warn?: (...message: any[]) => void;
}
export interface ParamValidation {
    /**
     * Validates that a value meets the min constraint.
     * This is enabled by default when paramValidation is set to true.
     */
    min?: boolean
    /**
     * Validates that a value meets the max constraint.
     */
    max?: boolean
    /**
     * Validates that a string value matches a regular expression.
     */
    pattern?: boolean
    /**
     * Validates that a string value matches one of the allowable enum values.
     */
    enum?: boolean
}
export interface RetryDelayOptions {
    /**
     * The base number of milliseconds to use in the exponential backoff for operation retries.
     * Defaults to 100 ms.
     */
    base?: number
    /**
     * A custom function that accepts a retry count and error and returns the amount of time to delay in milliseconds. If the result is a non-zero negative value, no further retry attempts will be made.
     * The base option will be ignored if this option is supplied.
     */
    customBackoff?: (retryCount: number, err?: Error) => number
}

/**
 * Common configuration entries to construct a service client.
 */
export abstract class ConfigurationOptions {

    /**
     * Whether to compute checksums for payload bodies when the service accepts it.
     * Currently supported in S3 only.
     */
    computeChecksums?: boolean
    /**
     * Whether types are converted when parsing response data.
     */
    convertResponseTypes?: boolean
    /**
     * Whether to apply a clock skew correction and retry requests that fail because of an skewed client clock.
     */
    correctClockSkew?: boolean
    /**
     * Sets a custom User-Agent string.
     * In node environments this will set the User-Agent header, but
     * browser environments this will set the X-Amz-User-Agent header.
     */
    customUserAgent?: string
    /**
     * The AWS credentials to sign requests with.
     */
    credentials?: Credentials|CredentialsOptions|null
    /**
     * The provider chain used to resolve credentials if no static credentials property is set.
     */
    credentialProvider?: CredentialProviderChain
    /**
     * The Token to authenticate requests with.
     */
    token?: Token|null
    /**
     * The provider chain used to resolve token if no static token property is set.
     */
    tokenProvider?: TokenProviderChain
    /**
     * AWS access key ID.
     *
     * @deprecated
     */
    accessKeyId?: string
    /**
     * AWS secret access key.
     *
     * @deprecated
     */
    secretAccessKey?: string
    /**
     * AWS session token.
     *
     * @deprecated
     */
    sessionToken?: string
    /**
     * A set of options to pass to the low-level HTTP request.
     */
    httpOptions?: HTTPOptions
    /**
     * An object that responds to .write() (like a stream) or .log() (like the console object) in order to log information about requests.
     */
    logger?: Logger
    /**
     * The maximum amount of redirects to follow for a service request.
     */
    maxRedirects?: number
    /**
     * The maximum amount of retries to perform for a service request.
     */
    maxRetries?: number
    /**
     * Returns whether input parameters should be validated against the operation description before sending the request.
     * Defaults to true.
     * Pass a map to enable any of the following specific validation features: min|max|pattern|enum
     */
    paramValidation?: ParamValidation|boolean
    /**
     * The region to send service requests to.
     */
    region?: string
    /**
     * Returns A set of options to configure the retry delay on retryable errors.
     */
    retryDelayOptions?: RetryDelayOptions
    /**
     * Whether the provided endpoint addresses an individual bucket.
     * false if it addresses the root API endpoint.
     */
    s3BucketEndpoint?: boolean
    /**
     * Whether to disable S3 body signing when using signature version v4.
     */
    s3DisableBodySigning?: boolean
    /**
     * Whether to force path style URLs for S3 objects.
     */
    s3ForcePathStyle?: boolean
    /**
     * When region is set to 'us-east-1', whether to send s3 request to global endpoints
     * or 'us-east-1' regional endpoints. This config is only applicable to S3 client;
     * Defaults to 'legacy'
     */
    s3UsEast1RegionalEndpoint?: "regional"|"legacy"
    /**
     * Whether to override the request region with the region inferred
     * from requested resource's ARN. Only available for S3 buckets
     * Defaults to `true`
     */
    s3UseArnRegion?: boolean
    /**
     * Whether the signature to sign requests with (overriding the API configuration) is cached.
     */
    signatureCache?: boolean
    /**
     * The signature version to sign requests with (overriding the API configuration).
     * Possible values: 'v2'|'v3'|'v4'
     */
    signatureVersion?: "v2"|"v3"|"v4"|string
    /**
     * Whether SSL is enabled for requests.
     */
    sslEnabled?: boolean
    /**
     * An offset value in milliseconds to apply to all signing times.
     */
    systemClockOffset?: number
    /**
     * Whether to use the Accelerate endpoint with the S3 service.
     */
    useAccelerateEndpoint?: boolean
    /**
     * Whether to validate the CRC32 checksum of HTTP response bodies returned
     * by DynamoDB.
     */
    dynamoDbCrc32?: boolean;
    /**
     * Whether to enable endpoint discovery for operations that allow optionally using an endpoint returned by 
     * the service.
     */
    endpointDiscoveryEnabled?: boolean;
    /**
     * The size of the global cache storing endpoints from endpoint
     * discovery operations. Once endpoint cache is created, updating this setting
     * cannot change existing cache size.
     */
    endpointCacheSize?: number;
    /**
     * Whether to marshal request parameters to the prefix of hostname.
     */
    hostPrefixEnabled?: boolean;
    /**
     * Whether to send sts request to global endpoints or
     * regional endpoints. 
     */
    stsRegionalEndpoints?: "legacy"|"regional";
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean;
    /**
     * Enables IPv6 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean;
}
