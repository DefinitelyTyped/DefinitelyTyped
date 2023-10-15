// Type definitions for create-cert 1.0
// Project: https://github.com/lukechilds/create-cert
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import { CertificateCreationOptions } from "pem";

declare function createCert(opts?: createCert.Options | string): Promise<createCert.CertificateData>;

export = createCert;

declare namespace createCert {
    interface Options extends CertificateCreationOptions {
        days?: number | undefined;
        commonName?: string | undefined;
    }

    interface CertificateData {
        key: string;
        cert: string;
        caCert: string;
    }
}
