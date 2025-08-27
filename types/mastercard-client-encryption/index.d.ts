/// <reference types="node" />

export interface DecryptOptions {
    body: unknown;
    request: {
        url: string;
    };
}

export type PublicKeyFingerprintType =
    | "certificate"
    | "publicKey";

export type DataEncodingType =
    | "base64"
    | "hex";

export interface RootMapping {
    element: string;
    obj: string;
}

export type EncryptionParameter =
    | RootMapping[]
    | [];

export interface RootMappingNode {
    path: string;
    toEncrypt: EncryptionParameter;
    toDecrypt: EncryptionParameter;
}

export type KeyStoreFileExtension =
    | ".p12"
    | ".pem"
    | ".der";

export type KeyStoreFile = `${string}${KeyStoreFileExtension}`;

export interface JweEncryptionConfiguration {
    mode: string;
    encryptionCertificate: unknown;
    encryptedValueFieldName: unknown;
    paths: RootMappingNode[];
    publicKeyFingerprintType?: PublicKeyFingerprintType;
    publicKeyFingerprint?: PublicKeyFingerprintType extends "certificate" ? DataEncodingType
        : unknown;
    privateKey?: unknown;
    keyStore?: KeyStoreFile;
    keyStoreAlias?: unknown;
    keyStorePassword?: unknown;
}

/**
 * @classdesc
 * Performs JWE encryption on HTTP payloads.
 *
 * @module encryption/JweEncryption
 * @version 1.0.0
 */
export class JweEncryption {
    constructor(encryptionConfig: JweEncryptionConfiguration);
    /**
     * Encrypt parts of a HTTP request using the given config
     *
     * @param endpoint HTTP URL for the current call
     * @param header HTTP Header
     * @param body HTTP Body
     * @returns {{header: *, body: *}}
     */
    encrypt: <T>(
        url: string,
        headers: Record<string, string | undefined>,
        body: T,
    ) => {
        headers: Record<string, string | undefined>;
        body: T;
    };

    /**
     * Decrypt part of the HTTP response using the given config
     *
     * @param response HTTP response to decrypt
     * @returns {*}
     */
    decrypt: <T extends DecryptOptions>(response: T) => T["body"];
}

export namespace EncryptionUtils {
    /**
     * Utils module
     * @version 1.0.0
     */
    function isSet(value: unknown): boolean;

    /**
     * Converts a 'binary' encoded string of bytes to (hex or base64) encoded string.
     *
     * @param bytes Bytes to convert
     * @param dataEncoding encoding to use (hex or base64)
     * @returns {string} encoded string
     */
    function bytesToString(
        bytes: string,
        dataEncoding: DataEncodingType,
    ): string;

    /**
     * Converts a (hex or base64) string into a 'binary' encoded string of bytes.
     *
     * @param value string to convert
     * @param dataEncoding encoding to use (hex or base64)
     * @returns binary encoded string of bytes
     */
    function stringToBytes(
        value: string,
        dataEncoding: DataEncodingType,
    ): string;

    function toByteArray(
        value: string,
        fromFormat: import("node:buffer").TranscodeEncoding,
    ): Buffer;

    /**
     * Convert a json object or json string to string
     *
     * @param {Object|string} data Json string or Json obj
     * @returns {string}
     */
    function jsonToString(
        data: unknown,
    ): string;

    /**
     * Convert Json string to Json object if it is a valid Json
     * Return back input string if it is not a Json
     *
     * @param {string} Json string or string
     * @returns {Object|string}
     */
    function stringToJson(
        data: string,
    ): unknown;

    function mutateObjectProperty(
        path: string,
        value: unknown,
        obj: unknown,
        srcPath: NonNullable<string>,
        properties: string[],
    ): unknown;

    interface PrivateKeyConfig {
        privateKey: JweEncryptionConfiguration["privateKey"];
        keyStore?: never;
        keyStoreAlias?: never;
        keyStorePassword?: never;
    }

    interface KeystoreConfig {
        privateKey?: never;
        keyStore: JweEncryptionConfiguration["keyStore"];
        keyStoreAlias: JweEncryptionConfiguration["keyStoreAlias"];
        keyStorePassword: JweEncryptionConfiguration["keyStorePassword"];
    }

    type getPrivateKeyConfig = PrivateKeyConfig | KeystoreConfig;

    function getPrivateKey(
        config: getPrivateKeyConfig,
    ):
        | import("node-forge").pki.rsa.PrivateKey
        | import("node-forge").pki.PrivateKey
        | null
        | undefined;

    function readPublicCertificate(
        publicCertificatePath: string,
    ):
        | import("node-forge").pki.Certificate
        | undefined;

    function computePublicFingerprint<
        T extends PublicKeyFingerprintType,
    >(
        config: {
            publicKeyFingerprintType: T;
        },
        encryptionCertificate: T extends "certificate" ? import("node-forge").pki.Certificate
            : Pick<import("node-forge").pki.Certificate, "publicKey">,
        encoding: DataEncodingType,
    ): string;

