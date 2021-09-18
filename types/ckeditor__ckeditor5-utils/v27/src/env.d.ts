/**
 * Checks if User Agent represented by the string is Android mobile device.
 *
 */
export function isAndroid(userAgent: string): boolean;
/**
 * Checks if User Agent represented by the string is Blink engine.
 *
 */
export function isBlink(userAgent: string): boolean;
/**
 * Checks if User Agent represented by the string is Firefox (Gecko).
 *
 */
export function isGecko(userAgent: string): boolean;
/**
 * Checks if User Agent represented by the string is running on Macintosh.
 *
 */
export function isMac(userAgent: string): boolean;
/**
 * Checks if the current environment supports ES2018 Unicode properties like `\p{P}` or `\p{L}`.
 * More information about unicode properties might be found
 * [in Unicode Standard Annex #44](https://www.unicode.org/reports/tr44/#GC_Values_Table).
 *
 */
export function isRegExpUnicodePropertySupported(): boolean;
/**
 * Checks if User Agent represented by the string is Safari.
 *
 */
export function isSafari(userAgent: string): boolean;

interface Env {
    isMac: boolean;
    isGecko: boolean;
    isSafari: boolean;
    isAndroid: boolean;
    isBlink: boolean;
    features: {
        isRegExpUnicodePropertySupported: boolean;
    };
}

declare const env: Env;

export default env;
