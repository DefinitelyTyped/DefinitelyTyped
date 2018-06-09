// Type definitions for hdkey 0.7
// Project: https://github.com/cryptocoinjs/hdkey
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node"/>

declare class HDNode {
    static fromMasterSeed(seed: Buffer): HDNode;
    publicKey: Buffer;
    privateKey: Buffer;
    chainCode: Buffer;
    constructor();
    derive(path: string): HDNode;
}
export = HDNode;
