// Type definitions for keychain 1.4
// Project: https://github.com/drudge/node-keychain
// Definitions by: Lucas Santos <https://github.com/khaosdoctor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface KeyChainBaseOptions {
    account: string;
    service: string;
    password: string;
    type?: 'generic' | 'internet';
}

export enum KeychainErrorCode {
    UnsupportedPlatform = 'UnsupportedPlatform',
    NoAccountProvided = 'NoAccountProvided',
    NoServiceProvided = 'NoServiceProvided',
    NoPasswordProvided = 'NoPasswordProvided',
    ServiceFailure = 'ServiceFailure',
    PasswordNotFound = 'PasswordNotFound',
}

export type KeychainErrorType = `${KeychainErrorCode}Error`;

export class KeychainError extends Error {
    code: KeychainErrorCode;
    type: KeychainErrorType;
}

declare const keychain: {
    getPassword(
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError, password: string) => void,
    ): void;

    setPassword(options: KeyChainBaseOptions, callback: (err: KeychainError) => void): void;

    deletePassword(
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError) => void,
    ): void;
};

export default keychain;
