// Type definitions for graphene-pk11 v2.0.3
// Project: https://github.com/PeculiarVentures/graphene
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * A simple layer for interacting with PKCS #11 / PKCS11 / CryptoKI for Node
 * v2.0.3
 */

import * as pkcs11 from "pkcs11js";

type Handle = Buffer;
type CryptoData = string | Buffer;

declare class Pkcs11Error extends Error {
    code: number;
    func: string;
    constructor(code: number, func: string);
}

declare class BaseObject {
    protected lib: pkcs11.PKCS11;
    constructor(lib?: pkcs11.PKCS11);
}

declare class HandleObject extends BaseObject {
    /**
     * handle to pkcs11 object
     */
    handle: Handle;

    constructor(handle: Handle, lib: pkcs11.PKCS11);

    protected getInfo(): void;
}

declare class Collection<T extends BaseObject> extends BaseObject {

    protected items_: Array<any>;
    protected classType: any;

    /**
     * returns length of collection
     */
    length: number;

    constructor(items: Array<any>, lib: pkcs11.PKCS11, classType: any);

    /**
     * returns item from collection by index
     * @param {number} index of element in collection `[0..n]`
     */
    items(index: number): T;
}

declare function isString(v: any): boolean;
declare function isNumber(v: any): boolean;
declare function isBoolean(v: any): boolean;
declare function isUndefined(v: any): boolean;
declare function isNull(v: any): boolean;
declare function isEmpty(v: any): boolean;
declare function isFunction(v: any): boolean;
declare function isObject(v: any): boolean;
declare function isArray(v: any): boolean;
declare function isFlag(v: any, fv: number): boolean;
declare function dateFromString(text: string): Date;

// ========== Crypto ==========

declare class Cipher extends BaseObject {

    session: Session;

    constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11);

    protected init(alg: MechanismType, key: Key): void;

    update(data: CryptoData): Buffer;
    final(): Buffer;
    once(data: CryptoData, enc: Buffer): Buffer;
    once(data: CryptoData, enc: Buffer, cb: (error: Error, data: Buffer) => void): void;
}

declare class Decipher extends BaseObject {

    protected session: Session;
    protected blockSize: number;

    constructor(session: Session, alg: MechanismType, key: Key, blockSize: number, lib: pkcs11.PKCS11);

    protected init(alg: MechanismType, key: Key): void;

    update(data: Buffer): Buffer;
    final(): Buffer;
    once(data: Buffer, dec: Buffer): Buffer;
    once(data: Buffer, dec: Buffer, cb: (error: Error, data: Buffer) => void): void;
}

declare class Digest extends BaseObject {

    session: Session;

    constructor(session: Session, alg: MechanismType, lib: pkcs11.PKCS11);

    protected init(alg: MechanismType): void;

    update(data: CryptoData): void;
    final(): Buffer;
    once(data: CryptoData): Buffer;
    once(data: CryptoData, cb: (error: Error, data: Buffer) => void): void;
}

declare class Sign extends BaseObject {

    session: Session;

    constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11);

    protected init(alg: MechanismType, key: Key): void;

    update(data: CryptoData): void;
    final(): Buffer;
    once(data: CryptoData): Buffer;
    once(data: CryptoData, cb: (error: Error, data: Buffer) => void): void;
}

declare class Verify extends BaseObject {

    session: Session;

    constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11);

    protected init(alg: MechanismType, key: Key): void;

    update(data: CryptoData): void;
    final(signature: Buffer): boolean;
    once(data: CryptoData, signature: Buffer): boolean;
    once(data: CryptoData, signature: Buffer, cb: (error: Error, valid: boolean) => void): void;
}

// ========== Keys ==========

interface IParams {
    toCKI(): any;
}

declare enum MechParams {
    AesCBC,
    AesCCM,
    AesGCM,
    RsaOAEP,
    RsaPSS,
    EcDH,
}

// AES

declare class AesCbcParams implements IParams, pkcs11.AesCBC {
    /**
     * initialization vector
     * - must have a fixed size of 16 bytes
     */
    iv: Buffer;
    /**
     * the data
     */
    data: Buffer;
    type: MechParams;
    constructor(iv: Buffer, data?: Buffer);
    toCKI(): Buffer;
}

declare class AesCcmParams implements IParams {
    /**
     * length of the data where 0 <= dataLength < 2^8L
     */
    dataLength: number;
    /**
     * the nonce
     */
    nonce: Buffer;
    /**
     * the additional authentication data
     * - This data is authenticated but not encrypted
     */
    aad: Buffer;
    /**
     * length of authentication tag (output following cipher text) in bits.
     * - Can be any value between 0 and 128
     */
    macLength: number;
    type: MechParams;
    constructor(dataLength: number, nonce: Buffer, aad?: Buffer, macLength?: number);
    toCKI(): pkcs11.AesCCM;
}

declare class AesGcmParams implements IParams {
    /**
     * initialization vector
     * - The length of the initialization vector can be any number between 1 and 256.
     * 96-bit (12 byte) IV values can be processed more efficiently,
     * so that length is recommended for situations in which efficiency is critical.
     */
    iv: Buffer;
    /**
     * pointer to additional authentication data.
     * This data is authenticated but not encrypted.
     */
    aad: Buffer;
    /**
     * length of authentication tag (output following cipher text) in bits.
     * Can be any value between 0 and 128. Default 128
     */
    tagBits: number;
    type: MechParams;
    constructor(iv: Buffer, aad?: Buffer, tagBits?: number);
    toCKI(): pkcs11.AesGCM;
}

// EC

interface INamedCurve {
    name: string;
    oid: string;
    value: Buffer;
    size: number;
}

declare class NamedCurve {
    static getByName(name: string): INamedCurve;
    static getByOid(oid: string): INamedCurve;
}

declare enum EcKdf {
    NULL,
    SHA1,
    SHA224,
    SHA256,
    SHA384,
    SHA512,
}

declare class EcdhParams implements IParams, pkcs11.ECDH1 {
    /**
     * key derivation function used on the shared secret value
     */
    kdf: EcKdf;
    /**
     * some data shared between the two parties
     */
    sharedData: Buffer;
    /**
     * other party's EC public key value
     */
    publicData: Buffer;
    type: MechParams;
    /**
     * Creates an instance of EcdhParams.
     *
     * @param {EcKdf} kdf key derivation function used on the shared secret value
     * @param {Buffer} [sharedData=null] some data shared between the two parties
     * @param {Buffer} [publicData=null] other party's EC public key value
     */
    constructor(kdf: EcKdf, sharedData?: Buffer, publicData?: Buffer);
    toCKI(): pkcs11.ECDH1;
}

// Rsa

declare enum RsaMgf {
    MGF1_SHA1,
    MGF1_SHA224,
    MGF1_SHA256,
    MGF1_SHA384,
    MGF1_SHA512,
}

declare class RsaOaepParams implements IParams {
    hashAlgorithm: MechanismEnum;
    mgf: RsaMgf;
    source: number;
    sourceData: Buffer;
    type: MechParams;
    constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, sourceData?: Buffer);
    toCKI(): pkcs11.RsaOAEP;
}

declare class RsaPssParams implements IParams {
    /**
     * hash algorithm used in the PSS encoding;
     * - if the signature mechanism does not include message hashing,
     * then this value must be the mechanism used by the application to generate
     * the message hash;
     * - if the signature mechanism includes hashing,
     * then this value must match the hash algorithm indicated
     * by the signature mechanism
     */
    hashAlgorithm: MechanismEnum;
    /**
     * mask generation function to use on the encoded block
     */
    mgf: RsaMgf;
    /**
     * length, in bytes, of the salt value used in the PSS encoding;
     * - typical values are the length of the message hash and zero
     */
    saltLength: number;
    type: MechParams;
    constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, saltLen?: number);
    toCKI(): pkcs11.RsaPSS;
}

