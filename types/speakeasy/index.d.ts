// Type definitions for speakeasy v2.0.0
// Project: https://github.com/speakeasyjs/speakeasy
// Definitions by: Lucas Woo <https://github.com/legendecas>, Alexander Batukhtin <https://github.com/mrOlorin>, Aayush Kapoor <https://github.com/xeoneux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SharedOptions {
    encoding?: string;
    algorithm?: string;
}

interface Key {
    ascii: string;
    base32: string;
    hex: string;
    qr_code_ascii: string;
    qr_code_hex: string;
    qr_code_base32: string;
    google_auth_qr: string;
    otpauth_url?: string;
}

interface DigestOptions extends SharedOptions {
    secret: string;
    counter: string;
    key?: string;
}

interface GenerateOptions {
    length?: number;
    symbols?: boolean;
    qr_codes?: boolean;
    google_auth_qr?: boolean;
    name?: string;
}

interface GenerateSecretOptions {
    length?: number;
    name?: string;
    qr_codes?: boolean;
    google_auth_qr?: boolean;
    otpauth_url?: boolean;
    symbols?: boolean;
}

interface TotpOptions extends SharedOptions {
    key?: string;
    step?: number;
    time?: number;
    initial_time?: number;
    length?: number;
    counter?: number;
    epoch?: number;
    secret?: string;
    digits?: number;
    digest?: () => string;
}

interface TotpVerifyOptions extends SharedOptions {
    secret: string;
    token: string;
    time?: number;
    step?: number;
    epoch?: number;
    counter?: number;
    digits?: number;
    window?: number;
}

interface HotpOptions extends SharedOptions {
    key: string;
    counter: number;
    length?: number;
    digits?: number;
    digest?: () => string;
}

interface HotpVerifyOptions extends SharedOptions {
    secret: string;
    token: string;
    counter: number;
    digits?: number;
    window?: number;
}

interface OtpauthURLOptions extends SharedOptions {
    secret: string;
    label: string;
    issuer?: any;
    type?: string;
    counter?: number;
    digits?: number;
    period?: number;
}

interface Hotp {
    (options: HotpOptions): string;
    verifyDelta: (options: HotpVerifyOptions) => boolean;
    verify: (options: HotpVerifyOptions) => boolean;
}

interface Totp {
    (options: TotpOptions): string;
    verifyDelta: (options: TotpVerifyOptions) => boolean;
    verify: (options: TotpVerifyOptions) => boolean;
}

export declare const hotp: Hotp;
export declare const totp: Totp;

export declare function time(options: TotpOptions): string;
export declare function counter(options: HotpOptions): string;
export declare function digest(options: DigestOptions): string;
export declare function generate_key(options: GenerateOptions): Key;
export declare function generateSecret(options?: GenerateSecretOptions): Key;
export declare function generateSecretASCII(
    length?: number,
    symbols?: boolean
): string;
export declare function otpauthURL(options: OtpauthURLOptions): string;
