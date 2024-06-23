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
