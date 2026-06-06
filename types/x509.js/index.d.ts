export interface Certificate {
    publicModulus: string;
    publicExponent: string;
    subject: {
        commonName: string;
        organizationalUnitName?: string;
    };
    issuer: {
        commonName: string;
        countryName?: string;
        localityName?: string;
        organizationName?: string;
        organizationalUnitName?: string;
        serialNumber?: string;
        stateOrProvinceName?: string;
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
