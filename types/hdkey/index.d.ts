// Type definitions for hdkey 0.7
// Project: https://github.com/cryptocoinjs/hdkey
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Tvrtko Majstorovic <https://github.com/TvrtkoM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare class HDNode {
    static fromMasterSeed(seed: Buffer): HDNode;
    publicKey: Buffer;
    privateKey: Buffer;
    chainCode: Buffer;
    constructor();
    derive(path: string): HDNode;
    toJSON(): { xpriv: string; xpub: string };
    static fromJSON(obj: { xpriv: string; xpub: string }): HDNode;
}
export = HDNode;
