// Type definitions for chardet 0.5
// Project: https://github.com/runk/node-chardet
// Definitions by: Hauke Oldsen <https://github.com/Gebatzens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Confidence {
    name: string;
    confidence: number;
    lang?: string;
}

export interface Options {
    returnAllMatches?: boolean;
    sampleSize?: number;
}

export type Result = Confidence[] | string | null;

export function detect(buf: Buffer, opts?: Options): Result;

export function detectFile(path: string, cb: (err: any, result: Result) => void): void;
export function detectFile(path: string, opts: Options, cb: (err: any, result: Result) => void): void;

export function detectFileSync(path: string, opts?: Options): Result;
