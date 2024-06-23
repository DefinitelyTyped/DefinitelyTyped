export = ECCryptoPKey;
declare function ECCryptoPKey(curve: string): ECCryptoPKey;
declare class ECCryptoPKey {
    constructor(curve: string);
    curveName: string;
}
declare namespace ECCryptoPKey {
    function importPrivateKey(format: string, key: string, sec: any): ECCryptoPKey;
    function importPublicKey(format: string, key: string): ECCryptoPKey;
    function getCurves(): any[];
}
