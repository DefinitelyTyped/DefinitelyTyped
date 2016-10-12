// Type definitions for pkcs11js v1.0.3
// Project: https://github.com/PeculiarVentures/pkcs11js
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

/**
 * A Node.js implementation of the PKCS#11 2.3 interface
 * v1.0.3
 */

declare module "pkcs11js" {

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
    const CKA_CLASS: number;
    const CKA_TOKEN: number;
    const CKA_PRIVATE: number;
    const CKA_LABEL: number;
    const CKA_APPLICATION: number;
    const CKA_VALUE: number;
    const CKA_OBJECT_ID: number;
    const CKA_CERTIFICATE_TYPE: number;
    const CKA_ISSUER: number;
    const CKA_SERIAL_NUMBER: number;
    const CKA_AC_ISSUER: number;
    const CKA_OWNER: number;
    const CKA_ATTR_TYPES: number;
    const CKA_TRUSTED: number;
    const CKA_CERTIFICATE_CATEGORY: number;
    const CKA_JAVA_MIDP_SECURITY_DOMAIN: number;
    const CKA_URL: number;
    const CKA_HASH_OF_SUBJECT_PUBLIC_KEY: number;
    const CKA_HASH_OF_ISSUER_PUBLIC_KEY: number;
    const CKA_CHECK_VALUE: number;
    const CKA_KEY_TYPE: number;
    const CKA_SUBJECT: number;
    const CKA_ID: number;
    const CKA_SENSITIVE: number;
    const CKA_ENCRYPT: number;
    const CKA_DECRYPT: number;
    const CKA_WRAP: number;
    const CKA_UNWRAP: number;
    const CKA_SIGN: number;
    const CKA_SIGN_RECOVER: number;
    const CKA_VERIFY: number;
    const CKA_VERIFY_RECOVER: number;
    const CKA_DERIVE: number;
    const CKA_START_DATE: number;
    const CKA_END_DATE: number;
    const CKA_MODULUS: number;
    const CKA_MODULUS_BITS: number;
    const CKA_PUBLIC_EXPONENT: number;
    const CKA_PRIVATE_EXPONENT: number;
    const CKA_PRIME_1: number;
    const CKA_PRIME_2: number;
    const CKA_EXPONENT_1: number;
    const CKA_EXPONENT_2: number;
    const CKA_COEFFICIENT: number;
    const CKA_PRIME: number;
    const CKA_SUBPRIME: number;
    const CKA_BASE: number;
    const CKA_PRIME_BITS: number;
    const CKA_SUBPRIME_BITS: number;
    const CKA_SUB_PRIME_BITS: number;
    const CKA_VALUE_BITS: number;
    const CKA_VALUE_LEN: number;
    const CKA_EXTRACTABLE: number;
    const CKA_LOCAL: number;
    const CKA_NEVER_EXTRACTABLE: number;
    const CKA_ALWAYS_SENSITIVE: number;
    const CKA_KEY_GEN_MECHANISM: number;
    const CKA_MODIFIABLE: number;
    const CKA_ECDSA_PARAMS: number;
    const CKA_EC_PARAMS: number;
    const CKA_EC_POINT: number;
    const CKA_SECONDARY_AUTH: number;
    const CKA_AUTH_PIN_FLAGS: number;
    const CKA_ALWAYS_AUTHENTICATE: number;
    const CKA_WRAP_WITH_TRUSTED: number;
    const CKA_WRAP_TEMPLATE: number;
    const CKA_UNWRAP_TEMPLATE: number;
    const CKA_DERIVE_TEMPLATE: number;
    const CKA_OTP_FORMAT: number;
    const CKA_OTP_LENGTH: number;
    const CKA_OTP_TIME_INTERVAL: number;
    const CKA_OTP_USER_FRIENDLY_MODE: number;
    const CKA_OTP_CHALLENGE_REQUIREMENT: number;
    const CKA_OTP_TIME_REQUIREMENT: number;
    const CKA_OTP_COUNTER_REQUIREMENT: number;
    const CKA_OTP_PIN_REQUIREMENT: number;
    const CKA_OTP_COUNTER: number;
    const CKA_OTP_TIME: number;
    const CKA_OTP_USER_IDENTIFIER: number;
    const CKA_OTP_SERVICE_IDENTIFIER: number;
    const CKA_OTP_SERVICE_LOGO: number;
    const CKA_OTP_SERVICE_LOGO_TYPE: number;
    const CKA_GOSTR3410_PARAMS: number;
    const CKA_GOSTR3411_PARAMS: number;
    const CKA_GOST28147_PARAMS: number;
    const CKA_HW_FEATURE_TYPE: number;
    const CKA_RESET_ON_INIT: number;
    const CKA_HAS_RESET: number;
    const CKA_PIXEL_X: number;
    const CKA_PIXEL_Y: number;
    const CKA_RESOLUTION: number;
    const CKA_CHAR_ROWS: number;
    const CKA_CHAR_COLUMNS: number;
    const CKA_COLOR: number;
    const CKA_BITS_PER_PIXEL: number;
    const CKA_CHAR_SETS: number;
    const CKA_ENCODING_METHODS: number;
    const CKA_MIME_TYPES: number;
    const CKA_MECHANISM_TYPE: number;
    const CKA_REQUIRED_CMS_ATTRIBUTES: number;
    const CKA_DEFAULT_CMS_ATTRIBUTES: number;
    const CKA_SUPPORTED_CMS_ATTRIBUTES: number;
    const CKA_ALLOWED_MECHANISMS: number;
    const CKA_VENDOR_DEFINED: number;

