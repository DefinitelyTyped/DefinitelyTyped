declare module 'prng' {
    type PRNGFunction = (() => number) & {
        quick: () => number;
        double: () => number;
        int32: () => number;
    };

    export type PRNGAlgorithm = (seed?: string) => PRNGFunction;

    export const prng_alea: PRNGAlgorithm;
    export const prng_arc4: PRNGAlgorithm;
    export const prng_tychei: PRNGAlgorithm;
    export const prng_xor128: PRNGAlgorithm;
    export const prng_xor4096: PRNGAlgorithm;
    export const prng_xorshift7: PRNGAlgorithm;
    export const prng_xorwow: PRNGAlgorithm;
}
