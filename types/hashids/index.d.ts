// Type definitions for Hashids.js 1.x
// Project: https://github.com/ivanakimov/hashids.node.js
// Definitions by: Paulo Cesar <https://github.com/pocesar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export default class Hashids {
    private version: string;
    private minAlphabetLength: number;
    private sepDiv: number;
    private guardDiv: number;
    private errorAlphabetLength: string;
    private errorAlphabetSpace: string;
    private alphabet: string[];
    private seps: string;
    private minHashLength: number;
    private salt: string;
    constructor(salt: string, minHashLength?: number, alphabet?: string);
    public decode(hash: string): number[];
    public encode(arg: number): string;
    public encode(arg: number[]): string;
    public encode(...args: number[]): string;
    public encodeHex(str: string): string;
    public decodeHex(hash: string): string;
    public hash(input: number, alphabet: string): string;
    public unhash(input: string[], alphabet: string): number;
}
