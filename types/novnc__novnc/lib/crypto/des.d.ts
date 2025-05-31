export class DESECBCipher {
    constructor();
    readonly algorithm: { name: "DES-ECB" };
    encrypt(algorithm: { name: "DES-ECB" }, plaintext: ArrayBuffer | ArrayBufferView): ArrayBuffer | null;
    static importKey(key: ArrayBuffer | ArrayBufferView, algorithm?: any, extractable?: boolean, keyUsages?: KeyUsage[]): DESECBCipher;
}

export class DESCBCCipher {
    constructor();
    readonly algorithm: { name: "DES-CBC" };
    encrypt(algorithm: { name: "DES-CBC", iv: ArrayBuffer | ArrayBufferView }, plaintext: ArrayBuffer | ArrayBufferView): ArrayBuffer | null;
    static importKey(key: ArrayBuffer | ArrayBufferView, algorithm?: any, extractable?: boolean, keyUsages?: KeyUsage[]): DESCBCCipher;
}

export {};
