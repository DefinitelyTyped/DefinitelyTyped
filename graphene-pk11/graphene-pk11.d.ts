// Type definitions for graphene-pk11 v2.0.0
// Project: https://github.com/PeculiarVentures/graphene
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

/**
 * A simple layer for interacting with PKCS #11 / PKCS11 / CryptoKI for Node
 * v2.0.0
 */

declare module "graphene-pk11" {

    type Callback = (err: Error, rv: number) => void;
    type CK_PTR = Buffer;

    class Pkcs11 {
        lib: any;
        /**
         * load a library with PKCS11 interface
         * @param {string} libFile path to PKCS11 library
         */
        constructor(libFile: string);
        protected callFunction(funcName: string, args: any[]): number;
        /**
         * C_Initialize initializes the Cryptoki library.
         * @param pInitArgs   if this is not NULL_PTR, it gets
         *                    cast to CK_C_INITIALIZE_ARGS_PTR
         *                    and dereferenced
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Initialize(pInitArgs?: CK_PTR): number;
        C_Initialize(pInitArgs: CK_PTR, cllback: Callback): void;
        /**
         * C_Finalize indicates that an application is done with the Cryptoki library.
         * @param pReserved   reserved. Should be NULL_PTR
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Finalize(pReserved?: CK_PTR): number;
        C_Finalize(pReserved: CK_PTR, callback: Callback): void;
        /**
         * C_GetInfo returns general information about Cryptoki.
         * @param pInfo       location that receives information
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetInfo(pInfo: CK_PTR): number;
        C_GetInfo(pInfo: CK_PTR, callback: Callback): void;
        /**
         * C_GetSlotList obtains a list of slots in the system.
         * @param {boolean} tokenPresent only slots with tokens?
         * @param pSlotList receives array of slot IDs
         * @param pulCount receives number of slots
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetSlotList(tokenPresent: boolean, pSlotList: CK_PTR, pulCount: CK_PTR): number;
        C_GetSlotList(tokenPresent: boolean, pSlotList: CK_PTR, pulCount: CK_PTR, callback: Callback): void;
        /**
         * C_GetSlotInfo obtains information about a particular slot in
         * the system.
         * @param {number} slotID the ID of the slot
         * @param {Buffer} pInfo receives the slot information
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetSlotInfo(slotID: number, pInfo: CK_PTR): number;
        C_GetSlotInfo(slotID: number, pInfo: CK_PTR, callback: Callback): void;
        /**
         * C_GetTokenInfo obtains information about a particular token
         * in the system.
         * @param {number} slotID ID of the token's slot
         * @param {Buffer} pInfo receives the token information
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetTokenInfo(slotID: number, pInfo: Buffer): number;
        C_GetTokenInfo(slotID: number, pInfo: Buffer, callback: Callback): void;
        /**
         * C_GetMechanismList obtains a list of mechanism types
         * supported by a token.
         * @param {number} slotID ID of the token's slot
         * @param {number} pMechanismList gets mech. array
         * @param {number} pulCount gets # of mechs
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetMechanismList(slotID: number, pMechanismList: Buffer, pulCount: Buffer): number;
        C_GetMechanismList(slotID: number, pMechanismList: Buffer, pulCount: Buffer, callback: Callback): void;
        /** C_GetMechanismInfo obtains information about a particular
         * mechanism possibly supported by a token.
         * @param {number} slotID ID of the token's slot
         * @param {number} type type of mechanism
         * @param {Buffer} pInfo receives mechanism info
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetMechanismInfo(slotID: number, type: number, pInfo: Buffer): number;
        C_GetMechanismInfo(slotID: number, type: number, pInfo: Buffer, callback: Callback): void;
        /**
         * C_InitToken initializes a token.
         * @param {number} slotID ID of the token's slot
         * @param {Buffer} pPin the SO's initial PIN
         * @param {number} ulPinLen length in bytes of the PIN
         * @param {number} pLabel 32-byte token label (blank padded)
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_InitToken(slotID: number, pPin: Buffer, ulPinLen: number, pLabel: Buffer): number;
        C_InitToken(slotID: number, pPin: Buffer, ulPinLen: number, pLabel: Buffer, callback: Callback): void;
        /**
         * C_InitPIN initializes the normal user's PIN.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPin the normal user's PIN
         * @param {number} ulPinLen length in bytes of the PIN
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_InitPIN(hSession: number, pPin: Buffer, ulPinLen: number): number;
        C_InitPIN(hSession: number, pPin: Buffer, ulPinLen: number, callback: Callback): void;
        /**
         * C_SetPIN modifies the PIN of the user who is logged in.
         * @param {number} hSession the session's handle
         * @param {Buffer} pOldPin the old PIN
         * @param {number} ulOldLen length of the old PIN
         * @param {Buffer} pNewPin the new PIN
         * @param {number} ulNewLen length of the new PIN
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SetPIN(hSession: any, pOldPin: Buffer, ulOldLen: number, pNewPin: Buffer, ulNewLen: number): number;
        C_SetPIN(hSession: any, pOldPin: Buffer, ulOldLen: number, pNewPin: Buffer, ulNewLen: number, callback: Callback): void;
        /**
         * C_OpenSession opens a session between an application and a
         * token.
         * @param {number} slotID ID of the token's slot
         * @param {number} flags from CK_SESSION_INFO
         * @param {Buffer} pApplication passed to callback
         * @param {Buffer} Notify callback function
         * @param {Buffer} phSession gets session handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_OpenSession(slotID: number, flags: number, pApplication?: Buffer, notify?: Buffer, phSession?: Buffer): number;
        C_OpenSession(slotID: number, flags: number, pApplication: Buffer, notify: Buffer, phSession: Buffer, callback: Callback): void;
        /**
         * C_CloseSession closes a session between an application and a token.
         * @param {number} hSession the session's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_CloseSession(hSession: number): number;
        C_CloseSession(hSession: number, callback: Callback): void;
        /**
         * C_CloseAllSessions closes all sessions with a token.
         * @param {number} slotID ID of the token's slot
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_CloseAllSessions(slotID: number): number;
        C_CloseAllSessions(slotID: number, callback: Callback): void;
        /**
         * C_GetSessionInfo obtains information about the session.
         * @param {number} hSession the session's handle
         * @param {Buffer} pInfo receives session info
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetSessionInfo(hSession: number, pInfo: Buffer): number;
        C_GetSessionInfo(hSession: number, pInfo: Buffer, callback: Callback): void;
        /**
         * C_GetOperationState obtains the state of the cryptographic operation in a session.
         * @param {number} hSession the session's handle
         * @param {Buffer} pOperationState gets state
         * @param {Buffer} pulOperationStateLen gets state length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetOperationState(hSession: number, pOperationState: Buffer, pulOperationStateLen: Buffer): number;
        C_GetOperationState(hSession: number, pOperationState: Buffer, pulOperationStateLen: Buffer, callback: Callback): void;
        /**
         * C_SetOperationState restores the state of the cryptographic operation in a session.
         * @param {number} hSession the session's handle
         * @param {Buffer} pOperationState holds state
         * @param {number} ulOperationStateLen holds holds state length
         * @param {number} hEncryptionKey en/decryption key
         * @param {number} hAuthenticationKey sign/verify key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SetOperationState(hSession: number, pOperationState: Buffer, ulOperationStateLen: number, hEncryptionKey: number, hAuthenticationKey: number): number;
        C_SetOperationState(hSession: number, pOperationState: Buffer, ulOperationStateLen: number, hEncryptionKey: number, hAuthenticationKey: number, callback: Callback): void;
        /**
         * C_Login logs a user into a token.
         * @param {number} hSession the session's handle
         * @param {number} userType the user type
         * @param {Buffer} pPin the user's PIN
         * @param {number} ulPinLen the length of the PIN
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Login(hSession: number, userType: number, pPin: Buffer, ulPinLen: number): number;
        C_Login(hSession: number, userType: number, pPin: Buffer, ulPinLen: number, callback: Callback): void;
        /**
         * C_Logout logs a user out from a token.
         * @param {number} hSession the session's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Logout(hSession: number): number;
        C_Logout(hSession: number, callback: Callback): void;
        /**
         * C_CreateObject creates a new object.
         * @param {number} hSession the session's handle
         * @param {Buffer} pTemplate the object's template
         * @param {number} ulCount attributes in template
         * @param {Buffer} phObject gets new object's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_CreateObject(hSession: number, pTemplate: Buffer, ulCount: number, phObject: Buffer): number;
        C_CreateObject(hSession: number, pTemplate: Buffer, ulCount: number, phObject: Buffer, callback: Callback): void;
        /**
         * C_CopyObject copies an object, creating a new object for the copy.
         * @param {number} hSession the session's handle
         * @param {number} hObject the object's handle
         * @param {Buffer} pTemplate template for new object
         * @param {number} ulCount attributes in template
         * @param {Buffer} phNewObject receives handle of copy
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_CopyObject(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number, phNewObject: Buffer): number;
        C_CopyObject(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number, phNewObject: Buffer, callback: Callback): void;
        /**
         * C_DestroyObject destroys an object.
         * @param {number} hSession the session's handle
         * @param {number} hObject the object's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DestroyObject(hSession: number, hObject: number): number;
        C_DestroyObject(hSession: number, hObject: number, callback: Callback): void;
        /**
         * C_GetObjectSize gets the size of an object in bytes.
         * @param {number} hSession the session's handle
         * @param {number} hObject the object's handle
         * @param {Buffer} pulSize receives size of object
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetObjectSize(hSession: number, hObject: number, pulSize: Buffer): number;
        C_GetObjectSize(hSession: number, hObject: number, pulSize: Buffer, callback: Callback): void;
        /**
         * C_GetAttributeValue obtains the value of one or more object attributes.
         * @param {number} hSession the session's handle
         * @param {number} hObject the object's handle
         * @param {Buffer} pTemplate specifies attrs; gets vals
         * @param {number} ulCount attributes in template
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetAttributeValue(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number): number;
        C_GetAttributeValue(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number, callback: Callback): void;
        /**
         * C_SetAttributeValue modifies the value of one or more object attributes
         * @param {number} hSession the session's handle
         * @param {number} hObject the object's handle
         * @param {Buffer} pTemplate specifies attrs and values
         * @param {number} ulCount attributes in template
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SetAttributeValue(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number): number;
        C_SetAttributeValue(hSession: number, hObject: number, pTemplate: Buffer, ulCount: number, callback: Callback): void;
        /**
         * C_FindObjectsInit initializes a search for token and session
         * objects that match a template.
         * @param {number} hSession the session's handle
         * @param {Buffer} pTemplate attribute values to match
         * @param {number} ulCount attrs in search template
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_FindObjectsInit(hSession: number, pTemplate: Buffer, ulCount: number): number;
        C_FindObjectsInit(hSession: number, pTemplate: Buffer, ulCount: number, callback: Callback): void;
        /**
         * C_FindObjects continues a search for token and session
         * objects that match a template, obtaining additional object
         * handles.
         * @param {number} hSession the session's handle
         * @param {Buffer} phObject gets obj. handles
         * @param {number} ulMaxObjectCount max handles to get
         * @param {Buffer} pulObjectCount actual # returned
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_FindObjects(hSession: number, phObject: Buffer, ulMaxObjectCount: number, pulObjectCount: Buffer): number;
        C_FindObjects(hSession: number, phObject: Buffer, ulMaxObjectCount: number, pulObjectCount: Buffer, callback: Callback): void;
        /**
         * C_FindObjectsFinal finishes a search for token and session objects.
         * @param {number} hSession the session's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_FindObjectsFinal(hSession: number): number;
        C_FindObjectsFinal(hSession: number, callback: Callback): void;
        /**
         * C_EncryptInit initializes an encryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the encryption mechanism
         * @param {number} hKey handle of encryption key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_EncryptInit(hSession: number, pMechanism: Buffer, hKey: number): number;
        C_EncryptInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_Encrypt encrypts single-part data.
         * @param {number} hSession the session's handle
         * @param {Buffer} pData the plaintext data
         * @param {number} ulDataLen bytes of plaintext
         * @param {Buffer} pEncryptedData gets ciphertext
         * @param {Buffer} pulEncryptedDataLen gets c-text size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Encrypt(hSession: number, pData: Buffer, ulDataLen: number, pEncryptedData: Buffer, pulEncryptedDataLen: Buffer): number;
        C_Encrypt(hSession: number, pData: Buffer, ulDataLen: number, pEncryptedData: Buffer, pulEncryptedDataLen: Buffer, callback: Callback): void;
        /**
         * C_EncryptUpdate continues a multiple-part encryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart the plaintext data
         * @param {number} ulPartLen plaintext data len
         * @param {Buffer} pEncryptedPart gets ciphertext
         * @param {Buffer} pulEncryptedPartLen gets c-text size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_EncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer): number;
        C_EncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer, callback: Callback): void;
        /**
         * C_EncryptFinal finishes a multiple-part encryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pLastEncryptedPart last c-text
         * @param {Buffer} pulLastEncryptedPartLen gets last size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_EncryptFinal(hSession: number, pLastEncryptedPart: Buffer, pulLastEncryptedPartLen: Buffer): number;
        C_EncryptFinal(hSession: number, pLastEncryptedPart: Buffer, pulLastEncryptedPartLen: Buffer, callback: Callback): void;
        /**
         * C_DecryptInit initializes a decryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the decryption mechanism
         * @param {number} hKey handle of decryption key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DecryptInit(hSession: number, pMechanism: Buffer, hKey: number): any;
        C_DecryptInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_Decrypt decrypts encrypted data in a single part.
         * @param {number} hSession the session's handle
         * @param {Buffer} pEncryptedData ciphertext
         * @param {number} ulEncryptedDataLen ciphertext length
         * @param {Buffer} pData gets plaintext
         * @param {number} pulDataLen gets p-text size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Decrypt(hSession: number, pEncryptedData: Buffer, ulEncryptedDataLen: number, pData: Buffer, pulDataLen: Buffer): number;
        C_Decrypt(hSession: number, pEncryptedData: Buffer, ulEncryptedDataLen: number, pData: Buffer, pulDataLen: Buffer, callback: Callback): void;
        /**
         * C_DecryptUpdate continues a multiple-part decryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pEncryptedPart encrypted data
         * @param {number} ulEncryptedPartLen input length
         * @param {Buffer} pPart gets plaintext
         * @param {Buffer} pulPartLen p-text size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DecryptUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer): number;
        C_DecryptUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer, callback: Callback): void;
        /**
         * C_DecryptFinal finishes a multiple-part decryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pLastPart gets plaintext
         * @param {Buffer} pulLastPartLen p-text size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DecryptFinal(hSession: number, pLastPart: Buffer, pulLastPartLen: Buffer): number;
        C_DecryptFinal(hSession: number, pLastPart: Buffer, pulLastPartLen: Buffer, callback: Callback): void;
        /**
         * C_DigestInit initializes a message-digesting operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the digesting mechanism
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DigestInit(hSession: number, pMechanism: Buffer): number;
        C_DigestInit(hSession: number, pMechanism: Buffer, callback: Callback): void;
        /**
         * C_Digest digests data in a single part.
         * @param {number} hSession the session's handle
         * @param {Buffer} pData data to be digested
         * @param {number} ulDataLen bytes of data to digest
         * @param {Buffer} pDigest gets the message digest
         * @param {Buffer} pulDigestLen gets digest length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Digest(hSession: number, pData: Buffer, ulDataLen: number, pDigest: Buffer, pulDigestLen: Buffer): number;
        C_Digest(hSession: number, pData: Buffer, ulDataLen: number, pDigest: Buffer, pulDigestLen: Buffer, callback: Callback): void;
        /**
         * C_DigestUpdate continues a multiple-part message-digesting operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart data to be digested
         * @param {number} ulPartLen bytes of data to be digested
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DigestUpdate(hSession: number, pPart: Buffer, ulPartLen: number): number;
        C_DigestUpdate(hSession: number, pPart: Buffer, ulPartLen: number, callback: Callback): void;
        /**
         * C_DigestKey continues a multi-part message-digesting operation,
         * by digesting the value of a secret key as part of
         * the data already digested.
         * @param {number} hSession the session's handle
         * @param {number} hKey secret key to digest
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DigestKey(hSession: number, hKey: number): number;
        C_DigestKey(hSession: number, hKey: number, callback: Callback): void;
        /**
         * C_DigestFinal finishes a multiple-part message-digesting
         * operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pDigest gets the message digest
         * @param {Buffer} pulDigestLen gets byte count of digest
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DigestFinal(hSession: number, pDigest: Buffer, pulDigestLen: Buffer): number;
        C_DigestFinal(hSession: number, pDigest: Buffer, pulDigestLen: Buffer, callback: Callback): void;
        /**
         * C_SignInit initializes a signature (private key encryption)
         * operation, where the signature is (will be) an appendix to
         * the data, and plaintext cannot be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the signature mechanism
         * @param {number} hKey handle of signature key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignInit(hSession: number, pMechanism: Buffer, hKey: number): number;
        C_SignInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_Sign signs (encrypts with private key) data in a single
         * part, where the signature is (will be) an appendix to the
         * data, and plaintext cannot be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pData the data to sign
         * @param {number} ulDataLen count of bytes to sign
         * @param {Buffer} pSignature gets the signature
         * @param {Buffer} pulSignatureLen gets signature length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Sign(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, pulSignatureLen: Buffer): number;
        C_Sign(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, pulSignatureLen: Buffer, callback: Callback): void;
        /**
         * C_SignUpdate continues a multiple-part signature operation,
         * where the signature is (will be) an appendix to the data,
         * and plaintext cannot be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart the data to sign
         * @param {number} ulPartLen count of bytes to sign
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignUpdate(hSession: number, pPart: Buffer, ulPartLen: Buffer): number;
        C_SignUpdate(hSession: number, pPart: Buffer, ulPartLen: Buffer, callback: Callback): void;
        /**
         * C_SignFinal finishes a multiple-part signature operation,
         * returning the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pSignature gets the signature
         * @param {Buffer} pulSignatureLen gets signature length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignFinal(hSession: number, pSignature: Buffer, pulSignatureLen: Buffer): number;
        C_SignFinal(hSession: number, pSignature: Buffer, pulSignatureLen: Buffer, callback: Callback): void;
        /**
         * C_SignRecoverInit initializes a signature operation, where
         * the data can be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the signature mechanism
         * @param {number} hKey handle of the signature key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignRecoverInit(hSession: number, pMechanism: Buffer, hKey: number): number;
        C_SignRecoverInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_SignRecover signs data in a single operation, where the
         * data can be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pData the data to sign
         * @param {number} ulDataLen count of bytes to sign
         * @param {Buffer} pSignature gets the signature
         * @param {Buffer} pulSignatureLen gets signature length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignRecover(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, pulSignatureLen: Buffer): number;
        C_SignRecover(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, pulSignatureLen: Buffer, callback: Callback): void;
        /**
         * C_VerifyInit initializes a verification operation, where the
         * signature is an appendix to the data, and plaintext cannot
         * cannot be recovered from the signature (e.g. DSA).
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the verification mechanism
         * @param {number} hKey verification key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_VerifyInit(hSession: number, pMechanism: Buffer, hKey: number): number;
        C_VerifyInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_Verify verifies a signature in a single-part operation,
         * where the signature is an appendix to the data, and plaintext
         * cannot be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pData signed data
         * @param {number} ulDataLen length of signed data
         * @param {Buffer} pSignature signature
         * @param {number} ulSignatureLen signature length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_Verify(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, ulSignatureLen: Buffer): number;
        C_Verify(hSession: number, pData: Buffer, ulDataLen: number, pSignature: Buffer, ulSignatureLen: Buffer, callback: Callback): void;
        /**
         * C_VerifyUpdate continues a multiple-part verification
         * operation, where the signature is an appendix to the data,
         * and plaintext cannot be recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart signed data
         * @param {number} ulPartLen length of signed data
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_VerifyUpdate(hSession: number, pPart: Buffer, ulPartLen: number): number;
        C_VerifyUpdate(hSession: number, pPart: Buffer, ulPartLen: number, callback: Callback): void;
        /**
         * C_VerifyFinal finishes a multiple-part verification
         * operation, checking the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pSignature signature to verify
         * @param {number} ulSignatureLen signature length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_VerifyFinal(hSession: number, pSignature: Buffer, ulSignatureLen: number): number;
        C_VerifyFinal(hSession: number, pSignature: Buffer, ulSignatureLen: number, callback: Callback): void;
        /**
         * C_VerifyRecoverInit initializes a signature verification
         * operation, where the data is recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the verification mechanism
         * @param {number} hKey verification key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_VerifyRecoverInit(hSession: number, pMechanism: Buffer, hKey: number): number;
        C_VerifyRecoverInit(hSession: number, pMechanism: Buffer, hKey: number, callback: Callback): void;
        /**
         * C_VerifyRecover verifies a signature in a single-part
         * operation, where the data is recovered from the signature.
         * @param {number} hSession the session's handle
         * @param {Buffer} pSignature signature to verify
         * @param {number} ulSignatureLen signature length
         * @param {Buffer} pData gets signed data
         * @param {Buffer} pulDataLen gets signed data len
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_VerifyRecover(hSession: number, pSignature: Buffer, ulSignatureLen: number, pData: Buffer, pulDataLen: Buffer): number;
        C_VerifyRecover(hSession: number, pSignature: Buffer, ulSignatureLen: number, pData: Buffer, pulDataLen: Buffer, callback: Callback): void;
        /**
         * C_DigestEncryptUpdate continues a multiple-part digesting
         * and encryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart the plaintext data
         * @param {number} ulPartLen plaintext length
         * @param {Buffer} pEncryptedPart gets ciphertext
         * @param {Buffer} pulEncryptedPartLen gets c-text length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DigestEncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer): number;
        C_DigestEncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer, callback: Callback): void;
        /**
         * C_DecryptDigestUpdate continues a multiple-part decryption and
         * digesting operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pEncryptedPart ciphertext
         * @param {number} ulEncryptedPartLen ciphertext length
         * @param {Buffer} pPart gets plaintext
         * @param {Buffer} pulPartLen gets plaintext len
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DecryptDigestUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer): number;
        C_DecryptDigestUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer, callback: Callback): void;
        /**
         * C_SignEncryptUpdate continues a multiple-part signing and
         * encryption operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pPart the plaintext data
         * @param {number} ulPartLen plaintext length
         * @param {Buffer} pEncryptedPart gets ciphertext
         * @param {Buffer} pulEncryptedPartLen gets c-text length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SignEncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer): number;
        C_SignEncryptUpdate(hSession: number, pPart: Buffer, ulPartLen: number, pEncryptedPart: Buffer, pulEncryptedPartLen: Buffer, callback: Callback): void;
        /**
         * C_DecryptVerifyUpdate continues a multiple-part decryption and
         * verify operation.
         * @param {number} hSession the session's handle
         * @param {Buffer} pEncryptedPart ciphertext
         * @param {number} ulEncryptedPartLen ciphertext length
         * @param {Buffer} pPart gets plaintext
         * @param {Buffer} pulPartLen gets p-text length
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DecryptVerifyUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer): number;
        C_DecryptVerifyUpdate(hSession: number, pEncryptedPart: Buffer, ulEncryptedPartLen: number, pPart: Buffer, pulPartLen: Buffer, callback: Callback): void;
        /**
         * C_GenerateKey generates a secret key, creating a new key object.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism key generation mech.
         * @param {Buffer} pTemplate template for new key
         * @param {number} ulCount # of attrs in template
         * @param {Buffer} phKey gets handle of new key
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GenerateKey(hSession: number, pMechanism: Buffer, pTemplate: Buffer, ulCount: number, phKey: Buffer): number;
        C_GenerateKey(hSession: number, pMechanism: Buffer, pTemplate: Buffer, ulCount: number, phKey: Buffer, callback: Callback): any;
        /**
         * C_GenerateKeyPair generates a public-key/private-key pair,
         * creating new key objects.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism key-gen mech.
         * @param {Buffer} pPublicKeyTemplate template for public key
         * @param {number} ulPublicKeyAttributeCount public attrs
         * @param {Buffer} pPrivateKeyTemplate template for private key
         * @param {number} ulPrivateKeyAttributeCount private attrs
         * @param {Buffer} phPublicKey gets public key handle
         * @param {Buffer} phPrivateKey gets private key handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GenerateKeyPair(hSession: number, pMechanism: Buffer, pPublicKeyTemplate: Buffer, ulPublicKeyAttributeCount: number, pPrivateKeyTemplate: Buffer, ulPrivateKeyAttributeCount: number, phPublicKey: Buffer, phPrivateKey: Buffer): number;
        C_GenerateKeyPair(hSession: number, pMechanism: Buffer, pPublicKeyTemplate: Buffer, ulPublicKeyAttributeCount: number, pPrivateKeyTemplate: Buffer, ulPrivateKeyAttributeCount: number, phPublicKey: Buffer, phPrivateKey: Buffer, callback: Callback): void;
        /**
         * C_WrapKey wraps (i.e., encrypts) a key.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism the wrapping mechanism
         * @param {number} hWrappingKey wrapping key
         * @param {number} hKey key to be wrapped
         * @param {Buffer} pWrappedKey gets wrapped key
         * @param {Buffer} pulWrappedKeyLen gets wrapped key size
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_WrapKey(hSession: number, pMechanism: Buffer, hWrappingKey: number, hKey: number, pWrappedKey: Buffer, pulWrappedKeyLen: Buffer): number;
        C_WrapKey(hSession: number, pMechanism: Buffer, hWrappingKey: number, hKey: number, pWrappedKey: Buffer, pulWrappedKeyLen: Buffer, callback: Callback): void;
        /**
         * C_UnwrapKey unwraps (decrypts) a wrapped key, creating a new
         * key object.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism unwrapping mech.
         * @param {Buffer} pWrappedKey the wrapped key
         * @param {number} ulWrappedKeyLen wrapped key len
         * @param {Buffer} pTemplate new key template
         * @param {number} ulAttributeCount template length
         * @param {Buffer} pTemplate new key template
         * @param {number} ulAttributeCount template length
         * @param {Buffer} phKey gets new handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_UnwrapKey(hSession: number, pMechanism: Buffer, hUnwrappingKey: number, pWrappedKey: Buffer, ulWrappedKeyLen: number, pTemplate: Buffer, ulAttributeCount: number, phKey: Buffer): number;
        C_UnwrapKey(hSession: number, pMechanism: Buffer, hUnwrappingKey: number, pWrappedKey: Buffer, ulWrappedKeyLen: number, pTemplate: Buffer, ulAttributeCount: number, phKey: Buffer, callback: Callback): void;
        /**
         * C_DeriveKey derives a key from a base key, creating a new key object.
         * @param {number} hSession the session's handle
         * @param {Buffer} pMechanism key deriv. mech.
         * @param {number} hBaseKey base key
         * @param {Buffer} pTemplate new key template
         * @param {number} ulAttributeCount template length
         * @param {Buffer} phKey gets new handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_DeriveKey(hSession: number, pMechanism: Buffer, hBaseKey: number, pTemplate: Buffer, ulAttributeCount: number, phKey: Buffer): number;
        C_DeriveKey(hSession: number, pMechanism: Buffer, hBaseKey: number, pTemplate: Buffer, ulAttributeCount: number, phKey: Buffer, callback: Callback): void;
        /**
         * C_SeedRandom mixes additional seed material into the token's
         * random number generator.
         * @param {number} hSession the session's handle
         * @param {Buffer} pSeed the seed material
         * @param {number} ulSeedLen length of seed material
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_SeedRandom(hSession: number, pSeed: Buffer, ulSeedLen: number): number;
        C_SeedRandom(hSession: number, pSeed: Buffer, ulSeedLen: number, callback: Callback): void;
        /**
         * C_GenerateRandom generates random data.
         * @param {number} hSession the session's handle
         * @param {Buffer} pRandomData receives the random data
         * @param {number} ulRandomLen # of bytes to generate
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GenerateRandom(hSession: number, pRandomData: Buffer, ulRandomLen: number): number;
        C_GenerateRandom(hSession: number, pRandomData: Buffer, ulRandomLen: number, callback: Callback): void;
        /**
         * C_GetFunctionStatus is a legacy function; it obtains an
         * updated status of a function running in parallel with an
         * application.
         * @param {number} hSession the session's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_GetFunctionStatus(hSession: number): number;
        C_GetFunctionStatus(hSession: number, callback: Callback): void;
        /**
         * C_CancelFunction is a legacy function; it cancels a function
         * running in parallel.
         * @param {number} hSession the session's handle
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_CancelFunction(hSession: number): number;
        C_CancelFunction(hSession: number, callback: Callback): void;
        /**
         * C_WaitForSlotEvent waits for a slot event (token insertion,
         * removal, etc.) to occur.
         * @param {number} flags blocking/nonblocking flag
         * @param {Buffer} pSlot location that receives the slot ID
         * @param {Buffer} pRserved reserved.  Should be NULL_PTR
         * @param {Callback} callback callback function with PKCS11 result value
         * @returns void PKCS11 result value
         */
        C_WaitForSlotEvent(flags: number, pSlot: Buffer, pRserved: Buffer): number;
        C_WaitForSlotEvent(flags: number, pSlot: Buffer, pRserved: Buffer, callback: Callback): number;
    }