// ========== Objects ==========

declare enum ObjectClass {
    DATA,
    CERTIFICATE,
    PUBLIC_KEY,
    PRIVATE_KEY,
    SECRET_KEY,
    HW_FEATURE,
    DOMAIN_PARAMETERS,
    MECHANISM,
    OTP_KEY,
}

declare class SessionObject extends HandleObject {
    /**
     * Session
     */
    session: Session;
    /**
     * gets the size of an object in bytes
     *
     * @readonly
     * @type {number}
     */
    size: number;
    class: ObjectClass;

    /**
     * Creates an instance of SessionObject.
     *
     * @param {SessionObject} object
     */
    constructor(object: SessionObject);
    /**
     * Creates an instance of SessionObject.
     *
     * @param {Handle} handle
     * @param {Session} session
     * @param {pkcs11.PKCS11} lib
     */
    constructor(handle: Handle, session: Session, lib: pkcs11.PKCS11);
    constructor(handle: SessionObject);

    /**
     * copies an object, creating a new object for the copy
     *
     * @param {ITemplate} template template for the new object
     * @returns {SessionObject}
     */
    copy(template: ITemplate): SessionObject;
    /**
     * destroys an object
     */
    destroy(): void;
    getAttribute(attr: string): ITemplate;
    getAttribute(attrs: ITemplate): ITemplate;
    setAttribute(attrs: string, value: any): void;
    setAttribute(attrs: ITemplate): void;
    get(name: string): any;
    set(name: string, value: any): void;
    toType<T extends SessionObject>(): T;
}

declare class SessionObjectCollection extends Collection<SessionObject> {
    session: Session;

    constructor(items: Array<Handle>, session: Session, lib: pkcs11.PKCS11, classType?: any);

    items(index: number): SessionObject;
}

declare class Storage extends SessionObject {
    /**
     * `true` if object is a token object;
     * `false` if object is a session object. Default is `false`.
     */
    token: boolean;
    /**
     * `true` if object is a private object;
     * `false` if object is a public object.
     * Default value is token-specific, and may depend on the values of other attributes of the object.
     */
    private: boolean;
    /**
     * `true` if object can be modified. Default is `false`
     */
    modifiable: boolean;
    /**
     * Description of the object (default empty)
     */
    label: string;
}

/**
 * Data objects (object declare class `CKO_DATA`) hold information defined by an application.
 * Other than providing access to it, Cryptoki does not attach any special meaning to a data object
 *
 * @export
 * @declare class Data
 * @extends {Storage}
 */
declare class Data extends Storage {
    /**
     * Description of the application that manages the object (default empty)
     *
     * @type {string}
     */
    application: string;
    /**
     * DER-encoding of the object identifier indicating the data object type (default empty)
     *
     * @type {Buffer}
     */
    objectId: Buffer;
    /**
     * Value of the object (default empty)
     *
     * @type {Buffer}
     */
    value: Buffer;
}

declare class DomainParameters extends Storage {
    /**
     * Type of key the domain parameters can be used to generate.
     */
    keyType: KeyType;
    /**
     * `CK_TRUE` only if domain parameters were either * generated locally (i.e., on the token)
     * with a `C_GenerateKey` * created with a `C_CopyObject` call as a copy of domain parameters
     * which had its `CKA_LOCAL` attribute set to `CK_TRUE`
     */
    local: boolean;
}

declare enum KeyType {
    RSA,
    DSA,
    DH,
    ECDSA,
    EC,
    X9_42_DH,
    KEA,
    GENERIC_SECRET,
    RC2,
    RC4,
    DES,
    DES2,
    DES3,
    CAST,
    CAST3,
    CAST5,
    CAST128,
    RC5,
    IDEA,
    SKIPJACK,
    BATON,
    JUNIPER,
    CDMF,
    AES,
    GOSTR3410,
    GOSTR3411,
    GOST28147,
    BLOWFISH,
    TWOFISH,
    SECURID,
    HOTP,
    ACTI,
    CAMELLIA,
    ARIA,
}
declare enum KeyGenMechanism {
    AES,
    RSA,
    RSA_X9_31,
    DSA,
    DH_PKCS,
    DH_X9_42,
    GOSTR3410,
    GOST28147,
    RC2,
    RC4,
    DES,
    DES2,
    SECURID,
    ACTI,
    CAST,
    CAST3,
    CAST5,
    CAST128,
    RC5,
    IDEA,
    GENERIC_SECRET,
    SSL3_PRE_MASTER,
    CAMELLIA,
    ARIA,
    SKIPJACK,
    KEA,
    BATON,
    ECDSA,
    EC,
    JUNIPER,
    TWOFISH,
}

/**
 * Definition for the base key object declare class
 * - defines the object declare class `CKO_PUBLIC_KEY`, `CKO_PRIVATE_KEY` and `CKO_SECRET_KEY` for type `CK_OBJECT_CLASS`
 * as used in the `CKA_CLASS` attribute of objects
 */
