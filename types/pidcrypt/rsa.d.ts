declare namespace pidcrypt {
    interface RSA {
        new (): RSA;
        setPublic(N: string, E: string, radix: number): void;
        setPrivate(N: string, E: string, D: string, radix: number): void;
        encrypt(text: string): string;
        encryptRaw(text: string): string;
        decrypt(ctext: string): string;
        decryptRaw(ctext: string): string;
    }

    interface pidcrypt {
        RSA: RSA;
    }
}