    enum KeyType {
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
    enum KeyGenMechanism {
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

    enum MechanismEnum {
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
        CMS_SIG,
        KIP_DERIVE,
        KIP_WRAP,
        KIP_MAC,
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

    interface IParams {
        toCKI(): Buffer;
    }

    interface IAlgorithm {
        name: string;
        params: Buffer | IParams;
    }

    type MechanismType = MechanismEnum | KeyGenMechanism | IAlgorithm | string;

    enum MechanismFlag {
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
    class Mechanism extends HandleObject {
        protected slotHandle: number;
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
        constructor(handle: number, slotHandle: number, lib: Pkcs11);
        protected getInfo(): void;
        static create(alg: MechanismType): Buffer;
        static vendor(jsonFile: string): any;
        static vendor(name: string, value: number): any;
    }

    class MechanismCollection extends Collection<Mechanism> {
        protected slotHandle: number;
        constructor(items: Array<number>, slotHandle: number, lib: Pkcs11, classType?: typeof Mechanism);
        /**
         * returns item from collection by index
         * @param {number} index of element in collection `[0..n]`
         */
        items(index: number): Mechanism;
    }

    /**
     * Definition for the base key object class
     * - defines the object class `CKO_PUBLIC_KEY`, `CKO_PRIVATE_KEY` and `CKO_SECRET_KEY` for type `CK_OBJECT_CLASS`
     * as used in the `CKA_CLASS` attribute of objects
     */
    class Key extends Storage {
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


