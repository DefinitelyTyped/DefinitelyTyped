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
