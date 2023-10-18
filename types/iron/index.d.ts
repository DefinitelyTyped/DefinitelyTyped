/// <reference types="node" />

export interface SealOptionsSub {
    /**
     * the size of the salt (random buffer used to ensure that two identical objects will generate a different encrypted result.
     */
    saltBits: number;
    /**
     * the algorithm used ('aes-256-cbc' for encryption and 'sha256' for integrity are the only two supported at this time).
     */
    algorithm: keyof Algorithms;
    /**
     * the number of iterations used to derive a key from the password. Set to 1 by default. The number of ideal iterations
     * to use is dependent on your application's performance requirements. More iterations means it takes longer to generate the key.
     */
    iterations: number;
    /**
     * minimum password size
     */
    minPasswordlength: number;
}

/**
 * iron provides a few options for customizing the key derivation algorithm used to generate encryption and
 * integrity verification keys as well as the algorithms and salt sizes used.
 * For context [See docs](https://github.com/hueniverse/iron#options)
 */
export interface SealOptions {
    /**
     * defines the options used by the encryption process.
     */
    encryption: SealOptionsSub;
    /**
     * defines the options used by the HMAC integrity verification process.
     */
    integrity: SealOptionsSub;
    /**
     * sealed object lifetime in milliseconds where 0 means forever. Defaults to 0.
     */
    ttl: number;
    /**
     * number of seconds of permitted clock skew for incoming expirations. Defaults to 60 seconds.
     */
    timestampSkewSec: number;
    /**
     * local clock time offset, expressed in number of milliseconds (positive or negative). Defaults to 0.
     */
    localtimeOffsetMsec: number;
}

export interface Algorithms {
    "aes-128-ctr": {
        keyBits: number;
        ivBits: number;
    };
    "aes-256-cbc": {
        keyBits: number;
        ivBits: number;
    };
    "sha256": {
        keyBits: number;
    };
}

export interface GenerateKeyOptions extends Pick<SealOptionsSub, "algorithm" | "iterations" | "minPasswordlength"> {
    saltBits?: number | undefined;
    salt?: string | undefined;
    iv?: string | undefined;
}

export interface Key {
    key: Buffer;
    salt: string;
    iv: string;
}

export interface HMacResult {
    digest: string;
    salt: string;
}

export const defaults: SealOptions;
export const algorithms: Algorithms;
export const macFormatVersion: string;
export const macPrefix: string;

export function generateKey(password: string, options: GenerateKeyOptions): Promise<Key>;
export function encrypt(
    password: string,
    options: GenerateKeyOptions,
    data: string,
): Promise<{ data: Buffer; key: Key }>;
export function decrypt(password: string, options: GenerateKeyOptions, data: string): Promise<Buffer>;
export function hmacWithPassword(password: string, options: GenerateKeyOptions, data: string): Promise<HMacResult>;
export function seal(obj: object, password: string, options: SealOptions): Promise<string>;
export function unseal(data: string, password: string, options: SealOptions): Promise<object>;