    class DomainParameters extends Storage {
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

    /**
     * Data objects (object class `CKO_DATA`) hold information defined by an application.
     * Other than providing access to it, Cryptoki does not attach any special meaning to a data object
     */
    class Data extends Storage {
        /**
         * Description of the application that manages the object (default empty)
         */
        application: string;
        /**
         * DER-encoding of the object identifier indicating the data object type (default empty)
         */
        objectId: Buffer;
        /**
         * Value of the object (default empty)
         */
        value: Buffer;
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
        OtpUserId?: any;
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
    class Attribute {
        protected $value: Buffer;
        type: number;
        name: string;
        convertType: string;
        length: number;
        value: any;
        constructor(type: number, value?: any);
        constructor(type: string, value?: any);
        get(): any;
        set(template: any): void;
    }
    class Template {
        protected attrs: Attribute[];
        length: number;
        constructor(template: string);
        constructor(template: ITemplate);
        set(v: any): Template;
        ref(): Buffer;
        serialize(): any;
    }

    class BaseObject {
        protected lib: Pkcs11;
        constructor(lib?: Pkcs11);
    }
    class HandleObject extends BaseObject {
        /**
         * handle to pkcs11 object
         */
        handle: number;
        constructor(handle: number, lib: Pkcs11);
        protected getInfo(): void;
    }

