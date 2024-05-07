/**
 * Possible SHA variants taken from [jsSHA](https://github.com/Caligatio/jsSHA).
 */
type TotpAlgorithm =
    | "SHA-1"
    | "SHA-224"
    | "SHA-256"
    | "SHA-384"
    | "SHA-512"
    | "SHA3-224"
    | "SHA3-256"
    | "SHA3-384"
    | "SHA3-512";

interface TotpOptions {
    period?: number | undefined;
    /**
     * The desired SHA variant (SHA-1, SHA-224, SHA-256, SHA-384, SHA-512,
     * SHA3-224, SHA3-256, SHA3-384, SHA3-512).
     */
    algorithm?: TotpAlgorithm | undefined;
    digits?: number | undefined;
    timestamp?: number | undefined;
}

/**
 * Generates a `TOTP token` from a TOTP key
 *
 * Keys provided must be **base32 strings**, ie. only containing characters matching `(A-Z, 2-7, =)`.
 *
 * The **default** settings are:
 * - SHA-1
 * - 30 second period
 * - 6 digits
 * - Current time
 *
 * Settings can be provided as an optional second parameter inside an object.
 * ```ts
 * import totp = require("totp-generator");
 *
 * const token = totp("JBSWY3DPEHPK3PXP", {
 *  digits: 8,
 *  algorithm: "SHA-512",
 *  period: 60,
 *  timestamp: 1465324707000,
 * });
 * ```
 */
declare function getToken(key: string, options?: TotpOptions): string;
export = getToken;
