/**
 * iron is a cryptographic utility for sealing a JSON object using symmetric key encryption with message integrity
 * verification. Or in other words, it lets you encrypt an object, send it around (in cookies, authentication
 * credentials, etc.), then receive it back and decrypt it. The algorithm ensures that the message was not tampered
 * with, and also provides a simple mechanism for password rotation.
 * [See docs](https://github.com/hueniverse/iron)
 * @author typings wrote by SimonSchick <https://github.com/SimonSchick>
 */
export namespace Iron {

    export interface ISomething {
        saltBits: number;
        algorithm: string;
        iterations: number;
        minPasswordlength: number;
    }

    export interface ISealOptions {
        encryption: ISomething;
        integrity: ISomething;

        ttl: number;
        timestampSkewSec: number;
        localtimeOffsetMsec: number;
    }

    /**
     * iron provides a few options for customizing the key deriviation algorithm used to generate encryption and
     * integrity verification keys as well as the algorithms and salt sizes used. The 'seal()' and 'unseal()'
     * methods take an options object with the following required keys:
     * * encryption - defines the options used by the encryption process.
     * * integrity - defines the options used by the HMAC integrity verification process.
     * Each of these option objects includes the following required keys:
     * * saltBits - the size of the salt (random buffer used to ensure that two identical objects will generate a different encrypted result.
     * * algorithm - the algorithm used ('aes-256-cbc' for encryption and 'sha256' for integrity are the only two supported at this time).
     * * iterations - the number of iterations used to derive a key from the password. Set to 1 by default. The number of ideal iterations to use is dependent on your application's performance requirements. More iterations means it takes longer to generate the key.
     * The 'seal()' and 'unseal()' methods also take the following optional options keys:
     * * ttl - sealed object lifetime in milliseconds where 0 means forever. Defaults to 0.
     * * timestampSkewSec - number of seconds of permitted clock skew for incoming expirations. Defaults to 60 seconds.
     * * localtimeOffsetMsec - local clock time offset, expressed in number of milliseconds (positive or negative). Defaults to 0.
     * [See docs](https://github.com/hueniverse/iron#options)
     */
    export const defaults: ISealOptions;

    export const algorithms: {
        'aes-128-ctr': {
            keyBits: number;
            ivBits: number;
        };
        'aes-256-cbc': {
            keyBits: number;
            ivBits: number;
        };
        'sha256': {
            keyBits: number;
        };
    };

    export const macFormatVersion: string;
    export const macPrefix: string;

    export interface IGenerateKeyOptions extends Pick<ISomething, 'algorithm' | 'iterations' | 'minPasswordlength'> {
        saltBits?: number;
        salt?: string;
        iv?: string;
    }

    export interface IKey {
        key: Buffer;
        salt: string;
        iv: string;
    }

    export function generateKey (password: string, options: IGenerateKeyOptions): Promise<IKey>;
    export function encrypt (password: string, options: IGenerateKeyOptions, data: string): Promise<{ data: Buffer, key: IKey }>;
    export function decrypt (password: string, options: IGenerateKeyOptions, data: string): Promise<Buffer>;

    export interface IHMacResult {
        digest: string;
        salt: string;
    }

    export function hmacWithPassword(password: string, options: IGenerateKeyOptions, data: string): Promise<IHMacResult>;

    export function seal (obj: object, password: string, options: ISealOptions): Promise<string>;
    export function unseal (data: string, password: string, options: ISealOptions): Promise<object>;

}
