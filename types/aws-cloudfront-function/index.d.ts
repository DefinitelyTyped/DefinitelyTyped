declare namespace AWSCloudFrontFunction {
    interface Event {
        version: "1.0";
        context: Context;
        viewer: Viewer;
        request: Request & RequestMethods;
        response: Response;
    }

    interface Context {
        distributionDomainName: string;
        distributionId: string;
        eventType: "viewer-request" | "viewer-response";
        requestId: string;
    }

    interface Viewer {
        ip: string;
    }

    interface Request {
        method: string;
        uri: string;
        querystring: ValueObject;
        headers: ValueObject;
        cookies: ValueObject;
    }

    interface RequestMethods {
        /**
         * Use the rawQueryString() method to retrieve the unparsed and unaltered query string as a string.
         * @returns Returns the full query string of the incoming request as a string value without the leading ?.
         * - If there isn't a query string, but the ? is present, the functions returns an empty string.
         * - If there isn't a query string and the ? isn't present, the function returns undefined.
         * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/general-helper-methods.html#raw-query-string-method
         */
        rawQueryString(): string | undefined;
    }

    interface Response {
        statusCode: number;
        statusDescription?: string;
        headers?: ValueObject;
        cookies?: ResponseCookie;
        body?: string | ResponseBody;
    }

    interface ResponseBody {
        data: string;
        encoding: "text" | "base64";
    }

    interface ValueObject {
        [name: string]: {
            value: string;
            multiValue?: Array<{
                value: string;
            }>;
        };
    }

    interface ResponseCookie {
        [name: string]: {
            value: string;
            attributes: string;
            multiValue?: Array<{
                value: string;
                attributes: string;
            }>;
        };
    }
}

declare module "cloudfront" {
    /**
     * Retrieves a reference to a CloudFront Key-Value Store (KVS) by its ID.
     * @param kvsId The identifier of the KVS to use.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-custom-methods.html
     */
    function kvs(kvsId: string): KVStore;

    interface KVStore {
        /**
         * Retrieve a value from the store.
         * @param key Key to retrieve.
         * @throws If key does not exist.
         */
        get(key: string): Promise<string>;
        get(key: string, options: { format: "string" }): Promise<string>;
        get(key: string, options: { format: "bytes" }): Promise<Uint8Array>;
        get(key: string, options: { format: "json" }): Promise<unknown>;

        /**
         * Check if the key exists in the store.
         * @param key Key to check.
         */
        exists(key: string): Promise<boolean>;

        /**
         * Retrieve metadata about the key-value store.
         */
        meta(): Promise<{
            creationDateTime: string;
            lastUpdatedDateTime: string;
            keyCount: number;
        }>;
    }

    interface OriginAccessControlConfig {
        enabled: boolean;
        signingBehavior: "always" | "never" | "no-override";
        signingProtocol: "sigv4";
        originType: "s3" | "mediapackagev2" | "mediastore" | "lambda";
    }

    interface OriginShield {
        enabled: boolean;
        region: string;
    }

    interface Timeouts {
        /**
         * Max time (seconds) to wait for a response or next packet. (1–60)
         */
        readTimeout?: number;

        /**
         * Max time (seconds) to keep the connection alive after response. (1–60)
         */
        keepAliveTimeout?: number;

        /**
         * Max time (seconds) to wait for connection establishment. (1–10)
         */
        connectionTimeout?: number;
    }

    interface CustomOriginConfig {
        /**
         * Port number of the origin. e.g., 80 or 443
         */
        port: number;

        /**
         * Protocol used to connect. Must be "http" or "https"
         */
        protocol: "http" | "https";

        /**
         * Minimum TLS/SSL version to use for HTTPS connections.
         */
        sslProtocols: Array<"SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2">;
    }

    interface UpdateRequestOriginParams {
        /**
         * New origin's domain name. Optional if reusing existing origin's domain.
         */
        domainName?: string;

        /**
         * Path prefix to append when forwarding request to origin.
         */
        originPath?: string;

        /**
         * Override or clear custom headers for the origin request.
         */
        customHeaders?: Record<string, string>;

        /**
         * Number of connection attempts (1–3).
         */
        connectionAttempts?: number;

        /**
         * Origin Shield configuration. Enables shield layer if specified.
         */
        originShield?: OriginShield;

        /**
         * Origin Access Control (OAC) configuration.
         */
        originAccessControlConfig?: OriginAccessControlConfig;

        /**
         * Response and connection timeout configurations.
         */
        timeouts?: Timeouts;

        /**
         * Settings for non-S3 origins or S3 with static website hosting.
         */
        customOriginConfig?: CustomOriginConfig;
    }

    /**
     * Mutates the current request’s origin.
     * You can specify a new origin (e.g., S3 or ALB), change custom headers, enable OAC, or enable Origin Shield.
     * Missing fields will inherit values from the assigned origin.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/helper-functions-origin-modification.html#update-request-origin-helper-function
     */
    function updateRequestOrigin(params: UpdateRequestOriginParams): void;

    /**
     * Switches to another origin already defined in the distribution by origin ID.
     * This is more efficient than defining a new one via `updateRequestOrigin()`.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/helper-functions-origin-modification.html#select-request-origin-id-helper-function
     */
    function selectRequestOriginById(originId: string): void;

    interface CreateRequestOriginGroupParams {
        /**
         * Two origin IDs to form an origin group.
         * The first is primary; the second is used for failover.
         */
        originIds: [string, string];

        /**
         * Failover selection strategy: default or media-quality-score.
         */
        selectionCriteria?: "default" | "media-quality-score";

        /**
         * List of status codes that trigger failover to the secondary origin.
         */
        failoverCriteria: {
            statusCodes: number[];
        };
    }

    /**
     * Creates a new origin group for failover logic.
     * The origin group can be referenced later via origin ID.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/helper-functions-origin-modification.html#create-request-origin-group-helper-function
     */
    function createRequestOriginGroup(params: CreateRequestOriginGroupParams): void;

    /**
     * Use this JavaScript object to obtain the edge location airport code,
     * expected Regional Edge Cache region or the CloudFront server IP address used to handle the request.
     * This metadata is available only the viewer request event trigger.
     * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/general-helper-methods.html#edge-location-metadata
     */
    interface EdgeLocation {
        /**
         * The three-letter IATA code of the edge location that handled the request.
         */
        name: string;
        /**
         * The IPv4 or IPv6 address of the server that handled the request.
         */
        serverIp: string;
        /**
         * The CloudFront Regional Edge Cache (REC) that the request is expected to use if there is a cache miss.
         * This value is not updated in the event that the expected REC is unavailable and a backup REC is used for the request.
         * This doesn't include the Origin Shield location being used, except in cases when the primary REC and the Origin Shield are the same location.
         */
        region: string;
    }

    const cf: {
        kvs: typeof kvs;
        updateRequestOrigin: typeof updateRequestOrigin;
        selectRequestOriginById: typeof selectRequestOriginById;
        createRequestOriginGroup: typeof createRequestOriginGroup;
        edgeLocation: EdgeLocation;
    };

    export default cf;
}
