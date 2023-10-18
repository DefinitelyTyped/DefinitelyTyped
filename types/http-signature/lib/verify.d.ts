import { ParseResponse } from "./parser";

/**
 * Verify RSA/DSA signature against public key.
 * You are expected to pass in an object that was returned from `parse()`
 *
 * @param parsedSignature The return value of `parse()`
 * @param pubkey RSA/DSA private key PEM
 * @returns True if valid, false otherwise
 * @throws {TypeError} For bad arguments
 * @throws {InvalidAlgorithmError}
 */

export function verifySignature(parsedSignature: ParseResponse, pubkey: string): boolean;

/**
 * Verify HMAC against shared secret.
 * You are expected to pass in an object that was returned from `parse()`
 *
 * @param parsedSignature The return value of `parse()`
 * @param buffer HMAC shared secret
 * @returns True if valid, false otherwise
 * @throws {TypeError} For bad arguments
 * @throws {InvalidAlgorithmError}
 */
export function verifyHMAC(parsedSignature: ParseResponse, secret: string | Buffer): boolean;