declare class Key extends Storage {
    /**
     * Type of key
     * - Must be specified when object is created with `C_CreateObject`
     * - Must be specified when object is unwrapped with `C_UnwrapKey`
     */
    type: KeyType;
    /**
     * Key identifier for key (default empty)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification
     * of the attribute during the course of a `C_CopyObject` call.
     */
    id: Buffer;
    /**
     * Start date for the key (default empty)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification
     * of the attribute during the course of a `C_CopyObject` call.
     */
    startDate: Date;
    /**
     * End date for the key (default empty)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification
     * of the attribute during the course of a `C_CopyObject` call.
     */
    endDate: Date;
    /**
     * `CK_TRUE` if key supports key derivation
     * (i.e., if other keys can be derived from this one (default `CK_FALSE`)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification
     * of the attribute during the course of a `C_CopyObject` call.
     * @returns boolean
     */
    derive: boolean;
    /**
     * `CK_TRUE` only if key was either * generated locally (i.e., on the token)
     * with a `C_GenerateKey` or `C_GenerateKeyPair` call * created with a `C_CopyObject` call
     * as a copy of a key which had its `CKA_LOCAL` attribute set to `CK_TRUE`
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    local: boolean;
    /**
     * Identifier of the mechanism used to generate the key material.
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    mechanism: KeyGenMechanism;
    allowedMechanisms: void;
}

/**
 * Private key objects (object declare class `CKO_PRIVATE_KEY`) hold private keys
 */
declare class PrivateKey extends Key {
    /**
     * DER-encoding of the key subject name (default empty)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     */
    subject: Buffer;
    /**
     * `CK_TRUE` if key is sensitive
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Attribute cannot be changed once set to CK_TRUE. It becomes a read only attribute.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    sensitive: boolean;
    /**
     * `CK_TRUE` if key supports decryption
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    decrypt: boolean;
    /**
     * `CK_TRUE` if key supports signatures where the signature is an appendix to the data
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    sign: boolean;
    /**
     * `CK_TRUE` if key supports signatures where the data can be recovered from the signature
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    signRecover: boolean;
    /**
     * `CK_TRUE` if key supports unwrapping (i.e., can be used to unwrap other keys)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    unwrap: boolean;
    /**
     * `CK_TRUE` if key is extractable and can be wrapped
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Attribute cannot be changed once set to `CK_FALSE`. It becomes a read only attribute.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    extractable: boolean;
    /**
     * `CK_TRUE` if key has always had the `CKA_SENSITIVE` attribute set to `CK_TRUE`
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    alwaysSensitive: boolean;
    /**
     * `CK_TRUE` if key has never had the `CKA_EXTRACTABLE` attribute set to `CK_TRUE`
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    neverExtractable: boolean;
    /**
     * `CK_TRUE` if the key can only be wrapped with a wrapping key
     * that has `CKA_TRUSTED` set to `CK_TRUE`. Default is `CK_FALSE`.
     * - Attribute cannot be changed once set to `CK_TRUE`. It becomes a read only attribute.
     */
    wrapTrusted: boolean;
    /**
     * For wrapping keys. The attribute template to apply to any keys unwrapped
     * using this wrapping key. Any user supplied template is applied after this template
     * as if the object has already been created.
     */
    template: void;
    alwaysAuthenticate: boolean;
}

/**
 * Public key objects (object declare class CKO_PUBLIC_KEY) hold public keys
 */
declare class PublicKey extends Key {
    /**
     * DER-encoding of the key subject name (default empty)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     */
    subject: Buffer;
    /**
     * `CK_TRUE` if key supports encryption
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    encrypt: boolean;
    /**
     * `CK_TRUE` if key supports verification where the signature is an appendix to the data
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    verify: boolean;
    /**
     * `CK_TRUE` if key supports verification where the data is recovered from the signature
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    verifyRecover: boolean;
    /**
     * `CK_TRUE` if key supports wrapping (i.e., can be used to wrap other keys)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    wrap: boolean;
    /**
     * The key can be trusted for the application that it was created.
     * - The wrapping key can be used to wrap keys with `CKA_WRAP_WITH_TRUSTED` set to `CK_TRUE`.
     * - Can only be set to CK_TRUE by the SO user.
     */
    trusted: boolean;
    /**
     * For wrapping keys. The attribute template to match against any keys wrapped using this wrapping key.
     * Keys that do not match cannot be wrapped.
     */
    template: void;
}

/**
 * Secret key objects (object declare class `CKO_SECRET_KEY`) hold secret keys.
 */
declare class SecretKey extends Key {
    /**
     * `CK_TRUE` if key is sensitive
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Attribute cannot be changed once set to `CK_TRUE`. It becomes a read only attribute.
     */
    sensitive: boolean;
    /**
     * `CK_TRUE` if key supports encryption
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    encrypt: boolean;
    /**
     * `CK_TRUE` if key supports decryption
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    decrypt: boolean;
    /**
     * `CK_TRUE` if key supports verification (i.e., of authentication codes) where the signature is an appendix to the data
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    verify: boolean;
    /**
     * 	`CK_TRUE` if key supports signatures (i.e., authentication codes) where the signature is an appendix to the data
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    sign: boolean;
    /**
     * `CK_TRUE` if key supports wrapping (i.e., can be used to wrap other keys)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    wrap: boolean;
    /**
     * `CK_TRUE` if key supports unwrapping (i.e., can be used to unwrap other keys)
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    unwrap: boolean;
    /**
     * `CK_TRUE` if key is extractable and can be wrapped
     * - May be modified after object is created with a `C_SetAttributeValue` call,
     * or in the process of copying object with a `C_CopyObject` call.
     * However, it is possible that a particular token may not permit modification of the attribute
     * during the course of a `C_CopyObject` call.
     * - Attribute cannot be changed once set to `CK_FALSE`. It becomes a read only attribute.
     * - Default value is token-specific, and may depend on the values of other attributes.
     */
    extractable: boolean;
    /**
     * `CK_TRUE` if key has always had the `CKA_SENSITIVE` attribute set to `CK_TRUE`
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    alwaysSensitive: boolean;
    /**
     * `CK_TRUE` if key has never had the `CKA_EXTRACTABLE` attribute set to `CK_TRUE`
     * - Must not be specified when object is created with `C_CreateObject`.
     * - Must not be specified when object is generated with `C_GenerateKey` or `C_GenerateKeyPair`.
     * - Must not be specified when object is unwrapped with `C_UnwrapKey`.
     */
    neverExtractable: boolean;
    /**
     * Key checksum
     */
    checkValue: Buffer;
    /**
     * `CK_TRUE` if the key can only be wrapped with a wrapping key
     * that has `CKA_TRUSTED` set to `CK_TRUE`. Default is `CK_FALSE`.
     * - Attribute cannot be changed once set to `CK_TRUE`. It becomes a read only attribute.
     */
    wrapTrusted: boolean;
    /**
     * The wrapping key can be used to wrap keys with `CKA_WRAP_WITH_TRUSTED` set to `CK_TRUE`.
     * - Can only be set to CK_TRUE by the SO user.
     */
    trusted: boolean;
    /**
     * For wrapping keys.
     * The attribute template to match against any keys wrapped using this wrapping key.
     * Keys that do not match cannot be wrapped.
     */
    wrapTemplate: void;
    /**
     * For wrapping keys.
     * The attribute template to apply to any keys unwrapped using this wrapping key.
     * Any user supplied template is applied after this template as if the object has already been created.
     */
    unwrapTemplate: void;
}

declare enum CertificateType {
    X_509,
    X_509_ATTR_CERT,
    WTLS,
}

declare enum CertificateCategory {
    Unspecified,
    TokenUser,
    Authority,
    OtherEntity,
}

/**
 * Certificate objects (object declare class CKO_CERTIFICATE) hold public-key or attribute certificates
 */
declare class Certificate extends Storage {
    /**
     * Type of certificate
     */
    type: CertificateType;
    /**
     * The certificate can be trusted for the application that it was created.
     */
    trusted: boolean;
    /**
     * Categorization of the certificate
     */
    category: CertificateCategory;
    /**
     * Checksum
     */
    checkValue: Buffer;
    /**
     * Start date for the certificate (default empty)
     */
    startDate: Date;
    /**
     * End date for the certificate (default empty)
     */
    endDate: Date;
}

/**
 * X.509 attribute certificate objects (certificate type `CKC_X_509_ATTR_CERT`) hold X.509 attribute certificates
 */
declare class AttributeCertificate extends Certificate {
    /**
     * DER-encoding of the attribute certificate's subject field.
     * This is distinct from the `CKA_SUBJECT` attribute contained in `CKC_X_509` certificates
     * because the `ASN.1` syntax and encoding are different.
     * - Must be specified when the object is created
     */
    owner: Buffer;
    /**
     * DER-encoding of the attribute certificate's issuer field.
     * This is distinct from the `CKA_ISSUER` attribute contained in `CKC_X_509` certificates
     * because the ASN.1 syntax and encoding are different. (default empty)
     */
    issuer: Buffer;
    /**
     * DER-encoding of the certificate serial number (default empty)
     */
    serialNumber: Buffer;
    /**
     * BER-encoding of a sequence of object identifier values corresponding
     * to the attribute types contained in the certificate.
     * When present, this field offers an opportunity for applications
     * to search for a particular attribute certificate without fetching
     * and parsing the certificate itself. (default empty)
     */
    types: Buffer;
    /**
     * BER-encoding of the certificate
     * - Must be specified when the object is created.
     */
    value: Buffer;
}

/**
 * WTLS certificate objects (certificate type `CKC_WTLS`) hold WTLS public key certificates
 */
declare class WtlsCertificate extends Certificate {
    /**
     * WTLS-encoding (Identifier type) of the certificate subject
     * - Must be specified when the object is created.
     * - Can only be empty if `CKA_VALUE` is empty.
     */
    subject: Buffer;
    /**
     * WTLS-encoding (Identifier type) of the certificate issuer (default empty)
     */
    issuer: Buffer;
    /**
     * Key identifier for public/private key pair (default empty)
     */
    id: Buffer;
    /**
     * WTLS-encoding of the certificate
     * - Must be specified when the object is created.
     * - Must be non-empty if `CKA_URL` is empty.
     */
    value: Buffer;
    /**
     * If not empty this attribute gives the URL where the complete certificate
     * can be obtained (default empty)
     * - Must be non-empty if `CKA_VALUE` is empty
     */
    url: string;
    /**
     * DER-encoding of the certificate serial number (default empty)
     */
    serialNumber: Buffer;
    /**
     * SHA-1 hash of the subject public key (default empty)
     * - Can only be empty if `CKA_URL` is empty.
     */
    subjetcKeyIdentifier: Buffer;
    /**
     * SHA-1 hash of the issuer public key (default empty)
     * - Can only be empty if `CKA_URL` is empty.
     */
    authorityKeyIdentifier: Buffer;
}

declare enum JavaMIDP {
    Unspecified,
    Manufacturer,
    Operator,
    ThirdParty,
}

/**
 * X.509 certificate objects (certificate type `CKC_X_509`) hold X.509 public key certificates
 */
declare class X509Certificate extends Certificate {
    /**
     * DER-encoding of the certificate subject name
     * - Must be specified when the object is created.
     * - Must be non-empty if `CKA_URL` is empty.
     */
    subject: Buffer;
    /**
     * Key identifier for public/private key pair (default empty)
     */
    id: Buffer;
    /**
     * DER-encoding of the certificate issuer name (default empty)
     */
    issuer: Buffer;
    /**
     * HEX-encoding of the certificate serial number (default empty)
     */
    serialNumber: string;
    /**
     * BER-encoding of the certificate
     * - Must be specified when the object is created.
     * - Must be non-empty if `CKA_URL` is empty.
     */
    value: Buffer;
    /**
     * If not empty this attribute gives the URL where the complete certificate
     * can be obtained (default empty)
     * - Must be non-empty if `CKA_VALUE` is empty
     */
    url: string;
    /**
     * SHA-1 hash of the subject public key (default empty)
     * - Can only be empty if `CKA_URL` is empty.
     */
    subjetcKeyIdentifier: Buffer;
    /**
     * SHA-1 hash of the issuer public key (default empty)
     * - Can only be empty if `CKA_URL` is empty.
     */
    authorityKeyIdentifier: Buffer;
    /**
     * Java MIDP security domain
     */
    java: JavaMIDP;
}

interface IAlgorithm {
    name: string;
    params: Buffer | IParams;
}

type MechanismType = MechanismEnum | KeyGenMechanism | IAlgorithm | string;

declare enum MechanismFlag {
    /**
     * `True` if the mechanism is performed by the device; `false` if the mechanism is performed in software
     */
    HW,
    /**
     * `True` if the mechanism can be used with encrypt function
     */
    ENCRYPT,
    /**
     * `True` if the mechanism can be used with decrypt function
     */
    DECRYPT,
    /**
     * `True` if the mechanism can be used with digest function
     */
    DIGEST,
    /**
     * `True` if the mechanism can be used with sign function
     */
    SIGN,
    /**
     * `True` if the mechanism can be used with sign recover function
     */
    SIGN_RECOVER,
    /**
     * `True` if the mechanism can be used with verify function
     */
    VERIFY,
    /**
     * `True` if the mechanism can be used with verify recover function
     */
    VERIFY_RECOVER,
    /**
     * `True` if the mechanism can be used with geberate function
     */
    GENERATE,
    /**
     * `True` if the mechanism can be used with generate key pair function
     */
    GENERATE_KEY_PAIR,
    /**
     * `True` if the mechanism can be used with wrap function
     */
    WRAP,
    /**
     * `True` if the mechanism can be used with unwrap function
     */
    UNWRAP,
    /**
     * `True` if the mechanism can be used with derive function
     */
    DERIVE,
}

declare class Mechanism extends BaseObject {

