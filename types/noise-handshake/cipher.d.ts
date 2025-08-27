export = CipherState;

declare class CipherState {
    static readonly MACBYTES: 16;
    static readonly NONCEBYTES: 8;
    static readonly KEYBYTES: 32;

    readonly CIPHER_ALG: "ChaChaPoly";
    key: Buffer | Uint8Array | null;
    nonce: number | null;

    get hasKey(): boolean;

    constructor(key?: Buffer | Uint8Array);

    initialiseKey(key: Buffer | Uint8Array): void;
    setNonce(nonce: number): void;
    encrypt(
        plaintext: string | Buffer | Uint8Array,
        additionalData?: string | Buffer | Uint8Array,
    ): Buffer | Uint8Array;
    decrypt(
        ciphertext: string | Buffer | Uint8Array,
        additionalData?: string | Buffer | Uint8Array,
    ): Buffer | Uint8Array;
    _clear(): void;
}