    // Objects
    const CKO_DATA: number;
    const CKO_CERTIFICATE: number;
    const CKO_PUBLIC_KEY: number;
    const CKO_PRIVATE_KEY: number;
    const CKO_SECRET_KEY: number;
    const CKO_HW_FEATURE: number;
    const CKO_DOMAIN_PARAMETERS: number;
    const CKO_MECHANISM: number;
    const CKO_OTP_KEY: number;
    const CKO_VENDOR_DEFINED: number;

    // Key types
    const CKK_RSA: number;
    const CKK_DSA: number;
    const CKK_DH: number;
    const CKK_ECDSA: number;
    const CKK_EC: number;
    const CKK_X9_42_DH: number;
    const CKK_KEA: number;
    const CKK_GENERIC_SECRET: number;
    const CKK_RC2: number;
    const CKK_RC4: number;
    const CKK_DES: number;
    const CKK_DES2: number;
    const CKK_DES3: number;
    const CKK_CAST: number;
    const CKK_CAST3: number;
    const CKK_CAST5: number;
    const CKK_CAST128: number;
    const CKK_RC5: number;
    const CKK_IDEA: number;
    const CKK_SKIPJACK: number;
    const CKK_BATON: number;
    const CKK_JUNIPER: number;
    const CKK_CDMF: number;
    const CKK_AES: number;
    const CKK_BLOWFISH: number;
    const CKK_TWOFISH: number;
    const CKK_SECURID: number;
    const CKK_HOTP: number;
    const CKK_ACTI: number;
    const CKK_CAMELLIA: number;
    const CKK_ARIA: number;
    const CKK_MD5_HMAC: number;
    const CKK_SHA_1_HMAC: number;
    const CKK_RIPEMD128_HMAC: number;
    const CKK_RIPEMD160_HMAC: number;
    const CKK_SHA256_HMAC: number;
    const CKK_SHA384_HMAC: number;
    const CKK_SHA512_HMAC: number;
    const CKK_SHA224_HMAC: number;
    const CKK_SEED: number;
    const CKK_GOSTR3410: number;
    const CKK_GOSTR3411: number;
    const CKK_GOST28147: number;
    const CKK_VENDOR_DEFINED: number;

