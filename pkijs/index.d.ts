/// <reference types="asn1js" />
/// <reference types="pvutils" />

declare namespace PKIjs {
    abstract class PKIBase {
        /**
         * Constructor for class
         * @param {Object} [parameters={}]
         * @property {Object} [schema] asn1js parsed value
         */
        constructor(parameters?: Object);

        /**
         * Return default values for all class members
         * @param {string} memberName String name for a class member
         */
        static defaultValues(memberName: string): any;

        /**
         * Return value of asn1js schema for current class
         * @param {Object} parameters Input parameters for the schema
         * @returns {Object} asn1js schema object
         */
        static schema(parameters?: Object): Object;

        /**
         * Convert parsed asn1js object into current class
         * 
         * @param {Object} schema
         */
        fromSchema(schema: Object): void;

        /**
         * Convert current object to asn1js object and set correct values
         * 
         * @returns {Object} asn1js object
         */
        toSchema(): any;

        /**
         * Convertion for the class to JSON object
         * @returns {Object}
         */
        toJSON(): Object;
    }
}

declare module "pkijs/src/Attribute" {
    export default class Attribute extends PKIjs.PKIBase {

        type: string;
        value: Array<any>;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/AttributeTypeAndValue" {

    export default class AttributeTypeAndValue extends PKIjs.PKIBase {

        /**
         * Internal 0 - UTCTime; 1 - GeneralizedTime; 2 - empty value
         * 
         * @type {number}
         * @memberOf AttributeTypeAndValue
         */
        type: number;
        /**
         * Value of the TIME class
         * 
         * @type {Object}
         * @memberOf AttributeTypeAndValue
         */
        value: any;
    }
}

declare module "pkijs/src/AltName" {
    import GeneralName from "pkijs/src/GeneralName";
    /**
     * Class from RFC5280
     */
    export default class AltName extends PKIjs.PKIBase {

        altNames: GeneralName[];
    }
}

declare module "pkijs/src/GeneralName" {
    /**
     * @class
     * @description GeneralName
     */
    export default class GeneralName extends PKIjs.PKIBase {

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
         * @type {Object}
         * @memberOf GeneralName
         */
        value: Object;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/GeneralNames" {
    import GeneralName from "pkijs/src/GeneralName";

    export default class GeneralNames extends PKIjs.PKIBase {

        names: GeneralName[];
    }
}

declare module "pkijs/src/AlgorithmIdentifier" {
    export default class AlgorithmIdentifier extends PKIjs.PKIBase {
        algorithmId: string;
        algorithmParams: Object;

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
    }
}

declare module "pkijs/src/Accuracy" {
    export default class Accuracy extends PKIjs.PKIBase {
        seconds: number;
        millis: number;
        micros: number;
        algorithmParams: Object;

        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/AccessDescription" {
    import GeneralName from "pkijs/src/AccessDescription";
    /**
     * Class from RFC5280
     * 
     * @export
     * @class AccessDescription
     */
    export default class AccessDescription extends PKIjs.PKIBase {
        accessMethod: string;
        accessLocation: GeneralName;
    }
}

declare module "pkijs/src/AuthorityKeyIdentifier" {
    import GeneralName from "pkijs/src/AccessDescription";
    import { Integer, OctetString } from "asn1js";

    export default class AuthorityKeyIdentifier extends PKIjs.PKIBase {
        keyIdentifier: OctetString;
        authorityCertIssuer: GeneralName[];
        authorityCertSerialNumber: Integer;
    }
}

declare module "pkijs/src/BasicConstraints" {
    import { Integer } from "asn1js";

    export default class BasicConstraints extends PKIjs.PKIBase {
        cA: boolean;
        pathLenConstraint: number | Integer;
    }
}

declare module "pkijs/src/BasicOCSPResponse" {
    import { BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import Certificate from "pkijs/src/Certificate";
    import ResponseData from "pkijs/src/ResponseData";

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

    export default class BasicOCSPResponse extends PKIjs.PKIBase {
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
         * @returns {Promise}
         */
        getCertificateStatus(certificate: Certificate, issuerCertificate: Certificate): PromiseLike<GetCertificateStatusResult>;
        /**
         * Make signature for current OCSP Basic Response
         * @param {Object} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         * @returns {Promise}
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing OCSP Basic Response
         * @param {Object} parameters Additional parameters
         * @returns {Promise}
         */
        verify(parameters?: { trustedCerts?: Certificate[] }): PromiseLike<boolean>;
    }
}

declare module "pkijs/src/CertID" {
    import { OctetString, Integer } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import Certificate from "pkijs/src/Certificate";

