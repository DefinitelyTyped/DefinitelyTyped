export interface DecryptOptions {
    body: unknown;
    request: {
        url: string
    };
}

export type PublicKeyFingerprintType =
    | 'certificate'
    | 'publicKey'

export type DataEncodingType =
    | 'base64'
    | 'hex'

export interface RootMapping {
    element: string,
    obj: string
}

export type EncryptionParameter =
    | RootMapping[]
    | []

export interface RootMappingNode {
    path: string,
    toEncrypt: EncryptionParameter,
    toDecrypt: EncryptionParameter,
}

export interface JweEncryptionConfiguration {
    mode: string,
    encryptionCertificate: unknown,
    encryptedValueFieldName: unknown,
    paths: RootMappingNode[],
    publicKeyFingerprintType?: PublicKeyFingerprintType
    publicKeyFingerprint?: PublicKeyFingerprintType extends 'certificate'
        ? DataEncodingType
        : unknown,
    privateKey?: unknown,
    keyStore?: unknown,
    keyStoreAlias?: unknown,
    keyStorePassword?: unknown,
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
        body: T
    ) => {
        headers: Record<string, string | undefined>,
        body: T
    }

    /**
     * Decrypt part of the HTTP response using the given config
     *
     * @param response HTTP response to decrypt
     * @returns {*}
     */
    decrypt: <T extends DecryptOptions>(response: T) => T['body']
}

export namespace EncryptionUtils {
    /**
     * Utils module
     * @version 1.0.0
     */
    function isSet(value: unknown): boolean

    /**
     * Converts a 'binary' encoded string of bytes to (hex or base64) encoded string.
     *
     * @param bytes Bytes to convert
     * @param dataEncoding encoding to use (hex or base64)
     * @returns {string} encoded string
     */
    function bytesToString(
        bytes: string,
        dataEncoding: DataEncodingType
    ): string

    /**
     * Converts a (hex or base64) string into a 'binary' encoded string of bytes.
     *
     * @param value string to convert
     * @param dataEncoding encoding to use (hex or base64)
     * @returns binary encoded string of bytes
     */
    function stringToBytes(
        value: string,
        dataEncoding: DataEncodingType
    ): string

    function toByteArray(
        value: string,
        fromFormat: import('node:buffer').TranscodeEncoding
    ): Buffer

    /**
     * Convert a json object or json string to string
     *
     * @param {Object|string} data Json string or Json obj
     * @returns {string}
     */
    function jsonToString(
        data: unknown
    ): string

    /**
     * Convert Json string to Json object if it is a valid Json
     * Return back input string if it is not a Json
     *
     * @param {string} Json string or string
     * @returns {Object|string}
     */
    function stringToJson(
        data: string
    ): unknown

    function mutateObjectProperty(
        path: string,
        value: unknown,
        obj: unknown,
        srcPath: NonNullable<string>,
        properties: string[]
    ): unknown

    interface PrivateKeyConfig {
        privateKey: JweEncryptionConfiguration['privateKey'],
        keyStore?: never,
        keyStoreAlias?: never,
        keyStorePassword?: never
    }

    interface KeystoreConfig {
        privateKey?: never,
        keyStore: JweEncryptionConfiguration['keyStore'],
        keyStoreAlias: JweEncryptionConfiguration['keyStoreAlias'],
        keyStorePassword: JweEncryptionConfiguration['keyStorePassword']
    }

    type getPrivateKeyConfig = PrivateKeyConfig | KeystoreConfig

    function getPrivateKey(
        config: getPrivateKeyConfig
    ):
    | import('node-forge').pki.rsa.PrivateKey
    | import('node-forge').pki.PrivateKey
    | null
    | undefined

    function readPublicCertificate (
        publicCertificatePath: string
    ):
    | import('node-forge').pki.Certificate
    | undefined

    function computePublicFingerprint <
        T extends PublicKeyFingerprintType
    >(
        config: {
            publicKeyFingerprintType: T
        },
        encryptionCertificate: T extends 'certificate'
            ? import('node-forge').pki.Certificate
            : Pick<import('node-forge').pki.Certificate, 'publicKey'>,
        encoding: DataEncodingType
    ): string

    function nodeVersionSupportsJWE (): boolean

    function checkConfigFieldsArePopulated (
        config: {
            paths: unknown
        },
        propertiesBasic: string[],
        propertiesField: string[],
        propertiesHeader: string[],
    ): boolean | undefined

    function validateRootMapping(
        config: Pick<JweEncryptionConfiguration, 'paths'>
    ): void

    function hasConfig(
        config: unknown,
        endpoint: string
    ): string[] | null

    function elemFromPath(
        path: string,
        obj: unknown
    ):
    | { node: unknown, parent: unknown }
    | null

    function isJsonRoot(
        elem: unknown
    ): boolean

    function computeBody(
        configParam: EncryptionParameter,
        body: unknown,
        bodyMap: unknown,
    ): boolean

    function addEncryptedDataToBody(
        encryptedData: unknown,
        path: RootMapping,
        encryptedValueFieldName: string,
        body: unknown
    ): unknown

    function readPublicCertificateContent(
        config: string
    ): import('node-forge').pki.Certificate

    function getPrivateKeyFromContent<T extends { privateKey: string }>(
        config: T
    ): T extends { privateKey: string }
        ? import('node-forge').pki.PrivateKey
        : null
}

export type FieldLevelEncryptionConfiguration = JweEncryptionConfiguration & {
    ivFieldName: string,
    ivHeaderName?: string,
    encryptedKeyFieldName: string,
    encryptedKeyHeaderName?: string,
    publicKeyFingerprintFieldName: string,
    publicKeyFingerprintHeaderName?: string,
    oaepHashingAlgorithmFieldName: string,
}

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
        body: T
    ): {
        header: Record<string, string | undefined>,
        body: T
    }

    /**
     * Decrypt part of the HTTP response using the given config
     *
     * @param response HTTP response to decrypt
     * @returns {*}
     */
    decrypt: <T extends DecryptOptions>(response: T) => T['body']
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
        param: unknown
    ): string

    /**
     *
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
        apiBasePath: NonNullable<string>
    ): string

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
        contentType: string
    ): boolean;

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param contentTypes
     * @returns The chosen content type, preferring JSON.
     */
    jsonPreferredMime(
        contentTypes: Record<string, unknown>
    ): string

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns <code>true</code> if <code>param</code> represents a file.
     */
    isFileParam(
        param: import('fs').ReadStream | Buffer | Blob | File
    ): boolean

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
        params: Record<string, unknown>
    ): Record<string, unknown>
}
