import { Cert } from './cert';

export class CertX509 {
    data: Buffer;
    len: number;
    parent: Cert;
}
