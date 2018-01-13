// Type definitions for merkle 0.6.0
// Project: https://github.com/c-geek/merkle
// Definitions by: Yu Hsin Lu <https://github.com/kerol2r20>
// Definitions: https://github.com/kerol2r20/DefinitelyTyped
// TypeScript Version: 2.3

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
    useUpperCaseForHash?: boolean): MerkleStream;

declare class MerkleStream extends stream.Transform {
    public sync(leaves: any[]): MerkleTree;
    public async(leaves: any[], callback: (err: string, tree: MerkleTree) => void): void;
    public json(): MerkleStream;
}

declare class MerkleTree {
    public root(): string;
    public level(level: number): number | undefined;
    public depth(): number;
    public levels(): number;
    public nodes(): number;
}

export = merkle