    enum ObjectClass {
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

    class SessionObject extends HandleObject {
        /**
         * Session
         */
        session: Session;
        /**
         * gets the size of an object in bytes
         */
        size: number;
        constructor(object: SessionObject);
        constructor(handle: number, session: Session, lib: Pkcs11);
        /**
         * copies an object, creating a new object for the copy
         * @param {ITemplate} template template for the new object
         */
        copy(template: ITemplate): SessionObject;
        /**
         * destroys an object
         */
        destroy(): void;
        getAttribute(attr: string): ITemplate;
        getAttribute(attrs: ITemplate): ITemplate;
        setAttribute(attrs: string, value: any): any;
        setAttribute(attrs: ITemplate): any;
        protected get(name: string): any;
        protected set(name: string, value: any): void;
        class: ObjectClass;
        toType<T extends SessionObject>(): T;
    }

    class SessionObjectCollection extends Collection<SessionObject> {
        session: Session;
        items(index: number): SessionObject;
        constructor(items: Array<number>, session: Session, lib: Pkcs11, classType?: any);
    }

    /**
     * Private key objects (object class `CKO_PRIVATE_KEY`) hold private keys
     */
    class PrivateKey extends Key {
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
     * Public key objects (object class CKO_PUBLIC_KEY) hold public keys
     */
    class PublicKey extends Key {
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
     * Secret key objects (object class `CKO_SECRET_KEY`) hold secret keys.
     */
    class SecretKey extends Key {
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


