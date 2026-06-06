export = RSACryptoPKey;
declare function RSACryptoPKey(bits: number): RSACryptoPKey;
declare class RSACryptoPKey {
    constructor(bits: number);
    privateEncrypt(text: string, padding: number): string;
    publicEncrypt(text: string, padding: number): string;
    privateDecrypt(text: string, padding: number): string;
    publicDecrypt(text: string, padding: number): string;
}
declare namespace RSACryptoPKey {
    function importPrivateKey(format: string, key: string, opt_sec?: string): RSACryptoPKey;
    function importPublicKey(format: string, key: string): RSACryptoPKey;
}
