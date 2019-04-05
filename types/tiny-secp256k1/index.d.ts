// Type definitions for tiny-secp256k1 1.0
// Project: https://github.com/bitcoinjs/tiny-secp256k1
// Definitions by: Eduardo Henke <https://github.com/eduhenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Checks if A is a point in the curve
 * @param A should be:
 *   encoded with a sequence tag of 0x02, 0x03 or 0x04
 *   A.x is within [1...p - 1]
 *   A.y is within [1...p - 1]
 */
export function isPoint(A: Buffer): boolean;

/**
 * Returns false if the point is not compressed.
 */
export function isPointCompressed(A: Buffer): boolean;

/**
 * Checks if point is private key
 * @param d should be:
 *   256-bit
 *   within [1...order - 1]
 */
export function isPrivate(d: Buffer): boolean;

/**
 * Returns null if result is at infinity.
 * @param A isPoint(A) should be true
 * @param B isPoint(B) should be true
 * @param compressed optional, if true compresses the resulting point
 */
export function pointAdd(A: Buffer, B: Buffer, compressed?: boolean): Buffer | null;

/**
 * Returns null if result is at infinity.
 * @param A isPoint(A) should be true
 * @param tweak should be within [1...order - 1]
 * @param compressed optional, if true compresses the resulting point
 */
export function pointAddScalar(A: Buffer, tweak: Buffer, compressed?: boolean): Buffer | null;

/**
 * Compresses point A.
 * @param A isPoint(A) should be true
 * @param compressed if true compresses A
 */
export function pointCompress(A: Buffer, compressed: boolean): Buffer;

/**
 * Returns null if result is at infinity.
 * @param d isPrivate(d) should be true
 * @param compressed optional, if true compresses the resulting point
 */
export function pointFromScalar(d: Buffer, compressed?: boolean): Buffer | null;

/**
 * Returns null if result is at infinity.
 * @param A isPoint(A) should be true
 * @param tweak should be within [1...order - 1]
 * @param compressed optional, if true compresses the resulting point
 */
export function pointMultiply(A: Buffer, tweak: Buffer, compressed?: boolean): Buffer | null;

/**
 * Returns null if result is equal to 0.
 * @param d isPrivate(d) should be true
 * @param tweak should be within [1...order - 1]
 */
export function privateAdd(d: Buffer, tweak: Buffer): Buffer | null;

/**
 * Returns null if result is equal to 0.
 * @param d isPrivate(d) should be true
 * @param tweak should be within [1...order - 1]
 */
export function privateSub(d: Buffer, tweak: Buffer): Buffer | null;

/**
 * Returns normalized signatures, each of (r, s) values are guaranteed to less than order / 2. Uses RFC6979.
 * @param message should be 256-bit
 * @param privateKey isPrivate(privateKey) should be true
 */
export function sign(message: Buffer, privateKey: Buffer): Buffer;

/**
 * Returns false if any of (r, s) values are equal to 0, or if the signature is rejected.
 * @param message should be 256-bit
 * @param publicKey isPoint(publicKey) should be true
 * @param signature signature should have all (r, s) values within range [0...order - 1]
 */
export function verify(message: Buffer, publicKey: Buffer, signature: Buffer): boolean;
