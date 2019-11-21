// Type definitions for kissfft-js 0.1
// Project: https://github.com/j-funk/kissfft-js#readme
// Definitions by: racerhere <https://github.com/racerhere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/kissfft-js

export class FFT {
    constructor(size: number);
    forward(input: number[]): number[];
    inverse(input: number[]): number[];
    dispose(): void;
}

export class FFTR {
    constructor(size: number);
    forward(input: number[]): number[];
    inverse(input: number[]): number[];
    dispose(): void;
}
