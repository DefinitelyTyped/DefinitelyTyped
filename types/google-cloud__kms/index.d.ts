// Type definitions for @google-cloud/kms 1.5
// Project: https://github.com/googleapis/nodejs-kms
// Definitions by: Ben Talbot <https://github.com/ben-tbotlabs>
//                 Caian Ertl <https://github.com/caiertl>
//                 Steven Collins <https://github.com/carboncollins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="node" />

import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export namespace v1 {
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    enum CryptoKeyVersionAlgorithm {
        // Not specified.
        CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 0,

        // Creates symmetric encryption keys.
        GOOGLE_SYMMETRIC_ENCRYPTION = 1,

        // RSASSA-PSS 2048 bit key with a SHA256 digest.
        RSA_SIGN_PSS_2048_SHA256 = 2,

        // RSASSA-PSS 3072 bit key with a SHA256 digest.
        RSA_SIGN_PSS_3072_SHA256 = 3,

        // RSASSA-PSS 4096 bit key with a SHA256 digest.
        RSA_SIGN_PSS_4096_SHA256 = 4,

        // RSASSA-PKCS1-v1_5 with a 2048 bit key and a SHA256 digest.
        RSA_SIGN_PKCS1_2048_SHA256 = 5,

        // RSASSA-PKCS1-v1_5 with a 3072 bit key and a SHA256 digest.
        RSA_SIGN_PKCS1_3072_SHA256 = 6,

        // RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA256 digest.
        RSA_SIGN_PKCS1_4096_SHA256 = 7,

        // RSAES-OAEP 2048 bit key with a SHA256 digest.
        RSA_DECRYPT_OAEP_2048_SHA256 = 8,

        // RSAES-OAEP 3072 bit key with a SHA256 digest.
        RSA_DECRYPT_OAEP_3072_SHA256 = 9,

        // RSAES-OAEP 4096 bit key with a SHA256 digest.
        RSA_DECRYPT_OAEP_4096_SHA256 = 10,

        // ECDSA on the NIST P-256 curve with a SHA256 digest.
        EC_SIGN_P256_SHA256 = 12,

        // ECDSA on the NIST P-384 curve with a SHA384 digest.
        EC_SIGN_P384_SHA384 = 13,
    }

    enum CryptoKeyVersionState {
        // Not specified.
        CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 0,

        // This version is still being generated. It may not be used, enabled,
        // disabled, or destroyed yet. Cloud KMS will automatically mark this
        // version [ENABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.ENABLED] as soon as the version is ready.
        PENDING_GENERATION = 5,

        // This version may be used for cryptographic operations.
        ENABLED = 1,

        // This version may not be used, but the key material is still available,
        // and the version can be placed back into the [ENABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.ENABLED] state.
        DISABLED = 2,

        // This version is destroyed, and the key material is no longer stored.
        // A version may not leave this state once entered.
        DESTROYED = 3,

        // This version is scheduled for destruction, and will be destroyed soon.
        // Call
        // [RestoreCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.RestoreCryptoKeyVersion]
        // to put it back into the [DISABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DISABLED] state.
        DESTROY_SCHEDULED = 4,
    }

    enum CryptoKeyVersionView {
        // Default view for each [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion]. Does not include
        // the [attestation][google.cloud.kms.v1.CryptoKeyVersion.attestation] field.
        CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED = 0,

        // Provides all fields in each [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion], including the
        // [attestation][google.cloud.kms.v1.CryptoKeyVersion.attestation].
        FULL = 1,
    }

    enum ProtectionLevel {
        // Not specified.
        PROTECTION_LEVEL_UNSPECIFIED = 0,

        // Crypto operations are performed in software.
        SOFTWARE = 1,

        // Crypto operations are performed in a Hardware Security Module.
        HSM = 2,
    }

    enum AttestationFormat {
        ATTESTATION_FORMAT_UNSPECIFIED = 0,

        // Cavium HSM attestation compressed with gzip. Note that this format is
        // defined by Cavium and subject to change at any time.
        CAVIUM_V1_COMPRESSED = 3,
    }

    interface Digest {
        sha256?: Buffer;
        sha384?: Buffer;
        sha512?: Buffer;
    }

    interface KeyOperationAttestation {
        format: AttestationFormat;
    }

    interface CryptoKeyVersion {
        name: string;
        state: CryptoKeyVersionState;
        protectionLevel: ProtectionLevel;
        algorithm: CryptoKeyVersionAlgorithm;
        attestation?: KeyOperationAttestation;
        createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
        generateTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
        destroyTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
        destroyEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    }

    interface CryptoKeyVersionTemplate {
        protectionLevel: ProtectionLevel;
        algorithm: CryptoKeyVersionAlgorithm;
    }

    enum CryptoKeyPurpose {
        // Not specified.
        CRYPTO_KEY_PURPOSE_UNSPECIFIED = 0,

        // [CryptoKeys][google.cloud.kms.v1.CryptoKey] with this purpose may be used with
        // [Encrypt][google.cloud.kms.v1.KeyManagementService.Encrypt] and
        // [Decrypt][google.cloud.kms.v1.KeyManagementService.Decrypt].
        ENCRYPT_DECRYPT = 1,

        // [CryptoKeys][google.cloud.kms.v1.CryptoKey] with this purpose may be used with
        // [AsymmetricSign][google.cloud.kms.v1.KeyManagementService.AsymmetricSign] and
        // [GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey].
        ASYMMETRIC_SIGN = 5,

        // [CryptoKeys][google.cloud.kms.v1.CryptoKey] with this purpose may be used with
        // [AsymmetricDecrypt][google.cloud.kms.v1.KeyManagementService.AsymmetricDecrypt] and
        // [GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey].
        ASYMMETRIC_DECRYPT = 6,
    }

    interface CryptoKey {
        name: string;
        primary: CryptoKeyVersion;
        purpose: CryptoKeyPurpose;
        createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
        nextRotationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
        versionTemplate: CryptoKeyVersionTemplate;
        labels: { [s: string]: string; };
    }

    interface KeyRing {
        name: string;
        createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
    }

    namespace KeyManagementServiceClient {
        interface ConfigurationObject {
            credentials?: {
                client_email?: string;
                private_key?: string
            };
            email?: string;
            keyFilename?: string;
            port?: number;
            projectId?: string;
            promise?: any;
            servicePath?: string;
        }

        interface EncryptRequest {
            name: string;
            plaintext: Buffer;
            additionalAuthenticatedData?: string;
        }
        interface EncryptResponse {
            name: string;
            ciphertext: Buffer;
        }
        type EncryptCallback = (err: Error | null, apiResponse: [EncryptResponse, any, any]) => void;

        interface DecryptRequest {
            name: string;
            ciphertext: Buffer;
            additionalAuthenticatedData?: string;
        }
        interface DecryptResponse {
            plaintext: Buffer;
        }
        type DecryptCallback = (err: Error | null, apiResponse: [DecryptResponse, any, any]) => void;

        interface CreateKeyRingRequest {
            parent: string;
            keyRingId: string;
            keyRing?: Partial<KeyRing>;
        }
        type CreateKeyRingCallback = (err: Error | null, apiResponse: [KeyRing, any, any]) => void;

        interface ListKeyRingsRequest {
            parent: string;
            page_size?: number;
            page_token?: string;
        }
        type ListKeyRingsCallback = (err: Error | null, apiResponse: [KeyRing[], any, any]) => void;

        interface CreateCryptoKeyRequest {
            parent: string;
            cryptoKeyId: string;
            cryptoKey: Partial<Omit<CryptoKey, 'purpose'>> & {
                purpose: keyof typeof CryptoKeyPurpose;
            };
            skipInitialVersionCreation?: boolean;
        }
        type CreateCryptoKeyCallback = (err: Error | null, apiResponse: [CryptoKey, any, any]) => void;

        interface ListCryptoKeysRequest {
            parent: string;
            page_size?: number;
            page_token?: string;
        }
        type ListCryptoKeysCallback = (err: Error | null, apiResponse: [CryptoKey[], any, any]) => void;

        interface AsymmetricSignRequest {
            name: string;
            digest: Digest;
        }
        interface AsymmetricSignResponse {
            signature: Buffer;
        }
        type AsymmetricSignCallback = (err: Error | null, apiResponse: [AsymmetricSignResponse, any, any]) => void;
    }

    class KeyManagementServiceClient {
        constructor(options?: KeyManagementServiceClient.ConfigurationObject);

        keyRingPath(project: string, location: string, keyRing: string): string;
        cryptoKeyPathPath(project: string, location: string, keyRing: string, cryptoKeyPath: string): string;
        locationPath(project: string, location: string): string;
        cryptoKeyPath(project: string, location: string, keyRing: string, cryptoKey: string): string;
        cryptoKeyVersionPath(project: string, location: string, keyRing: string, cryptoKey: string, cryptoKeyVersion: string): string;

        encrypt(request: KeyManagementServiceClient.EncryptRequest, gaxOpts?: GAX.CallOptions): Promise<[KeyManagementServiceClient.EncryptResponse, any, any]>;
        encrypt(request: KeyManagementServiceClient.EncryptRequest, callback: KeyManagementServiceClient.EncryptCallback): void;
        encrypt(request: KeyManagementServiceClient.EncryptRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.EncryptCallback): void;

        decrypt(request: KeyManagementServiceClient.DecryptRequest, gaxOpts?: GAX.CallOptions): Promise<[KeyManagementServiceClient.DecryptResponse, any, any]>;
        decrypt(request: KeyManagementServiceClient.DecryptRequest, callback: KeyManagementServiceClient.DecryptCallback): void;
        decrypt(request: KeyManagementServiceClient.DecryptRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.DecryptCallback): void;

        createKeyRing(request: KeyManagementServiceClient.CreateKeyRingRequest, callback: KeyManagementServiceClient.CreateKeyRingCallback): void;
        createKeyRing(request: KeyManagementServiceClient.CreateKeyRingRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.CreateKeyRingCallback): void;
        // This needs to be after the declaration that has callback but not options.
        createKeyRing(request: KeyManagementServiceClient.CreateKeyRingRequest, gaxOpts?: GAX.CallOptions): Promise<[KeyRing, any, any]>;

        listKeyRings(request: KeyManagementServiceClient.ListKeyRingsRequest, gaxOpts?: GAX.CallOptions): Promise<[KeyRing[], any, any]>;
        listKeyRings(request: KeyManagementServiceClient.ListKeyRingsRequest, callback: KeyManagementServiceClient.ListKeyRingsCallback): void;
        listKeyRings(request: KeyManagementServiceClient.ListKeyRingsRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.ListKeyRingsCallback): void;

        createCryptoKey(request: KeyManagementServiceClient.CreateCryptoKeyRequest, callback: KeyManagementServiceClient.CreateCryptoKeyCallback): void;
        createCryptoKey(request: KeyManagementServiceClient.CreateCryptoKeyRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.CreateCryptoKeyCallback): void;
        // This needs to be after the declaration that has callback but not options.
        createCryptoKey(request: KeyManagementServiceClient.CreateCryptoKeyRequest, gaxOpts?: GAX.CallOptions): Promise<[CryptoKey, any, any]>;

        listCryptoKeys(request: KeyManagementServiceClient.ListCryptoKeysRequest, gaxOpts?: GAX.CallOptions): Promise<[CryptoKey[], any, any]>;
        listCryptoKeys(request: KeyManagementServiceClient.ListCryptoKeysRequest, callback: KeyManagementServiceClient.ListCryptoKeysCallback): void;
        listCryptoKeys(request: KeyManagementServiceClient.ListCryptoKeysRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.ListCryptoKeysCallback): void;

        asymmetricSign(request: KeyManagementServiceClient.AsymmetricSignRequest, gaxOpts?: GAX.CallOptions): Promise<[KeyManagementServiceClient.AsymmetricSignResponse, any, any]>;
        asymmetricSign(request: KeyManagementServiceClient.AsymmetricSignRequest, callback: KeyManagementServiceClient.AsymmetricSignCallback): void;
        asymmetricSign(request: KeyManagementServiceClient.AsymmetricSignRequest, gaxOpts: GAX.CallOptions, callback: KeyManagementServiceClient.AsymmetricSignCallback): void;
    }
}

export class KeyManagementServiceClient extends v1.KeyManagementServiceClient {
    constructor(options?: v1.KeyManagementServiceClient.ConfigurationObject);
}

export namespace GAX {
    /** https://googleapis.github.io/gax-nodejs/global.html#CallOptions */
    interface CallOptions {
        timeout?: number;
        retry?: RetryOptions;
        autoPaginate?: boolean;
        pageToken?: object;
        isBundling?: boolean;
        longrunning?: BackoffSettings;
        promise?: PromiseConstructor; // FIXME Unsure if this is the correct type; remove this comment if it is
    }

    /** https://googleapis.github.io/gax-nodejs/global.html#RetryOptions */
    interface RetryOptions {
        retryCodes: string[];
        backoffSettings: BackoffSettings;
    }

    /** https://googleapis.github.io/gax-nodejs/global.html#BackoffSettings */
    interface BackoffSettings {
        initialRetryDelayMillis: number;
        retryDelayMultiplier: number;
        maxRetryDelayMillis: number;
        initialRpcTimeoutMillis: number;
        maxRpcTimeoutMillis: number;
        totalTimeoutMillis: number;
    }
}
