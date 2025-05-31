export interface RSAKeyData {
    n: Uint8Array;
    e: Uint8Array;
    d?: Uint8Array; // Present for private keys
}

export class RSACipher {
    constructor();
    readonly algorithm: { name: "RSA-PKCS1-v1_5" };

    encrypt(algorithm: { name: "RSA-PKCS1-v1_5" }, message: ArrayBuffer | ArrayBufferView): Promise<ArrayBuffer | null>;
    decrypt(algorithm: { name: "RSA-PKCS1-v1_5" }, message: ArrayBuffer | ArrayBufferView): Promise<ArrayBuffer | null>;
    exportKey(): Promise<RSAKeyData>;

    static generateKey(algorithm: { name: "RSA-PKCS1-v1_5", modulusLength: number, publicExponent: Uint8Array }, extractable: boolean, keyUsages: KeyUsage[]): Promise<{ privateKey: RSACipher }>;
    static importKey(keyData: RSAKeyData, algorithm: { name: "RSA-PKCS1-v1_5" }, extractable: boolean, keyUsages: KeyUsage[]): Promise<RSACipher>;
}

export {};
