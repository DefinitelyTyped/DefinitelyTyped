// Type definitions for seedrandom 3.0
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
//                 Eugene Zaretskiy <https://github.com/EugeneZ>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {
    type State = object;

    interface Callback {
        (prng?: PRNG, shortseed?: string, global?: boolean, state?: State): PRNG;
    }

    interface Options {
        entropy?: boolean | undefined;
        global?: boolean | undefined;
        pass?: Callback | undefined;
        state?: boolean | State | undefined;
    }

    interface PRNG {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
        state(): State;
    }
}

interface seedrandom {
    (seed?: string, options?: seedrandom.Options, callback?: seedrandom.Callback): seedrandom.PRNG;
    alea(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    Alea: new (seed?: string) => seedrandom.PRNG;
    tychei(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    Tychei: new (seed?: string) => seedrandom.PRNG;
    xor128(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    Xor128: new (seed?: string) => seedrandom.PRNG;
    xor4096(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    Xor4096: new (seed?: string) => seedrandom.PRNG;
    xorshift7(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    XorShift7: new (seed?: string) => seedrandom.PRNG;
    xorwow(seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    XorWow: new (seed?: string) => seedrandom.PRNG;
}

declare const seedrandom: seedrandom;

export = seedrandom;
