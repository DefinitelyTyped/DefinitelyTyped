// Type definitions for truffle-privatekey-provider 1.1
// Project: https://github.com/nosuchip/truffle-privatekey-provider
// Definitions by: Miguel Mota <https://github.com/miguelmota>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Sign transactions using a private key.
 */

export = PrivateKeyProvider;

declare class PrivateKeyProvider {
    constructor(privateKey: any, providerUrl: any);

    send(...args: any[]): any;

    sendAsync(...args: any[]): void;
}
