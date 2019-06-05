// Type definitions for seed-random 2.2
// Project: https://github.com/ForbesLindesay/seed-random
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 * Usage:
 *  import * as seed from 'seed-random';
 */

export = SeedRandom;

declare function SeedRandom(seed?: string, options?: SeedRandom.Options): () => number;

declare namespace SeedRandom {
  interface Options {
    global?: boolean;
    entropy?: boolean;
  }

  function resetGlobal(): void;
}