    protected handle: number;
    protected slotHandle: Handle;

    /**
     * the minimum size of the key for the mechanism
     * _whether this is measured in bits or in bytes is mechanism-dependent_
     */
    minKeySize: number;
    /**
     * the maximum size of the key for the mechanism
     * _whether this is measured in bits or in bytes is mechanism-dependent_
     */
    maxKeySize: number;
    /**
     * bit flag specifying mechanism capabilities
     */
    flags: number;
    /**
     * returns string name from MechanismEnum
     */
    name: string;

    constructor(handle: number, slotHandle: Handle, lib: pkcs11.PKCS11);

    protected getInfo(): void;

    static create(alg: MechanismType): pkcs11.Mechanism;
    static vendor(jsonFile: string): void;
    static vendor(name: string, value: number): void;
}

declare class MechanismCollection extends Collection<Mechanism> {

    protected slotHandle: Handle;

    constructor(items: Array<number>, slotHandle: Handle, lib: pkcs11.PKCS11, classType?: typeof Mechanism);
    /**
     * returns item from collection by index
     * @param {number} index of element in collection `[0..n]`
     */
    items(index: number): Mechanism;
}

declare enum MechanismEnum {
    RSA_PKCS_KEY_PAIR_GEN,
    RSA_PKCS,
    RSA_9796,
    RSA_X_509,
    MD2_RSA_PKCS,
    MD5_RSA_PKCS,
    SHA1_RSA_PKCS,
    RIPEMD128_RSA_PKCS,
    RIPEMD160_RSA_PKCS,
    RSA_PKCS_OAEP,
    RSA_X9_31_KEY_PAIR_GEN,
    RSA_X9_31,
    SHA1_RSA_X9_31,
    RSA_PKCS_PSS,
    SHA1_RSA_PKCS_PSS,
    DSA_KEY_PAIR_GEN,
    DSA,
    DSA_SHA1,
    DSA_SHA224,
    DSA_SHA256,
    DSA_SHA384,
    DSA_SHA512,
    DH_PKCS_KEY_PAIR_GEN,
    DH_PKCS_DERIVE,
    X9_42_DH_KEY_PAIR_GEN,
    X9_42_DH_DERIVE,
    X9_42_DH_HYBRID_DERIVE,
    X9_42_MQV_DERIVE,
    SHA256_RSA_PKCS,
    SHA384_RSA_PKCS,
    SHA512_RSA_PKCS,
    SHA256_RSA_PKCS_PSS,
    SHA384_RSA_PKCS_PSS,
    SHA512_RSA_PKCS_PSS,
    SHA224_RSA_PKCS,
    SHA224_RSA_PKCS_PSS,
    RC2_KEY_GEN,
    RC2_ECB,
    RC2_CBC,
    RC2_MAC,
    RC2_MAC_GENERAL,
    RC2_CBC_PAD,
    RC4_KEY_GEN,
    RC4,
    DES_KEY_GEN,
    DES_ECB,
    DES_CBC,
    DES_MAC,
    DES_MAC_GENERAL,
    DES_CBC_PAD,
    DES2_KEY_GEN,
    DES3_KEY_GEN,
    DES3_ECB,
    DES3_CBC,
    DES3_MAC,
    DES3_MAC_GENERAL,
    DES3_CBC_PAD,
    CDMF_KEY_GEN,
    CDMF_ECB,
    CDMF_CBC,
    CDMF_MAC,
    CDMF_MAC_GENERAL,
    CDMF_CBC_PAD,
    DES_OFB64,
    DES_OFB8,
    DES_CFB64,
    DES_CFB8,
    MD2,
    MD2_HMAC,
    MD2_HMAC_GENERAL,
    MD5,
    MD5_HMAC,
    MD5_HMAC_GENERAL,
    SHA1,
    SHA,
    SHA_1,
    SHA_1_HMAC,
    SHA_1_HMAC_GENERAL,
    RIPEMD128,
    RIPEMD128_HMAC,
    RIPEMD128_HMAC_GENERAL,
    RIPEMD160,
    RIPEMD160_HMAC,
    RIPEMD160_HMAC_GENERAL,
    SHA256,
    SHA256_HMAC,
    SHA256_HMAC_GENERAL,
    SHA224,
    SHA224_HMAC,
    SHA224_HMAC_GENERAL,
    SHA384,
    SHA384_HMAC,
    SHA384_HMAC_GENERAL,
    SHA512,
    SHA512_HMAC,
    SHA512_HMAC_GENERAL,
    SECURID_KEY_GEN,
    SECURID,
    HOTP_KEY_GEN,
    HOTP,
    ACTI,
    ACTI_KEY_GEN,
    CAST_KEY_GEN,
    CAST_ECB,
    CAST_CBC,
    CAST_MAC,
    CAST_MAC_GENERAL,
    CAST_CBC_PAD,
    CAST3_KEY_GEN,
    CAST3_ECB,
    CAST3_CBC,
    CAST3_MAC,
    CAST3_MAC_GENERAL,
    CAST3_CBC_PAD,
    CAST5_KEY_GEN,
    CAST128_KEY_GEN,
    CAST5_ECB,
    CAST128_ECB,
    CAST5_CBC,
    CAST128_CBC,
    CAST5_MAC,
    CAST128_MAC,
    CAST5_MAC_GENERAL,
    CAST128_MAC_GENERAL,
    CAST5_CBC_PAD,
    CAST128_CBC_PAD,
    RC5_KEY_GEN,
    RC5_ECB,
    RC5_CBC,
    RC5_MAC,
    RC5_MAC_GENERAL,
    RC5_CBC_PAD,
    IDEA_KEY_GEN,
    IDEA_ECB,
    IDEA_CBC,
    IDEA_MAC,
    IDEA_MAC_GENERAL,
    IDEA_CBC_PAD,
    GENERIC_SECRET_KEY_GEN,
    CONCATENATE_BASE_AND_KEY,
    CONCATENATE_BASE_AND_DATA,
    CONCATENATE_DATA_AND_BASE,
    XOR_BASE_AND_DATA,
    EXTRACT_KEY_FROM_KEY,
    SSL3_PRE_MASTER_KEY_GEN,
    SSL3_MASTER_KEY_DERIVE,
    SSL3_KEY_AND_MAC_DERIVE,
    SSL3_MASTER_KEY_DERIVE_DH,
    TLS_PRE_MASTER_KEY_GEN,
    TLS_MASTER_KEY_DERIVE,
    TLS_KEY_AND_MAC_DERIVE,
    TLS_MASTER_KEY_DERIVE_DH,
    TLS_PRF,
    SSL3_MD5_MAC,
    SSL3_SHA1_MAC,
    MD5_KEY_DERIVATION,
    MD2_KEY_DERIVATION,
    SHA1_KEY_DERIVATION,
    SHA256_KEY_DERIVATION,
    SHA384_KEY_DERIVATION,
    SHA512_KEY_DERIVATION,
    SHA224_KEY_DERIVATION,
    PBE_MD2_DES_CBC,
    PBE_MD5_DES_CBC,
    PBE_MD5_CAST_CBC,
    PBE_MD5_CAST3_CBC,
    PBE_MD5_CAST5_CBC,
    PBE_MD5_CAST128_CBC,
    PBE_SHA1_CAST5_CBC,
    PBE_SHA1_CAST128_CBC,
    PBE_SHA1_RC4_128,
    PBE_SHA1_RC4_40,
    PBE_SHA1_DES3_EDE_CBC,
    PBE_SHA1_DES2_EDE_CBC,
    PBE_SHA1_RC2_128_CBC,
    PBE_SHA1_RC2_40_CBC,
    PKCS5_PBKD2,
    PBA_SHA1_WITH_SHA1_HMAC,
    WTLS_PRE_MASTER_KEY_GEN,
    WTLS_MASTER_KEY_DERIVE,
    WTLS_MASTER_KEY_DERIVE_DH_ECC,
    WTLS_PRF,
    WTLS_SERVER_KEY_AND_MAC_DERIVE,
    WTLS_CLIENT_KEY_AND_MAC_DERIVE,
    KEY_WRAP_LYNKS,
    KEY_WRAP_SET_OAEP,
    CAMELLIA_KEY_GEN,
    CAMELLIA_ECB,
    CAMELLIA_CBC,
    CAMELLIA_MAC,
    CAMELLIA_MAC_GENERAL,
    CAMELLIA_CBC_PAD,
    CAMELLIA_ECB_ENCRYPT_DATA,
    CAMELLIA_CBC_ENCRYPT_DATA,
    CAMELLIA_CTR,
    ARIA_KEY_GEN,
    ARIA_ECB,
    ARIA_CBC,
    ARIA_MAC,
    ARIA_MAC_GENERAL,
    ARIA_CBC_PAD,
    ARIA_ECB_ENCRYPT_DATA,
    ARIA_CBC_ENCRYPT_DATA,
    SKIPJACK_KEY_GEN,
    SKIPJACK_ECB64,
    SKIPJACK_CBC64,
    SKIPJACK_OFB64,
    SKIPJACK_CFB64,
    SKIPJACK_CFB32,
    SKIPJACK_CFB16,
    SKIPJACK_CFB8,
    SKIPJACK_WRAP,
    SKIPJACK_PRIVATE_WRAP,
    SKIPJACK_RELAYX,
    KEA_KEY_PAIR_GEN,
    KEA_KEY_DERIVE,
    FORTEZZA_TIMESTAMP,
    BATON_KEY_GEN,
    BATON_ECB128,
    BATON_ECB96,
    BATON_CBC128,
    BATON_COUNTER,
    BATON_SHUFFLE,
    BATON_WRAP,
    ECDSA_KEY_PAIR_GEN,
    EC_KEY_PAIR_GEN,
    ECDSA,
    ECDSA_SHA1,
    ECDSA_SHA224,
    ECDSA_SHA256,
    ECDSA_SHA384,
    ECDSA_SHA512,
    ECDH1_DERIVE,
    ECDH1_COFACTOR_DERIVE,
    ECMQV_DERIVE,
    JUNIPER_KEY_GEN,
    JUNIPER_ECB128,
    JUNIPER_CBC128,
    JUNIPER_COUNTER,
    JUNIPER_SHUFFLE,
    JUNIPER_WRAP,
    FASTHASH,
    AES_KEY_GEN,
    AES_ECB,
    AES_CBC,
    AES_MAC,
    AES_MAC_GENERAL,
    AES_CBC_PAD,
    AES_CTR,
    AES_CMAC,
    AES_CMAC_GENERAL,
    BLOWFISH_KEY_GEN,
    BLOWFISH_CBC,
    TWOFISH_KEY_GEN,
    TWOFISH_CBC,
    AES_GCM,
    AES_CCM,
    AES_KEY_WRAP,
    AES_KEY_WRAP_PAD,
    DES_ECB_ENCRYPT_DATA,
    DES_CBC_ENCRYPT_DATA,
    DES3_ECB_ENCRYPT_DATA,
    DES3_CBC_ENCRYPT_DATA,
    AES_ECB_ENCRYPT_DATA,
    AES_CBC_ENCRYPT_DATA,
    GOSTR3410_KEY_PAIR_GEN,
    GOSTR3410,
    GOSTR3410_WITH_GOSTR3411,
    GOSTR3410_KEY_WRAP,
    GOSTR3410_DERIVE,
    GOSTR3411,
    GOSTR3411_HMAC,
    GOST28147_KEY_GEN,
    GOST28147_ECB,
    GOST28147,
    GOST28147_MAC,
    GOST28147_KEY_WRAP,
    DSA_PARAMETER_GEN,
    DH_PKCS_PARAMETER_GEN,
    X9_42_DH_PARAMETER_GEN,
    VENDOR_DEFINED,
}

declare enum SessionFlag {
    /**
     * `True` if the session is read/write; `false` if the session is read-only
     */
    RW_SESSION,
    /**
     * This flag is provided for backward compatibility, and should always be set to `true`
     */
    SERIAL_SESSION,
}

declare enum UserType {
    /**
     * Security Officer
     */
    SO,
    /**
     * User
     */
    USER,
    /**
     * Context specific
     */
    CONTEXT_SPECIFIC,
}

interface IKeyPair {
    privateKey: PrivateKey;
    publicKey: PublicKey;
}

/**
 * provides information about a session
 *
 * @export
 * @declare class Session
 * @extends {core.HandleObject}
 */
declare class Session extends HandleObject {

