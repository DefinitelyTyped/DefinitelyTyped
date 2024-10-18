export = CryptoPKey;
declare function CryptoPKey(type: string, bits: number): CryptoPKey;
declare class CryptoPKey {
    constructor(type: string, bits: number);
    exportPrivateKey(format: string, key: string, cipher: string): string;
    exportPublicKey(format: string): string;
    sign(text: string, opt_digestName?: string): string;
    verify(text: string, sig: string, opt_digestName?: string): boolean;
    keyType: string;
    keyBits: number;
}
declare namespace CryptoPKey {
    function importPrivateKey(format: string, key: string, arg: string): CryptoPKey;
    function importPublicKey(format: string, key: string, type: string): CryptoPKey;
    let RSA_PKCS1_PADDING: number;
    let RSA_NO_PADDING: number;
}
