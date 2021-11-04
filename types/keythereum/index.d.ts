// Type definitions for keythereum 1.2
// Project: https://github.com/ethereumjs/keythereum
// Definitions by: septs <https://github.com/septs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { createCipheriv, createDecipheriv, getCiphers, pbkdf2, pbkdf2Sync, randomBytes } from 'crypto';

declare namespace KeyStore {
    interface Type {
        id: string;
        address: string;
        version: 3;
        crypto: Crypto;
    }

    type Crypto = CryptoParams & KeyDeriveOptions & { mac: string };

    interface CryptoParams {
        cipher: string;
        ciphertext: string;
        cipherparams: { iv: string };
    }

    type KeyDeriveOptions = SCryptParams | PBKDF2Params;

    interface PBKDF2Params {
        kdf: 'pbkdf2';
        kdfparams: { c: number; dklen: number; hash: string; prf: string };
    }

    interface SCryptParams {
        kdf: 'scrypt';
        kdfparams: { memory: number; dklen: number; n: number; r: number; p: number };
    }
}

interface CryptoOptions {
    cipher: string;
}

interface EncryptOptions {
    ivBytes: number;
    keyBytes: number;
}

interface Constants {
    cipher: string;
    ivBytes: EncryptOptions['ivBytes'];
    keyBytes: EncryptOptions['keyBytes'];
    pbkdf2: KeyStore.PBKDF2Params['kdfparams'];
    scrypt: KeyStore.SCryptParams['kdfparams'];
}

type MarshalOptions = Partial<CryptoOptions & EncryptOptions & KeyStore.KeyDeriveOptions>;

interface KeyStore {
    id: string;
    address: string;
    version: 3;
    crypto: KeyStore.CryptoParams;
}

type Callback<R> = (result: R) => void;

interface CryptoInstance {
    createCipheriv: typeof createCipheriv;
    createDecipheriv: typeof createDecipheriv;
    pbkdf2Sync?: typeof pbkdf2Sync;
    pbkdf2?: typeof pbkdf2;
    getCiphers: typeof getCiphers;
    randomBytes: typeof randomBytes;
}

type DeriveKeyOptions = Partial<CryptoOptions & KeyStore.KeyDeriveOptions>;

interface Instance {
    version: string;
    browser: boolean;
    crypto: CryptoInstance;
    constants: Constants;
    isHex(input: string): boolean;
    isBase64(input: string): boolean;
    str2buf(input: string, encoding?: BufferEncoding): Buffer;
    isCipherAvailable(chiperName: string): boolean;
    encrypt(plaintext: Buffer | string, key: Buffer | string, iv: Buffer | string, algorithm?: string): Buffer;
    decrypt(ciphertext: Buffer | string, key: Buffer | string, iv: Buffer | string, algorithm?: string): Buffer;
    privateKeyToAddress(privateKey: Buffer | string): string;
    getMAC(derivedKey: Buffer | string, ciphertext: Buffer | string): Buffer;
    deriveKey(password: Buffer | string, salt: Buffer | string, options?: DeriveKeyOptions): Buffer;
    deriveKey(
        password: Buffer | string,
        salt: Buffer | string,
        options: DeriveKeyOptions | undefined,
        callback: Callback<Buffer>,
    ): void;
    create(params: EncryptOptions): Record<string, Buffer>;
    create(params: EncryptOptions, callback: Callback<Record<string, Buffer>>): void;
    marshal(derivedKey: Buffer, privateKey: Buffer, salt: Buffer, iv: Buffer, options?: MarshalOptions): KeyStore.Type;
    dump(derivedKey: Buffer, privateKey: Buffer, salt: Buffer, iv: Buffer, options?: MarshalOptions): KeyStore.Type;
    dump(
        derivedKey: Buffer,
        privateKey: Buffer,
        salt: Buffer,
        iv: Buffer,
        options: MarshalOptions | undefined,
        callback: Callback<KeyStore.Type>,
    ): void;
    generateKeystoreFilename(address: string): string;
    exportToFile(store: KeyStore.Type, keystore?: string): string;
    exportToFile(store: KeyStore.Type, keystore: string | undefined, callback: Callback<string>): void;
    importFromFile(address: string, datadir: string): KeyStore.Type;
    importFromFile(address: string, datadir: string, callback: Callback<KeyStore.Type>): void;
}

declare var instance: Instance;

export = instance;
