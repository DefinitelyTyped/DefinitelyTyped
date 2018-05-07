import { Cert } from './cert';

export class CertHostkey {
    parent: Cert;
    type: Cert.TYPE;
    hashMd5: string;
    hashSha1: string;
}
