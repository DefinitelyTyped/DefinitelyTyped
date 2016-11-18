// Type definitions for pkcs11js v1.0.3
// Project: https://github.com/PeculiarVentures/pkcs11js
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

/**
 * A Node.js implementation of the PKCS#11 2.3 interface
 * v1.0.3
 */

type Handle = Buffer;


interface Version {
    major: number;
    minor: number;
}

interface ModuleInfo {
    cryptokiVersion: Version;
    manufacturerID: string;
    flags: number;
    libraryDescription: string;
    libraryVersion: Version;
}

interface SlotInfo {
    slotDescription: string;
    manufacturerID: string;
    flags: number;
    hardwareVersion: Version;
    firmwareVersion: Version
}

interface TokenInfo {
    label: string;
    manufacturerID: string;
    model: string;
    serialNumber: string;
    flags: number;
    maxSessionCount: number;
    sessionCount: number;
    maxRwSessionCount: number;
    rwSessionCount: number;
    maxPinLen: number;
    minPinLen: number;
    hardwareVersion: Version;
    firmwareVersion: Version;
    utcTime: string
    totalPublicMemory: number;
    freePublicMemory: number;
    totalPrivateMemory: number;
    freePrivateMemory: number;
}

interface MechanismInfo {
    minKeySize: number;
    maxKeySize: number;
    flags: number;
}

interface SessionInfo {
    slotID: number;
    state: number;
    flags: number;
    deviceError: number;
}

type Template = Attribute[];

interface Attribute {
    type: number;
    value?: number | boolean | string | Buffer;
}

interface Mechanism {
    mechanism: number;
    parameter: Buffer | IParapms;
}

// Crpto parameters

interface IParapms {
    /**
     * Type of crypto param. Uses consts CK_PARAMS_* 
     * 
     * @type {number}
     */
    type: number;
}

interface ECDH1 extends IParapms {
    kdf: number;
    sharedData?: Buffer;
    publicData: Buffer;
}

interface AesCBC extends IParapms {
    iv: Buffer;
    data?: Buffer;
}

interface AesCCM extends IParapms {
    dataLen: number;
    nonce?: Buffer;
    aad?: Buffer;
    macLen: number;
}

interface AesGCM extends IParapms {
    iv?: Buffer;
    aad?: Buffer;
    ivBits: number;
    tagBits: number;
}

interface RsaOAEP extends IParapms {
    hashAlg: number;
    mgf: number;
    source: number;
    sourceData?: Buffer;
}

interface RsaPSS extends IParapms {
    hashAlg: number;
    mgf: number;
    saltLen: number;
}

interface KeyPair {
    privateKey: Handle,
    publicKey: Handle,
}

export class PKCS11 {
    /**
     * Loads dynamic library with PKCS#11 interface 
     * 
     * @param {string} path
     */
    load(path: string): void;
    /**
     * Initializes the Cryptoki library 
     */
    C_Initialize(): void;
    /**
     * Indicates that an application is done with the Cryptoki library 
     */
    C_Finalize(): void;
    /**
     * Returns general information about Cryptoki 
     * 
     * @returns {ModuleInfo}
     */
    C_GetInfo(): ModuleInfo;

    /* Slot and token management */

    /**
     * obtains a list of slots in the system 
     * 
     * @param {boolean} [tokenPresent] Only slots with tokens?
     * @returns {Handle[]} Array of slot IDs
     */
    C_GetSlotList(tokenPresent?: boolean): Handle[];
    /**
     * Obtains information about a particular slot in the system 
     * 
     * @param {Handle} slot The ID of the slot
     * @returns {SlotInfo} Receives the slot information
     */
    C_GetSlotInfo(slot: Handle): SlotInfo;
    /**
     * Obtains information about a particular token in the system 
     * 
     * @param {Handle} slot ID of the token's slot
     * @returns {TokenInfo} Receives the token information
     */
    C_GetTokenInfo(slot: Handle): TokenInfo;
    /**
     * Initializes a token 
     * 
     * @param {Handle} slot ID of the token's slot
     * @param {string} [pin] The SO's initial PIN
     * @returns {string} 32-byte token label (blank padded)
     */
    C_InitToken(slot: Handle, pin?: string): string;
    /**
     * Initializes the normal user's PIN
     * 
     * @param {Handle} session The session's handle
     * @param {string} [pin] The normal user's PIN
     */
    C_InitPIN(session: Handle, pin?: string): void;
    /**
     * Modifies the PIN of the user who is logged in
     * 
     * @param {Handle} session The session's handle
     * @param {string} oldPin The old PIN
     * @param {string} newPin The new PIN
     */
    C_SetPIN(session: Handle, oldPin: string, newPin: string): void;
    /**
     * Obtains a list of mechanism types supported by a token 
     * 
     * @param {Handle} slot ID of token's slot
     * @returns {Handle[]} Gets mech. array
     */
    C_GetMechanismList(slot: Handle): Handle[];
    /**
     * Obtains information about a particular mechanism possibly supported by a token 
     * 
     * @param {Handle} slot ID of the token's slot
     * @param {Handle} mech Type of mechanism
     * @returns {MechanismInfo} Receives mechanism info
     */
    C_GetMechanismInfo(slot: Handle, mech: Handle): MechanismInfo;

    /* Session management */