    interface CreateFroCertificateParams {
        hashAlgorithm: string;
        issuerCertificate: Certificate;
    }

    export default class CertID extends PKIjs.PKIBase {
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
         * @param {Object} parameters Additional parameters
         * @returns {Promise}
         */
        createForCertificate(certificate: Certificate, parameters: CreateFroCertificateParams): PromiseLike<void>;
    }
}

declare module "pkijs/src/Certificate" {
    import { OctetString, Integer, BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import PublicKeyInfo from "pkijs/src/PublicKeyInfo";
    import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";
    import Extension from "pkijs/src/Extension";
    import Time from "pkijs/src/Time";

    export default class Certificate extends PKIjs.PKIBase {
        tbs: ArrayBuffer;
        version: number;
        serialNumber: Integer;
        signature: Integer;
        issuer: RelativeDistinguishedNames;
        notBefore: Time;
        notAfter: Time;
        subject: RelativeDistinguishedNames;
        subjectPublicKeyInfo: PublicKeyInfo;
        issuerUniqueID: ArrayBuffer;
        subjectUniqueID: ArrayBuffer;
        extensions: Extension[];
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
        encodeTBS(): Object;
        /**
         * Importing public key for current certificate
         */
        getPublicKey(parameters?: Object | null): PromiseLike<CryptoKey>;
        /**
         * Get SHA-1 hash value for subject public key
         */
        getKeyHash(): PromiseLike<ArrayBuffer>;
        /**
         * Make a signature for current value from TBS section
         * @param {Object} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm="SHA-1"] Hashing algorithm
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;

        verify(issuerCertificate?: Certificate): PromiseLike<boolean>;
    }

}

declare module "pkijs/src/CertificateChainValidationEngine" {
    import { BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import Certificate from "pkijs/src/Certificate";
    import OCSPResponse from "pkijs/src/OCSPResponse";
    import CertificateRevocationList from "pkijs/src/CertificateRevocationList";

    export default class CertificateChainValidationEngine {
        trustedCerts: Certificate[];
        certs: Certificate[];
        crls: CertificateRevocationList[];
        ocsp: OCSPResponse;
        checkDate: Date;

        /**
         * Constructor for CertificateChainValidationEngine class
         * @param {Object} [parameters={}]
         * @property {Object} [schema] asn1js parsed value
         */
        constructor(parameters?: Object);

        sort(): any;
        /**
         * Major verification function for certificate chain.
         * @param {{initialPolicySet, initialExplicitPolicy, initialPolicyMappingInhibit, initialInhibitPolicy, initialPermittedSubtreesSet, initialExcludedSubtreesSet, initialRequiredNameForms}} [parameters]
         * @returns {Promise}
         */
        verify(parameters?: Object): PromiseLike<any>
    }
}

declare module "pkijs/src/CertificatePolicies" {
    import PolicyInformation from "pkijs/src/PolicyInformation";

    export default class CertificatePolicies extends PKIjs.PKIBase {
        certificatePolicies: PolicyInformation[];
    }
}

declare module "pkijs/src/CertificateRevocationList" {
    import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";
    import RevokedCertificate from "pkijs/src/RevokedCertificate";
    import Time from "pkijs/src/Time";
    import Extension from "pkijs/src/Extension";
    import PublicKeyInfo from "pkijs/src/PublicKeyInfo";
    import Certificate from "pkijs/src/Certificate";
    import { BitString } from "asn1js";

    export default class CertificateRevocationList extends PKIjs.PKIBase {
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

        encodeTBS(): Object;
        isCertificateRevoked(certificate: Certificate): boolean;
        /**
         * Make a signature for existing CRL data
         * @param {Object} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing signature
         * @param {{[issuerCertificate]: Object, [publicKeyInfo]: Object}} parameters
         * @returns {*}
         */
        verify(parameters: {
            issuerCertificate?: Certificate;
            publicKeyInfo?: PublicKeyInfo;
        }): PromiseLike<boolean>;
    }
}

declare module "pkijs/src/CertificateSet" {
    import Certificate from "pkijs/src/Certificate";

