// Type definitions for rasha 1.2
// Project: https://git.coolaj86.com/coolaj86/rasha.js
// Definitions by: Justin Baroux <https://github.com/Just1B>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Rasha;

export interface Jwk {
    kty: string;
    n: string;
    e: string;
    d: string;
    p: string;
    q: string;
    dp: string;
    dq: string;
    qi: string;
}

export interface GenerateOptions {
    format: string;
    encoding?: string;
    modulusLength?: number;
    publicExponent?: number;
}

export interface ImportOptions {
    pem: string;
    public: boolean;
}

export interface ExportOptions {
    jwk: Jwk;
    format: string;
    public: boolean;
}

export interface RsaKeys {
    private: string;
    public: string;
}

// Generate RSA KEY
export function generate(opts: GenerateOptions): Promise<RsaKeys>;

// PEM-to-JWK
declare function Import(opts: ImportOptions): Promise<Jwk>;
export { Import as import };

// JWK-to-PEM
declare function Export(opts: ExportOptions): Promise<string>;
export { Export as export };

// JWK Thumbprint
export function thumbprint(jwk: Jwk): Promise<any>;
