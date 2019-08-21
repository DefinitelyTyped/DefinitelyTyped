// Type definitions for authenticator 1.1
// Project: https://git.coolaj86.com/coolaj86/node-authenticator.js#readme
// Definitions by: Wilfred Tan <https://github.com/wilfredtan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Object returned by `verifyToken()`.
 * delta: number
 */
export interface VerifyResult {
  delta: number;
}

/**
 * Generates a 32-character (160-bit) base32 key.
 */
export function generateKey(): string;

/**
 * Generates a 6-digit (20-bit) decimal time-based token.
 * @param formattedKey 32-character (160-bit) base32 key.
 */
export function generateToken(formattedKey: string): string;

/**
 * Generates an `OTPAUTH://` scheme URI for QR Code generation.
 * @param formattedKey 32-character (160-bit) base32 key.
 * @param accountName User account e.g. user@gmail.com
 * @param issuer The provider or service this account is associated with, URL-
 * encoded according to RFC 3986
 * @param algorithm The algorithm may have the values:
 * - SHA1 (default)
 * - SHA256
 * - SHA512
 * @param digits The digits parameter may have the values 6 or 8, and determines
 * how long of a one-time passcode to display to the user.
 * @param period The amount of time the TOTP code will be valid for, in seconds.
 */
export function generateTotpUri(formattedKey: string,
                                accountName: string,
                                issuer: string,
                                algorithm: string,
                                digits: number,
                                period: number): string;

/**
 * Validates a time-based token within a +/- 30 second (90 seconds) window
 * returns `null` on failure or an object such as `{ delta: 0 }` on success.
 * @param formattedKey 32-character (160-bit) base32 key.
 * @param formattedToken 6-digit (20-bit) decimal time-based token.
 */
export function verifyToken(formattedKey: string,
                            formattedToken: string): VerifyResult | null;
