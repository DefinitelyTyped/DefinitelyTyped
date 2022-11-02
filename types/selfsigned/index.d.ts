// Type definitions for selfsigned 2.0
// Project: https://github.com/jfromaniello/selfsigned
// Definitions by: Steven Chim <https://github.com/chimurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Algorithm = "sha1" | "sha256";

export interface Options {
    /** the size for the private key in bits (default: 1024) */
    keySize?: number;
    /** how long till expiry of the signed certificate (default: 365) */
    days?: number;
    /** sign the certificate with specified algorithm (default: 'sha1') */
    algorithm?: Algorithm;
    /** certificate extensions array */
    extensions?: any[];
    /** include PKCS#7 as part of the output (default: false) */
    pkcs7?: boolean;
    /** generate client cert signed by the original key (default: false) */
    clientCertificate?: boolean;
    /** client certificate's common name (default: 'John Doe jdoe123') */
    clientCertificateCN?: string;
}

export type Callback = (error: Error, pems: PEMS) => void;

export interface PEMS {
    fingerprint: string;
    cert: string;
    public: string;
    private: string;
    clientprivate?: string;
    clientpublic?: string;
    clientcert?: string;
}

export interface Attribute {
    name: string;
    value: string;
}

export interface ShortAttribute {
    shortName: string;
    value: string;
}

export function generate(attrs: Array<Attribute | ShortAttribute> | null | undefined, options: Options | undefined, callback: Callback): void;
export function generate(attrs: Array<Attribute | ShortAttribute> | null | undefined, callback: Callback): void;
export function generate(attrs: Array<Attribute | ShortAttribute> | null | undefined, options?: Options): PEMS;
export function generate(attrs?: Array<Attribute | ShortAttribute>): PEMS;
export function generate(callback: Callback): void;
