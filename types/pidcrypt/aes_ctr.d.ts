declare module 'pidcrypt' {
    namespace AES {
        class CTR {
            decryptText(dataIn: string, password: string, options?: DecryptTextOptions): string;
            encryptText(dataIn: string, password: string, options?: EncryptTextOptions): string;
        }
    }
}
