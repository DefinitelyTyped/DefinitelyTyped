import { Remote } from './remote';
import { Strarray } from './str-array';
import { Cert } from './cert';

export namespace Transport {
    const enum FLAGS {
        NONE = 0
    }
}

export class Transport {
    static sshWithPaths(owner: Remote, payload: Strarray): Promise<Transport>;
    static unregister(prefix: string): number;
    init(version: number): number;
    smartCertificateCheck(cert: Cert, valid: number, hostName: string): number;
}