    interface ISlotInfo {
        slotDescription: string;
        manufacturerID: string;
        flags: number;
        hardwareVersion: IVersion;
        firmwareVersion: IVersion;
    }

    enum SlotFlag {
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

    interface IVersion {
        major: number;
        minor: number;
    }
    interface IModuleInfo {
        cryptokiVersion: IVersion;
        manufacturerID: string;
        flags: number;
        libraryDescription: string;
        libraryVersion: IVersion;
    }

    class Collection<T extends HandleObject> {
        protected items_: Array<number>;
        protected classType: any;
        protected lib: Pkcs11;
        constructor(items: Array<number>, lib: Pkcs11, classType: any);
        /**
         * returns length of collection
         */
        length: number;
        /**
         * returns item from collection by index
         * @param {number} index of element in collection `[0..n]`
         */
        items(index: number): T;
    }

    enum SessionOpenFlag {
        /**
         * session is r/w
         */
        RW_SESSION,
        /**
         * no parallel
         */
        SERIAL_SESSION,
    }
    enum SessionFlag {
        /**
         * `True` if the session is read/write; `false` if the session is read-only
         */
        RW_SESSION,
        /**
         * This flag is provided for backward compatibility, and should always be set to `true`
         */
        SERIAL_SESSION,
    }
    enum UserType {
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
     */
    class Session extends HandleObject {
        constructor(handle: number, slot: Slot, lib: Pkcs11);
        slot: Slot;
        /**
         * the state of the session
         */
        state: number;
        /**
         * bit flags that define the type of session
         */
        flags: number;
        /**
         * an error code defined by the cryptographic device. Used for errors not covered by Cryptoki
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
         */
        create(template: ITemplate): SessionObject;
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
        find(callback?: (obj: SessionObject) => void): SessionObjectCollection;
        find(template: ITemplate, callback?: (obj: SessionObject) => void): SessionObjectCollection;
        /**
         * Returns object from session by handle
         * @param  {number} handle handle of object
         * @returns T
         */
        getObject<T extends SessionObject>(handle: number): T;
        /**
         * generates a secret key or set of domain parameters, creating a new object.
         * @param mechanism generation mechanism
         * @param template template for the new key or set of domain parameters
         */
        generateKey(mechanism: MechanismType, template?: ITemplate): SecretKey;
        generateKey(mechanism: MechanismType, template: ITemplate, callback: (err: Error, key: SecretKey) => void): void;
        generateKeyPair(mechanism: MechanismType, publicTemplate: ITemplate, privateTemplate: ITemplate): IKeyPair;
        createSign(alg: MechanismType, key: Key): Sign;
        createVerify(alg: MechanismType, key: Key): Verify;
        createCipher(alg: MechanismType, key: Key): Cipher;
        createDecipher(alg: MechanismType, key: Key): Decipher;
        createDigest(alg: MechanismType): Digest;
        wrapKey(alg: MechanismType, wrappingKey: Key, key: Key): Buffer;
        unwrapKey(alg: MechanismType, unwrappingKey: Key, wrappedKey: Buffer, template: ITemplate): Key;
        /**
         * derives a key from a base key, creating a new key object
         * @param {MechanismType} alg key deriv. mech
         * @param {Key} baseKey base key
         * @param {ITemplate} template new key template
         */
        deriveKey(alg: MechanismType, baseKey: Key, template: ITemplate): SecretKey;
        /**
         * generates random data
         * @param {number} size \# of bytes to generate
         */
        generateRandom(size: number): Buffer;
    }

