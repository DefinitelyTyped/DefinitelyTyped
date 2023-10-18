/*
 * Usage:
 *  import * as seed from 'seed-random';
 */

export = SeedRandom;

declare function SeedRandom(seed?: string, options?: SeedRandom.Options): () => number;

declare namespace SeedRandom {
    interface Options {
        global?: boolean | undefined;
        entropy?: boolean | undefined;
    }

    function resetGlobal(): void;
}
