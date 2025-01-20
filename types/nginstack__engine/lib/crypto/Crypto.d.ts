export = Crypto;
declare function Crypto(): void;
declare class Crypto {}
declare namespace Crypto {
    export {
        encrypt,
        encryptBytes,
        encryptBytesWithAuth,
        decrypt,
        decryptBytes,
        randomBytes,
        scrypt,
        AES_ECB,
        AES_CBC,
        AES_GCM,
        DES_ECB,
        DES_CBC,
        DES_CFB,
        DES_OFB,
        DES3_ECB,
        DES3_CBC,
        DES3_CFB,
        DES3_OFB,
        BLOWFISH_ECB,
        BLOWFISH_CBC,
        BLOWFISH_CFB,
        BLOWFISH_OFB,
        RC2_ECB,
        RC2_CBC,
        RC2_CFB,
        RC2_OFB,
        EncryptOptions,
        DecryptOptions,
    };
}
declare function encrypt(
    data: string,
    key: string | Uint8Array | ArrayBuffer,
    cipher?: string,
    iv?: string | Uint8Array | ArrayBuffer
): string;
declare function encryptBytes(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: EncryptOptions
): Uint8Array;
declare function encryptBytesWithAuth(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: EncryptOptions
): {
    data: Uint8Array;
    authTag: Uint8Array;
};
declare function decrypt(
    data: string,
    key: string | Uint8Array | ArrayBuffer,
    cipher?: string,
    iv?: string | Uint8Array | ArrayBuffer
): string;
declare function decryptBytes(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: DecryptOptions
): Uint8Array;
declare function randomBytes(size: number, resultType?: string): ArrayBuffer | Uint8Array | string;
declare function scrypt(
    password: Uint8Array | ArrayBuffer | string,
    salt: Uint8Array | ArrayBuffer | string,
    keylen: number,
    params?: {
        N?: number;
        r?: number;
        p?: number;
    }
): Uint8Array;
declare let AES_ECB: string;
declare let AES_CBC: string;
declare let AES_GCM: string;
declare let DES_ECB: string;
declare let DES_CBC: string;
declare let DES_CFB: string;
declare let DES_OFB: string;
declare let DES3_ECB: string;
declare let DES3_CBC: string;
declare let DES3_CFB: string;
declare let DES3_OFB: string;
declare let BLOWFISH_ECB: string;
declare let BLOWFISH_CBC: string;
declare let BLOWFISH_CFB: string;
declare let BLOWFISH_OFB: string;
declare let RC2_ECB: string;
declare let RC2_CBC: string;
declare let RC2_CFB: string;
declare let RC2_OFB: string;
interface EncryptOptions {
    aad?: Uint8Array | ArrayBuffer;
    authTagLength?: number;
}
interface DecryptOptions {
    aad?: Uint8Array | ArrayBuffer;
    authTag?: Uint8Array | ArrayBuffer;
    authTagLength?: number;
}
