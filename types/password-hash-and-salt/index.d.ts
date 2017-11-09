// Type definitions for password-hash-and-salt 0.1
// Project: https://github.com/florianheinemann/password-hash-and-salt
// Definitions by: Ali Taheri <https://github.com/alitaheri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Password {
    hash(cb: (error: string, hash: string) => void): void;
    verifyAgainst(hash: string, cb: (error: string, verified: boolean) => void): void;
}

declare function password(password: string): Password;
declare namespace password {}

export = password;
