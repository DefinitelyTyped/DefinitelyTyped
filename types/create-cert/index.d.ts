// Type definitions for create-cert 1.0
// Project: https://github.com/lukechilds/create-cert
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CertificateCreationOptions } from 'pem';

declare interface Options {
    days: number;
    commonName: string;
}

declare interface CertificateData {
    key: string;
    cert: string;
    caCert: string;
}

declare function createCert(opts: Partial<Options & CertificateCreationOptions> | string): Promise<CertificateData>;

export = createCert;
