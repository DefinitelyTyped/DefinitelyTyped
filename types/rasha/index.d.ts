export as namespace Rasha;

export interface Jwk {
    kty: "RSA";
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
    encoding?: string | undefined;
    modulusLength?: number | undefined;
    publicExponent?: number | undefined;
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