    /**
     * Opens a session between an application and a token
     * 
     * @param {Handle} slot The slot's ID
     * @param {number} flags From CK_SESSION_INFO
     * @returns {Handle} Gets session handle
     */
    C_OpenSession(slot: Handle, flags: number): Handle;
    /**
     * Closes a session between an application and a token 
     * 
     * @param {Handle} session The session's handle
     */
    C_CloseSession(session: Handle): void;
    /**
     * Сloses all sessions with a token 
     * 
     * @param {Handle} slot The token's slot
     */
    C_CloseAllSessions(slot: Handle): void;
    /**
     * Obtains information about the session
     * 
     * @param {Handle} session The session's handle
     * @returns {SessionInfo} Receives session info
     */
    C_GetSessionInfo(session: Handle): SessionInfo;
    /**
     * Logs a user into a token 
     * 
     * @param {Handle} session The session's handle
     * @param {number} userType The user type
     * @param {string} [pin] The user's PIN
     */
    C_Login(session: Handle, userType: number, pin?: string): void;
    /**
     * Logs a user out from a token
     * 
     * @param {Handle} session The session's handle
     */
    C_Logout(session: Handle): void;

    /* Object management */

    /**
     * Creates a new object
     * 
     * @param {Handle} session The session's handle
     * @param {Template} template The object's template
     * @returns {Handle} Gets new object's handle
     */
    C_CreateObject(session: Handle, template: Template): Handle;
    /**
     * Copies an object, creating a new object for the copy 
     * 
     * @param {Handle} session The session's handle
     * @param {Handle} object The object's handle
     * @param {Template} template Template for new object
     * @returns {Handle} Receives handle of copy
     */
    C_CopyObject(session: Handle, object: Handle, template: Template): Handle;
    /**
     * Destroys an object
     * 
     * @param {Handle} session The session's handle
     * @param {Handle} object The object's handle
     */
    C_DestroyObject(session: Handle, object: Handle): void;
    /**
     * Gets the size of an object in bytes
     * 
     * @param {Handle} session The session's handle
     * @param {Handle} object The object's handle
     * @returns {number} Receives size of object
     */
    C_GetObjectSize(session: Handle, object: Handle): number;
    /**
     * Initializes a search for token and session objects that match a template
     * 
     * @param {Handle} session The session's handle
     * @param {Template} template Attribute values to match
     */
    C_FindObjectsInit(session: Handle, template: Template): void;
    /**
     * Continues a search for token and session
     * objects that match a template, obtaining additional object
     * handles 
     * 
     * @param {Handle} session Session's handle
     * @returns {Handle} gets Object's handle. If Object is not found
     * the result is 0
     */
    C_FindObjects(session: Handle): Handle;
    /**
     * Finishes a search for token and session objects
     * 
     * @param {Handle} session The session's handle
     */
    C_FindObjectsFinal(session: Handle): void;
    /**
     * Obtains the value of one or more object attributes 
     * 
     * @param {Handle} session The session's handle
     * @param {Handle} object The object's handle
     * @param {Template} template Specifies attrs; gets vals
     * @returns {Template} Receives attributes with values 
     */
    C_GetAttributeValue(session: Handle, object: Handle, template: Template): Template;
    /**
     * Modifies the value of one or more object attributes
     * 
     * @param {Handle} session The session's handle 
     * @param {Handle} object The object's handle
     * @param {Template} template Specifies attrs and values
     */
    C_SetAttributeValue(session: Handle, object: Handle, template: Template): void;

    /* Encryption and decryption */

