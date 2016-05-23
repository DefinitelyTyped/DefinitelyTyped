// Type definitions for Hashids.js 1.x
// Project: https://github.com/ivanakimov/hashids.node.js
// Definitions by: Paulo Cesar <https://github.com/pocesar/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace Hashids {

    export interface IHashids {
        new(salt: string, minHashLength?: number, alphabet?: string): IHashids;
        version: string;
        minAlphabetLength: number;
        sepDiv: number;
        guardDiv: number;
        errorAlphabetLength: string;
        errorAlphabetSpace: string;
        alphabet: string[];
        seps: string;
        minHashLength: number;
        salt: string;
        decode(hash: string): number[];
        encode(arg: number): string;
        encode(arg: number[]): string;
        encode(...args: number[]): string;
        encodeHex(str: string): string;
        decodeHex(hash: string): string;
        hash(input: number, alphabet: string): string;
        unhash(input: string[], alphabet: string): number;
    }
}

declare var hashids: Hashids.IHashids;
export = hashids;
