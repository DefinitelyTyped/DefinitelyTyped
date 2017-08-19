export namespace Cred {
    const enum TYPE {
        USERPASS_PLAINTEXT = 1,
        SSH_KEY = 2,
        SSH_CUSTOM = 4,
        DEFAULT = 8,
        SSH_INTERACTIVE = 16,
        USERNAME = 32,
        SSH_MEMORY = 64
    }
}

export class Cred {
    /**
     *
     *
     * @static
     * @returns {Cred}
     *
     * @memberof Cred
     */
    static defaultNew(): Cred;
    /**
     *
     *
     * @static
     * @param {string} username
     * @returns {Cred}
     *
     * @memberof Cred
     */
    static sshKeyFromAgent(username: string): Cred;
    /**
     *
     *
     * @static
     * @param {string} username
     * @param {string} publicKey
     * @param {string} privateKey
     * @param {string} passphrase
     * @returns {Promise<Cred>}
     *
     * @memberof Cred
     */
    static sshKeyMemoryNew(username: string, publicKey: string, privateKey: string, passphrase: string): Promise<Cred>;
    /**
     *
     *
     * @static
     * @param {string} username
     * @param {string} publicKey
     * @param {string} privateKey
     * @param {string} passphrase
     * @returns {Cred}
     *
     * @memberof Cred
     */
    static sshKeyNew(username: string, publicKey: string, privateKey: string, passphrase: string): Cred;
    /**
     *
     *
     * @static
     * @param {string} username
     * @returns {Promise<Cred>}
     *
     * @memberof Cred
     */
    static usernameNew(username: string): Promise<Cred>;
    /**
     *
     *
     * @static
     * @param {string} username
     * @param {string} password
     * @returns {Cred}
     *
     * @memberof Cred
     */
    static userpassPlaintextNew(username: string, password: string): Cred;

    /**
     *
     *
     * @returns {number}
     *
     * @memberof Cred
     */
    hasUsername(): number;
    /**
     *
     *
     *
     * @memberof Cred
     */
    free(): void;
}
