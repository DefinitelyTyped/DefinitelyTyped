export class AESECBCipher {
    constructor();
    readonly algorithm: { name: "AES-ECB" };
    encrypt(
        algorithm: { name: "AES-ECB" },
        plaintext: ArrayBuffer | ArrayBufferView,
    ): Promise<ArrayBuffer | null>;
    static importKey(
        key: ArrayBuffer | ArrayBufferView,
        algorithm: { name: "AES-ECB" },
        extractable: boolean,
        keyUsages: KeyUsage[],
    ): Promise<AESECBCipher>;
}

export class AESEAXCipher {
    constructor();
    readonly algorithm: { name: "AES-EAX" };
    encrypt(algorithm: AlgorithmIdentifier, message: ArrayBuffer | ArrayBufferView): Promise<ArrayBuffer | null>;
    decrypt(algorithm: AlgorithmIdentifier, data: ArrayBuffer | ArrayBufferView): Promise<ArrayBuffer | null>;
    static importKey(key: ArrayBuffer | ArrayBufferView, algorithm?: any, extractable?: boolean, keyUsages?: KeyUsage[]): Promise<AESEAXCipher>;
}

export {};