    enum TokenFlag {
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
    }
    class Token extends HandleObject {
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
        hardwareVersion: IVersion;
        /**
         * version number of firmware
         */
        firmwareVersion: IVersion;
        /**
         * current time as a character-string of length 16,
         * represented in the format YYYYMMDDhhmmssxx
         */
        utcTime: Date;
        constructor(handle: number, lib: Pkcs11);
        protected getInfo(): void;
    }

    class Slot extends HandleObject implements ISlotInfo {
        slotDescription: string;
        manufacturerID: string;
        flags: number;
        hardwareVersion: IVersion;
        firmwareVersion: IVersion;
        module: Module;
        constructor(handle: number, module: Module, lib: Pkcs11);
        protected getInfo(): void;
        getToken(): Token;
        /**
         * returns list of `MechanismInfo`
         */
        getMechanisms(): MechanismCollection;
        /**
         * initializes a token
         * @param {string} pin the SO's initial PIN
         * @param {string} label label of the token
         */
        initToken(pin: string, label: string): void;
        /**
         * opens a session between an application and a token in a particular slot
         * @parsm flags indicates the type of session
         */
        open(flags?: number): Session;
        /**
         * closes all sessions an application has with a token
         */
        closeAll(): void;
    }

    class SlotCollection extends Collection<Slot> {
        module: Module;
        items(index: number): Slot;
        constructor(items: Array<number>, module: Module, lib: Pkcs11, classType?: any);
    }

