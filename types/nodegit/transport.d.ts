import { Remote } from './remote';
import { Strarray } from './str-array';

export namespace Transport {
    enum FLAGS {
        NONE = 0
    }
}

export class Transport {
    static sshWithPaths(owner: Remote, payload: Strarray): Promise<Transport>;
    static unregister(prefix: string): number;
    init(version: number): number;
}
