// Type definitions for ethereumjs-tx 1.0
// Project: https://github.com/ethereumjs/ethereumjs-tx
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node"/>

declare class EthereumTx {
    raw: Buffer[];
    r: Buffer;
    s: Buffer;
    v: Buffer;
    nonce: Buffer;
    serialize(): Buffer;
    sign(buffer: Buffer): void;
    getSenderAddress(): Buffer;
    constructor(txParams: any);
}
export = EthereumTx;
