// Type definitions for kissfft-js 0.1
// Project: https://github.com/j-funk/kissfft-js#readme
// Definitions by: racerhere <https://github.com/racerhere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/kissfft-js

declare abstract class AbstractKissFFT {
    constructor(size: number);
    forward(input: number[]): number[];
    inverse(input: number[]): number[];
    dispose(): void;
}

export class FFT extends AbstractKissFFT {
}

export class FFTR extends AbstractKissFFT {
}
