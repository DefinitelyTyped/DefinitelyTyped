// Type definitions for password-hash 1.2.x
// Project: https://github.com/davidwood/node-password-hash
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function generate(password: string, options?: Options): string;
declare export function verify(password: string, hashedPassword: string): boolean;
declare export function isHashed(password: string): boolean;

export interface Options {
    algorithm?: string;
    saltLength?: number;
    iterations?: number;
}
