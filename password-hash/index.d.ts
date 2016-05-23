// Type definitions for password-hash 1.2.x
// Project: https://github.com/davidwood/node-password-hash
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function generate(password: string, options?: Options): string;
export declare function verify(password: string, hashedPassword: string): boolean;
export declare function isHashed(password: string): boolean;

export interface Options {
    algorithm?: string;
    saltLength?: number;
    iterations?: number;
}
