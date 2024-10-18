/// <reference types="node" />

export interface Confidence {
    name: string;
    confidence: number;
    lang?: string | undefined;
}

export interface Options {
    returnAllMatches?: boolean | undefined;
    sampleSize?: number | undefined;
}

// As of v0.6, these fns return the highest-confidence result
export function detect(buf: Buffer, opts?: Options): string | null;

export function detectFile(path: string, cb: (err: any, result: string | null) => void): void;
export function detectFile(path: string, opts: Options, cb: (err: any, result: string | null) => void): void;

export function detectFileSync(path: string, opts?: Options): string | null;

// These fns were introduced in v0.6 to return an array of confidences.
export function detectAll(buf: Buffer, opts?: Options): Confidence[] | null;

export function detectFileAll(path: string, cb: (err: any, result: Confidence[] | null) => void): void;
export function detectFileAll(path: string, opts: Options, cb: (err: any, result: Confidence[] | null) => void): void;

export function detectFileAllSync(path: string, opts?: Options): Confidence[] | null;
