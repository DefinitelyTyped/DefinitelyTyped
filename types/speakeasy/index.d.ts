// Type definitions for speakeasy v2.0.0
// Project: https://github.com/markbao/speakeasy
// Definitions by: Lucas Woo <https://github.com/legendecas>, Alexander Batukhtin <https://github.com/mrOlorin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

interface DigestOptions {
    secret: string;
    counter: string;
    encoding?: string;
    algorithm?: string;
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

interface TotpOptions {
    key?: string;
    step?: number;
    time?: number;
    initial_time?: number;
    length?: number;
    encoding?: string;
    counter?: number;
    epoch?: number;
    secret?: string;
    digits?: number;
    digest?: () => string;
    algorithm?: string;
}

interface HotpOptions {
    key: string;
    counter: number;
    length?: number;
    encoding?: string;
    digits?: number;
    digest?: () => string;
}

interface OtpauthURLOptions {
    secret: string;
    label: string;
    issuer?: any;
    type?: string;
    counter?: number;
    algorithm?: string;
    digits?: number;
    period?: number;
    encoding?: string;
}

export declare function digest(options: DigestOptions): string;

export declare function generate_key(options: GenerateOptions): Key;

export declare function generateSecret(options: GenerateSecretOptions): Key;

export declare function generateSecretASCII(length?: number, symbols?: boolean): string;

export declare function otpauthURL(options: OtpauthURLOptions): string;

export declare function hotp(options: HotpOptions): string;

export declare function counter(options: HotpOptions): string;

export declare function totp(options: TotpOptions): string;

export declare function time(options: TotpOptions): string;
