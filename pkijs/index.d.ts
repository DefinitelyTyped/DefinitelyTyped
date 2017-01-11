// Type definitions for PKI.js API 2.0.48
// Project: https://github.com/PeculiarVentures/pki.js
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="pvutils" />

import { BitString, Enumerated, GeneralizedTime, Integer, ObjectIdentifier, OctetString, Sequence, Utf8String } from "asn1js";

type NativeAlgorithmIdentifier = AlgorithmIdentifier;

declare namespace PkiJs {

    export class Attribute {

        type: string;
        value: any[];

        constructor(params?: any);

        static compareWithDefault(memberName: string, memberValue: any): boolean;
        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class AttributeTypeAndValue {

        /**
         * 
         * 
         * @type {ObjectIdentifier}
         * @memberOf AttributeTypeAndValue
         */
        type: ObjectIdentifier;
        /**
         * 
         * 
         * @type {*}
         * @memberOf AttributeTypeAndValue
         */
        value: any;

        /**
         * Compare two AttributeTypeAndValue values, or AttributeTypeAndValue with ArrayBuffer value
         * 
         * @param {(AttributeTypeAndValue|ArrayBuffer)} compareTo The value compare to current
         * @returns {boolean}
         * 
         * @memberOf AttributeTypeAndValue
         */
        isEqual(compareTo: AttributeTypeAndValue | ArrayBuffer): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    /**
     * Class from RFC5280
     */
    export class AltName {

        altNames: GeneralName[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    /**
     * @class
     * @description GeneralName
     */
    export class GeneralName {

        /**
         * value type - from a tagged value (0 for "otherName", 1 for "rfc822Name" etc.)
         * 
         * @type {number}
         * @memberOf GeneralName
         */
        type: number;

        /**
         * asn1js object having GENERAL_NAME value (type depends on "type" value)
         * 
         * @type {*}
         * @memberOf GeneralName
         */
        value: any;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class GeneralNames {

        names: GeneralName[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class AlgorithmIdentifier {
        algorithmId: string;
        algorithmParams: any;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        /**
         * Check that two "AlgorithmIdentifiers" are equal
         * @param {AlgorithmIdentifier} algorithmIdentifier
         * @returns {boolean}
         */
        isEqual(algorithmIdentifier: AlgorithmIdentifier): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class Accuracy {
        seconds: number;
        millis: number;
        micros: number;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

    /**
     * Class from RFC5280
     * 
     * @export
     * @class AccessDescription
     */
    export class AccessDescription {
        accessMethod: string;
        accessLocation: GeneralName;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class AuthorityKeyIdentifier {
        keyIdentifier: OctetString;
        authorityCertIssuer: GeneralName[];
        authorityCertSerialNumber: Integer;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class BasicConstraints {
        cA: boolean;
        pathLenConstraint: number | Integer;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface GetCertificateStatusResult {
        isForCertificate: boolean;
        /**
         * 0 = good, 1 = revoked, 2 = unknown
         * 
         * @type {number}
         * @memberOf GetCertificateStatusResult
         */
        status: number;
    }

    export class BasicOCSPResponse {
        tbsResponseData: ResponseData;
        signatureAlgorithm: AlgorithmIdentifier;
        signature: BitString;
        certs?: Certificate[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Get OCSP response status for specific certificate
         * @param {Certificate} certificate Certificate to be checked
         * @param {Certificate} issuerCertificate Certificate of issuer for certificate to be checked
         * @returns {PromiseLike<GetCertificateStatusResult>}
         */
        getCertificateStatus(certificate: Certificate, issuerCertificate: Certificate): PromiseLike<GetCertificateStatusResult>;
        /**
         * Make signature for current OCSP Basic Response
         * 
         * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         * @returns {PromiseLike<ArrayBuffer>}
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing OCSP Basic Response
         * 
         * @param {{ trustedCerts?: Certificate[] }} parameters Additional parameters
         * @returns {PromiseLike<boolean>}
         */
        verify(parameters?: { trustedCerts?: Certificate[] }): PromiseLike<boolean>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface CreateFroCertificateParams {
        hashAlgorithm: string;
        issuerCertificate: Certificate;
    }

    export class CertID {
        hashAlgorithm: AlgorithmIdentifier;
        issuerNameHash: OctetString;
        issuerKeyHash: OctetString;
        serialNumber: Integer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Check that two "CertIDs" are equal
         * @param {CertID} certificateID Identifier of the certificate to be checked
         * @returns {boolean}
         */
        isEqual(certificateID: CertID): boolean;
        /**
         * Making OCSP certificate identifier for specific certificate
         * @param {Certificate} certificate Certificate making OCSP Request for
         * @param {CreateFroCertificateParams} parameters Additional parameters
         * @returns {Promise}
         */
        createForCertificate(certificate: Certificate, parameters: CreateFroCertificateParams): PromiseLike<void>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface PublicKeyAlgorithm {
        algorithm: {
            algorithm: Algorithm;
            usages: string[];
        };
    }

    export class Certificate {
        tbs: ArrayBuffer;
        version: number;
        serialNumber: Integer;
        signature: AlgorithmIdentifier;
        issuer: RelativeDistinguishedNames;
        notBefore: Time;
        notAfter: Time;
        subject: RelativeDistinguishedNames;
        subjectPublicKeyInfo: PublicKeyInfo;
        issuerUniqueID?: ArrayBuffer;
        subjectUniqueID?: ArrayBuffer;
        extensions?: Extension[];
        signatureAlgorithm: AlgorithmIdentifier;
        signatureValue: BitString;

        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;

        /**
         * Create ASN.1 schema for existing values of TBS part for the certificate
         */
        encodeTBS(): Sequence;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;

        /**
         * Importing public key for current certificate
         * 
         * @param {PublicKeyAlgorithm} [parameters]
         * @returns {PromiseLike<CryptoKey>}
         * 
         * @memberOf Certificate
         */
        getPublicKey(parameters?: PublicKeyAlgorithm): PromiseLike<CryptoKey>;

        /**
         * Get SHA-1 hash value for subject public key
         * 
         * @returns {PromiseLike<ArrayBuffer>}
         * 
         * @memberOf Certificate
         */
        getKeyHash(): PromiseLike<ArrayBuffer>;

        /**
	     * Make a signature for current value from TBS section
         * 
         * @param {CryptoKey} privateKey    Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm]  Hashing algorithm
         * @returns {PromiseLike<void>}
         * 
         * @memberOf Certificate
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<void>;

        /**
         * 
         * 
         * @param {Certificate} [issuerCertificate]
         * @returns {PromiseLike<boolean>}
         * 
         * @memberOf Certificate
         */
        verify(issuerCertificate?: Certificate): PromiseLike<boolean>;
    }

    export class CertificateChainValidationEngine {
        trustedCerts: Certificate[];
        certs: Certificate[];
        crls: CertificateRevocationList[];
        ocsp: OCSPResponse;
        checkDate: Date;

        /**
         * Constructor for CertificateChainValidationEngine class
         * @param {*} [parameters={}]
         * @property {any} [schema] asn1js parsed value
         */
        constructor(parameters?: any);

        sort(): any;
        /**
         * Major verification function for certificate chain.
         * @param {{initialPolicySet, initialExplicitPolicy, initialPolicyMappingInhibit, initialInhibitPolicy, initialPermittedSubtreesSet, initialExcludedSubtreesSet, initialRequiredNameForms}} [parameters]
         * @returns {PromiseLike<any>}
         */
        verify(parameters?: any): PromiseLike<any>
    }

    export class CertificatePolicies {
        certificatePolicies: PolicyInformation[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class CertificateRevocationList {
        tbs: ArrayBuffer;
        version?: number;
        signature: AlgorithmIdentifier;
        issuer: RelativeDistinguishedNames;
        thisUpdate: Time;
        nextUpdate?: Time;
        revokedCertificates?: RevokedCertificate[];
        crlExtension?: Extension[];
        signatureAlgorithm: AlgorithmIdentifier;
        signatureValue: BitString;

        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;

        encodeTBS(): Sequence;
        isCertificateRevoked(certificate: Certificate): boolean;
        /**
         * Make a signature for existing CRL data
         * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing signature
         * @param {{[issuerCertificate]: Certificate, [publicKeyInfo]: PublicKeyInfo}} parameters
         * @returns {*}
         */
        verify(parameters: {
            issuerCertificate?: Certificate;
            publicKeyInfo?: PublicKeyInfo;
        }): PromiseLike<boolean>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class CertificateSet {
        certificates: Certificate[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class CertificationRequest {
        tbs: ArrayBuffer;
        version: number;
        subject: RelativeDistinguishedNames;
        subjectPublicKeyInfo: PublicKeyInfo;
        attributes?: Attribute[];
        signatureAlgorithm: AlgorithmIdentifier;
        signatureValue: BitString;

        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;

        /**
         * Aux function making ASN1js Sequence from current TBS
         * 
         * @returns {Sequence}
         */
        encodeTBS(): Sequence;
        /**
         * Makes signature for currect certification request
         * 
         * @param {CryptoKey} privateKey WebCrypto private key
         * @param {string} [hashAlgorithm] String representing current hashing algorithm
         * @returns {PromiseLike<ArrayBuffer>}
         * 
         * @memberOf CertificationRequest
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing certification request signature
         * 
         * @returns {PromiseLike<boolean>}
         * 
         * @memberOf CertificationRequest
         */
        verify(): PromiseLike<boolean>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class CRLDistributionPoints {

        distributionPoints: DistributionPoint[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ContentInfo {
        contentType: string;
        content: any;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class CryptoEngine implements SubtleCrypto {

        crypto: SubtleCrypto;
        name: string;
        /**
         * Constructor for CryptoEngine class
         * @param {*} [parameters={}]
         */
        constructor(parameters?: any);


        /**
         * Convert WebCrypto keys between different export formats
         * @param {string} inputFormat
         * @param {string} outputFormat
         * @param {ArrayBuffer|JsonWebKey} keyData
         * @param {Algorithm} algorithm
         * @param {boolean} extractable
         * @param {Array} keyUsages
         * @returns {Promise}
         */
        convert(inputFormat: string, outputFormat: string, keyData: BufferSource | JsonWebKey, algorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<BufferSource | JsonWebKey>;

        generateKey(algorithm: string, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair | CryptoKey>;
        generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair>;
        generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: "jwk", keyData: JsonWebKey, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: "raw" | "pkcs8" | "spki", keyData: BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: string, keyData: JsonWebKey | BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
        exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>;
        exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        sign(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        unwrapKey(format: string, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: NativeAlgorithmIdentifier, unwrappedKeyAlgorithm: NativeAlgorithmIdentifier, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        verify(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: BufferSource, data: BufferSource): PromiseLike<boolean>;
        wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: NativeAlgorithmIdentifier): PromiseLike<ArrayBuffer>;
        decrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        deriveBits(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
        deriveKey(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        digest(algorithm: NativeAlgorithmIdentifier, data: BufferSource): PromiseLike<ArrayBuffer>;
        encrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
    }

    export class DigestInfo {
        digestAlgorithm: AlgorithmIdentifier;
        digest: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class DistributionPoint {
        distributionPoint?: GeneralName[];
        reasons?: BitString;
        cRLIssuer?: GeneralName[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ECCCMSSharedInfo {
        keyInfo: AlgorithmIdentifier;
        entityUInfo?: OctetString;
        suppPubInfo: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ECPrivateKey {
        version: number;
        privateKey: OctetString;
        namedCurve?: string;
        publicKey?: ECPublicKey;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ECPublicKey {
        x: ArrayBuffer;
        y: ArrayBuffer;
        namedCurve: string;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class EncapsulatedContentInfo {
        eContentType: string;
        eContent: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class EncryptedContentInfo {
        eContentType: string;
        contentEncryptionAlgorithm: AlgorithmIdentifier;
        encryptedContent: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class EncryptedData {
        version: number;
        encryptedContentInfo: EncryptedContentInfo;
        unprotectedAttrs: Attribute[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Create a new CMS Encrypted Data content
         * @param {*} parameters Parameters neccessary for encryption
         * @returns {Promise}
         */
        encrypt(parameters: {
            password: string;
            contentEncryptionAlgorithm: Algorithm;
            hmacHashAlgorithm: string;
            iterationCount: number;
            contentToEncrypt: BufferSource;
        }): PromiseLike<ArrayBuffer>;
        /**
         * Create a new CMS Encrypted Data content
         * @param {*} parameters Parameters neccessary for encryption
         */
        decrypt(parameters: {
            password: string;
        }): PromiseLike<ArrayBuffer>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class EnvelopedData {
        version: number;
        originatorInfo?: OriginatorInfo;
        recipientInfos: RecipientInfo[];
        encryptedContentInfo: EncryptedContentInfo;
        unprotectedAttrs?: Attribute[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Helpers function for filling "RecipientInfo" based on recipient's certificate.
         * Problem with WebCrypto is that for RSA certificates we have only one option - "key transport" and
         * for ECC certificates we also have one option - "key agreement". As soon as Google will implement
         * DH algorithm it would be possible to use "key agreement" also for RSA certificates.
         * @param {Certificate} [certificate] Recipient's certificate
         * @param {*} [parameters] Additional parameters neccessary for "fine tunning" of encryption process
         * @param {number} [variant] Variant = 1 is for "key transport", variant = 2 is for "key agreement". In fact the "variant" is unneccessary now because Google has no DH algorithm implementation. Thus key encryption scheme would be choosen by certificate type only: "key transport" for RSA and "key agreement" for ECC certificates.
         */
        addRecipientByCertificate(certificate: Certificate, parameters: {
            oaepHashAlgorithm?: string;
            kdfAlgorithm?: string;
            kekEncryptionLength?: number;
        }, variant: number): boolean;
        /**
         * Add recipient based on pre-defined data like password or KEK
         * @param {ArrayBuffer} preDefinedData ArrayBuffer with pre-defined data
         * @param {*} parameters Additional parameters neccessary for "fine tunning" of encryption process
         * @param {number} variant Variant = 1 for pre-defined "key encryption key" (KEK). Variant = 2 for password-based encryption.
         */
        addRecipientByPreDefinedData(preDefinedData: ArrayBuffer, parameters: {
            keyIdentifier?: ArrayBuffer;
            hmacHashAlgorithm?: string;
            iterationCount?: number;
            keyEncryptionAlgorithm?: Algorithm;
            keyEncryptionAlgorithmParams?: any;
        }, variant: number): boolean;
        /**
         * Create a new CMS Enveloped Data content with encrypted data
         * @param {Algorithm} contentEncryptionAlgorithm WebCrypto algorithm. For the moment here could be only "AES-CBC" or "AES-GCM" algorithms.
         * @param {ArrayBuffer} contentToEncrypt Content to encrypt
         * @returns {Promise}
         */
        encrypt(contentEncryptionAlgorithm: Algorithm, contentToEncrypt: ArrayBuffer): PromiseLike<ArrayBuffer>;
        /**
         * Decrypt existing CMS Enveloped Data content
         * @param {number} recipientIndex Index of recipient
         * @param {*} parameters Additional parameters
         * @returns {Promise}
         */
        decrypt(recipientIndex: number, parameters: {
            recipientCertificate: Certificate;
            recipientPrivateKey: ArrayBuffer;
        }): PromiseLike<ArrayBuffer>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ExtKeyUsage {
        keyPurposes: string[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class Extension {
        extnID: string;
        critical: boolean;
        extnValue: OctetString;
        parsedValue?: any;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class Extensions {
        extensions: Extension[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class GeneralSubtree {
        base: GeneralName;
        minimum: number | Integer;
        maximum?: number | Integer;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    /**
     * Simple "generator's driver" inspired by "https://github.com/tj/co".
     * @param {Generator|GeneratorFunction} generatorInstance
     * @returns {Promise}
     */
    export function generatorsDriver(generatorInstance: any): PromiseLike<any>;

    export class InfoAccess {
        accessDescriptions: AccessDescription[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class IssuerAndSerialNumber {
        issuer: RelativeDistinguishedNames;
        serialNumber: Integer;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class IssuingDistributionPoint {
        distributionPoint?: GeneralName[] | RelativeDistinguishedNames;
        onlyContainsUserCerts: boolean;
        onlySomeReasons: number;
        indirectCRL: boolean;
        onlyContainsAttributeCerts: boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class KEKIdentifier {
        keyIdentifier: OctetString;
        date?: GeneralizedTime;
        other?: OtherKeyAttribute;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class KEKRecipientInfo {
        version: number;
        kekid: KEKIdentifier;
        keyEncryptionAlgorithm: AlgorithmIdentifier;
        encryptedKey: OctetString;
        preDefinedKEK: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class KeyAgreeRecipientIdentifier {
        variant: number;
        value: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class KeyAgreeRecipientInfo {
        version: number;
        originator: OriginatorIdentifierOrKey;
        ukm?: OctetString;
        keyEncryptionAlgorithm: AlgorithmIdentifier;
        recipientEncryptedKeys: RecipientEncryptedKeys;
        recipientCertificate: Certificate;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class KeyTransRecipientInfo {
        version: number;
        rid: RecipientIdentifier;
        keyEncryptionAlgorithm: AlgorithmIdentifier;
        encryptedKey: OctetString;
        /**
         * For some reasons we need to store recipient's certificate here
         * 
         * @type {Certificate}
         * @memberOf KeyTransRecipientInfo
         */
        recipientCertificate: Certificate;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class MacData {
        mac: DigestInfo;
        macSalt: OctetString;
        iterations?: number;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class MessageImprint {
        hashAlgorithm: AlgorithmIdentifier;
        hashedMessage: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class NameConstraints {
        permittedSubtrees?: GeneralSubtree[];
        excludedSubtrees?: GeneralSubtree[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OCSPRequest {
        tbsRequest: TBSRequest;
        optionalSignature?: Signature;
        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class OCSPResponse {
        responseStatus: Enumerated;
        responseBytes?: ResponseBytes;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Get OCSP response status for specific certificate
         * @param {Certificate} certificate
         * @param {Certificate} issuerCertificate
         * @returns {*}
         */
        getCertificateStatus(certificate: Certificate, issuerCertificate: Certificate): PromiseLike<GetCertificateStatusResult>;
        /**
         * Making OCSP Request for specific certificate
         * @param {Certificate} certificate Certificate making OCSP Request for
         * @param {CreateFroCertificateParams} parameters Additional parameters
         * @returns {Promise}
         */
        createForCertificate(certificate: Certificate, parameters: CreateFroCertificateParams): PromiseLike<void>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OriginatorIdentifierOrKey {
        variant: number;
        value?: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OriginatorInfo {
        certs: CertificateSet;
        crls: RevocationInfoChoices;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OriginatorPublicKey {
        algorithm: AlgorithmIdentifier;
        publicKey: BitString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OtherCertificateFormat {
        otherCertFormat: string;
        otherCert: any;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OtherKeyAttribute {
        keyAttrId: string;
        keyAttr: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }


    interface JsonOtherPrimeInfo {
        r: string;
        d: string;
        t: string;
    }


    export class OtherPrimeInfo {
        prime: Integer;
        exponent: Integer;
        coefficient: Integer;
        /**
         * Convert JSON value into current object
         * @param {JsonOtherPrimeInfo} json
         */
        fromJSON(json: JsonOtherPrimeInfo): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OtherRecipientInfo {
        oriType: string;
        oriValue: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class OtherRevocationInfoFormat {
        otherRevInfoFormat: string;
        otherRevInfo: any;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PasswordRecipientinfo {
        version: number;
        keyDerivationAlgorithm?: AlgorithmIdentifier;
        keyEncryptionAlgorithm: AlgorithmIdentifier;
        encryptedKey: OctetString;
        password: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PBES2Params {
        keyDerivationFunc: AlgorithmIdentifier;
        encryptionScheme: AlgorithmIdentifier;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PBKDF2Params {
        salt: any;
        iterationCount: number;
        keyLength: number;
        prf: AlgorithmIdentifier;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PKIStatusInfo {
        status: number;
        statusStrings?: Utf8String;
        failInfo?: BitString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PolicyConstraints {
        requireExplicitPolicy?: number;
        inhibitPolicyMapping?: number;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PolicyInformation {
        policyIdentifier: string;
        /**
         * Value of the TIME class 
         */
        policyQualifiers: PolicyQualifierInfo[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PolicyMapping {
        issuerDomainPolicy: string;
        subjectDomainPolicy: string;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;

    }

    export class PolicyMappings {
        mappings: PolicyMapping[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PolicyQualifierInfo {
        policyQualifierId: string;
        qualifier: any;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PrivateKeyInfo {
        version: number;
        privateKeyAlgorithm: AlgorithmIdentifier;
        privateKey: OctetString;
        attributes?: Attribute[];
        parsedKey?: ECPrivateKey | RSAPrivateKey;
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PrivateKeyUsagePeriod {
        notBefore?: Date;
        notAfter?: Date;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class PublicKeyInfo {
        algorithm: AlgorithmIdentifier;
        subjectPublicKey: BitString;
        parsedKey?: ECPublicKey | RSAPublicKey;
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;
        importKey(publicKey: CryptoKey): PromiseLike<void>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RecipientEncryptedKey {
        rid: KeyAgreeRecipientIdentifier;
        encryptedKey: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RecipientEncryptedKeys {
        encryptedKeys: RecipientEncryptedKey[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RecipientIdentifier {
        variant: number;
        value: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RecipientInfo {
        variant: number;
        value: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RecipientKeyIdentifier {
        subjectKeyIdentifier: OctetString;
        date?: GeneralizedTime;
        other?: OtherKeyAttribute;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RelativeDistinguishedNames {
        typesAndValues: AttributeTypeAndValue[];
        valueBeforeDecode: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class Request {
        reqCert: CertID;
        singleRequestExtensions?: Extension[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ResponseBytes {
        responseType: string;
        response: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class ResponseData {
        tds: ArrayBuffer;
        responderID: any;
        producedAt: Date;
        responses: SingleResponse[];
        responseExtensions: Extension[];
        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class RevocationInfoChoices {
        crls: CertificateRevocationList[];
        otherRevocationInfos: OtherRevocationInfoFormat[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RevokedCertificate {
        userCertificate: Integer;
        revocationDate: Time;
        crlEntryExtensions: Extensions;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RSAESOAEPParams {
        hashAlgorithm: AlgorithmIdentifier;
        maskGenAlgorithm: AlgorithmIdentifier;
        pSourceAlgorithm: AlgorithmIdentifier;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RSAPrivateKey {
        version: number;
        modulus: Integer;
        publicExponent: Integer;
        privateExponent: Integer;
        prime1: Integer;
        prime2: Integer;
        exponent1: Integer;
        exponent2: Integer;
        coefficient: Integer;
        otherPrimeInfos?: OtherPrimeInfo[];
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RSAPublicKey {
        modulus: Integer;
        publicExponent: Integer;
        /**
         * Convert JSON value into current object
         * @param {JsonWebKey} json
         */
        fromJSON(json: JsonWebKey): void;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class RSASSAPSSParams {
        /**
         * Algorithms of hashing (DEFAULT sha1)
         * 
         * @type {AlgorithmIdentifier}
         * @memberOf RSASSAPSSParams
         */
        hashAlgorithm: AlgorithmIdentifier;
        /**
         * Algorithm of "mask generaion function (MGF)" (DEFAULT mgf1SHA1)
         * 
         * @type {AlgorithmIdentifier}
         * @memberOf RSASSAPSSParams
         */
        maskGenAlgorithm: AlgorithmIdentifier;
        /**
         * Salt length (DEFAULT 20)
         * 
         * @type {number}
         * @memberOf RSASSAPSSParams
         */
        saltLength: number;
        /**
         * (DEFAULT 1)
         * 
         * @type {number}
         * @memberOf RSASSAPSSParams
         */
        trailerField: number;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class Signature {
        signatureAlgorithm: AlgorithmIdentifier;
        signature: BitString;
        certs?: Certificate[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class SignedAndUnsignedAttributes {
        type: string;
        attributes: Attribute[];
        encodedValue: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface VerifyParams {
        signer?: number;
        data?: ArrayBuffer;
        trustedCerts?: Certificate[];
        checkDate?: Date;
        checkChain?: boolean;
        includeSignerCertificate?: boolean;
        extendedMode?: boolean;
    }

    interface VerifyResult {
        date: Date;
        code: number;
        message: string;
        signatureVerified?: boolean;
        signerCertificate?: Certificate;
        signerCertificateVerified?: boolean;
    }

    export class SignedData {
        version: number;
        digestAlgorithms: AlgorithmIdentifier[];
        encapContentInfo: EncapsulatedContentInfo;
        certificates?: Certificate[] | OtherCertificateFormat[];
        crls?: CertificateRevocationList[] | OtherRevocationInfoFormat[];
        signerInfos: SignerInfo[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;

        verify(options: VerifyParams): PromiseLike<VerifyResult>;
        /**
         * Signing current SignedData
         * 
         * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {number} signerIndex Index number (starting from 0) of signer index to make signature for
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         * @param {BufferSource} [data] Detached data
         * @returns {ArrayBuffer}
         * 
         * @memberOf SignedData
         */
        sign(privateKey: CryptoKey, signerIndex: number, hashAlgorithm?: string, data?: BufferSource): ArrayBuffer;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class SignerInfo {
        version: number;
        sid: any;
        digestAlgorithm: AlgorithmIdentifier;
        signedAttrs?: SignedAndUnsignedAttributes;
        unsignedAttrs?: SignedAndUnsignedAttributes;
        signatureAlgorithm: AlgorithmIdentifier;
        signature: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class SingleResponse {
        certID: CertID;
        certStatus: any;
        thisUpdate: Date;
        nextUpdate?: Date;
        singleExtensions: Extension[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class SubjectDirectoryAttributes {
        attributes: Attribute[];

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class TBSRequest {
        tbs: ArrayBuffer;
        version?: number;
        requestorName?: GeneralName;
        requestList: Request[];
        requestExtensions?: Extension;
        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @param {boolean} [encodeFlag]
         * @returns {*}
         */
        toSchema(encodeFlag?: boolean): any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toJSON(): any;
    }

    export class Time {
        type: number;
        value: Date;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class TimeStampReq {
        version: number;
        messageImprint: MessageImprint;
        reqPolicy?: string;
        nonce?: Integer;
        certReq?: boolean;
        extensions?: Extension[];

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    export class TimeStampResp {
        status: PKIStatusInfo;
        timeStampToken?: ContentInfo;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        /**
         * Sign current TSP Response
         * @param {CryptoKey} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         * @returns {Promise}
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify current TSP Response
         * @param {VerifyParams} verificationParameters Input parameters for verification
         * @returns {Promise}
         */
        verify(verificationParameters: TimeStampRespVerifyParams): PromiseLike<VerifyResult>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface TimeStampRespVerifyParams {
        data: BufferSource;
        notBefore?: Date;
        notAfter?: Date;
    }

    export class TSTInfo {
        version: number;
        policy: string;
        messageImprint: MessageImprint;
        serialNumber: Integer;
        genTime: Date;
        accuracy?: Accuracy;
        ordering?: boolean;
        nonce?: Integer;
        tsa?: GeneralName;
        extensions?: Extension[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
        verify(params: VerifyParams): PromiseLike<boolean>;

        constructor(params?: any);

        static defaultValues(memberName: string): any;
        static schema(parameters?: any): any;
        fromSchema(schema: any): void;
        toSchema(): any;
        toJSON(): any;
    }

    interface Engine {
        name: string;
        crypto: Crypto;
        subtle: SubtleCrypto;
    }

    function setEngine(name: string, crypto: Crypto, subtle: SubtleCrypto): void;
    function getEngine(): Engine;
    /**
     * Get crypto subtle from current "crypto engine" or "undefined"
     * 
     * @returns {(SubtleCrypto | undefined)}
     */
    function getCrypto(): SubtleCrypto | undefined;
    /**
     * Initialize input Uint8Array by random values (with help from current "crypto engine")
     * 
     * @param {ArrayBufferView} view
     * @returns {ArrayBufferView}
     */
    function getRandomValues(view: ArrayBufferView): ArrayBufferView;
    /**
     * Get OID for each specific WebCrypto algorithm
     * 
     * @param {Algorithm} algorithm
     * @returns {string}
     */
    function getOIDByAlgorithm(algorithm: Algorithm): string;
    /**
     * Get default algorithm parameters for each kind of operation
     * 
     * @param {string} algorithmName Algorithm name to get common parameters for
     * @param {string} operation Kind of operation: "sign", "encrypt", "generatekey", "importkey", "exportkey", "verify"
     * @returns {{ algorithm: Algorithm; usages: string[]; }}
     */
    function getAlgorithmParameters(algorithmName: string, operation: string): { algorithm: Algorithm; usages: string[]; };
    /**
     * Create CMS ECDSA signature from WebCrypto ECDSA signature
     * 
     * @param {ArrayBuffer} signatureBuffer WebCrypto result of "sign" function
     * @returns {ArrayBuffer}
     */
    function createCMSECDSASignature(signatureBuffer: ArrayBuffer): ArrayBuffer;
    /**
     * String preparation function. In a future here will be realization of algorithm from RFC4518
     * 
     * @param {string} inputString JavaScript string. As soon as for each ASN.1 string type we have a specific transformation function here we will work with pure JavaScript string
     * @returns {string} Formated string
     */
    function stringPrep(inputString: string): string;
    /**
     * Create a single ArrayBuffer from CMS ECDSA signature
     * 
     * @param {Sequence} cmsSignature ASN.1 SEQUENCE contains CMS ECDSA signature
     * @returns {ArrayBuffer}
     */
    function createECDSASignatureFromCMS(cmsSignature: Sequence): ArrayBuffer;
    /**
     * Get WebCrypto algorithm by wel-known OID
     * 
     * @param {string} oid Wel-known OID to search for
     * @returns {Algorithm}
     */
    function getAlgorithmByOID(oid: string): Algorithm;
    /**
     * Getting hash algorithm by signature algorithm
     * 
     * @param {AlgorithmIdentifier} signatureAlgorithm Signature algorithm
     * @returns {string}
     */
    function getHashAlgorithm(signatureAlgorithm: AlgorithmIdentifier): string;
    /**
     * ANS X9.63 Key Derivation Function having a "Counter" as a parameter
     * 
     * @param {string} hashFunction Used hash function
     * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
     * @param {number} Counter
     * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
     */
    function kdfWithCounter(hashFunction: string, Zbuffer: ArrayBuffer, Counter: number, SharedInfo: ArrayBuffer): PromiseLike<{ counter: number; result: ArrayBuffer; }>;
    /**
     * ANS X9.63 Key Derivation Function
     * 
     * @param {string} hashFunction Used hash function
     * @param {ArrayBuffer} Zbuffer ArrayBuffer containing ECDH shared secret to derive from
     * @param {number} keydatalen Length (!!! in BITS !!!) of used kew derivation function
     * @param {ArrayBuffer} SharedInfo Usually DER encoded "ECC_CMS_SharedInfo" structure
     */
    function kdf(hashFunction: string, Zbuffer: ArrayBuffer, keydatalen: number, SharedInfo: ArrayBuffer): PromiseLike<ArrayBuffer>;
}

export = PkiJs;
export as namespace PkiJs;