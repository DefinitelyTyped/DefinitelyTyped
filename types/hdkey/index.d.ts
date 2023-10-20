/// <reference types="node"/>

declare class HDNode {
    static fromMasterSeed(seed: Buffer, versions?: { private: number; public: number }): HDNode;
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
