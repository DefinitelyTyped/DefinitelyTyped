// Type definitions for aspnet-identity-pw 1.0.0
// Project: https://github.com/Syncbak-Git/aspnet-identity-pw
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare export function hashPassword(password: string): string;
declare export function hashPassword(password: string, callback: (err: any, result: string) => void): void;

declare export function validatePassword(password: string, hashedPass: string): boolean;
declare export function validatePassword(password: string, hashedPass: string, callback: (err: any, result: boolean) => void): void;
