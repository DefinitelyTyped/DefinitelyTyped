// Type definitions for eth-sig-util 2.1
// Project: https://github.com/MetaMask/eth-sig-util#readme
// Definitions by: Artur Kozak <https://github.com/quezak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

/**
 * @returns a 0x-prefixed 130-byte signature.
 */
export function concatSig(v: number, r: Buffer, s: Buffer): string;

/**
 * @param input a number or a hex string (either 0x-prefixed or not).
 * @returns a 0x-prefixed hex string.
 */
export function normalize(input: string | number): string;

////////////////////////////////////////////////////////////////////////////////
// Personal message signing utils

export interface MessageData<T = any> { data: T; }

export interface SignedMessageData<T = any> extends MessageData<T> { sig: string; }

export function personalSign(privateKey: Buffer, message: MessageData): string;

export function recoverPersonalSignature(message: SignedMessageData): string;

export function extractPublicKey(message: SignedMessageData): string;

////////////////////////////////////////////////////////////////////////////////
// EIP-712 legacy draft utils

export interface EIP712LegacyField {
    type: string;
    name: string;
    value: any;
}

export type EIP712LegacyData = ReadonlyArray<EIP712LegacyField>;

export function typedSignatureHash(data: EIP712LegacyData): string;

export function signTypedDataLegacy(
    privateKey: Buffer,
    message: MessageData<EIP712LegacyData>,
): string;

export function recoverTypedSignatureLegacy(
    message: SignedMessageData<EIP712LegacyData>,
): string;

////////////////////////////////////////////////////////////////////////////////
// Elliptic curve encryption utils

export type EncryptionType = 'x25519-xsalsa20-poly1305';

export interface EncryptedData {
    version: EncryptionType;
    nonce: string;
    ephemPublicKey: string;
    ciphertext: string;
}

/**
 * @param receiverPublicKey a 32-byte base64 string, e.g. from @see `getEncryptionPublicKey`
 * @param data a utf-8 string to be encrypted
 * @param version one of the supported encryption schemes, @see `EncryptionType`
 */
export function encrypt(
    receiverPublicKey: string,
    data: MessageData<string>,
    version: EncryptionType,
): EncryptedData;

/**
 * Same as @see `encrypt`, but encrypts a JSON object.
 */
export function encryptSafely(
    receiverPublicKey: string,
    data: MessageData,
    version: EncryptionType,
): EncryptedData;

/**
 * @param encryptedData result of @see `encrypt`.
 * @param receiverPrivateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
 */
export function decrypt(
    encryptedData: EncryptedData,
    receiverPrivateKey: string | Buffer,
): string;

/**
 * @param encryptedData result of @see `encryptSafely`.
 * @param receiverPrivateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
 */
export function decryptSafely(
    encryptedData: EncryptedData,
    receiverPrivateKey: string | Buffer,
): any;

/**
 * @param privateKey should be a 32-byte Buffer or *not* 0x-prefixed hex string.
 * @returns a 32-byte public key as a base64 string.
 */
export function getEncryptionPublicKey(privateKey: string | Buffer): string;

////////////////////////////////////////////////////////////////////////////////
// EIP-712 current draft utils

export interface EIP712TypeProperty {
    name: string;
    type: string;
}

/**
 * Maps type name to an array describing its properties' types.
 * Should include the `EIP712Domain` struct description.
 */
export interface EIP712Types {
    [name: string]: ReadonlyArray<EIP712TypeProperty>;
}

export interface EIP712Message {
    [key: string]: any;
}

/**
 * The standard requires to use at least one of these fields.
 * @see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#definition-of-domainseparator
 */
export interface EIP712Domain {
    name?: string;
    version?: string;
    chainId?: string | number;
    verifyingContract?: string;
    salt?: string;
}

export interface EIP712TypedData {
    types: EIP712Types;
    primaryType: string;
    domain: EIP712Domain;
    message: EIP712Message;
}

export namespace TypedDataUtils {
    function encodeData(primaryType: string, data: EIP712Message, types: EIP712Types): Buffer;

    function encodeType(primaryType: string, types: EIP712Types): string;

    function findTypeDependencies(
        primaryType: string, types: EIP712Types,
    ): string[];

    function hashStruct(primaryType: string, data: EIP712Message, types: EIP712Types): Buffer;

    function hashType(primaryType: string, types: EIP712Types): Buffer;

    function sanitizeData(data: EIP712TypedData): EIP712TypedData;

    /**
     * @returns hash of the typed data as defined by EIP712 (contrary to the function's name)
     * @see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md#specification
     */
    function sign(data: EIP712TypedData): Buffer;
}

/**
 * A JSON Schema object equivalent to the EIP712Message type.
 */
export const TYPED_MESSAGE_SCHEMA: any;

export function signTypedData(
    privateKey: Buffer,
    msgParams: MessageData<EIP712TypedData>,
): string;

export function recoverTypedSignature(
    msgParams: SignedMessageData<EIP712TypedData>,
): string;
