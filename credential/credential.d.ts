// Type definitions for credential
// Project: https://github.com/ericelliott/credential
// Definitions by: Phú <https://github.com/phuvo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



type HashCallback = (err: Error, hash: string) => void;
type VerifyCallback = (err: Error, isValid: boolean) => void;

declare namespace credential {
    function hash(password: string, callback: HashCallback): void;
    function verify(hash: string, password: string, callback: VerifyCallback): void;
}

export = credential;