    export default class CertificateSet extends PKIjs.PKIBase {
        certificates: Certificate[];
    }
}

declare module "pkijs/src/CertificationRequest" {
    import { BitString } from "asn1js";
    import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";
    import PublicKeyInfo from "pkijs/src/PublicKeyInfo";
    import Certificate from "pkijs/src/Certificate";
    import Attribute from "pkijs/src/Attribute";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class CertificationRequest extends PKIjs.PKIBase {
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
         * @returns {Sequence}
         */
        encodeTBS(): Object;
        /**
         * Makes signature for currect certification request
         * @param {CryptoKey} privateKey WebCrypto private key
         * @param {string} hashAlgorithm String representing current hashing algorithm
         */
        sign(privateKey: CryptoKey, hashAlgorithm: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify existing certification request signature
         * @returns {*}
         */
        verify(): PromiseLike<boolean>;
    }
}

declare module "pkijs/src/ContentInfo" {
    export default class ContentInfo extends PKIjs.PKIBase {
        contentType: string;
        content: any;
    }
}

declare module "pkijs/src/CryptoEngine" {
    export default class CryptoEngine implements SubtleCrypto {

        crypto: SubtleCrypto;
        name: string;
        /**
         * Constructor for CryptoEngine class
         * @param {Object} [parameters={}]
         */
        constructor(parameters?: Object);

        importKey(format: "jwk", keyData: JsonWebKey, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: "raw" | "pkcs8" | "spki", keyData: BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: string, keyData: JsonWebKey | BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
        exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>;
        exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;

        /**
         * Convert WebCrypto keys between different export formats
         * @param {string} inputFormat
         * @param {string} outputFormat
         * @param {ArrayBuffer|Object} keyData
         * @param {Object} algorithm
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
        sign(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        unwrapKey(format: string, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier, unwrappedKeyAlgorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        verify(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: BufferSource, data: BufferSource): PromiseLike<boolean>;
        wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier): PromiseLike<ArrayBuffer>;
        decrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        deriveBits(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
        deriveKey(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        digest(algorithm: AlgorithmIdentifier, data: BufferSource): PromiseLike<ArrayBuffer>;
        encrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
    }
}

declare module "pkijs/src/DigestInfo" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import { OctetString } from "asn1js";

    export default class DigestInfo extends PKIjs.PKIBase {
        digestAlgorithm: AlgorithmIdentifier;
        digest: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/DistributionPoint" {
    import { BitString } from "asn1js";
    import GeneralName from "pkijs/src/GeneralName";

    export default class DistributionPoint extends PKIjs.PKIBase {
        distributionPoint?: GeneralName[];
        reasons?: BitString;
        cRLIssuer?: GeneralName[];
    }
}

declare module "pkijs/src/ECCCMSSharedInfo" {
    import { OctetString } from "asn1js";

    export default class ECCCMSSharedInfo extends PKIjs.PKIBase {
        keyInfo: AlgorithmIdentifier;
        entityUInfo?: OctetString;
        suppPubInfo: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/ECPrivateKey" {
    import { OctetString } from "asn1js";
    import ECPublicKey from "pkijs/src/ECPublicKey";

    export default class ECPrivateKey extends PKIjs.PKIBase {
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
         * @param {Object} json
         */
        fromJSON(json: JsonWebKey): void;
    }
}

declare module "pkijs/src/ECPublicKey" {
    export default class ECPublicKey extends PKIjs.PKIBase {
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
         * @param {Object} json
         */
        fromJSON(json: JsonWebKey): void;
    }
}

declare module "pkijs/src/EncapsulatedContentInfo" {
    import { OctetString } from "asn1js";

    export default class EncapsulatedContentInfo extends PKIjs.PKIBase {
        eContentType: string;
        eContent: OctetString
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/EncryptedContentInfo" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import { OctetString } from "asn1js";

    export default class EncryptedContentInfo extends PKIjs.PKIBase {
        eContentType: string;
        contentEncryptionAlgorithm: AlgorithmIdentifier;
        encryptedContent: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/EncryptedData" {
    import EncryptedContentInfo from "pkijs/src/EncryptedContentInfo";
    import Attribute from "pkijs/src/Attribute";

