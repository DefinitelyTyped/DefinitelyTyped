// Type definitions for credential
// Project: https://github.com/ericelliott/credential
// Definitions by: Phú <https://github.com/phuvo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'credential' {
    interface defaultOptions {
        keyLength: number;
        work: number;
        hashMethod: string;
    }

interface hashObject {
    hash: string;
    salt: string;
    keyLength: number;
    hashMethod: string;
    iterations: number;
}

type HashCallback = (err: Error, hash: hashObject) => void;
type VerifyCallback = (err: Error, isValid: boolean) => void;


    namespace credential { }

    export = credential;
}

export = credential;
