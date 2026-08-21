interface Password {
    hash(cb: (error: string, hash: string) => void): void;
    verifyAgainst(hash: string, cb: (error: string, verified: boolean) => void): void;
}

declare function password(password: string): Password;
declare namespace password {}

export = password;
