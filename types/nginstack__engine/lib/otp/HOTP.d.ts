export = HOTP;
declare function HOTP(): void;
declare class HOTP {}
declare namespace HOTP {
    export { generate, verify, HOTPOptions };
}
declare function generate(
    key: string | Uint8Array | ArrayBuffer,
    counter: number,
    options?: HOTPOptions
): string;
declare function verify(
    otp: string,
    key: string | Uint8Array | ArrayBuffer,
    counter: number,
    options?: HOTPOptions
): boolean;
interface HOTPOptions {
    digits?: number;
    algorithm?: string;
}
