declare namespace pidcrypt {
    interface DecryptTextOptions {
        nBits: number;
        UTF8: boolean;
        A0_PAD: boolean;
    }

    interface EncryptTextOptions {
        nBits: number;
    }

    interface CTR {
        // tslint:disable-next-line:no-misused-new
        new(): CTR;
        decryptText(dataIn: string, password: string, options?: DecryptTextOptions): string;
        encryptText(dataIn: string, password: string, options?: EncryptTextOptions): string;
    }

    interface AES {
        CTR: CTR;
    }

    interface pidcrypt {
        AES: AES;
    }
}
