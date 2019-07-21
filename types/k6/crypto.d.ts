/*
 * Cryptography utilities.
 * https://docs.k6.io/docs/k6crypto
 */

import { bytes } from '.';

/**
 * Generate random bytes.
 * @param size - Number of bytes to generate.
 * @returns Random bytes.
 * @public
 */
export function randomBytes(size: number): bytes;

/**
 * Produce HMAC.
 * https://docs.k6.io/docs/hmac-algorithm-secret-data-outputencoding
 * @param algorithm - Hash algorithm.
 * @param secret - Shared secret.
 * @param data - Input data.
 * @param outputEncoding - Output encoding.
 * @returns Produced HMAC.
 * @public
 */
export function hmac<OE extends OutputEncoding>(
    algorithm: Algorithm,
    secret: string,
    data: string,
    outputEncoding: OE
): Output<OE>;

export function md4(input: string, outputEncoding: BinaryEncoding): bytes;
export function md4(input: string, outputEncoding: StringEncoding): string;
export function md5(input: string, outputEncoding: BinaryEncoding): bytes;
export function md5(input: string, outputEncoding: StringEncoding): string;
export function sha1(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha1(input: string, outputEncoding: StringEncoding): string;
export function sha256(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha256(input: string, outputEncoding: StringEncoding): string;
export function sha384(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha384(input: string, outputEncoding: StringEncoding): string;
export function sha512(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha512(input: string, outputEncoding: StringEncoding): string;
export function sha512_224(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha512_224(input: string, outputEncoding: StringEncoding): string;
export function sha512_256(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha512_256(input: string, outputEncoding: StringEncoding): string;
export function ripemd160(input: string, outputEncoding: BinaryEncoding): bytes;
export function ripemd160(input: string, outputEncoding: StringEncoding): string;
export function createHash(algorithm: Algorithm): Hasher;
export function createHMAC(algorithm: Algorithm, secret: string): Hasher;

export type Algorithm =
    | 'md4'
    | 'md5'
    | 'sha1'
    | 'sha256'
    | 'sha384'
    | 'sha512'
    | 'sha512_224'
    | 'sha512_256'
    | 'ripemd160';
export type StringEncoding = 'hex' | 'base64' | 'base64url' | 'base64rawurl';
export type BinaryEncoding = 'binary';
export type OutputEncoding = StringEncoding | BinaryEncoding;
export type Output<OE extends OutputEncoding>
    = OE extends StringEncoding ? string
    : OE extends BinaryEncoding ? bytes
    : never;

export abstract class Hasher {
    protected __brand: never;
    update(input: string): void;
    digest(outputEncoding: BinaryEncoding): bytes;
    digest(outputEncoding: StringEncoding): string;
}
