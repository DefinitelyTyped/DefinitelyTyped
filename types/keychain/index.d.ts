// Type definitions for keychain 1.4
// Project: https://github.com/drudge/node-keychain
// Definitions by: Lucas Santos <https://github.com/khaosdoctor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace keychain {
    interface KeyChainBaseOptions {
        account: string
        service: string
        password: string
        type?: 'generic' | 'internet'
    }

    enum KeychainErrorCodes {
        UnsupportedPlatform = 'UnsupportedPlatform',
        NoAccountProvided = 'NoAccountProvided',
        NoServiceProvided = 'NoServiceProvided',
        NoPasswordProvided = 'NoPasswordProvided',
        ServiceFailure = 'ServiceFailure',
        PasswordNotFound = 'PasswordNotFound',
    }

    type KeychainErrorType = `${KeychainErrorCodes}Error`;

    class KeychainError extends Error {
        code: KeychainErrorCodes
        type: KeychainErrorType
    }

    function getPassword (
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError, password: string) => void,
    ): void;

    function setPassword (options: KeyChainBaseOptions, callback: (err: KeychainError) => void): void;

    function deletePassword (
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError) => void,
    ): void;
}

export = keychain