    // Mechanism
    const CKM_RSA_PKCS_KEY_PAIR_GEN: number;
    const CKM_RSA_PKCS: number;
    const CKM_RSA_9796: number;
    const CKM_RSA_X_509: number;
    const CKM_MD2_RSA_PKCS: number;
    const CKM_MD5_RSA_PKCS: number;
    const CKM_SHA1_RSA_PKCS: number;
    const CKM_RIPEMD128_RSA_PKCS: number;
    const CKM_RIPEMD160_RSA_PKCS: number;
    const CKM_RSA_PKCS_OAEP: number;
    const CKM_RSA_X9_31_KEY_PAIR_GEN: number;
    const CKM_RSA_X9_31: number;
    const CKM_SHA1_RSA_X9_31: number;
    const CKM_RSA_PKCS_PSS: number;
    const CKM_SHA1_RSA_PKCS_PSS: number;
    const CKM_DSA_KEY_PAIR_GEN: number;
    const CKM_DSA: number;
    const CKM_DSA_SHA1: number;
    const CKM_DSA_SHA224: number;
    const CKM_DSA_SHA256: number;
    const CKM_DSA_SHA384: number;
    const CKM_DSA_SHA512: number;
    const CKM_DH_PKCS_KEY_PAIR_GEN: number;
    const CKM_DH_PKCS_DERIVE: number;
    const CKM_X9_42_DH_KEY_PAIR_GEN: number;
    const CKM_X9_42_DH_DERIVE: number;
    const CKM_X9_42_DH_HYBRID_DERIVE: number;
    const CKM_X9_42_MQV_DERIVE: number;
    const CKM_SHA256_RSA_PKCS: number;
    const CKM_SHA384_RSA_PKCS: number;
    const CKM_SHA512_RSA_PKCS: number;
    const CKM_SHA256_RSA_PKCS_PSS: number;
    const CKM_SHA384_RSA_PKCS_PSS: number;
    const CKM_SHA512_RSA_PKCS_PSS: number;
    const CKM_SHA224_RSA_PKCS: number;
    const CKM_SHA224_RSA_PKCS_PSS: number;
    const CKM_RC2_KEY_GEN: number;
    const CKM_RC2_ECB: number;
    const CKM_RC2_CBC: number;
    const CKM_RC2_MAC: number;
    const CKM_RC2_MAC_GENERAL: number;
    const CKM_RC2_CBC_PAD: number;
    const CKM_RC4_KEY_GEN: number;
    const CKM_RC4: number;
    const CKM_DES_KEY_GEN: number;
    const CKM_DES_ECB: number;
    const CKM_DES_CBC: number;
    const CKM_DES_MAC: number;
    const CKM_DES_MAC_GENERAL: number;
    const CKM_DES_CBC_PAD: number;
    const CKM_DES2_KEY_GEN: number;
    const CKM_DES3_KEY_GEN: number;
    const CKM_DES3_ECB: number;
    const CKM_DES3_CBC: number;
    const CKM_DES3_MAC: number;
    const CKM_DES3_MAC_GENERAL: number;
    const CKM_DES3_CBC_PAD: number;
    const CKM_DES3_CMAC_GENERAL: number;
    const CKM_DES3_CMAC: number;
    const CKM_CDMF_KEY_GEN: number;
    const CKM_CDMF_ECB: number;
    const CKM_CDMF_CBC: number;
    const CKM_CDMF_MAC: number;
    const CKM_CDMF_MAC_GENERAL: number;
    const CKM_CDMF_CBC_PAD: number;
    const CKM_DES_OFB64: number;
    const CKM_DES_OFB8: number;
    const CKM_DES_CFB64: number;
    const CKM_DES_CFB8: number;
    const CKM_MD2: number;
    const CKM_MD2_HMAC: number;
    const CKM_MD2_HMAC_GENERAL: number;
    const CKM_MD5: number;
    const CKM_MD5_HMAC: number;
    const CKM_MD5_HMAC_GENERAL: number;
    const CKM_SHA_1: number;
    const CKM_SHA_1_HMAC: number;
    const CKM_SHA_1_HMAC_GENERAL: number;
    const CKM_RIPEMD128: number;
    const CKM_RIPEMD128_HMAC: number;
    const CKM_RIPEMD128_HMAC_GENERAL: number;
    const CKM_RIPEMD160: number;
    const CKM_RIPEMD160_HMAC: number;
    const CKM_RIPEMD160_HMAC_GENERAL: number;
    const CKM_SHA256: number;
    const CKM_SHA256_HMAC: number;
    const CKM_SHA256_HMAC_GENERAL: number;
    const CKM_SHA224: number;
    const CKM_SHA224_HMAC: number;
    const CKM_SHA224_HMAC_GENERAL: number;
    const CKM_SHA384: number;
    const CKM_SHA384_HMAC: number;
    const CKM_SHA384_HMAC_GENERAL: number;
    const CKM_SHA512: number;
    const CKM_SHA512_HMAC: number;
    const CKM_SHA512_HMAC_GENERAL: number;
    const CKM_SECURID_KEY_GEN: number;
    const CKM_SECURID: number;
    const CKM_HOTP_KEY_GEN: number;
    const CKM_HOTP: number;
    const CKM_ACTI: number;
    const CKM_ACTI_KEY_GEN: number;
    const CKM_CAST_KEY_GEN: number;
    const CKM_CAST_ECB: number;
    const CKM_CAST_CBC: number;
    const CKM_CAST_MAC: number;
    const CKM_CAST_MAC_GENERAL: number;
    const CKM_CAST_CBC_PAD: number;
    const CKM_CAST3_KEY_GEN: number;
    const CKM_CAST3_ECB: number;
    const CKM_CAST3_CBC: number;
    const CKM_CAST3_MAC: number;
    const CKM_CAST3_MAC_GENERAL: number;
    const CKM_CAST3_CBC_PAD: number;
    const CKM_CAST5_KEY_GEN: number;
    const CKM_CAST128_KEY_GEN: number;
    const CKM_CAST5_ECB: number;
    const CKM_CAST128_ECB: number;
    const CKM_CAST5_CBC: number;
    const CKM_CAST128_CBC: number;
    const CKM_CAST5_MAC: number;
    const CKM_CAST128_MAC: number;
    const CKM_CAST5_MAC_GENERAL: number;
    const CKM_CAST128_MAC_GENERAL: number;
    const CKM_CAST5_CBC_PAD: number;
    const CKM_CAST128_CBC_PAD: number;
    const CKM_RC5_KEY_GEN: number;
    const CKM_RC5_ECB: number;
    const CKM_RC5_CBC: number;
    const CKM_RC5_MAC: number;
    const CKM_RC5_MAC_GENERAL: number;
    const CKM_RC5_CBC_PAD: number;
    const CKM_IDEA_KEY_GEN: number;
    const CKM_IDEA_ECB: number;
    const CKM_IDEA_CBC: number;
    const CKM_IDEA_MAC: number;
    const CKM_IDEA_MAC_GENERAL: number;
    const CKM_IDEA_CBC_PAD: number;
    const CKM_GENERIC_SECRET_KEY_GEN: number;
    const CKM_CONCATENATE_BASE_AND_KEY: number;
    const CKM_CONCATENATE_BASE_AND_DATA: number;
    const CKM_CONCATENATE_DATA_AND_BASE: number;
    const CKM_XOR_BASE_AND_DATA: number;
    const CKM_EXTRACT_KEY_FROM_KEY: number;
    const CKM_SSL3_PRE_MASTER_KEY_GEN: number;
    const CKM_SSL3_MASTER_KEY_DERIVE: number;
    const CKM_SSL3_KEY_AND_MAC_DERIVE: number;
    const CKM_SSL3_MASTER_KEY_DERIVE_DH: number;
    const CKM_TLS_PRE_MASTER_KEY_GEN: number;
    const CKM_TLS_MASTER_KEY_DERIVE: number;
    const CKM_TLS_KEY_AND_MAC_DERIVE: number;
    const CKM_TLS_MASTER_KEY_DERIVE_DH: number;
    const CKM_TLS_PRF: number;
    const CKM_SSL3_MD5_MAC: number;
    const CKM_SSL3_SHA1_MAC: number;
    const CKM_MD5_KEY_DERIVATION: number;
    const CKM_MD2_KEY_DERIVATION: number;
    const CKM_SHA1_KEY_DERIVATION: number;
    const CKM_SHA256_KEY_DERIVATION: number;
    const CKM_SHA384_KEY_DERIVATION: number;
    const CKM_SHA512_KEY_DERIVATION: number;
    const CKM_SHA224_KEY_DERIVATION: number;
    const CKM_PBE_MD2_DES_CBC: number;
    const CKM_PBE_MD5_DES_CBC: number;
    const CKM_PBE_MD5_CAST_CBC: number;
    const CKM_PBE_MD5_CAST3_CBC: number;
    const CKM_PBE_MD5_CAST5_CBC: number;
    const CKM_PBE_MD5_CAST128_CBC: number;
    const CKM_PBE_SHA1_CAST5_CBC: number;
    const CKM_PBE_SHA1_CAST128_CBC: number;
    const CKM_PBE_SHA1_RC4_128: number;
    const CKM_PBE_SHA1_RC4_40: number;
    const CKM_PBE_SHA1_DES3_EDE_CBC: number;
    const CKM_PBE_SHA1_DES2_EDE_CBC: number;
    const CKM_PBE_SHA1_RC2_128_CBC: number;
    const CKM_PBE_SHA1_RC2_40_CBC: number;
    const CKM_PKCS5_PBKD2: number;
    const CKM_PBA_SHA1_WITH_SHA1_HMAC: number;
    const CKM_WTLS_PRE_MASTER_KEY_GEN: number;
    const CKM_WTLS_MASTER_KEY_DERIVE: number;
    const CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC: number;
    const CKM_WTLS_PRF: number;
    const CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE: number;
    const CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE: number;
    const CKM_KEY_WRAP_LYNKS: number;
    const CKM_KEY_WRAP_SET_OAEP: number;
    const CKM_CAMELLIA_KEY_GEN: number;
    const CKM_CAMELLIA_ECB: number;
    const CKM_CAMELLIA_CBC: number;
    const CKM_CAMELLIA_MAC: number;
    const CKM_CAMELLIA_MAC_GENERAL: number;
    const CKM_CAMELLIA_CBC_PAD: number;
    const CKM_CAMELLIA_ECB_ENCRYPT_DATA: number;
    const CKM_CAMELLIA_CBC_ENCRYPT_DATA: number;
    const CKM_CAMELLIA_CTR: number;
    const CKM_ARIA_KEY_GEN: number;
    const CKM_ARIA_ECB: number;
    const CKM_ARIA_CBC: number;
    const CKM_ARIA_MAC: number;
    const CKM_ARIA_MAC_GENERAL: number;
    const CKM_ARIA_CBC_PAD: number;
    const CKM_ARIA_ECB_ENCRYPT_DATA: number;
    const CKM_ARIA_CBC_ENCRYPT_DATA: number;
    const CKM_SEED_KEY_GEN: number;
    const CKM_SEED_ECB: number;
    const CKM_SEED_CBC: number;
    const CKM_SEED_MAC: number;
    const CKM_SEED_MAC_GENERAL: number;
    const CKM_SEED_CBC_PAD: number;
    const CKM_SEED_ECB_ENCRYPT_DATA: number;
    const CKM_SEED_CBC_ENCRYPT_DATA: number;
    const CKM_SKIPJACK_KEY_GEN: number;
    const CKM_SKIPJACK_ECB64: number;
    const CKM_SKIPJACK_CBC64: number;
    const CKM_SKIPJACK_OFB64: number;
    const CKM_SKIPJACK_CFB64: number;
    const CKM_SKIPJACK_CFB32: number;
    const CKM_SKIPJACK_CFB16: number;
    const CKM_SKIPJACK_CFB8: number;
    const CKM_SKIPJACK_WRAP: number;
    const CKM_SKIPJACK_PRIVATE_WRAP: number;
    const CKM_SKIPJACK_RELAYX: number;
    const CKM_KEA_KEY_PAIR_GEN: number;
    const CKM_KEA_KEY_DERIVE: number;
    const CKM_FORTEZZA_TIMESTAMP: number;
    const CKM_BATON_KEY_GEN: number;
    const CKM_BATON_ECB128: number;
    const CKM_BATON_ECB96: number;
    const CKM_BATON_CBC128: number;
    const CKM_BATON_COUNTER: number;
    const CKM_BATON_SHUFFLE: number;
    const CKM_BATON_WRAP: number;
    const CKM_ECDSA_KEY_PAIR_GEN: number;
    const CKM_EC_KEY_PAIR_GEN: number;
    const CKM_ECDSA: number;
    const CKM_ECDSA_SHA1: number;
    const CKM_ECDSA_SHA224: number;
    const CKM_ECDSA_SHA256: number;
    const CKM_ECDSA_SHA384: number;
    const CKM_ECDSA_SHA512: number;
    const CKM_ECDH1_DERIVE: number;
    const CKM_ECDH1_COFACTOR_DERIVE: number;
    const CKM_ECMQV_DERIVE: number;
    const CKM_JUNIPER_KEY_GEN: number;
    const CKM_JUNIPER_ECB128: number;
    const CKM_JUNIPER_CBC128: number;
    const CKM_JUNIPER_COUNTER: number;
    const CKM_JUNIPER_SHUFFLE: number;
    const CKM_JUNIPER_WRAP: number;
    const CKM_FASTHASH: number;
    const CKM_AES_KEY_GEN: number;
    const CKM_AES_ECB: number;
    const CKM_AES_CBC: number;
    const CKM_AES_MAC: number;
    const CKM_AES_MAC_GENERAL: number;
    const CKM_AES_CBC_PAD: number;
    const CKM_AES_CTR: number;
    const CKM_AES_CTS: number;
    const CKM_AES_CMAC: number;
    const CKM_AES_CMAC_GENERAL: number;
    const CKM_BLOWFISH_KEY_GEN: number;
    const CKM_BLOWFISH_CBC: number;
    const CKM_TWOFISH_KEY_GEN: number;
    const CKM_TWOFISH_CBC: number;
    const CKM_AES_GCM: number;
    const CKM_AES_CCM: number;
    const CKM_AES_KEY_WRAP: number;
    const CKM_AES_KEY_WRAP_PAD: number;
    const CKM_BLOWFISH_CBC_PAD: number;
    const CKM_TWOFISH_CBC_PAD: number;
    const CKM_DES_ECB_ENCRYPT_DATA: number;
    const CKM_DES_CBC_ENCRYPT_DATA: number;
    const CKM_DES3_ECB_ENCRYPT_DATA: number;
    const CKM_DES3_CBC_ENCRYPT_DATA: number;
    const CKM_AES_ECB_ENCRYPT_DATA: number;
    const CKM_AES_CBC_ENCRYPT_DATA: number;
    const CKM_GOSTR3410_KEY_PAIR_GEN: number;
    const CKM_GOSTR3410: number;
    const CKM_GOSTR3410_WITH_GOSTR3411: number;
    const CKM_GOSTR3410_KEY_WRAP: number;
    const CKM_GOSTR3410_DERIVE: number;
    const CKM_GOSTR3411: number;
    const CKM_GOSTR3411_HMAC: number;
    const CKM_GOST28147_KEY_GEN: number;
    const CKM_GOST28147_ECB: number;
    const CKM_GOST28147: number;
    const CKM_GOST28147_MAC: number;
    const CKM_GOST28147_KEY_WRAP: number;
    const CKM_DSA_PARAMETER_GEN: number;
    const CKM_DH_PKCS_PARAMETER_GEN: number;
    const CKM_X9_42_DH_PARAMETER_GEN: number;
    const CKM_AES_OFB: number;
    const CKM_AES_CFB64: number;
    const CKM_AES_CFB8: number;
    const CKM_AES_CFB128: number;
    const CKM_RSA_PKCS_TPM_1_1: number;
    const CKM_RSA_PKCS_OAEP_TPM_1_1: number;
    const CKM_VENDOR_DEFINED: number;

