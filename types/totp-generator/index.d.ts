// Type definitions for totp-generator 0.0
// Project: https://github.com/bellstrand/totp-generator
// Definitions by: haykam821 <https://github.com/haykam821>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TotpOptions {
    period?: number;
    /**
     * The desired SHA variant (SHA-1, SHA-224, SHA-256, SHA-384, SHA-512,
     * SHA3-224, SHA3-256, SHA3-384, SHA3-512, SHAKE128, or SHAKE256).
     */
    algorithm?: string;
    digits?: number;
}

declare function getToken(key: string, options?: TotpOptions): number;
export = getToken;
