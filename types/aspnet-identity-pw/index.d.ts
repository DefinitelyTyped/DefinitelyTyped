// Type definitions for aspnet-identity-pw 1.0.0
// Project: https://github.com/Syncbak-Git/aspnet-identity-pw
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export declare function hashPassword(password: string): string;
export declare function hashPassword(password: string, callback: (err: any, result: string) => void): void;

export declare function validatePassword(password: string, hashedPass: string): boolean;
export declare function validatePassword(password: string, hashedPass: string, callback: (err: any, result: boolean) => void): void;
