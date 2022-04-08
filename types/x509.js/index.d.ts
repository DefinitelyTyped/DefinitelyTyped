// Type definitions for x509.js 1.0
// Project: https://github.com/encharm/x509.js
// Definitions by: Stephane Moser <https://github.com/Moser-ss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Certificate {
    publicModulus: string;
    publicExponent: string;
    subject: {
        commonName: string;
    };
    issuer: {
        commonName: string;
    };
    serial: string;
    notBefore: string;
    notAfter: string;
    altNames: string[];
    ocspList: string[];
}
export interface Key {
    publicExponent: string;
    publicModulus: string;
}

export function parseCert(certificate: string): Certificate;
export function parseKey(key: string): Key;
export function info(): number;
