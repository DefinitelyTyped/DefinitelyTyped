/// <reference types="node" />
import { SecureBuffer } from "sodium-native";

/**
 * Generate a new key.
 *
 * @param key The buffer to write the key to. Must be `KEYBYTES` long.
 *
 * @example
 * import * as secretBlob from 'secret-blob'
 *
 * const key = secretBlob.keygen()
 */
export function keygen<TBuf extends Buffer = SecureBuffer>(key?: TBuf): TBuf;
/**
 * Encrypt `plaintext` under `key`.
 *
 * @param plaintext The plaintext to encrypt.
 * @param key The key to use for encryption.
 * @param ciphertext The buffer to write `ciphertext` to. Must be `encryptLength(plaintext)` long.
 *
 * @example
 * import * as secretBlob from 'secret-blob'
 *
 * const key = secretBlob.keygen()
 * const message = Buffer.from('Hello world')
 * const encrypted = secretBlob.encrypt(message, key)
 */
export function encrypt(plaintext: Buffer, key: Buffer, ciphertext?: Buffer): Buffer;
/**
 * @returns The number of bytes required to encrypt plaintext. Simply `plaintext.byteLength + HEADERBYTES`.
 */
export function encryptLength(plaintext: Buffer): number;
/**
 * Decrypt `ciphertext` under `key`.
 *
 * @param ciphertext The ciphertext to decrypt.
 * @param key The key to use for decryption.
 * @param plaintext The buffer to write `plaintext` to. Must be `decryptLength(plaintext)` long.
 *
 * @example
 * import * as secretBlob from 'secret-blob'
 *
 * const key = secretBlob.keygen()
 * const message = Buffer.from('Hello world')
 * const encrypted = secretBlob.encrypt(message, key)
 * const decrypted = secretBlob.decrypt(encrypted, key)
 * console.log(decrypted.toString()) // Hello world
 */
export function decrypt<TBuf extends Buffer = SecureBuffer>(ciphertext: Buffer, key: Buffer, plaintext?: TBuf): TBuf;
/**
 * @returns The number of bytes required to encrypt ciphertext. Simply `ciphertext.byteLength - HEADERBYTES`.
 */
export function decryptLength(ciphertext: Buffer): number;

/** Byte length of a key. */
export const KEYBYTES: number;
/** Byte length of the header added to ciphertext. */
export const HEADERBYTES: number;
