export declare const str2ab: (str: string) => ArrayBuffer;
export declare const importPrivateKey: (pemKey: string) => Promise<CryptoKey>;
export declare const importPublicKey: (hexKey: string) => Promise<CryptoKey>;
export declare const exportPublicKeyToHex: (publicKey: CryptoKey) => Promise<string>;
export declare const exportPemKeys: (keys: CryptoKeyPair) => Promise<{
    publicKey: string;
    secretKey: string;
}>;
export declare const encryptMessage: (senderSecretKeyPem: string, // PEM format
receiverPublicKeyHex: string, // hex format
message: string | Uint8Array, iv?: Uint8Array) => Promise<string>;
export declare const decryptMessageString: (senderPublicKeyHex: string, receiverSecretKeyPem: string, messageHex: string) => Promise<string>;
export declare const decryptMessageUint8Array: (senderPublicKeyHex: string, receiverSecretKeyPem: string, messageHex: string) => Promise<Uint8Array<ArrayBuffer>>;
//# sourceMappingURL=encryption.d.ts.map