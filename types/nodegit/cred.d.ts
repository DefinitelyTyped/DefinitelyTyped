export namespace Cred {
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

export class Cred {
    static defaultNew(): Cred;
    static sshKeyFromAgent(username: string): Cred;
    static sshKeyMemoryNew(username: string, publicKey: string, privateKey: string, passphrase: string): Promise<Cred>;
    static sshKeyNew(username: string, publicKey: string, privateKey: string, passphrase: string): Cred;
    static usernameNew(username: string): Promise<Cred>;
    static userpassPlaintextNew(username: string, password: string): Cred;

    hasUsername(): number;

    free(): void;
}
