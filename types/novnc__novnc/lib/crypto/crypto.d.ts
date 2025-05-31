declare class LegacyCrypto {
    encrypt(
        algorithm: AlgorithmIdentifier,
        key: CryptoKey,
        data: ArrayBuffer | ArrayBufferView,
    ): Promise<ArrayBuffer>;
    decrypt(
        algorithm: AlgorithmIdentifier,
        key: CryptoKey,
        data: ArrayBuffer | ArrayBufferView,
    ): Promise<ArrayBuffer>;
    importKey(
        format: "raw",
        keyData: ArrayBuffer | ArrayBufferView,
        algorithm: AlgorithmIdentifier,
        extractable: boolean,
        keyUsages: KeyUsage[],
    ): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    exportKey(format: "raw", key: CryptoKey): Promise<ArrayBuffer>;
    digest(algorithm: AlgorithmIdentifier | string, data: ArrayBuffer | ArrayBufferView): Promise<ArrayBuffer>;
    deriveBits(algorithm: AlgorithmIdentifier, key: CryptoKey, length: number): Promise<ArrayBuffer>;
}

declare const legacyCrypto: LegacyCrypto;
export default legacyCrypto;
