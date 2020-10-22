// Type definitions for word2vector 2.1
// Project: https://github.com/LeeXun/word2vector#readme
// Definitions by: Rene Keijzer <https://github.com/renekeijzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function w2v(): any;
export function load(modelfile: string, filetype?: string): boolean;
export function getVector(word: string): number[];
export function getVectors(words: string[]): number[][];
export function getNeighbors(vector: number[], opt?: object): object[];
export function getSimilarWords(word: string, options?: object): object[];
export function bin2txt(binFile: string): boolean;
export function add(p1: number[], p2: number[], opt?: object): any;
export function add(p1: string, p2: string, opt?: object): any;
export function substract(p1: string, p2: string, opt?: object): any;
export function substract(p1: number[], p2: number[], opt?: object): any;
export function similarity(w1: string, w2: string, options?: object): any;

export function train(
    trainFile: string,
    modelFile: string,
    options?: object,
    callback?: () => void
): void;
