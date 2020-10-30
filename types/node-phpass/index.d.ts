// Type definitions for node-phpass 1.0
// Project: https://github.com/glauberportella/password-hash
// Definitions by: Glenn Reyes <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const CRYPT_BLOWFISH = 1;
export const CRYPT_EXT_DES = 2;

export class PasswordHash {
    constructor(length?: number, portable?: boolean, phpVersion?: number);
    CheckPassword(password: string, hash: string): boolean;
    HashPassword(password: string, method?: typeof CRYPT_BLOWFISH | typeof CRYPT_EXT_DES): Promise<string>;
}
