export namespace Credential {
    const enum TYPE {
        USERPASS_PLAINTEXT = 1,
        SSH_KEY = 2,
        SSH_CUSTOM = 4,
        DEFAULT = 8,
        SSH_INTERACTIVE = 16,
        USERNAME = 32,
        SSH_MEMORY = 64,
    }
}

export class Credential {
    static defaultNew(): Credential;
    static sshKeyFromAgent(username: string): Credential;
    static sshKeyMemoryNew(
        username: string,
        publicKey: string,
        privateKey: string,
        passphrase: string,
    ): Promise<Credential>;
    static sshKeyNew(username: string, publicKey: string, privateKey: string, passphrase: string): Credential;
    static usernameNew(username: string): Promise<Credential>;
    static userpassPlaintextNew(username: string, password: string): Credential;
}