    class Module extends BaseObject implements IModuleInfo {
        libFile: string;
        libName: string;
        /**
         * Cryptoki interface version
         */
        cryptokiVersion: IVersion;
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
        libraryVersion: IVersion;
        constructor(lib: Pkcs11);
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
         */
        static load(libFile: string, libName?: string): Module;
    }

    class Cipher {
        session: Session;
        lib: Pkcs11;
        constructor(session: Session, alg: MechanismType, key: Key, lib: Pkcs11);
        protected init(alg: MechanismType, key: Key): void;
        update(text: string): Buffer;
        update(data: Buffer): Buffer;
        final(): Buffer;
    }

    class Decipher {
        session: Session;
        lib: Pkcs11;
        constructor(session: Session, alg: MechanismType, key: Key, lib: Pkcs11);
        protected init(alg: MechanismType, key: Key): void;
        update(text: string): Buffer;
        update(data: Buffer): Buffer;
        final(): Buffer;
    }

    class Digest {
        session: Session;
        lib: Pkcs11;
        constructor(session: Session, alg: MechanismType, lib: Pkcs11);
        protected init(alg: MechanismType): void;
        update(text: string): void;
        update(data: Buffer): void;
        final(): Buffer;
    }

    class Sign {
        session: Session;
        lib: Pkcs11;
        constructor(session: Session, alg: MechanismType, key: Key, lib: Pkcs11);
        protected init(alg: MechanismType, key: Key): void;
        update(text: string): void;
        update(data: Buffer): void;
        final(): Buffer;
    }

