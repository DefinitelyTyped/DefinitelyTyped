declare module 'pidcrypt' {
    namespace AES {
        class CBC {
            decryptText(dataIn: string, password: string, options?: DecryptTextOptions): string;
            encryptText(dataIn: string, password: string, options?: EncryptTextOptions): string;
        }
    }
}
