// Type definitions for ethereumjs-tx 1.0
// Project: https://github.com/ethereumjs/ethereumjs-tx
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 David Mihal <https://github.com/dmihal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import BN = require("bn.js");

declare class EthereumTx {
    raw: Buffer[];
    r: Buffer;
    s: Buffer;
    v: Buffer;
    nonce: Buffer;
    gasPrice: Buffer;
    gasLimit: Buffer;
    to: Buffer;
    value: Buffer;
    data: Buffer;
    serialize(): Buffer;
    sign(buffer: Buffer): void;
    toJSON(): string | string[];
    toCreationAddress(): boolean;
    hash(includeSignature?: boolean): Buffer;
    getChainId(): Buffer;
    getSenderAddress(): Buffer;
    getSenderPublicKey(): Buffer;
    verifySignature(): boolean;
    getDataFee(): BN;
    getBaseFee(): BN;
    getUpfrontCost(): BN;
    validate(stringError?: boolean): string | boolean;
    constructor(txParams: any);
}
export = EthereumTx;
