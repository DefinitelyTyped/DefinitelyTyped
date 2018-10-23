// Type definitions for credential
// Project: https://github.com/ericelliott/credential
// Definitions by: Phú <https://github.com/phuvo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


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


declare function credential(defaultOptions?: defaultOptions): {
    hash(password: string, callback: HashCallback): void;
    hash(password: string): Promise<hashObject>;
    // iterations(work: number, base): number;
    verify(hash: hashObject | string, password: string, callback: VerifyCallback): void;
    verify(hash: hashObject | string, password: string): Promise<boolean>;
    expired(hash: string, days: number): boolean;
}

export = credential;