    export default class EncryptedData extends PKIjs.PKIBase {
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
         * @param {Object} parameters Parameters neccessary for encryption
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
         * @param {Object} parameters Parameters neccessary for encryption
         */
        decrypt(parameters: {
            password: string;
        }): PromiseLike<ArrayBuffer>;
    }
}

declare module "pkijs/src/EnvelopedData" {
    import Attribute from "pkijs/src/Attribute";
    import Certificate from "pkijs/src/Certificate";
    import EncryptedContentInfo from "pkijs/src/EncryptedContentInfo";
    import RecipientInfo from "pkijs/src/RecipientInfo";
    import OriginatorInfo from "pkijs/src/OriginatorInfo";

    export default class EnvelopedData extends PKIjs.PKIBase {
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
         * @param {Object} [parameters] Additional parameters neccessary for "fine tunning" of encryption process
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
         * @param {Object} parameters Additional parameters neccessary for "fine tunning" of encryption process
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
         * @param {Object} contentEncryptionAlgorithm WebCrypto algorithm. For the moment here could be only "AES-CBC" or "AES-GCM" algorithms.
         * @param {ArrayBuffer} contentToEncrypt Content to encrypt
         * @returns {Promise}
         */
        encrypt(contentEncryptionAlgorithm: Algorithm, contentToEncrypt: ArrayBuffer): PromiseLike<ArrayBuffer>;
        /**
         * Decrypt existing CMS Enveloped Data content
         * @param {number} recipientIndex Index of recipient
         * @param {Object} parameters Additional parameters
         * @returns {Promise}
         */
        decrypt(recipientIndex: number, parameters: {
            recipientCertificate: Certificate;
            recipientPrivateKey: ArrayBuffer;
        }): PromiseLike<ArrayBuffer>;
    }
}

declare module "pkijs/src/ExtKeyUsage" {
    export default class ExtKeyUsage extends PKIjs.PKIBase {
        keyPurposes: string[];
    }
}

declare module "pkijs/src/Extension" {
    import { OctetString } from "asn1js";

    export default class Extension extends PKIjs.PKIBase {
        extnID: string;
        critical: boolean;
        extnValue: OctetString;
        parsedValue?: Object;
    }
}

declare module "pkijs/src/Extensions" {
    import Extension from "pkijs/src/Extension";

    export default class Extensions extends PKIjs.PKIBase {
        extensions: Extension[];
    }
}

declare module "pkijs/src/GeneralSubtree" {
    import { Integer } from "asn1js";
    import GeneralName from "pkijs/src/GeneralName";

    export default class GeneralSubtree extends PKIjs.PKIBase {
        base: GeneralName;
        minimum: number | Integer;
        maximum?: number | Integer;
    }
}

declare module "pkijs/src/GeneratorsDriver" {
    /**
     * Simple "generator's driver" inspired by "https://github.com/tj/co".
     * @param {Generator|GeneratorFunction} generatorInstance
     * @returns {Promise}
     */
    export default function generatorsDriver(generatorInstance: any): PromiseLike<any>;
}

declare module "pkijs/src/InfoAccess" {
    import AccessDescription from "pkijs/src/AccessDescription";

    export default class InfoAccess extends PKIjs.PKIBase {
        accessDescriptions: AccessDescription[];
    }
}

declare module "pkijs/src/IssuerAndSerialNumber" {
    import { Integer } from "asn1js";
    import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

    export default class IssuerAndSerialNumber extends PKIjs.PKIBase {
        issuer: RelativeDistinguishedNames;
        serialNumber: Integer;
    }
}

declare module "pkijs/src/IssuingDistributionPoint" {
    import GeneralName from "pkijs/src/GeneralName";
    import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

    export default class IssuingDistributionPoint extends PKIjs.PKIBase {
        distributionPoint?: GeneralName[] | RelativeDistinguishedNames;
        onlyContainsUserCerts: boolean;
        onlySomeReasons: number;
        indirectCRL: boolean;
        onlyContainsAttributeCerts: boolean;
    }
}

declare module "pkijs/src/KEKIdentifier" {
    import { OctetString, GeneralizedTime } from "asn1js";
    import OtherKeyAttribute from "pkijs/src/OtherKeyAttribute";

    export default class KEKIdentifier extends PKIjs.PKIBase {
        keyIdentifier: OctetString;
        date?: GeneralizedTime;
        other?: OtherKeyAttribute;
    }
}

declare module "pkijs/src/KEKRecipientInfo" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import KEKIdentifier from "pkijs/src/KEKIdentifier";