    constructor(handle: Handle, slot: Slot, lib: pkcs11.PKCS11);
    /**
     * Slot
     *
     * @type {Slot}
     */
    slot: Slot;
    /**
     * the state of the session
     *
     * @type {number}
     */
    state: number;
    /**
     * bit flags that define the type of session
     *
     * @type {number}
     */
    flags: number;
    /**
     * an error code defined by the cryptographic device. Used for errors not covered by Cryptoki
     *
     * @type {number}
     */
    deviceError: number;

    protected getInfo(): void;

    /**
     * closes a session between an application and a token
     */
    close(): void;
    /**
     * initializes the normal user's PIN
     * @param {string} pin the normal user's PIN
     */
    initPin(pin: string): void;
    /**
     * modifies the PIN of the user who is logged in
     * @param {string} oldPin
     * @param {string} newPin
     */
    setPin(oldPin: string, newPin: string): void;
    /**
     * obtains a copy of the cryptographic operations state of a session, encoded as a string of bytes
     */
    getOperationState(): Buffer;
    /**
     * restores the cryptographic operations state of a session
     * from a string of bytes obtained with getOperationState
     * @param {Buffer} state the saved state
     * @param {number} encryptionKey holds key which will be used for an ongoing encryption
     * or decryption operation in the restored session
     * (or 0 if no encryption or decryption key is needed,
     * either because no such operation is ongoing in the stored session
     * or because all the necessary key information is present in the saved state)
     * @param {number} authenticationKey holds a handle to the key which will be used for an ongoing signature,
     * MACing, or verification operation in the restored session
     * (or 0 if no such key is needed, either because no such operation is ongoing in the stored session
     * or because all the necessary key information is present in the saved state)
     */
    setOperationState(state: Buffer, encryptionKey?: number, authenticationKey?: number): void;
    /**
     * logs a user into a token
     * @param {string} pin the user's PIN.
     * - This standard allows PIN values to contain any valid `UTF8` character,
     * but the token may impose subset restrictions
     * @param {} userType the user type. Default is `USER`
     */
    login(pin: string, userType?: UserType): void;
    /**
     * logs a user out from a token
     */
    logout(): void;
    /**
     * creates a new object
     * - Only session objects can be created during a read-only session.
     * - Only public objects can be created unless the normal user is logged in.
     * @param {ITemplate} template the object's template
     * @returns {SessionObject}
     */
    create(template: ITemplate): SessionObject;
    /**
     * Copies an object, creating a new object for the copy
     * @param {SessionObject} object the copied object
     * @param {ITemplate} template template for new object
     * @returns {SessionObject}
     */
    copy(object: SessionObject, template: ITemplate): SessionObject;
    /**
     * removes all session objects matched to template
     * - if template is null, removes all session objects
     * - returns a number of destroied session objects
     * @param {ITemplate} template template
     */
    destroy(template: ITemplate): number;
    /**
     * @param {SessionObject} object
     */
    destroy(object: SessionObject): number;
    destroy(): number;
    /**
     * removes all session objects
     * - returns a number of destroied session objects
     */
    clear(): number;
    /**
     * returns a collection of session objects mached to template
     * @param template template
     * @param callback optional callback function wich is called for each founded object
     * - if callback function returns false, it breaks find function.
     */
    find(callback?: (obj: SessionObject) => any): SessionObjectCollection;
    find(template: ITemplate, callback?: (obj: SessionObject, index: number) => any): SessionObjectCollection;
    /**
     * Returns object from session by handle
     * @param  {number} handle handle of object
     * @returns T
     */
    getObject<T extends SessionObject>(handle: Handle): T;
    /**
     * generates a secret key or set of domain parameters, creating a new object.
     * @param mechanism generation mechanism
     * @param template template for the new key or set of domain parameters
     */
    generateKey(mechanism: MechanismType, template?: ITemplate): SecretKey;
    generateKey(mechanism: MechanismType, template: ITemplate, callback: (err: Error, key: SecretKey) => void): void;
    generateKeyPair(mechanism: MechanismType, publicTemplate: ITemplate, privateTemplate: ITemplate): IKeyPair;
    generateKeyPair(mechanism: MechanismType, publicTemplate: ITemplate, privateTemplate: ITemplate, callback: (err: Error, keys: IKeyPair) => void): void;
    createSign(alg: MechanismType, key: Key): Sign;
    createVerify(alg: MechanismType, key: Key): Verify;
    createCipher(alg: MechanismType, key: Key): Cipher;
    createDecipher(alg: MechanismType, key: Key, blockSize?: number): Decipher;
    createDigest(alg: MechanismType): Digest;
    wrapKey(alg: MechanismType, wrappingKey: Key, key: Key): Buffer;
    wrapKey(alg: MechanismType, wrappingKey: Key, key: Key, callback: (err: Error, wkey: Buffer) => void): void;
    unwrapKey(alg: MechanismType, unwrappingKey: Key, wrappedKey: Buffer, template: ITemplate): Key;
    unwrapKey(alg: MechanismType, unwrappingKey: Key, wrappedKey: Buffer, template: ITemplate, callback: (err: Error, key: Key) => void): void;
    /**
     * derives a key from a base key, creating a new key object
     * @param {MechanismType} alg key deriv. mech
     * @param {Key} baseKey base key
     * @param {ITemplate} template new key template
     */
    deriveKey(alg: MechanismType, baseKey: Key, template: ITemplate): SecretKey;
    deriveKey(alg: MechanismType, baseKey: Key, template: ITemplate, callback: (err: Error, key: Key) => void): void;
    /**
     * generates random data
     * @param {number} size \# of bytes to generate
     */
    generateRandom(size: number): Buffer;
}

interface ITemplate {
    /**
     * CKA_CLASS
     */
    class?: number;
    /**
     * CKA_TOKEN
     */
    token?: boolean;
    /**
     * CKA_PRIVATE
     */
    private?: boolean;
    /**
     * CKA_LABEL
     */
    label?: string;
    /**
     * CKA_APPLICATION
     */
    application?: string;
    /**
     * CKA_VALUE
     */
    value?: Buffer;
    /**
     * CKA_OBJECT_ID
     */
    objectId?: Buffer;
    /**
     * CKA_CERTIFICATE_TYPE
     */
    certType?: number;
    /**
     * CKA_ISSUER
     */
    issuer?: Buffer;
    /**
     * CKA_SERIAL_NUMBER
     */
    serial?: Buffer;
    /**
     * CKA_AC_ISSUER
     */
    issuerAC?: Buffer;
    /**
     * CKA_OWNER
     */
    owner?: Buffer;
    /**
     * CKA_ATTR_TYPES
     */
    attrTypes?: Buffer;
    /**
     * CKA_TRUSTED
     */
    trusted?: boolean;
    /**
     * CKA_CERTIFICATE_CATEGORY
     */
    certCategory?: number;
    /**
     * CKA_JAVA_MIDP_SECURITY_DOMAIN
     */
    javaDomain?: number;
    /**
     * CKA_URL
     */
    url?: string;
    /**
     * CKA_HASH_OF_SUBJECT_PUBLIC_KEY
     */
    ski?: Buffer;
    /**
     * CKA_HASH_OF_ISSUER_PUBLIC_KEY
     */
    aki?: Buffer;
    /**
     * CKA_NAME_HASH_ALGORITHM
     */
    digestName?: number;
    /**
     * CKA_CHECK_VALUE
     */
    checkValue?: Buffer;
    /**
     * CKA_KEY_TYPE
     */
    keyType?: number;
    /**
     * CKA_SUBJECT
     */
    subject?: Buffer;
    /**
     * CKA_ID
     */
    id?: Buffer;
    /**
     * CKA_SENSITIVE
     */
    sensitive?: boolean;
    /**
     * CKA_ENCRYPT
     */
    encrypt?: boolean;
    /**
     * CKA_DECRYPT
     */
    decrypt?: boolean;
    /**
     * CKA_WRAP
     */
    wrap?: boolean;
    /**
     * CKA_UNWRAP
     */
    unwrap?: boolean;
    /**
     * CKA_SIGN
     */
    sign?: boolean;
    /**
     * CKA_SIGN_RECOVER
     */
    signRecover?: boolean;
    /**
     * CKA_VERIFY
     */
    verify?: boolean;
    /**
     * CKA_VERIFY_RECOVER
     */
    verifyRecover?: boolean;
    /**
     * CKA_DERIVE
     */
    derive?: boolean;
    /**
     * CKA_START_DATE
     */
    startDate?: Date;
    /**
     * CKA_END_DATE
     */
    endDate?: Date;
    /**
     * CKA_MODULUS
     */
    modulus?: Buffer;
    /**
     * CKA_MODULUS_BITS
     */
    modulusBits?: number;
    /**
     * CKA_PUBLIC_EXPONENT
     */
    publicExponent?: Buffer;
    /**
     * CKA_PRIVATE_EXPONEN
     */
    privateExponent?: Buffer;
    /**
     * CKA_PRIME_1
     */
    prime1?: Buffer;
    /**
     * CKA_PRIME_2
     */
    prime2?: Buffer;
    /**
     * CKA_EXPONENT_1
     */
    exp1?: Buffer;
    /**
     * CKA_EXPONENT_2
     */
    exp2?: Buffer;
    /**
     * CKA_COEFFICIEN
     */
    coefficient?: Buffer;
    /**
     * CKA_PRIME
     */
    prime?: Buffer;
    /**
     * CKA_SUBPRIME
     */
    subprime?: Buffer;
    /**
     * CKA_BASE
     */
    base?: Buffer;
    /**
     * CKA_PRIME_BITS
     */
    primeBits?: number;
    /**
     * CKA_SUBPRIME_BITS
     */
    subprimeBits?: number;
    /**
     * CKA_VALUE_BITS
     */
    valueBits?: number;
    /**
     * CKA_VALUE_LEN
     */
    valueLen?: number;
    /**
     * CKA_EXTRACTABLE
     */
    extractable?: boolean;
    /**
     * CKA_LOCAL
     */
    local?: boolean;
    /**
     * CKA_NEVER_EXTRACTABLE
     */
    neverExtractable?: boolean;
    /**
     * CKA_ALWAYS_SENSITIVE
     */
    alwaysSensitive?: boolean;
    /**
     * CKA_KEY_GEN_MECHANISM
     */
    keyGenMechanism?: number;
    /**
     * CKA_MODIFIABLE
     */
    modifiable?: boolean;
    /**
     * CKA_COPYABLE
     */
    copyable?: boolean;
    /**
     * CKA_ECDSA_PARAMS
     */
    paramsECDSA?: Buffer;
    paramsEC?: Buffer;
    /**
     * CKA_EC_POINT
     */
    pointEC?: Buffer;
    /**
     * CKA_SECONDARY_AUTH
     */
    secondaryAuth?: boolean;
    /**
     * CKA_AUTH_PIN_FLAGS
     */
    authPinFlags?: Buffer;
    /**
     * CKA_ALWAYS_AUTHENTICATE
     */
    alwaysAuth?: boolean;
    /**
     * CKA_WRAP_WITH_TRUSTED
     */
    wrapWithTrusted?: boolean;
    /**
     * CKA_WRAP_TEMPLATE
     */
    wrapTemplate?: any;
    /**
     * CKA_UNWRAP_TEMPLATE
     */
    unwrapTemplate?: any;
    /**
     * CKA_OTP_FORMAT
     */
    otpFormat?: any;
    /**
     * CKA_OTP_LENGTH
     */
    otpLength?: any;
    /**
     * CKA_OTP_TIME_INTERVAL
     */
    otpTimeInterval?: any;
    /**
     * CKA_OTP_USER_FRIENDLY_MODE
     */
    otpUserFriendlyMode?: any;
    /**
     * CKA_OTP_CHALLENGE_REQUIREMENT
     */
    otpChallengeReq?: any;
    /**
     * CKA_OTP_TIME_REQUIREMENT
     */
    otpTimeReq?: any;
    /**
     * CKA_OTP_COUNTER_REQUIREMENT
     */
    otpCounterReq?: any;
    /**
     * CKA_OTP_PIN_REQUIREMENT
     */
    otppinReq?: any;
    /**
     * CKA_OTP_COUNTER
     */
    otpCounter?: any;
    /**
     * CKA_OTP_TIME
     */
    otpTime?: any;
    /**
     * CKA_OTP_USER_IDENTIFIER
     */
    otpUserId?: any;
    /**
     * CKA_OTP_SERVICE_IDENTIFIER
     */
    otpServiceId?: any;
    /**
     * CKA_OTP_SERVICE_LOGO
     */
    otpServiceLogo?: any;
    /**
     * CKA_OTP_SERVICE_LOGO_TYPE
     */
    otpServiceLogoType?: any;
    /**
     * CKA_HW_FEATURE_TYPE
     */
    hwFeatureType?: any;
    /**
     * CKA_RESET_ON_INIT
     */
    resetOnInit?: any;
    /**
     * CKA_HAS_RESET
     */
    hasReset?: any;
    /**
     * CKA_PIXEL_X
     */
    pixelX?: any;
    /**
     * CKA_PIXEL_Y
     */
    pixelY?: any;
    /**
     * CKA_RESOLUTION
     */
    resolution?: any;
    /**
     * CKA_CHAR_ROWS
     */
    charRows?: any;
    /**
     * CKA_CHAR_COLUMNS
     */
    charCols?: any;
    /**
     * CKA_COLOR
     */
    color?: any;
    /**
     * CKA_BITS_PER_PIXEL
     */
    bitsPerPixel?: any;
    /**
     * CKA_CHAR_SETS
     */
    charSets?: any;
    /**
     * CKA_ENCODING_METHODS
     */
    encMethod?: any;
    /**
     * CKA_MIME_TYPES
     */
    mimeTypes?: any;
    /**
     * CKA_MECHANISM_TYPE
     */
    mechanismType?: any;
    /**
     * CKA_REQUIRED_CMS_ATTRIBUTES
     */
    requiredCmsAttrs?: any;
    /**
     * CKA_DEFAULT_CMS_ATTRIBUTES
     */
    defaultCmsAttrs?: any;
    /**
     * CKA_SUPPORTED_CMS_ATTRIBUTES
     */
    suportedCmsAttrs?: any;
    /**
     * CKA_ALLOWED_MECHANISMS
     */
    allowedMechanisms?: any;
}

declare class Template {
    static toPkcs11(tmpl: ITemplate): pkcs11.Attribute[];
    static fromPkcs11(tmpl: pkcs11.Template): ITemplate;
}

declare enum SlotFlag {
    /**
     * `True` if a token is present in the slot (e.g., a device is in the reader)
     */
    TOKEN_PRESENT,
    /**
     * `True` if the reader supports removable devices
     */
    REMOVABLE_DEVICE,
    /**
     * True if the slot is a hardware slot, as opposed to a software slot implementing a "soft token"
     */
    HW_SLOT,
}
declare class Slot extends HandleObject {

