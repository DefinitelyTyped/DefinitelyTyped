export = TOTP;
declare function TOTP(): void;
declare class TOTP {}
declare namespace TOTP {
    export { generate, verify, formatKeyUri, TOTPOptions };
}
declare function generate(key: string | Uint8Array | ArrayBuffer, options?: TOTPOptions): string;
declare function verify(
    otp: string,
    key: string | Uint8Array | ArrayBuffer,
    options?: TOTPOptions
): boolean;
declare function formatKeyUri(
    key: string | Uint8Array | ArrayBuffer,
    userName: string,
    issuer: string,
    options?: TOTPOptions
): string;
interface TOTPOptions {
    digits?: number;
    algorithm?: string;
    timeStep?: number;
    tolerance?: number;
    currentTimestamp?: number;
}
