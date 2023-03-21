// Type definitions for keychain (node-keychain) 1.4.0
// Project: https://www.npmjs.com/package/keychain
// Definitions by: Lucas Santos <https://lsantos.dev>
declare module 'keychain' {
    export default keychain
}

declare namespace keychain {
    interface KeyChainBaseOptions {
        account: string
        service: string
        password: string
        type?: 'generic' | 'internet'
    }

    class KeychainError extends Error {
        code: string
        type: string
    }

    function getPassword (
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError, password: string) => void
    ): void

    function setPassword (
        options: KeyChainBaseOptions,
        callback: (err: KeychainError) => void
    ): void

    function deletePassword (
        options: Pick<KeyChainBaseOptions, 'account' | 'service'>,
        callback: (err: KeychainError) => void
    ): void
}
