export class DHPublicKey {
    constructor(key: Uint8Array);
    readonly algorithm: { name: "DH" };
    exportKey(): Uint8Array;
}

export class DHCipher {
    constructor();
    readonly algorithm: { name: "DH" };
    deriveBits(algorithm: { name: "DH", public: ArrayBuffer | ArrayBufferView }, length: number): ArrayBuffer;
    static generateKey(algorithm: { name: "DH", g: Uint8Array, p: Uint8Array }, extractable: boolean, keyUsages?: KeyUsage[]): { privateKey: DHCipher, publicKey: DHPublicKey };
}

export {};
