// Type definitions for hdkey 2.0
// Project: https://github.com/cryptocoinjs/hdkey
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Tvrtko Majstorovic <https://github.com/TvrtkoM>
//                 Alberto Torre <https://github.com/JAlbertoGonzalez>
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
    static fromExtendedKey(xpriv: string): HDNode;
    sign(hash: Buffer): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
    wipePrivateData(): HDNode;
    privateExtendedKey: string;
    publicExtendedKey: string;
}
export = HDNode;
