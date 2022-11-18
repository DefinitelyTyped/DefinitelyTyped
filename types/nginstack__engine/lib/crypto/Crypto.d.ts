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
declare function encrypt(data: string, key: string, cipher?: string, iv?: string): string;
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
declare function decrypt(data: string, key: string, cipher?: string, iv?: string): string;
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
declare var AES_ECB: string;
declare var AES_CBC: string;
declare var AES_GCM: string;
declare var DES_ECB: string;
declare var DES_CBC: string;
declare var DES_CFB: string;
declare var DES_OFB: string;
declare var DES3_ECB: string;
declare var DES3_CBC: string;
declare var DES3_CFB: string;
declare var DES3_OFB: string;
declare var BLOWFISH_ECB: string;
declare var BLOWFISH_CBC: string;
declare var BLOWFISH_CFB: string;
declare var BLOWFISH_OFB: string;
declare var RC2_ECB: string;
declare var RC2_CBC: string;
declare var RC2_CFB: string;
declare var RC2_OFB: string;
interface EncryptOptions {
    aad?: Uint8Array | ArrayBuffer;
    authTagLength?: number;
}
interface DecryptOptions {
    aad?: Uint8Array | ArrayBuffer;
    authTag?: Uint8Array | ArrayBuffer;
    authTagLength?: number;
}
