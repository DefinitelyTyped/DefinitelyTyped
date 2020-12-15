// Type definitions for xml-encryption 1.2
// Project: https://github.com/auth0/node-xml-encryption#readme
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";

export type KeyEncryptionAlgorithm =
    | 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p'
    | 'http://www.w3.org/2001/04/xmlenc#rsa-1_5';

export type EncryptionAlgorithm =
    | 'http://www.w3.org/2001/04/xmlenc#aes128-cbc'
    | 'http://www.w3.org/2001/04/xmlenc#aes256-cbc'
    | 'http://www.w3.org/2009/xmlenc11#aes128-gcm'
    | 'http://www.w3.org/2009/xmlenc11#aes256-gcm'
    | 'http://www.w3.org/2001/04/xmlenc#tripledes-cbc';

export interface EncryptOptions extends EncryptKeyOptions {
    encryptionAlgorithm: EncryptionAlgorithm;
    warnInsecureAlgorithm?: boolean;
    input_encoding?: Utf8AsciiBinaryEncoding;
}

export interface EncryptKeyOptions {
    rsa_pub: string | Buffer;
    pem: string | Buffer;
    keyEncryptionAlgorithm: KeyEncryptionAlgorithm;
    disallowEncryptionWithInsecureAlgorithm?: boolean;
}

export interface DecryptOptions {
    key: string | Buffer;
    disallowDecryptionWithInsecureAlgorithm?: boolean;
    warnInsecureAlgorithm?: boolean;
}

export function decrypt(
    xml: string,
    options: DecryptOptions,
    callback: (error: Error | null, result: string) => void,
): void;
export function decryptKeyInfo(doc: string, options: DecryptOptions): Buffer;
export function encrypt(
    content: string,
    options: EncryptOptions,
    callback: (error: Error, result: string) => void,
): void;
export function encryptKeyInfo(
    symmetricKey: string | Buffer,
    options: EncryptKeyOptions,
    callback: (error: Error | null, result: string) => void,
): void;