    export default class KEKRecipientInfo extends PKIjs.PKIBase {
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
    }
}

declare module "pkijs/src/KeyAgreeRecipientIdentifier" {
    export default class KeyAgreeRecipientIdentifier extends PKIjs.PKIBase {
        variant: number;
        value: Object;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/KeyAgreeRecipientInfo" {
    import { OctetString } from "asn1js";
    import Certificate from "pkijs/src/Certificate";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import OriginatorIdentifierOrKey from "pkijs/src/OriginatorIdentifierOrKey";
    import RecipientEncryptedKeys from "pkijs/src/RecipientEncryptedKeys";

    export default class KeyAgreeRecipientInfo extends PKIjs.PKIBase {
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
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/KeyTransRecipientInfo" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import RecipientIdentifier from "pkijs/src/RecipientIdentifier";
    import Certificate from "pkijs/src/Certificate";

    export default class KeyTransRecipientInfo extends PKIjs.PKIBase {
        version: number;
        rid: RecipientIdentifier;
        keyEncryptionAlgorithm: AlgorithmIdentifier
        encryptedKey: OctetString;
        /**
         * For some reasons we need to store recipient's certificate here
         * 
         * @type {Certificate}
         * @memberOf KeyTransRecipientInfo
         */
        recipientCertificate: Certificate
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/MacData" {
    import { OctetString } from "asn1js";
    import DigestInfo from "pkijs/src/DigestInfo";

    export default class MacData extends PKIjs.PKIBase {
        mac: DigestInfo;
        macSalt: OctetString;
        iterations?: number;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/MessageImprint" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class MessageImprint extends PKIjs.PKIBase {
        hashAlgorithm: AlgorithmIdentifier;
        hashedMessage: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}


declare module "pkijs/src/NameConstraints" {
    import GeneralSubtree from "pkijs/src/GeneralSubtree";

    export default class NameConstraints extends PKIjs.PKIBase {
        permittedSubtrees?: GeneralSubtree[];
        excludedSubtrees?: GeneralSubtree[];
    }
}

declare module "pkijs/src/OCSPRequest" {
    import TBSRequest from "pkijs/src/TBSRequest";
    import Signature from "pkijs/src/Signature";

    export default class OCSPRequest extends PKIjs.PKIBase {
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
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/OCSPResponse" {
    import { Enumerated } from "asn1js";
    import ResponseBytes from "pkijs/src/ResponseBytes";
    import Certificate from "pkijs/src/Certificate";
    import { GetCertificateStatusResult } from "pkijs/src/BasicOCSPResponse";
    import { CreateFroCertificateParams } from "pkijs/src/CertID";

    export default class OCSPResponse extends PKIjs.PKIBase {
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
         * @param {Object} parameters Additional parameters
         * @returns {Promise}
         */
        createForCertificate(certificate: Certificate, parameters: CreateFroCertificateParams): PromiseLike<void>;
    }
}

declare module "pkijs/src/OriginatorIdentifierOrKey" {
    export default class OriginatorIdentifierOrKey extends PKIjs.PKIBase {
        variant: number;
        value?: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/OriginatorInfo" {
    import CertificateSet from "pkijs/src/CertificateSet";
    import RevocationInfoChoices from "pkijs/src/RevocationInfoChoices";