    // Session flags
    const CKF_RW_SESSION: number;
    const CKF_SERIAL_SESSION: number;

    // Follows
    const CKF_HW: number;
    const CKF_ENCRYPT: number;
    const CKF_DECRYPT: number;
    const CKF_DIGEST: number;
    const CKF_SIGN: number;
    const CKF_SIGN_RECOVER: number;
    const CKF_VERIFY: number;
    const CKF_VERIFY_RECOVER: number;
    const CKF_GENERATE: number;
    const CKF_GENERATE_KEY_PAIR: number;
    const CKF_WRAP: number;
    const CKF_UNWRAP: number;
    const CKF_DERIVE: number;
    const CKF_CLOCK_ON_TOKEN: number;

    // Certificates
    const CKC_X_509: number;
    const CKC_X_509_ATTR_CERT: number;
    const CKC_WTLS: number;

    // MGFs
    const CKG_MGF1_SHA1: number;
    const CKG_MGF1_SHA256: number;
    const CKG_MGF1_SHA384: number;
    const CKG_MGF1_SHA512: number;
    const CKG_MGF1_SHA224: number;

    // KDFs
    const CKD_NULL: number;
    const CKD_SHA1_KDF: number;
    const CKD_SHA1_KDF_ASN1: number;
    const CKD_SHA1_KDF_CONCATENATE: number;
    const CKD_SHA224_KDF: number;
    const CKD_SHA256_KDF: number;
    const CKD_SHA384_KDF: number;
    const CKD_SHA512_KDF: number;
    const CKD_CPDIVERSIFY_KDF: number;

    // Mech params
    const CK_PARAMS_AES_CBC: number;
    const CK_PARAMS_AES_CCM: number;
    const CK_PARAMS_AES_GCM: number;
    const CK_PARAMS_RSA_OAEP: number;
    const CK_PARAMS_RSA_PSS: number;
    const CK_PARAMS_EC_DH: number;
}
