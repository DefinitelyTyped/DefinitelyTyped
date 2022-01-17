// Type definitions for seedrandom 3.0
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
//                 Eugene Zaretskiy <https://github.com/EugeneZ>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {
    type State = object;

    interface Callback {
        (prng?: PseudorandomNumberGenerator, shortseed?: string, global?: boolean, state?: State): PseudorandomNumberGenerator;
    }

    interface Options {
        entropy?: boolean | undefined;
        global?: boolean | undefined;
        pass?: Callback | undefined;
        state?: boolean | State | undefined;
    }

    interface PseudorandomNumberGenerator {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
        state(): State;
    }
}

interface seedrandom {
    (seed?: string, options?: seedrandom.Options, callback?: seedrandom.Callback): seedrandom.PseudorandomNumberGenerator;
    alea(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    Alea: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
    tychei(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    Tychei: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
    xor128(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    Xor128: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
    xor4096(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    Xor4096: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
    xorshift7(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    XorShift7: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
    xorwow(seed?: string, options?: seedrandom.Options): seedrandom.PseudorandomNumberGenerator;
    XorWow: new (seed?: string) => seedrandom.PseudorandomNumberGenerator;
}

declare const seedrandom: seedrandom;

export = seedrandom;