    /**
     * Initializes an encryption operation
     * 
     * @param {Handle} session The session's handle
     * @param {Mechanism} mechanism The encryption mechanism
     * @param {Handle} key Handle of encryption key
     */
    C_EncryptInit(session: Handle, mechanism: Mechanism, key: Handle): void;
    /**
     * Encrypts single-part data 
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Comming data
     * @returns {Buffer}
     */
    C_Encrypt(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Encrypts single-part data
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Comming data
     * @param {(error: Error, data: Buffer) => void} cb Async callback with sliced comming data
     */
    C_Encrypt(session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void): void;
    /**
     * Continues a multiple-part encryption operation
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_EncryptUpdate(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Finishes a multiple-part encryption operation
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} outData Last coming data
     * @returns {Buffer} Sliced coming data
     */
    C_EncryptFinal(session: Handle, outData: Buffer): Buffer;
    /**
     * Initializes a decryption operation 
     * 
     * @param {Handle} session The session's handle
     * @param {Mechanism} mechanism The decryption mechanism
     * @param {Handle} key Handle of decryption key
     */
    C_DecryptInit(session: Handle, mechanism: Mechanism, key: Handle): void;
    /**
     * Decrypts encrypted data in a single part
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_Decrypt(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Decrypts encrypted data in a single part
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @param {(error: Error, data: Buffer) => void} cb Async callback with sliced coming data
     */
    C_Decrypt(session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void): void;
    /**
     * continues a multiple-part decryption operation
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_DecryptUpdate(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Finishes a multiple-part decryption operation
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} outData Last part of coming data
     * @returns {Buffer} Coming data
     */
    C_DecryptFinal(session: Handle, outData: Buffer): Buffer;

    /* Message digesting */

    /**
     * Initializes a message-digesting operation
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Digesting mechanism
     */
    C_DigestInit(session: Handle, mechanism: Mechanism): void;
    /**
     * Digests data in a single part
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_Digest(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Digests data in a single part
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @param {(error: Error, data: Buffer) => void} cb Async callback with sliced coming data
     
     */
    C_Digest(session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void): void;
    /**
     * continues a multiple-part message-digesting operation 
     * operation, by digesting the value of a secret key as part of
     * the data already digested 
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     */
    C_DigestUpdate(session: Handle, inData: Buffer): void;
    /**
     * Finishes a multiple-part message-digesting operation
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_DigestFinal(session: Handle, outData: Buffer): Buffer;
    // C_DigestKey();

    /* Signing and MACing */

    /**
     * initializes a signature (private key encryption)
     * operation, where the signature is (will be) an appendix to
     * the data, and plaintext cannot be recovered from the
     *signature 
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Signature mechanism
     * @param {Handle} key Handle of signature key
     */
    C_SignInit(session: Handle, mechanism: Mechanism, key: Handle): void;
    /**
     * Signs (encrypts with private key) data in a single
     * part, where the signature is (will be) an appendix to the
     * data, and plaintext cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_Sign(session: Handle, inData: Buffer, outData: Buffer): Buffer;
    /**
     * Signs (encrypts with private key) data in a single
     * part, where the signature is (will be) an appendix to the
     * data, and plaintext cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} outData Coming data
     * @param {(error: Error, data: Buffer) => void} cb Async callback with sliced coming data
     */
    C_Sign(session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void): void;
    /**
     * continues a multiple-part signature operation,
     * where the signature is (will be) an appendix to the data,
     * and plaintext cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     */
    C_SignUpdate(session: Handle, inData: Buffer): void;
    /**
     * Finishes a multiple-part signature operation,
     * returning the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} outData Coming data
     * @returns {Buffer} Sliced coming data
     */
    C_SignFinal(session: Handle, outData: Buffer): Buffer;
    // C_SignRecoverInit();
    // C_SignRecover();

    /* Verifying signatures and MACs */

    /**
     * initializes a verification operation, where the
     * signature is an appendix to the data, and plaintext cannot
     * cannot be recovered from the signature (e.g. DSA) 
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Verification mechanism
     * @param {Handle} key Verification key
     */
    C_VerifyInit(session: Handle, mechanism: Mechanism, key: Handle): void;
    /**
     * Verifies a signature in a single-part operation,
     * where the signature is an appendix to the data, and plaintext
     * cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} signature Signature to verify
     * @returns {boolean} Verification result
     */
    C_Verify(session: Handle, inData: Buffer, signature: Buffer): boolean;
    /**
     * Verifies a signature in a single-part operation,
     * where the signature is an appendix to the data, and plaintext
     * cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     * @param {Buffer} signature Signature to verify
     * @param {(error: Error, verify: boolean) => void} cb Async callback with verification result
     */
    C_Verify(session: Handle, inData: Buffer, signature: Buffer, cb: (error: Error, verify: boolean) => void): void;
    /**
     * Continues a multiple-part verification
     * operation, where the signature is an appendix to the data,
     * and plaintext cannot be recovered from the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} inData Incoming data
     */
    C_VerifyUpdate(session: Handle, inData: Buffer): void;
    /**
     * Finishes a multiple-part verification
     * operation, checking the signature
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} signature Signature to verify
     * @returns {boolean}
     */
    C_VerifyFinal(session: Handle, signature: Buffer): boolean;
    // C_VerifyRecoverInit();
    // C_VerifyRecover();

    /* Key management */

    /**
     * Generates a secret key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Key generation mechanism
     * @param {Template} template Template for new key
     * @returns {Handle} Gets handle of new key
     */
    C_GenerateKey(session: Handle, mechanism: Mechanism, template: Template): Handle;
    /**
     * Generates a secret key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Key generation mechanism
     * @param {Template} template Template for new key
     * @param {(error: Error, key: Handle) => void} cb Async callback with handle of ne key
     */
    C_GenerateKey(session: Handle, mechanism: Mechanism, template: Template, cb: (error: Error, key: Handle) => void): void;
    /**
     * Generates a public-key/private-key pair,
     * creating new key objects
     * 
     * @param {Handle} session Session's handle 
     * @param {Mechanism} mechanism Key generation mechanism
     * @param {Template} publicTmpl Template for public key
     * @param {Template} privateTmpl Template for private key
     * @returns {KeyPair} Get handles for private and public keys
     */
    C_GenerateKeyPair(session: Handle, mechanism: Mechanism, publicTmpl: Template, privateTmpl: Template): KeyPair;
    /**
     * Generates a public-key/private-key pair,
     * creating new key objects
     * 
     * @param {Handle} session Session's handle 
     * @param {Mechanism} mechanism Key generation mechanism
     * @param {Template} publicTmpl Template for public key
     * @param {Template} privateTmpl Template for private key
     * @param {(error: Error, keys: KeyPair) => void} cb Async callback with handles for private and public keys
     */
    C_GenerateKeyPair(session: Handle, mechanism: Mechanism, publicTmpl: Template, privateTmpl: Template, cb: (error: Error, keys: KeyPair) => void): void;
    /**
     * Wraps (i.e., encrypts) a key 
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Wrapping mechanism
     * @param {Handle} wrappingKey Wrapping key
     * @param {Handle} key Key to be wrapped
     * @param {Buffer} wrappedKey Init buffer for wrapped key
     * @returns {Buffer} Sliced wrapped key
     */
    C_WrapKey(session: Handle, mechanism: Mechanism, wrappingKey: Handle, key: Handle, wrappedKey: Buffer): Buffer;
    /**
     * Wraps (i.e., encrypts) a key 
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Wrapping mechanism
     * @param {Handle} wrappingKey Wrapping key
     * @param {Handle} key Key to be wrapped
     * @param {Buffer} wrappedKey Init buffer for wrapped key
     * @param {(error: Error, wrappedKey: Buffer) => void} cb Async callback with sliced wrapped key
     */
    C_WrapKey(session: Handle, mechanism: Mechanism, wrappingKey: Handle, key: Handle, wrappedKey: Buffer, cb: (error: Error, wrappedKey: Buffer) => void): void;
    /**
     * Unwraps (decrypts) a wrapped key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Unwrapping mechanism
     * @param {Handle} unwrappingKey Unwrapping key
     * @param {Buffer} wrappedKey Wrapped key
     * @param {Template} template New key template
     * @returns {Handle} Gets new handle
     */
    C_UnwrapKey(session: Handle, mechanism: Mechanism, unwrappingKey: Handle, wrappedKey: Buffer, template: Template): Handle;
    /**
     * Unwraps (decrypts) a wrapped key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Unwrapping mechanism
     * @param {Handle} unwrappingKey Unwrapping key
     * @param {Buffer} wrappedKey Wrapped key
     * @param {Template} template New key template
     * @param {(error: Error, key: Handle) => void} cb Async callback with new key handle
     */
    C_UnwrapKey(session: Handle, mechanism: Mechanism, unwrappingKey: Handle, wrappedKey: Buffer, template: Template, cb: (error: Error, key: Handle) => void): void;
    /**
     * Derives a key from a base key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Key derivation mechanism
     * @param {Handle} key Base key
     * @param {Template} template new key template
     * @returns {Handle} Get new key handle
     */
    C_DeriveKey(session: Handle, mechanism: Mechanism, key: Handle, template: Template): Handle;
    /**
     * Derives a key from a base key, creating a new key object
     * 
     * @param {Handle} session Session's handle
     * @param {Mechanism} mechanism Key derivation mechanism
     * @param {Handle} key Base key
     * @param {Template} template new key template
     * @param {(error: Error, hKey: Handle) => void} cb Async callback woth new key handle
     */
    C_DeriveKey(session: Handle, mechanism: Mechanism, key: Handle, template: Template, cb: (error: Error, hKey: Handle) => void): void;
    /**
     * Mixes additional seed material into the token's random number generator 
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} buf The seed material
     * @returns {Buffer} Seeded data
     */
    C_SeedRandom(session: Handle, buf: Buffer): Buffer;
    /**
     * Generates random data
     * 
     * @param {Handle} session Session's handle
     * @param {Buffer} buf Init buffer
     * @returns {Buffer} Receives the random data
     */
    C_GenerateRandom(session: Handle, buf: Buffer): Buffer;
}

// Attributes
declare const CKA_CLASS: number;
declare const CKA_TOKEN: number;
declare const CKA_PRIVATE: number;
declare const CKA_LABEL: number;
declare const CKA_APPLICATION: number;
declare const CKA_VALUE: number;
declare const CKA_OBJECT_ID: number;
declare const CKA_CERTIFICATE_TYPE: number;
declare const CKA_ISSUER: number;
declare const CKA_SERIAL_NUMBER: number;
declare const CKA_AC_ISSUER: number;
declare const CKA_OWNER: number;
declare const CKA_ATTR_TYPES: number;
declare const CKA_TRUSTED: number;
declare const CKA_CERTIFICATE_CATEGORY: number;
declare const CKA_JAVA_MIDP_SECURITY_DOMAIN: number;
declare const CKA_URL: number;
declare const CKA_HASH_OF_SUBJECT_PUBLIC_KEY: number;
declare const CKA_HASH_OF_ISSUER_PUBLIC_KEY: number;
declare const CKA_CHECK_VALUE: number;
declare const CKA_KEY_TYPE: number;
declare const CKA_SUBJECT: number;
declare const CKA_ID: number;
declare const CKA_SENSITIVE: number;
declare const CKA_ENCRYPT: number;
declare const CKA_DECRYPT: number;
declare const CKA_WRAP: number;
declare const CKA_UNWRAP: number;
declare const CKA_SIGN: number;
declare const CKA_SIGN_RECOVER: number;
declare const CKA_VERIFY: number;
declare const CKA_VERIFY_RECOVER: number;
declare const CKA_DERIVE: number;
declare const CKA_START_DATE: number;
declare const CKA_END_DATE: number;
declare const CKA_MODULUS: number;
declare const CKA_MODULUS_BITS: number;
declare const CKA_PUBLIC_EXPONENT: number;
declare const CKA_PRIVATE_EXPONENT: number;
declare const CKA_PRIME_1: number;
declare const CKA_PRIME_2: number;
declare const CKA_EXPONENT_1: number;
declare const CKA_EXPONENT_2: number;
declare const CKA_COEFFICIENT: number;
declare const CKA_PRIME: number;
declare const CKA_SUBPRIME: number;
declare const CKA_BASE: number;
declare const CKA_PRIME_BITS: number;
declare const CKA_SUBPRIME_BITS: number;
declare const CKA_SUB_PRIME_BITS: number;
declare const CKA_VALUE_BITS: number;
declare const CKA_VALUE_LEN: number;
declare const CKA_EXTRACTABLE: number;
declare const CKA_LOCAL: number;
declare const CKA_NEVER_EXTRACTABLE: number;
declare const CKA_ALWAYS_SENSITIVE: number;
declare const CKA_KEY_GEN_MECHANISM: number;
declare const CKA_MODIFIABLE: number;
declare const CKA_ECDSA_PARAMS: number;
declare const CKA_EC_PARAMS: number;
declare const CKA_EC_POINT: number;
declare const CKA_SECONDARY_AUTH: number;
declare const CKA_AUTH_PIN_FLAGS: number;
declare const CKA_ALWAYS_AUTHENTICATE: number;
declare const CKA_WRAP_WITH_TRUSTED: number;
declare const CKA_WRAP_TEMPLATE: number;
declare const CKA_UNWRAP_TEMPLATE: number;
declare const CKA_DERIVE_TEMPLATE: number;
declare const CKA_OTP_FORMAT: number;
declare const CKA_OTP_LENGTH: number;
declare const CKA_OTP_TIME_INTERVAL: number;
declare const CKA_OTP_USER_FRIENDLY_MODE: number;
declare const CKA_OTP_CHALLENGE_REQUIREMENT: number;
declare const CKA_OTP_TIME_REQUIREMENT: number;
declare const CKA_OTP_COUNTER_REQUIREMENT: number;
declare const CKA_OTP_PIN_REQUIREMENT: number;
declare const CKA_OTP_COUNTER: number;
declare const CKA_OTP_TIME: number;
declare const CKA_OTP_USER_IDENTIFIER: number;
declare const CKA_OTP_SERVICE_IDENTIFIER: number;
declare const CKA_OTP_SERVICE_LOGO: number;
declare const CKA_OTP_SERVICE_LOGO_TYPE: number;
declare const CKA_GOSTR3410_PARAMS: number;
declare const CKA_GOSTR3411_PARAMS: number;
declare const CKA_GOST28147_PARAMS: number;
declare const CKA_HW_FEATURE_TYPE: number;
declare const CKA_RESET_ON_INIT: number;
declare const CKA_HAS_RESET: number;
declare const CKA_PIXEL_X: number;
declare const CKA_PIXEL_Y: number;
declare const CKA_RESOLUTION: number;
declare const CKA_CHAR_ROWS: number;
declare const CKA_CHAR_COLUMNS: number;
declare const CKA_COLOR: number;
declare const CKA_BITS_PER_PIXEL: number;
declare const CKA_CHAR_SETS: number;
declare const CKA_ENCODING_METHODS: number;
declare const CKA_MIME_TYPES: number;
declare const CKA_MECHANISM_TYPE: number;
declare const CKA_REQUIRED_CMS_ATTRIBUTES: number;
declare const CKA_DEFAULT_CMS_ATTRIBUTES: number;
declare const CKA_SUPPORTED_CMS_ATTRIBUTES: number;
declare const CKA_ALLOWED_MECHANISMS: number;
declare const CKA_VENDOR_DEFINED: number;

// Objects
declare const CKO_DATA: number;
declare const CKO_CERTIFICATE: number;
declare const CKO_PUBLIC_KEY: number;
declare const CKO_PRIVATE_KEY: number;
declare const CKO_SECRET_KEY: number;
declare const CKO_HW_FEATURE: number;
declare const CKO_DOMAIN_PARAMETERS: number;
declare const CKO_MECHANISM: number;
declare const CKO_OTP_KEY: number;
declare const CKO_VENDOR_DEFINED: number;

// Key types
declare const CKK_RSA: number;
declare const CKK_DSA: number;
declare const CKK_DH: number;
declare const CKK_ECDSA: number;
declare const CKK_EC: number;
declare const CKK_X9_42_DH: number;
declare const CKK_KEA: number;
declare const CKK_GENERIC_SECRET: number;
declare const CKK_RC2: number;
declare const CKK_RC4: number;
declare const CKK_DES: number;
declare const CKK_DES2: number;
declare const CKK_DES3: number;
declare const CKK_CAST: number;
declare const CKK_CAST3: number;
declare const CKK_CAST5: number;
declare const CKK_CAST128: number;
declare const CKK_RC5: number;
declare const CKK_IDEA: number;
declare const CKK_SKIPJACK: number;
declare const CKK_BATON: number;
declare const CKK_JUNIPER: number;
declare const CKK_CDMF: number;
declare const CKK_AES: number;
declare const CKK_BLOWFISH: number;
declare const CKK_TWOFISH: number;
declare const CKK_SECURID: number;
declare const CKK_HOTP: number;
declare const CKK_ACTI: number;
declare const CKK_CAMELLIA: number;
declare const CKK_ARIA: number;
declare const CKK_MD5_HMAC: number;
declare const CKK_SHA_1_HMAC: number;
declare const CKK_RIPEMD128_HMAC: number;
declare const CKK_RIPEMD160_HMAC: number;
declare const CKK_SHA256_HMAC: number;
declare const CKK_SHA384_HMAC: number;
declare const CKK_SHA512_HMAC: number;
declare const CKK_SHA224_HMAC: number;
declare const CKK_SEED: number;
declare const CKK_GOSTR3410: number;
declare const CKK_GOSTR3411: number;
declare const CKK_GOST28147: number;
declare const CKK_VENDOR_DEFINED: number;

// Mechanism
declare const CKM_RSA_PKCS_KEY_PAIR_GEN: number;
declare const CKM_RSA_PKCS: number;
declare const CKM_RSA_9796: number;
declare const CKM_RSA_X_509: number;
declare const CKM_MD2_RSA_PKCS: number;
declare const CKM_MD5_RSA_PKCS: number;
declare const CKM_SHA1_RSA_PKCS: number;
declare const CKM_RIPEMD128_RSA_PKCS: number;
declare const CKM_RIPEMD160_RSA_PKCS: number;
declare const CKM_RSA_PKCS_OAEP: number;
declare const CKM_RSA_X9_31_KEY_PAIR_GEN: number;
declare const CKM_RSA_X9_31: number;
declare const CKM_SHA1_RSA_X9_31: number;
declare const CKM_RSA_PKCS_PSS: number;
declare const CKM_SHA1_RSA_PKCS_PSS: number;
declare const CKM_DSA_KEY_PAIR_GEN: number;
declare const CKM_DSA: number;
declare const CKM_DSA_SHA1: number;
declare const CKM_DSA_SHA224: number;
declare const CKM_DSA_SHA256: number;
declare const CKM_DSA_SHA384: number;
declare const CKM_DSA_SHA512: number;
declare const CKM_DH_PKCS_KEY_PAIR_GEN: number;
declare const CKM_DH_PKCS_DERIVE: number;
declare const CKM_X9_42_DH_KEY_PAIR_GEN: number;
declare const CKM_X9_42_DH_DERIVE: number;
declare const CKM_X9_42_DH_HYBRID_DERIVE: number;
declare const CKM_X9_42_MQV_DERIVE: number;
declare const CKM_SHA256_RSA_PKCS: number;
declare const CKM_SHA384_RSA_PKCS: number;
declare const CKM_SHA512_RSA_PKCS: number;
declare const CKM_SHA256_RSA_PKCS_PSS: number;
declare const CKM_SHA384_RSA_PKCS_PSS: number;
declare const CKM_SHA512_RSA_PKCS_PSS: number;
declare const CKM_SHA224_RSA_PKCS: number;
declare const CKM_SHA224_RSA_PKCS_PSS: number;
declare const CKM_RC2_KEY_GEN: number;
declare const CKM_RC2_ECB: number;
declare const CKM_RC2_CBC: number;
declare const CKM_RC2_MAC: number;
declare const CKM_RC2_MAC_GENERAL: number;
declare const CKM_RC2_CBC_PAD: number;
declare const CKM_RC4_KEY_GEN: number;
declare const CKM_RC4: number;
declare const CKM_DES_KEY_GEN: number;
declare const CKM_DES_ECB: number;
declare const CKM_DES_CBC: number;
declare const CKM_DES_MAC: number;
declare const CKM_DES_MAC_GENERAL: number;
declare const CKM_DES_CBC_PAD: number;
declare const CKM_DES2_KEY_GEN: number;
declare const CKM_DES3_KEY_GEN: number;
declare const CKM_DES3_ECB: number;
declare const CKM_DES3_CBC: number;
declare const CKM_DES3_MAC: number;
declare const CKM_DES3_MAC_GENERAL: number;
declare const CKM_DES3_CBC_PAD: number;
declare const CKM_DES3_CMAC_GENERAL: number;
declare const CKM_DES3_CMAC: number;
declare const CKM_CDMF_KEY_GEN: number;
declare const CKM_CDMF_ECB: number;
declare const CKM_CDMF_CBC: number;
declare const CKM_CDMF_MAC: number;
declare const CKM_CDMF_MAC_GENERAL: number;
declare const CKM_CDMF_CBC_PAD: number;
declare const CKM_DES_OFB64: number;
declare const CKM_DES_OFB8: number;
declare const CKM_DES_CFB64: number;
declare const CKM_DES_CFB8: number;
declare const CKM_MD2: number;
declare const CKM_MD2_HMAC: number;
declare const CKM_MD2_HMAC_GENERAL: number;
declare const CKM_MD5: number;
declare const CKM_MD5_HMAC: number;
declare const CKM_MD5_HMAC_GENERAL: number;
declare const CKM_SHA_1: number;
declare const CKM_SHA_1_HMAC: number;
declare const CKM_SHA_1_HMAC_GENERAL: number;
declare const CKM_RIPEMD128: number;
declare const CKM_RIPEMD128_HMAC: number;
declare const CKM_RIPEMD128_HMAC_GENERAL: number;
declare const CKM_RIPEMD160: number;
declare const CKM_RIPEMD160_HMAC: number;
declare const CKM_RIPEMD160_HMAC_GENERAL: number;
declare const CKM_SHA256: number;
declare const CKM_SHA256_HMAC: number;
declare const CKM_SHA256_HMAC_GENERAL: number;
declare const CKM_SHA224: number;
declare const CKM_SHA224_HMAC: number;
declare const CKM_SHA224_HMAC_GENERAL: number;
declare const CKM_SHA384: number;
declare const CKM_SHA384_HMAC: number;
declare const CKM_SHA384_HMAC_GENERAL: number;
declare const CKM_SHA512: number;
declare const CKM_SHA512_HMAC: number;
declare const CKM_SHA512_HMAC_GENERAL: number;
declare const CKM_SECURID_KEY_GEN: number;
declare const CKM_SECURID: number;
declare const CKM_HOTP_KEY_GEN: number;
declare const CKM_HOTP: number;
declare const CKM_ACTI: number;
declare const CKM_ACTI_KEY_GEN: number;
declare const CKM_CAST_KEY_GEN: number;
declare const CKM_CAST_ECB: number;
declare const CKM_CAST_CBC: number;
declare const CKM_CAST_MAC: number;
declare const CKM_CAST_MAC_GENERAL: number;
declare const CKM_CAST_CBC_PAD: number;
declare const CKM_CAST3_KEY_GEN: number;
declare const CKM_CAST3_ECB: number;
declare const CKM_CAST3_CBC: number;
declare const CKM_CAST3_MAC: number;
declare const CKM_CAST3_MAC_GENERAL: number;
declare const CKM_CAST3_CBC_PAD: number;
declare const CKM_CAST5_KEY_GEN: number;
declare const CKM_CAST128_KEY_GEN: number;
declare const CKM_CAST5_ECB: number;
declare const CKM_CAST128_ECB: number;
declare const CKM_CAST5_CBC: number;
declare const CKM_CAST128_CBC: number;
declare const CKM_CAST5_MAC: number;
declare const CKM_CAST128_MAC: number;
declare const CKM_CAST5_MAC_GENERAL: number;
declare const CKM_CAST128_MAC_GENERAL: number;
declare const CKM_CAST5_CBC_PAD: number;
declare const CKM_CAST128_CBC_PAD: number;
declare const CKM_RC5_KEY_GEN: number;
declare const CKM_RC5_ECB: number;
declare const CKM_RC5_CBC: number;
declare const CKM_RC5_MAC: number;
declare const CKM_RC5_MAC_GENERAL: number;
declare const CKM_RC5_CBC_PAD: number;
declare const CKM_IDEA_KEY_GEN: number;
declare const CKM_IDEA_ECB: number;
declare const CKM_IDEA_CBC: number;
declare const CKM_IDEA_MAC: number;
declare const CKM_IDEA_MAC_GENERAL: number;
declare const CKM_IDEA_CBC_PAD: number;
declare const CKM_GENERIC_SECRET_KEY_GEN: number;
declare const CKM_CONCATENATE_BASE_AND_KEY: number;
declare const CKM_CONCATENATE_BASE_AND_DATA: number;
declare const CKM_CONCATENATE_DATA_AND_BASE: number;
declare const CKM_XOR_BASE_AND_DATA: number;
declare const CKM_EXTRACT_KEY_FROM_KEY: number;
declare const CKM_SSL3_PRE_MASTER_KEY_GEN: number;
declare const CKM_SSL3_MASTER_KEY_DERIVE: number;
declare const CKM_SSL3_KEY_AND_MAC_DERIVE: number;
declare const CKM_SSL3_MASTER_KEY_DERIVE_DH: number;
declare const CKM_TLS_PRE_MASTER_KEY_GEN: number;
declare const CKM_TLS_MASTER_KEY_DERIVE: number;
declare const CKM_TLS_KEY_AND_MAC_DERIVE: number;
declare const CKM_TLS_MASTER_KEY_DERIVE_DH: number;
declare const CKM_TLS_PRF: number;
declare const CKM_SSL3_MD5_MAC: number;
declare const CKM_SSL3_SHA1_MAC: number;
declare const CKM_MD5_KEY_DERIVATION: number;
declare const CKM_MD2_KEY_DERIVATION: number;
declare const CKM_SHA1_KEY_DERIVATION: number;
declare const CKM_SHA256_KEY_DERIVATION: number;
declare const CKM_SHA384_KEY_DERIVATION: number;
declare const CKM_SHA512_KEY_DERIVATION: number;
declare const CKM_SHA224_KEY_DERIVATION: number;
declare const CKM_PBE_MD2_DES_CBC: number;
declare const CKM_PBE_MD5_DES_CBC: number;
declare const CKM_PBE_MD5_CAST_CBC: number;
declare const CKM_PBE_MD5_CAST3_CBC: number;
declare const CKM_PBE_MD5_CAST5_CBC: number;
declare const CKM_PBE_MD5_CAST128_CBC: number;
declare const CKM_PBE_SHA1_CAST5_CBC: number;
declare const CKM_PBE_SHA1_CAST128_CBC: number;
declare const CKM_PBE_SHA1_RC4_128: number;
declare const CKM_PBE_SHA1_RC4_40: number;
declare const CKM_PBE_SHA1_DES3_EDE_CBC: number;
declare const CKM_PBE_SHA1_DES2_EDE_CBC: number;
declare const CKM_PBE_SHA1_RC2_128_CBC: number;
declare const CKM_PBE_SHA1_RC2_40_CBC: number;
declare const CKM_PKCS5_PBKD2: number;
declare const CKM_PBA_SHA1_WITH_SHA1_HMAC: number;
declare const CKM_WTLS_PRE_MASTER_KEY_GEN: number;
declare const CKM_WTLS_MASTER_KEY_DERIVE: number;
declare const CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC: number;
declare const CKM_WTLS_PRF: number;
declare const CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE: number;
declare const CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE: number;
declare const CKM_KEY_WRAP_LYNKS: number;
declare const CKM_KEY_WRAP_SET_OAEP: number;
declare const CKM_CAMELLIA_KEY_GEN: number;
declare const CKM_CAMELLIA_ECB: number;
declare const CKM_CAMELLIA_CBC: number;
declare const CKM_CAMELLIA_MAC: number;
declare const CKM_CAMELLIA_MAC_GENERAL: number;
declare const CKM_CAMELLIA_CBC_PAD: number;
declare const CKM_CAMELLIA_ECB_ENCRYPT_DATA: number;
declare const CKM_CAMELLIA_CBC_ENCRYPT_DATA: number;
declare const CKM_CAMELLIA_CTR: number;
declare const CKM_ARIA_KEY_GEN: number;
declare const CKM_ARIA_ECB: number;
declare const CKM_ARIA_CBC: number;
declare const CKM_ARIA_MAC: number;
declare const CKM_ARIA_MAC_GENERAL: number;
declare const CKM_ARIA_CBC_PAD: number;
declare const CKM_ARIA_ECB_ENCRYPT_DATA: number;
declare const CKM_ARIA_CBC_ENCRYPT_DATA: number;
declare const CKM_SEED_KEY_GEN: number;
declare const CKM_SEED_ECB: number;
declare const CKM_SEED_CBC: number;
declare const CKM_SEED_MAC: number;
declare const CKM_SEED_MAC_GENERAL: number;
declare const CKM_SEED_CBC_PAD: number;
declare const CKM_SEED_ECB_ENCRYPT_DATA: number;
declare const CKM_SEED_CBC_ENCRYPT_DATA: number;
declare const CKM_SKIPJACK_KEY_GEN: number;
declare const CKM_SKIPJACK_ECB64: number;
declare const CKM_SKIPJACK_CBC64: number;
declare const CKM_SKIPJACK_OFB64: number;
declare const CKM_SKIPJACK_CFB64: number;
declare const CKM_SKIPJACK_CFB32: number;
declare const CKM_SKIPJACK_CFB16: number;
declare const CKM_SKIPJACK_CFB8: number;
declare const CKM_SKIPJACK_WRAP: number;
declare const CKM_SKIPJACK_PRIVATE_WRAP: number;
declare const CKM_SKIPJACK_RELAYX: number;
declare const CKM_KEA_KEY_PAIR_GEN: number;
declare const CKM_KEA_KEY_DERIVE: number;
declare const CKM_FORTEZZA_TIMESTAMP: number;
declare const CKM_BATON_KEY_GEN: number;
declare const CKM_BATON_ECB128: number;
declare const CKM_BATON_ECB96: number;
declare const CKM_BATON_CBC128: number;
declare const CKM_BATON_COUNTER: number;
declare const CKM_BATON_SHUFFLE: number;
declare const CKM_BATON_WRAP: number;
declare const CKM_ECDSA_KEY_PAIR_GEN: number;
declare const CKM_EC_KEY_PAIR_GEN: number;
declare const CKM_ECDSA: number;
declare const CKM_ECDSA_SHA1: number;
declare const CKM_ECDSA_SHA224: number;
declare const CKM_ECDSA_SHA256: number;
declare const CKM_ECDSA_SHA384: number;
declare const CKM_ECDSA_SHA512: number;
declare const CKM_ECDH1_DERIVE: number;
declare const CKM_ECDH1_COFACTOR_DERIVE: number;
declare const CKM_ECMQV_DERIVE: number;
declare const CKM_JUNIPER_KEY_GEN: number;
declare const CKM_JUNIPER_ECB128: number;
declare const CKM_JUNIPER_CBC128: number;
declare const CKM_JUNIPER_COUNTER: number;
declare const CKM_JUNIPER_SHUFFLE: number;
declare const CKM_JUNIPER_WRAP: number;
declare const CKM_FASTHASH: number;
declare const CKM_AES_KEY_GEN: number;
declare const CKM_AES_ECB: number;
declare const CKM_AES_CBC: number;
declare const CKM_AES_MAC: number;
declare const CKM_AES_MAC_GENERAL: number;
declare const CKM_AES_CBC_PAD: number;
declare const CKM_AES_CTR: number;
declare const CKM_AES_CTS: number;
declare const CKM_AES_CMAC: number;
declare const CKM_AES_CMAC_GENERAL: number;
declare const CKM_BLOWFISH_KEY_GEN: number;
declare const CKM_BLOWFISH_CBC: number;
declare const CKM_TWOFISH_KEY_GEN: number;
declare const CKM_TWOFISH_CBC: number;
declare const CKM_AES_GCM: number;
declare const CKM_AES_CCM: number;
declare const CKM_AES_KEY_WRAP: number;
declare const CKM_AES_KEY_WRAP_PAD: number;
declare const CKM_BLOWFISH_CBC_PAD: number;
declare const CKM_TWOFISH_CBC_PAD: number;
declare const CKM_DES_ECB_ENCRYPT_DATA: number;
declare const CKM_DES_CBC_ENCRYPT_DATA: number;
declare const CKM_DES3_ECB_ENCRYPT_DATA: number;
declare const CKM_DES3_CBC_ENCRYPT_DATA: number;
declare const CKM_AES_ECB_ENCRYPT_DATA: number;
declare const CKM_AES_CBC_ENCRYPT_DATA: number;
declare const CKM_GOSTR3410_KEY_PAIR_GEN: number;
declare const CKM_GOSTR3410: number;
declare const CKM_GOSTR3410_WITH_GOSTR3411: number;
declare const CKM_GOSTR3410_KEY_WRAP: number;
declare const CKM_GOSTR3410_DERIVE: number;
declare const CKM_GOSTR3411: number;
declare const CKM_GOSTR3411_HMAC: number;
declare const CKM_GOST28147_KEY_GEN: number;
declare const CKM_GOST28147_ECB: number;
declare const CKM_GOST28147: number;
declare const CKM_GOST28147_MAC: number;
declare const CKM_GOST28147_KEY_WRAP: number;
declare const CKM_DSA_PARAMETER_GEN: number;
declare const CKM_DH_PKCS_PARAMETER_GEN: number;
declare const CKM_X9_42_DH_PARAMETER_GEN: number;
declare const CKM_AES_OFB: number;
declare const CKM_AES_CFB64: number;
declare const CKM_AES_CFB8: number;
declare const CKM_AES_CFB128: number;
declare const CKM_RSA_PKCS_TPM_1_1: number;
declare const CKM_RSA_PKCS_OAEP_TPM_1_1: number;
declare const CKM_VENDOR_DEFINED: number;

// Session flags
declare const CKF_RW_SESSION: number;
declare const CKF_SERIAL_SESSION: number;

// Follows
declare const CKF_HW: number;
declare const CKF_ENCRYPT: number;
declare const CKF_DECRYPT: number;
declare const CKF_DIGEST: number;
declare const CKF_SIGN: number;
declare const CKF_SIGN_RECOVER: number;
declare const CKF_VERIFY: number;
declare const CKF_VERIFY_RECOVER: number;
declare const CKF_GENERATE: number;
declare const CKF_GENERATE_KEY_PAIR: number;
declare const CKF_WRAP: number;
declare const CKF_UNWRAP: number;
declare const CKF_DERIVE: number;
declare const CKF_CLOCK_ON_TOKEN: number;

// Certificates
declare const CKC_X_509: number;
declare const CKC_X_509_ATTR_CERT: number;
declare const CKC_WTLS: number;

// MGFs
declare const CKG_MGF1_SHA1: number;
declare const CKG_MGF1_SHA256: number;
declare const CKG_MGF1_SHA384: number;
declare const CKG_MGF1_SHA512: number;
declare const CKG_MGF1_SHA224: number;

// KDFs
declare const CKD_NULL: number;
declare const CKD_SHA1_KDF: number;
declare const CKD_SHA1_KDF_ASN1: number;
declare const CKD_SHA1_KDF_CONCATENATE: number;
declare const CKD_SHA224_KDF: number;
declare const CKD_SHA256_KDF: number;
declare const CKD_SHA384_KDF: number;
declare const CKD_SHA512_KDF: number;
declare const CKD_CPDIVERSIFY_KDF: number;

// Mech params
declare const CK_PARAMS_AES_CBC: number;
declare const CK_PARAMS_AES_CCM: number;
declare const CK_PARAMS_AES_GCM: number;
declare const CK_PARAMS_RSA_OAEP: number;
declare const CK_PARAMS_RSA_PSS: number;
declare const CK_PARAMS_EC_DH: number;