    slotDescription: string;
    manufacturerID: string;
    flags: number;
    hardwareVersion: pkcs11.Version;
    firmwareVersion: pkcs11.Version;
    module: Module;

    constructor(handle: Handle, module: Module, lib: pkcs11.PKCS11);

    /**
     * Recieve information about Slot
     *
     * @protected
     */
    protected getInfo(): void;

    /**
     * Returns information about token
     *
     * @returns {Token}
     */
    getToken(): Token;
    /**
     * returns list of `MechanismInfo`
     *
     * @returns {MechanismCollection}
     */
    getMechanisms(): MechanismCollection;
    /**
     * initializes a token
     *
     * @param {string} pin the SO's initial PIN
     * @returns {string}
     */
    initToken(pin: string): string;
    /**
     * opens a session between an application and a token in a particular slot
     *
     * @param {SessionFlag} [flags=session.SessionFlag.SERIAL_SESSION] indicates the type of session
     * @returns {Session}
     */
    open(flags?: SessionFlag): Session;
    /**
     * closes all sessions an application has with a token
     */
    closeAll(): void;
}

/**
 * Collection of slots
 *
 * @export
 * @declare class SlotCollection
 * @extends {core.Collection<Slot>}
 */
declare class SlotCollection extends Collection<Slot> {
    module: Module;
    items(index: number): Slot;
    constructor(items: Array<Buffer>, module: Module, lib: pkcs11.PKCS11, classType?: any);
}

declare enum TokenFlag {
    RNG,
    WRITE_PROTECTED,
    LOGIN_REQUIRED,
    USER_PIN_INITIALIZED,
    RESTORE_KEY_NOT_NEEDED,
    CLOCK_ON_TOKEN,
    PROTECTED_AUTHENTICATION_PATH,
    DUAL_CRYPTO_OPERATIONS,
    TOKEN_INITIALIZED,
    SECONDARY_AUTHENTICATION,
    USER_PIN_COUNT_LOW,
    USER_PIN_FINAL_TRY,
    USER_PIN_LOCKED,
    USER_PIN_TO_BE_CHANGED,
    SO_PIN_COUNT_LOW,
    SO_PIN_FINAL_TRY,
    SO_PIN_LOCKED,
    SO_PIN_TO_BE_CHANGED,
    ERROR_STATE,
}

declare class Token extends HandleObject {
    /**
     * application-defined label, assigned during token initialization.
     * - Must be padded with the blank character (' ').
     * - Should __not__ be null-terminated.
     */
    label: string;
    /**
     * ID of the device manufacturer.
     * - Must be padded with the blank character (' ').
     * - Should __not__ be null-terminated.
     */
    manufacturerID: string;
    /**
     * model of the device.
     * - Must be padded with the blank character (' ').
     * - Should __not__ be null-terminated.
     */
    model: string;
    /**
     * character-string serial number of the device.
     * - Must be padded with the blank character (' ').
     * - Should __not__ be null-terminated.
     */
    serialNumber: string;
    /**
     * bit flags indicating capabilities and status of the device
     */
    flags: number;
    /**
     * maximum number of sessions that can be opened with the token at one time by a single application
     */
    maxSessionCount: number;
    /**
     * number of sessions that this application currently has open with the token
     */
    sessionCount: number;
    /**
     * maximum number of read/write sessions that can be opened
     * with the token at one time by a single application
     */
    maxRwSessionCount: number;
    /**
     * number of read/write sessions that this application currently has open with the token
     */
    rwSessionCount: number;
    /**
     * maximum length in bytes of the PIN
     */
    maxPinLen: number;
    /**
     * minimum length in bytes of the PIN
     */
    minPinLen: number;
    /**
     * the total amount of memory on the token in bytes in which public objects may be stored
     */
    totalPublicMemory: number;
    /**
     * the amount of free (unused) memory on the token in bytes for public objects
     */
    freePublicMemory: number;
    /**
     * the total amount of memory on the token in bytes in which private objects may be stored
     */
    totalPrivateMemory: number;
    /**
     * the amount of free (unused) memory on the token in bytes for private objects
     */
    freePrivateMemory: number;
    /**
     * version number of hardware
     */
    hardwareVersion: pkcs11.Version;
    /**
     * version number of firmware
     */
    firmwareVersion: pkcs11.Version;
    /**
     * current time as a character-string of length 16,
     * represented in the format YYYYMMDDhhmmssxx
     */
    utcTime: Date;

