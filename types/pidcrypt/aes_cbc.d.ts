declare namespace pidcrypt {
    interface DecryptTextOptions {
        nBits: number;
        UTF8: boolean;
        A0_PAD: boolean;
    }

    interface EncryptTextOptions {
        nBits: number;
    }

    interface CBC {
        new(): CBC;
        decryptText(dataIn: string, password: string, options?: DecryptTextOptions): string;
        encryptText(dataIn: string, password: string, options?: EncryptTextOptions): string;
    }

    interface AES {
        CBC: CBC;
    }

    interface pidcrypt {
        AES: AES;
    }
}