    export default class OriginatorInfo extends PKIjs.PKIBase {
        certs: CertificateSet;
        crls: RevocationInfoChoices;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/OriginatorPublicKey" {
    import { BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class OriginatorPublicKey extends PKIjs.PKIBase {
        algorithm: AlgorithmIdentifier;
        publicKey: BitString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/OtherCertificateFormat" {
    export default class OtherCertificateFormat extends PKIjs.PKIBase {
        otherCertFormat: string;
        otherCert: any;
    }
}

declare module "pkijs/src/OtherKeyAttribute" {
    export default class OtherKeyAttribute extends PKIjs.PKIBase {
        keyAttrId: string;
        keyAttr: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

interface JsonOtherPrimeInfo {
    r: string;
    d: string;
    t: string;
}

declare module "pkijs/src/OtherPrimeInfo" {
    import { Integer } from "asn1js";
    export default class OtherPrimeInfo extends PKIjs.PKIBase {
        prime: Integer;
        exponent: Integer;
        coefficient: Integer;
        /**
         * Convert JSON value into current object
         * @param {Object} json
         */
        fromJSON(json: JsonOtherPrimeInfo): void;
    }
}

declare module "pkijs/src/OtherRecipientInfo" {
    export default class OtherRecipientInfo extends PKIjs.PKIBase {
        oriType: string;
        oriValue: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/OtherRevocationInfoFormat" {
    export default class OtherRevocationInfoFormat extends PKIjs.PKIBase {
        otherRevInfoFormat: string;
        otherRevInfo: any;

    }
}

declare module "pkijs/src/PasswordRecipientinfo" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class PasswordRecipientinfo extends PKIjs.PKIBase {
        version: number;
        keyDerivationAlgorithm?: AlgorithmIdentifier
        keyEncryptionAlgorithm: AlgorithmIdentifier
        encryptedKey: OctetString;
        password: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/PBES2Params" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class PBES2Params extends PKIjs.PKIBase {
        keyDerivationFunc: AlgorithmIdentifier;
        encryptionScheme: AlgorithmIdentifier;
    }
}

declare module "pkijs/src/PBKDF2Params" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

    export default class PBKDF2Params extends PKIjs.PKIBase {
        salt: Object;
        iterationCount: number;
        keyLength: number;
        prf: AlgorithmIdentifier;
    }
}

declare module "pkijs/src/PKIStatusInfo" {
    import { Utf8String, BitString } from "asn1js";
    export default class PKIStatusInfo extends PKIjs.PKIBase {
        status: number;
        statusStrings?: Utf8String;
        failInfo?: BitString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;;
    }
}

declare module "pkijs/src/PolicyConstraints" {
    export default class PolicyConstraints extends PKIjs.PKIBase {
        requireExplicitPolicy?: number;
        inhibitPolicyMapping?: number;
    }
}

declare module "pkijs/src/PolicyInformation" {
    import PolicyQualifierInfo from "pkijs/src/PolicyQualifierInfo";

    export default class PolicyInformation extends PKIjs.PKIBase {
        policyIdentifier: string;
        /**
         * Value of the TIME class 
         */
        policyQualifiers: PolicyQualifierInfo[];
    }
}

declare module "pkijs/src/PolicyMapping" {
    export default class PolicyMapping extends PKIjs.PKIBase {
        issuerDomainPolicy: string;
        subjectDomainPolicy: string;

    }
}

declare module "pkijs/src/PolicyMappings" {
    import PolicyMapping from "pkijs/src/PolicyMapping";

    export default class PolicyMappings extends PKIjs.PKIBase {
        mappings: PolicyMapping[];
    }
}

declare module "pkijs/src/PolicyQualifierInfo" {
    export default class PolicyQualifierInfo extends PKIjs.PKIBase {
        policyQualifierId: string;
        qualifier: Object;
    }
}

declare module "pkijs/src/PrivateKeyInfo" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import Attribute from "pkijs/src/Attribute";
    import RSAPrivateKey from "pkijs/src/RSAPrivateKey";
    import ECPrivateKey from "pkijs/src/ECPrivateKey";

    export default class PrivateKeyInfo extends PKIjs.PKIBase {
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
    }
}

declare module "pkijs/src/PrivateKeyUsagePeriod" {
    export default class PrivateKeyUsagePeriod extends PKIjs.PKIBase {
        notBefore?: Date;
        notAfter?: Date;
    }
}

declare module "pkijs/src/PublicKeyInfo" {
    import { BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import ECPublicKey from "pkijs/src/ECPublicKey";
    import RSAPublicKey from "pkijs/src/RSAPublicKey";

    export default class PublicKeyInfo extends PKIjs.PKIBase {
        algorithm: AlgorithmIdentifier
        subjectPublicKey: BitString;
        parsedKey?: ECPublicKey | RSAPublicKey;
        /**
         * Convert JSON value into current object
         * @param {Object} json
         */
        fromJSON(json: JsonWebKey): void;
        importKey(publicKey: CryptoKey): PromiseLike<void>;
    }
}

declare module "pkijs/src/RecipientEncryptedKey" {
    import { OctetString } from "asn1js";
    import KeyAgreeRecipientIdentifier from "pkijs/src/KeyAgreeRecipientIdentifier";
    export default class RecipientEncryptedKey extends PKIjs.PKIBase {
        rid: KeyAgreeRecipientIdentifier;
        encryptedKey: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }
}

declare module "pkijs/src/RecipientEncryptedKeys" {
    import RecipientEncryptedKey from "pkijs/src/RecipientEncryptedKey";

    export default class RecipientEncryptedKeys extends PKIjs.PKIBase {
        encryptedKeys: RecipientEncryptedKey[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/RecipientIdentifier" {
    export default class RecipientIdentifier extends PKIjs.PKIBase {
        variant: number;
        value: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/RecipientInfo" {
    export default class RecipientInfo extends PKIjs.PKIBase {
        variant: number;
        value: any;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/RecipientKeyIdentifier" {
    import { GeneralizedTime, OctetString } from "asn1js";
    import OtherKeyAttribute from "pkijs/src/OtherKeyAttribute";

    export default class RecipientKeyIdentifier extends PKIjs.PKIBase {
        subjectKeyIdentifier: OctetString;
        date?: GeneralizedTime;
        other?: OtherKeyAttribute;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/RelativeDistinguishedNames" {
    import AttributeTypeAndValue from "pkijs/src/AttributeTypeAndValue";

    export default class RelativeDistinguishedNames extends PKIjs.PKIBase {
        typesAndValues: AttributeTypeAndValue[];
        valueBeforeDecode: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/Request" {
    import CertID from "pkijs/src/CertID";
    import Extension from "pkijs/src/Extension";

    export default class Request extends PKIjs.PKIBase {
        reqCert: CertID;
        singleRequestExtensions?: Extension[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/ResponseBytes" {
    import { OctetString } from "asn1js";

    export default class ResponseBytes extends PKIjs.PKIBase {
        responseType: string;
        response: OctetString;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/ResponseData" {
    import Extension from "pkijs/src/Extension";
    import SingleResponse from "pkijs/src/SingleResponse";

    export default class ResponseData extends PKIjs.PKIBase {
        tds: ArrayBuffer;
        responderID: Object;
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
    }

}

declare module "pkijs/src/RevocationInfoChoices" {
    import CertificateRevocationList from "pkijs/src/CertificateRevocationList";
    import OtherRevocationInfoFormat from "pkijs/src/OtherRevocationInfoFormat";

    export default class RevocationInfoChoices extends PKIjs.PKIBase {
        crls: CertificateRevocationList[];
        otherRevocationInfos: OtherRevocationInfoFormat[];
    }

}

declare module "pkijs/src/RevokedCertificate" {
    import { Integer } from "asn1js";
    import Time from "pkijs/src/Time";
    import Extensions from "pkijs/src/Extensions";

    export default class RevokedCertificate extends PKIjs.PKIBase {
        userCertificate: Integer;
        revocationDate: Time;
        crlEntryExtensions: Extensions;
    }

}

declare module "pkijs/src/RSAESOAEPParams" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    export default class RSAESOAEPParams extends PKIjs.PKIBase {
        hashAlgorithm: AlgorithmIdentifier;
        maskGenAlgorithm: AlgorithmIdentifier;
        pSourceAlgorithm: AlgorithmIdentifier;
    }

}

declare module "pkijs/src/RSAPrivateKey" {
    import { Integer } from "asn1js";
    import OtherPrimeInfo from "pkijs/src/OtherPrimeInfo";
    export default class RSAPrivateKey extends PKIjs.PKIBase {
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
         * @param {Object} json
         */
        fromJSON(json: JsonWebKey): void;
    }

}

declare module "pkijs/src/RSAPublicKey" {
    import { Integer } from "asn1js";

    export default class RSAPublicKey extends PKIjs.PKIBase {
        modulus: Integer;
        publicExponent: Integer;
        /**
         * Convert JSON value into current object
         * @param {Object} json
         */
        fromJSON(json: JsonWebKey): void;
    }

}

declare module "pkijs/src/RSASSAPSSParams" {
    import { Integer } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    export default class RSASSAPSSParams extends PKIjs.PKIBase {
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
    }

}

declare module "pkijs/src/Signature" {
    import { BitString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import Certificate from "pkijs/src/Certificate";

    export default class Signature extends PKIjs.PKIBase {
        signatureAlgorithm: AlgorithmIdentifier;
        signature: BitString;
        certs?: Certificate[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/SignedAndUnsignedAttributes" {
    import Attribute from "pkijs/src/Attribute";

    export default class SignedAndUnsignedAttributes extends PKIjs.PKIBase {
        type: string;
        attributes: Attribute[];
        encodedValue: ArrayBuffer;
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/SignedData" {
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import EncapsulatedContentInfo from "pkijs/src/EncapsulatedContentInfo";
    import Certificate from "pkijs/src/Certificate";
    import OtherCertificateFormat from "pkijs/src/OtherCertificateFormat";
    import CertificateRevocationList from "pkijs/src/CertificateRevocationList";
    import OtherRevocationInfoFormat from "pkijs/src/OtherRevocationInfoFormat";
    import SignerInfo from "pkijs/src/SignerInfo";

    interface VerifyParams {
        signer?: number;
        data?: ArrayBuffer;
        trustedCerts?: Certificate[],
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

    export default class SignedData extends PKIjs.PKIBase {
        version: number;
        digestAlgorithms: AlgorithmIdentifier[];
        encapContentInfo: EncapsulatedContentInfo
        certificates?: Certificate[] | OtherCertificateFormat[]
        crls?: CertificateRevocationList[] | OtherRevocationInfoFormat[]
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
    }

}

declare module "pkijs/src/SignerInfo" {
    import { OctetString } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";
    import SignedAndUnsignedAttributes from "pkijs/src/SignedAndUnsignedAttributes";

    export default class SignerInfo extends PKIjs.PKIBase {
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
    }

}

declare module "pkijs/src/SingleResponse" {
    import CertID from "pkijs/src/CertID";
    import Extension from "pkijs/src/Extension";

    export default class SingleResponse extends PKIjs.PKIBase {
        certID: CertID;
        certStatus: Object;
        thisUpdate: Date;
        nextUpdate?: Date;
        singleExtensions: Extension[];
        /**
         * Compare values with default values for all class members
         * @param {string} memberName String name for a class member
         * @param {*} memberValue Value to compare with default value
         */
        static compareWithDefault(memberName: string, memberValue: any): boolean;
    }

}

declare module "pkijs/src/SubjectDirectoryAttributes" {
    import Attribute from "pkijs/src/Attribute";

    export default class SubjectDirectoryAttributes extends PKIjs.PKIBase {
        attributes: Attribute[];
    }

}

declare module "pkijs/src/TBSRequest" {
    import GeneralName from "pkijs/src/GeneralName";
    import Request from "pkijs/src/Request";
    import Extension from "pkijs/src/Extension";

    export default class TBSRequest extends PKIjs.PKIBase {
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
    }

}

declare module "pkijs/src/Time" {
    export default class Time extends PKIjs.PKIBase {
        type: number;
        value: Date;
    }

}

declare module "pkijs/src/TimeStampReq" {
    import { Integer } from "asn1js";
    import MessageImprint from "pkijs/src/MessageImprint";
    import Extension from "pkijs/src/Extension";

    export default class TimeStampReq extends PKIjs.PKIBase {
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
    }

}

declare module "pkijs/src/TimeStampResp" {
    import ContentInfo from "pkijs/src/ContentInfo";
    import PKIStatusInfo from "pkijs/src/PKIStatusInfo";
    import { VerifyResult, VerifyParams } from "pkijs/src/SignedData";

    export default class TimeStampResp extends PKIjs.PKIBase {
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
         * @param {Object} privateKey Private key for "subjectPublicKeyInfo" structure
         * @param {string} [hashAlgorithm] Hashing algorithm. Default SHA-1
         * @returns {Promise}
         */
        sign(privateKey: CryptoKey, hashAlgorithm?: string): PromiseLike<ArrayBuffer>;
        /**
         * Verify current TSP Response
         * @param {Object} verificationParameters Input parameters for verification
         * @returns {Promise}
         */
        verify(verificationParameters: VerifyParams): PromiseLike<VerifyResult>;
    }

}

declare module "pkijs/src/TSTInfo" {
    import { Integer } from "asn1js";
    import MessageImprint from "pkijs/src/MessageImprint";
    import Accuracy from "pkijs/src/Accuracy";
    import GeneralName from "pkijs/src/GeneralName";
    import Extension from "pkijs/src/Extension";

    interface VerifyParams {
        data: BufferSource;
        notBefore?: Date;
        notAfter?: Date;
    }

    export default class extends PKIjs.PKIBase {
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
    }

}

declare module "pkijs/src/common" {
    import { Sequence } from "asn1js";
    import AlgorithmIdentifier from "pkijs/src/AlgorithmIdentifier";

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
     * @returns {Object}
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
    function kdfWithCounter(hashFunction: string, Zbuffer: ArrayBuffer, Counter: number, SharedInfo: ArrayBuffer): PromiseLike<{ counter: number; result: ArrayBuffer; }>
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