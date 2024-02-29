export = DSACryptoPKey;
declare function DSACryptoPKey(bits: number): DSACryptoPKey;
declare class DSACryptoPKey {
    constructor(bits: number);
    toString(): string;
}
declare namespace DSACryptoPKey {
    function importPrivateKey(format: string, key: string, sec: string): DSACryptoPKey;
    function importPublicKey(format: string, key: string): DSACryptoPKey;
}
