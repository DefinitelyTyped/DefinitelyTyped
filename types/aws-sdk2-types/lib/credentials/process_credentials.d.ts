import {Credentials} from '../credentials';
import {HTTPOptions} from '../config-base';
export class ProcessCredentials extends Credentials {
    /**
     * Creates a new ProcessCredentials object.
     */
    constructor(options?: ProcessCredentialsOptions);
}

interface ProcessCredentialsOptions {
    profile?: string
    filename?: string
    httpOptions?: HTTPOptions
}
