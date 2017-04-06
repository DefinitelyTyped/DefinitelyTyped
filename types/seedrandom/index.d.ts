// Type definitions for seedrandom 2.4.2
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {

  export type seedrandomStateType = boolean | (() => prng);

  interface prng {
    new (seed?: string, options?: seedRandomOptions, callback?: any): prng;
    (): number;
    quick(): number;
    int32(): number;
    double(): number;
    state(): () => prng;
  }

  interface seedrandom_prng {
    (seed?: string, options?: seedRandomOptions, callback?: any): prng;
    alea: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    xor128: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    tychei: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    xorwow: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    xor4096: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    xorshift7: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
    quick: (seed?: string, options?: seedRandomOptions, callback?: seedrandomCallback) => prng;
  }

  interface seedrandomCallback {
    (prng?: prng, shortseed?: string, global?: boolean, state?: seedrandomStateType): prng;
  }

  interface seedRandomOptions {
    entropy?: boolean;
    'global'?: boolean;
    state?: seedrandomStateType;
    pass?: seedrandomCallback;
  }
}

declare var seedrandom: seedrandom.seedrandom_prng;

export = seedrandom;
export as namespace seedrandom;
