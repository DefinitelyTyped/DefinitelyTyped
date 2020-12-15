// Type definitions for xml-encryption 1.2
// Project: https://github.com/auth0/node-xml-encryption#readme
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export interface EncryptOptions {
    rsa_pub: string | Buffer;
    pem: string | Buffer;
    keyEncryptionAlgorithm: string;
    encryptionAlgorithm?: string;
    disallowEncryptionWithInsecureAlgorithm?: boolean;
    warnInsecureAlgorithm?: boolean;
    input_encoding?: string;
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
    options: EncryptOptions,
    callback: (error: Error | null, result: string) => void,
): void;