    function nodeVersionSupportsJWE(): boolean;

    function checkConfigFieldsArePopulated(
        config: {
            paths: unknown;
        },
        propertiesBasic: string[],
        propertiesField: string[],
        propertiesHeader: string[],
    ): boolean | undefined;

    function validateRootMapping(
        config: Pick<JweEncryptionConfiguration, "paths">,
    ): void;

    function hasConfig(
        config: unknown,
        endpoint: string,
    ): string[] | null;

    function elemFromPath(
        path: string,
        obj: unknown,
    ):
        | { node: unknown; parent: unknown }
        | null;

    function isJsonRoot(
        elem: unknown,
    ): boolean;

    function computeBody(
        configParam: EncryptionParameter,
        body: unknown,
        bodyMap: unknown,
    ): boolean;

    function addEncryptedDataToBody(
        encryptedData: unknown,
        path: RootMapping,
        encryptedValueFieldName: string,
        body: unknown,
    ): unknown;

    function readPublicCertificateContent(
        config: string,
    ): import("node-forge").pki.Certificate;

    function getPrivateKeyFromContent<T extends { privateKey: string }>(
        config: T,
    ): T extends { privateKey: string } ? import("node-forge").pki.PrivateKey
        : null;
}

export type FieldLevelEncryptionConfiguration = JweEncryptionConfiguration & {
    ivFieldName: string;
    ivHeaderName?: string;
    encryptedKeyFieldName: string;
    encryptedKeyHeaderName?: string;
    publicKeyFingerprintFieldName: string;
    publicKeyFingerprintHeaderName?: string;
    oaepHashingAlgorithmFieldName: string;
};

/**
 * Performs field level encryption on HTTP payloads.
 *
 * @module encryption/FieldLevelEncryption
 * @version 1.0.0
 */
export class FieldLevelEncryption {
    constructor(config: FieldLevelEncryptionConfiguration);

    /**
     * Encrypt parts of a HTTP request using the given config
     *
     * @param endpoint HTTP URL for the current call
     * @param header HTTP Header
     * @param body HTTP Body
     * @returns {{header: *, body: *}}
     */
    encrypt<T>(
        endpoint: string,
        header: Record<string, string | undefined>,
        body: T,
    ): {
        header: Record<string, string | undefined>;
        body: T;
    };

    /**
     * Decrypt part of the HTTP response using the given config
     *
     * @param response HTTP response to decrypt
     * @returns {*}
     */
    decrypt: <T extends DecryptOptions>(response: T) => T["body"];
}

/**
 * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
 * application to use this class directly - the *Api and model classes provide the public API for the service. The
 * contents of this file should be regarded as internal but are documented for completeness.
 * @alias module:ApiClient
 */
export class ApiClient {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * Overrides the default value set in spec file if present
     * @param {String} basePath
     */
    constructor(basePath: string);

    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath: string;

    // TODO: authentications type
    /**
     * The authentication methods to be included for all API calls.
     */
    authentications: Record<string, unknown>;

    /**
     * The default HTTP headers to be included for all API calls.
     * @default {}
     */
    defaultHeaders: Record<string, unknown>;

    /**
     * The default HTTP timeout for all API calls.
     * @default 60000
     */
    timeout: number;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @default true
     */
    cache: boolean;

    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */
    enableCookies: boolean;

    // TODO: find superagent.agent type
    agent: undefined;

    /**
     * Allow user to override superagent agent
     */
    // TODO: find superagent.agent type
    requestAgent: unknown | null;

    /**
     * Allow user to add superagent plugins
     */
    plugins: unknown[];

    /**
     * Returns a string representation for an actual parameter.
     * @param param The actual parameter.
     * @returns {String} The string representation of <code>param</code>.
     */
    paramToString(
        param: unknown,
    ): string;

    /**
     * Returns a boolean indicating if the parameter could be JSON.stringified
     * @param param The actual parameter
     * @returns Flag indicating if <code>param</code> can be JSON.stringified
     */
    static canBeJsonified(str: string): boolean;

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param path The path to append to the base URL.
     * @param pathParams The parameter values to append.
     * @param apiBasePath Base path defined in the path, operation level to override the default one
     * @returns The encoded path with parameter values substituted.
     */
    buildUrl(
        path: string,
        pathParams: Record<string, unknown>,
        apiBasePath: NonNullable<string>,
    ): string;

    /**
     * Checks whether the given content type represents JSON.<br>
     * JSON content type examples:<br>
     * @example
     * application/json
     * @example
     * application/json; charset=UTF8
     * @example
     * APPLICATION/JSON
     * @param contentType The MIME content type to check.
     * @returns <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
     */
    isJsonMime(
        contentType: string,
    ): boolean;

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param contentTypes
     * @returns The chosen content type, preferring JSON.
     */
    jsonPreferredMime(
        contentTypes: Record<string, unknown>,
    ): string;

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns <code>true</code> if <code>param</code> represents a file.
     */
    isFileParam(
        param: import("fs").ReadStream | Buffer | Blob | File,
    ): boolean;

