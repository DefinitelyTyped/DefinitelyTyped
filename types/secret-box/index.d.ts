// Type definitions for secret-box 0.1
// Project: https://github.com/jprichardson/secret-box
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Codec } from 'varstruct';
import { BinaryLike } from 'node:crypto';

/**
 * Encrypt secrets. Built on AES-256-GCM and Scrypt.
 *
 * @example
 * import * as secretBox from 'secret-box'
 *
 * const passphrase = Buffer.from('open sesame 2')
 * const message = Buffer.from('The secret launch code is 1234.')
 *
 * const secret = secretBox.encrypt(message, passphrase)
 */
export function encrypt(message: Buffer, passphrase: string | Buffer, opts?: EncryptOptions): Buffer;
/**
 * Decrypt secrets. Built on AES-256-GCM and Scrypt.
 *
 * @example
 * import * as secretBox from 'secret-box'
 *
 * const passphrase = Buffer.from('open sesame 2')
 * const message = Buffer.from('The secret launch code is 1234.')
 *
 * const secret = secretBox.encrypt(message, passphrase)
 * const decrypted = secretBox.decrypt(secret, passphrase)
 *
 * console.log(decrypted.toString('utf8'))
 * // => The secret launch code is 1234.
 */
export function decrypt(secret: Buffer, passphrase: string | Buffer): Buffer;

export const struct: Codec<SerializedResult>;

export interface EncryptOptions {
    salt?: Buffer;
    iv?: BinaryLike;
    n?: number;
    r?: number;
    p?: number;
}

export interface SerializedResult {
    version: number;
    n: number;
    r: number;
    p: number;
    salt: Buffer;
    iv: Buffer;
    authTag: Buffer;
    secret: Buffer;
}
