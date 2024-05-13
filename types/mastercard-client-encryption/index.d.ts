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