    /**
     * Normalizes parameter values:
     * <ul>
     * <li>remove nils</li>
     * <li>keep files and arrays</li>
     * <li>format to string with `paramToString` for other cases</li>
     * </ul>
     * @param params The parameters as object properties.
     * @returns normalized parameters.
     */
    normalizeParams(
        params: Record<string, unknown>,
    ): Record<string, unknown>;

    /**
     * Builds a string representation of an array-type actual parameter, according to the given collection format.
     * @param param An array parameter.
     * @param collectionFormat The array element separator strategy.
     * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
     * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
     */
    buildCollectionParam(
        param: unknown[],
        collectionFormat: ApiClient.CollectionFormatEnum,
    ): string | [] | null | undefined;

    /**
     * Applies authentication headers to the request.
     * @param {Object} request The request object created by a <code>superagent()</code> call.
     * @param {Array.<String>} authNames An array of authentication method names.
     */
    applyAuthToRequest(
        request: unknown, // TODO: get type of request from superagent
        authNames: string[],
    ): void;

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns {object} A value of the specified type.
     */
    deserialize(
        response: unknown, // TODO: get superagent response object shape
        returnType: string | string[] | Record<string, unknown> | ApiClient.Model,
    ): unknown;

    /**
     * Converts a value to the specified type.
     * @param data - The data to convert, as a string or object.
     * @param type - The type to return. Pass a string for simple types
     *      or the constructor function for a complex type. Pass an array
     *      containing the type name to return an array of that type. To
     *      return an object, pass an object with one property whose name
     *      is the key type and whose value is the corresponding value type:
     *      all properties on <code>data<code> will be converted to this type.
     * @returns {unknown} An instance of the specified type or null or undefined if data is null or undefined.
     */
    static convertToType(
        data: unknown,
        type: string | string[] | Record<string, unknown> | ApiClient.Model,
    ): unknown;

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param path The base URL to invoke.
     * @param httpMethod The HTTP method to use.
     * @param pathParams A map of path parameters and their values.
     * @param queryParams A map of query parameters and their values.
     * @param headerParams A map of header parameters and their values.
     * @param formParams A map of form parameters and their values.
     * @param bodyParam The value to pass as the request body.
     * @param authNames An array of authentication type names.
     * @param contentTypes An array of request MIME types.
     * @param accepts An array of acceptable response MIME types.
     * @param returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param apiBasePath base path defined in the operation/path level to override the default one
     */
    callApi<TResponse>(
        path: string,
        httpMethod: string,
        pathParams: Record<string, string>,
        queryParams: Record<string, unknown>,
        headerParams: Record<string, unknown>,
        formParams: Record<string, unknown>,
        bodyParam: unknown,
        authNames: string[],
        contentTypes: string[],
        accepts: string[],
        returnType: string | [] | ApiClient.Model | unknown,
        apiBasePath: string,
    ): Promise<
        | (TResponse & { data: unknown })
        | ApiClient.ErrorResponse<TResponse>
    >;

    /**
     * Parses an ISO-8601 string representation or epoch representation of a date value.
     * @param {String} str The date value as a string.
     * @returns {Date} The parsed date object.
     */
    static parseDate(str: string): Date;

    hostSettings(): Array<{ url: string; description: string }>;

    getBasePathFromSettings(
        index: number,
        variables: Record<string, string>,
    ): string | undefined;

    /**
     * Constructs a new map or array model from REST data.
     * @param data - The REST data.
     * @param obj - The target object or array.
     * @param type
     */
    static constructFromObject(
        data: unknown[] | unknown,
        obj: unknown[] | unknown,
        type: string,
    ): void;

    /**
     * The default API client implementation.
     */
    instance: ApiClient;
}

export namespace ApiClient {
    type CollectionFormatEnum = "csv" | "ssv" | "tsv" | "pipes" | "multi" | "passthrough";

    interface Response<T> {
        status: unknown;
        statusText: string;
        body: unknown;
        response: T;
    }

    type ErrorResponse<T> = Response<T> & {
        error: Error;
    };

    interface Model {
        constructFromObject(
            data: unknown,
            obj: unknown,
        ): unknown;
    }
}

export type JweCryptoConfiguration =
    & { encryptionCertificate: string }
    & EncryptionUtils.getPrivateKeyConfig
    & (
        | {
            publicKeyFingerprint: unknown;
            publicKeyFingerprintType?: never;
            dataEncoding?: never;
        }
        | {
            publicKeyFingerprint?: never;
            publicKeyFingerprintType: PublicKeyFingerprintType;
            dataEncoding: DataEncodingType;
        }
    )
    & { encryptedValueFieldName: string };
export class JweCrypto {
    encryptionCertificate: string;

    privateKey: string | null;

    publicKeyFingerprint: unknown | string | null;

    encryptedValueFieldName: string;

    constructor(options: JweCryptoConfiguration);
}
