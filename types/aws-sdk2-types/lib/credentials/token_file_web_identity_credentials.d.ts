import {Credentials} from '../credentials';
import {AWSError} from '../error';
import {ConfigurationOptions} from '../config-base';
export class TokenFileWebIdentityCredentials extends Credentials {
    /**
     * Creates a new credentials object with optional configuraion.
     * @param {Object} clientConfig - a map of configuration options to pass to the underlying STS client.
     */
    constructor(clientConfig?: ConfigurationOptions);
    /**
     * Refreshes credentials using AWS.STS.assumeRoleWithWebIdentity().
     */
    refresh(callback: (err?: AWSError) => void): void;
}
