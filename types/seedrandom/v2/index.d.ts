// Type definitions for seedrandom 2.4.2
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>, Eugene Zaretskiy <https://github.com/EugeneZ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {

  export type State = {};

  interface prng {
    new (seed?: string, options?: seedRandomOptions, callback?: any): prng;
    (): number;
    quick(): number;
    int32(): number;
    double(): number;
    state(): State;
  }

  interface seedrandom_prng {
    (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback): prng;
    alea: (seed?: string, options?: seedRandomOptions) => prng;
    xor128: (seed?: string, options?: seedRandomOptions) => prng;
    tychei: (seed?: string, options?: seedRandomOptions) => prng;
    xorwow: (seed?: string, options?: seedRandomOptions) => prng;
    xor4096: (seed?: string, options?: seedRandomOptions) => prng;
    xorshift7: (seed?: string, options?: seedRandomOptions) => prng;
    quick: (seed?: string, options?: seedRandomOptions) => prng;
  }

  interface seedrandomCallback {
    (prng?: prng, shortseed?: string, global?: boolean, state?: State): prng;
  }

  interface seedRandomOptions {
    entropy?: boolean | undefined;
    'global'?: boolean | undefined;
    state?: boolean | State | undefined;
    pass?: seedrandomCallback | undefined;
  }
}

declare var seedrandom: seedrandom.seedrandom_prng;

export = seedrandom;
export as namespace seedrandom;
