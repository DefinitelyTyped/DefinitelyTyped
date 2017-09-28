import { Cert } from './cert';

export class CertHostkey {
    /**
     *
     *
     * @type {Cert}
     * @memberof CertHostkey
     */
    parent: Cert;
    type: Cert.TYPE;
    /**
     *
     *
     * @type {string}
     * @memberof CertHostkey
     */
    hashMd5: string;
    /**
     *
     *
     * @type {string}
     * @memberof CertHostkey
     */
    hashSha1: string;
}
