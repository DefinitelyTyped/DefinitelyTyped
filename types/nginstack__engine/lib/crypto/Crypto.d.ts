export = Crypto;
declare function Crypto(): void;
declare class Crypto {}
declare namespace Crypto {
    function encrypt(data: string, key: string, cipher?: string, iv?: string): string;
    function encryptBytes(
        data: ArrayBuffer | Uint8Array,
        key: ArrayBuffer | Uint8Array,
        cipher?: string,
        iv?: ArrayBuffer | Uint8Array
    ): Uint8Array;
    function decrypt(data: string, key: string, cipher?: string, iv?: string): string;
    function decryptBytes(
        data: ArrayBuffer | Uint8Array,
        key: ArrayBuffer | Uint8Array,
        cipher?: string,
        iv?: ArrayBuffer | Uint8Array
    ): Uint8Array;
    function randomBytes(size: number, resultType?: string): string | ArrayBuffer | Uint8Array;
    function scrypt(
        password: string | ArrayBuffer | Uint8Array,
        salt: string | ArrayBuffer | Uint8Array,
        keylen: number,
        params?: {
            N?: number;
            r?: number;
            p?: number;
        }
    ): Uint8Array;
    const AES_ECB: string;
    const AES_CBC: string;
    const DES_ECB: string;
    const DES_CBC: string;
    const DES_CFB: string;
    const DES_OFB: string;
    const DES3_ECB: string;
    const DES3_CBC: string;
    const DES3_CFB: string;
    const DES3_OFB: string;
    const BLOWFISH_ECB: string;
    const BLOWFISH_CBC: string;
    const BLOWFISH_CFB: string;
    const BLOWFISH_OFB: string;
    const RC2_ECB: string;
    const RC2_CBC: string;
    const RC2_CFB: string;
    const RC2_OFB: string;
}
