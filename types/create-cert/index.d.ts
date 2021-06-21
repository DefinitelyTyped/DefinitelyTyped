// Type definitions for create-cert 1.0
// Project: https://github.com/lukechilds/create-cert
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'create-cert' {
    import { CertificateCreationOptions } from 'pem';

    function createCert(opts?: Partial<createCert.Options & CertificateCreationOptions> | string): Promise<createCert.CertificateData>;

    export = createCert;

    namespace createCert {
        export interface Options {
            days: number;
            commonName: string;
        }

        export interface CertificateData {
            key: string;
            cert: string;
            caCert: string;
        }
    }
}
