export = Sha512;

declare function Sha512(): Sha512.Sha512;

declare namespace Sha512 {
    const WASM_SUPPORTED: boolean;
    const WASM_LOADED: boolean;
    const SHA512_BYTES: 64;
    const HMAC: HMACCtor | undefined;

    function ready(cb: () => void): void;

    interface Sha512 {
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
