/// <reference types="node"/>

declare class HDNode {
    static fromMasterSeed(seed: Buffer, versions?: { private: number; public: number }): HDNode;
    publicKey: Buffer | null;
    privateKey: Buffer | null;
    chainCode: Buffer | null;
    constructor(versions?: { private: number; public: number });
    derive(path: string): HDNode;
    toJSON(): { xpriv: string; xpub: string };
    static fromJSON(obj: { xpriv: string; xpub: string }): HDNode;
    static fromExtendedKey(
        xpriv: string,
        versions?: { private: number; public: number },
        skipVerification?: boolean,
    ): HDNode;
    sign(hash: Buffer): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
    wipePrivateData(): HDNode;
    privateExtendedKey: string | null;
    publicExtendedKey: string;
    versions: { private: number; public: number };
    depth: number;
    index: number;
    fingerprint: number;
    parentFingerprint: number;
    identifier: string | undefined;
    pubKeyHash: string | undefined;
    deriveChild(index: number): HDNode;
    static HARDENED_OFFSET: number;
}
export = HDNode;
