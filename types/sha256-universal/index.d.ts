export = Sha256;

declare function Sha256(): Sha256.Sha256;

declare namespace Sha256 {
    const WASM_SUPPORTED: boolean;
    const WASM_LOADED: boolean;
    const SHA256_BYTES: 32;
    const HMAC: HMACCtor | undefined;

    function ready(cb: () => void): void;

    interface Sha256 {
        update(input: Uint8Array | ReadonlyArray<number>): this;
        update(input: string, encoding?: string): this;
        digest<TBuf extends Uint8Array = Uint8Array>(enc?: TBuf, offset?: number): TBuf;
        digest(enc: string): string;
    }

    interface HMACCtor {
        (key: Uint8Array): HMAC;
        new(key: Uint8Array): HMAC;
    }

    interface HMAC {
        update(input: Uint8Array | ReadonlyArray<number>): this;
        update(input: string, encoding?: string): this;
        digest<TBuf extends Uint8Array = Uint8Array>(enc?: TBuf, offset?: number): TBuf;
        digest(enc: string): string;
    }
}
