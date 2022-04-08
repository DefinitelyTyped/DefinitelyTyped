// Type definitions for seedrandom 3.0
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
//                 Eugene Zaretskiy <https://github.com/EugeneZ>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {
    type State = object;

    interface Callback {
        (prng?: prng, shortseed?: string, global?: boolean, state?: State): prng;
    }

    interface Options {
        entropy?: boolean;
        global?: boolean;
        pass?: Callback;
        state?: boolean | State;
    }
}

interface prng {
    (): number;
    double(): number;
    int32(): number;
    quick(): number;
    state(): seedrandom.State;
}

interface seedrandom {
    (seed?: string, options?: seedrandom.Options, callback?: seedrandom.Callback): prng;
    alea(seed?: string, options?: seedrandom.Options): prng;
    Alea: new (seed?: string) => prng;
    tychei(seed?: string, options?: seedrandom.Options): prng;
    Tychei: new (seed?: string) => prng;
    xor128(seed?: string, options?: seedrandom.Options): prng;
    Xor128: new (seed?: string) => prng;
    xor4096(seed?: string, options?: seedrandom.Options): prng;
    Xor4096: new (seed?: string) => prng;
    xorshift7(seed?: string, options?: seedrandom.Options): prng;
    XorShift7: new (seed?: string) => prng;
    xorwow(seed?: string, options?: seedrandom.Options): prng;
    XorWow: new (seed?: string) => prng;
}

declare const seedrandom: seedrandom;

export = seedrandom;