    class Verify {
        session: Session;
        lib: Pkcs11;
        constructor(session: Session, alg: MechanismType, key: Key, lib: Pkcs11);
        protected init(alg: MechanismType, key: Key): void;
        update(text: string): void;
        update(data: Buffer): void;
        final(signature: Buffer): boolean;
    }

    /**
     * 
     * EC
     * 
     */

    /**
     * EcKdf is used to indicate the Key Derivation Function (KDF)
     * applied to derive keying data from a shared secret.
     * The key derivation function will be used by the EC key agreement schemes.
     */
    enum EcKdf {
        NULL,
        SHA1,
        SHA224,
        SHA256,
        SHA384,
        SHA512,
    }

    class EcdhParams implements IParams {
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
        /**
         * @param  {EcKdf} kdf key derivation function used on the shared secret value
         * @param  {Buffer=null} sharedData some data shared between the two parties
         * @param  {Buffer=null} publicData other party's EC public key value
         */
        constructor(kdf: EcKdf, sharedData?: Buffer, publicData?: Buffer);
        toCKI(): Buffer;
    }

    export interface INamedCurve {
        name: string;
        oid: string;
        value: Buffer;
        size: number;
    }

    class NamedCurve {
        static getByName(name: string): INamedCurve;
        static getByOid(oid: string): INamedCurve;
    }

    /**
     * 
     * AES
     * 
     */

    class AesCbcParams implements IParams {
        /**
         * initialization vector
         * - must have a fixed size of 16 bytes
         */
        iv: Buffer;
        /**
         * the data
         */
        data: Buffer;
        constructor(iv: Buffer, data: Buffer);
        toCKI(): Buffer;
    }

    class AesCcmParams implements IParams {
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
        constructor(dataLength: number, nonce: Buffer, aad?: Buffer, macLength?: number);
        toCKI(): Buffer;
    }

    class AesGcmParams implements IParams {
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
        constructor(iv: Buffer, aad?: Buffer, tagBits?: number);
        toCKI(): Buffer;
    }

    /**
     * 
     * RSA
     * 
     */

    enum RsaMgf {
        MGF1_SHA1,
        MGF1_SHA224,
        MGF1_SHA256,
        MGF1_SHA384,
        MGF1_SHA512,
    }

    class RsaOaepParams implements IParams {
        hashAlgorithm: MechanismEnum;
        mgf: RsaMgf;
        source: number;
        sourceData: Buffer;
        constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, sourceData?: Buffer);
        toCKI(): Buffer;
    }

    class RsaPssParams implements IParams {
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
        constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, saltLen?: number);
        toCKI(): Buffer;
    }

}