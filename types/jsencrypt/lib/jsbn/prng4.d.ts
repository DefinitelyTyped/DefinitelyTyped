export declare class Arcfour {
    constructor();
    init(key: number[]): void;
    next(): number;
    private i;
    private j;
    private S;
}
export declare function prng_newstate(): Arcfour;
export declare let rng_psize: number;
