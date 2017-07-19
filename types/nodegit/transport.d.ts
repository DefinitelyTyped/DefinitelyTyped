import { Remote } from './remote';
import { Strarray } from './str-array';
import { Cert } from './cert';

export namespace Transport {
    const enum FLAGS {
        NONE = 0
    }
}

export class Transport {
    /**
     * å
     *
     * @static
     * @param {Remote} owner
     * @param {Strarray} payload
     * @returns {Promise<Transport>}
     *
     * @memberof Transport
     */
    static sshWithPaths(owner: Remote, payload: Strarray): Promise<Transport>;
    /**
     *
     *
     * @static
     * @param {string} prefix
     * @returns {number}
     *
     * @memberof Transport
     */
    static unregister(prefix: string): number;
    /**
     *
     *
     * @param {number} version
     * @returns {number}
     *
     * @memberof Transport
     */
    init(version: number): number;
    /**
     *
     *
     * @param {Cert} cert
     * @param {number} valid
     * @param {string} hostName
     * @returns {number}
     *
     * @memberof Transport
     */
    smartCertificateCheck(cert: Cert, valid: number, hostName: string): number;
}
