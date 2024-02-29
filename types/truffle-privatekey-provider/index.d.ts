/**
 * Sign transactions using a private key.
 */

export = PrivateKeyProvider;

declare class PrivateKeyProvider {
    constructor(privateKey: any, providerUrl: any);

    send(...args: any[]): any;

    sendAsync(...args: any[]): void;
}
