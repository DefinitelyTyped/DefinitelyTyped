import { Cert } from './cert';

export class CertX509 {
    /**
     *
     *
     * @type {Buffer}
     * @memberof CertX509
     */
    data: Buffer;
    /**
     *
     *
     * @type {number}
     * @memberof CertX509
     */
    len: number;
    /**
     *
     *
     * @type {Cert}
     * @memberof CertX509
     */
    parent: Cert;
}