    constructor(handle: Handle, lib: pkcs11.PKCS11);

    protected getInfo(): void;
}

declare class Module extends BaseObject {
    libFile: string;
    libName: string;
    /**
     * Cryptoki interface version
     */
    cryptokiVersion: pkcs11.Version;
    /**
     * blank padded manufacturer ID
     */
    manufacturerID: string;
    /**
     * must be zero
     */
    flags: number;
    /**
     * blank padded library description
     */
    libraryDescription: string;
    /**
     * version of library
     */
    libraryVersion: pkcs11.Version;
    constructor(lib: pkcs11.PKCS11);
    protected getInfo(): void;
    /**
     * initializes the Cryptoki library
     */
    initialize(): void;
    /**
     * indicates that an application is done with the Cryptoki library
     */
    finalize(): void;
    /**
     * obtains a list of slots in the system
     * @param {number} index index of an element in collection
     * @param {number} tokenPresent only slots with tokens. Default `True`
     */
    getSlots(index: number, tokenPresent?: boolean): Slot;
    /**
     * @param {number} tokenPresent only slots with tokens. Default `True`
     */
    getSlots(tokenPresent?: boolean): SlotCollection;
    /**
     * loads pkcs11 lib
     * @param libFile path to PKCS11 library
     * @param libName name of PKCS11 library
     */
    static load(libFile: string, libName?: string): Module;
}
