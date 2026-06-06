/// <reference types="node" />

/* =================== USAGE ===================

    import merkle = require("merkle");

    const stream = merkle('sha256');
    const merkleTree = stream.sync([1, 2, 3, 4, 5, 6, 7, 8]);
    merkleTree.root();

 =============================================== */

import stream = require("stream");

declare function merkle(
    hashname: "sha512" | "sha256" | "sha1" | "md5" | "ripemd160" | "whirlpool" | "none",
    useUpperCaseForHash?: boolean,
): MerkleStream;

declare class MerkleStream extends stream.Transform {
    sync(leaves: any[]): MerkleTree;
    async(leaves: any[], callback: (err: string, tree: MerkleTree) => void): void;
    json(): MerkleStream;
}

declare class MerkleTree {
    root(): string;
    level(level: number): number | undefined;
    depth(): number;
    levels(): number;
    nodes(): number;
}

export = merkle;
