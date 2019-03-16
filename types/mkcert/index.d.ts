// Type definitions for mkcert 1.2
// Project: https://github.com/Subash/mkcert/
// Definitions by: Sachin Arunkumar <https://github.com/asachin96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Type which represent's generated certificate
export interface Certificate {
    cert: string;
    key: string;
}

// Type which represent's CA certificate generation input parameters
export interface CACertificateInfo {
    organization: string;
    countryCode: string;
    state: string;
    locality: string;
    validityDays: number;
}

// Type which represent's certificate generation input parameters
export interface CertificateInfo {
    domains: string[];
    validityDays: number;
    caKey: string;
    caCert: string;
}

// Api to create a Certificate Authority
export function createCA(caCerticateInfo: CACertificateInfo): Promise<Certificate>;

// Api to create a Certificate
export function createCert(certicateInfo: CertificateInfo): Promise<Certificate>;
