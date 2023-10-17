/// <reference types="node" />

/**
 * The format of the id feed is described in the [protocol guide - keys and identities](https://ssbc.github.io/scuttlebutt-protocol-guide/#keys-and-identities)
 */
export interface Keys {
    curve: string;
    public: string;
    private: string;
    id: string;
}

/**
 * Returns the sha256 hash of a given data. If encoding is not provided then it is assumed to be binary.
 */
export function hash(data: Buffer, encoding?: string): string;

/**
 * The SSB ids contain a tag at the end. This function returns it.
 * So if you have a string like `@gaQw6zD4pHrg8zmrqku24zTSAINhRg=.ed25519` this function would return `ed25519`.
 * This is useful as SSB start providing features for different encryption methods and cyphers.
 */
export function getTag(ssb_id: string): string;

/**
 * Load a file containing the your private key. the file will also contain a comment with a warning about keeping the file secret.
 *
 * Works in the browser, or stores the keys is localStorage in the browser.
 * (web apps should be hosted a secure way, for example [web-bootloader](https://github.com/dominictarr/web-bootloader)) In the browser, the `filename` is used as the localStorage key.
 * (note: web workers do not support localStorage, so the browser storage localtion will likely be changed to indexeddb in the future)
 *
 * If the file does not exist it will be created.
 * there is also variations and parts `loadOrCreate` (async), `load`, `create` `createSync` `loadSync`.
 * But since you only need to load once, using the combined function is easiest.
 */
export function loadOrCreateSync(filename: string): Keys;

/**
 * If a sync file access method is not available, `loadOrCreate` can be called with a callback.
 * that callback will be called with `cb(null, keys)`. If loading the keys errored, new keys are created.
 */
export function loadOrCreate(filename: string, cb: (err: Error | null, keys: Keys) => any): void;

/**
 * generate a key, with optional seed. curve defaults to `ed25519` (and no other type is currently supported) seed should be a 32 byte buffer.
 */
export function generate(curve?: string, seed?: Buffer): Keys;

/**
 * signs a javascript object, and then adds a signature property to it.
 *
 * If `hmac_key` is provided, the object is hmaced before signing, which means it cannot be verified without the correct `hmac_key`.
 * If each way that signatures are used in your application use a different hmac key, it means that a signature intended for one use cannot be reused in another (chosen protocol attack)
 *
 * The fine details of the signature format are described in the [protocol guide](https://ssbc.github.io/scuttlebutt-protocol-guide/#signature)
 */
export function signObj<T extends object>(keys: Keys, obj: T): T & { signature: string };
export function signObj<T extends object>(keys: Keys, hmac_key: string, obj: T): T & { signature: string };

/**
 * verify a signed object. `hmac_key` must be the same value as passed to `signObj`.
 */
export function verifyObj(keys: Keys, obj: { signature: string }): boolean;
export function verifyObj(keys: Keys, hmac_key: string, obj: { signature: string }): boolean;

/**
 * encrypt a message content to many recipients. msg will be JSON encoded, then encrypted with [private-box](https://github.com/auditdrivencrypto/private-box)
 *
 * `recipients` must be an array of feed ids. your own feed id should be included.
 */
export function box(content: object | string | boolean | number, recipients: ReadonlyArray<string>): string;

/**
 * decrypt a message encrypted with `box`. If the `boxed` successfully decrypted, the parsed JSON is returned, if not, `undefined` is returned.
 *
 * the decryption process is described in the [protocol guide - decrypting](https://ssbc.github.io/scuttlebutt-protocol-guide/#decrypting)
 */
export function unbox(boxed: string, keys: Keys): object | string | boolean | number | undefined;

/**
 * extract the `msg_key` used to encrypt this message, or null if it cannot be decrypted. the `msg_key` if not null, can then be passed to `unboxBody`
 */
export function unboxKey(boxed: string, keys: Keys): string | null | undefined;

/**
 * decrypt a message `content` with a `msg_key`. returns the plaintext message content or null if this is not the correct `msg_key`.
 * The purpose of `unboxBody` and `unboxKey` is so support messages that are shared then later revealed.
 */
export function unboxBody(boxed: string, msg_key: string): string | null | undefined;

/**
 * symmetrically encrypt an object with `key` (a buffer)
 */
export function secretBox(obj: object, key: Buffer): Buffer;

/**
 * symmetrically decrypt an object with `key` (a buffer)
 */
export function secretUnbox(boxed: Buffer, key: Buffer): object;
