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
        entropy?: boolean | undefined;
        global?: boolean | undefined;
        pass?: Callback | undefined;
        state?: boolean | State | undefined;
    }

    interface prng {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
        state(): State;
    }
}

interface seedrandom {
    (seed?: string, options?: seedrandom.Options, callback?: seedrandom.Callback): seedrandom.prng;
    alea(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    Alea: new (seed?: string) => seedrandom.prng;
    tychei(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    Tychei: new (seed?: string) => seedrandom.prng;
    xor128(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    Xor128: new (seed?: string) => seedrandom.prng;
    xor4096(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    Xor4096: new (seed?: string) => seedrandom.prng;
    xorshift7(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    XorShift7: new (seed?: string) => seedrandom.prng;
    xorwow(seed?: string, options?: seedrandom.Options): seedrandom.prng;
    XorWow: new (seed?: string) => seedrandom.prng;
}

declare const seedrandom: seedrandom;

export = seedrandom;
